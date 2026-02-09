// ==========================================
// CelpipMaster - Core Type Definitions
// ==========================================

// User & Auth
export interface User {
  id: string;
  email: string;
  name: string;
  avatar_url?: string;
  level: number;
  xp: number;
  streak: number;
  created_at: string;
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
