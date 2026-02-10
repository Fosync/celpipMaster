'use client';

import { useState } from 'react';

interface TestQuestionProps {
  questionNumber: number;
  totalQuestions: number;
  question: {
    id: string;
    category: 'vocabulary' | 'grammar' | 'reading' | 'sentence-completion';
    clbLevel: number;
    question: string;
    passage?: string;
    options: string[];
    correctIndex: number;
    explanation: string;
  };
  onAnswer: (selectedIndex: number) => void;
  timeRemaining: number;
}

const categoryConfig: Record<string, { bg: string; text: string; label: string }> = {
  vocabulary: { bg: 'bg-blue-100', text: 'text-blue-700', label: 'Vocabulary' },
  grammar: { bg: 'bg-purple-100', text: 'text-purple-700', label: 'Grammar' },
  reading: { bg: 'bg-green-100', text: 'text-green-700', label: 'Reading' },
  'sentence-completion': { bg: 'bg-amber-100', text: 'text-amber-700', label: 'Sentence Completion' },
};

function formatTime(seconds: number): string {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins}:${secs.toString().padStart(2, '0')}`;
}

export function TestQuestion({
  questionNumber,
  totalQuestions,
  question,
  onAnswer,
  timeRemaining,
}: TestQuestionProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const progress = (questionNumber / totalQuestions) * 100;
  const category = categoryConfig[question.category];
  const isTimeLow = timeRemaining < 60;

  const handleSelect = (index: number) => {
    if (selectedIndex !== null) return;
    setSelectedIndex(index);

    setTimeout(() => {
      onAnswer(index);
      setSelectedIndex(null);
    }, 300);
  };

  return (
    <div className="mx-auto max-w-2xl">
      {/* Progress bar */}
      <div className="mb-6 h-2 overflow-hidden rounded-full bg-gray-100">
        <div
          className="h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Header: question count + timer */}
      <div className="mb-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-sm font-medium text-gray-500">
            Question {questionNumber} of {totalQuestions}
          </span>
          <span className={`rounded-full px-3 py-1 text-xs font-semibold ${category.bg} ${category.text}`}>
            {category.label}
          </span>
        </div>

        {/* Timer */}
        <div
          className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm font-mono font-semibold ${
            isTimeLow
              ? 'animate-pulse bg-red-100 text-red-600'
              : 'bg-gray-100 text-gray-600'
          }`}
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2m6-2a10 10 0 11-20 0 10 10 0 0120 0z" />
          </svg>
          {formatTime(timeRemaining)}
        </div>
      </div>

      {/* Passage (if provided) */}
      {question.passage && (
        <div className="mb-6 rounded-2xl border border-gray-200 bg-gray-50 p-5">
          <div className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-gray-400">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Reading Passage
          </div>
          <p className="text-sm leading-relaxed text-gray-700">{question.passage}</p>
        </div>
      )}

      {/* Question card */}
      <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-lg">
        <div className="h-1.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" />
        <div className="p-6 sm:p-8">
          <h2 className="text-lg font-semibold leading-relaxed text-gray-900">
            {question.question}
          </h2>
        </div>
      </div>

      {/* Options */}
      <div className="mt-4 space-y-3">
        {question.options.map((option, idx) => {
          const isSelected = selectedIndex === idx;

          return (
            <button
              key={`${question.id}-${idx}`}
              onClick={() => handleSelect(idx)}
              disabled={selectedIndex !== null}
              className={`flex w-full items-center gap-3 rounded-2xl border-2 px-5 py-4 text-left text-sm transition-all ${
                isSelected
                  ? 'border-blue-500 bg-blue-50 ring-2 ring-blue-200'
                  : selectedIndex !== null
                    ? 'cursor-default border-gray-200 bg-white opacity-50'
                    : 'cursor-pointer border-gray-200 bg-white hover:border-blue-400 hover:bg-blue-50 hover:shadow-md'
              }`}
            >
              <span
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold transition-colors ${
                  isSelected
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-100 text-gray-600'
                }`}
              >
                {String.fromCharCode(65 + idx)}
              </span>
              <span className={isSelected ? 'font-medium text-blue-800' : 'text-gray-700'}>
                {option}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
