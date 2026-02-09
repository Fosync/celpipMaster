'use client';

import Link from 'next/link';
import { StarRating } from '../common/star-rating';
import { SetCompleteAnimation } from './set-complete-animation';

interface QuizResultProps {
  setTitle: string;
  correctCount: number;
  totalCount: number;
  score: number;
  stars: 0 | 1 | 2 | 3;
  backHref: string;
  onRestart: () => void;
}

export function QuizResult({
  setTitle,
  correctCount,
  totalCount,
  score,
  stars,
  backHref,
  onRestart,
}: QuizResultProps) {
  const wrongCount = totalCount - correctCount;
  const xpEarned = correctCount * 10;
  const passed = score >= 80;

  return (
    <div className="mx-auto max-w-lg text-center">
      {passed && <SetCompleteAnimation stars={stars} />}

      <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-lg">
        {/* Trophy */}
        <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-yellow-100 to-amber-100 text-5xl">
          {score >= 80 ? '🏆' : score >= 50 ? '⭐' : '💪'}
        </div>

        <h2 className="text-2xl font-bold text-gray-900">
          {score >= 80 ? 'Excellent!' : score >= 50 ? 'Good job!' : 'Keep practicing!'}
        </h2>
        <p className="mt-1 text-gray-500">You completed {setTitle}</p>

        {/* Stars */}
        {passed && (
          <div className="mt-3 flex justify-center">
            <StarRating stars={stars} />
          </div>
        )}

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
            <span className="font-semibold text-gray-900">{score}%</span>
          </div>
          <div className="mt-2 h-3 overflow-hidden rounded-full bg-gray-100">
            <div
              className={`h-full rounded-full transition-all ${
                score >= 80
                  ? 'bg-gradient-to-r from-green-400 to-emerald-500'
                  : score >= 50
                    ? 'bg-gradient-to-r from-yellow-400 to-orange-500'
                    : 'bg-gradient-to-r from-red-400 to-pink-500'
              }`}
              style={{ width: `${score}%` }}
            />
          </div>
        </div>

        {/* Message for failing */}
        {!passed && (
          <p className="mt-4 text-sm text-amber-600">
            You need 80% or higher to complete this set. Practice your weak words and try again!
          </p>
        )}

        {/* Actions */}
        <div className="mt-8 flex gap-3">
          <button
            onClick={onRestart}
            className="flex-1 rounded-xl border-2 border-gray-200 px-4 py-3 font-semibold text-gray-700 transition-colors hover:border-blue-300 hover:text-blue-600"
          >
            {passed ? 'Try Again' : 'Practice Again'}
          </button>
          <Link
            href={backHref}
            className="flex-1 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-3 text-center font-semibold text-white shadow-lg shadow-blue-500/25 transition-all hover:shadow-xl"
          >
            More Sets
          </Link>
        </div>
      </div>
    </div>
  );
}
