// ==========================================
// CelpipMaster - Core Type Definitions
// ==========================================

export type {
  LearningItem,
  LearningSet,
  QuestionType,
  MasteryStatus,
  WordMastery,
  SetResult,
  MasteryStore,
  QueueEntry,
  QuizAnswer,
} from './learning';

// User Profile (matches public.profiles table)
export interface Profile {
  id: string;
  full_name: string | null;
  avatar_url: string | null;
  current_clb_level: number | null;
  target_clb_level: number | null;
  native_language: string | null;
  streak_days: number | null;
  longest_streak: number | null;
  total_xp: number | null;
  daily_xp_goal: number | null;
  last_active_date: string | null;
  placement_completed: boolean | null;
  onboarding_completed: boolean | null;
  subscription_tier: 'free' | 'pro' | 'lifetime' | null;
  created_at: string | null;
  updated_at: string | null;
}

// Auth
export interface AuthActionResult {
  error?: string;
  success?: boolean;
}

// Learning System
export type SkillType = 'vocabulary' | 'grammar' | 'patterns' | 'reading';
export type CELPIPLevel = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export interface Lesson {
  id: string;
  skill_type: SkillType;
  title: string;
  description: string;
  order: number;
  xp_reward: number;
  is_locked: boolean;
  is_completed: boolean;
}

export interface Question {
  id: string;
  type: 'multiple_choice' | 'fill_blank' | 'matching' | 'ordering' | 'free_text';
  prompt: string;
  options?: string[];
  correct_answer: string;
  explanation?: string;
}

// Spaced Repetition
export interface SRSCard {
  id: string;
  user_id: string;
  content: string;
  interval: number;
  ease_factor: number;
  next_review: string;
  repetitions: number;
}

// Exam Simulation
export type ExamSection = 'listening' | 'reading' | 'writing' | 'speaking';

export interface ExamSession {
  id: string;
  user_id: string;
  section: ExamSection;
  started_at: string;
  completed_at?: string;
  score?: number;
  celpip_level?: CELPIPLevel;
}

// Progress & Gamification
export interface DailyProgress {
  date: string;
  xp_earned: number;
  lessons_completed: number;
  time_spent_minutes: number;
  streak_maintained: boolean;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  unlocked_at?: string;
}
