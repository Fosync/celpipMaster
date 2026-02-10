export interface IdiomContext {
  scenario: string;    // Mini story/dialogue showing the idiom in context
  question: string;    // "What does X mean in this context?"
  options: string[];   // 4 options
  correctIndex: number;
}

export interface IdiomWord {
  id: string;
  idiom: string;
  meaning: string;
  example: string;
  turkishMeaning: string;
  clbLevel: number;
  category: string;

  // Enhanced fields for 5-phase learning
  whenToUse: string;           // When to use this idiom
  contexts: IdiomContext[];     // 3 context scenarios for Phase 2
  collocations: string[];      // Common word pairings
  similarIdioms: string[];     // Related idiom IDs
  oppositeIdioms: string[];    // Opposite meaning idiom IDs
}

export interface IdiomSet {
  id: string;
  title: string;
  description: string;
  clbLevel: number;
  category: string;
  icon: string;
  words: IdiomWord[];
}
