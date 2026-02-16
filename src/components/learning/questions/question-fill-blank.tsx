'use client';

import type { LearningItem } from '@/types/learning';
import { generateSmartDistractors, createBlankSentence } from '@/lib/utils/question-helpers';
import { QuestionShell } from './question-shell';

interface Props {
  item: LearningItem;
  allItems: LearningItem[];
  onAnswer: (correct: boolean) => void;
}

export function QuestionFillBlank({ item, allItems, onAnswer }: Props) {
  const options = generateSmartDistractors(item, allItems, (i) => i.term, 3);
  const blankSentence = createBlankSentence(item.example, item.term) ?? `______ : ${item.turkishMeaning}`;

  return (
    <QuestionShell
      options={options}
      correctAnswer={item.term}
      turkishMeaning={item.turkishMeaning}
      onAnswer={onAnswer}
    >
      <p className="text-sm font-medium text-gray-400">Boslugu doldurun</p>
      <p className="mt-4 text-lg font-medium leading-relaxed text-gray-800">{blankSentence}</p>
      <p className="mt-2 text-xs text-gray-400">({item.turkishMeaning})</p>
    </QuestionShell>
  );
}
