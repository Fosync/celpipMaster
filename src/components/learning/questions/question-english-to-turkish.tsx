'use client';

import type { LearningItem } from '@/types/learning';
import { generateOptionsFromItems } from '@/lib/utils/question-helpers';
import { QuestionShell } from './question-shell';

interface Props {
  item: LearningItem;
  allItems: LearningItem[];
  onAnswer: (correct: boolean) => void;
  speak: (text: string) => void;
}

export function QuestionEnglishToTurkish({ item, allItems, onAnswer, speak }: Props) {
  const options = generateOptionsFromItems(item, allItems, (i) => i.turkishMeaning);

  return (
    <QuestionShell options={options} correctAnswer={item.turkishMeaning} onAnswer={onAnswer}>
      <p className="text-sm font-medium text-gray-400">What is the Turkish meaning?</p>
      <div className="mt-2 flex items-center justify-center gap-3">
        <h2 className="text-4xl font-bold text-gray-900">{item.term}</h2>
        <button
          type="button"
          onClick={() => speak(item.term)}
          className="inline-flex items-center gap-1.5 rounded-lg bg-blue-100 px-2.5 py-1.5 text-xs font-medium text-blue-700 transition-colors hover:bg-blue-200 active:scale-95"
        >
          <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.536 8.464a5 5 0 010 7.072M17.95 6.05a8 8 0 010 11.9M6.5 8.788v6.424a.5.5 0 00.757.429l4.964-3.212a.5.5 0 000-.858L7.257 8.36a.5.5 0 00-.757.429z" />
          </svg>
        </button>
      </div>
      {item.partOfSpeech && (
        <span className="mt-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-500">
          {item.partOfSpeech}
        </span>
      )}
    </QuestionShell>
  );
}
