// ==========================================
// AI Study Coach - Recommendation Engine
// Rule-based recommendations from localStorage
// progress data. No AI needed - pure logic.
// ==========================================

import { getGameStats } from '@/lib/progress/gamification';
import { getModuleStats, getVocabSummary } from '@/lib/progress/cross-tracker';
import type { ModuleStats } from '@/lib/progress/cross-tracker';
import type { GameStats } from '@/lib/progress/gamification';

// ─── Types ───

export interface Recommendation {
  type: 'daily_plan' | 'weak_area' | 'motivation' | 'next_step' | 'celpip_tip';
  title: string;
  message: string;
  action?: { label: string; href: string };
  priority: number; // 1-10
}

// ─── CELPIP Tips ───

const CELPIP_TIPS: { title: string; message: string }[] = [
  {
    title: 'Time Management in Reading',
    message:
      'In the CELPIP Reading section, you have about 10 minutes per passage. Skim for main ideas first, then read questions before re-reading for details.',
  },
  {
    title: 'Writing Task Structure',
    message:
      'For CELPIP Writing Task 1 (email), always include a greeting, 3 clear paragraphs addressing all bullet points, and a closing. Aim for 150-200 words.',
  },
  {
    title: 'Listening Strategy',
    message:
      'In the Listening section, read the questions before the audio plays. Focus on keywords and take brief notes. You only hear each recording once!',
  },
  {
    title: 'Speaking Fluency',
    message:
      'For CELPIP Speaking, practice speaking for the full time allowed. Pausing briefly to think is fine, but long silences hurt your score. Use filler phrases like "That reminds me..." or "Another point is...".',
  },
  {
    title: 'Vocabulary Range',
    message:
      'CELPIP rewards vocabulary variety. Instead of saying "good," try "beneficial," "advantageous," or "favorable." Synonyms show lexical range and boost your score.',
  },
  {
    title: 'Email Tone Matters',
    message:
      'CELPIP Writing emails require the correct tone. Formal for workplace/professional, semi-formal for acquaintances, and informal for close friends. Matching the tone is worth significant marks.',
  },
  {
    title: 'Speaking Task Prep',
    message:
      'In Speaking Tasks 1-2, you describe a situation or give advice. Use the preparation time (30 seconds) to plan 3 key points. Structure: intro sentence, 3 points, concluding thought.',
  },
  {
    title: 'Reading Question Types',
    message:
      'CELPIP Reading has main idea, detail, inference, and vocabulary questions. For vocabulary-in-context questions, re-read the sentence and try replacing the word with each answer choice.',
  },
  {
    title: 'Coherence in Writing',
    message:
      'Use transition words like "However," "Furthermore," "In addition," and "As a result" to connect your ideas. This improves coherence, which is a key scoring criterion.',
  },
  {
    title: 'Practice Under Timed Conditions',
    message:
      'Always practice with a timer. The CELPIP exam is strictly timed, and managing your time is crucial. Simulate real test conditions as often as possible.',
  },
];

// ─── Module Href Map ───

const MODULE_HREF: Record<string, string> = {
  vocabulary: '/learn/vocabulary',
  grammar: '/learn/grammar',
  reading: '/learn/reading',
  writing: '/learn/writing',
  listening: '/learn/listening',
  patterns: '/learn/patterns',
  idioms: '/learn/idioms',
  shadowing: '/learn/shadowing',
  speaking: '/speaking',
};

// ─── Helper: safe stats loading ───

function safeGetGameStats(): GameStats | null {
  if (typeof window === 'undefined') return null;
  try {
    return getGameStats();
  } catch {
    return null;
  }
}

function safeGetModuleStats(): ModuleStats[] {
  if (typeof window === 'undefined') return [];
  try {
    return getModuleStats();
  } catch {
    return [];
  }
}

// ─── getDailyPlan ───

export function getDailyPlan(): Recommendation[] {
  const modules = safeGetModuleStats();
  const gameStats = safeGetGameStats();

  if (modules.length === 0) return [];

  // Sort modules by percentage (lowest first) to find what needs work
  const sorted = [...modules].sort((a, b) => a.percentage - b.percentage);

  const plan: Recommendation[] = [];

  // Suggest the 3-4 modules with lowest completion
  const toSuggest = sorted.slice(0, 4);

  for (let i = 0; i < toSuggest.length; i++) {
    const mod = toSuggest[i];
    const href = MODULE_HREF[mod.module] || '/dashboard';

    let message: string;
    if (mod.percentage === 0) {
      message = `You haven't started ${mod.label} yet. Begin today to make progress across all skills!`;
    } else if (mod.percentage < 25) {
      message = `You're at ${mod.percentage}% in ${mod.label} (${mod.completedItems}/${mod.totalItems}). A quick session can boost your progress.`;
    } else {
      message = `Continue ${mod.label} - you're at ${mod.percentage}% (${mod.completedItems}/${mod.totalItems}). Keep going!`;
    }

    plan.push({
      type: 'daily_plan',
      title: `${mod.icon} ${mod.label}`,
      message,
      action: { label: `Study ${mod.label}`, href },
      priority: 8 - i, // Higher priority for lower completion
    });
  }

  // If user hasn't been active today, add a streak reminder
  if (gameStats && gameStats.streakDays > 0) {
    plan.push({
      type: 'daily_plan',
      title: 'Keep Your Streak!',
      message: `You have a ${gameStats.streakDays}-day streak going. Complete at least one lesson today to keep it alive!`,
      priority: 9,
    });
  }

  return plan;
}

// ─── getWeakAreas ───

export function getWeakAreas(): Recommendation[] {
  const modules = safeGetModuleStats();
  const vocabSummary = typeof window !== 'undefined' ? getVocabSummary() : null;

  const weak: Recommendation[] = [];

  // Find modules with <30% completion
  for (const mod of modules) {
    if (mod.percentage < 30) {
      const href = MODULE_HREF[mod.module] || '/dashboard';
      weak.push({
        type: 'weak_area',
        title: `${mod.icon} ${mod.label} Needs Work`,
        message:
          mod.percentage === 0
            ? `${mod.label} is untouched. This is an important area for CELPIP - start building this skill!`
            : `${mod.label} is only at ${mod.percentage}%. Spending more time here will significantly improve your overall score.`,
        action: { label: `Practice ${mod.label}`, href },
        priority: mod.percentage === 0 ? 7 : 6,
      });
    }
  }

  // Check vocab mastery distribution
  if (vocabSummary && vocabSummary.total > 0) {
    const masteredPercent = Math.round(
      ((vocabSummary.byLevel[3] + vocabSummary.byLevel[4]) / vocabSummary.total) * 100
    );
    if (masteredPercent < 20 && vocabSummary.total >= 10) {
      weak.push({
        type: 'weak_area',
        title: 'Low Vocabulary Mastery',
        message: `Only ${masteredPercent}% of your ${vocabSummary.total} learned words are at active-use or mastered level. Try using words in writing and speaking to deepen mastery.`,
        action: { label: 'Practice Speaking', href: '/speaking' },
        priority: 5,
      });
    }
  }

  return weak;
}

// ─── getMotivation ───

export function getMotivation(): Recommendation {
  const gameStats = safeGetGameStats();

  if (!gameStats) {
    return {
      type: 'motivation',
      title: 'Welcome!',
      message:
        'Start your CELPIP preparation journey today. Every lesson brings you closer to your target score!',
      priority: 3,
    };
  }

  const { totalXP, level, streakDays, unlockedBadges, stats } = gameStats;

  // Streak-based motivation
  if (streakDays >= 30) {
    return {
      type: 'motivation',
      title: 'Incredible Dedication!',
      message: `${streakDays} days in a row! You're showing legendary commitment. At this rate, you'll ace the CELPIP exam. Keep this momentum!`,
      priority: 4,
    };
  }

  if (streakDays >= 7) {
    return {
      type: 'motivation',
      title: 'Amazing Streak!',
      message: `${streakDays} days straight - you're building a powerful study habit! Consistency is the key to CELPIP success.`,
      priority: 4,
    };
  }

  // XP-based motivation
  if (totalXP >= 1000) {
    return {
      type: 'motivation',
      title: `Level ${level.level}: ${level.name}`,
      message: `You've earned ${totalXP} XP and unlocked ${unlockedBadges.length} badge${unlockedBadges.length !== 1 ? 's' : ''}! You're making serious progress toward CELPIP mastery.`,
      priority: 4,
    };
  }

  if (totalXP >= 100) {
    return {
      type: 'motivation',
      title: 'Great Start!',
      message: `You've earned ${totalXP} XP so far. You've completed ${stats.lessonsCompleted} lesson${stats.lessonsCompleted !== 1 ? 's' : ''} - keep pushing forward!`,
      priority: 3,
    };
  }

  // New user
  return {
    type: 'motivation',
    title: 'Welcome to CelpipMaster!',
    message:
      'You\'re taking the first step toward CELPIP success. Start with vocabulary or reading to build a strong foundation.',
    action: { label: 'Start Learning', href: '/learn/vocabulary' },
    priority: 3,
  };
}

// ─── getNextStep ───

export function getNextStep(): Recommendation {
  const modules = safeGetModuleStats();

  if (modules.length === 0) {
    return {
      type: 'next_step',
      title: 'Begin Your Journey',
      message: 'Start with Vocabulary to build a strong foundation for all CELPIP sections.',
      action: { label: 'Start Vocabulary', href: '/learn/vocabulary' },
      priority: 7,
    };
  }

  // Find the module with the most progress (but not 100%)
  const inProgress = modules
    .filter((m) => m.percentage > 0 && m.percentage < 100)
    .sort((a, b) => b.percentage - a.percentage);

  if (inProgress.length > 0) {
    const best = inProgress[0];
    const href = MODULE_HREF[best.module] || '/dashboard';
    return {
      type: 'next_step',
      title: `Continue ${best.label}`,
      message: `You're ${best.percentage}% through ${best.label} (${best.completedItems}/${best.totalItems}). You're on a roll - keep going to finish this module!`,
      action: { label: `Continue ${best.label}`, href },
      priority: 8,
    };
  }

  // If everything is either 0% or 100%, suggest starting something new
  const notStarted = modules.filter((m) => m.percentage === 0);
  if (notStarted.length > 0) {
    const next = notStarted[0];
    const href = MODULE_HREF[next.module] || '/dashboard';
    return {
      type: 'next_step',
      title: `Try ${next.label}`,
      message: `You haven't explored ${next.label} yet. Starting this module will help you prepare for all CELPIP sections.`,
      action: { label: `Start ${next.label}`, href },
      priority: 6,
    };
  }

  // Everything is 100% - congratulations
  return {
    type: 'next_step',
    title: 'All Modules Complete!',
    message:
      'Amazing work! You\'ve completed all learning modules. Consider taking a mock exam to test your readiness.',
    action: { label: 'Take Mock Exam', href: '/exam' },
    priority: 9,
  };
}

// ─── getCelpipTip ───

export function getCelpipTip(): Recommendation {
  const tip = CELPIP_TIPS[Math.floor(Math.random() * CELPIP_TIPS.length)];
  return {
    type: 'celpip_tip',
    title: tip.title,
    message: tip.message,
    priority: 2,
  };
}

// ─── getAllRecommendations ───

export function getAllRecommendations(): Recommendation[] {
  const all: Recommendation[] = [];

  // Collect from all sources
  const dailyPlan = getDailyPlan();
  const weakAreas = getWeakAreas();
  const motivation = getMotivation();
  const nextStep = getNextStep();
  const celpipTip = getCelpipTip();

  all.push(...dailyPlan);
  all.push(...weakAreas);
  all.push(motivation);
  all.push(nextStep);
  all.push(celpipTip);

  // Deduplicate by title (keep highest priority)
  const seen = new Map<string, Recommendation>();
  for (const rec of all) {
    const existing = seen.get(rec.title);
    if (!existing || rec.priority > existing.priority) {
      seen.set(rec.title, rec);
    }
  }

  // Sort by priority (highest first) and return top 5
  const deduped = Array.from(seen.values());
  deduped.sort((a, b) => b.priority - a.priority);

  return deduped.slice(0, 5);
}
