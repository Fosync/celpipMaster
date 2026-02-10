'use client';

import { useState, useEffect, useCallback, useRef, useMemo } from 'react';
import Link from 'next/link';
import type { ListeningScript, ListeningSegment } from '@/lib/data/listening/types';
import type { VocabWord } from '@/lib/data/vocabulary/types';
import { highlightVocabInText } from '@/lib/utils/vocab-highlighter';
import { WordPopup } from './word-popup';
import { useGoogleTTS, type TTSVoice } from '@/hooks/use-google-tts';

interface ListeningEngineProps {
  script: ListeningScript;
  backHref: string;
  vocabWords?: VocabWord[];
}

function HighlightedText({ text, vocabWords }: { text: string; vocabWords: VocabWord[] }) {
  const segments = useMemo(
    () => highlightVocabInText(text, vocabWords),
    [text, vocabWords]
  );

  return (
    <>
      {segments.map((seg, i) =>
        seg.vocabWord ? (
          <WordPopup key={i} word={seg.vocabWord}>
            {seg.text}
          </WordPopup>
        ) : (
          <span key={i}>{seg.text}</span>
        )
      )}
    </>
  );
}

type Phase = 'ready' | 'playing' | 'questions' | 'result';

export function ListeningEngine({ script, backHref, vocabWords = [] }: ListeningEngineProps) {
  const [phase, setPhase] = useState<Phase>('ready');
  const [currentSegment, setCurrentSegment] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<(number | null)[]>(
    new Array(script.questions.length).fill(null)
  );
  const [timeLeft, setTimeLeft] = useState(script.timeLimit);
  const [timerActive, setTimerActive] = useState(false);
  const [playCount, setPlayCount] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const abortRef = useRef(false);
  const tts = useGoogleTTS();

  // Timer for question phase
  useEffect(() => {
    if (!timerActive) return;
    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          setTimerActive(false);
          setPhase('result');
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [timerActive]);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s.toString().padStart(2, '0')}`;
  };

  const speakSegment = useCallback(
    async (segment: ListeningSegment): Promise<void> => {
      const voice: TTSVoice = segment.voiceGender === 'female'
        ? 'en-US-Neural2-C'
        : 'en-US-Neural2-D';
      await tts.playText(segment.text, voice, 0.95);
    },
    [tts]
  );

  const playAllSegments = useCallback(async () => {
    tts.stop();
    abortRef.current = false;
    setIsPlaying(true);
    setCurrentSegment(0);

    for (let i = 0; i < script.segments.length; i++) {
      if (abortRef.current) break;
      setCurrentSegment(i);
      await speakSegment(script.segments[i]);
      // Small pause between segments
      if (!abortRef.current && i < script.segments.length - 1) {
        await new Promise((r) => setTimeout(r, 400));
      }
    }

    setIsPlaying(false);
    setPlayCount((c) => c + 1);
  }, [script.segments, speakSegment]);

  const handleStart = useCallback(() => {
    setPhase('playing');
    playAllSegments();
  }, [playAllSegments]);

  const handleReplay = useCallback(() => {
    playAllSegments();
  }, [playAllSegments]);

  const handleStartQuestions = useCallback(() => {
    tts.stop();
    abortRef.current = true;
    setIsPlaying(false);
    setPhase('questions');
    setTimerActive(true);
  }, []);

  const handleSelectAnswer = useCallback(
    (questionIdx: number, optionIdx: number) => {
      if (phase !== 'questions') return;
      setSelectedAnswers((prev) => {
        const next = [...prev];
        next[questionIdx] = optionIdx;
        return next;
      });
    },
    [phase]
  );

  const handleNext = useCallback(() => {
    if (currentQuestion < script.questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      setTimerActive(false);
      setPhase('result');
    }
  }, [currentQuestion, script.questions.length]);

  const handlePrev = useCallback(() => {
    if (currentQuestion > 0) {
      setCurrentQuestion((prev) => prev - 1);
    }
  }, [currentQuestion]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      abortRef.current = true;
      tts.stop();
      if (timerRef.current) clearInterval(timerRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const correctCount = selectedAnswers.filter(
    (a, i) => a === script.questions[i].correctIndex
  ).length;
  const score = Math.round((correctCount / script.questions.length) * 100);

  const timerColor =
    timeLeft > 60 ? 'text-green-600' : timeLeft > 30 ? 'text-yellow-600' : 'text-red-600';

  // Ready phase
  if (phase === 'ready') {
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

        <div className="rounded-2xl border border-gray-200 bg-white p-8 text-center">
          <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-blue-50 to-cyan-50 text-5xl">
            {script.icon}
          </div>
          <h1 className="text-2xl font-bold text-gray-900">{script.title}</h1>
          <p className="mt-2 text-gray-500">{script.description}</p>

          <div className="mt-6 flex justify-center gap-4">
            <div className="rounded-xl bg-blue-50 px-4 py-2 text-center">
              <div className="text-lg font-bold text-blue-600">{script.questions.length}</div>
              <div className="text-xs text-blue-400">Questions</div>
            </div>
            <div className="rounded-xl bg-green-50 px-4 py-2 text-center">
              <div className="text-lg font-bold text-green-600">{Math.floor(script.timeLimit / 60)} min</div>
              <div className="text-xs text-green-400">Time Limit</div>
            </div>
            <div className="rounded-xl bg-purple-50 px-4 py-2 text-center">
              <div className="text-lg font-bold capitalize text-purple-600">{script.format}</div>
              <div className="text-xs text-purple-400">Format</div>
            </div>
          </div>

          <div className="mt-6 rounded-xl bg-amber-50 px-4 py-3 text-sm text-amber-700">
            You will hear the audio played using text-to-speech. Listen carefully — you can replay once before answering questions.
          </div>

          <button
            onClick={handleStart}
            className="mt-6 w-full rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 py-3 font-semibold text-white shadow-lg shadow-blue-500/25 transition-all hover:shadow-xl"
          >
            Start Listening
          </button>
        </div>
      </div>
    );
  }

  // Playing phase
  if (phase === 'playing') {
    return (
      <div className="mx-auto max-w-2xl">
        <div className="mb-4 flex items-center justify-between">
          <span className="text-sm text-gray-500">CLB {script.clbLevel}</span>
          <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium capitalize text-blue-600">
            {script.format}
          </span>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-6">
          <h2 className="mb-4 text-lg font-bold text-gray-900">{script.title}</h2>

          {/* Audio visualization */}
          <div className="mb-6 flex items-center justify-center">
            {isPlaying ? (
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="w-1.5 rounded-full bg-blue-500"
                    style={{
                      height: `${20 + Math.random() * 20}px`,
                      animation: `pulse 0.5s ease-in-out ${i * 0.1}s infinite alternate`,
                    }}
                  />
                ))}
                <style>{`@keyframes pulse { from { height: 12px; } to { height: 36px; } }`}</style>
              </div>
            ) : (
              <div className="flex h-10 items-center justify-center text-sm text-gray-400">
                Audio finished
              </div>
            )}
          </div>

          {/* Speaker transcript (shows who is speaking) */}
          <div className="mb-6 space-y-2">
            {script.segments.map((seg, i) => (
              <div
                key={i}
                className={`flex items-start gap-2 rounded-lg px-3 py-2 text-sm transition-all ${
                  i === currentSegment && isPlaying
                    ? 'bg-blue-50 text-blue-700'
                    : i < currentSegment || !isPlaying
                      ? 'text-gray-400'
                      : 'text-gray-300'
                }`}
              >
                <span className={`shrink-0 font-medium ${
                  i === currentSegment && isPlaying ? 'text-blue-600' : ''
                }`}>
                  {seg.speaker}:
                </span>
                <span className={i === currentSegment && isPlaying ? '' : 'blur-sm select-none'}>
                  {seg.text.slice(0, 40)}...
                </span>
              </div>
            ))}
          </div>

          <div className="flex gap-3">
            {!isPlaying && playCount < 2 && (
              <button
                onClick={handleReplay}
                className="flex-1 rounded-xl border border-blue-200 py-3 font-semibold text-blue-600 transition-all hover:bg-blue-50"
              >
                Replay ({2 - playCount} left)
              </button>
            )}
            <button
              onClick={handleStartQuestions}
              disabled={isPlaying}
              className="flex-1 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 py-3 font-semibold text-white shadow-lg shadow-blue-500/25 transition-all hover:shadow-xl disabled:opacity-40"
            >
              {isPlaying ? 'Listening...' : 'Answer Questions'}
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Result phase
  if (phase === 'result') {
    return (
      <div className="mx-auto max-w-2xl">
        <div className="mb-6 text-center">
          <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-blue-50 to-cyan-50 text-5xl">
            {score >= 80 ? '🎉' : score >= 60 ? '👍' : '📚'}
          </div>
          <h2 className="text-2xl font-bold text-gray-900">{script.title}</h2>
          <p className="mt-1 text-gray-500">Listening Comprehension Result</p>
        </div>

        <div className="mb-6 grid grid-cols-3 gap-4 text-center">
          <div className="rounded-2xl border border-gray-200 bg-white p-4">
            <div className="text-2xl font-bold text-blue-600">
              {correctCount}/{script.questions.length}
            </div>
            <div className="text-xs text-gray-400">Correct</div>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-4">
            <div className="text-2xl font-bold text-purple-600">{score}%</div>
            <div className="text-xs text-gray-400">Score</div>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-4">
            <div className="text-2xl font-bold text-green-600">
              {formatTime(script.timeLimit - timeLeft)}
            </div>
            <div className="text-xs text-gray-400">Time Used</div>
          </div>
        </div>

        {/* Review answers */}
        <div className="space-y-4">
          {script.questions.map((q, qi) => {
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

        {/* Vocabulary found in listening */}
        {vocabWords.length > 0 && (
          <div className="mt-6 rounded-xl border border-blue-200 bg-blue-50 p-4">
            <h3 className="mb-2 text-sm font-semibold text-blue-700">
              Key Vocabulary ({vocabWords.length} words)
            </h3>
            <div className="flex flex-wrap gap-2">
              {vocabWords.map((w) => (
                <WordPopup key={w.id} word={w}>
                  {w.word}
                </WordPopup>
              ))}
            </div>
          </div>
        )}

        {/* Transcript review with highlights */}
        <details className="mt-4 rounded-xl border border-gray-200 bg-gray-50">
          <summary className="cursor-pointer px-4 py-3 text-sm font-medium text-gray-600 hover:text-blue-600">
            Show Full Transcript
          </summary>
          <div className="space-y-2 border-t border-gray-200 px-4 py-3">
            {script.segments.map((seg, i) => (
              <div key={i} className="text-sm">
                <span className="font-medium text-gray-700">{seg.speaker}: </span>
                <span className="text-gray-600">
                  {vocabWords.length > 0 ? (
                    <HighlightedText text={seg.text} vocabWords={vocabWords} />
                  ) : (
                    seg.text
                  )}
                </span>
              </div>
            ))}
          </div>
        </details>

        <div className="mt-6 flex gap-3">
          <Link
            href={backHref}
            className="flex-1 rounded-xl border border-gray-200 py-3 text-center font-semibold text-gray-700 transition-all hover:border-blue-300 hover:text-blue-600"
          >
            Back to Listening
          </Link>
        </div>
      </div>
    );
  }

  // Question phase
  const q = script.questions[currentQuestion];
  const selected = selectedAnswers[currentQuestion];

  return (
    <div className="mx-auto max-w-2xl">
      {/* Header */}
      <div className="mb-4 flex items-center justify-between">
        <span className="text-sm text-gray-500">
          Question {currentQuestion + 1} of {script.questions.length}
        </span>
        <div className={`rounded-full bg-gray-100 px-3 py-1 font-mono text-sm font-bold ${timerColor}`}>
          {formatTime(timeLeft)}
        </div>
      </div>

      {/* Progress bar */}
      <div className="mb-6 h-1.5 overflow-hidden rounded-full bg-gray-100">
        <div
          className="h-full rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 transition-all"
          style={{
            width: `${((currentQuestion + 1) / script.questions.length) * 100}%`,
          }}
        />
      </div>

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
          className="flex-1 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 py-3 font-semibold text-white shadow-lg shadow-blue-500/25 transition-all hover:shadow-xl disabled:opacity-40"
        >
          {currentQuestion === script.questions.length - 1 ? 'Finish' : 'Next'}
        </button>
      </div>
    </div>
  );
}
