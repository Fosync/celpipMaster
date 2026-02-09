'use client';

import Link from 'next/link';

interface PromptData {
  id: string;
  title: string;
  description: string;
  taskType: string;
  clbLevel: number;
  icon: string;
  timeLimit: number;
  minWords: number;
  maxWords: number;
}

interface WritingSetGridProps {
  prompts: PromptData[];
  backHref: string;
}

export function WritingSetGrid({ prompts, backHref }: WritingSetGridProps) {
  const emailPrompts = prompts.filter((p) => p.taskType === 'email');
  const surveyPrompts = prompts.filter((p) => p.taskType === 'survey');

  const renderSection = (title: string, subtitle: string, items: PromptData[], gradient: string) => (
    <div className="mb-10">
      <div className="mb-4 flex items-center gap-3">
        <span className={`flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${gradient} text-sm font-bold text-white`}>
          {title === 'Task 1' ? '1' : '2'}
        </span>
        <div>
          <h2 className="text-lg font-bold text-gray-900">{title}: {subtitle}</h2>
          <p className="text-xs text-gray-400">
            {items.length} prompt{items.length > 1 ? 's' : ''} available
          </p>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {items.map((p) => (
          <Link
            key={p.id}
            href={`/learn/writing/${p.id}`}
            className="group flex flex-col gap-3 rounded-2xl border border-gray-200 bg-white p-5 transition-all hover:-translate-y-0.5 hover:border-amber-300 hover:shadow-lg hover:shadow-amber-100/50"
          >
            <div className="flex items-start gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-amber-50 to-orange-50 text-3xl">
                {p.icon}
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 group-hover:text-amber-600">
                  {p.title}
                </h3>
                <p className="mt-0.5 text-sm text-gray-500">{p.description}</p>
                <div className="mt-3 flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-amber-50 px-2.5 py-0.5 text-xs font-medium text-amber-600">
                    {p.minWords}-{p.maxWords} words
                  </span>
                  <span className="rounded-full bg-blue-50 px-2.5 py-0.5 text-xs font-medium text-blue-600">
                    {Math.floor(p.timeLimit / 60)} min
                  </span>
                  <span className="rounded-full bg-purple-50 px-2.5 py-0.5 text-xs font-medium text-purple-600">
                    CLB {p.clbLevel}
                  </span>
                </div>
              </div>
              <svg
                className="mt-1 h-5 w-5 shrink-0 text-gray-300 transition-colors group-hover:text-amber-500"
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
        <h1 className="text-3xl font-bold text-gray-900">Writing Practice</h1>
        <p className="mt-2 text-gray-500">
          Practice CELPIP writing tasks. Write emails and survey responses within the time limit.
        </p>
      </div>

      {renderSection('Task 1', 'Email Writing', emailPrompts, 'from-amber-500 to-orange-500')}
      {renderSection('Task 2', 'Survey Response', surveyPrompts, 'from-purple-500 to-indigo-500')}
    </>
  );
}
