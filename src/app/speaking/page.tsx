'use client';

import Link from 'next/link';
import { useState } from 'react';

type Difficulty = 'easy' | 'medium' | 'hard';

const difficulties: { value: Difficulty; label: string; color: string }[] = [
  { value: 'easy', label: 'Easy', color: 'bg-green-100 text-green-700 border-green-200' },
  { value: 'medium', label: 'Medium', color: 'bg-yellow-100 text-yellow-700 border-yellow-200' },
  { value: 'hard', label: 'Hard', color: 'bg-red-100 text-red-700 border-red-200' },
];

export default function SpeakingPage() {
  const [dailyDifficulty, setDailyDifficulty] = useState<Difficulty>('medium');
  const [examDifficulty, setExamDifficulty] = useState<Difficulty>('medium');

  return (
    <div className="mx-auto max-w-4xl py-6 px-4">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100">
            <svg
              className="w-5 h-5 text-blue-600"
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
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-900">Speaking</h1>
            <p className="text-sm text-gray-500">
              Choose your practice mode
            </p>
          </div>
        </div>
      </div>

      {/* Two Mode Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Daily Speaking Card */}
        <div className="bg-white rounded-2xl border-2 border-green-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
          {/* Card Header */}
          <div className="bg-gradient-to-r from-green-500 to-emerald-500 px-5 py-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
              </div>
              <div>
                <h2 className="text-lg font-bold text-white">Daily Speaking</h2>
                <p className="text-sm text-white/80">Casual Conversation</p>
              </div>
            </div>
          </div>

          {/* Card Body */}
          <div className="p-5 space-y-4">
            <p className="text-sm text-gray-600 leading-relaxed">
              Practice everyday English with Mia, your friendly AI conversation partner. Relaxed environment with natural corrections.
            </p>

            {/* Features */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <span className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                  <svg className="w-3 h-3 text-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3}><polyline points="20 6 9 17 4 12" /></svg>
                </span>
                15 real-life scenarios
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <span className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                  <svg className="w-3 h-3 text-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3}><polyline points="20 6 9 17 4 12" /></svg>
                </span>
                Natural error correction
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <span className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                  <svg className="w-3 h-3 text-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3}><polyline points="20 6 9 17 4 12" /></svg>
                </span>
                Build confidence &amp; fluency
              </div>
            </div>

            {/* Difficulty Selection */}
            <div>
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Difficulty</p>
              <div className="flex gap-2">
                {difficulties.map((d) => (
                  <button
                    key={d.value}
                    onClick={() => setDailyDifficulty(d.value)}
                    className={`flex-1 px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all ${
                      dailyDifficulty === d.value
                        ? d.color + ' ring-2 ring-offset-1 ring-green-300'
                        : 'bg-gray-50 text-gray-400 border-gray-200'
                    }`}
                  >
                    {d.label}
                  </button>
                ))}
              </div>
            </div>

            {/* CTA */}
            <Link
              href={`/speaking/practice?difficulty=${dailyDifficulty}`}
              className="block w-full text-center px-5 py-3 bg-green-500 text-white font-semibold rounded-xl hover:bg-green-600 transition-all shadow-sm hover:shadow-md"
            >
              Start Conversation
            </Link>
          </div>
        </div>

        {/* Exam Mode Card */}
        <div className="bg-white rounded-2xl border-2 border-blue-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
          {/* Card Header */}
          <div className="bg-gradient-to-r from-blue-500 to-indigo-600 px-5 py-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                  <polyline points="10 9 9 9 8 9" />
                </svg>
              </div>
              <div>
                <h2 className="text-lg font-bold text-white">Exam Mode</h2>
                <p className="text-sm text-white/80">CELPIP Practice</p>
              </div>
            </div>
          </div>

          {/* Card Body */}
          <div className="p-5 space-y-4">
            <p className="text-sm text-gray-600 leading-relaxed">
              Timed CELPIP speaking tasks with pronunciation scoring, grammar feedback, and CLB level assessment.
            </p>

            {/* Features */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <span className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <svg className="w-3 h-3 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3}><polyline points="20 6 9 17 4 12" /></svg>
                </span>
                8 official CELPIP tasks
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <span className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <svg className="w-3 h-3 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3}><polyline points="20 6 9 17 4 12" /></svg>
                </span>
                Pronunciation heatmap
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <span className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <svg className="w-3 h-3 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3}><polyline points="20 6 9 17 4 12" /></svg>
                </span>
                CELPIP scoring &amp; CLB level
              </div>
            </div>

            {/* Difficulty Selection */}
            <div>
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Difficulty</p>
              <div className="flex gap-2">
                {difficulties.map((d) => (
                  <button
                    key={d.value}
                    onClick={() => setExamDifficulty(d.value)}
                    className={`flex-1 px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all ${
                      examDifficulty === d.value
                        ? d.color + ' ring-2 ring-offset-1 ring-blue-300'
                        : 'bg-gray-50 text-gray-400 border-gray-200'
                    }`}
                  >
                    {d.label}
                  </button>
                ))}
              </div>
            </div>

            {/* CTA */}
            <Link
              href={`/speaking/exam?difficulty=${examDifficulty}`}
              className="block w-full text-center px-5 py-3 bg-blue-500 text-white font-semibold rounded-xl hover:bg-blue-600 transition-all shadow-sm hover:shadow-md"
            >
              Start Exam Practice
            </Link>
          </div>
        </div>
      </div>

      {/* Browser Support Note */}
      <div className="mt-8 text-center">
        <p className="text-xs text-gray-400">
          Best experience on Chrome or Edge. Microphone access required.
        </p>
      </div>
    </div>
  );
}
