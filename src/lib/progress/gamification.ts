// ==========================================
// Gamification System
// XP, Levels, Badges, Streaks
// ==========================================

const GAME_STORAGE_KEY = 'celpipmaster_gamification';

// ─── XP Rewards ───

export const XP_REWARDS = {
  WORD_LEARNED: 10,
  QUIZ_COMPLETE: 25,
  READING_COMPLETE: 30,
  WRITING_COMPLETE: 40,
  SPEAKING_PRACTICE: 50,
  SHADOWING_SET: 20,
  DAILY_STREAK_BONUS: 15,
  PERFECT_SCORE: 100,
} as const;

// ─── Level System ───

export interface LevelInfo {
  level: number;
  name: string;
  minXP: number;
  maxXP: number;
  currentXP: number;
  progressPercent: number;
  xpToNext: number;
}

const LEVELS: { level: number; name: string; minXP: number }[] = [
  { level: 1, name: 'Beginner', minXP: 0 },
  { level: 2, name: 'Elementary', minXP: 101 },
  { level: 3, name: 'Pre-Intermediate', minXP: 301 },
  { level: 4, name: 'Intermediate', minXP: 601 },
  { level: 5, name: 'Upper-Intermediate', minXP: 1001 },
  { level: 6, name: 'Advanced', minXP: 1501 },
  { level: 7, name: 'Expert', minXP: 2501 },
];

// ─── Badge System ───

export interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
  unlockedAt: string | null;
}

export const BADGE_DEFINITIONS: { id: string; name: string; description: string; icon: string }[] = [
  { id: 'first_steps', name: 'First Steps', description: 'Complete your first lesson', icon: '👣' },
  { id: 'word_collector', name: 'Word Collector', description: 'Learn 50 words', icon: '📦' },
  { id: 'word_master', name: 'Word Master', description: 'Learn 200 words', icon: '👑' },
  { id: 'grammar_guru', name: 'Grammar Guru', description: 'Complete 10 grammar topics', icon: '🧠' },
  { id: 'bookworm', name: 'Bookworm', description: 'Finish 10 reading passages', icon: '📚' },
  { id: 'pen_pal', name: 'Pen Pal', description: 'Complete 5 writing tasks', icon: '✉️' },
  { id: 'chatterbox', name: 'Chatterbox', description: 'Do 5 speaking practices', icon: '💬' },
  { id: 'shadow_master', name: 'Shadow Master', description: 'Complete 10 shadowing sets', icon: '🎭' },
  { id: 'streak_star', name: 'Streak Star', description: 'Practice 7 days in a row', icon: '⭐' },
  { id: 'streak_legend', name: 'Streak Legend', description: 'Practice 30 days in a row', icon: '🏆' },
  { id: 'perfectionist', name: 'Perfectionist', description: 'Score 100% on a quiz', icon: '💯' },
  { id: 'polyglot', name: 'Polyglot', description: 'Learn 100 idioms', icon: '🌍' },
  { id: 'speed_reader', name: 'Speed Reader', description: 'Finish a reading before time runs out', icon: '⚡' },
  { id: 'confident_speaker', name: 'Confident Speaker', description: 'Get CLB 7+ in speaking', icon: '🎤' },
  { id: 'celpip_ready', name: 'CELPIP Ready', description: 'Score CLB 7+ on placement test', icon: '🎓' },
];

// ─── Store Types ───

export interface GameStore {
  version: 1;
  totalXP: number;
  xpHistory: { amount: number; reason: string; timestamp: string }[];
  badges: Record<string, string | null>; // badgeId -> unlockDate or null
  streakDays: number;
  longestStreak: number;
  lastActiveDate: string | null;
  stats: {
    wordsLearned: number;
    quizzesCompleted: number;
    readingsCompleted: number;
    writingsCompleted: number;
    speakingPractices: number;
    shadowingSets: number;
    perfectScores: number;
    lessonsCompleted: number;
    idiomsLearned: number;
    grammarTopics: number;
  };
}

export interface XPEvent {
  amount: number;
  reason: string;
  levelUp?: LevelInfo;
  newBadges?: Badge[];
}

export interface GameStats {
  totalXP: number;
  level: LevelInfo;
  badges: Badge[];
  unlockedBadges: Badge[];
  streakDays: number;
  longestStreak: number;
  stats: GameStore['stats'];
  recentXP: { amount: number; reason: string; timestamp: string }[];
}

// ─── Storage Helpers ───

function loadGameStore(): GameStore {
  if (typeof window === 'undefined') return emptyStore();
  try {
    const raw = localStorage.getItem(GAME_STORAGE_KEY);
    if (!raw) return emptyStore();
    const parsed = JSON.parse(raw) as GameStore;
    if (parsed.version !== 1) return emptyStore();
    return parsed;
  } catch {
    return emptyStore();
  }
}

function saveGameStore(store: GameStore): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem(GAME_STORAGE_KEY, JSON.stringify(store));
}

function emptyStore(): GameStore {
  const badges: Record<string, string | null> = {};
  for (const b of BADGE_DEFINITIONS) {
    badges[b.id] = null;
  }
  return {
    version: 1,
    totalXP: 0,
    xpHistory: [],
    badges,
    streakDays: 0,
    longestStreak: 0,
    lastActiveDate: null,
    stats: {
      wordsLearned: 0,
      quizzesCompleted: 0,
      readingsCompleted: 0,
      writingsCompleted: 0,
      speakingPractices: 0,
      shadowingSets: 0,
      perfectScores: 0,
      lessonsCompleted: 0,
      idiomsLearned: 0,
      grammarTopics: 0,
    },
  };
}

function today(): string {
  return new Date().toISOString().split('T')[0];
}

// ─── Level Calculation ───

export function getLevelInfo(totalXP?: number): LevelInfo {
  const xp = totalXP ?? loadGameStore().totalXP;

  let currentLevel = LEVELS[0];
  for (const lvl of LEVELS) {
    if (xp >= lvl.minXP) currentLevel = lvl;
  }

  const nextLevel = LEVELS.find((l) => l.level === currentLevel.level + 1);
  const maxXP = nextLevel ? nextLevel.minXP - 1 : Infinity;
  const range = nextLevel ? nextLevel.minXP - currentLevel.minXP : 1;
  const progress = nextLevel ? xp - currentLevel.minXP : range;
  const progressPercent = nextLevel ? Math.min(100, Math.round((progress / range) * 100)) : 100;
  const xpToNext = nextLevel ? nextLevel.minXP - xp : 0;

  return {
    level: currentLevel.level,
    name: currentLevel.name,
    minXP: currentLevel.minXP,
    maxXP,
    currentXP: xp,
    progressPercent,
    xpToNext,
  };
}

// ─── XP Award ───

export function awardXP(amount: number, reason: string): XPEvent {
  const store = loadGameStore();
  const oldLevel = getLevelInfo(store.totalXP);

  store.totalXP += amount;
  store.xpHistory.unshift({ amount, reason, timestamp: new Date().toISOString() });
  if (store.xpHistory.length > 50) store.xpHistory = store.xpHistory.slice(0, 50);

  const newLevel = getLevelInfo(store.totalXP);
  const levelUp = newLevel.level > oldLevel.level ? newLevel : undefined;

  // Check for new badges
  const newBadges = checkAllBadges(store);

  saveGameStore(store);

  return { amount, reason, levelUp, newBadges: newBadges.length > 0 ? newBadges : undefined };
}

// ─── Stat Incrementers ───

export function incrementStat(stat: keyof GameStore['stats'], count: number = 1): void {
  const store = loadGameStore();
  store.stats[stat] += count;
  saveGameStore(store);
}

export function recordWordLearned(): XPEvent {
  const store = loadGameStore();
  store.stats.wordsLearned++;
  store.stats.lessonsCompleted++;
  saveGameStore(store);
  return awardXP(XP_REWARDS.WORD_LEARNED, 'Learned a new word');
}

export function recordQuizComplete(isPerfect: boolean): XPEvent {
  const store = loadGameStore();
  store.stats.quizzesCompleted++;
  store.stats.lessonsCompleted++;
  if (isPerfect) store.stats.perfectScores++;
  saveGameStore(store);
  const event = awardXP(XP_REWARDS.QUIZ_COMPLETE, 'Completed a quiz');
  if (isPerfect) {
    const bonus = awardXP(XP_REWARDS.PERFECT_SCORE, 'Perfect score bonus!');
    event.amount += bonus.amount;
    if (bonus.levelUp) event.levelUp = bonus.levelUp;
    if (bonus.newBadges) event.newBadges = [...(event.newBadges || []), ...bonus.newBadges];
  }
  return event;
}

export function recordReadingComplete(): XPEvent {
  const store = loadGameStore();
  store.stats.readingsCompleted++;
  store.stats.lessonsCompleted++;
  saveGameStore(store);
  return awardXP(XP_REWARDS.READING_COMPLETE, 'Finished a reading passage');
}

export function recordWritingComplete(): XPEvent {
  const store = loadGameStore();
  store.stats.writingsCompleted++;
  store.stats.lessonsCompleted++;
  saveGameStore(store);
  return awardXP(XP_REWARDS.WRITING_COMPLETE, 'Completed a writing task');
}

export function recordSpeakingPractice(): XPEvent {
  const store = loadGameStore();
  store.stats.speakingPractices++;
  store.stats.lessonsCompleted++;
  saveGameStore(store);
  return awardXP(XP_REWARDS.SPEAKING_PRACTICE, 'Speaking practice');
}

export function recordShadowingComplete(): XPEvent {
  const store = loadGameStore();
  store.stats.shadowingSets++;
  store.stats.lessonsCompleted++;
  saveGameStore(store);
  return awardXP(XP_REWARDS.SHADOWING_SET, 'Completed shadowing set');
}

export function recordGrammarTopic(): void {
  const store = loadGameStore();
  store.stats.grammarTopics++;
  saveGameStore(store);
}

export function recordIdiomLearned(): void {
  const store = loadGameStore();
  store.stats.idiomsLearned++;
  saveGameStore(store);
}

// ─── Streak ───

export function updateStreak(): { streakDays: number; longestStreak: number; bonusXP?: XPEvent } {
  const store = loadGameStore();
  const now = today();

  if (store.lastActiveDate === now) {
    // Already active today
    return { streakDays: store.streakDays, longestStreak: store.longestStreak };
  }

  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  const yesterdayStr = yesterday.toISOString().split('T')[0];

  if (store.lastActiveDate === yesterdayStr) {
    // Continuing streak
    store.streakDays++;
  } else if (store.lastActiveDate && store.lastActiveDate < yesterdayStr) {
    // Streak broken
    store.streakDays = 1;
  } else {
    // First activity
    store.streakDays = 1;
  }

  if (store.streakDays > store.longestStreak) {
    store.longestStreak = store.streakDays;
  }

  store.lastActiveDate = now;
  saveGameStore(store);

  // Award streak bonus
  const bonusXP = awardXP(XP_REWARDS.DAILY_STREAK_BONUS, `Day ${store.streakDays} streak bonus`);

  return { streakDays: store.streakDays, longestStreak: store.longestStreak, bonusXP };
}

// ─── Badge Checking ───

function checkAllBadges(store: GameStore): Badge[] {
  const newBadges: Badge[] = [];

  const checks: { id: string; condition: boolean }[] = [
    { id: 'first_steps', condition: store.stats.lessonsCompleted >= 1 },
    { id: 'word_collector', condition: store.stats.wordsLearned >= 50 },
    { id: 'word_master', condition: store.stats.wordsLearned >= 200 },
    { id: 'grammar_guru', condition: store.stats.grammarTopics >= 10 },
    { id: 'bookworm', condition: store.stats.readingsCompleted >= 10 },
    { id: 'pen_pal', condition: store.stats.writingsCompleted >= 5 },
    { id: 'chatterbox', condition: store.stats.speakingPractices >= 5 },
    { id: 'shadow_master', condition: store.stats.shadowingSets >= 10 },
    { id: 'streak_star', condition: store.streakDays >= 7 },
    { id: 'streak_legend', condition: store.streakDays >= 30 },
    { id: 'perfectionist', condition: store.stats.perfectScores >= 1 },
    { id: 'polyglot', condition: store.stats.idiomsLearned >= 100 },
  ];

  for (const check of checks) {
    if (check.condition && !store.badges[check.id]) {
      store.badges[check.id] = new Date().toISOString();
      const def = BADGE_DEFINITIONS.find((b) => b.id === check.id);
      if (def) {
        newBadges.push({ ...def, unlockedAt: store.badges[check.id] });
      }
    }
  }

  // External badges (checked via specific functions)
  // speed_reader, confident_speaker, celpip_ready are awarded directly

  return newBadges;
}

export function checkBadge(badgeId: string): boolean {
  const store = loadGameStore();
  return store.badges[badgeId] !== null && store.badges[badgeId] !== undefined;
}

export function unlockBadge(badgeId: string): Badge | null {
  const store = loadGameStore();
  if (store.badges[badgeId]) return null; // Already unlocked

  store.badges[badgeId] = new Date().toISOString();
  saveGameStore(store);

  const def = BADGE_DEFINITIONS.find((b) => b.id === badgeId);
  if (!def) return null;
  return { ...def, unlockedAt: store.badges[badgeId] };
}

// ─── Get All Stats ───

export function getGameStats(): GameStats {
  const store = loadGameStore();
  const level = getLevelInfo(store.totalXP);

  const allBadges: Badge[] = BADGE_DEFINITIONS.map((def) => ({
    ...def,
    unlockedAt: store.badges[def.id] ?? null,
  }));

  const unlockedBadges = allBadges.filter((b) => b.unlockedAt !== null);

  return {
    totalXP: store.totalXP,
    level,
    badges: allBadges,
    unlockedBadges,
    streakDays: store.streakDays,
    longestStreak: store.longestStreak,
    stats: store.stats,
    recentXP: store.xpHistory.slice(0, 10),
  };
}
