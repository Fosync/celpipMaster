'use client';
import { getGameStats, type Badge } from '@/lib/progress/gamification';
import { useState } from 'react';

export function BadgeGrid() {
  const [badges] = useState<Badge[]>(() => {
    const stats = getGameStats();
    return stats.badges;
  });

  const unlocked = badges.filter(b => b.unlockedAt);

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900">Badges</h3>
        <span className="text-sm text-gray-500">{unlocked.length}/{badges.length}</span>
      </div>
      <div className="grid grid-cols-3 gap-3 sm:grid-cols-5">
        {badges.map((badge) => {
          const isUnlocked = !!badge.unlockedAt;
          return (
            <div
              key={badge.id}
              className={`flex flex-col items-center rounded-xl p-3 text-center transition-all ${
                isUnlocked
                  ? 'bg-gradient-to-br from-yellow-50 to-amber-50 border border-yellow-200 shadow-sm'
                  : 'bg-gray-50 border border-gray-100 opacity-40 grayscale'
              }`}
              title={badge.description}
            >
              <span className="text-2xl">{badge.icon}</span>
              <span className={`mt-1 text-[10px] font-medium leading-tight ${isUnlocked ? 'text-gray-700' : 'text-gray-400'}`}>
                {badge.name}
              </span>
              {isUnlocked && badge.unlockedAt && (
                <span className="mt-0.5 text-[9px] text-amber-600">
                  {new Date(badge.unlockedAt).toLocaleDateString(undefined, { month: 'short', day: 'numeric' })}
                </span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
