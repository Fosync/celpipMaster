'use client';

import { useState } from 'react';

interface GrammarQuestionShellProps {
  options: string[];
  correctAnswer: string;
  explanation?: string;
  turkishHint?: string;
  onAnswer: (correct: boolean) => void;
  children: React.ReactNode;
}

export function GrammarQuestionShell({
  options,
  correctAnswer,
  explanation,
  turkishHint,
  onAnswer,
  children,
}: GrammarQuestionShellProps) {
  const [selected, setSelected] = useState<string | null>(null);
  const [shake, setShake] = useState(false);

  const handleSelect = (option: string) => {
    if (selected) return;
    setSelected(option);
    const correct = option === correctAnswer;

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
      {/* Flash overlay */}
      {showResult && (
        <div
          className={`pointer-events-none fixed inset-0 z-50 animate-pulse ${
            isCorrect ? 'bg-green-500/10' : 'bg-red-500/10'
          }`}
          style={{ animationDuration: '0.3s', animationIterationCount: 1 }}
        />
      )}

      {/* Prompt area */}
      <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-lg">
        <div className="h-2 bg-gradient-to-r from-amber-500 to-orange-500" />
        <div className="p-6">{children}</div>
      </div>

      {/* Options */}
      <div className={`mt-4 space-y-3 ${shake ? 'animate-shake' : ''}`}>
        {options.map((option, idx) => {
          const isSelected = selected === option;
          const isCorrectOption = option === correctAnswer;

          let cls = 'rounded-2xl border-2 px-5 py-4 text-left text-sm transition-all cursor-pointer ';
          if (!showResult) {
            cls += 'border-gray-200 bg-white hover:border-amber-400 hover:bg-amber-50';
          } else if (isCorrectOption) {
            cls += 'border-green-500 bg-green-50';
          } else if (isSelected && !isCorrectOption) {
            cls += 'border-red-500 bg-red-50';
          } else {
            cls += 'border-gray-200 bg-white opacity-50';
          }

          return (
            <button
              key={`${idx}-${option.slice(0, 20)}`}
              onClick={() => handleSelect(option)}
              disabled={showResult}
              className={`flex w-full items-center gap-3 ${cls}`}
            >
              <span
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold ${
                  showResult && isCorrectOption
                    ? 'bg-green-500 text-white'
                    : showResult && isSelected && !isCorrectOption
                      ? 'bg-red-500 text-white'
                      : 'bg-gray-100 text-gray-600'
                }`}
              >
                {showResult && isCorrectOption
                  ? '\u2713'
                  : showResult && isSelected && !isCorrectOption
                    ? '\u2717'
                    : String.fromCharCode(65 + idx)}
              </span>
              <span
                className={`flex-1 ${
                  showResult && isCorrectOption ? 'font-medium text-green-800' : 'text-gray-700'
                }`}
              >
                {option}
              </span>
            </button>
          );
        })}
      </div>

      {/* Feedback */}
      {showResult && (
        <div
          className={`mt-4 rounded-xl p-4 text-center text-sm font-medium ${
            isCorrect ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'
          }`}
        >
          {isCorrect ? (
            <div className="flex items-center justify-center gap-2">
              <span className="text-lg">{'🎉'}</span>
              <span>Dogru! +10 XP</span>
            </div>
          ) : (
            <div className="space-y-1">
              <p>
                Yanlis. Dogru cevap: <strong className="block mt-1">{correctAnswer}</strong>
              </p>
              {explanation && (
                <p className="mt-1 text-xs text-red-500">{explanation}</p>
              )}
              {turkishHint && (
                <p className="text-xs text-red-400">{turkishHint}</p>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
