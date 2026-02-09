'use client';

interface WordScoresProps {
  words: { word: string; accuracyScore: number; errorType: string }[];
}

function getWordColor(score: number): string {
  if (score > 80) return 'bg-green-100 text-green-800 border-green-200';
  if (score >= 60) return 'bg-yellow-100 text-yellow-800 border-yellow-200';
  return 'bg-red-100 text-red-800 border-red-200';
}

export default function WordScores({ words }: WordScoresProps) {
  if (words.length === 0) {
    return (
      <p className="text-sm text-gray-400 italic">No word-level scores available.</p>
    );
  }

  return (
    <div className="flex flex-wrap gap-1.5">
      {words.map((item, index) => (
        <span
          key={`${item.word}-${index}`}
          className={`inline-block px-2 py-1 text-sm font-medium rounded-md border cursor-default transition-transform hover:scale-105 ${getWordColor(item.accuracyScore)}`}
          title={`Score: ${item.accuracyScore}${item.errorType !== 'None' ? ` | Error: ${item.errorType}` : ''}`}
        >
          {item.word}
        </span>
      ))}
    </div>
  );
}
