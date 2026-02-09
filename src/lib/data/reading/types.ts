export interface ReadingQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export type PassageType = 'correspondence' | 'diagram' | 'information' | 'opinion';

export interface ReadingPassage {
  id: string;
  title: string;
  description: string;
  passageType: PassageType;
  clbLevel: number;
  icon: string;
  timeLimit: number; // seconds
  passage: string;
  questions: ReadingQuestion[];
}
