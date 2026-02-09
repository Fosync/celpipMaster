export interface GrammarItem {
  id: string;
  rule: string;
  explanation: string;
  example: string;
  turkishMeaning: string;
  clbLevel: number;
  category: string;
}

export interface GrammarTopic {
  id: string;
  title: string;
  description: string;
  clbLevel: number;
  category: string;
  icon: string;
  words: GrammarItem[];
}
