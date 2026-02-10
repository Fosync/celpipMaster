export interface ShadowingSentence {
  id: string;
  text: string;
  turkishMeaning: string;
  speed: 'slow' | 'normal' | 'fast';
}

export interface ShadowingSet {
  id: string;
  title: string;
  description: string;
  clbLevel: number;
  category: string;
  icon: string;
  sentences: ShadowingSentence[];
}
