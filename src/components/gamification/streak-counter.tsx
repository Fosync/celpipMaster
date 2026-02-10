'use client';
import { getGameStats } from '@/lib/progress/gamification';
import { useState, useEffect } from 'react';

export function StreakCounter({ compact = false }: { compact?: boolean }) {
  const [streak, setStreak] = useState(0);
  const [longest, setLongest] = useState(0);

  useEffect(() => {
    const stats = getGameStats();
    setStreak(stats.streakDays);
    setLongest(stats.longestStreak);
  }, []);

  if (compact) {
    return (
      <div className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 ${streak > 0 ? 'bg-orange-50' : 'bg-gray-50'}`}>
        <span className={`text-base ${streak > 0 ? 'animate-pulse' : ''}`}>🔥</span>
        <span className={`text-sm font-semibold ${streak > 0 ? 'text-orange-700' : 'text-gray-400'}`}>
          {streak}
        </span>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 text-center">
      <div className={`mx-auto mb-2 text-4xl ${streak > 0 ? 'animate-bounce' : ''}`}>🔥</div>
      <p className="text-3xl font-bold text-gray-900">{streak}</p>
      <p className="text-sm text-gray-500">Day Streak</p>
      {longest > 0 && (
        <p className="mt-1 text-xs text-gray-400">Best: {longest} days</p>
      )}
    </div>
  );
}
