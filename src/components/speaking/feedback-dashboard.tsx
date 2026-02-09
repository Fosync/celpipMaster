'use client';

import { useState } from 'react';
import Link from 'next/link';
import ScoreRadar from '@/components/speaking/score-radar';
import WordScores from '@/components/speaking/word-scores';
import CorrectedSentences from '@/components/speaking/corrected-sentences';

interface FeedbackDashboardProps {
  feedback: {
    scores: {
      taskCompletion: number;
      vocabulary: number;
      grammar: number;
      coherence: number;
      pronunciation: number;
      overall: number;
    };
    clbLevel: number;
    strengths: string[];
    improvements: string[];
    correctedSentences: { original: string; corrected: string; explanation: string }[];
    pronunciationTips: string[];
    modelAnswer: string;
    encouragement: string;
  };
  wordScores: { word: string; accuracyScore: number; errorType: string }[];
  pronScore: number;
  fluencyScore: number;
  onTryAgain: () => void;
  onNextTask: () => void;
  backHref: string;
}

function getClbGradient(level: number): string {
  if (level >= 10) return 'from-emerald-500 to-teal-600';
  if (level >= 8) return 'from-blue-500 to-indigo-600';
  if (level >= 6) return 'from-yellow-500 to-orange-500';
  return 'from-orange-500 to-red-500';
}

function getOverallColor(score: number): string {
  if (score > 8) return 'text-green-600';
  if (score >= 6) return 'text-yellow-600';
  return 'text-red-600';
}

export default function FeedbackDashboard({
  feedback,
  wordScores,
  pronScore,
  fluencyScore,
  onTryAgain,
  onNextTask,
  backHref,
}: FeedbackDashboardProps) {
  const [modelAnswerOpen, setModelAnswerOpen] = useState(false);

  return (
    <div className="max-w-2xl mx-auto space-y-6 pb-8">
      {/* Back link */}
      <Link
        href={backHref}
        className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-700 transition-colors"
      >
        <svg
          className="w-4 h-4"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="15 18 9 12 15 6" />
        </svg>
        Back
      </Link>

      {/* CLB Level Badge */}
      <div className="flex flex-col items-center gap-2">
        <div
          className={`w-24 h-24 rounded-full bg-gradient-to-br ${getClbGradient(feedback.clbLevel)} flex items-center justify-center shadow-lg`}
        >
          <div className="text-center">
            <div className="text-2xl font-extrabold text-white">
              {feedback.clbLevel}
            </div>
            <div className="text-[10px] font-semibold text-white/80 uppercase tracking-wider">
              CLB
            </div>
          </div>
        </div>
        <p className="text-sm text-gray-500 font-medium">
          Canadian Language Benchmark
        </p>
      </div>

      {/* Overall Score */}
      <div className="bg-white rounded-xl border border-gray-200 p-5 text-center">
        <p className="text-sm text-gray-500 mb-1">Overall Score</p>
        <p className={`text-4xl font-bold ${getOverallColor(feedback.scores.overall)}`}>
          {feedback.scores.overall}
          <span className="text-lg text-gray-400 font-normal">/12</span>
        </p>
      </div>

      {/* Score Radar (5 categories) */}
      <div className="bg-white rounded-xl border border-gray-200 p-5">
        <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-4">
          Score Breakdown
        </h3>
        <ScoreRadar
          scores={{
            taskCompletion: feedback.scores.taskCompletion,
            vocabulary: feedback.scores.vocabulary,
            grammar: feedback.scores.grammar,
            coherence: feedback.scores.coherence,
            pronunciation: feedback.scores.pronunciation,
          }}
        />
      </div>

      {/* Strengths */}
      {feedback.strengths.length > 0 && (
        <div>
          <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-3">
            Strengths
          </h3>
          <div className="space-y-2">
            {feedback.strengths.map((strength, i) => (
              <div
                key={i}
                className="flex items-start gap-2.5 bg-green-50 border border-green-100 rounded-lg px-4 py-3"
              >
                <svg
                  className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span className="text-sm text-green-800">{strength}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Improvements */}
      {feedback.improvements.length > 0 && (
        <div>
          <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-3">
            Areas to Improve
          </h3>
          <div className="space-y-2">
            {feedback.improvements.map((improvement, i) => (
              <div
                key={i}
                className="flex items-start gap-2.5 bg-orange-50 border border-orange-100 rounded-lg px-4 py-3"
              >
                <svg
                  className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="12" y1="19" x2="12" y2="5" />
                  <polyline points="5 12 12 5 19 12" />
                </svg>
                <span className="text-sm text-orange-800">{improvement}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Corrected Sentences */}
      {feedback.correctedSentences.length > 0 && (
        <div>
          <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-3">
            Grammar Corrections
          </h3>
          <CorrectedSentences sentences={feedback.correctedSentences} />
        </div>
      )}

      {/* Pronunciation Section */}
      <div className="bg-white rounded-xl border border-gray-200 p-5 space-y-4">
        <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
          Pronunciation Analysis
        </h3>

        {/* Pronunciation & Fluency Scores */}
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-gray-50 rounded-lg p-3 text-center">
            <p className="text-xs text-gray-500 mb-1">Pronunciation</p>
            <p
              className={`text-2xl font-bold ${
                pronScore > 80
                  ? 'text-green-600'
                  : pronScore >= 60
                  ? 'text-yellow-600'
                  : 'text-red-600'
              }`}
            >
              {pronScore}
              <span className="text-sm text-gray-400 font-normal">%</span>
            </p>
          </div>
          <div className="bg-gray-50 rounded-lg p-3 text-center">
            <p className="text-xs text-gray-500 mb-1">Fluency</p>
            <p
              className={`text-2xl font-bold ${
                fluencyScore > 80
                  ? 'text-green-600'
                  : fluencyScore >= 60
                  ? 'text-yellow-600'
                  : 'text-red-600'
              }`}
            >
              {fluencyScore}
              <span className="text-sm text-gray-400 font-normal">%</span>
            </p>
          </div>
        </div>

        {/* Word-level Scores */}
        {wordScores.length > 0 && (
          <div>
            <p className="text-xs text-gray-500 mb-2 font-medium">Word Accuracy</p>
            <WordScores words={wordScores} />
          </div>
        )}

        {/* Pronunciation Tips */}
        {feedback.pronunciationTips.length > 0 && (
          <div>
            <p className="text-xs text-gray-500 mb-2 font-medium">
              Pronunciation Tips
            </p>
            <ul className="space-y-1.5">
              {feedback.pronunciationTips.map((tip, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 text-sm text-gray-700"
                >
                  <span className="text-blue-400 mt-1 flex-shrink-0">&#x2022;</span>
                  {tip}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Model Answer */}
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <button
          onClick={() => setModelAnswerOpen(!modelAnswerOpen)}
          className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-gray-50 transition-colors"
        >
          <span className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
            Model Answer
          </span>
          <svg
            className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${
              modelAnswerOpen ? 'rotate-180' : ''
            }`}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </button>
        {modelAnswerOpen && (
          <div className="px-5 pb-4 border-t border-gray-100">
            <p className="text-sm text-gray-700 leading-relaxed whitespace-pre-line pt-3">
              {feedback.modelAnswer}
            </p>
          </div>
        )}
      </div>

      {/* Encouragement */}
      {feedback.encouragement && (
        <div className="bg-blue-50 border border-blue-100 rounded-xl p-5 text-center">
          <p className="text-sm text-blue-700 font-medium leading-relaxed">
            {feedback.encouragement}
          </p>
        </div>
      )}

      {/* Action Buttons */}
      <div className="flex gap-3 pt-2">
        <button
          onClick={onTryAgain}
          className="flex-1 px-5 py-3 bg-white border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:border-gray-400 hover:bg-gray-50 transition-all"
        >
          Try Again
        </button>
        <button
          onClick={onNextTask}
          className="flex-1 px-5 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all"
        >
          Next Task
        </button>
      </div>
    </div>
  );
}
