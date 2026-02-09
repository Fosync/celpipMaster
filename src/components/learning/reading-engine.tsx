'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import Link from 'next/link';
import type { ReadingPassage } from '@/lib/data/reading/types';

interface ReadingEngineProps {
  passage: ReadingPassage;
  backHref: string;
}

export function ReadingEngine({ passage, backHref }: ReadingEngineProps) {
  const [currentQuestion, setCurrentQuestion] = useState(-1); // -1 = reading phase
  const [selectedAnswers, setSelectedAnswers] = useState<(number | null)[]>(
    new Array(passage.questions.length).fill(null)
  );
  const [showResult, setShowResult] = useState(false);
  const [timeLeft, setTimeLeft] = useState(passage.timeLimit);
  const [timerActive, setTimerActive] = useState(true);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Timer
  useEffect(() => {
    if (!timerActive || showResult) return;
    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          setTimerActive(false);
          // Auto-submit when time runs out
          setShowResult(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [timerActive, showResult]);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s.toString().padStart(2, '0')}`;
  };

  const handleStartQuestions = useCallback(() => {
    setCurrentQuestion(0);
  }, []);

  const handleSelectAnswer = useCallback(
    (questionIdx: number, optionIdx: number) => {
      if (showResult) return;
      setSelectedAnswers((prev) => {
        const next = [...prev];
        next[questionIdx] = optionIdx;
        return next;
      });
    },
    [showResult]
  );

  const handleNext = useCallback(() => {
    if (currentQuestion < passage.questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      setTimerActive(false);
      setShowResult(true);
    }
  }, [currentQuestion, passage.questions.length]);

  const handlePrev = useCallback(() => {
    if (currentQuestion > 0) {
      setCurrentQuestion((prev) => prev - 1);
    }
  }, [currentQuestion]);

  const correctCount = selectedAnswers.filter(
    (a, i) => a === passage.questions[i].correctIndex
  ).length;
  const score = Math.round((correctCount / passage.questions.length) * 100);

  const timerColor =
    timeLeft > 60 ? 'text-green-600' : timeLeft > 30 ? 'text-yellow-600' : 'text-red-600';

  // Result screen
  if (showResult) {
    return (
      <div className="mx-auto max-w-2xl">
        <div className="mb-6 text-center">
          <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-blue-50 to-purple-50 text-5xl">
            {score >= 80 ? '🎉' : score >= 60 ? '👍' : '📚'}
          </div>
          <h2 className="text-2xl font-bold text-gray-900">{passage.title}</h2>
          <p className="mt-1 text-gray-500">Reading Comprehension Result</p>
        </div>

        <div className="mb-6 grid grid-cols-3 gap-4 text-center">
          <div className="rounded-2xl border border-gray-200 bg-white p-4">
            <div className="text-2xl font-bold text-blue-600">{correctCount}/{passage.questions.length}</div>
            <div className="text-xs text-gray-400">Correct</div>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-4">
            <div className="text-2xl font-bold text-purple-600">{score}%</div>
            <div className="text-xs text-gray-400">Score</div>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-4">
            <div className="text-2xl font-bold text-green-600">
              {formatTime(passage.timeLimit - timeLeft)}
            </div>
            <div className="text-xs text-gray-400">Time Used</div>
          </div>
        </div>

        {/* Review answers */}
        <div className="space-y-4">
          {passage.questions.map((q, qi) => {
            const selected = selectedAnswers[qi];
            const isCorrect = selected === q.correctIndex;
            return (
              <div
                key={q.id}
                className={`rounded-2xl border p-4 ${
                  isCorrect
                    ? 'border-green-200 bg-green-50'
                    : 'border-red-200 bg-red-50'
                }`}
              >
                <p className="mb-2 font-medium text-gray-900">
                  {qi + 1}. {q.question}
                </p>
                <div className="space-y-1">
                  {q.options.map((opt, oi) => (
                    <div
                      key={oi}
                      className={`rounded-lg px-3 py-1.5 text-sm ${
                        oi === q.correctIndex
                          ? 'bg-green-200 font-medium text-green-800'
                          : oi === selected && !isCorrect
                            ? 'bg-red-200 text-red-800 line-through'
                            : 'text-gray-600'
                      }`}
                    >
                      {String.fromCharCode(65 + oi)}. {opt}
                    </div>
                  ))}
                </div>
                <p className="mt-2 text-xs text-gray-500">{q.explanation}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-6 flex gap-3">
          <Link
            href={backHref}
            className="flex-1 rounded-xl border border-gray-200 py-3 text-center font-semibold text-gray-700 transition-all hover:border-blue-300 hover:text-blue-600"
          >
            Back to Reading
          </Link>
        </div>
      </div>
    );
  }

  // Reading phase (passage view)
  if (currentQuestion === -1) {
    return (
      <div className="mx-auto max-w-3xl">
        {/* Header */}
        <div className="mb-4 flex items-center justify-between">
          <Link
            href={backHref}
            className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-gray-700"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Back
          </Link>
          <div className={`rounded-full bg-gray-100 px-3 py-1 text-sm font-mono font-bold ${timerColor}`}>
            {formatTime(timeLeft)}
          </div>
          <span className="rounded-full bg-blue-50 px-2.5 py-0.5 text-xs font-medium text-blue-600">
            CLB {passage.clbLevel}
          </span>
        </div>

        <div className="mb-4">
          <h1 className="text-xl font-bold text-gray-900">{passage.title}</h1>
          <span className="mt-1 inline-block rounded-full bg-purple-50 px-2.5 py-0.5 text-xs font-medium capitalize text-purple-600">
            {passage.passageType}
          </span>
        </div>

        {/* Passage */}
        <div className="mb-6 rounded-2xl border border-gray-200 bg-white p-6">
          <div className="whitespace-pre-line text-sm leading-relaxed text-gray-700">
            {passage.passage}
          </div>
        </div>

        <button
          onClick={handleStartQuestions}
          className="w-full rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 py-3 font-semibold text-white shadow-lg shadow-blue-500/25 transition-all hover:shadow-xl"
        >
          Start Questions ({passage.questions.length} questions)
        </button>
      </div>
    );
  }

  // Question phase
  const q = passage.questions[currentQuestion];
  const selected = selectedAnswers[currentQuestion];

  return (
    <div className="mx-auto max-w-3xl">
      {/* Header */}
      <div className="mb-4 flex items-center justify-between">
        <span className="text-sm text-gray-500">
          Question {currentQuestion + 1} of {passage.questions.length}
        </span>
        <div className={`rounded-full bg-gray-100 px-3 py-1 text-sm font-mono font-bold ${timerColor}`}>
          {formatTime(timeLeft)}
        </div>
      </div>

      {/* Progress bar */}
      <div className="mb-6 h-1.5 overflow-hidden rounded-full bg-gray-100">
        <div
          className="h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all"
          style={{
            width: `${((currentQuestion + 1) / passage.questions.length) * 100}%`,
          }}
        />
      </div>

      {/* Collapsible passage reference */}
      <details className="mb-4 rounded-xl border border-gray-200 bg-gray-50">
        <summary className="cursor-pointer px-4 py-2 text-sm font-medium text-gray-600 hover:text-blue-600">
          Show passage
        </summary>
        <div className="border-t border-gray-200 px-4 py-3 text-xs leading-relaxed text-gray-600">
          {passage.passage}
        </div>
      </details>

      {/* Question */}
      <div className="mb-6 rounded-2xl border border-gray-200 bg-white p-6">
        <h3 className="mb-4 text-lg font-semibold text-gray-900">{q.question}</h3>
        <div className="space-y-2">
          {q.options.map((opt, oi) => (
            <button
              key={oi}
              onClick={() => handleSelectAnswer(currentQuestion, oi)}
              className={`flex w-full items-center gap-3 rounded-xl border px-4 py-3 text-left text-sm transition-all ${
                selected === oi
                  ? 'border-blue-500 bg-blue-50 text-blue-700'
                  : 'border-gray-200 bg-white text-gray-700 hover:border-blue-200 hover:bg-blue-50/50'
              }`}
            >
              <span
                className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold ${
                  selected === oi
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-100 text-gray-500'
                }`}
              >
                {String.fromCharCode(65 + oi)}
              </span>
              {opt}
            </button>
          ))}
        </div>
      </div>

      {/* Navigation */}
      <div className="flex gap-3">
        <button
          onClick={handlePrev}
          disabled={currentQuestion === 0}
          className="flex-1 rounded-xl border border-gray-200 py-3 font-semibold text-gray-700 transition-all hover:border-blue-300 hover:text-blue-600 disabled:opacity-40 disabled:hover:border-gray-200 disabled:hover:text-gray-700"
        >
          Previous
        </button>
        <button
          onClick={handleNext}
          disabled={selected === null}
          className="flex-1 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 py-3 font-semibold text-white shadow-lg shadow-blue-500/25 transition-all hover:shadow-xl disabled:opacity-40"
        >
          {currentQuestion === passage.questions.length - 1 ? 'Finish' : 'Next'}
        </button>
      </div>
    </div>
  );
}
