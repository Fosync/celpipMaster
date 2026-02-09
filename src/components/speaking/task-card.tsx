'use client';

import Link from 'next/link';

interface TaskCardProps {
  id: string;
  title: string;
  description: string;
  difficulty: 'easy' | 'medium' | 'hard';
  prepTime: number;
  speakTime: number;
}

const difficultyConfig: Record<
  TaskCardProps['difficulty'],
  { label: string; bg: string; text: string; border: string }
> = {
  easy: {
    label: 'Easy',
    bg: 'bg-green-100',
    text: 'text-green-700',
    border: 'border-green-200',
  },
  medium: {
    label: 'Medium',
    bg: 'bg-yellow-100',
    text: 'text-yellow-700',
    border: 'border-yellow-200',
  },
  hard: {
    label: 'Hard',
    bg: 'bg-red-100',
    text: 'text-red-700',
    border: 'border-red-200',
  },
};

function formatTime(seconds: number): string {
  if (seconds < 60) return `${seconds}s`;
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return secs > 0 ? `${mins}m ${secs}s` : `${mins}m`;
}

export default function TaskCard({
  id,
  title,
  description,
  difficulty,
  prepTime,
  speakTime,
}: TaskCardProps) {
  const config = difficultyConfig[difficulty];

  return (
    <Link
      href={`/speaking/${id}`}
      className="block bg-white rounded-xl border border-gray-200 p-5 transition-all duration-200 hover:shadow-lg hover:border-gray-300 hover:-translate-y-0.5 group"
    >
      <div className="flex items-start justify-between gap-3 mb-2">
        <h3 className="text-base font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
          {title}
        </h3>
        <span
          className={`flex-shrink-0 px-2 py-0.5 text-xs font-semibold rounded-full border ${config.bg} ${config.text} ${config.border}`}
        >
          {config.label}
        </span>
      </div>

      <p className="text-sm text-gray-500 mb-3 line-clamp-2">
        {description}
      </p>

      <div className="flex items-center gap-4 text-xs text-gray-400">
        <div className="flex items-center gap-1">
          <svg
            className="w-3.5 h-3.5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
          </svg>
          <span>Prep: {formatTime(prepTime)}</span>
        </div>
        <div className="flex items-center gap-1">
          <svg
            className="w-3.5 h-3.5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="9" y="1" width="6" height="12" rx="3" />
            <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
            <line x1="12" y1="19" x2="12" y2="23" />
            <line x1="8" y1="23" x2="16" y2="23" />
          </svg>
          <span>Speak: {formatTime(speakTime)}</span>
        </div>
      </div>
    </Link>
  );
}
