'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { placementQuestions, type PlacementQuestion } from '@/lib/data/placement/questions';
import { TestQuestion } from '@/components/placement/test-question';
import { ResultScreen } from '@/components/placement/result-screen';
import { LevelBadge } from '@/components/placement/level-badge';

// ─── Constants ───

const TIME_LIMIT = 600; // 10 minutes in seconds
const STORAGE_KEY = 'celpipmaster_placement';

type Category = 'vocabulary' | 'grammar' | 'reading' | 'sentence-completion';
type Phase = 'welcome' | 'test' | 'result';

interface PlacementResult {
  clbLevel: number;
  totalCorrect: number;
  totalQuestions: number;
  categoryScores: Record<Category, { correct: number; total: number }>;
  date: string;
}

// ─── Question Selection (Adaptive) ───

function selectQuestions(pool: PlacementQuestion[]): PlacementQuestion[] {
  const categories: Category[] = ['vocabulary', 'grammar', 'reading', 'sentence-completion'];
  const selected: PlacementQuestion[] = [];

  for (const cat of categories) {
    const catPool = pool.filter((q) => q.category === cat);
    const byLevel: Record<number, PlacementQuestion[]> = { 4: [], 5: [], 6: [], 7: [] };
    for (const q of catPool) {
      byLevel[q.clbLevel]?.push(q);
    }

    // Pick 5 per category: 1 from CLB 4, 2 from CLB 5, 1 from CLB 6, 1 from CLB 7
    const pick = (level: number, count: number): PlacementQuestion[] => {
      const available = byLevel[level] ?? [];
      const shuffled = [...available].sort(() => Math.random() - 0.5);
      return shuffled.slice(0, count);
    };

    selected.push(...pick(4, 1), ...pick(5, 2), ...pick(6, 1), ...pick(7, 1));
  }

  // Sort by difficulty for adaptive feel: start easy, get harder
  selected.sort((a, b) => {
    const catOrder: Record<string, number> = {
      vocabulary: 0,
      grammar: 1,
      'sentence-completion': 2,
      reading: 3,
    };
    if (a.clbLevel !== b.clbLevel) return a.clbLevel - b.clbLevel;
    return (catOrder[a.category] ?? 0) - (catOrder[b.category] ?? 0);
  });

  return selected;
}

// ─── CLB Level Calculation ───

function calculateCLBLevel(
  answers: { question: PlacementQuestion; correct: boolean }[]
): number {
  let score = 0;
  for (const a of answers) {
    if (a.correct) {
      // Weight higher-level questions more
      switch (a.question.clbLevel) {
        case 4: score += 1; break;
        case 5: score += 2; break;
        case 6: score += 3; break;
        case 7: score += 4; break;
      }
    }
  }

  // Max possible score: 4×(1×1 + 2×2 + 1×3 + 1×4) = 4×12 = 48
  const maxScore = 48;
  const pct = score / maxScore;

  if (pct >= 0.85) return 8;
  if (pct >= 0.7) return 7;
  if (pct >= 0.5) return 6;
  if (pct >= 0.3) return 5;
  return 4;
}

// ─── Main Page Component ───

export default function PlacementTestPage() {
  const router = useRouter();
  const [phase, setPhase] = useState<Phase>('welcome');
  const [questions, setQuestions] = useState<PlacementQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<{ question: PlacementQuestion; correct: boolean; selected: number }[]>([]);
  const [timeRemaining, setTimeRemaining] = useState(TIME_LIMIT);
  const [result, setResult] = useState<PlacementResult | null>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Start timer when test begins
  useEffect(() => {
    if (phase !== 'test') return;

    timerRef.current = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev <= 1) {
          // Time's up - finish the test
          if (timerRef.current) clearInterval(timerRef.current);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [phase]);

  // Auto-finish when time runs out
  useEffect(() => {
    if (timeRemaining === 0 && phase === 'test') {
      finishTest(answers);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timeRemaining]);

  const startTest = useCallback(() => {
    const selected = selectQuestions(placementQuestions);
    setQuestions(selected);
    setCurrentIndex(0);
    setAnswers([]);
    setTimeRemaining(TIME_LIMIT);
    setPhase('test');
  }, []);

  const finishTest = useCallback(
    (finalAnswers: { question: PlacementQuestion; correct: boolean; selected: number }[]) => {
      if (timerRef.current) clearInterval(timerRef.current);

      const clbLevel = calculateCLBLevel(finalAnswers);
      const categories: Category[] = ['vocabulary', 'grammar', 'reading', 'sentence-completion'];
      const categoryScores = {} as Record<Category, { correct: number; total: number }>;

      for (const cat of categories) {
        const catAnswers = finalAnswers.filter((a) => a.question.category === cat);
        categoryScores[cat] = {
          correct: catAnswers.filter((a) => a.correct).length,
          total: catAnswers.length,
        };
      }

      const placementResult: PlacementResult = {
        clbLevel,
        totalCorrect: finalAnswers.filter((a) => a.correct).length,
        totalQuestions: finalAnswers.length,
        categoryScores,
        date: new Date().toISOString(),
      };

      // Save to localStorage
      localStorage.setItem(STORAGE_KEY, JSON.stringify(placementResult));

      setResult(placementResult);
      setPhase('result');
    },
    []
  );

  const handleAnswer = useCallback(
    (selectedIndex: number) => {
      const q = questions[currentIndex];
      const correct = selectedIndex === q.correctIndex;
      const newAnswers = [...answers, { question: q, correct, selected: selectedIndex }];
      setAnswers(newAnswers);

      if (currentIndex + 1 >= questions.length) {
        finishTest(newAnswers);
      } else {
        setCurrentIndex((prev) => prev + 1);
      }
    },
    [questions, currentIndex, answers, finishTest]
  );

  // ─── Welcome Screen ───
  if (phase === 'welcome') {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 px-4">
        <div className="mx-auto max-w-md text-center">
          {/* Logo */}
          <div className="mb-6 flex justify-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 text-2xl font-bold text-white shadow-lg">
              C
            </div>
          </div>

          <h1 className="mb-2 text-3xl font-bold text-gray-900">
            Find Your Level
          </h1>
          <p className="mb-8 text-gray-500">
            Take a quick placement test to determine your CLB level and get a personalized study plan.
          </p>

          {/* Info cards */}
          <div className="mb-8 grid grid-cols-2 gap-3">
            <div className="rounded-2xl border border-gray-200 bg-white p-4 text-center shadow-sm">
              <div className="text-2xl font-bold text-blue-600">20</div>
              <div className="mt-1 text-xs text-gray-500">Questions</div>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-white p-4 text-center shadow-sm">
              <div className="text-2xl font-bold text-purple-600">10</div>
              <div className="mt-1 text-xs text-gray-500">Minutes</div>
            </div>
          </div>

          {/* Categories */}
          <div className="mb-8 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
            <h3 className="mb-3 text-sm font-semibold text-gray-700">What we test</h3>
            <div className="grid grid-cols-2 gap-2">
              {[
                { label: 'Vocabulary', icon: '📚', color: 'bg-blue-50 text-blue-700' },
                { label: 'Grammar', icon: '✏️', color: 'bg-purple-50 text-purple-700' },
                { label: 'Reading', icon: '📖', color: 'bg-green-50 text-green-700' },
                { label: 'Sentence', icon: '🧩', color: 'bg-amber-50 text-amber-700' },
              ].map((item) => (
                <div key={item.label} className={`flex items-center gap-2 rounded-xl px-3 py-2 text-xs font-medium ${item.color}`}>
                  <span>{item.icon}</span>
                  {item.label}
                </div>
              ))}
            </div>
          </div>

          {/* Level range */}
          <div className="mb-8 flex items-center justify-center gap-3">
            <LevelBadge level={4} size="sm" />
            <div className="flex items-center gap-1 text-gray-300">
              <span>→</span><span>→</span><span>→</span>
            </div>
            <LevelBadge level={8} size="sm" />
          </div>

          <button
            onClick={startTest}
            className="w-full rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-4 text-base font-semibold text-white shadow-lg shadow-blue-500/25 transition-all hover:shadow-xl hover:brightness-110"
          >
            Start Placement Test
          </button>

          <button
            onClick={() => router.push('/dashboard')}
            className="mt-3 w-full rounded-2xl px-6 py-3 text-sm font-medium text-gray-500 transition-colors hover:bg-gray-50 hover:text-gray-700"
          >
            Skip for now
          </button>
        </div>
      </div>
    );
  }

  // ─── Test Screen ───
  if (phase === 'test' && questions.length > 0) {
    return (
      <div className="flex min-h-screen flex-col bg-gradient-to-br from-blue-50 via-white to-purple-50 px-4 py-8">
        <TestQuestion
          questionNumber={currentIndex + 1}
          totalQuestions={questions.length}
          question={questions[currentIndex]}
          onAnswer={handleAnswer}
          timeRemaining={timeRemaining}
        />
      </div>
    );
  }

  // ─── Result Screen ───
  if (phase === 'result' && result) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 px-4 py-8">
        <ResultScreen
          clbLevel={result.clbLevel}
          totalCorrect={result.totalCorrect}
          totalQuestions={result.totalQuestions}
          categoryScores={result.categoryScores}
          onStartLearning={() => router.push('/dashboard')}
          onRetakeTest={() => {
            setPhase('welcome');
            setResult(null);
          }}
        />
      </div>
    );
  }

  return null;
}
