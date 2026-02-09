'use client';

import { useState, useCallback } from 'react';
import type { SpeakingFeedback } from '@/lib/ai/providers/brain-provider';

interface UseSpeakingFeedbackReturn {
  feedback: SpeakingFeedback | null;
  isLoading: boolean;
  error: string | null;
  analyze: (
    transcript: string,
    taskPrompt: string,
    pronunciationScores: Record<string, number>
  ) => Promise<SpeakingFeedback | null>;
  reset: () => void;
}

export function useSpeakingFeedback(): UseSpeakingFeedbackReturn {
  const [feedback, setFeedback] = useState<SpeakingFeedback | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const analyze = useCallback(
    async (
      transcript: string,
      taskPrompt: string,
      pronunciationScores: Record<string, number>
    ): Promise<SpeakingFeedback | null> => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch('/api/speaking-feedback', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ transcript, taskPrompt, pronunciationScores }),
        });

        if (!response.ok) {
          const data = await response.json();
          throw new Error(data.error || 'Failed to generate feedback');
        }

        const data: SpeakingFeedback = await response.json();
        setFeedback(data);
        return data;
      } catch (err) {
        const message =
          err instanceof Error ? err.message : 'Failed to get speaking feedback';
        setError(message);
        return null;
      } finally {
        setIsLoading(false);
      }
    },
    []
  );

  const reset = useCallback(() => {
    setFeedback(null);
    setError(null);
    setIsLoading(false);
  }, []);

  return { feedback, isLoading, error, analyze, reset };
}
