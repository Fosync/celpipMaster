'use client';

import { useState, useCallback, useEffect, useRef } from 'react';
import Link from 'next/link';
import type { ShadowingSet, ShadowingSentence } from '@/lib/data/shadowing/types';
import { useShadowing, type ComparisonResult } from '@/hooks/use-shadowing';
import { ComparisonView } from './comparison-view';

interface ShadowPlayerProps {
  set: ShadowingSet;
  backHref: string;
}

type UserStep = 'listen' | 'record' | 'compare';

const PASS_THRESHOLD = 90;
const STORAGE_KEY = 'shadowing-progress';

function loadProgress(): Record<string, number[]> {
  if (typeof window === 'undefined') return {};
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
  } catch {
    return {};
  }
}

function saveProgress(setId: string, accuracies: number[]) {
  if (typeof window === 'undefined') return;
  const progress = loadProgress();
  progress[setId] = accuracies;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
}

export function ShadowPlayer({ set, backHref }: ShadowPlayerProps) {
  const [phase, setPhase] = useState<'intro' | 'practice' | 'result'>('intro');
  const [current, setCurrent] = useState(0);
  const [userStep, setUserStep] = useState<UserStep>('listen');
  const [accuracies, setAccuracies] = useState<number[]>(
    new Array(set.sentences.length).fill(-1)
  );
  const [showTranslation, setShowTranslation] = useState(false);
  const [completedIndices, setCompletedIndices] = useState<Set<number>>(new Set());
  const [aiAutoPlaying, setAiAutoPlaying] = useState(false);

  const chatEndRef = useRef<HTMLDivElement>(null);
  const currentBubbleRef = useRef<HTMLDivElement>(null);

  const {
    isPlaying,
    playSentence,
    stopPlaying,
    isRecording,
    transcript,
    sttSupported,
    startRecording,
    stopRecording,
    comparison,
    compare,
    reset: resetShadowing,
  } = useShadowing();

  const sentence = set.sentences[current];
  const isAiSpeaker = sentence?.speaker === 'ai';
  const userSentenceIndices = set.sentences
    .map((s, i) => (s.speaker === 'user' ? i : -1))
    .filter((i) => i >= 0);

  // Scroll current bubble into view
  useEffect(() => {
    if (phase === 'practice' && currentBubbleRef.current) {
      currentBubbleRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [current, phase, userStep]);

  // Auto-play AI sentences
  useEffect(() => {
    if (phase !== 'practice') return;
    if (!isAiSpeaker) return;
    if (aiAutoPlaying) return;

    // eslint-disable-next-line react-hooks/set-state-in-effect -- triggering auto-play on sentence change
    setAiAutoPlaying(true);
    playSentence(sentence.text, sentence.speed);
  }, [phase, current, isAiSpeaker, aiAutoPlaying, playSentence, sentence]);

  // Auto-advance after AI audio finishes
  useEffect(() => {
    if (!aiAutoPlaying) return;
    if (isPlaying) return;

    // Audio finished playing
    const timer = setTimeout(() => {
      setAiAutoPlaying(false);
      setCompletedIndices((prev) => new Set(prev).add(current));

      if (current < set.sentences.length - 1) {
        setCurrent((c) => c + 1);
      } else {
        // Last sentence was AI, finish
        saveProgress(set.id, accuracies);
        setPhase('result');
      }
    }, 600);

    return () => clearTimeout(timer);
  }, [aiAutoPlaying, isPlaying, current, set.sentences.length, set.id, accuracies]);

  // Auto-compare when transcript is available (user sentences)
  useEffect(() => {
    if (transcript && userStep === 'record' && !isRecording) {
      compare(sentence.text);
      // eslint-disable-next-line react-hooks/set-state-in-effect -- auto-advancing after recording ends
      setUserStep('compare');
    }
  }, [transcript, userStep, isRecording, compare, sentence?.text]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      stopPlaying();
    };
  }, [stopPlaying]);

  const handleListen = useCallback(() => {
    playSentence(sentence.text, sentence.speed);
  }, [playSentence, sentence]);

  const handleListenSlow = useCallback(() => {
    playSentence(sentence.text, 'slow');
  }, [playSentence, sentence.text]);

  const handleRecord = useCallback(() => {
    resetShadowing();
    setUserStep('record');
    startRecording();
  }, [resetShadowing, startRecording]);

  const handleStopRecording = useCallback(() => {
    stopRecording();
  }, [stopRecording]);

  const handleRetry = useCallback(() => {
    resetShadowing();
    setUserStep('listen');
  }, [resetShadowing]);

  const handleNext = useCallback((compResult: ComparisonResult | null) => {
    const acc = compResult?.accuracy ?? 0;
    const newAccuracies = [...accuracies];
    newAccuracies[current] = Math.max(newAccuracies[current], acc);
    setAccuracies(newAccuracies);

    setCompletedIndices((prev) => new Set(prev).add(current));
    resetShadowing();
    setShowTranslation(false);
    setUserStep('listen');
    setAiAutoPlaying(false);

    if (current < set.sentences.length - 1) {
      setCurrent((c) => c + 1);
    } else {
      saveProgress(set.id, newAccuracies);
      setPhase('result');
    }
  }, [current, set.sentences.length, set.id, accuracies, resetShadowing]);

  const handleReplayAi = useCallback((text: string, speed: ShadowingSentence['speed']) => {
    playSentence(text, speed);
  }, [playSentence]);

  const speedLabel = (speed: ShadowingSentence['speed']) => {
    switch (speed) {
      case 'slow': return 'Slow';
      case 'normal': return 'Normal';
      case 'fast': return 'Fast';
    }
  };

  const speedColor = (speed: ShadowingSentence['speed']) => {
    switch (speed) {
      case 'slow': return 'bg-green-50 text-green-600 border-green-200';
      case 'normal': return 'bg-blue-50 text-blue-600 border-blue-200';
      case 'fast': return 'bg-orange-50 text-orange-600 border-orange-200';
    }
  };

  // ─── INTRO ───
  if (phase === 'intro') {
    return (
      <div className="mx-auto max-w-2xl">
        <div className="mb-4">
          <Link
            href={backHref}
            className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-gray-700"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Back
          </Link>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-8 text-center shadow-sm">
          <div className="mx-auto mb-4 text-5xl">{set.icon}</div>
          <h1 className="text-2xl font-bold text-gray-900">{set.title}</h1>
          <p className="mt-2 text-gray-500">{set.description}</p>

          {/* Context / Scene description */}
          {set.context && (
            <div className="mt-4 rounded-xl border border-purple-200 bg-purple-50 px-4 py-3 text-left">
              <div className="mb-1 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-purple-600">
                <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7 4V2m0 2a2 2 0 012 2v1a2 2 0 01-2 2 2 2 0 01-2-2V6a2 2 0 012-2zm0 10v2m0-2a2 2 0 00-2-2H4a2 2 0 00-2 2 2 2 0 002 2h1a2 2 0 002-2zm10-10V2m0 2a2 2 0 012 2v1a2 2 0 01-2 2 2 2 0 01-2-2V6a2 2 0 012-2z" />
                </svg>
                Scene
              </div>
              <p className="text-sm text-purple-800">{set.context}</p>
            </div>
          )}

          <div className="mt-6 flex justify-center gap-4">
            <div className="rounded-xl border border-purple-100 bg-purple-50 px-4 py-2 text-center">
              <div className="text-lg font-bold text-purple-600">{set.sentences.length}</div>
              <div className="text-xs text-purple-400">Lines</div>
            </div>
            <div className="rounded-xl border border-blue-100 bg-blue-50 px-4 py-2 text-center">
              <div className="text-lg font-bold text-blue-600">CLB {set.clbLevel}</div>
              <div className="text-xs text-blue-400">Level</div>
            </div>
            <div className="rounded-xl border border-green-100 bg-green-50 px-4 py-2 text-center">
              <div className="text-lg font-bold text-green-600">{userSentenceIndices.length}</div>
              <div className="text-xs text-green-400">Your Lines</div>
            </div>
          </div>

          <div className="mt-6 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-700">
            Practice a real conversation! Listen to the AI speaker, then repeat your lines when prompted. Score 90%+ to pass each of your lines.
          </div>

          {!sttSupported && (
            <div className="mt-3 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
              Speech recognition is not supported in your browser. Please use Chrome for the best experience.
            </div>
          )}

          <button
            onClick={() => setPhase('practice')}
            className="mt-6 w-full rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 py-3.5 font-semibold text-white shadow-lg shadow-purple-200 transition-all hover:shadow-xl hover:shadow-purple-300"
          >
            Start Conversation
          </button>
        </div>
      </div>
    );
  }

  // ─── RESULT ───
  if (phase === 'result') {
    const userAccuracies = accuracies.filter((_, i) => set.sentences[i].speaker === 'user');
    const passedCount = userAccuracies.filter((a) => a >= PASS_THRESHOLD).length;
    const scoredAccuracies = userAccuracies.filter((a) => a >= 0);
    const avgAccuracy = scoredAccuracies.length > 0
      ? Math.round(scoredAccuracies.reduce((a, b) => a + b, 0) / scoredAccuracies.length)
      : 0;

    return (
      <div className="mx-auto max-w-2xl">
        <div className="mb-6 text-center">
          <div className="mx-auto mb-4 text-5xl">
            {avgAccuracy >= 90 ? '🎉' : avgAccuracy >= 70 ? '👍' : '💪'}
          </div>
          <h2 className="text-2xl font-bold text-gray-900">{set.title}</h2>
          <p className="mt-1 text-gray-500">Conversation Complete</p>
        </div>

        <div className="mb-6 grid grid-cols-3 gap-4 text-center">
          <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
            <div className="text-2xl font-bold text-purple-600">{avgAccuracy}%</div>
            <div className="text-xs text-gray-500">Avg Accuracy</div>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
            <div className="text-2xl font-bold text-green-600">{passedCount}</div>
            <div className="text-xs text-gray-500">Passed (90%+)</div>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
            <div className="text-2xl font-bold text-orange-600">{userSentenceIndices.length - passedCount}</div>
            <div className="text-xs text-gray-500">Needs Work</div>
          </div>
        </div>

        {/* Context reminder */}
        {set.context && (
          <div className="mb-4 rounded-xl border border-gray-200 bg-gray-50 px-4 py-2.5 text-center text-sm text-gray-500">
            {set.context}
          </div>
        )}

        {/* Full conversation review */}
        <div className="space-y-3">
          {set.sentences.map((s, i) => {
            const isAi = s.speaker === 'ai';
            const acc = accuracies[i];
            const passed = acc >= PASS_THRESHOLD;

            return (
              <div
                key={s.id}
                className={`flex ${isAi ? 'justify-start' : 'justify-end'}`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                    isAi
                      ? 'rounded-tl-md border border-gray-200 bg-gray-50'
                      : acc < 0
                        ? 'rounded-tr-md border border-gray-200 bg-blue-50'
                        : passed
                          ? 'rounded-tr-md border border-green-300 bg-green-50'
                          : 'rounded-tr-md border border-red-300 bg-red-50'
                  }`}
                >
                  <div className="mb-1 flex items-center gap-1.5">
                    <span className="text-xs">
                      {isAi ? '🤖' : '🎤'}
                    </span>
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-gray-400">
                      {isAi ? 'AI' : 'You'}
                    </span>
                    {!isAi && acc >= 0 && (
                      <span className={`ml-auto text-xs font-bold ${passed ? 'text-green-600' : 'text-red-600'}`}>
                        {acc}%
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-gray-800">{s.text}</p>
                  <p className="mt-1 text-xs text-gray-400">{s.turkishMeaning}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-6 flex gap-3">
          <Link
            href={backHref}
            className="flex-1 rounded-xl border border-gray-300 py-3 text-center font-semibold text-gray-600 transition-all hover:border-purple-400 hover:text-purple-600"
          >
            Back to Sets
          </Link>
          <button
            onClick={() => {
              setCurrent(0);
              setUserStep('listen');
              setAccuracies(new Array(set.sentences.length).fill(-1));
              setCompletedIndices(new Set());
              setAiAutoPlaying(false);
              resetShadowing();
              setPhase('practice');
            }}
            className="flex-1 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 py-3 font-semibold text-white shadow-lg shadow-purple-200 transition-all hover:shadow-xl hover:shadow-purple-300"
          >
            Practice Again
          </button>
        </div>
      </div>
    );
  }

  // ─── PRACTICE (Conversation Bubble Mode) ───
  return (
    <div className="mx-auto max-w-2xl">
      {/* Header */}
      <div className="mb-3 flex items-center justify-between">
        <Link
          href={backHref}
          className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-gray-700"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          Back
        </Link>
        <div className="flex items-center gap-3">
          <span className="text-sm text-gray-500">
            {current + 1} / {set.sentences.length}
          </span>
          <span className={`rounded-full border px-2.5 py-0.5 text-xs font-medium ${speedColor(sentence.speed)}`}>
            {speedLabel(sentence.speed)}
          </span>
        </div>
      </div>

      {/* Progress bar */}
      <div className="mb-2 h-1.5 overflow-hidden rounded-full bg-gray-100">
        <div
          className="h-full rounded-full bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-300"
          style={{ width: `${((current + 1) / set.sentences.length) * 100}%` }}
        />
      </div>

      {/* Step indicators */}
      <div className="mb-4 flex items-center gap-1 overflow-x-auto pb-1">
        {set.sentences.map((s, i) => {
          const isCompleted = completedIndices.has(i);
          const isCurrent = i === current;
          const isAi = s.speaker === 'ai';
          const acc = accuracies[i];
          const passed = acc >= PASS_THRESHOLD;

          return (
            <div
              key={s.id}
              className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[10px] font-bold transition-all ${
                isCurrent
                  ? 'scale-110 ring-2 ring-purple-400 ring-offset-1 ' + (isAi ? 'bg-gray-200 text-gray-700' : 'bg-blue-500 text-white')
                  : isCompleted
                    ? isAi
                      ? 'bg-gray-200 text-gray-500'
                      : passed
                        ? 'bg-green-500 text-white'
                        : 'bg-orange-400 text-white'
                    : 'bg-gray-100 text-gray-400'
              }`}
              title={`${s.speaker === 'ai' ? 'AI' : 'You'}: ${s.text.substring(0, 30)}...`}
            >
              {isAi ? '🤖' : (i + 1)}
            </div>
          );
        })}
      </div>

      {/* Context banner */}
      {set.context && (
        <div className="mb-4 rounded-lg border border-purple-100 bg-purple-50 px-3 py-2 text-center text-xs text-purple-600">
          {set.context}
        </div>
      )}

      {/* Translation toggle */}
      <div className="mb-3 flex justify-end">
        <button
          onClick={() => setShowTranslation(!showTranslation)}
          className="flex items-center gap-1 rounded-full border border-gray-200 bg-white px-3 py-1 text-xs text-gray-500 shadow-sm transition-all hover:border-purple-300 hover:text-purple-600"
        >
          <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
          </svg>
          {showTranslation ? 'Hide' : 'Show'} Translation
        </button>
      </div>

      {/* Chat area */}
      <div className="mb-4 space-y-3 rounded-2xl border border-gray-200 bg-gray-50/50 p-4 shadow-sm">
        {set.sentences.map((s, i) => {
          const isCompleted = completedIndices.has(i);
          const isCurrent = i === current;
          const isAi = s.speaker === 'ai';
          const acc = accuracies[i];
          const passed = acc >= PASS_THRESHOLD;

          // Don't render future sentences
          if (i > current) return null;

          // Completed bubbles (past sentences)
          if (isCompleted && !isCurrent) {
            return (
              <div
                key={s.id}
                className={`flex ${isAi ? 'justify-start' : 'justify-end'}`}
              >
                <div
                  className={`group relative max-w-[80%] rounded-2xl px-3.5 py-2.5 opacity-75 transition-opacity hover:opacity-100 ${
                    isAi
                      ? 'rounded-tl-md border border-gray-200 bg-white'
                      : passed
                        ? 'rounded-tr-md border border-green-200 bg-green-50'
                        : 'rounded-tr-md border border-orange-200 bg-orange-50'
                  }`}
                >
                  <div className="mb-0.5 flex items-center gap-1.5">
                    <span className="text-xs">{isAi ? '🤖' : '🎤'}</span>
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-gray-400">
                      {isAi ? 'AI' : 'You'}
                    </span>
                    {!isAi && acc >= 0 && (
                      <span className={`ml-auto text-[10px] font-bold ${passed ? 'text-green-600' : 'text-orange-600'}`}>
                        {acc}%
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-gray-700">{s.text}</p>
                  {showTranslation && (
                    <p className="mt-0.5 text-[11px] text-gray-400">{s.turkishMeaning}</p>
                  )}
                  {/* Replay button for AI bubbles */}
                  {isAi && (
                    <button
                      onClick={() => handleReplayAi(s.text, s.speed)}
                      className="absolute -right-2 top-1/2 -translate-y-1/2 rounded-full border border-gray-200 bg-white p-1 opacity-0 shadow-sm transition-all group-hover:opacity-100"
                      title="Replay"
                    >
                      <svg className="h-3 w-3 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </button>
                  )}
                </div>
              </div>
            );
          }

          // Current sentence bubble
          if (isCurrent) {
            return (
              <div
                key={s.id}
                ref={currentBubbleRef}
                className={`flex ${isAi ? 'justify-start' : 'justify-end'}`}
              >
                <div
                  className={`relative max-w-[85%] rounded-2xl px-4 py-3 shadow-md transition-all ${
                    isAi
                      ? 'rounded-tl-md border-2 border-purple-300 bg-white ring-4 ring-purple-100'
                      : userStep === 'compare' && comparison && comparison.accuracy >= PASS_THRESHOLD
                        ? 'rounded-tr-md border-2 border-green-400 bg-green-50 ring-4 ring-green-100'
                        : 'rounded-tr-md border-2 border-blue-300 bg-blue-50 ring-4 ring-blue-100'
                  }`}
                >
                  <div className="mb-1 flex items-center gap-1.5">
                    <span className="text-sm">{isAi ? '🤖' : '🎤'}</span>
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-gray-500">
                      {isAi ? 'AI Speaking' : 'Your Turn'}
                    </span>
                    {isAi && aiAutoPlaying && isPlaying && (
                      <span className="ml-auto flex items-center gap-1 text-[10px] text-purple-500">
                        <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-purple-500" />
                        Playing...
                      </span>
                    )}
                  </div>

                  {/* AI sentence: show text + playing indicator */}
                  {isAi && (
                    <>
                      <p className="text-base font-medium text-gray-900">{s.text}</p>
                      {showTranslation && (
                        <p className="mt-1 text-xs text-gray-400">{s.turkishMeaning}</p>
                      )}
                    </>
                  )}

                  {/* User sentence: ghost text + controls */}
                  {!isAi && (
                    <>
                      <p className={`text-base font-medium ${
                        userStep === 'compare' && comparison && comparison.accuracy >= PASS_THRESHOLD
                          ? 'text-gray-900'
                          : 'text-blue-400/70'
                      }`}>
                        {s.text}
                      </p>
                      {showTranslation && (
                        <p className="mt-1 text-xs text-gray-400">{s.turkishMeaning}</p>
                      )}
                    </>
                  )}
                </div>
              </div>
            );
          }

          return null;
        })}
        <div ref={chatEndRef} />
      </div>

      {/* Controls area - only for user sentences */}
      {!isAiSpeaker && (
        <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
          {/* Step: Listen */}
          {userStep === 'listen' && (
            <div className="space-y-4">
              <p className="text-center text-xs font-medium uppercase tracking-wider text-gray-400">
                Listen, then speak
              </p>
              {/* Audio controls */}
              <div className="flex justify-center gap-3">
                <button
                  onClick={handleListenSlow}
                  disabled={isPlaying}
                  className="flex items-center gap-2 rounded-xl border border-green-200 bg-green-50 px-4 py-2.5 text-sm font-medium text-green-600 transition-all hover:bg-green-100 disabled:opacity-40"
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                  Slow
                </button>
                <button
                  onClick={handleListen}
                  disabled={isPlaying}
                  className="flex items-center gap-2 rounded-xl border border-blue-200 bg-blue-50 px-6 py-2.5 text-sm font-medium text-blue-600 transition-all hover:bg-blue-100 disabled:opacity-40"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                  Play
                </button>
                {isPlaying && (
                  <button
                    onClick={stopPlaying}
                    className="flex items-center gap-2 rounded-xl border border-red-200 bg-red-50 px-4 py-2.5 text-sm font-medium text-red-600 transition-all hover:bg-red-100"
                  >
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                      <rect x="6" y="4" width="4" height="16" />
                      <rect x="14" y="4" width="4" height="16" />
                    </svg>
                    Stop
                  </button>
                )}
              </div>

              {/* Mic button */}
              <div className="flex justify-center pt-2">
                <button
                  onClick={handleRecord}
                  disabled={!sttSupported}
                  className="group relative flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-r from-purple-600 to-blue-600 shadow-lg shadow-purple-200 transition-all hover:scale-105 hover:shadow-xl hover:shadow-purple-300 disabled:opacity-40"
                >
                  <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                  </svg>
                  <span className="absolute -bottom-6 text-xs text-gray-400">Tap to speak</span>
                </button>
              </div>
            </div>
          )}

          {/* Step: Recording */}
          {userStep === 'record' && (
            <div className="space-y-4">
              <p className="text-center text-xs font-medium uppercase tracking-wider text-red-500">
                Recording...
              </p>
              <div className="flex justify-center">
                <button
                  onClick={handleStopRecording}
                  className="relative flex h-20 w-20 items-center justify-center rounded-full bg-red-500 shadow-lg shadow-red-200 transition-all hover:scale-105"
                >
                  <span className="absolute inset-0 animate-ping rounded-full bg-red-500 opacity-25" />
                  <svg className="relative h-8 w-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <rect x="6" y="6" width="12" height="12" rx="2" />
                  </svg>
                </button>
              </div>
              {transcript && (
                <p className="text-center text-sm text-gray-500">
                  Heard: &quot;{transcript}&quot;
                </p>
              )}
            </div>
          )}

          {/* Step: Compare */}
          {userStep === 'compare' && comparison && (
            <ComparisonView
              result={comparison}
              onRetry={handleRetry}
              onNext={() => handleNext(comparison)}
              isLast={current === set.sentences.length - 1}
            />
          )}
        </div>
      )}

      {/* AI auto-play indicator */}
      {isAiSpeaker && (
        <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
          <div className="flex flex-col items-center gap-3">
            {aiAutoPlaying && isPlaying ? (
              <>
                <div className="flex items-center gap-1">
                  <span className="inline-block h-3 w-1 animate-pulse rounded-full bg-purple-400" style={{ animationDelay: '0ms' }} />
                  <span className="inline-block h-5 w-1 animate-pulse rounded-full bg-purple-500" style={{ animationDelay: '150ms' }} />
                  <span className="inline-block h-4 w-1 animate-pulse rounded-full bg-purple-400" style={{ animationDelay: '300ms' }} />
                  <span className="inline-block h-6 w-1 animate-pulse rounded-full bg-purple-500" style={{ animationDelay: '100ms' }} />
                  <span className="inline-block h-3 w-1 animate-pulse rounded-full bg-purple-400" style={{ animationDelay: '250ms' }} />
                </div>
                <p className="text-sm text-gray-500">AI is speaking...</p>
              </>
            ) : (
              <>
                <div className="h-5 w-5 animate-spin rounded-full border-2 border-gray-200 border-t-purple-500" />
                <p className="text-sm text-gray-400">Loading audio...</p>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
