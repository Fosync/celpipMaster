'use client';

import Link from 'next/link';

interface PassageData {
  id: string;
  title: string;
  description: string;
  passageType: string;
  clbLevel: number;
  icon: string;
  questionCount: number;
  timeLimit: number;
}

interface ReadingSetGridProps {
  passages: PassageData[];
  backHref: string;
}

const typeLabels: Record<string, string> = {
  correspondence: 'Correspondence',
  diagram: 'Diagram / Schedule',
  information: 'Information',
  opinion: 'Opinion / Review',
};

export function ReadingSetGrid({ passages, backHref }: ReadingSetGridProps) {
  const clbLevels = [...new Set(passages.map((p) => p.clbLevel))].sort();

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
        <h1 className="text-3xl font-bold text-gray-900">Reading Practice</h1>
        <p className="mt-2 text-gray-500">
          Practice CELPIP-style reading comprehension. Read passages and answer questions within the time limit.
        </p>
      </div>

      {clbLevels.map((level) => {
        const levelPassages = passages.filter((p) => p.clbLevel === level);

        return (
          <div key={level} className="mb-10">
            <div className="mb-4 flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 text-sm font-bold text-white">
                {level}
              </span>
              <div>
                <h2 className="text-lg font-bold text-gray-900">CLB Level {level}</h2>
                <p className="text-xs text-gray-400">
                  {levelPassages.length} passage{levelPassages.length > 1 ? 's' : ''} available
                </p>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {levelPassages.map((p) => (
                <Link
                  key={p.id}
                  href={`/learn/reading/${p.id}`}
                  className="group flex flex-col gap-3 rounded-2xl border border-gray-200 bg-white p-5 transition-all hover:-translate-y-0.5 hover:border-green-300 hover:shadow-lg hover:shadow-green-100/50"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-green-50 to-emerald-50 text-3xl">
                      {p.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 group-hover:text-green-600">
                        {p.title}
                      </h3>
                      <p className="mt-0.5 text-sm text-gray-500">{p.description}</p>
                      <div className="mt-3 flex flex-wrap items-center gap-2">
                        <span className="rounded-full bg-green-50 px-2.5 py-0.5 text-xs font-medium text-green-600">
                          {p.questionCount} questions
                        </span>
                        <span className="rounded-full bg-blue-50 px-2.5 py-0.5 text-xs font-medium text-blue-600">
                          {Math.floor(p.timeLimit / 60)} min
                        </span>
                        <span className="rounded-full bg-purple-50 px-2.5 py-0.5 text-xs font-medium capitalize text-purple-600">
                          {typeLabels[p.passageType] || p.passageType}
                        </span>
                      </div>
                    </div>
                    <svg
                      className="mt-1 h-5 w-5 shrink-0 text-gray-300 transition-colors group-hover:text-green-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        );
      })}
    </>
  );
}
