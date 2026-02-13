'use client';

import Link from 'next/link';

interface ProgressHeaderProps {
  backHref: string;
  clbLevel: number;
  currentIndex: number;
  totalCount: number;
  phaseLabel: string;
  onBack?: () => void;
}

export function ProgressHeader({
  backHref,
  clbLevel,
  currentIndex,
  totalCount,
  phaseLabel,
  onBack,
}: ProgressHeaderProps) {
  const progress = ((currentIndex + 1) / totalCount) * 100;

  return (
    <div className="mb-6">
      <div className="flex items-center justify-between">
        {onBack ? (
          <button
            onClick={onBack}
            className="flex items-center gap-1 text-sm text-gray-500 hover:text-gray-700"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Back
          </button>
        ) : (
          <Link
            href={backHref}
            className="flex items-center gap-1 text-sm text-gray-500 hover:text-gray-700"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Back
          </Link>
        )}
        <div className="flex items-center gap-2">
          <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
            CLB {clbLevel}
          </span>
          <span className="text-sm text-gray-500">
            {currentIndex + 1}/{totalCount}
          </span>
        </div>
      </div>
      <div className="mt-3 h-2.5 overflow-hidden rounded-full bg-gray-100">
        <div
          className="h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>
      <div className="mt-2 text-center text-sm font-medium text-gray-500">{phaseLabel}</div>
    </div>
  );
}
