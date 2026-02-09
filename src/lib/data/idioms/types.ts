export interface IdiomWord {
  id: string;
  idiom: string;
  meaning: string;
  example: string;
  turkishMeaning: string;
  clbLevel: number;
  category: string;
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
