'use client';

interface ConversationSummaryProps {
  totalTurns: number;
  corrections: { original: string; corrected: string; tip: string }[];
  newVocabulary: string[];
  scenarioTitle: string;
  onTryAgain: () => void;
  onBackToScenarios: () => void;
}

function CheckCircleIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  );
}

export default function ConversationSummary({
  totalTurns,
  corrections,
  newVocabulary,
  scenarioTitle,
  onTryAgain,
  onBackToScenarios,
}: ConversationSummaryProps) {
  return (
    <div className="max-w-lg mx-auto px-4 py-8 space-y-6">
      {/* Header */}
      <div className="text-center space-y-2">
        <CheckCircleIcon className="w-12 h-12 text-green-500 mx-auto" />
        <h2 className="text-xl font-bold text-gray-800">Well done!</h2>
        <p className="text-sm text-gray-500">
          You completed the &ldquo;{scenarioTitle}&rdquo; conversation.
        </p>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-3 gap-3">
        <div className="bg-white rounded-xl border border-gray-200 p-4 text-center">
          <p className="text-2xl font-bold text-gray-800">{totalTurns}</p>
          <p className="text-xs text-gray-500 mt-1">Turns</p>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-4 text-center">
          <p className="text-2xl font-bold text-amber-600">
            {corrections.length}
          </p>
          <p className="text-xs text-gray-500 mt-1">Corrections</p>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-4 text-center">
          <p className="text-2xl font-bold text-blue-600">
            {newVocabulary.length}
          </p>
          <p className="text-xs text-gray-500 mt-1">New Words</p>
        </div>
      </div>

      {/* Corrections list */}
      {corrections.length > 0 && (
        <div className="space-y-3">
          <h3 className="text-sm font-semibold text-gray-700">Corrections</h3>
          <div className="space-y-2">
            {corrections.map((correction, index) => (
              <div
                key={index}
                className="bg-amber-50 border border-amber-200 rounded-xl px-4 py-3"
              >
                <p className="text-sm leading-relaxed">
                  <span className="text-red-500 line-through">
                    {correction.original}
                  </span>
                  <span className="mx-2 text-gray-400">&rarr;</span>
                  <span className="text-green-600 font-medium">
                    {correction.corrected}
                  </span>
                </p>
                <p className="text-xs text-gray-500 mt-1">{correction.tip}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* New vocabulary */}
      {newVocabulary.length > 0 && (
        <div className="space-y-3">
          <h3 className="text-sm font-semibold text-gray-700">
            New Vocabulary
          </h3>
          <div className="flex flex-wrap gap-2">
            {newVocabulary.map((word) => (
              <span
                key={word}
                className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-700"
              >
                {word}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Action buttons */}
      <div className="flex gap-3 pt-2">
        <button
          onClick={onTryAgain}
          className="flex-1 px-4 py-2.5 text-sm font-semibold rounded-xl border border-gray-300 text-gray-700 bg-white hover:bg-gray-50 transition-colors"
        >
          Try Again
        </button>
        <button
          onClick={onBackToScenarios}
          className="flex-1 px-4 py-2.5 text-sm font-semibold rounded-xl bg-blue-500 text-white hover:bg-blue-600 transition-colors"
        >
          More Scenarios
        </button>
      </div>
    </div>
  );
}
