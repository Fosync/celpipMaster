'use client';

import { useState } from 'react';
import type { GrammarItem } from '@/lib/data/grammar/types';

interface Props {
  item: GrammarItem;
  allItems: GrammarItem[];
  onAnswer: (correct: boolean) => void;
}

/**
 * Show a sentence and ask: Is this sentence correct or incorrect?
 * Sometimes shows the correct example, sometimes shows a wrong version from commonMistake.
 */
export function QCommonMistake({ item, onAnswer }: Props) {
  // 50% chance show correct, 50% chance show mistake
  const [showCorrect] = useState(() => Math.random() > 0.5);
  const [selected, setSelected] = useState<string | null>(null);
  const [shake, setShake] = useState(false);

  const sentence = showCorrect ? item.example : extractWrongSentence(item);
  const correctAnswer = showCorrect ? 'dogru' : 'yanlis';

  const handleSelect = (answer: string) => {
    if (selected) return;
    setSelected(answer);
    const correct = answer === correctAnswer;

    if (!correct) {
      setShake(true);
      setTimeout(() => setShake(false), 500);
    }

    setTimeout(() => onAnswer(correct), correct ? 1200 : 2500);
  };

  const showResult = selected !== null;
  const isCorrect = selected === correctAnswer;

  return (
    <div>
      {/* Flash */}
      {showResult && (
        <div
          className={`pointer-events-none fixed inset-0 z-50 transition-opacity duration-300 ${
            isCorrect ? 'bg-green-500/10' : 'bg-red-500/10'
          }`}
        />
      )}

      {/* Prompt */}
      <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-lg">
        <div className="h-2 bg-gradient-to-r from-amber-500 to-orange-500" />
        <div className="p-6">
          <p className="text-xs font-medium text-amber-600">Bu cumle dilbilgisi olarak dogru mu?</p>
          <div className="mt-4 rounded-xl bg-gray-50 p-4">
            <p className="text-lg font-medium text-gray-800">&ldquo;{sentence}&rdquo;</p>
          </div>
          <div className="mt-2 rounded-lg bg-amber-50 px-3 py-2">
            <p className="text-xs text-amber-700">Kural: {item.rule}</p>
          </div>
        </div>
      </div>

      {/* Two buttons: Dogru / Yanlis */}
      <div className={`mt-4 grid grid-cols-2 gap-3 ${shake ? 'animate-shake' : ''}`}>
        <button
          onClick={() => handleSelect('dogru')}
          disabled={showResult}
          className={`rounded-2xl border-2 px-5 py-4 text-center font-semibold transition-all ${
            !showResult
              ? 'border-green-200 bg-white text-green-700 hover:border-green-400 hover:bg-green-50'
              : selected === 'dogru' && isCorrect
                ? 'border-green-500 bg-green-50 text-green-700'
                : selected === 'dogru' && !isCorrect
                  ? 'border-red-500 bg-red-50 text-red-700'
                  : correctAnswer === 'dogru'
                    ? 'border-green-500 bg-green-50 text-green-700'
                    : 'border-gray-200 bg-white opacity-50 text-gray-500'
          }`}
        >
          Dogru &#x2713;
        </button>
        <button
          onClick={() => handleSelect('yanlis')}
          disabled={showResult}
          className={`rounded-2xl border-2 px-5 py-4 text-center font-semibold transition-all ${
            !showResult
              ? 'border-red-200 bg-white text-red-700 hover:border-red-400 hover:bg-red-50'
              : selected === 'yanlis' && isCorrect
                ? 'border-green-500 bg-green-50 text-green-700'
                : selected === 'yanlis' && !isCorrect
                  ? 'border-red-500 bg-red-50 text-red-700'
                  : correctAnswer === 'yanlis'
                    ? 'border-green-500 bg-green-50 text-green-700'
                    : 'border-gray-200 bg-white opacity-50 text-gray-500'
          }`}
        >
          Yanlis &#x2717;
        </button>
      </div>

      {/* Feedback */}
      {showResult && (
        <div
          className={`mt-4 rounded-xl p-4 text-sm font-medium ${
            isCorrect ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'
          }`}
        >
          {isCorrect ? (
            <div className="flex items-center justify-center gap-2">
              <span className="text-lg">{'🎉'}</span>
              <span>Dogru! +10 XP</span>
            </div>
          ) : (
            <div className="space-y-1 text-center">
              <p>Yanlis!</p>
              {!showCorrect && item.commonMistake && (
                <p className="text-xs text-red-500">{item.commonMistake}</p>
              )}
              <p className="text-xs mt-1">
                Dogru cumle: <strong>&ldquo;{item.example}&rdquo;</strong>
              </p>
              <p className="text-xs text-red-400">{item.turkishMeaning}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

/**
 * Extract a wrong sentence from commonMistake field.
 * Tries to find quoted text like "She work" from the mistake description.
 * Falls back to a slightly modified version of the example.
 */
function extractWrongSentence(item: GrammarItem): string {
  if (!item.commonMistake) return item.example;

  // Try to extract quoted wrong sentence from commonMistake
  const quoteMatch = item.commonMistake.match(/"([^"]+)"/);
  if (quoteMatch) {
    return quoteMatch[1];
  }

  // Try single quotes
  const singleQuoteMatch = item.commonMistake.match(/'([^']+)'/);
  if (singleQuoteMatch) {
    return singleQuoteMatch[1];
  }

  // Fallback: return the example (the question will show it as "correct")
  return item.example;
}
