'use client';

import type { WordComparison } from '@/hooks/use-shadowing';

interface SentenceDisplayProps {
  words: WordComparison[];
  label: string;
}

export function SentenceDisplay({ words, label }: SentenceDisplayProps) {
  return (
    <div>
      <span className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-gray-500">
        {label}
      </span>
      <p className="flex flex-wrap gap-1 text-lg leading-relaxed">
        {words.map((w, i) => (
          <span
            key={`${w.word}-${i}`}
            className={`rounded px-1 py-0.5 font-medium ${
              w.match
                ? 'bg-green-500/20 text-green-300'
                : 'bg-red-500/20 text-red-400'
            }`}
          >
            {w.word}
          </span>
        ))}
      </p>
    </div>
  );
}
