'use client';

import { useState } from 'react';

interface WordScoresProps {
  words: { word: string; accuracyScore: number; errorType: string }[];
}

function getWordColor(score: number): string {
  if (score >= 90) return 'bg-green-100 text-green-800 border-green-300';
  if (score >= 70) return 'bg-yellow-100 text-yellow-800 border-yellow-300';
  if (score >= 50) return 'bg-orange-100 text-orange-800 border-orange-300';
  return 'bg-red-100 text-red-800 border-red-300';
}

function getScoreLabel(score: number): string {
  if (score >= 90) return 'Excellent';
  if (score >= 70) return 'Good';
  if (score >= 50) return 'Needs Work';
  return 'Practice More';
}

function getPronunciationTip(word: string, errorType: string): string {
  if (errorType === 'None' || !errorType) return 'Good pronunciation!';
  if (errorType === 'Mispronunciation') return `Try breaking "${word}" into syllables and say each part slowly.`;
  if (errorType === 'Omission') return `Make sure to pronounce all the sounds in "${word}".`;
  if (errorType === 'Insertion') return `Be careful not to add extra sounds to "${word}".`;
  return `Focus on the correct sounds in "${word}".`;
}

export default function WordScores({ words }: WordScoresProps) {
  const [selectedWord, setSelectedWord] = useState<number | null>(null);

  if (words.length === 0) {
    return (
      <p className="text-sm text-gray-400 italic">No word-level scores available.</p>
    );
  }

  return (
    <div className="space-y-3">
      {/* Legend */}
      <div className="flex items-center gap-3 text-[10px] font-medium text-gray-500">
        <span className="flex items-center gap-1">
          <span className="w-3 h-3 rounded bg-green-200 border border-green-300" />
          90+
        </span>
        <span className="flex items-center gap-1">
          <span className="w-3 h-3 rounded bg-yellow-200 border border-yellow-300" />
          70-89
        </span>
        <span className="flex items-center gap-1">
          <span className="w-3 h-3 rounded bg-orange-200 border border-orange-300" />
          50-69
        </span>
        <span className="flex items-center gap-1">
          <span className="w-3 h-3 rounded bg-red-200 border border-red-300" />
          0-49
        </span>
      </div>

      {/* Word heatmap */}
      <div className="flex flex-wrap gap-1.5">
        {words.map((item, index) => (
          <button
            key={`${item.word}-${index}`}
            onClick={() => setSelectedWord(selectedWord === index ? null : index)}
            className={`inline-block px-2.5 py-1 text-sm font-medium rounded-lg border cursor-pointer transition-all hover:scale-105 ${getWordColor(item.accuracyScore)} ${
              selectedWord === index ? 'ring-2 ring-blue-400 ring-offset-1' : ''
            }`}
          >
            {item.word}
            <span className="ml-1 text-[10px] opacity-60">{item.accuracyScore}</span>
          </button>
        ))}
      </div>

      {/* Selected word detail */}
      {selectedWord !== null && words[selectedWord] && (
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm font-bold text-gray-800">
              &ldquo;{words[selectedWord].word}&rdquo;
            </span>
            <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${getWordColor(words[selectedWord].accuracyScore)}`}>
              {words[selectedWord].accuracyScore}% - {getScoreLabel(words[selectedWord].accuracyScore)}
            </span>
          </div>
          {words[selectedWord].errorType && words[selectedWord].errorType !== 'None' && (
            <p className="text-xs text-gray-500">
              Error type: <span className="font-medium text-gray-700">{words[selectedWord].errorType}</span>
            </p>
          )}
          <p className="text-sm text-gray-700">
            {getPronunciationTip(words[selectedWord].word, words[selectedWord].errorType)}
          </p>
        </div>
      )}
    </div>
  );
}
