// ==========================================
// Learning System Types
// ==========================================

export interface LearningItem {
  id: string;
  term: string;
  definition: string;
  example: string;
  turkishMeaning: string;
  partOfSpeech?: string;
  clbLevel: number;
  category: string;
}

export interface LearningSet {
  id: string;
  title: string;
  description: string;
  clbLevel: number;
  category: string;
  icon: string;
  items: LearningItem[];
}

export type QuestionType =
  | 'english-to-turkish'
  | 'turkish-to-english'
  | 'definition-match'
  | 'fill-blank'
  | 'listen-spell';

export type MasteryStatus = 'new' | 'learning' | 'learned' | 'mastered';

export interface WordMastery {
  status: MasteryStatus;
  consecutiveCorrect: number;
  lastCorrectDate: string | null;
  totalAttempts: number;
  totalCorrect: number;
}

export interface SetResult {
  stars: 0 | 1 | 2 | 3;
  bestTestScore: number;
  completedAt: string | null;
  attemptCount: number;
}

export interface MasteryStore {
  version: 1;
  words: Record<string, WordMastery>;
  sets: Record<string, SetResult>;
}

export interface QueueEntry {
  item: LearningItem;
  questionType: QuestionType;
}
