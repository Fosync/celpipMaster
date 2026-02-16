'use client';

import { useEffect } from 'react';
import type { LearningItem } from '@/types/learning';
import { generateSmartDistractors } from '@/lib/utils/question-helpers';
import { QuestionShell } from './question-shell';

interface Props {
  item: LearningItem;
  allItems: LearningItem[];
  onAnswer: (correct: boolean) => void;
  speak: (text: string) => void;
}

export function QuestionListenChoose({ item, allItems, onAnswer, speak }: Props) {
  const options = generateSmartDistractors(item, allItems, (i) => i.term, 3);

  useEffect(() => {
    const timer = setTimeout(() => speak(item.term), 300);
    return () => clearTimeout(timer);
  }, [item.term, speak]);

  return (
    <QuestionShell
      options={options}
      correctAnswer={item.term}
      turkishMeaning={item.turkishMeaning}
      onAnswer={onAnswer}
    >
      <p className="text-sm font-medium text-gray-400">Dinle ve dogru kelimeyi sec</p>
      <button
        type="button"
        onClick={() => speak(item.term)}
        className="mt-6 inline-flex items-center gap-3 rounded-2xl bg-gradient-to-br from-blue-100 to-indigo-100 px-8 py-6 text-blue-700 transition-all hover:from-blue-200 hover:to-indigo-200 active:scale-95"
      >
        <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-3.14a.75.75 0 011.28.53v12.72a.75.75 0 01-1.28.53l-4.72-3.14H5.25c-.621 0-1.125-.504-1.125-1.125v-5.25c0-.621.504-1.125 1.125-1.125h1.5z" />
        </svg>
        <span className="text-sm font-semibold">Tekrar Dinle</span>
      </button>
    </QuestionShell>
  );
}
