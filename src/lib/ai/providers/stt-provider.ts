export interface STTResult {
  transcript: string;
  confidence: number;
  isFinal: boolean;
}

export interface STTProvider {
  name: string;
  start(onResult: (result: STTResult) => void, onError: (error: string) => void): void;
  stop(): void;
  isSupported(): boolean;
}
