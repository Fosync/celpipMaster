'use client';

import { useEffect } from 'react';
import type { LearningItem } from '@/types/learning';
import { generateOptionsFromItems } from '@/lib/utils/question-helpers';
import { QuestionShell } from './question-shell';

interface Props {
  item: LearningItem;
  allItems: LearningItem[];
  onAnswer: (correct: boolean) => void;
  speak: (text: string) => void;
}

export function QuestionListenSpell({ item, allItems, onAnswer, speak }: Props) {
  const options = generateOptionsFromItems(item, allItems, (i) => i.term);

  useEffect(() => {
    speak(item.term);
  }, [item.term, speak]);

  return (
    <QuestionShell options={options} correctAnswer={item.term} onAnswer={onAnswer}>
      <p className="text-sm font-medium text-gray-400">Listen and choose the correct word</p>
      <button
        type="button"
        onClick={() => speak(item.term)}
        className="mt-4 inline-flex items-center gap-2 rounded-2xl bg-blue-100 px-6 py-4 text-blue-700 transition-colors hover:bg-blue-200 active:scale-95"
      >
        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.536 8.464a5 5 0 010 7.072M17.95 6.05a8 8 0 010 11.9M6.5 8.788v6.424a.5.5 0 00.757.429l4.964-3.212a.5.5 0 000-.858L7.257 8.36a.5.5 0 00-.757.429z" />
        </svg>
        <span className="text-sm font-semibold">Play Again</span>
      </button>
    </QuestionShell>
  );
}
