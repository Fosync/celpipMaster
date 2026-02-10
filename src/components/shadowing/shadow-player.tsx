'use client';

import { useState, useCallback, useEffect } from 'react';
import Link from 'next/link';
import type { ShadowingSet, ShadowingSentence } from '@/lib/data/shadowing/types';
import { useShadowing, type ComparisonResult } from '@/hooks/use-shadowing';
import { ComparisonView } from './comparison-view';

interface ShadowPlayerProps {
  set: ShadowingSet;
  backHref: string;
}

type Step = 'listen' | 'record' | 'compare';

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
  const [step, setStep] = useState<Step>('listen');
  const [accuracies, setAccuracies] = useState<number[]>(
    new Array(set.sentences.length).fill(-1)
  );
  const [showTranslation, setShowTranslation] = useState(false);

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

  // Auto-compare when transcript is available
  useEffect(() => {
    if (transcript && step === 'record' && !isRecording) {
      compare(sentence.text);
      setStep('compare');
    }
  }, [transcript, step, isRecording, compare, sentence.text]);

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
    setStep('record');
    startRecording();
  }, [resetShadowing, startRecording]);

  const handleStopRecording = useCallback(() => {
    stopRecording();
  }, [stopRecording]);

  const handleRetry = useCallback(() => {
    resetShadowing();
    setStep('listen');
  }, [resetShadowing]);

  const handleNext = useCallback((compResult: ComparisonResult | null) => {
    // Save accuracy
    const acc = compResult?.accuracy ?? 0;
    setAccuracies((prev) => {
      const next = [...prev];
      next[current] = Math.max(next[current], acc);
      return next;
    });

    resetShadowing();
    setShowTranslation(false);
    setStep('listen');

    if (current < set.sentences.length - 1) {
      setCurrent((c) => c + 1);
    } else {
      // Save to localStorage before showing results
      const final = [...accuracies];
      final[current] = Math.max(final[current], acc);
      saveProgress(set.id, final);
      setPhase('result');
    }
  }, [current, set.sentences.length, set.id, accuracies, resetShadowing]);

  const speedLabel = (speed: ShadowingSentence['speed']) => {
    switch (speed) {
      case 'slow': return 'Slow';
      case 'normal': return 'Normal';
      case 'fast': return 'Fast';
    }
  };

  const speedColor = (speed: ShadowingSentence['speed']) => {
    switch (speed) {
      case 'slow': return 'bg-green-500/20 text-green-400';
      case 'normal': return 'bg-blue-500/20 text-blue-400';
      case 'fast': return 'bg-orange-500/20 text-orange-400';
    }
  };

  // ─── INTRO ───
  if (phase === 'intro') {
    return (
      <div className="mx-auto max-w-2xl">
        <div className="mb-4">
          <Link
            href={backHref}
            className="inline-flex items-center gap-1 text-sm text-gray-400 hover:text-gray-200"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Back
          </Link>
        </div>

        <div className="rounded-2xl border border-gray-700 bg-gray-800 p-8 text-center">
          <div className="mx-auto mb-4 text-5xl">{set.icon}</div>
          <h1 className="text-2xl font-bold text-white">{set.title}</h1>
          <p className="mt-2 text-gray-400">{set.description}</p>

          <div className="mt-6 flex justify-center gap-4">
            <div className="rounded-xl bg-purple-500/10 px-4 py-2 text-center">
              <div className="text-lg font-bold text-purple-400">{set.sentences.length}</div>
              <div className="text-xs text-purple-300/60">Sentences</div>
            </div>
            <div className="rounded-xl bg-blue-500/10 px-4 py-2 text-center">
              <div className="text-lg font-bold text-blue-400">CLB {set.clbLevel}</div>
              <div className="text-xs text-blue-300/60">Level</div>
            </div>
          </div>

          <div className="mt-6 rounded-xl bg-amber-500/10 px-4 py-3 text-sm text-amber-300">
            Listen to each sentence, then press the mic and repeat it. The system will compare your speech word by word. Score 90%+ to pass each sentence.
          </div>

          {!sttSupported && (
            <div className="mt-3 rounded-xl bg-red-500/10 px-4 py-3 text-sm text-red-300">
              Speech recognition is not supported in your browser. Please use Chrome for the best experience.
            </div>
          )}

          <button
            onClick={() => setPhase('practice')}
            className="mt-6 w-full rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 py-3.5 font-semibold text-white shadow-lg shadow-purple-500/25 transition-all hover:shadow-xl"
          >
            Start Shadowing
          </button>
        </div>
      </div>
    );
  }

  // ─── RESULT ───
  if (phase === 'result') {
    const passedCount = accuracies.filter((a) => a >= PASS_THRESHOLD).length;
    const avgAccuracy = accuracies.filter((a) => a >= 0).length > 0
      ? Math.round(
          accuracies.filter((a) => a >= 0).reduce((a, b) => a + b, 0) /
          accuracies.filter((a) => a >= 0).length
        )
      : 0;

    return (
      <div className="mx-auto max-w-2xl">
        <div className="mb-6 text-center">
          <div className="mx-auto mb-4 text-5xl">
            {avgAccuracy >= 90 ? '🎉' : avgAccuracy >= 70 ? '👍' : '💪'}
          </div>
          <h2 className="text-2xl font-bold text-white">{set.title}</h2>
          <p className="mt-1 text-gray-400">Shadowing Complete</p>
        </div>

        <div className="mb-6 grid grid-cols-3 gap-4 text-center">
          <div className="rounded-2xl border border-gray-700 bg-gray-800 p-4">
            <div className="text-2xl font-bold text-purple-400">{avgAccuracy}%</div>
            <div className="text-xs text-gray-500">Avg Accuracy</div>
          </div>
          <div className="rounded-2xl border border-gray-700 bg-gray-800 p-4">
            <div className="text-2xl font-bold text-green-400">{passedCount}</div>
            <div className="text-xs text-gray-500">Passed (90%+)</div>
          </div>
          <div className="rounded-2xl border border-gray-700 bg-gray-800 p-4">
            <div className="text-2xl font-bold text-orange-400">{set.sentences.length - passedCount}</div>
            <div className="text-xs text-gray-500">Needs Work</div>
          </div>
        </div>

        <div className="space-y-2">
          {set.sentences.map((s, i) => {
            const acc = accuracies[i];
            const passed = acc >= PASS_THRESHOLD;
            return (
              <div
                key={s.id}
                className={`rounded-xl border px-4 py-3 ${
                  acc < 0
                    ? 'border-gray-700 bg-gray-800/50'
                    : passed
                      ? 'border-green-500/30 bg-green-500/10'
                      : 'border-red-500/30 bg-red-500/10'
                }`}
              >
                <div className="flex items-center justify-between">
                  <p className="text-sm text-gray-200">{s.text}</p>
                  {acc >= 0 && (
                    <span className={`ml-2 shrink-0 text-sm font-bold ${passed ? 'text-green-400' : 'text-red-400'}`}>
                      {acc}%
                    </span>
                  )}
                </div>
                <p className="mt-1 text-xs text-gray-500">{s.turkishMeaning}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-6 flex gap-3">
          <Link
            href={backHref}
            className="flex-1 rounded-xl border border-gray-600 py-3 text-center font-semibold text-gray-300 transition-all hover:border-purple-500 hover:text-purple-400"
          >
            Back to Sets
          </Link>
          <button
            onClick={() => {
              setCurrent(0);
              setStep('listen');
              setAccuracies(new Array(set.sentences.length).fill(-1));
              resetShadowing();
              setPhase('practice');
            }}
            className="flex-1 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 py-3 font-semibold text-white shadow-lg shadow-purple-500/25 transition-all hover:shadow-xl"
          >
            Practice Again
          </button>
        </div>
      </div>
    );
  }

  // ─── PRACTICE ───
  return (
    <div className="mx-auto max-w-2xl">
      {/* Header */}
      <div className="mb-4 flex items-center justify-between">
        <Link
          href={backHref}
          className="text-sm text-gray-500 hover:text-gray-300"
        >
          ← Back
        </Link>
        <div className="flex items-center gap-3">
          <span className="text-sm text-gray-400">
            {current + 1} / {set.sentences.length}
          </span>
          <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${speedColor(sentence.speed)}`}>
            {speedLabel(sentence.speed)}
          </span>
        </div>
      </div>

      {/* Progress bar */}
      <div className="mb-6 h-1.5 overflow-hidden rounded-full bg-gray-700">
        <div
          className="h-full rounded-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300"
          style={{ width: `${((current + 1) / set.sentences.length) * 100}%` }}
        />
      </div>

      {/* Sentence card */}
      <div className="mb-6 rounded-2xl border border-gray-700 bg-gray-800 p-6">
        <p className="text-center text-xl font-medium leading-relaxed text-white">
          {sentence.text}
        </p>
        <button
          onClick={() => setShowTranslation(!showTranslation)}
          className="mx-auto mt-3 flex items-center gap-1 text-xs text-gray-500 hover:text-purple-400"
        >
          {showTranslation ? 'Hide' : 'Show'} Translation
        </button>
        {showTranslation && (
          <p className="mt-2 text-center text-sm text-gray-400">
            {sentence.turkishMeaning}
          </p>
        )}
      </div>

      {/* Step: Listen */}
      {step === 'listen' && (
        <div className="space-y-4">
          {/* Audio controls */}
          <div className="flex justify-center gap-3">
            <button
              onClick={handleListenSlow}
              disabled={isPlaying}
              className="flex items-center gap-2 rounded-xl border border-green-500/30 bg-green-500/10 px-4 py-2.5 text-sm font-medium text-green-400 transition-all hover:bg-green-500/20 disabled:opacity-40"
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
              Slow
            </button>
            <button
              onClick={handleListen}
              disabled={isPlaying}
              className="flex items-center gap-2 rounded-xl border border-blue-500/30 bg-blue-500/10 px-6 py-2.5 text-sm font-medium text-blue-400 transition-all hover:bg-blue-500/20 disabled:opacity-40"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
              Play
            </button>
            {isPlaying && (
              <button
                onClick={stopPlaying}
                className="flex items-center gap-2 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-2.5 text-sm font-medium text-red-400 transition-all hover:bg-red-500/20"
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
              className="group relative flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-r from-purple-600 to-pink-600 shadow-lg shadow-purple-500/30 transition-all hover:scale-105 hover:shadow-xl disabled:opacity-40"
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
      {step === 'record' && (
        <div className="space-y-4">
          <div className="flex justify-center">
            <button
              onClick={handleStopRecording}
              className="relative flex h-20 w-20 items-center justify-center rounded-full bg-red-600 shadow-lg shadow-red-500/30 transition-all hover:scale-105"
            >
              {/* Pulse animation */}
              <span className="absolute inset-0 animate-ping rounded-full bg-red-600 opacity-25" />
              <svg className="relative h-8 w-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <rect x="6" y="6" width="12" height="12" rx="2" />
              </svg>
              <span className="absolute -bottom-6 text-xs text-red-400">Recording...</span>
            </button>
          </div>
          {transcript && (
            <p className="text-center text-sm text-gray-400">
              Heard: &quot;{transcript}&quot;
            </p>
          )}
        </div>
      )}

      {/* Step: Compare */}
      {step === 'compare' && comparison && (
        <ComparisonView
          result={comparison}
          onRetry={handleRetry}
          onNext={() => handleNext(comparison)}
          isLast={current === set.sentences.length - 1}
        />
      )}
    </div>
  );
}
