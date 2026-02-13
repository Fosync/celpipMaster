'use client';

import { useCallback, useRef, useState } from 'react';

export type TTSVoice =
  | 'alloy'
  | 'echo'
  | 'fable'
  | 'onyx'    // Male
  | 'nova'    // Female
  | 'shimmer';

interface UseGoogleTTSReturn {
  playText: (text: string, voice?: TTSVoice, speed?: number, onDone?: () => void) => void;
  stop: () => void;
  isLoading: boolean;
  isPlaying: boolean;
  error: string | null;
}

export function useGoogleTTS(): UseGoogleTTSReturn {
  const [isLoading, setIsLoading] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const abortRef = useRef<AbortController | null>(null);
  const busyRef = useRef(false);

  const stop = useCallback(() => {
    busyRef.current = false;
    if (abortRef.current) {
      abortRef.current.abort();
      abortRef.current = null;
    }
    if (audioRef.current) {
      const audio = audioRef.current;
      audio.oncanplaythrough = null;
      audio.onended = null;
      audio.onerror = null;
      audio.pause();
      audioRef.current = null;
    }
    if (typeof window !== 'undefined' && window.speechSynthesis) {
      window.speechSynthesis.cancel();
    }
    setIsLoading(false);
    setIsPlaying(false);
    setError(null);
  }, []);

  const playText = useCallback(
    (text: string, voice?: TTSVoice, speed?: number, onDone?: () => void) => {
      if (busyRef.current) return;
      stop();
      busyRef.current = true;
      setIsLoading(true);
      setError(null);

      const controller = new AbortController();
      abortRef.current = controller;

      // Web Speech API fallback — keeps isPlaying reactive
      const doFallback = () => {
        if (typeof window === 'undefined' || !window.speechSynthesis) {
          busyRef.current = false;
          setIsLoading(false);
          setIsPlaying(false);
          onDone?.();
          return;
        }
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'en-US';
        utterance.rate = speed ?? 1.0;
        utterance.volume = 1.0;
        setIsLoading(false);
        setIsPlaying(true);
        utterance.onend = () => {
          busyRef.current = false;
          setIsPlaying(false);
          onDone?.();
        };
        utterance.onerror = () => {
          busyRef.current = false;
          setIsPlaying(false);
          onDone?.();
        };
        window.speechSynthesis.speak(utterance);
      };

      fetch('/api/tts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          text,
          voice: voice ?? 'nova',
          speed: speed ?? 1.0,
        }),
        signal: controller.signal,
      })
        .then((r) => {
          if (!r.ok) throw new Error(`TTS API ${r.status}`);
          return r.arrayBuffer();
        })
        .then((buffer) => {
          const blob = new Blob([buffer], { type: 'audio/mpeg' });
          const url = URL.createObjectURL(blob);
          const audio = new Audio();
          audioRef.current = audio;

          audio.oncanplaythrough = () => {
            setIsLoading(false);
            setIsPlaying(true);
            audio.play().catch(() => {
              busyRef.current = false;
              setIsPlaying(false);
              safeRevoke(url);
              doFallback();
            });
          };

          audio.onended = () => {
            busyRef.current = false;
            setIsPlaying(false);
            safeRevoke(url);
            onDone?.();
          };

          audio.onerror = () => {
            busyRef.current = false;
            setIsLoading(false);
            setIsPlaying(false);
            safeRevoke(url);
            doFallback();
          };

          audio.src = url;
          audio.load();
        })
        .catch((err) => {
          if (err instanceof DOMException && err.name === 'AbortError') {
            busyRef.current = false;
            setIsLoading(false);
            return;
          }
          doFallback();
        });
    },
    [stop]
  );

  return { playText, stop, isLoading, isPlaying, error };
}

function safeRevoke(url: string) {
  try { URL.revokeObjectURL(url); } catch { /* ignore */ }
}
