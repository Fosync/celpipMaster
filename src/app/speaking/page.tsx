'use client';

import Link from 'next/link';
import { speakingTasks } from '@/lib/data/speaking';
import TaskCard from '@/components/speaking/task-card';

export default function SpeakingPage() {
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
              CELPIP speaking tasks and conversation practice
            </p>
          </div>
        </div>

        {/* Mode Selector */}
        <div className="mt-4 grid grid-cols-2 gap-3">
          <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-1">
              <svg className="w-4 h-4 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <rect x="9" y="1" width="6" height="12" rx="3" />
                <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
              </svg>
              <span className="text-sm font-semibold text-blue-700">Exam Tasks</span>
            </div>
            <p className="text-xs text-blue-600">Timed CELPIP speaking tasks with AI scoring</p>
          </div>
          <Link
            href="/speaking/practice"
            className="bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-purple-300 hover:bg-purple-50 transition-all group"
          >
            <div className="flex items-center gap-2 mb-1">
              <svg className="w-4 h-4 text-gray-500 group-hover:text-purple-600 transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
              <span className="text-sm font-semibold text-gray-700 group-hover:text-purple-700 transition-colors">AI Conversation</span>
            </div>
            <p className="text-xs text-gray-500 group-hover:text-purple-600 transition-colors">Practice real conversations with AI tutor</p>
          </Link>
        </div>
      </div>

      {/* Exam Tasks Section */}
      <div className="mb-4">
        <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">
          CELPIP Speaking Tasks
        </h2>
        <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 mb-4">
          <div className="flex items-start gap-3">
            <span className="text-blue-500 flex-shrink-0 mt-0.5">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="16" x2="12" y2="12" />
                <line x1="12" y1="8" x2="12.01" y2="8" />
              </svg>
            </span>
            <div className="text-sm text-blue-700 space-y-1">
              <p className="font-medium">How it works:</p>
              <ol className="list-decimal list-inside space-y-0.5 text-blue-600">
                <li>Read the prompt and prepare your answer</li>
                <li>Speak clearly into your microphone</li>
                <li>Get AI-powered pronunciation and grammar feedback</li>
                <li>Review your scores and improve!</li>
              </ol>
            </div>
          </div>
        </div>
      </div>

      {/* Task Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {speakingTasks.map((task) => (
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

      {/* Browser Support Note */}
      <div className="mt-8 text-center">
        <p className="text-xs text-gray-400">
          Best experience on Chrome or Edge. Microphone access required.
        </p>
      </div>
    </div>
  );
}
