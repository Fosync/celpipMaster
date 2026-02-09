'use client';

import type { LearningItem } from '@/types/learning';
import { generateOptionsFromItems } from '@/lib/utils/question-helpers';
import { QuestionShell } from './question-shell';

interface Props {
  item: LearningItem;
  allItems: LearningItem[];
  onAnswer: (correct: boolean) => void;
}

export function QuestionTurkishToEnglish({ item, allItems, onAnswer }: Props) {
  const options = generateOptionsFromItems(item, allItems, (i) => i.term);

  return (
    <QuestionShell options={options} correctAnswer={item.term} onAnswer={onAnswer}>
      <p className="text-sm font-medium text-gray-400">Which English word matches this meaning?</p>
      <h2 className="mt-3 text-3xl font-bold text-gray-900">{item.turkishMeaning}</h2>
      <span className="mt-2 inline-block rounded-full bg-purple-100 px-3 py-1 text-xs font-medium text-purple-600">
        Turkce → English
      </span>
    </QuestionShell>
  );
}
