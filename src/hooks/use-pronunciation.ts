'use client';

import { useState, useCallback } from 'react';
import type { PronunciationResult } from '@/lib/ai/providers/pronunciation-provider';

interface UsePronunciationReturn {
  result: PronunciationResult | null;
  isLoading: boolean;
  error: string | null;
  assess: (audioBlob: Blob, referenceText: string) => Promise<PronunciationResult | null>;
  reset: () => void;
}

export function usePronunciation(): UsePronunciationReturn {
  const [result, setResult] = useState<PronunciationResult | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const assess = useCallback(
    async (audioBlob: Blob, referenceText: string): Promise<PronunciationResult | null> => {
      setIsLoading(true);
      setError(null);

      try {
        const formData = new FormData();
        formData.append('audio', audioBlob, 'recording.webm');
        formData.append('referenceText', referenceText);

        const response = await fetch('/api/pronunciation', {
          method: 'POST',
          body: formData,
        });

        if (!response.ok) {
          const data = await response.json();
          throw new Error(data.error || 'Pronunciation assessment failed');
        }

        const data: PronunciationResult = await response.json();
        setResult(data);
        return data;
      } catch (err) {
        const message =
          err instanceof Error ? err.message : 'Failed to assess pronunciation';
        setError(message);
        return null;
      } finally {
        setIsLoading(false);
      }
    },
    []
  );

  const reset = useCallback(() => {
    setResult(null);
    setError(null);
    setIsLoading(false);
  }, []);

  return { result, isLoading, error, assess, reset };
}
