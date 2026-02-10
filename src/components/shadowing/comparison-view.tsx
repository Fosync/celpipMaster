'use client';

import type { ComparisonResult } from '@/hooks/use-shadowing';
import { SentenceDisplay } from './sentence-display';
import { AccuracyMeter } from './accuracy-meter';

interface ComparisonViewProps {
  result: ComparisonResult;
  onRetry: () => void;
  onNext: () => void;
  isLast: boolean;
}

const PASS_THRESHOLD = 90;

export function ComparisonView({ result, onRetry, onNext, isLast }: ComparisonViewProps) {
  const passed = result.accuracy >= PASS_THRESHOLD;

  return (
    <div className="space-y-6">
      <div className="flex justify-center">
        <AccuracyMeter accuracy={result.accuracy} passed={passed} />
      </div>

      <div className="space-y-4 rounded-2xl border border-gray-700 bg-gray-800/50 p-5">
        <SentenceDisplay words={result.original} label="Original" />
        <div className="border-t border-gray-700" />
        <SentenceDisplay words={result.spoken} label="You said" />
      </div>

      <div className="flex gap-3">
        <button
          onClick={onRetry}
          className="flex-1 rounded-xl border border-gray-600 py-3 font-semibold text-gray-300 transition-all hover:border-purple-500 hover:text-purple-400"
        >
          Try Again
        </button>
        <button
          onClick={onNext}
          className={`flex-1 rounded-xl py-3 font-semibold text-white transition-all ${
            passed
              ? 'bg-gradient-to-r from-green-600 to-emerald-600 shadow-lg shadow-green-500/25 hover:shadow-xl'
              : 'bg-gradient-to-r from-purple-600 to-pink-600 shadow-lg shadow-purple-500/25 hover:shadow-xl'
          }`}
        >
          {isLast ? 'Finish' : passed ? 'Next' : 'Skip'}
        </button>
      </div>
    </div>
  );
}
