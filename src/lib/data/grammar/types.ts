export type GrammarDifficulty = 'basic' | 'intermediate' | 'advanced';

export interface GrammarItem {
  id: string;
  rule: string;
  explanation: string;
  example: string;
  turkishMeaning: string;
  clbLevel: number;
  category: string;
  difficulty?: GrammarDifficulty;
  celpipContext?: string;        // How this appears in CELPIP exam
  commonMistake?: string;        // Common error learners make
  turkishExplanation?: string;   // Detailed Turkish grammar explanation
}

export interface GrammarTopic {
  id: string;
  title: string;
  description: string;
  clbLevel: number;
  category: string;
  icon: string;
  words: GrammarItem[];
  commonMistakes: string[];    // Common mistakes Turkish learners make with this topic
  writingTip: string;          // How to use this grammar rule in CELPIP writing
  speakingTip: string;         // How to use this grammar rule in CELPIP speaking
  celpipExample: string;       // Real CELPIP exam context example
}
