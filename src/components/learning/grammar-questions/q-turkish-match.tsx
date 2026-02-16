'use client';

import type { GrammarItem } from '@/lib/data/grammar/types';
import { shuffleArray } from '@/lib/utils/question-helpers';
import { GrammarQuestionShell } from './grammar-question-shell';

interface Props {
  item: GrammarItem;
  allItems: GrammarItem[];
  onAnswer: (correct: boolean) => void;
}

/** Show Turkish explanation → pick the correct grammar rule */
export function QTurkishMatch({ item, allItems, onAnswer }: Props) {
  const distractors = shuffleArray(
    allItems.filter((i) => i.id !== item.id && i.rule !== item.rule)
  )
    .slice(0, 3)
    .map((i) => i.rule);

  const options = shuffleArray([item.rule, ...distractors]);

  return (
    <GrammarQuestionShell
      options={options}
      correctAnswer={item.rule}
      explanation={item.explanation}
      turkishHint={item.turkishMeaning}
      onAnswer={onAnswer}
    >
      <p className="text-xs font-medium text-purple-600">Bu Turkce aciklama hangi kurala ait?</p>
      <div className="mt-3 rounded-xl bg-purple-50 p-4">
        <p className="text-sm font-medium text-gray-800">{item.turkishMeaning}</p>
      </div>
    </GrammarQuestionShell>
  );
}
