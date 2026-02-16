'use client';

import { useState, useEffect, useRef } from 'react';
import type { LearningItem } from '@/types/learning';
import { getTypingHint, revealHintLetter } from '@/lib/utils/question-helpers';

interface Props {
  item: LearningItem;
  allItems: LearningItem[];
  onAnswer: (correct: boolean) => void;
}

export function QuestionTyping({ item, onAnswer }: Props) {
  const [input, setInput] = useState('');
  const [hint, setHint] = useState(() => getTypingHint(item.term));
  const [wrongCount, setWrongCount] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [shake, setShake] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  /* eslint-disable react-hooks/set-state-in-effect -- resetting on prop change */
  useEffect(() => {
    setInput('');
    setHint(getTypingHint(item.term));
    setWrongCount(0);
    setSubmitted(false);
    setIsCorrect(false);
    setShake(false);
    setTimeout(() => inputRef.current?.focus(), 100);
  }, [item.term]);
  /* eslint-enable react-hooks/set-state-in-effect */

  const handleSubmit = () => {
    if (submitted || !input.trim()) return;

    const correct = input.trim().toLowerCase() === item.term.toLowerCase();
    setSubmitted(true);
    setIsCorrect(correct);

    if (!correct) {
      setShake(true);
      setTimeout(() => setShake(false), 500);
    }

    setTimeout(() => onAnswer(correct), correct ? 1200 : 2200);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  const handleInputChange = (value: string) => {
    if (submitted) return;
    setInput(value);

    // Check character-by-character for wrong letters
    const trimmed = value.trim().toLowerCase();
    const target = item.term.toLowerCase();
    if (trimmed.length > 0 && trimmed.length <= target.length) {
      const lastChar = trimmed[trimmed.length - 1];
      const expectedChar = target[trimmed.length - 1];
      if (lastChar !== expectedChar) {
        const newWrongCount = wrongCount + 1;
        setWrongCount(newWrongCount);
        // After 3 wrong characters, reveal a letter
        if (newWrongCount >= 3 && newWrongCount % 3 === 0) {
          setHint((prev) => revealHintLetter(item.term, prev));
        }
      }
    }
  };

  return (
    <div>
      {/* Flash overlay */}
      {submitted && (
        <div
          className={`pointer-events-none fixed inset-0 z-50 transition-opacity duration-300 ${
            isCorrect ? 'bg-green-500/10' : 'bg-red-500/10'
          }`}
        />
      )}

      {/* Prompt */}
      <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-lg">
        <div className="h-2 bg-gradient-to-r from-orange-500 to-red-500" />
        <div className="p-8 text-center">
          <p className="text-sm font-medium text-gray-400">Bu kelimenin Ingilizcesini yazin</p>
          <h2 className="mt-3 text-3xl font-bold text-gray-900">{item.turkishMeaning}</h2>

          {/* Hint */}
          <div className="mt-4 flex items-center justify-center gap-1">
            {hint.split('').map((char, i) => (
              <span
                key={i}
                className={`inline-flex h-10 w-8 items-center justify-center rounded-lg text-lg font-mono font-bold ${
                  char === '_'
                    ? 'border-2 border-dashed border-gray-300 text-gray-300'
                    : 'border-2 border-blue-200 bg-blue-50 text-blue-700'
                }`}
              >
                {char === '_' ? '\u00B7' : char}
              </span>
            ))}
          </div>

          <p className="mt-2 text-xs text-gray-400">
            {item.term.length} harf
            {wrongCount >= 3 && ' \u2022 Ipucu verildi!'}
          </p>
        </div>
      </div>

      {/* Input area */}
      <div className={`mt-4 ${shake ? 'animate-shake' : ''}`}>
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => handleInputChange(e.target.value)}
          onKeyDown={handleKeyDown}
          disabled={submitted}
          placeholder="Kelimeyi yazin..."
          autoComplete="off"
          autoCapitalize="off"
          spellCheck={false}
          className={`w-full rounded-2xl border-2 px-5 py-4 text-center text-lg font-medium outline-none transition-all ${
            submitted && isCorrect
              ? 'border-green-500 bg-green-50 text-green-700'
              : submitted && !isCorrect
                ? 'border-red-500 bg-red-50 text-red-700'
                : 'border-gray-200 bg-white text-gray-800 focus:border-blue-400 focus:bg-blue-50'
          }`}
        />
      </div>

      {/* Submit button */}
      {!submitted && (
        <button
          onClick={handleSubmit}
          disabled={!input.trim()}
          className="mt-3 w-full rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 px-5 py-4 font-semibold text-white shadow-lg transition-all hover:shadow-xl disabled:opacity-40 disabled:shadow-none"
        >
          Kontrol Et
        </button>
      )}

      {/* Feedback */}
      {submitted && (
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
                Yanlis. Dogru cevap: <strong>{item.term}</strong>
              </p>
              <p className="text-xs text-red-500">{item.turkishMeaning}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
