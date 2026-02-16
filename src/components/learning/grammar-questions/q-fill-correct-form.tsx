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
 * Show the example sentence with a blanked-out key section
 * and ask which rule completes it correctly.
 */
export function QFillCorrectForm({ item, allItems, onAnswer }: Props) {
  // Create a blanked version of the example
  const example = item.example;
  const words = example.split(/\s+/);

  // Find a suitable word/phrase to blank out (pick a verb-like word in the middle)
  let blankIdx = Math.floor(words.length / 2);
  // Try to find a more meaningful word (longer than 3 chars, not first/last)
  for (let i = 1; i < words.length - 1; i++) {
    const clean = words[i].replace(/[.,!?;:'"()]/g, '');
    if (clean.length >= 3) {
      blankIdx = i;
      break;
    }
  }

  const blankedWord = words[blankIdx].replace(/[.,!?;:'"()]/g, '');
  const punctuation = words[blankIdx].replace(blankedWord, '');
  const blankedSentence = words
    .map((w, i) => (i === blankIdx ? `______${punctuation}` : w))
    .join(' ');

  // Create distractor words from other examples
  const distractorWords: string[] = [];
  for (const other of shuffleArray(allItems.filter((i) => i.id !== item.id))) {
    const otherWords = other.example.split(/\s+/);
    for (const ow of otherWords) {
      const clean = ow.replace(/[.,!?;:'"()]/g, '');
      if (clean.length >= 3 && clean !== blankedWord && !distractorWords.includes(clean)) {
        distractorWords.push(clean);
        break;
      }
    }
    if (distractorWords.length >= 3) break;
  }

  const options = shuffleArray([blankedWord, ...distractorWords.slice(0, 3)]);

  return (
    <GrammarQuestionShell
      options={options}
      correctAnswer={blankedWord}
      explanation={item.explanation}
      turkishHint={item.turkishMeaning}
      onAnswer={onAnswer}
    >
      <p className="text-xs font-medium text-green-600">Boslugu dogru kelimeyle doldurun</p>
      <p className="mt-3 text-lg font-medium text-gray-800">{blankedSentence}</p>
      <div className="mt-2 rounded-lg bg-amber-50 px-3 py-2">
        <p className="text-xs text-amber-700">Kural: {item.rule}</p>
      </div>
    </GrammarQuestionShell>
  );
}
