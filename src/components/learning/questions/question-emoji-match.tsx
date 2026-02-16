'use client';

import type { LearningItem } from '@/types/learning';
import { generateSmartDistractors, getEmojiForItem } from '@/lib/utils/question-helpers';
import { QuestionShell } from './question-shell';

interface Props {
  item: LearningItem;
  allItems: LearningItem[];
  onAnswer: (correct: boolean) => void;
}

export function QuestionEmojiMatch({ item, allItems, onAnswer }: Props) {
  const options = generateSmartDistractors(item, allItems, (i) => i.term, 3);
  const emoji = getEmojiForItem(item);

  return (
    <QuestionShell
      options={options}
      correctAnswer={item.term}
      turkishMeaning={item.turkishMeaning}
      onAnswer={onAnswer}
    >
      <p className="text-sm font-medium text-gray-400">Bu emoji hangi kelimeyi temsil ediyor?</p>
      <div className="mt-4 text-7xl">{emoji}</div>
      <p className="mt-2 text-xs text-gray-400">{item.category}</p>
    </QuestionShell>
  );
}
