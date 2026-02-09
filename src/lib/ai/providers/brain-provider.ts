export interface SpeakingFeedback {
  scores: {
    taskCompletion: number;
    vocabulary: number;
    grammar: number;
    coherence: number;
    pronunciation: number;
    overall: number;
  };
  clbLevel: number;
  strengths: string[];
  improvements: string[];
  correctedSentences: {
    original: string;
    corrected: string;
    explanation: string;
  }[];
  pronunciationTips: string[];
  modelAnswer: string;
  encouragement: string;
}

export interface BrainProvider {
  name: string;
  analyzeSpeaking(
    transcript: string,
    taskPrompt: string,
    pronunciationScores: Record<string, number>
  ): Promise<SpeakingFeedback>;
}
