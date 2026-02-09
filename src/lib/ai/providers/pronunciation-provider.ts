export interface WordScore {
  word: string;
  accuracyScore: number;
  errorType: string;
}

export interface PhonemeError {
  phoneme: string;
  actual: string;
  expected: string;
  word: string;
}

export interface PronunciationResult {
  accuracyScore: number;
  fluencyScore: number;
  completenessScore: number;
  pronScore: number;
  wordScores: WordScore[];
  phonemeErrors: PhonemeError[];
}

export interface PronunciationProvider {
  name: string;
  assess(audioBlob: Blob, referenceText: string): Promise<PronunciationResult>;
}
