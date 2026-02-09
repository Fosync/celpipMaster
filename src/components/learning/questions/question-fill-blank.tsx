'use client';

import type { LearningItem } from '@/types/learning';
import { generateOptionsFromItems, createBlankSentence } from '@/lib/utils/question-helpers';
import { QuestionShell } from './question-shell';

interface Props {
  item: LearningItem;
  allItems: LearningItem[];
  onAnswer: (correct: boolean) => void;
}

export function QuestionFillBlank({ item, allItems, onAnswer }: Props) {
  const options = generateOptionsFromItems(item, allItems, (i) => i.term);
  const blankSentence = createBlankSentence(item.example, item.term) ?? `______ : ${item.definition}`;

  return (
    <QuestionShell options={options} correctAnswer={item.term} onAnswer={onAnswer}>
      <p className="text-sm font-medium text-gray-400">Fill in the blank</p>
      <p className="mt-3 text-lg font-medium text-gray-800">{blankSentence}</p>
    </QuestionShell>
  );
}
