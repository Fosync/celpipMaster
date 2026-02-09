'use client';

import { useEffect, useState } from 'react';

interface ScoreRadarProps {
  scores: {
    taskCompletion: number;
    vocabulary: number;
    grammar: number;
    coherence: number;
    pronunciation: number;
  };
}

const categories: { key: keyof ScoreRadarProps['scores']; label: string }[] = [
  { key: 'taskCompletion', label: 'Task Completion' },
  { key: 'vocabulary', label: 'Vocabulary' },
  { key: 'grammar', label: 'Grammar' },
  { key: 'coherence', label: 'Coherence' },
  { key: 'pronunciation', label: 'Pronunciation' },
];

function getScoreColor(score: number): string {
  if (score > 8) return '#22c55e'; // green
  if (score >= 6) return '#eab308'; // yellow
  return '#ef4444'; // red
}

function getScoreBgColor(score: number): string {
  if (score > 8) return 'bg-green-100';
  if (score >= 6) return 'bg-yellow-100';
  return 'bg-red-100';
}

function getScoreTextColor(score: number): string {
  if (score > 8) return 'text-green-700';
  if (score >= 6) return 'text-yellow-700';
  return 'text-red-700';
}

export default function ScoreRadar({ scores }: ScoreRadarProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Trigger animation after mount
    const timer = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="space-y-3">
      {categories.map(({ key, label }) => {
        const score = scores[key];
        const maxScore = 12;
        const percentage = (score / maxScore) * 100;
        const color = getScoreColor(score);

        return (
          <div key={key} className="flex items-center gap-3">
            <span className="text-sm font-medium text-gray-600 w-36 flex-shrink-0">
              {label}
            </span>
            <div className="flex-1 h-3 bg-gray-100 rounded-full overflow-hidden">
              <div
                className="h-full rounded-full"
                style={{
                  width: mounted ? `${percentage}%` : '0%',
                  backgroundColor: color,
                  transition: 'width 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                }}
              />
            </div>
            <span
              className={`text-sm font-bold w-12 text-right px-1.5 py-0.5 rounded ${getScoreBgColor(score)} ${getScoreTextColor(score)}`}
            >
              {score}/12
            </span>
          </div>
        );
      })}
    </div>
  );
}
