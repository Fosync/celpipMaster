'use client';

import type { GrammarItem } from '@/lib/data/grammar/types';
import { shuffleArray } from '@/lib/utils/question-helpers';
import { GrammarQuestionShell } from './grammar-question-shell';

interface Props {
  item: GrammarItem;
  allItems: GrammarItem[];
  onAnswer: (correct: boolean) => void;
}

/**
 * Show the common mistake sentence → which one is the CORRECT version?
 * Uses commonMistake field to extract the wrong sentence and correct alternative.
 */
export function QErrorFind({ item, allItems, onAnswer }: Props) {
  // Extract the wrong sentence from commonMistake
  const mistake = item.commonMistake || '';

  // Build options: correct example + distractors from other items' examples
  const distractors = shuffleArray(
    allItems.filter((i) => i.id !== item.id)
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
      <p className="text-xs font-medium text-red-600">Asagidaki hata duzeltilirse hangisi dogru olur?</p>
      <div className="mt-3 rounded-xl bg-red-50 p-4">
        <p className="text-xs font-medium text-red-500">HATALI KULLANIM:</p>
        <p className="mt-1 text-sm text-gray-800">{mistake}</p>
      </div>
      <div className="mt-2 rounded-lg bg-amber-50 px-3 py-2">
        <p className="text-xs text-amber-700">Kural: {item.rule}</p>
      </div>
    </GrammarQuestionShell>
  );
}
