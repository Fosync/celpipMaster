'use client';

import Link from 'next/link';
import { useMastery } from '@/hooks/use-mastery';
import { StarRating } from './common/star-rating';

interface ScriptData {
  id: string;
  title: string;
  description: string;
  format: string;
  clbLevel: number;
  icon: string;
  questionCount: number;
  timeLimit: number;
}

interface ListeningSetGridProps {
  scripts: ScriptData[];
  backHref: string;
}

const formatLabels: Record<string, string> = {
  monologue: 'Monologue',
  dialogue: 'Dialogue',
  announcement: 'Announcement',
};

export function ListeningSetGrid({ scripts, backHref }: ListeningSetGridProps) {
  const mastery = useMastery();
  const clbLevels = [...new Set(scripts.map((s) => s.clbLevel))].sort();

  const completedCount = scripts.filter((s) => {
    const result = mastery.getSetResult(s.id);
    return result && (result.completedAt || result.stars > 0);
  }).length;

  return (
    <>
      <div className="mb-8">
        <Link
          href={backHref}
          className="mb-4 inline-flex items-center gap-1 text-sm text-gray-500 hover:text-gray-700"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          Dashboard
        </Link>
        <h1 className="text-3xl font-bold text-gray-900">Listening Practice</h1>
        <p className="mt-2 text-gray-500">
          Practice CELPIP-style listening comprehension. Listen to audio and answer questions within the time limit.
          {completedCount > 0 && (
            <span className="ml-2 font-medium text-green-600">
              {completedCount}/{scripts.length} completed
            </span>
          )}
        </p>
      </div>

      {clbLevels.map((level) => {
        const levelScripts = scripts.filter((s) => s.clbLevel === level);

        return (
          <div key={level} className="mb-10">
            <div className="mb-4 flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 text-sm font-bold text-white">
                {level}
              </span>
              <div>
                <h2 className="text-lg font-bold text-gray-900">CLB Level {level}</h2>
                <p className="text-xs text-gray-400">
                  {levelScripts.length} script{levelScripts.length > 1 ? 's' : ''} available
                </p>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {levelScripts.map((s) => {
                const stars = mastery.getStarRating(s.id);
                const result = mastery.getSetResult(s.id);
                const bestScore = result?.bestTestScore ?? 0;

                return (
                  <Link
                    key={s.id}
                    href={`/learn/listening/${s.id}`}
                    className="group flex flex-col gap-3 rounded-2xl border border-gray-200 bg-white p-5 transition-all hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-lg hover:shadow-blue-100/50"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 text-3xl">
                        {s.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h3 className="font-semibold text-gray-900 group-hover:text-blue-600">
                            {s.title}
                          </h3>
                          {stars > 0 && <StarRating stars={stars} />}
                        </div>
                        <p className="mt-0.5 text-sm text-gray-500">{s.description}</p>
                        <div className="mt-3 flex flex-wrap items-center gap-2">
                          <span className="rounded-full bg-blue-50 px-2.5 py-0.5 text-xs font-medium text-blue-600">
                            {s.questionCount} questions
                          </span>
                          <span className="rounded-full bg-green-50 px-2.5 py-0.5 text-xs font-medium text-green-600">
                            {Math.floor(s.timeLimit / 60)} min
                          </span>
                          <span className="rounded-full bg-purple-50 px-2.5 py-0.5 text-xs font-medium capitalize text-purple-600">
                            {formatLabels[s.format] || s.format}
                          </span>
                          {bestScore > 0 && (
                            <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${
                              bestScore >= 80
                                ? 'bg-green-100 text-green-700'
                                : 'bg-amber-100 text-amber-700'
                            }`}>
                              Best: {bestScore}%
                            </span>
                          )}
                        </div>
                      </div>
                      <svg
                        className="mt-1 h-5 w-5 shrink-0 text-gray-300 transition-colors group-hover:text-blue-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        );
      })}
    </>
  );
}
