'use client';

import { useEffect, useRef } from 'react';

interface PrepTimerProps {
  seconds: number;
  totalSeconds: number;
  onComplete: () => void;
}

export default function PrepTimer({ seconds, totalSeconds, onComplete }: PrepTimerProps) {
  const hasCalledComplete = useRef(false);

  useEffect(() => {
    if (seconds <= 0 && !hasCalledComplete.current) {
      hasCalledComplete.current = true;
      onComplete();
    }
  }, [seconds, onComplete]);

  // Reset the ref when totalSeconds changes (new timer started)
  useEffect(() => {
    hasCalledComplete.current = false;
  }, [totalSeconds]);

  const progress = totalSeconds > 0 ? seconds / totalSeconds : 0;
  const radius = 54;
  const circumference = 2 * Math.PI * radius;
  const dashOffset = circumference * (1 - progress);

  // Color based on remaining time ratio
  const getColor = (): string => {
    if (progress > 0.5) return '#22c55e'; // green
    if (progress > 0.25) return '#eab308'; // yellow
    return '#ef4444'; // red
  };

  const color = getColor();

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="relative w-32 h-32">
        <svg
          className="w-full h-full -rotate-90"
          viewBox="0 0 120 120"
        >
          {/* Background circle */}
          <circle
            cx="60"
            cy="60"
            r={radius}
            fill="none"
            stroke="#e5e7eb"
            strokeWidth="8"
          />
          {/* Progress circle */}
          <circle
            cx="60"
            cy="60"
            r={radius}
            fill="none"
            stroke={color}
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={dashOffset}
            style={{ transition: 'stroke-dashoffset 0.5s ease, stroke 0.5s ease' }}
          />
        </svg>
        {/* Center text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span
            className="text-4xl font-bold tabular-nums"
            style={{ color }}
          >
            {seconds}
          </span>
        </div>
      </div>
      <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
        Get Ready
      </p>
    </div>
  );
}
