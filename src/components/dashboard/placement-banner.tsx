'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { LevelBadge } from '@/components/placement/level-badge';

const STORAGE_KEY = 'celpipmaster_placement';

interface PlacementData {
  clbLevel: number;
  totalCorrect: number;
  totalQuestions: number;
  categoryScores: Record<string, { correct: number; total: number }>;
  date: string;
}

export function PlacementBanner() {
  const [data, setData] = useState<PlacementData | null>(null);
  const [hasChecked, setHasChecked] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        setData(JSON.parse(raw) as PlacementData);
      }
    } catch {
      // ignore
    }
    setHasChecked(true);
  }, []);

  if (!hasChecked) return null;

  // No placement test taken yet — show CTA
  if (!data) {
    return (
      <Link
        href="/placement-test"
        className="group flex items-center gap-4 rounded-2xl border-2 border-dashed border-blue-300 bg-gradient-to-r from-blue-50 to-purple-50 p-5 transition-all hover:border-blue-400 hover:shadow-md"
      >
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 text-xl shadow-sm">
          🎯
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-gray-900 group-hover:text-blue-600">
            Take the Placement Test
          </h3>
          <p className="mt-0.5 text-sm text-gray-500">
            Find your CLB level in 10 minutes and get a personalized study plan.
          </p>
        </div>
        <svg className="h-5 w-5 text-gray-400 group-hover:text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </Link>
    );
  }

  // Placement test taken — show result
  const pct = Math.round((data.totalCorrect / data.totalQuestions) * 100);
  const testDate = new Date(data.date).toLocaleDateString('en-CA', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <div className="flex items-center gap-5 rounded-2xl border border-gray-200 bg-white p-5">
      <LevelBadge level={data.clbLevel} size="md" showLabel />
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2">
          <h3 className="text-sm font-semibold text-gray-900">Your Placement Level</h3>
          <span className="rounded-full bg-green-100 px-2 py-0.5 text-[10px] font-bold text-green-700">
            {pct}% score
          </span>
        </div>
        <p className="mt-0.5 text-xs text-gray-400">
          Tested on {testDate}
        </p>
      </div>
      <Link
        href="/placement-test"
        className="rounded-xl border border-gray-200 px-3 py-2 text-xs font-medium text-gray-600 transition-colors hover:border-blue-300 hover:text-blue-600"
      >
        Retake
      </Link>
    </div>
  );
}
