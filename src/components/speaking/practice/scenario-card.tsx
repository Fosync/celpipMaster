'use client';

import Link from 'next/link';

interface ScenarioCardProps {
  id: string;
  title: string;
  description: string;
  icon: string;
  difficulty: 'easy' | 'medium' | 'hard';
  href?: string;
}

const difficultyConfig: Record<
  ScenarioCardProps['difficulty'],
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

export default function ScenarioCard({
  id,
  title,
  description,
  icon,
  difficulty,
  href,
}: ScenarioCardProps) {
  const config = difficultyConfig[difficulty];

  return (
    <Link
      href={href || `/speaking/practice/${id}`}
      className="block bg-white rounded-xl border border-gray-200 p-5 transition-all duration-200 hover:shadow-lg hover:border-gray-300 hover:-translate-y-0.5 group"
    >
      <div className="flex items-start justify-between gap-3 mb-2">
        <span className="text-2xl leading-none" role="img" aria-label={title}>
          {icon}
        </span>
        <span
          className={`flex-shrink-0 px-2 py-0.5 text-xs font-semibold rounded-full border ${config.bg} ${config.text} ${config.border}`}
        >
          {config.label}
        </span>
      </div>

      <h3 className="text-base font-semibold text-gray-800 group-hover:text-blue-600 transition-colors mb-1">
        {title}
      </h3>

      <p className="text-sm text-gray-500 line-clamp-2">{description}</p>
    </Link>
  );
}
