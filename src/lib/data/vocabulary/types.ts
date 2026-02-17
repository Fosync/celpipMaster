export interface VocabWord {
  id: string;
  word: string;
  definition: string;
  example: string;
  turkishMeaning: string;
  partOfSpeech: 'noun' | 'verb' | 'adjective' | 'adverb' | 'preposition' | 'phrase' | 'interjection';
  clbLevel: number;
  category: string;
  emoji?: string;
  synonyms?: string[];
}

export interface VocabSet {
  id: string;
  title: string;
  description: string;
  clbLevel: number;
  category: string;
  icon: string;
  words: VocabWord[];
}
