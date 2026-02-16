'use client';

import Link from 'next/link';
import type { QuizAnswer } from '@/types/learning';
import { StarRating } from '../common/star-rating';
import { SetCompleteAnimation } from './set-complete-animation';

interface QuizResultProps {
  setTitle: string;
  correctCount: number;
  totalCount: number;
  score: number;
  stars: 0 | 1 | 2 | 3;
  answers: QuizAnswer[];
  backHref: string;
  onRestart: () => void;
  onPracticeWeak: () => void;
}

export function QuizResult({
  setTitle,
  correctCount,
  totalCount,
  score,
  stars,
  answers,
  backHref,
  onRestart,
  onPracticeWeak,
}: QuizResultProps) {
  const wrongCount = totalCount - correctCount;
  const xpEarned = correctCount * 10;
  const passed = score >= 80;
  const wrongAnswers = answers.filter((a) => !a.correct);

  // Deduplicate wrong answers (a word can appear multiple times)
  const uniqueWrongAnswers = wrongAnswers.reduce<QuizAnswer[]>((acc, answer) => {
    if (!acc.find((a) => a.wordId === answer.wordId)) {
      acc.push(answer);
    }
    return acc;
  }, []);

  return (
    <div className="mx-auto max-w-lg">
      {passed && <SetCompleteAnimation stars={stars} />}

      <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-lg text-center">
        {/* Trophy */}
        <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-yellow-100 to-amber-100 text-5xl">
          {score >= 80 ? '🏆' : score >= 50 ? '⭐' : '💪'}
        </div>

        <h2 className="text-2xl font-bold text-gray-900">
          {score >= 90 ? 'Mukemmel!' : score >= 80 ? 'Harika!' : score >= 50 ? 'Iyi gidiyor!' : 'Pratik yapmaya devam!'}
        </h2>
        <p className="mt-1 text-gray-500">{setTitle} tamamlandi</p>

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
            <div className="text-xs text-green-600">Dogru</div>
          </div>
          <div className="rounded-xl bg-red-50 p-3">
            <div className="text-2xl font-bold text-red-500">{wrongCount}</div>
            <div className="text-xs text-red-500">Yanlis</div>
          </div>
          <div className="rounded-xl bg-purple-50 p-3">
            <div className="text-2xl font-bold text-purple-600">+{xpEarned}</div>
            <div className="text-xs text-purple-600">XP</div>
          </div>
        </div>

        {/* Accuracy bar */}
        <div className="mt-6">
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-500">Basari orani</span>
            <span className="font-semibold text-gray-900">%{score}</span>
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

        {/* Recommendation message */}
        <div className="mt-4">
          {score >= 80 ? (
            <p className="text-sm text-green-600">
              Tebrikler! Sonraki sete gecebilirsin.
            </p>
          ) : score >= 60 ? (
            <p className="text-sm text-amber-600">
              Biraz daha pratik yap ve tekrar dene!
            </p>
          ) : (
            <p className="text-sm text-red-600">
              Bu seti tekrar calismaniz oneriliyor. %80 ve uzeri gerekli.
            </p>
          )}
        </div>
      </div>

      {/* Wrong answers list */}
      {uniqueWrongAnswers.length > 0 && (
        <div className="mt-6 rounded-3xl border border-gray-200 bg-white p-6 shadow-lg">
          <h3 className="text-lg font-bold text-gray-900">
            Yanlis Cevapladigin Kelimeler ({uniqueWrongAnswers.length})
          </h3>
          <div className="mt-4 space-y-3">
            {uniqueWrongAnswers.map((answer) => (
              <div
                key={answer.wordId}
                className="flex items-center justify-between rounded-xl border border-red-100 bg-red-50/50 px-4 py-3"
              >
                <div>
                  <span className="font-semibold text-gray-900">{answer.word}</span>
                  <span className="ml-2 text-sm text-gray-500">= {answer.turkishMeaning}</span>
                </div>
                <span className="rounded-full bg-red-100 px-2.5 py-0.5 text-xs font-medium text-red-600">
                  Yanlis
                </span>
              </div>
            ))}
          </div>

          {/* Practice weak words button */}
          <button
            onClick={onPracticeWeak}
            className="mt-4 w-full rounded-xl border-2 border-red-200 px-4 py-3 font-semibold text-red-600 transition-colors hover:border-red-300 hover:bg-red-50"
          >
            Zayif Kelimeleri Tekrar Calis
          </button>
        </div>
      )}

      {/* Actions */}
      <div className="mt-6 flex gap-3">
        <button
          onClick={onRestart}
          className="flex-1 rounded-xl border-2 border-gray-200 px-4 py-3 font-semibold text-gray-700 transition-colors hover:border-blue-300 hover:text-blue-600"
        >
          {passed ? 'Tekrar Dene' : 'Tekrar Pratik Yap'}
        </button>
        <Link
          href={backHref}
          className="flex-1 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-3 text-center font-semibold text-white shadow-lg shadow-blue-500/25 transition-all hover:shadow-xl"
        >
          {passed ? 'Sonraki Set' : 'Diger Setler'}
        </Link>
      </div>
    </div>
  );
}
