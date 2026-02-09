export interface TTSProvider {
  name: string;
  speak(text: string): Promise<void>;
  stop(): void;
  isSupported(): boolean;
}
