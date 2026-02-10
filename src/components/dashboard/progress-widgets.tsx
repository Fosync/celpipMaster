'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import {
  getModuleStats,
  getWeakWords,
  getTodayReview,
  getRecentActivities,
  getVocabSummary,
  type ModuleStats,
  type WordProgress,
  type ActivityEntry,
  type MasteryLevel,
} from '@/lib/progress/cross-tracker';

const MODULE_META: Record<string, { label: string; icon: string }> = {
  vocabulary: { label: 'Vocabulary', icon: '📚' },
  grammar: { label: 'Grammar', icon: '✏️' },
  reading: { label: 'Reading', icon: '📖' },
  writing: { label: 'Writing', icon: '✍️' },
  listening: { label: 'Listening', icon: '🎧' },
  patterns: { label: 'Patterns', icon: '🧩' },
  idioms: { label: 'Idioms', icon: '💬' },
  shadowing: { label: 'Shadowing', icon: '🔁' },
  speaking: { label: 'Speaking', icon: '🎤' },
};

const MASTERY_LABELS: Record<MasteryLevel, { label: string; color: string }> = {
  0: { label: 'New', color: 'bg-gray-200' },
  1: { label: 'Recognized', color: 'bg-yellow-400' },
  2: { label: 'Practiced', color: 'bg-blue-400' },
  3: { label: 'Active', color: 'bg-green-400' },
  4: { label: 'Mastered', color: 'bg-purple-500' },
};

function timeAgo(timestamp: string): string {
  const diff = Date.now() - new Date(timestamp).getTime();
  const minutes = Math.floor(diff / 60000);
  if (minutes < 1) return 'just now';
  if (minutes < 60) return `${minutes}m ago`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours}h ago`;
  const days = Math.floor(hours / 24);
  return `${days}d ago`;
}

// ─── Word Progress Widget ───

function WordProgressWidget({
  total,
  byLevel,
}: {
  total: number;
  byLevel: Record<MasteryLevel, number>;
}) {
  const target = 155; // Total vocabulary words
  const percentage = Math.min(100, Math.round((total / target) * 100));

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-sm font-semibold text-gray-900">Word Progress</h3>
        <span className="text-xs font-medium text-blue-600">
          {total}/{target}
        </span>
      </div>
      {/* Progress bar */}
      <div className="mb-4 h-3 overflow-hidden rounded-full bg-gray-100">
        <div
          className="h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all"
          style={{ width: `${percentage}%` }}
        />
      </div>
      {/* Mastery distribution */}
      <div className="grid grid-cols-5 gap-1">
        {([0, 1, 2, 3, 4] as MasteryLevel[]).map((level) => {
          const info = MASTERY_LABELS[level];
          return (
            <div key={level} className="text-center">
              <div
                className={`mx-auto mb-1 h-2 w-full rounded-full ${info.color}`}
                style={{ opacity: byLevel[level] > 0 ? 1 : 0.3 }}
              />
              <span className="text-[10px] font-medium text-gray-500">
                {byLevel[level]}
              </span>
              <p className="text-[9px] text-gray-400 leading-tight">{info.label}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ─── Module Status Widget ───

function ModuleStatusWidget({ stats }: { stats: ModuleStats[] }) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5">
      <h3 className="mb-3 text-sm font-semibold text-gray-900">Module Status</h3>
      <div className="space-y-2.5">
        {stats.map((mod) => (
          <div key={mod.module} className="flex items-center gap-3">
            <span className="text-base">{mod.icon}</span>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-medium text-gray-700 truncate">
                  {mod.label}
                </span>
                <span className="text-[10px] font-semibold text-gray-500 ml-2">
                  {mod.percentage}%
                </span>
              </div>
              <div className="h-1.5 overflow-hidden rounded-full bg-gray-100">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-blue-400 to-blue-600 transition-all"
                  style={{ width: `${mod.percentage}%` }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Today Review Widget ───

function TodayReviewWidget({ reviewWords }: { reviewWords: WordProgress[] }) {
  const count = reviewWords.length;

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-semibold text-gray-900">Today&apos;s Review</h3>
        <span className="flex h-6 min-w-6 items-center justify-center rounded-full bg-orange-100 px-2 text-xs font-bold text-orange-600">
          {count}
        </span>
      </div>
      {count === 0 ? (
        <div className="text-center py-4">
          <span className="text-3xl">🎉</span>
          <p className="mt-2 text-xs text-gray-500">All caught up! No reviews due today.</p>
        </div>
      ) : (
        <>
          <div className="mb-3 space-y-1.5">
            {reviewWords.slice(0, 5).map((wp) => (
              <div
                key={wp.wordId}
                className="flex items-center justify-between rounded-lg bg-gray-50 px-3 py-1.5"
              >
                <span className="text-xs font-medium text-gray-700">{wp.wordId}</span>
                <span className="text-[10px] text-gray-400">
                  Level {wp.masteryLevel}
                </span>
              </div>
            ))}
            {count > 5 && (
              <p className="text-center text-[10px] text-gray-400">
                +{count - 5} more words
              </p>
            )}
          </div>
          <Link
            href="/learn/vocabulary"
            className="block w-full rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 py-2.5 text-center text-xs font-semibold text-white shadow-sm transition-all hover:shadow-md"
          >
            Start Review ({count} words)
          </Link>
        </>
      )}
    </div>
  );
}

// ─── Weak Points Widget ───

function WeakPointsWidget({ weakWords }: { weakWords: WordProgress[] }) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-semibold text-gray-900">Weak Points</h3>
        <span className="text-[10px] font-medium text-gray-400">
          Known but unused
        </span>
      </div>
      {weakWords.length === 0 ? (
        <div className="text-center py-4">
          <span className="text-3xl">💪</span>
          <p className="mt-2 text-xs text-gray-500">
            Great! You&apos;re actively using your vocabulary.
          </p>
        </div>
      ) : (
        <div className="space-y-1.5">
          {weakWords.slice(0, 6).map((wp) => (
            <div
              key={wp.wordId}
              className="flex items-center justify-between rounded-lg bg-red-50 px-3 py-1.5"
            >
              <span className="text-xs font-medium text-gray-700">{wp.wordId}</span>
              <div className="flex gap-1">
                {!wp.modules.writing.used && (
                  <span className="rounded bg-gray-200 px-1.5 py-0.5 text-[9px] text-gray-500">
                    Writing
                  </span>
                )}
                {!wp.modules.speaking.used && (
                  <span className="rounded bg-gray-200 px-1.5 py-0.5 text-[9px] text-gray-500">
                    Speaking
                  </span>
                )}
              </div>
            </div>
          ))}
          {weakWords.length > 6 && (
            <p className="text-center text-[10px] text-gray-400">
              +{weakWords.length - 6} more words
            </p>
          )}
        </div>
      )}
    </div>
  );
}

// ─── Recent Activity Widget ───

function RecentActivityWidget({ activities }: { activities: ActivityEntry[] }) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5">
      <h3 className="mb-3 text-sm font-semibold text-gray-900">Recent Activity</h3>
      {activities.length === 0 ? (
        <div className="text-center py-4">
          <span className="text-3xl">📝</span>
          <p className="mt-2 text-xs text-gray-500">
            Start learning to see your activity here.
          </p>
        </div>
      ) : (
        <div className="space-y-2">
          {activities.map((a) => {
            const meta = MODULE_META[a.module];
            return (
              <div
                key={a.id}
                className="flex items-start gap-2.5 rounded-lg bg-gray-50 px-3 py-2"
              >
                <span className="text-base shrink-0">{meta?.icon ?? '📌'}</span>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-medium text-gray-700 truncate">
                    {a.action}
                  </p>
                  <p className="text-[10px] text-gray-400 truncate">{a.detail}</p>
                </div>
                <span className="text-[10px] text-gray-400 shrink-0 whitespace-nowrap">
                  {timeAgo(a.timestamp)}
                </span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

// ─── Main Widgets Container ───

export function ProgressWidgets() {
  const [moduleStats, setModuleStats] = useState<ModuleStats[]>([]);
  const [weakWords, setWeakWords] = useState<WordProgress[]>([]);
  const [reviewWords, setReviewWords] = useState<WordProgress[]>([]);
  const [activities, setActivities] = useState<ActivityEntry[]>([]);
  const [vocabSummary, setVocabSummary] = useState<{
    total: number;
    byLevel: Record<MasteryLevel, number>;
  }>({ total: 0, byLevel: { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0 } });

  useEffect(() => {
    setModuleStats(getModuleStats());
    setWeakWords(getWeakWords());
    setReviewWords(getTodayReview());
    setActivities(getRecentActivities(5));
    setVocabSummary(getVocabSummary());
  }, []);

  return (
    <div>
      <h2 className="mb-4 text-lg font-semibold text-gray-900">Your Progress</h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <WordProgressWidget total={vocabSummary.total} byLevel={vocabSummary.byLevel} />
        <TodayReviewWidget reviewWords={reviewWords} />
        <WeakPointsWidget weakWords={weakWords} />
      </div>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <ModuleStatusWidget stats={moduleStats} />
        <RecentActivityWidget activities={activities} />
      </div>
    </div>
  );
}
