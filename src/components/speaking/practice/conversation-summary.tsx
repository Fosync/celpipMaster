'use client';

interface ConversationSummaryProps {
  totalTurns: number;
  corrections: { original: string; corrected: string; tip: string }[];
  newVocabulary: string[];
  goodPhrases?: string[];
  scenarioTitle: string;
  onTryAgain: () => void;
  onBackToScenarios: () => void;
}

function StarRating({ score, max = 5 }: { score: number; max?: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: max }, (_, i) => (
        <svg
          key={i}
          className={`w-5 h-5 ${i < score ? 'text-yellow-400' : 'text-gray-200'}`}
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

function computeScores(totalTurns: number, corrections: { original: string; corrected: string; tip: string }[], goodPhrases: string[]) {
  const errorRate = totalTurns > 0 ? corrections.length / totalTurns : 0;
  const grammar = Math.max(1, Math.min(5, Math.round(5 - errorRate * 5)));
  const fluency = Math.max(1, Math.min(5, totalTurns >= 6 ? 4 : totalTurns >= 3 ? 3 : 2));
  const vocabulary = Math.max(1, Math.min(5, goodPhrases.length >= 3 ? 5 : goodPhrases.length >= 1 ? 4 : 3));
  const naturalness = Math.max(1, Math.min(5, totalTurns >= 8 ? 5 : totalTurns >= 5 ? 4 : 3));
  return { fluency, grammar, vocabulary, naturalness };
}

function getMiaRecommendation(corrections: { original: string; corrected: string; tip: string }[], newVocabulary: string[]): string {
  const parts: string[] = [];

  if (corrections.length === 0) {
    parts.push('No grammar errors today! You did great.');
  } else if (corrections.length <= 2) {
    parts.push(`Just ${corrections.length} small correction${corrections.length > 1 ? 's' : ''} today. You're improving!`);
  } else {
    const tips = corrections.map((c) => c.tip).filter(Boolean);
    const firstTip = tips[0] || 'grammar patterns';
    parts.push(`I noticed a few grammar errors. Focus on: ${firstTip}.`);
  }

  if (newVocabulary.length > 0) {
    const words = newVocabulary.slice(0, 3).join(', ');
    parts.push(`You learned: ${words}. Try using them in your next writing task!`);
  }

  return parts.join(' ');
}

export default function ConversationSummary({
  totalTurns,
  corrections,
  newVocabulary,
  goodPhrases = [],
  scenarioTitle,
  onTryAgain,
  onBackToScenarios,
}: ConversationSummaryProps) {
  const scores = computeScores(totalTurns, corrections, goodPhrases);
  const xpEarned = 30 + totalTurns * 5 - corrections.length * 3;
  const xp = Math.max(10, xpEarned);

  return (
    <div className="max-w-lg mx-auto px-4 py-8 space-y-6">
      {/* Header */}
      <div className="text-center space-y-2">
        <div className="w-16 h-16 mx-auto bg-green-100 rounded-full flex items-center justify-center">
          <svg className="w-8 h-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
            <polyline points="22 4 12 14.01 9 11.01" />
          </svg>
        </div>
        <h2 className="text-xl font-bold text-gray-800">Conversation Complete!</h2>
        <p className="text-sm text-gray-500">
          &ldquo;{scenarioTitle}&rdquo;
        </p>
      </div>

      {/* XP Badge */}
      <div className="text-center">
        <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-purple-100 text-purple-700 font-bold text-sm">
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
          +{xp} XP
        </span>
      </div>

      {/* Section 1: General Scores */}
      <div className="bg-white rounded-xl border border-gray-200 p-5 space-y-3">
        <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wide">Performance</h3>
        <div className="space-y-2.5">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">Fluency</span>
            <StarRating score={scores.fluency} />
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">Grammar</span>
            <StarRating score={scores.grammar} />
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">Vocabulary</span>
            <StarRating score={scores.vocabulary} />
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">Naturalness</span>
            <StarRating score={scores.naturalness} />
          </div>
        </div>
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
          <p className="text-2xl font-bold text-emerald-600">
            {newVocabulary.length}
          </p>
          <p className="text-xs text-gray-500 mt-1">New Words</p>
        </div>
      </div>

      {/* Section 2: Corrections Table */}
      {corrections.length > 0 && (
        <div className="space-y-3">
          <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wide">Corrections</h3>
          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="text-left px-4 py-2 text-xs font-semibold text-gray-500">You said</th>
                  <th className="text-left px-4 py-2 text-xs font-semibold text-gray-500">Correct</th>
                  <th className="text-left px-4 py-2 text-xs font-semibold text-gray-500">Tip</th>
                </tr>
              </thead>
              <tbody>
                {corrections.map((correction, index) => (
                  <tr key={index} className="border-b border-gray-100 last:border-0">
                    <td className="px-4 py-2.5 text-red-500 line-through">{correction.original}</td>
                    <td className="px-4 py-2.5 text-green-600 font-medium">{correction.corrected}</td>
                    <td className="px-4 py-2.5 text-gray-500 text-xs">{correction.tip}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Section 3: New Vocabulary */}
      {newVocabulary.length > 0 && (
        <div className="space-y-3">
          <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
            New Vocabulary
          </h3>
          <div className="flex flex-wrap gap-2">
            {newVocabulary.map((word) => (
              <span
                key={word}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium bg-emerald-50 text-emerald-700 border border-emerald-200"
              >
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {word}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Section 4: Good Phrases */}
      {goodPhrases.length > 0 && (
        <div className="space-y-3">
          <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
            Great Phrases You Used
          </h3>
          <div className="space-y-2">
            {goodPhrases.map((phrase, i) => (
              <div
                key={i}
                className="flex items-start gap-2.5 bg-green-50 border border-green-200 rounded-lg px-4 py-2.5"
              >
                <svg className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span className="text-sm text-green-800">&ldquo;{phrase}&rdquo;</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Section 5: Mia's Recommendation */}
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
        <div className="flex items-start gap-3">
          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
            <span className="text-white text-[10px] font-bold">M</span>
          </div>
          <div>
            <p className="text-xs font-semibold text-blue-700 uppercase tracking-wide mb-1">
              Mia&apos;s Tip
            </p>
            <p className="text-sm text-blue-800 leading-relaxed">
              {getMiaRecommendation(corrections, newVocabulary)}
            </p>
          </div>
        </div>
      </div>

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
