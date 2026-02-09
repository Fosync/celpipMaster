'use client';

import type { LearningItem } from '@/types/learning';
import { generateOptionsFromItems } from '@/lib/utils/question-helpers';
import { QuestionShell } from './question-shell';

interface Props {
  item: LearningItem;
  allItems: LearningItem[];
  onAnswer: (correct: boolean) => void;
}

export function QuestionDefinitionMatch({ item, allItems, onAnswer }: Props) {
  const options = generateOptionsFromItems(item, allItems, (i) => i.term);

  return (
    <QuestionShell options={options} correctAnswer={item.term} onAnswer={onAnswer}>
      <p className="text-sm font-medium text-gray-400">Which word matches this definition?</p>
      <p className="mt-3 text-lg font-medium text-gray-800">&ldquo;{item.definition}&rdquo;</p>
    </QuestionShell>
  );
}
