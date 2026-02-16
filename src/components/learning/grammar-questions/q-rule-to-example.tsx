'use client';

import type { GrammarItem } from '@/lib/data/grammar/types';
import { shuffleArray } from '@/lib/utils/question-helpers';
import { GrammarQuestionShell } from './grammar-question-shell';

interface Props {
  item: GrammarItem;
  allItems: GrammarItem[];
  onAnswer: (correct: boolean) => void;
}

/** Show grammar rule → pick the correct example sentence */
export function QRuleToExample({ item, allItems, onAnswer }: Props) {
  const distractors = shuffleArray(
    allItems.filter((i) => i.id !== item.id && i.rule !== item.rule)
  )
    .slice(0, 3)
    .map((i) => i.example);

  const options = shuffleArray([item.example, ...distractors]);

  return (
    <GrammarQuestionShell
      options={options}
      correctAnswer={item.example}
      explanation={item.explanation}
      turkishHint={item.turkishMeaning}
      onAnswer={onAnswer}
    >
      <p className="text-xs font-medium text-blue-600">Bu kurala uygun ornek cumle hangisi?</p>
      <div className="mt-3 rounded-xl bg-amber-50 p-4 text-center">
        <p className="text-lg font-bold text-gray-900">{item.rule}</p>
      </div>
      <p className="mt-2 text-xs text-gray-400">{item.turkishMeaning}</p>
    </GrammarQuestionShell>
  );
}
