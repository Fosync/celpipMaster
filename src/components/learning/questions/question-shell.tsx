'use client';

import { useState, useEffect } from 'react';

interface QuestionShellProps {
  options: string[];
  correctAnswer: string;
  onAnswer: (correct: boolean) => void;
  children: React.ReactNode;
}

export function QuestionShell({ options, correctAnswer, onAnswer, children }: QuestionShellProps) {
  const [selected, setSelected] = useState<string | null>(null);
  const [flashFeedback, setFlashFeedback] = useState<'correct' | 'wrong' | null>(null);

  // Reset state when options change (new question)
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- resetting on prop change
    setSelected(null);
    setFlashFeedback(null);
  }, [options, correctAnswer]);

  const handleSelect = (option: string) => {
    if (selected) return;
    setSelected(option);
    const correct = option === correctAnswer;
    setFlashFeedback(correct ? 'correct' : 'wrong');

    setTimeout(() => setFlashFeedback(null), 600);
    setTimeout(() => onAnswer(correct), 1500);
  };

  const showResult = selected !== null;

  return (
    <div>
      {/* Feedback flash overlay */}
      {flashFeedback && (
        <div
          className={`pointer-events-none fixed inset-0 z-50 transition-opacity duration-300 ${
            flashFeedback === 'correct' ? 'bg-green-500/10' : 'bg-red-500/10'
          }`}
        />
      )}

      {/* Prompt area */}
      <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-lg">
        <div className="h-2 bg-gradient-to-r from-purple-500 to-pink-500" />
        <div className="p-8 text-center">{children}</div>
      </div>

      {/* Options */}
      <div className="mt-4 space-y-3">
        {options.map((option, idx) => {
          const isSelected = selected === option;
          const isCorrectOption = option === correctAnswer;

          let cls =
            'rounded-2xl border-2 px-5 py-4 text-left text-sm transition-all cursor-pointer ';
          if (!showResult) {
            cls += 'border-gray-200 bg-white hover:border-blue-400 hover:bg-blue-50';
          } else if (isCorrectOption) {
            cls += 'border-green-500 bg-green-50';
          } else if (isSelected && !isCorrectOption) {
            cls += 'border-red-500 bg-red-50';
          } else {
            cls += 'border-gray-200 bg-white opacity-50';
          }

          return (
            <button
              key={idx}
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
                  ? '✓'
                  : showResult && isSelected && !isCorrectOption
                    ? '✗'
                    : String.fromCharCode(65 + idx)}
              </span>
              <span
                className={
                  showResult && isCorrectOption ? 'font-medium text-green-800' : 'text-gray-700'
                }
              >
                {option}
              </span>
            </button>
          );
        })}
      </div>

      {/* Feedback message */}
      {showResult && (
        <div
          className={`mt-4 rounded-xl p-4 text-center text-sm font-medium ${
            selected === correctAnswer
              ? 'bg-green-50 text-green-700'
              : 'bg-red-50 text-red-700'
          }`}
        >
          {selected === correctAnswer ? (
            <span>Correct! +10 XP</span>
          ) : (
            <span>
              Not quite. The answer is: <strong>{correctAnswer}</strong>
            </span>
          )}
        </div>
      )}
    </div>
  );
}
