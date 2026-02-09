'use client';

import Link from 'next/link';
import { useMastery } from '@/hooks/use-mastery';
import { StarRating } from './common/star-rating';

interface SetData {
  id: string;
  title: string;
  description: string;
  clbLevel: number;
  icon: string;
  wordCount: number;
  wordIds: string[];
}

interface VocabSetGridProps {
  sets: SetData[];
  backHref: string;
  title: string;
  basePath: string;
}

export function VocabSetGrid({ sets, backHref, title, basePath }: VocabSetGridProps) {
  const mastery = useMastery();
  const clbLevels = [...new Set(sets.map((s) => s.clbLevel))].sort();

  return (
    <>
      {/* Header */}
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
        <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
        <p className="mt-2 text-gray-500">
          Build your CELPIP vocabulary with flashcards and quizzes. Choose a word set to begin.
        </p>
      </div>

      {/* Word sets by CLB level */}
      {clbLevels.map((level) => {
        const levelSets = sets.filter((s) => s.clbLevel === level);

        return (
          <div key={level} className="mb-10">
            <div className="mb-4 flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 text-sm font-bold text-white">
                {level}
              </span>
              <div>
                <h2 className="text-lg font-bold text-gray-900">CLB Level {level}</h2>
                <p className="text-xs text-gray-400">
                  {levelSets.length} word set{levelSets.length > 1 ? 's' : ''} available
                </p>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {levelSets.map((set) => {
                const progress = mastery.getSetProgress(set.id, set.wordIds);
                const stars = mastery.getStarRating(set.id);
                const progressPct =
                  set.wordIds.length > 0
                    ? Math.round((progress.learned / set.wordIds.length) * 100)
                    : 0;

                return (
                  <Link
                    key={set.id}
                    href={`${basePath}/${set.id}`}
                    className="group flex flex-col gap-3 rounded-2xl border border-gray-200 bg-white p-5 transition-all hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-lg hover:shadow-blue-100/50"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-50 to-purple-50 text-3xl">
                        {set.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h3 className="font-semibold text-gray-900 group-hover:text-blue-600">
                            {set.title}
                          </h3>
                          {stars > 0 && <StarRating stars={stars} />}
                        </div>
                        <p className="mt-0.5 text-sm text-gray-500">{set.description}</p>
                        <div className="mt-3 flex items-center gap-3">
                          <span className="rounded-full bg-blue-50 px-2.5 py-0.5 text-xs font-medium text-blue-600">
                            {set.wordCount} words
                          </span>
                          <span className="rounded-full bg-purple-50 px-2.5 py-0.5 text-xs font-medium text-purple-600">
                            +{set.wordCount * 10} XP
                          </span>
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

                    {/* Progress bar */}
                    {progressPct > 0 && (
                      <div>
                        <div className="flex items-center justify-between text-xs text-gray-400">
                          <span>{progress.learned}/{set.wordIds.length} learned</span>
                          <span>{progressPct}%</span>
                        </div>
                        <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-gray-100">
                          <div
                            className="h-full rounded-full bg-gradient-to-r from-green-400 to-emerald-500 transition-all"
                            style={{ width: `${progressPct}%` }}
                          />
                        </div>
                      </div>
                    )}
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
