'use client';

import { useState, useCallback, useEffect } from 'react';
import Link from 'next/link';
import type { VocabWord } from '@/lib/data/vocabulary';

interface VocabQuizProps {
  words: VocabWord[];
  setTitle: string;
  clbLevel: number;
}

type Phase = 'flashcard' | 'quiz' | 'result';

function shuffleArray<T>(arr: T[]): T[] {
  const shuffled = [...arr];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function generateOptions(correctWord: VocabWord, allWords: VocabWord[]): string[] {
  const others = allWords
    .filter((w) => w.id !== correctWord.id)
    .map((w) => w.definition);
  const shuffledOthers = shuffleArray(others).slice(0, 3);
  const options = shuffleArray([correctWord.definition, ...shuffledOthers]);
  return options;
}

let preferredVoice: SpeechSynthesisVoice | null = null;
let voicesLoaded = false;

function loadVoices() {
  if (typeof window === 'undefined' || !window.speechSynthesis) return;
  const voices = window.speechSynthesis.getVoices();
  if (voices.length === 0) return;
  voicesLoaded = true;
  preferredVoice =
    voices.find((v) => v.name.includes('Google US English')) ??
    voices.find((v) => v.name.includes('Samantha')) ??
    voices.find((v) => v.name.includes('Microsoft Zira')) ??
    voices.find((v) => v.lang === 'en-US') ??
    null;
}

function warmUpSpeech() {
  if (typeof window === 'undefined' || !window.speechSynthesis) return;
  // Silent warm-up to fix Chrome speechSynthesis bug
  const warm = new SpeechSynthesisUtterance('');
  warm.volume = 0;
  window.speechSynthesis.speak(warm);
  // Load voices (may fire async)
  loadVoices();
  window.speechSynthesis.addEventListener('voiceschanged', loadVoices);
}

function speak(text: string) {
  if (typeof window === 'undefined' || !window.speechSynthesis) return;
  window.speechSynthesis.cancel();

  setTimeout(() => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    utterance.rate = 0.85;
    utterance.volume = 1.0;
    if (!voicesLoaded) loadVoices();
    if (preferredVoice) utterance.voice = preferredVoice;
    window.speechSynthesis.speak(utterance);
  }, 100);
}

function SpeakButton({ text, label }: { text: string; label?: string }) {
  return (
    <button
      type="button"
      onClick={(e) => {
        e.stopPropagation();
        speak(text);
      }}
      className="inline-flex items-center gap-1.5 rounded-lg bg-blue-100 px-2.5 py-1.5 text-xs font-medium text-blue-700 transition-colors hover:bg-blue-200 active:scale-95"
      title={`Listen: ${text}`}
    >
      <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.536 8.464a5 5 0 010 7.072M17.95 6.05a8 8 0 010 11.9M6.5 8.788v6.424a.5.5 0 00.757.429l4.964-3.212a.5.5 0 000-.858L7.257 8.36a.5.5 0 00-.757.429z" />
      </svg>
      {label}
    </button>
  );
}

export function VocabQuiz({ words, setTitle, clbLevel }: VocabQuizProps) {
  const [phase, setPhase] = useState<Phase>('flashcard');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showBack, setShowBack] = useState(false);
  const [quizWords, setQuizWords] = useState<VocabWord[]>([]);
  const [options, setOptions] = useState<string[]>([]);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [correctCount, setCorrectCount] = useState(0);
  const [wrongCount, setWrongCount] = useState(0);
  const [flashFeedback, setFlashFeedback] = useState<'correct' | 'wrong' | null>(null);

  const totalWords = words.length;
  const currentWord = phase === 'flashcard' ? words[currentIndex] : quizWords[currentIndex];
  const progress = ((currentIndex + 1) / totalWords) * 100;

  // Warm-up speech synthesis on mount
  useEffect(() => {
    warmUpSpeech();
  }, []);

  // Auto-speak word on flashcard change
  useEffect(() => {
    if (phase === 'flashcard' && currentWord) {
      speak(currentWord.word);
    }
  }, [phase, currentIndex, currentWord]);

  const startQuiz = useCallback(() => {
    const shuffled = shuffleArray(words);
    setQuizWords(shuffled);
    setCurrentIndex(0);
    setCorrectCount(0);
    setWrongCount(0);
    setSelectedAnswer(null);
    setIsCorrect(null);
    setPhase('quiz');
    setOptions(generateOptions(shuffled[0], words));
  }, [words]);

  useEffect(() => {
    if (phase === 'quiz' && quizWords.length > 0 && currentIndex < quizWords.length) {
      const opts = generateOptions(quizWords[currentIndex], words);
      // eslint-disable-next-line react-hooks/set-state-in-effect -- derived from prop changes
      setOptions(opts);
    }
  }, [currentIndex, phase, quizWords, words]);

  const handleFlashcardNext = () => {
    setShowBack(false);
    if (currentIndex < totalWords - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      startQuiz();
    }
  };

  const handleAnswer = (answer: string) => {
    if (selectedAnswer) return;

    setSelectedAnswer(answer);
    const correct = answer === currentWord.definition;
    setIsCorrect(correct);

    if (correct) {
      setCorrectCount((c) => c + 1);
      setFlashFeedback('correct');
      // Speak the word on correct answer
      speak(currentWord.word);
    } else {
      setWrongCount((c) => c + 1);
      setFlashFeedback('wrong');
    }

    setTimeout(() => setFlashFeedback(null), 600);

    setTimeout(() => {
      if (currentIndex < totalWords - 1) {
        setCurrentIndex(currentIndex + 1);
        setSelectedAnswer(null);
        setIsCorrect(null);
      } else {
        setPhase('result');
      }
    }, 1500);
  };

  const restart = () => {
    setPhase('flashcard');
    setCurrentIndex(0);
    setShowBack(false);
    setCorrectCount(0);
    setWrongCount(0);
    setSelectedAnswer(null);
    setIsCorrect(null);
  };

  const xpEarned = correctCount * 10;
  const accuracy = totalWords > 0 ? Math.round((correctCount / totalWords) * 100) : 0;

  // === RESULT SCREEN ===
  if (phase === 'result') {
    return (
      <div className="mx-auto max-w-lg text-center">
        <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-lg">
          {/* Trophy */}
          <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-yellow-100 to-amber-100 text-5xl">
            {accuracy >= 80 ? '🏆' : accuracy >= 50 ? '⭐' : '💪'}
          </div>

          <h2 className="text-2xl font-bold text-gray-900">
            {accuracy >= 80 ? 'Excellent!' : accuracy >= 50 ? 'Good job!' : 'Keep practicing!'}
          </h2>
          <p className="mt-1 text-gray-500">You completed {setTitle}</p>

          {/* Stats */}
          <div className="mt-6 grid grid-cols-3 gap-4">
            <div className="rounded-xl bg-green-50 p-3">
              <div className="text-2xl font-bold text-green-600">{correctCount}</div>
              <div className="text-xs text-green-600">Correct</div>
            </div>
            <div className="rounded-xl bg-red-50 p-3">
              <div className="text-2xl font-bold text-red-500">{wrongCount}</div>
              <div className="text-xs text-red-500">Wrong</div>
            </div>
            <div className="rounded-xl bg-purple-50 p-3">
              <div className="text-2xl font-bold text-purple-600">+{xpEarned}</div>
              <div className="text-xs text-purple-600">XP</div>
            </div>
          </div>

          {/* Accuracy bar */}
          <div className="mt-6">
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-500">Accuracy</span>
              <span className="font-semibold text-gray-900">{accuracy}%</span>
            </div>
            <div className="mt-2 h-3 overflow-hidden rounded-full bg-gray-100">
              <div
                className={`h-full rounded-full transition-all ${
                  accuracy >= 80
                    ? 'bg-gradient-to-r from-green-400 to-emerald-500'
                    : accuracy >= 50
                      ? 'bg-gradient-to-r from-yellow-400 to-orange-500'
                      : 'bg-gradient-to-r from-red-400 to-pink-500'
                }`}
                style={{ width: `${accuracy}%` }}
              />
            </div>
          </div>

          {/* Actions */}
          <div className="mt-8 flex gap-3">
            <button
              onClick={restart}
              className="flex-1 rounded-xl border-2 border-gray-200 px-4 py-3 font-semibold text-gray-700 transition-colors hover:border-blue-300 hover:text-blue-600"
            >
              Try Again
            </button>
            <Link
              href="/learn/vocabulary"
              className="flex-1 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-3 font-semibold text-white shadow-lg shadow-blue-500/25 transition-all hover:shadow-xl"
            >
              More Sets
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-2xl">
      {/* Feedback flash overlay */}
      {flashFeedback && (
        <div
          className={`pointer-events-none fixed inset-0 z-50 transition-opacity duration-300 ${
            flashFeedback === 'correct'
              ? 'bg-green-500/10'
              : 'bg-red-500/10'
          }`}
        />
      )}

      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center justify-between">
          <Link
            href="/learn/vocabulary"
            className="flex items-center gap-1 text-sm text-gray-500 hover:text-gray-700"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Back
          </Link>
          <div className="flex items-center gap-2">
            <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
              CLB {clbLevel}
            </span>
            <span className="text-sm text-gray-500">
              {currentIndex + 1}/{totalWords}
            </span>
          </div>
        </div>

        {/* Progress bar */}
        <div className="mt-3 h-2.5 overflow-hidden rounded-full bg-gray-100">
          <div
            className="h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="mt-2 text-center text-sm font-medium text-gray-500">
          {phase === 'flashcard' ? 'Learn the words' : 'Quiz time — pick the correct definition'}
        </div>
      </div>

      {/* === FLASHCARD PHASE === */}
      {phase === 'flashcard' && currentWord && (
        <div
          onClick={() => setShowBack(true)}
          className="group cursor-pointer"
        >
          <div className="relative overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-lg transition-all hover:shadow-xl">
            {/* Top gradient accent */}
            <div className="h-2 bg-gradient-to-r from-blue-500 to-purple-500" />

            <div className="p-8 text-center">
              {/* Word + speak button */}
              <div className="flex items-center justify-center gap-3">
                <h2 className="text-4xl font-bold text-gray-900">{currentWord.word}</h2>
                <SpeakButton text={currentWord.word} />
              </div>
              <span className="mt-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-500">
                {currentWord.partOfSpeech}
              </span>

              {/* Back side (definition + details) */}
              {showBack ? (
                <div className="mt-6 space-y-4 text-left">
                  <div className="rounded-xl bg-blue-50 p-4">
                    <p className="text-sm font-medium text-blue-600">Definition</p>
                    <p className="mt-1 text-gray-800">{currentWord.definition}</p>
                  </div>
                  <div className="rounded-xl bg-green-50 p-4">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium text-green-600">Example</p>
                      <SpeakButton text={currentWord.example} label="Listen" />
                    </div>
                    <p className="mt-1 italic text-gray-700">&ldquo;{currentWord.example}&rdquo;</p>
                  </div>
                  <div className="rounded-xl bg-purple-50 p-4">
                    <p className="text-sm font-medium text-purple-600">Turkce</p>
                    <p className="mt-1 text-gray-800">{currentWord.turkishMeaning}</p>
                  </div>
                </div>
              ) : (
                <p className="mt-8 text-sm text-gray-400">Tap to reveal definition</p>
              )}
            </div>
          </div>

          {/* Next button */}
          {showBack && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleFlashcardNext();
              }}
              className="mt-4 w-full rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-3.5 font-semibold text-white shadow-lg shadow-blue-500/25 transition-all hover:shadow-xl"
            >
              {currentIndex < totalWords - 1 ? 'Next Word' : 'Start Quiz'}
            </button>
          )}
        </div>
      )}

      {/* === QUIZ PHASE === */}
      {phase === 'quiz' && currentWord && (
        <div>
          <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-lg">
            <div className="h-2 bg-gradient-to-r from-purple-500 to-pink-500" />
            <div className="p-8 text-center">
              <p className="text-sm font-medium text-gray-400">What does this word mean?</p>
              <div className="mt-2 flex items-center justify-center gap-3">
                <h2 className="text-4xl font-bold text-gray-900">{currentWord.word}</h2>
                <SpeakButton text={currentWord.word} />
              </div>
              <span className="mt-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-500">
                {currentWord.partOfSpeech}
              </span>
            </div>
          </div>

          {/* Options */}
          <div className="mt-4 space-y-3">
            {options.map((option, idx) => {
              const isSelected = selectedAnswer === option;
              const isCorrectOption = option === currentWord.definition;
              const showResult = selectedAnswer !== null;

              let optionClass =
                'rounded-2xl border-2 px-5 py-4 text-left text-sm transition-all cursor-pointer ';

              if (!showResult) {
                optionClass += 'border-gray-200 bg-white hover:border-blue-400 hover:bg-blue-50';
              } else if (isCorrectOption) {
                optionClass += 'border-green-500 bg-green-50';
              } else if (isSelected && !isCorrectOption) {
                optionClass += 'border-red-500 bg-red-50';
              } else {
                optionClass += 'border-gray-200 bg-white opacity-50';
              }

              return (
                <button
                  key={idx}
                  onClick={() => handleAnswer(option)}
                  disabled={selectedAnswer !== null}
                  className={`flex w-full items-center gap-3 ${optionClass}`}
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
                      ? '✓'
                      : showResult && isSelected && !isCorrectOption
                        ? '✗'
                        : String.fromCharCode(65 + idx)}
                  </span>
                  <span className={showResult && isCorrectOption ? 'font-medium text-green-800' : 'text-gray-700'}>
                    {option}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Feedback message */}
          {selectedAnswer && (
            <div
              className={`mt-4 rounded-xl p-4 text-center text-sm font-medium ${
                isCorrect
                  ? 'bg-green-50 text-green-700'
                  : 'bg-red-50 text-red-700'
              }`}
            >
              {isCorrect ? (
                <span>Correct! +10 XP 🎉</span>
              ) : (
                <span>
                  Not quite. The answer is: <strong>{currentWord.definition}</strong>
                </span>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
