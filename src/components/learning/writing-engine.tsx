'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import type { WritingPrompt } from '@/lib/data/writing/types';

interface WritingEngineProps {
  prompt: WritingPrompt;
  backHref: string;
}

export function WritingEngine({ prompt, backHref }: WritingEngineProps) {
  const [text, setText] = useState('');
  const [timeLeft, setTimeLeft] = useState(prompt.timeLimit);
  const [timerActive, setTimerActive] = useState(true);
  const [submitted, setSubmitted] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Timer
  useEffect(() => {
    if (!timerActive || submitted) return;
    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          setTimerActive(false);
          setSubmitted(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [timerActive, submitted]);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s.toString().padStart(2, '0')}`;
  };

  const wordCount = text.trim() ? text.trim().split(/\s+/).length : 0;

  const handleSubmit = useCallback(() => {
    setTimerActive(false);
    setSubmitted(true);
  }, []);

  const timerColor =
    timeLeft > 120 ? 'text-green-600' : timeLeft > 60 ? 'text-yellow-600' : 'text-red-600';

  const wordCountColor =
    wordCount >= prompt.minWords && wordCount <= prompt.maxWords
      ? 'text-green-600'
      : wordCount > prompt.maxWords
        ? 'text-red-600'
        : 'text-gray-500';

  // Result screen
  if (submitted) {
    const timeUsed = prompt.timeLimit - timeLeft;
    const withinRange = wordCount >= prompt.minWords && wordCount <= prompt.maxWords;

    return (
      <div className="mx-auto max-w-2xl">
        <div className="mb-6 text-center">
          <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-blue-50 to-purple-50 text-5xl">
            {withinRange ? '✅' : '📝'}
          </div>
          <h2 className="text-2xl font-bold text-gray-900">Writing Submitted</h2>
          <p className="mt-1 text-gray-500">{prompt.title}</p>
        </div>

        <div className="mb-6 grid grid-cols-3 gap-4 text-center">
          <div className="rounded-2xl border border-gray-200 bg-white p-4">
            <div className={`text-2xl font-bold ${wordCountColor}`}>{wordCount}</div>
            <div className="text-xs text-gray-400">Words</div>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-4">
            <div className="text-2xl font-bold text-purple-600">{formatTime(timeUsed)}</div>
            <div className="text-xs text-gray-400">Time Used</div>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-4">
            <div className={`text-2xl font-bold ${withinRange ? 'text-green-600' : 'text-yellow-600'}`}>
              {withinRange ? 'Good' : wordCount < prompt.minWords ? 'Short' : 'Long'}
            </div>
            <div className="text-xs text-gray-400">Length</div>
          </div>
        </div>

        {/* User's response */}
        <div className="mb-4">
          <h3 className="mb-2 text-sm font-semibold text-gray-700">Your Response:</h3>
          <div className="rounded-xl border border-gray-200 bg-white p-4 text-sm leading-relaxed text-gray-700 whitespace-pre-wrap">
            {text || '(No response written)'}
          </div>
        </div>

        {/* Tips */}
        <div className="mb-6 rounded-xl border border-blue-200 bg-blue-50 p-4">
          <h3 className="mb-2 text-sm font-semibold text-blue-700">Writing Tips:</h3>
          <ul className="space-y-1 text-xs text-blue-600">
            <li>• Aim for {prompt.minWords}-{prompt.maxWords} words to match CELPIP expectations</li>
            <li>• Use clear paragraph structure with an introduction and conclusion</li>
            <li>• Include all required points from the instructions</li>
            <li>• Use formal tone for emails and persuasive tone for surveys</li>
          </ul>
        </div>

        {/* Sample response if available */}
        {prompt.sampleResponse && (
          <details className="mb-6 rounded-xl border border-green-200 bg-green-50">
            <summary className="cursor-pointer px-4 py-3 text-sm font-semibold text-green-700 hover:text-green-800">
              Show Sample Response
            </summary>
            <div className="border-t border-green-200 px-4 py-3 text-sm leading-relaxed text-green-800 whitespace-pre-wrap">
              {prompt.sampleResponse}
            </div>
          </details>
        )}

        <div className="flex gap-3">
          <Link
            href={backHref}
            className="flex-1 rounded-xl border border-gray-200 py-3 text-center font-semibold text-gray-700 transition-all hover:border-blue-300 hover:text-blue-600"
          >
            Back to Writing
          </Link>
        </div>
      </div>
    );
  }

  // Writing phase
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
          CLB {prompt.clbLevel}
        </span>
      </div>

      {/* Task info */}
      <div className="mb-4">
        <div className="flex items-center gap-2">
          <span className="rounded-full bg-purple-50 px-2.5 py-0.5 text-xs font-medium capitalize text-purple-600">
            {prompt.taskType === 'email' ? 'Task 1: Email' : 'Task 2: Survey Response'}
          </span>
        </div>
        <h1 className="mt-2 text-xl font-bold text-gray-900">{prompt.title}</h1>
      </div>

      {/* Scenario */}
      <div className="mb-4 rounded-xl border border-gray-200 bg-white p-4">
        <p className="text-sm leading-relaxed text-gray-700">{prompt.scenario}</p>
        <div className="mt-3 border-t border-gray-100 pt-3">
          <p className="mb-2 text-xs font-semibold text-gray-500 uppercase">In your response, you should:</p>
          <ul className="space-y-1">
            {prompt.instructions.map((inst, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-100 text-xs font-bold text-blue-600">
                  {i + 1}
                </span>
                {inst}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Text editor */}
      <div className="mb-4">
        <textarea
          ref={textareaRef}
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Start writing your response here..."
          className="h-64 w-full resize-y rounded-xl border border-gray-200 bg-white p-4 text-sm leading-relaxed text-gray-900 placeholder-gray-400 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-100"
        />
      </div>

      {/* Word count bar */}
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className={`text-sm font-medium ${wordCountColor}`}>
            {wordCount} words
          </span>
          <span className="text-xs text-gray-400">
            (Target: {prompt.minWords}-{prompt.maxWords})
          </span>
        </div>
        <div className="h-2 w-32 overflow-hidden rounded-full bg-gray-100">
          <div
            className={`h-full rounded-full transition-all ${
              wordCount >= prompt.minWords && wordCount <= prompt.maxWords
                ? 'bg-green-400'
                : wordCount > prompt.maxWords
                  ? 'bg-red-400'
                  : 'bg-blue-400'
            }`}
            style={{
              width: `${Math.min(100, (wordCount / prompt.maxWords) * 100)}%`,
            }}
          />
        </div>
      </div>

      {/* Submit button */}
      <button
        onClick={handleSubmit}
        disabled={wordCount === 0}
        className="w-full rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 py-3 font-semibold text-white shadow-lg shadow-blue-500/25 transition-all hover:shadow-xl disabled:opacity-40"
      >
        Submit Response
      </button>
    </div>
  );
}
