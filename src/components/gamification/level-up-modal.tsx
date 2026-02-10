'use client';
import { useState, useEffect, useCallback } from 'react';
import type { LevelInfo } from '@/lib/progress/gamification';

let showLevelUpFn: ((level: LevelInfo) => void) | null = null;

export function triggerLevelUp(level: LevelInfo) {
  showLevelUpFn?.(level);
}

export function LevelUpModal() {
  const [level, setLevel] = useState<LevelInfo | null>(null);

  const show = useCallback((l: LevelInfo) => {
    setLevel(l);
  }, []);

  useEffect(() => {
    showLevelUpFn = show;
    return () => { showLevelUpFn = null; };
  }, [show]);

  if (!level) return null;

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="relative mx-4 w-full max-w-sm rounded-3xl bg-white p-8 text-center shadow-2xl animate-in zoom-in-95 duration-300">
        {/* Celebration particles */}
        <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-5xl animate-bounce">🎉</div>
        
        <div className="mt-4">
          <p className="text-sm font-medium uppercase tracking-wider text-purple-600">Level Up!</p>
          <div className="mx-auto my-4 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-pink-500 text-3xl font-bold text-white shadow-xl shadow-purple-500/30">
            {level.level}
          </div>
          <h2 className="text-2xl font-bold text-gray-900">{level.name}</h2>
          <p className="mt-2 text-gray-500">You&apos;ve reached Level {level.level}!</p>
          <p className="mt-1 text-sm text-gray-400">{level.currentXP} total XP earned</p>
        </div>

        <button
          onClick={() => setLevel(null)}
          className="mt-6 w-full rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 py-3 font-semibold text-white shadow-lg shadow-purple-500/25 transition-all hover:shadow-xl"
        >
          Continue
        </button>
      </div>
    </div>
  );
}
