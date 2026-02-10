'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import type { WritingPrompt } from '@/lib/data/writing/types';

interface WritingFeedback {
  scores: {
    taskCompletion: number;
    vocabulary: number;
    grammar: number;
    coherence: number;
    overall: number;
  };
  clbLevel: number;
  strengths: string[];
  improvements: string[];
  correctedSentences: { original: string; corrected: string; explanation: string }[];
  vocabularySuggestions: string[];
  modelAnswer: string;
}

interface WritingEngineProps {
  prompt: WritingPrompt;
  backHref: string;
}

export function WritingEngine({ prompt, backHref }: WritingEngineProps) {
  const [text, setText] = useState('');
  const [timeLeft, setTimeLeft] = useState(prompt.timeLimit);
  const [timerActive, setTimerActive] = useState(true);
  const [submitted, setSubmitted] = useState(false);
  const [showHelpers, setShowHelpers] = useState(false);
  const [activeHelper, setActiveHelper] = useState<'vocab' | 'patterns' | 'structure' | 'mistakes'>('structure');
  const [feedback, setFeedback] = useState<WritingFeedback | null>(null);
  const [loadingFeedback, setLoadingFeedback] = useState(false);
  const [feedbackError, setFeedbackError] = useState('');
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

  const fetchFeedback = useCallback(async () => {
    if (!text.trim() || loadingFeedback) return;
    setLoadingFeedback(true);
    setFeedbackError('');
    try {
      const res = await fetch('/api/writing-feedback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          text,
          scenario: prompt.scenario,
          instructions: prompt.instructions,
          taskType: prompt.taskType,
          clbLevel: prompt.clbLevel,
        }),
      });
      if (!res.ok) throw new Error('Failed to get feedback');
      const data = await res.json();
      setFeedback(data);
    } catch {
      setFeedbackError('Could not get AI feedback. Please try again.');
    } finally {
      setLoadingFeedback(false);
    }
  }, [text, prompt, loadingFeedback]);

  const timerColor =
    timeLeft > 120 ? 'text-green-600' : timeLeft > 60 ? 'text-yellow-600' : 'text-red-600';

  const wordCountColor =
    wordCount >= prompt.minWords && wordCount <= prompt.maxWords
      ? 'text-green-600'
      : wordCount > prompt.maxWords
        ? 'text-red-600'
        : 'text-gray-500';

  const scoreColor = (score: number) =>
    score >= 8 ? 'text-green-600' : score >= 6 ? 'text-blue-600' : score >= 4 ? 'text-yellow-600' : 'text-red-600';

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

        {/* AI Feedback Button */}
        {!feedback && !loadingFeedback && text.trim() && (
          <button
            onClick={fetchFeedback}
            className="mb-6 w-full rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 py-3 font-semibold text-white shadow-lg shadow-purple-500/25 transition-all hover:shadow-xl"
          >
            Get AI Feedback
          </button>
        )}

        {/* Loading feedback */}
        {loadingFeedback && (
          <div className="mb-6 flex items-center justify-center gap-3 rounded-xl border border-purple-200 bg-purple-50 p-6">
            <div className="h-5 w-5 animate-spin rounded-full border-2 border-purple-300 border-t-purple-600" />
            <span className="text-sm font-medium text-purple-700">Analyzing your writing...</span>
          </div>
        )}

        {feedbackError && (
          <div className="mb-6 rounded-xl border border-red-200 bg-red-50 p-4 text-center">
            <p className="text-sm text-red-600">{feedbackError}</p>
            <button onClick={fetchFeedback} className="mt-2 text-xs font-medium text-red-700 underline">
              Try Again
            </button>
          </div>
        )}

        {/* AI Feedback Results */}
        {feedback && (
          <div className="mb-6 space-y-4">
            {/* Scores */}
            <div className="rounded-xl border border-purple-200 bg-white p-4">
              <h3 className="mb-3 text-sm font-semibold text-purple-700">AI Scores</h3>
              <div className="grid grid-cols-2 gap-3">
                {Object.entries(feedback.scores).map(([key, value]) => (
                  <div key={key} className="flex items-center justify-between rounded-lg bg-gray-50 px-3 py-2">
                    <span className="text-xs capitalize text-gray-600">
                      {key.replace(/([A-Z])/g, ' $1').trim()}
                    </span>
                    <span className={`text-sm font-bold ${scoreColor(value)}`}>{value}/10</span>
                  </div>
                ))}
              </div>
              <div className="mt-3 border-t border-gray-100 pt-3 text-center">
                <span className="text-xs text-gray-500">Estimated CLB Level: </span>
                <span className="text-sm font-bold text-purple-600">{feedback.clbLevel}</span>
              </div>
            </div>

            {/* Strengths */}
            <div className="rounded-xl border border-green-200 bg-green-50 p-4">
              <h3 className="mb-2 text-sm font-semibold text-green-700">Strengths</h3>
              <ul className="space-y-1">
                {feedback.strengths.map((s, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-green-700">
                    <span className="mt-0.5 text-green-500">+</span> {s}
                  </li>
                ))}
              </ul>
            </div>

            {/* Areas to Improve */}
            <div className="rounded-xl border border-yellow-200 bg-yellow-50 p-4">
              <h3 className="mb-2 text-sm font-semibold text-yellow-700">Areas to Improve</h3>
              <ul className="space-y-1">
                {feedback.improvements.map((s, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-yellow-700">
                    <span className="mt-0.5 text-yellow-500">!</span> {s}
                  </li>
                ))}
              </ul>
            </div>

            {/* Corrected Sentences */}
            {feedback.correctedSentences.length > 0 && (
              <div className="rounded-xl border border-red-200 bg-white p-4">
                <h3 className="mb-3 text-sm font-semibold text-red-700">Corrections</h3>
                <div className="space-y-3">
                  {feedback.correctedSentences.map((c, i) => (
                    <div key={i} className="rounded-lg bg-gray-50 p-3">
                      <div className="mb-1 text-xs text-red-500 line-through">{c.original}</div>
                      <div className="mb-1 text-xs font-medium text-green-700">{c.corrected}</div>
                      <div className="text-xs text-gray-500 italic">{c.explanation}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Vocabulary Suggestions */}
            {feedback.vocabularySuggestions.length > 0 && (
              <div className="rounded-xl border border-blue-200 bg-blue-50 p-4">
                <h3 className="mb-2 text-sm font-semibold text-blue-700">Vocabulary Suggestions</h3>
                <div className="flex flex-wrap gap-2">
                  {feedback.vocabularySuggestions.map((v, i) => (
                    <span key={i} className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700">
                      {v}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Model Answer */}
            <details className="rounded-xl border border-purple-200 bg-purple-50">
              <summary className="cursor-pointer px-4 py-3 text-sm font-semibold text-purple-700 hover:text-purple-800">
                Show Model Answer
              </summary>
              <div className="border-t border-purple-200 px-4 py-3 text-sm leading-relaxed text-purple-800 whitespace-pre-wrap">
                {feedback.modelAnswer}
              </div>
            </details>
          </div>
        )}

        {/* User's response */}
        <details className="mb-4 rounded-xl border border-gray-200 bg-white">
          <summary className="cursor-pointer px-4 py-3 text-sm font-semibold text-gray-700 hover:text-gray-800">
            Your Response
          </summary>
          <div className="border-t border-gray-100 px-4 py-3 text-sm leading-relaxed text-gray-700 whitespace-pre-wrap">
            {text || '(No response written)'}
          </div>
        </details>

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

      {/* Writing Helpers Toggle */}
      <button
        onClick={() => setShowHelpers(!showHelpers)}
        className={`mb-3 inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium transition-all ${
          showHelpers
            ? 'bg-purple-100 text-purple-700'
            : 'bg-gray-100 text-gray-600 hover:bg-purple-50 hover:text-purple-600'
        }`}
      >
        <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
        {showHelpers ? 'Hide Helpers' : 'Writing Helpers'}
      </button>

      {/* Helpers Panel */}
      {showHelpers && (
        <div className="mb-4 rounded-xl border border-purple-200 bg-white overflow-hidden">
          {/* Helper tabs */}
          <div className="flex border-b border-purple-100 bg-purple-50/50">
            {([
              { key: 'structure', label: 'Structure' },
              { key: 'vocab', label: 'Vocabulary' },
              { key: 'patterns', label: 'Patterns' },
              { key: 'mistakes', label: 'Mistakes' },
            ] as const).map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveHelper(tab.key)}
                className={`flex-1 px-3 py-2 text-xs font-medium transition-colors ${
                  activeHelper === tab.key
                    ? 'border-b-2 border-purple-500 text-purple-700 bg-white'
                    : 'text-gray-500 hover:text-purple-600'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="p-3">
            {activeHelper === 'structure' && (
              <div className="space-y-2">
                {prompt.structureTemplate.map((step, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-gray-700">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-purple-100 text-xs font-bold text-purple-600">
                      {i + 1}
                    </span>
                    <span>{step}</span>
                  </div>
                ))}
              </div>
            )}

            {activeHelper === 'vocab' && (
              <div>
                <div className="mb-2 flex flex-wrap gap-1.5">
                  {prompt.usefulVocabulary.map((w, i) => (
                    <span key={i} className="rounded-full bg-blue-50 px-2.5 py-0.5 text-xs font-medium text-blue-700">
                      {w}
                    </span>
                  ))}
                </div>
                {prompt.usefulIdioms.length > 0 && (
                  <div className="mt-2 border-t border-gray-100 pt-2">
                    <p className="mb-1 text-xs font-semibold text-gray-500">Useful Idioms:</p>
                    <div className="flex flex-wrap gap-1.5">
                      {prompt.usefulIdioms.map((idiom, i) => (
                        <span key={i} className="rounded-full bg-orange-50 px-2.5 py-0.5 text-xs font-medium text-orange-700">
                          {idiom}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {activeHelper === 'patterns' && (
              <ul className="space-y-1.5">
                {prompt.usefulPatterns.map((p, i) => (
                  <li key={i} className="rounded-lg bg-gray-50 px-3 py-2 text-xs text-gray-700 italic">
                    &ldquo;{p}&rdquo;
                  </li>
                ))}
              </ul>
            )}

            {activeHelper === 'mistakes' && (
              <ul className="space-y-1.5">
                {prompt.commonMistakes.map((m, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-red-600">
                    <span className="mt-0.5 shrink-0 text-red-400">&#x26A0;</span>
                    {m}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      )}

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
