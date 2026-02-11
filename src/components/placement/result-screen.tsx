'use client';

import { useEffect, useState } from 'react';
import { LevelBadge } from './level-badge';

interface ResultScreenProps {
  clbLevel: number;
  totalCorrect: number;
  totalQuestions: number;
  categoryScores: {
    vocabulary: { correct: number; total: number };
    grammar: { correct: number; total: number };
    reading: { correct: number; total: number };
    'sentence-completion': { correct: number; total: number };
  };
  onStartLearning: () => void;
  onRetakeTest: () => void;
}

type CategoryKey = keyof ResultScreenProps['categoryScores'];

const categoryMeta: Record<CategoryKey, { label: string; color: string; barColor: string; icon: string; path: string }> = {
  vocabulary: {
    label: 'Vocabulary',
    color: 'text-blue-600',
    barColor: 'bg-blue-500',
    icon: 'Aa',
    path: '/learn/vocabulary',
  },
  grammar: {
    label: 'Grammar',
    color: 'text-purple-600',
    barColor: 'bg-purple-500',
    icon: 'Gr',
    path: '/learn/grammar',
  },
  reading: {
    label: 'Reading',
    color: 'text-green-600',
    barColor: 'bg-green-500',
    icon: 'Rd',
    path: '/learn/reading',
  },
  'sentence-completion': {
    label: 'Sentence Completion',
    color: 'text-amber-600',
    barColor: 'bg-amber-500',
    icon: 'Sc',
    path: '/learn/patterns',
  },
};

function getPercentage(correct: number, total: number): number {
  if (total === 0) return 0;
  return Math.round((correct / total) * 100);
}

interface ConfettiPiece {
  id: number;
  left: number;
  delay: number;
  duration: number;
  color: string;
  size: number;
  isRound: boolean;
}

function ConfettiAnimation() {
  const [pieces, setPieces] = useState<ConfettiPiece[]>([]);

  useEffect(() => {
    const colors = ['#3B82F6', '#8B5CF6', '#EC4899', '#F59E0B', '#10B981', '#EF4444'];
    const generated: ConfettiPiece[] = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 2,
      duration: 2 + Math.random() * 3,
      color: colors[Math.floor(Math.random() * colors.length)],
      size: 4 + Math.random() * 8,
      isRound: Math.random() > 0.5,
    }));
    // eslint-disable-next-line react-hooks/set-state-in-effect -- one-time confetti animation
    setPieces(generated);

    const timer = setTimeout(() => setPieces([]), 5000);
    return () => clearTimeout(timer);
  }, []);

  if (pieces.length === 0) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {pieces.map((piece) => (
        <div
          key={piece.id}
          className="absolute -top-4 animate-bounce"
          style={{
            left: `${piece.left}%`,
            width: `${piece.size}px`,
            height: `${piece.size}px`,
            backgroundColor: piece.color,
            borderRadius: piece.isRound ? '50%' : '2px',
            animation: `confettiFall ${piece.duration}s ease-in ${piece.delay}s forwards`,
          }}
        />
      ))}
      <style>{`
        @keyframes confettiFall {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(100vh) rotate(720deg);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}

export function ResultScreen({
  clbLevel,
  totalCorrect,
  totalQuestions,
  categoryScores,
  onStartLearning,
  onRetakeTest,
}: ResultScreenProps) {
  const [animateIn, setAnimateIn] = useState(false);
  const [showBars, setShowBars] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setAnimateIn(true), 100);
    const t2 = setTimeout(() => setShowBars(true), 600);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  const overallScore = getPercentage(totalCorrect, totalQuestions);
  const showConfetti = clbLevel >= 7;

  const categories = (Object.keys(categoryMeta) as CategoryKey[]).map((key) => {
    const score = categoryScores[key];
    const pct = getPercentage(score.correct, score.total);
    const meta = categoryMeta[key];
    return { key, pct, score, meta };
  });

  const strengths = categories.filter((c) => c.pct >= 70);
  const weaknesses = categories.filter((c) => c.pct < 50);

  const studyRecommendations = weaknesses.map((w) => w.meta.label);

  return (
    <div className="mx-auto max-w-lg">
      {showConfetti && <ConfettiAnimation />}

      {/* Main result card */}
      <div
        className={`rounded-3xl border border-gray-200 bg-white p-8 shadow-lg transition-all duration-700 ${
          animateIn ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}
      >
        {/* CLB Level display */}
        <div className="mb-6 text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-wide text-gray-400">
            Your Placement Level
          </p>
          <div
            className={`inline-block transition-all duration-700 delay-300 ${
              animateIn ? 'scale-100 opacity-100' : 'scale-50 opacity-0'
            }`}
          >
            <LevelBadge level={clbLevel} size="lg" showLabel />
          </div>
        </div>

        {/* Overall score */}
        <div className="mb-6 rounded-2xl bg-gray-50 p-4 text-center">
          <div className="text-3xl font-bold text-gray-900">{overallScore}%</div>
          <div className="mt-1 text-sm text-gray-500">
            {totalCorrect} of {totalQuestions} correct
          </div>
          <div className="mt-3 h-3 overflow-hidden rounded-full bg-gray-200">
            <div
              className={`h-full rounded-full transition-all duration-1000 ease-out ${
                overallScore >= 70
                  ? 'bg-gradient-to-r from-green-400 to-emerald-500'
                  : overallScore >= 50
                    ? 'bg-gradient-to-r from-yellow-400 to-orange-500'
                    : 'bg-gradient-to-r from-red-400 to-pink-500'
              }`}
              style={{ width: showBars ? `${overallScore}%` : '0%' }}
            />
          </div>
        </div>

        {/* Category breakdown */}
        <div className="mb-6">
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-gray-400">
            Score Breakdown
          </h3>
          <div className="space-y-4">
            {categories.map((cat) => (
              <div key={cat.key}>
                <div className="mb-1.5 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span
                      className={`flex h-6 w-6 items-center justify-center rounded text-[10px] font-bold text-white ${cat.meta.barColor}`}
                    >
                      {cat.meta.icon}
                    </span>
                    <span className="text-sm font-medium text-gray-700">{cat.meta.label}</span>
                  </div>
                  <span className="text-sm font-semibold text-gray-900">
                    {cat.score.correct}/{cat.score.total}
                    <span className="ml-1 text-gray-400">({cat.pct}%)</span>
                  </span>
                </div>
                <div className="h-2.5 overflow-hidden rounded-full bg-gray-100">
                  <div
                    className={`h-full rounded-full transition-all duration-1000 ease-out ${cat.meta.barColor}`}
                    style={{ width: showBars ? `${cat.pct}%` : '0%' }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Strengths & Weaknesses */}
        <div className="mb-6 grid grid-cols-2 gap-3">
          {/* Strengths */}
          <div className="rounded-xl border border-green-200 bg-green-50 p-3">
            <div className="mb-2 flex items-center gap-1.5">
              <svg className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-xs font-semibold uppercase text-green-700">Strengths</span>
            </div>
            {strengths.length > 0 ? (
              <ul className="space-y-1">
                {strengths.map((s) => (
                  <li key={s.key} className="text-xs text-green-700">
                    {s.meta.label} ({s.pct}%)
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-xs text-green-600">Keep practicing to build strengths!</p>
            )}
          </div>

          {/* Weaknesses */}
          <div className="rounded-xl border border-red-200 bg-red-50 p-3">
            <div className="mb-2 flex items-center gap-1.5">
              <svg className="h-4 w-4 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-xs font-semibold uppercase text-red-700">Needs Work</span>
            </div>
            {weaknesses.length > 0 ? (
              <ul className="space-y-1">
                {weaknesses.map((w) => (
                  <li key={w.key} className="text-xs text-red-700">
                    {w.meta.label} ({w.pct}%)
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-xs text-red-600">No major weak areas found!</p>
            )}
          </div>
        </div>

        {/* Study Recommendations */}
        <div className="mb-6 rounded-2xl bg-blue-50 p-4">
          <h3 className="mb-2 text-sm font-semibold text-blue-800">Recommended Study Plan</h3>
          {studyRecommendations.length > 0 ? (
            <>
              <p className="mb-3 text-xs text-blue-700">
                Focus on <strong>{studyRecommendations.join(' and ')}</strong> to improve your CLB level.
              </p>
              <div className="space-y-2">
                {weaknesses.map((w) => (
                  <div
                    key={w.key}
                    className="flex items-center gap-2 rounded-lg bg-white px-3 py-2 text-xs shadow-sm"
                  >
                    <span className={`flex h-5 w-5 items-center justify-center rounded text-[8px] font-bold text-white ${w.meta.barColor}`}>
                      {w.meta.icon}
                    </span>
                    <span className="font-medium text-gray-700">{w.meta.label}</span>
                    <svg className="ml-auto h-3.5 w-3.5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <p className="text-xs text-blue-700">
              Great job! You scored well across all categories. Keep building on your strengths and try the next level.
            </p>
          )}
        </div>

        {/* Action buttons */}
        <div className="flex gap-3">
          <button
            onClick={onRetakeTest}
            className="flex-1 rounded-xl border-2 border-gray-200 px-4 py-3 text-sm font-semibold text-gray-700 transition-colors hover:border-blue-300 hover:text-blue-600"
          >
            Retake Test
          </button>
          <button
            onClick={onStartLearning}
            className="flex-1 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/25 transition-all hover:shadow-xl hover:brightness-110"
          >
            Start Learning
          </button>
        </div>
      </div>
    </div>
  );
}
