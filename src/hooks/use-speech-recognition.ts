'use client';

import { useState, useRef, useCallback, useEffect } from 'react';

interface UseSpeechRecognitionOptions {
  language?: string;
  continuous?: boolean;
  interimResults?: boolean;
  /** Auto-stop after this many ms of silence. Disabled if undefined/0. */
  silenceTimeoutMs?: number;
  /** Called when recognition auto-stops (silence or browser end) with transcript. NOT called on manual stop(). */
  onAutoStop?: (transcript: string) => void;
}

interface UseSpeechRecognitionReturn {
  transcript: string;
  interimTranscript: string;
  isListening: boolean;
  isSupported: boolean;
  start: () => void;
  stop: () => void;
  reset: () => void;
  error: string | null;
}

// Extend Window for SpeechRecognition types
interface SpeechRecognitionEvent {
  results: SpeechRecognitionResultList;
  resultIndex: number;
}

interface SpeechRecognitionErrorEvent {
  error: string;
  message: string;
}

interface SpeechRecognitionInstance extends EventTarget {
  lang: string;
  continuous: boolean;
  interimResults: boolean;
  maxAlternatives: number;
  start(): void;
  stop(): void;
  abort(): void;
  onresult: ((event: SpeechRecognitionEvent) => void) | null;
  onerror: ((event: SpeechRecognitionErrorEvent) => void) | null;
  onend: (() => void) | null;
  onstart: (() => void) | null;
}

declare global {
  interface Window {
    SpeechRecognition: new () => SpeechRecognitionInstance;
    webkitSpeechRecognition: new () => SpeechRecognitionInstance;
  }
}

export function useSpeechRecognition(
  options: UseSpeechRecognitionOptions = {}
): UseSpeechRecognitionReturn {
  const {
    language = 'en-US',
    continuous = true,
    interimResults = true,
    silenceTimeoutMs,
    onAutoStop,
  } = options;

  const [transcript, setTranscript] = useState('');
  const [interimTranscript, setInterimTranscript] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSupported] = useState(() =>
    typeof window !== 'undefined' &&
    ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window)
  );

  const recognitionRef = useRef<SpeechRecognitionInstance | null>(null);
  const finalTranscriptRef = useRef('');
  const manualStopRef = useRef(false);
  const silenceTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Keep callback refs fresh
  const onAutoStopRef = useRef(onAutoStop);
  onAutoStopRef.current = onAutoStop;
  const silenceTimeoutMsRef = useRef(silenceTimeoutMs);
  silenceTimeoutMsRef.current = silenceTimeoutMs;

  const clearSilenceTimer = useCallback(() => {
    if (silenceTimerRef.current) {
      clearTimeout(silenceTimerRef.current);
      silenceTimerRef.current = null;
    }
  }, []);

  const resetSilenceTimer = useCallback(() => {
    clearSilenceTimer();
    const ms = silenceTimeoutMsRef.current;
    if (ms && ms > 0 && recognitionRef.current) {
      silenceTimerRef.current = setTimeout(() => {
        // Silence detected — stop recognition (will trigger onend → onAutoStop)
        if (recognitionRef.current) {
          recognitionRef.current.stop();
        }
      }, ms);
    }
  }, [clearSilenceTimer]);

  const start = useCallback(() => {
    if (!isSupported) {
      setError('Speech recognition is not supported in this browser');
      return;
    }

    // Stop any existing recognition first
    if (recognitionRef.current) {
      manualStopRef.current = true;
      recognitionRef.current.stop();
      recognitionRef.current = null;
    }
    clearSilenceTimer();

    setError(null);
    manualStopRef.current = false;
    finalTranscriptRef.current = '';
    setTranscript('');
    setInterimTranscript('');

    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();

    recognition.lang = language;
    recognition.continuous = continuous;
    recognition.interimResults = interimResults;
    recognition.maxAlternatives = 1;

    recognition.onstart = () => {
      setIsListening(true);
      resetSilenceTimer();
    };

    recognition.onresult = (event: SpeechRecognitionEvent) => {
      let interim = '';
      let final = finalTranscriptRef.current;

      for (let i = event.resultIndex; i < event.results.length; i++) {
        const result = event.results[i];
        if (result.isFinal) {
          final += result[0].transcript + ' ';
        } else {
          interim += result[0].transcript;
        }
      }

      finalTranscriptRef.current = final;
      setTranscript(final.trim());
      setInterimTranscript(interim);

      // Reset silence timer on new speech input
      resetSilenceTimer();
    };

    recognition.onerror = (event: SpeechRecognitionErrorEvent) => {
      // 'no-speech' and 'aborted' are not real errors
      if (event.error !== 'no-speech' && event.error !== 'aborted') {
        setError(event.error);
      }
    };

    recognition.onend = () => {
      // Skip if this is a stale recognition instance (replaced by a new start())
      if (recognitionRef.current !== recognition) return;

      setIsListening(false);
      setInterimTranscript('');
      clearSilenceTimer();

      // Auto-send only if NOT manually stopped
      if (!manualStopRef.current && onAutoStopRef.current) {
        const text = finalTranscriptRef.current.trim();
        if (text) {
          onAutoStopRef.current(text);
        }
      }
      manualStopRef.current = false;
    };

    recognitionRef.current = recognition;
    recognition.start();
  }, [isSupported, language, continuous, interimResults, resetSilenceTimer, clearSilenceTimer]);

  const stop = useCallback(() => {
    manualStopRef.current = true;
    clearSilenceTimer();
    if (recognitionRef.current) {
      recognitionRef.current.stop();
      recognitionRef.current = null;
    }
    setIsListening(false);
    setInterimTranscript('');
  }, [clearSilenceTimer]);

  const reset = useCallback(() => {
    stop();
    finalTranscriptRef.current = '';
    setTranscript('');
    setInterimTranscript('');
    setError(null);
  }, [stop]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      clearSilenceTimer();
      if (recognitionRef.current) {
        recognitionRef.current.abort();
      }
    };
  }, [clearSilenceTimer]);

  return {
    transcript,
    interimTranscript,
    isListening,
    isSupported,
    start,
    stop,
    reset,
    error,
  };
}
