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
  emoji?: string;
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
  | 'turkish-to-english'
  | 'english-to-turkish'
  | 'fill-in-blank'
  | 'listen-and-choose'
  | 'typing'
  | 'sentence-build';

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

export interface QuizAnswer {
  wordId: string;
  word: string;
  correct: boolean;
  correctAnswer: string;
  turkishMeaning: string;
  questionType: QuestionType;
}
