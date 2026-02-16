'use client';

import { useState, useEffect } from 'react';
import type { LearningItem } from '@/types/learning';
import { shuffleArray, splitSentenceForBuild } from '@/lib/utils/question-helpers';

interface Props {
  item: LearningItem;
  allItems: LearningItem[];
  onAnswer: (correct: boolean) => void;
}

export function QuestionSentenceBuild({ item, onAnswer }: Props) {
  const [correctWords] = useState(() => splitSentenceForBuild(item.example));
  const [shuffledWords, setShuffledWords] = useState<string[]>([]);
  const [selectedOrder, setSelectedOrder] = useState<number[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [shake, setShake] = useState(false);

  /* eslint-disable react-hooks/set-state-in-effect -- resetting on prop change */
  useEffect(() => {
    setShuffledWords(shuffleArray(splitSentenceForBuild(item.example)));
    setSelectedOrder([]);
    setSubmitted(false);
    setIsCorrect(false);
    setShake(false);
  }, [item.example]);
  /* eslint-enable react-hooks/set-state-in-effect */

  const handleWordClick = (wordIndex: number) => {
    if (submitted) return;

    if (selectedOrder.includes(wordIndex)) {
      // Deselect
      setSelectedOrder((prev) => prev.filter((i) => i !== wordIndex));
    } else {
      // Select
      setSelectedOrder((prev) => [...prev, wordIndex]);
    }
  };

  const handleSubmit = () => {
    if (submitted || selectedOrder.length !== shuffledWords.length) return;

    const builtSentence = selectedOrder.map((i) => shuffledWords[i]).join(' ');
    const correct = builtSentence === correctWords.join(' ');
    setIsCorrect(correct);
    setSubmitted(true);

    if (!correct) {
      setShake(true);
      setTimeout(() => setShake(false), 500);
    }

    setTimeout(() => onAnswer(correct), correct ? 1200 : 2500);
  };

  const handleClear = () => {
    if (submitted) return;
    setSelectedOrder([]);
  };

  const builtSentence = selectedOrder.map((i) => shuffledWords[i]).join(' ');

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
        <div className="h-2 bg-gradient-to-r from-emerald-500 to-teal-500" />
        <div className="p-8 text-center">
          <p className="text-sm font-medium text-gray-400">Kelimeleri dogru siraya koyun</p>
          <p className="mt-2 text-sm text-purple-600">({item.turkishMeaning})</p>

          {/* Built sentence area */}
          <div
            className={`mt-4 min-h-[60px] rounded-2xl border-2 border-dashed p-4 ${
              submitted && isCorrect
                ? 'border-green-400 bg-green-50'
                : submitted && !isCorrect
                  ? 'border-red-400 bg-red-50'
                  : selectedOrder.length > 0
                    ? 'border-blue-300 bg-blue-50/50'
                    : 'border-gray-200 bg-gray-50'
            } ${shake ? 'animate-shake' : ''}`}
          >
            {selectedOrder.length > 0 ? (
              <p className={`text-lg font-medium ${
                submitted && isCorrect
                  ? 'text-green-700'
                  : submitted && !isCorrect
                    ? 'text-red-700'
                    : 'text-gray-800'
              }`}>
                {builtSentence}
              </p>
            ) : (
              <p className="text-sm text-gray-400">Kelimelere tiklayarak cumle kurun...</p>
            )}
          </div>
        </div>
      </div>

      {/* Word buttons */}
      <div className="mt-4 flex flex-wrap justify-center gap-2">
        {shuffledWords.map((word, idx) => {
          const isSelected = selectedOrder.includes(idx);
          const orderNum = selectedOrder.indexOf(idx);

          return (
            <button
              key={`${word}-${idx}`}
              onClick={() => handleWordClick(idx)}
              disabled={submitted}
              className={`relative rounded-xl border-2 px-4 py-2.5 text-sm font-medium transition-all ${
                isSelected
                  ? 'border-blue-400 bg-blue-100 text-blue-700 shadow-sm'
                  : 'border-gray-200 bg-white text-gray-700 hover:border-blue-300 hover:bg-blue-50'
              } ${submitted ? 'cursor-default' : 'cursor-pointer active:scale-95'}`}
            >
              {word}
              {isSelected && (
                <span className="absolute -right-1.5 -top-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-blue-500 text-[10px] font-bold text-white">
                  {orderNum + 1}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Actions */}
      {!submitted && (
        <div className="mt-4 flex gap-3">
          <button
            onClick={handleClear}
            disabled={selectedOrder.length === 0}
            className="flex-1 rounded-2xl border-2 border-gray-200 px-4 py-3 font-medium text-gray-600 transition-all hover:border-gray-300 disabled:opacity-30"
          >
            Temizle
          </button>
          <button
            onClick={handleSubmit}
            disabled={selectedOrder.length !== shuffledWords.length}
            className="flex-1 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-3 font-semibold text-white shadow-lg transition-all hover:shadow-xl disabled:opacity-40 disabled:shadow-none"
          >
            Kontrol Et
          </button>
        </div>
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
              <p>Yanlis sira. Dogru cumle:</p>
              <p className="font-semibold">{correctWords.join(' ')}</p>
              <p className="text-xs text-red-500">{item.turkishMeaning}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
