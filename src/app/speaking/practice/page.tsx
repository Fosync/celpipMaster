'use client';

import Link from 'next/link';
import { conversationScenarios, freeChat } from '@/lib/data/speaking';
import ScenarioCard from '@/components/speaking/practice/scenario-card';

export default function ConversationPracticePage() {
  return (
    <div className="mx-auto max-w-4xl py-6 px-4">
      {/* Header */}
      <div className="mb-8">
        <Link
          href="/speaking"
          className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-700 transition-colors mb-3"
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
          Speaking
        </Link>

        <div className="flex items-center gap-3 mb-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-100">
            <svg
              className="w-5 h-5 text-purple-600"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-900">
              Conversation Practice
            </h1>
            <p className="text-sm text-gray-500">
              Practice real-life English conversations with AI
            </p>
          </div>
        </div>

        {/* Info Banner */}
        <div className="mt-4 bg-purple-50 border border-purple-100 rounded-xl p-4">
          <div className="flex items-start gap-3">
            <span className="text-purple-500 flex-shrink-0 mt-0.5">
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="16" x2="12" y2="12" />
                <line x1="12" y1="8" x2="12.01" y2="8" />
              </svg>
            </span>
            <div className="text-sm text-purple-700 space-y-1">
              <p className="font-medium">How it works:</p>
              <ol className="list-decimal list-inside space-y-0.5 text-purple-600">
                <li>Choose a scenario or start a free chat</li>
                <li>Listen to the AI tutor and respond by speaking</li>
                <li>Get instant corrections and feedback</li>
                <li>Continue the conversation naturally</li>
              </ol>
            </div>
          </div>
        </div>
      </div>

      {/* Free Chat - Featured */}
      <div className="mb-6">
        <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">
          Free Practice
        </h2>
        <Link
          href="/speaking/practice/free-chat"
          className="block bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl p-5 text-white transition-all hover:shadow-lg hover:-translate-y-0.5 group"
        >
          <div className="flex items-center gap-4">
            <span className="text-3xl">{freeChat.icon}</span>
            <div>
              <h3 className="text-lg font-bold">{freeChat.title}</h3>
              <p className="text-sm text-white/80">{freeChat.description}</p>
            </div>
            <svg
              className="w-5 h-5 ml-auto opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </div>
        </Link>
      </div>

      {/* Scenario Grid */}
      <div>
        <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">
          Scenarios
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {conversationScenarios.map((scenario) => (
            <ScenarioCard
              key={scenario.id}
              id={scenario.id}
              title={scenario.title}
              description={scenario.description}
              icon={scenario.icon}
              difficulty={scenario.difficulty}
            />
          ))}
        </div>
      </div>

      {/* Browser Note */}
      <div className="mt-8 text-center">
        <p className="text-xs text-gray-400">
          Best experience on Chrome or Edge. Microphone access required.
        </p>
      </div>
    </div>
  );
}
