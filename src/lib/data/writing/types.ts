export type WritingTaskType = 'email' | 'survey';

export interface WritingPrompt {
  id: string;
  title: string;
  description: string;
  taskType: WritingTaskType;
  clbLevel: number;
  icon: string;
  timeLimit: number; // seconds
  minWords: number;
  maxWords: number;
  scenario: string;
  instructions: string[];
  sampleResponse?: string;
}
