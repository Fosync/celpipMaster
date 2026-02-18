'use client';

import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { speakingTasks } from '@/lib/data/speaking';
import TaskCard from '@/components/speaking/task-card';
import MicTest from '@/components/speaking/mic-test';

export default function ExamModePage() {
  const searchParams = useSearchParams();
  const difficulty = searchParams.get('difficulty') ?? 'medium';

  const filtered = difficulty === 'medium'
    ? speakingTasks
    : speakingTasks.filter((t) => t.difficulty === difficulty);

  const tasks = filtered.length > 0 ? filtered : speakingTasks;

  return (
    <div className="mx-auto max-w-4xl py-6 px-4">
      {/* Header */}
      <div className="mb-6">
        <Link
          href="/speaking"
          className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-700 transition-colors mb-3"
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
          Speaking
        </Link>
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100">
            <svg className="w-5 h-5 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
            </svg>
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-900">Exam Mode</h1>
            <p className="text-sm text-gray-500">
              CELPIP speaking tasks with AI scoring
            </p>
          </div>
        </div>
      </div>

      {/* Info */}
      <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 mb-4">
        <div className="flex items-start gap-3">
          <svg className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="16" x2="12" y2="12" />
            <line x1="12" y1="8" x2="12.01" y2="8" />
          </svg>
          <div className="text-sm text-blue-700 space-y-1">
            <p className="font-medium">How it works:</p>
            <ol className="list-decimal list-inside space-y-0.5 text-blue-600">
              <li>Read the prompt and prepare your answer (30s)</li>
              <li>Speak clearly into your microphone (60-90s)</li>
              <li>Get pronunciation heatmap and grammar feedback</li>
              <li>Review your CELPIP scores and CLB level</li>
            </ol>
          </div>
        </div>
      </div>

      {/* Mic Test */}
      <div className="mb-6">
        <MicTest />
      </div>

      {/* Difficulty Badge */}
      <div className="flex items-center gap-2 mb-4">
        <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
          Tasks
        </h2>
        <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
          difficulty === 'easy' ? 'bg-green-100 text-green-700' :
          difficulty === 'hard' ? 'bg-red-100 text-red-700' :
          'bg-yellow-100 text-yellow-700'
        }`}>
          {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
        </span>
      </div>

      {/* Task Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {tasks.map((task) => (
          <TaskCard
            key={task.id}
            id={task.id}
            title={`Task ${task.taskNumber}: ${task.title}`}
            description={task.description}
            difficulty={task.difficulty}
            prepTime={task.prepTime}
            speakTime={task.speakTime}
          />
        ))}
      </div>

      <div className="mt-8 text-center">
        <p className="text-xs text-gray-400">
          Best experience on Chrome or Edge. Microphone access required.
        </p>
      </div>
    </div>
  );
}
