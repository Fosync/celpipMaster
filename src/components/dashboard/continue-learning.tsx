'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import type { MasteryStore } from '@/types/learning';

interface RecentSet {
  setId: string;
  title: string;
  stars: number;
  bestScore: number;
  href: string;
  icon: string;
}

// Map set IDs to display info
function getSetInfo(setId: string): { title: string; href: string; icon: string } | null {
  if (setId.startsWith('clb')) {
    return { title: formatSetId(setId), href: `/learn/vocabulary/${setId}`, icon: '📚' };
  }
  if (setId.startsWith('idioms')) {
    return { title: formatSetId(setId), href: `/learn/idioms/${setId}`, icon: '💬' };
  }
  if (setId.startsWith('grammar')) {
    return { title: formatSetId(setId), href: `/learn/grammar/${setId}`, icon: '✏️' };
  }
  return null;
}

function formatSetId(id: string): string {
  return id
    .replace(/^(clb\d+|idioms|grammar)-/, '')
    .replace(/-/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

export function ContinueLearning() {
  const [recentSets, setRecentSets] = useState<RecentSet[]>([]);

  useEffect(() => {
    try {
      const raw = localStorage.getItem('celpipmaster_mastery');
      if (!raw) return;
      const store: MasteryStore = JSON.parse(raw);
      if (!store.sets) return;

      const sets: RecentSet[] = [];
      for (const [setId, result] of Object.entries(store.sets)) {
        const info = getSetInfo(setId);
        if (!info) continue;
        sets.push({
          setId,
          title: info.title,
          stars: result.stars,
          bestScore: result.bestTestScore,
          href: info.href,
          icon: info.icon,
        });
      }

      // Sort by most recent (completedAt), show up to 6
      sets.sort((a, b) => {
        const dateA = store.sets[a.setId]?.completedAt || '';
        const dateB = store.sets[b.setId]?.completedAt || '';
        return dateB.localeCompare(dateA);
      });

      setRecentSets(sets.slice(0, 6));
    } catch {
      // Ignore localStorage errors
    }
  }, []);

  if (recentSets.length === 0) return null;

  return (
    <div>
      <h2 className="mb-4 text-lg font-semibold text-gray-900">Continue Learning</h2>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {recentSets.map((set) => (
          <Link
            key={set.setId}
            href={set.href}
            className="group flex items-center gap-3 rounded-2xl border border-gray-200 bg-white p-4 transition-all hover:-translate-y-0.5 hover:shadow-md"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gray-50 text-xl">
              {set.icon}
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="truncate text-sm font-semibold text-gray-900 group-hover:text-blue-600">
                {set.title}
              </h3>
              <div className="mt-0.5 flex items-center gap-2">
                <div className="flex gap-0.5">
                  {[1, 2, 3].map((n) => (
                    <span key={n} className={`text-xs ${n <= set.stars ? 'text-yellow-400' : 'text-gray-200'}`}>
                      ★
                    </span>
                  ))}
                </div>
                {set.bestScore > 0 && (
                  <span className="text-xs text-gray-400">{set.bestScore}%</span>
                )}
              </div>
            </div>
            <svg
              className="h-4 w-4 shrink-0 text-gray-300 group-hover:text-blue-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        ))}
      </div>
    </div>
  );
}
