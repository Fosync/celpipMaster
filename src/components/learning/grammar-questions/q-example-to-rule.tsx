'use client';

import type { GrammarItem } from '@/lib/data/grammar/types';
import { shuffleArray } from '@/lib/utils/question-helpers';
import { GrammarQuestionShell } from './grammar-question-shell';

interface Props {
  item: GrammarItem;
  allItems: GrammarItem[];
  onAnswer: (correct: boolean) => void;
}

/** Show example sentence → pick the correct grammar rule */
export function QExampleToRule({ item, allItems, onAnswer }: Props) {
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
      <p className="text-xs font-medium text-amber-600">Bu cumle hangi kurala ornek?</p>
      <p className="mt-3 text-lg font-medium italic text-gray-800">
        &ldquo;{item.example}&rdquo;
      </p>
    </GrammarQuestionShell>
  );
}
