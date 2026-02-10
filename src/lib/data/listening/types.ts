export type ListeningFormat = 'monologue' | 'dialogue' | 'announcement';

export interface ListeningSegment {
  speaker: string;       // e.g., "Narrator", "Speaker 1", "Receptionist"
  text: string;
  voiceGender: 'male' | 'female';
}

export interface ListeningQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface KeyVocabItem {
  word: string;
  definition: string;
  turkish: string;
}

export interface ListeningScript {
  id: string;
  title: string;
  description: string;
  format: ListeningFormat;
  clbLevel: number;
  icon: string;
  timeLimit: number;         // seconds for answering
  segments: ListeningSegment[];
  questions: ListeningQuestion[];
  keyVocabulary?: KeyVocabItem[];
}
