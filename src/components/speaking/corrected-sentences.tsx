'use client';

interface CorrectedSentencesProps {
  sentences: { original: string; corrected: string; explanation: string }[];
}

export default function CorrectedSentences({ sentences }: CorrectedSentencesProps) {
  if (sentences.length === 0) {
    return (
      <p className="text-sm text-gray-400 italic">No corrections needed.</p>
    );
  }

  return (
    <div className="space-y-3">
      {sentences.map((item, index) => (
        <div
          key={index}
          className="bg-white rounded-xl border border-gray-200 p-4 space-y-2"
        >
          <div className="space-y-1">
            <p className="text-sm">
              <span className="text-red-500 line-through">{item.original}</span>
            </p>
            <p className="text-sm">
              <span className="text-green-600 font-medium">{item.corrected}</span>
            </p>
          </div>
          <p className="text-xs text-gray-500 leading-relaxed">
            {item.explanation}
          </p>
        </div>
      ))}
    </div>
  );
}
