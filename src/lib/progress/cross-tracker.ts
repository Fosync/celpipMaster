// ==========================================
// Cross-Module Progress Tracker
// Tracks word encounters across all modules
// and provides SRS-based review scheduling
// ==========================================

const STORAGE_KEY = 'celpipmaster_progress';
const MASTERY_KEY = 'celpipmaster_mastery';

// ─── Types ───

export type ModuleName =
  | 'vocabulary'
  | 'grammar'
  | 'reading'
  | 'writing'
  | 'speaking'
  | 'listening'
  | 'patterns'
  | 'idioms'
  | 'shadowing';

export interface VocabModuleProgress {
  learned: boolean;
  quizPassed: boolean;
  date: string | null;
}

export interface ReadingModuleProgress {
  encountered: boolean;
  passages: string[];
}

export interface WritingModuleProgress {
  used: boolean;
}

export interface SpeakingModuleProgress {
  used: boolean;
}

export interface ShadowingModuleProgress {
  practiced: boolean;
  accuracy: number;
}

export interface WordModules {
  vocabulary: VocabModuleProgress;
  reading: ReadingModuleProgress;
  writing: WritingModuleProgress;
  speaking: SpeakingModuleProgress;
  shadowing: ShadowingModuleProgress;
}

/** 0=new, 1=recognized, 2=practiced, 3=active use, 4=mastered */
export type MasteryLevel = 0 | 1 | 2 | 3 | 4;

export interface WordProgress {
  wordId: string;
  modules: WordModules;
  totalEncounters: number;
  masteryLevel: MasteryLevel;
  lastSeen: string;
  firstSeen: string;
  srsInterval: number; // days until next review
  srsNextReview: string; // ISO date
}

export interface ActivityEntry {
  id: string;
  module: ModuleName;
  action: string;
  detail: string;
  timestamp: string;
}

export interface ProgressStore {
  version: 1;
  words: Record<string, WordProgress>;
  activities: ActivityEntry[];
  moduleCompletions: Record<ModuleName, string[]>; // completed item IDs per module
}

export interface ModuleStats {
  module: ModuleName;
  label: string;
  icon: string;
  completedItems: number;
  totalItems: number;
  percentage: number;
}

export interface EncounterDetails {
  passageId?: string;
  accuracy?: number;
  quizPassed?: boolean;
}

// ─── Constants ───

const MODULE_TOTALS: Record<ModuleName, number> = {
  vocabulary: 35,
  grammar: 18,
  reading: 44,
  writing: 30,
  listening: 36,
  patterns: 8,
  idioms: 20,
  shadowing: 15,
  speaking: 8,
};

const MODULE_META: Record<ModuleName, { label: string; icon: string }> = {
  vocabulary: { label: 'Vocabulary', icon: '📚' },
  grammar: { label: 'Grammar', icon: '✏️' },
  reading: { label: 'Reading', icon: '📖' },
  writing: { label: 'Writing', icon: '✍️' },
  listening: { label: 'Listening', icon: '🎧' },
  patterns: { label: 'Patterns', icon: '🧩' },
  idioms: { label: 'Idioms', icon: '💬' },
  shadowing: { label: 'Shadowing', icon: '🔁' },
  speaking: { label: 'Speaking', icon: '🎤' },
};

// SRS intervals in days based on mastery level
const SRS_INTERVALS = [1, 3, 7, 14, 30];

// ─── Helpers ───

function today(): string {
  return new Date().toISOString().split('T')[0];
}

function emptyModules(): WordModules {
  return {
    vocabulary: { learned: false, quizPassed: false, date: null },
    reading: { encountered: false, passages: [] },
    writing: { used: false },
    speaking: { used: false },
    shadowing: { practiced: false, accuracy: 0 },
  };
}

function emptyStore(): ProgressStore {
  return {
    version: 1,
    words: {},
    activities: [],
    moduleCompletions: {
      vocabulary: [],
      grammar: [],
      reading: [],
      writing: [],
      listening: [],
      patterns: [],
      idioms: [],
      shadowing: [],
      speaking: [],
    },
  };
}

// ─── Storage ───

function loadStore(): ProgressStore {
  if (typeof window === 'undefined') return emptyStore();
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return emptyStore();
    const parsed = JSON.parse(raw) as ProgressStore;
    if (parsed.version !== 1) return emptyStore();
    return parsed;
  } catch {
    return emptyStore();
  }
}

function saveStore(store: ProgressStore): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(store));
}

function calculateMasteryLevel(modules: WordModules): MasteryLevel {
  const vocabLearned = modules.vocabulary.learned;
  const readEncountered = modules.reading.encountered;
  const writingUsed = modules.writing.used;
  const speakingUsed = modules.speaking.used;
  const shadowingPracticed = modules.shadowing.practiced;

  // 4 = mastered: used in vocabulary + at least 3 other skills
  const activeSkills = [readEncountered, writingUsed, speakingUsed, shadowingPracticed].filter(Boolean).length;
  if (vocabLearned && modules.vocabulary.quizPassed && activeSkills >= 3) return 4;

  // 3 = active use: vocabulary learned + used in writing or speaking
  if (vocabLearned && (writingUsed || speakingUsed)) return 3;

  // 2 = practiced: vocabulary learned + encountered in reading or shadowing
  if (vocabLearned && (readEncountered || shadowingPracticed)) return 2;

  // 1 = recognized: encountered in any module
  if (vocabLearned || readEncountered || shadowingPracticed) return 1;

  return 0;
}

function addDays(dateStr: string, days: number): string {
  const d = new Date(dateStr);
  d.setDate(d.getDate() + days);
  return d.toISOString().split('T')[0];
}

// ─── Public API ───

/**
 * Track a word encounter in a specific module.
 */
export function trackWordEncounter(
  wordId: string,
  module: ModuleName,
  details?: EncounterDetails
): void {
  const store = loadStore();
  const now = today();

  // Get or create word progress
  let wp = store.words[wordId];
  if (!wp) {
    wp = {
      wordId,
      modules: emptyModules(),
      totalEncounters: 0,
      masteryLevel: 0,
      lastSeen: now,
      firstSeen: now,
      srsInterval: SRS_INTERVALS[0],
      srsNextReview: addDays(now, SRS_INTERVALS[0]),
    };
  }

  wp.totalEncounters++;
  wp.lastSeen = now;

  // Update module-specific progress
  switch (module) {
    case 'vocabulary':
      wp.modules.vocabulary.learned = true;
      wp.modules.vocabulary.date = now;
      if (details?.quizPassed) {
        wp.modules.vocabulary.quizPassed = true;
      }
      break;
    case 'reading':
      wp.modules.reading.encountered = true;
      if (details?.passageId && !wp.modules.reading.passages.includes(details.passageId)) {
        wp.modules.reading.passages.push(details.passageId);
      }
      break;
    case 'writing':
      wp.modules.writing.used = true;
      break;
    case 'speaking':
      wp.modules.speaking.used = true;
      break;
    case 'shadowing':
      wp.modules.shadowing.practiced = true;
      if (details?.accuracy !== undefined && details.accuracy > wp.modules.shadowing.accuracy) {
        wp.modules.shadowing.accuracy = details.accuracy;
      }
      break;
    default:
      // grammar, listening, patterns, idioms - just count the encounter
      break;
  }

  // Recalculate mastery
  const oldLevel = wp.masteryLevel;
  wp.masteryLevel = calculateMasteryLevel(wp.modules);

  // Update SRS interval if mastery improved
  if (wp.masteryLevel > oldLevel) {
    wp.srsInterval = SRS_INTERVALS[Math.min(wp.masteryLevel, SRS_INTERVALS.length - 1)];
  }
  wp.srsNextReview = addDays(now, wp.srsInterval);

  store.words[wordId] = wp;
  saveStore(store);
}

/**
 * Get progress for a specific word.
 */
export function getWordProgress(wordId: string): WordProgress | null {
  const store = loadStore();
  return store.words[wordId] ?? null;
}

/**
 * Get words that are known (vocabulary learned) but not used in speaking or writing.
 */
export function getWeakWords(): WordProgress[] {
  const store = loadStore();
  return Object.values(store.words).filter(
    (wp) =>
      wp.modules.vocabulary.learned &&
      !wp.modules.writing.used &&
      !wp.modules.speaking.used
  );
}

/**
 * Get words due for SRS review today.
 */
export function getTodayReview(): WordProgress[] {
  const store = loadStore();
  const now = today();
  return Object.values(store.words)
    .filter((wp) => wp.srsNextReview <= now && wp.masteryLevel < 4)
    .sort((a, b) => a.srsNextReview.localeCompare(b.srsNextReview));
}

/**
 * Get progress stats for each module.
 */
export function getModuleStats(): ModuleStats[] {
  const store = loadStore();

  // Also read the existing mastery store for vocabulary/grammar set completion
  let masteryStore: { sets?: Record<string, { completedAt: string | null; stars: number }> } = {};
  if (typeof window !== 'undefined') {
    try {
      const raw = localStorage.getItem(MASTERY_KEY);
      if (raw) masteryStore = JSON.parse(raw);
    } catch {
      // ignore
    }
  }

  const sets = masteryStore.sets ?? {};

  const modules: ModuleName[] = [
    'vocabulary', 'grammar', 'reading', 'writing',
    'listening', 'patterns', 'idioms', 'shadowing', 'speaking',
  ];

  return modules.map((mod) => {
    const meta = MODULE_META[mod];
    const total = MODULE_TOTALS[mod];

    // Count completions from the existing mastery store (sets that have completedAt or stars > 0)
    let completed = store.moduleCompletions[mod]?.length ?? 0;

    // Also count from mastery store sets for modules that save there
    if (['vocabulary', 'grammar', 'idioms', 'patterns', 'reading', 'listening', 'writing'].includes(mod)) {
      const prefix =
        mod === 'vocabulary' ? 'clb' :
        mod === 'grammar' ? 'grammar' :
        mod === 'idioms' ? 'idioms' :
        mod === 'reading' ? 'reading' :
        mod === 'listening' ? 'listening' :
        mod === 'writing' ? 'writing' :
        'patterns';

      const masteryCompleted = Object.entries(sets).filter(
        ([id, result]) => id.startsWith(prefix) && (result.completedAt || result.stars > 0)
      ).length;

      completed = Math.max(completed, masteryCompleted);
    }

    const percentage = total > 0 ? Math.min(100, Math.round((completed / total) * 100)) : 0;

    return {
      module: mod,
      label: meta.label,
      icon: meta.icon,
      completedItems: completed,
      totalItems: total,
      percentage,
    };
  });
}

/**
 * Mark a module item as completed.
 */
export function completeModuleItem(module: ModuleName, itemId: string): void {
  const store = loadStore();
  if (!store.moduleCompletions[module]) {
    store.moduleCompletions[module] = [];
  }
  if (!store.moduleCompletions[module].includes(itemId)) {
    store.moduleCompletions[module].push(itemId);
  }
  saveStore(store);
}

/**
 * Log an activity entry.
 */
export function logActivity(module: ModuleName, action: string, detail: string): void {
  const store = loadStore();
  const entry: ActivityEntry = {
    id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    module,
    action,
    detail,
    timestamp: new Date().toISOString(),
  };
  store.activities.unshift(entry);
  // Keep only last 50 activities
  if (store.activities.length > 50) {
    store.activities = store.activities.slice(0, 50);
  }
  saveStore(store);
}

/**
 * Get the most recent activities.
 */
export function getRecentActivities(count: number = 5): ActivityEntry[] {
  const store = loadStore();
  return store.activities.slice(0, count);
}

/**
 * Get total learned words count and mastery distribution.
 */
export function getVocabSummary(): {
  total: number;
  byLevel: Record<MasteryLevel, number>;
} {
  const store = loadStore();
  const words = Object.values(store.words);
  const byLevel: Record<MasteryLevel, number> = { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0 };
  for (const w of words) {
    byLevel[w.masteryLevel]++;
  }
  return { total: words.length, byLevel };
}
