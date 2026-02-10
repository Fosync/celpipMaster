export interface ShadowingSentence {
  id: string;
  text: string;
  turkishMeaning: string;
  speed: 'slow' | 'normal' | 'fast';
  speaker: 'ai' | 'user';
}

export interface ShadowingSet {
  id: string;
  title: string;
  description: string;
  clbLevel: number;
  category: string;
  icon: string;
  context: string;
  sentences: ShadowingSentence[];
}
