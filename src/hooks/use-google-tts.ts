'use client';

import { useState, useCallback, useRef } from 'react';

export type TTSVoice =
  | 'en-US-Neural2-C'  // Female
  | 'en-US-Neural2-D'  // Male
  | 'en-US-Studio-O'   // Female (Studio)
  | 'en-US-Studio-Q';  // Male (Studio)

interface UseGoogleTTSReturn {
  playText: (text: string, voice?: TTSVoice, speed?: number) => Promise<void>;
  stop: () => void;
  isLoading: boolean;
  isPlaying: boolean;
  error: string | null;
}

// Web Speech API fallback
function fallbackSpeak(text: string, speed: number = 1.0): Promise<void> {
  return new Promise((resolve) => {
    if (typeof window === 'undefined' || !window.speechSynthesis) {
      resolve();
      return;
    }
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    utterance.rate = speed;
    utterance.volume = 1.0;
    utterance.onend = () => resolve();
    utterance.onerror = () => resolve();
    window.speechSynthesis.speak(utterance);
  });
}

export function useGoogleTTS(): UseGoogleTTSReturn {
  const [isLoading, setIsLoading] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const abortControllerRef = useRef<AbortController | null>(null);

  const stop = useCallback(() => {
    // Stop current audio
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      audioRef.current.src = '';
      audioRef.current = null;
    }
    // Cancel in-flight fetch
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
      abortControllerRef.current = null;
    }
    // Also cancel any Web Speech API fallback
    if (typeof window !== 'undefined' && window.speechSynthesis) {
      window.speechSynthesis.cancel();
    }
    setIsLoading(false);
    setIsPlaying(false);
  }, []);

  const playText = useCallback(
    async (text: string, voice?: TTSVoice, speed?: number) => {
      // Stop any currently playing audio
      stop();
      setError(null);
      setIsLoading(true);

      try {
        const controller = new AbortController();
        abortControllerRef.current = controller;

        const response = await fetch('/api/tts', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            text,
            voice: voice ?? 'en-US-Neural2-C',
            speed: speed ?? 1.0,
          }),
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error('TTS API failed');
        }

        const blob = await response.blob();
        const url = URL.createObjectURL(blob);

        return new Promise<void>((resolve) => {
          const audio = new Audio(url);
          audioRef.current = audio;

          audio.onloadeddata = () => {
            setIsLoading(false);
            setIsPlaying(true);
          };

          audio.onended = () => {
            setIsPlaying(false);
            URL.revokeObjectURL(url);
            audioRef.current = null;
            resolve();
          };

          audio.onerror = () => {
            setIsPlaying(false);
            setIsLoading(false);
            URL.revokeObjectURL(url);
            audioRef.current = null;
            // Fallback to Web Speech API
            console.warn('Google TTS audio error, falling back to Web Speech API');
            fallbackSpeak(text, speed).then(resolve);
          };

          audio.play().catch(() => {
            // Autoplay blocked or other error — fallback
            setIsPlaying(false);
            setIsLoading(false);
            URL.revokeObjectURL(url);
            audioRef.current = null;
            console.warn('Google TTS play failed, falling back to Web Speech API');
            fallbackSpeak(text, speed).then(resolve);
          });
        });
      } catch (err) {
        setIsLoading(false);
        setIsPlaying(false);

        // Don't treat abort as error
        if (err instanceof DOMException && err.name === 'AbortError') {
          return;
        }

        const message = err instanceof Error ? err.message : 'TTS failed';
        setError(message);
        console.warn('Google TTS failed, falling back to Web Speech API:', message);

        // Fallback to Web Speech API
        await fallbackSpeak(text, speed);
      }
    },
    [stop]
  );

  return { playText, stop, isLoading, isPlaying, error };
}
