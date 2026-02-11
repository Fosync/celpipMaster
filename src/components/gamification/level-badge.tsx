'use client';
import { getLevelInfo, type LevelInfo } from '@/lib/progress/gamification';
import { useState } from 'react';

const LEVEL_COLORS: Record<number, string> = {
  1: 'from-gray-400 to-gray-500',
  2: 'from-green-400 to-green-600',
  3: 'from-blue-400 to-blue-600',
  4: 'from-purple-400 to-purple-600',
  5: 'from-orange-400 to-orange-600',
  6: 'from-red-400 to-red-600',
  7: 'from-yellow-400 to-yellow-600',
};

export function LevelBadge({ size = 'md' }: { size?: 'sm' | 'md' | 'lg' }) {
  const [level] = useState<LevelInfo | null>(() => getLevelInfo());
  if (!level) return null;

  const sizes = {
    sm: 'h-8 w-8 text-xs',
    md: 'h-12 w-12 text-sm',
    lg: 'h-16 w-16 text-lg',
  };

  return (
    <div className="flex items-center gap-2">
      <div className={`flex items-center justify-center rounded-full bg-gradient-to-br ${LEVEL_COLORS[level.level] || LEVEL_COLORS[1]} ${sizes[size]} font-bold text-white shadow-lg`}>
        {level.level}
      </div>
      {size !== 'sm' && (
        <div>
          <p className="text-sm font-semibold text-gray-900">Level {level.level}</p>
          <p className="text-xs text-gray-500">{level.name}</p>
        </div>
      )}
    </div>
  );
}
