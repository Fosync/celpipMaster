'use client';

import { useEffect, useRef, useCallback } from 'react';

export function useSpeech() {
  const preferredVoice = useRef<SpeechSynthesisVoice | null>(null);
  const voicesLoaded = useRef(false);

  const loadVoices = useCallback(() => {
    if (typeof window === 'undefined' || !window.speechSynthesis) return;
    const voices = window.speechSynthesis.getVoices();
    if (voices.length === 0) return;
    voicesLoaded.current = true;
    preferredVoice.current =
      voices.find((v) => v.name.includes('Google US English')) ??
      voices.find((v) => v.name.includes('Samantha')) ??
      voices.find((v) => v.name.includes('Microsoft Zira')) ??
      voices.find((v) => v.lang === 'en-US') ??
      null;
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined' || !window.speechSynthesis) return;
    // Silent warm-up to fix Chrome speechSynthesis bug
    const warm = new SpeechSynthesisUtterance('');
    warm.volume = 0;
    window.speechSynthesis.speak(warm);
    loadVoices();
    window.speechSynthesis.addEventListener('voiceschanged', loadVoices);
    return () => {
      window.speechSynthesis.removeEventListener('voiceschanged', loadVoices);
    };
  }, [loadVoices]);

  const speak = useCallback((text: string) => {
    if (typeof window === 'undefined' || !window.speechSynthesis) return;
    window.speechSynthesis.cancel();
    setTimeout(() => {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'en-US';
      utterance.rate = 0.85;
      utterance.volume = 1.0;
      if (!voicesLoaded.current) loadVoices();
      if (preferredVoice.current) utterance.voice = preferredVoice.current;
      window.speechSynthesis.speak(utterance);
    }, 100);
  }, [loadVoices]);

  return { speak };
}
