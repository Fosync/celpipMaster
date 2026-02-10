'use client';

import { useCallback } from 'react';
import { useGoogleTTS } from './use-google-tts';

export function useSpeech() {
  const tts = useGoogleTTS();

  const speak = useCallback(
    (text: string) => {
      tts.playText(text, 'en-US-Neural2-C', 0.9);
    },
    [tts]
  );

  return { speak };
}
