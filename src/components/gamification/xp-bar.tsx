'use client';
import { getLevelInfo, type LevelInfo } from '@/lib/progress/gamification';
import { useState } from 'react';

export function XPBar() {
  const [level] = useState<LevelInfo | null>(() => getLevelInfo());
  if (!level) return null;
  
  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-1">
        <span className="text-xs font-semibold text-gray-600">Level {level.level} - {level.name}</span>
        <span className="text-xs text-gray-500">{level.currentXP} XP</span>
      </div>
      <div className="h-2.5 overflow-hidden rounded-full bg-gray-200">
        <div 
          className="h-full rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transition-all duration-1000 ease-out"
          style={{ width: `${level.progressPercent}%` }}
        />
      </div>
      {level.xpToNext > 0 && (
        <p className="mt-1 text-[10px] text-gray-400">{level.xpToNext} XP to Level {level.level + 1}</p>
      )}
    </div>
  );
}
