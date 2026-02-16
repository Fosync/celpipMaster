'use client';

import { useState, useEffect } from 'react';

interface QuestionShellProps {
  options: string[];
  correctAnswer: string;
  turkishMeaning?: string;
  correctWord?: string;
  onAnswer: (correct: boolean) => void;
  children: React.ReactNode;
}

export function QuestionShell({
  options,
  correctAnswer,
  turkishMeaning,
  correctWord,
  onAnswer,
  children,
}: QuestionShellProps) {
  const [selected, setSelected] = useState<string | null>(null);
  const [flashFeedback, setFlashFeedback] = useState<'correct' | 'wrong' | null>(null);
  const [shake, setShake] = useState(false);

  /* eslint-disable react-hooks/set-state-in-effect -- resetting on prop change */
  useEffect(() => {
    setSelected(null);
    setFlashFeedback(null);
    setShake(false);
  }, [options, correctAnswer]);
  /* eslint-enable react-hooks/set-state-in-effect */

  const handleSelect = (option: string) => {
    if (selected) return;
    setSelected(option);
    const correct = option === correctAnswer;
    setFlashFeedback(correct ? 'correct' : 'wrong');

    if (!correct) {
      setShake(true);
      setTimeout(() => setShake(false), 500);
    }

    setTimeout(() => setFlashFeedback(null), 600);
    setTimeout(() => onAnswer(correct), correct ? 1200 : 2200);
  };

  const showResult = selected !== null;
  const isCorrect = selected === correctAnswer;

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
      <div className={`mt-4 space-y-3 ${shake ? 'animate-shake' : ''}`}>
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
              key={`${option}-${idx}`}
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
                Yanlis. Dogru cevap: <strong>{correctAnswer}</strong>
              </p>
              {correctWord && turkishMeaning && (
                <p className="text-xs text-red-500">
                  {correctWord} = {turkishMeaning}
                </p>
              )}
              {!correctWord && turkishMeaning && (
                <p className="text-xs text-red-500">Turkce: {turkishMeaning}</p>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
