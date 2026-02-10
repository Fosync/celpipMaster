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

  // Enhanced fields for pre-writing support
  usefulVocabulary: string[];     // Key vocabulary words for this task
  usefulPatterns: string[];       // Sentence patterns/templates
  usefulIdioms: string[];         // Relevant idioms
  structureTemplate: string[];    // Paragraph structure guide
  commonMistakes: string[];       // Common errors to avoid
}
