'use client';

import { useState, useCallback, useRef, useEffect } from 'react';
import { useGoogleTTS } from './use-google-tts';

export interface WordComparison {
  word: string;
  match: boolean;
}

export interface ComparisonResult {
  original: WordComparison[];
  spoken: WordComparison[];
  accuracy: number;
}

function normalizeText(text: string): string[] {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9'\s-]/g, '')
    .split(/\s+/)
    .filter(Boolean);
}

function compareWords(original: string, spoken: string): ComparisonResult {
  const origWords = normalizeText(original);
  const spokenWords = normalizeText(spoken);

  // Use longest common subsequence approach for better matching
  const origMatched = new Set<number>();
  const spokenMatched = new Set<number>();

  // First pass: exact position matches
  const minLen = Math.min(origWords.length, spokenWords.length);
  for (let i = 0; i < minLen; i++) {
    if (origWords[i] === spokenWords[i]) {
      origMatched.add(i);
      spokenMatched.add(i);
    }
  }

  // Second pass: find remaining matches in nearby positions
  for (let i = 0; i < origWords.length; i++) {
    if (origMatched.has(i)) continue;
    for (let j = 0; j < spokenWords.length; j++) {
      if (spokenMatched.has(j)) continue;
      if (origWords[i] === spokenWords[j]) {
        origMatched.add(i);
        spokenMatched.add(j);
        break;
      }
    }
  }

  const originalResult: WordComparison[] = origWords.map((word, i) => ({
    word,
    match: origMatched.has(i),
  }));

  const spokenResult: WordComparison[] = spokenWords.map((word, i) => ({
    word,
    match: spokenMatched.has(i),
  }));

  const matchCount = origMatched.size;
  const accuracy = origWords.length > 0
    ? Math.round((matchCount / origWords.length) * 100)
    : 0;

  return { original: originalResult, spoken: spokenResult, accuracy };
}

type SpeechRecognitionInstance = {
  lang: string;
  interimResults: boolean;
  continuous: boolean;
  start: () => void;
  stop: () => void;
  abort: () => void;
  onresult: ((event: { results: { [key: number]: { [key: number]: { transcript: string } }; length: number } }) => void) | null;
  onend: (() => void) | null;
  onerror: ((event: { error: string }) => void) | null;
};

export function useShadowing() {
  const [isRecording, setIsRecording] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [comparison, setComparison] = useState<ComparisonResult | null>(null);
  const [sttSupported, setSttSupported] = useState(true);

  const recognitionRef = useRef<SpeechRecognitionInstance | null>(null);
  const tts = useGoogleTTS();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const SpeechRecognition =
        (window as unknown as Record<string, unknown>).SpeechRecognition ||
        (window as unknown as Record<string, unknown>).webkitSpeechRecognition;
      if (!SpeechRecognition) {
        setSttSupported(false);
      }
    }
    return () => {
      tts.stop();
      if (recognitionRef.current) {
        recognitionRef.current.abort();
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getRate = useCallback((speed: 'slow' | 'normal' | 'fast'): number => {
    switch (speed) {
      case 'slow': return 0.75;
      case 'normal': return 0.9;
      case 'fast': return 1.05;
    }
  }, []);

  const playSentence = useCallback((text: string, speed: 'slow' | 'normal' | 'fast') => {
    tts.playText(text, 'en-US-Neural2-C', getRate(speed));
  }, [tts, getRate]);

  const stopPlaying = useCallback(() => {
    tts.stop();
  }, [tts]);

  const startRecording = useCallback(() => {
    if (typeof window === 'undefined') return;

    const SpeechRecognition =
      (window as unknown as Record<string, unknown>).SpeechRecognition ||
      (window as unknown as Record<string, unknown>).webkitSpeechRecognition;

    if (!SpeechRecognition) {
      setSttSupported(false);
      return;
    }

    // Stop any ongoing TTS
    stopPlaying();

    const recognition = new (SpeechRecognition as new () => SpeechRecognitionInstance)();
    recognition.lang = 'en-US';
    recognition.interimResults = false;
    recognition.continuous = false;

    recognition.onresult = (event) => {
      const last = event.results.length - 1;
      const text = event.results[last][0].transcript;
      setTranscript(text);
    };

    recognition.onend = () => {
      setIsRecording(false);
    };

    recognition.onerror = (event) => {
      console.error('Speech recognition error:', event.error);
      setIsRecording(false);
    };

    recognitionRef.current = recognition;
    setTranscript('');
    setComparison(null);
    setIsRecording(true);
    recognition.start();
  }, [stopPlaying]);

  const stopRecording = useCallback(() => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
    }
    setIsRecording(false);
  }, []);

  const compare = useCallback((originalText: string) => {
    if (!transcript) return null;
    const result = compareWords(originalText, transcript);
    setComparison(result);
    return result;
  }, [transcript]);

  const reset = useCallback(() => {
    setTranscript('');
    setComparison(null);
    tts.stop();
    if (recognitionRef.current) {
      recognitionRef.current.abort();
    }
    setIsRecording(false);
  }, [tts]);

  return {
    // TTS
    isPlaying: tts.isPlaying || tts.isLoading,
    playSentence,
    stopPlaying,
    // STT
    isRecording,
    transcript,
    sttSupported,
    startRecording,
    stopRecording,
    // Comparison
    comparison,
    compare,
    // Utils
    reset,
  };
}
