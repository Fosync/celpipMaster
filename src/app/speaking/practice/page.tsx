'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { conversationScenarios, freeChat } from '@/lib/data/speaking';
import ScenarioCard from '@/components/speaking/practice/scenario-card';

export default function ConversationPracticePage() {
  const searchParams = useSearchParams();
  const difficulty = searchParams.get('difficulty') ?? 'medium';

  // Filter scenarios by difficulty or show all if medium
  const filteredScenarios = difficulty === 'medium'
    ? conversationScenarios
    : conversationScenarios.filter((s) => s.difficulty === difficulty);

  const scenarios = filteredScenarios.length > 0 ? filteredScenarios : conversationScenarios;

  return (
    <div className="mx-auto max-w-4xl py-6 px-4">
      {/* Header */}
      <div className="mb-8">
        <Link
          href="/speaking"
          className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-700 transition-colors mb-3"
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
          Speaking
        </Link>

        <div className="flex items-center gap-3 mb-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-100">
            <svg className="w-5 h-5 text-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-900">
              Daily Speaking
            </h1>
            <p className="text-sm text-gray-500">
              Chat with Mia in real-life scenarios
            </p>
          </div>
        </div>

        {/* Info Banner */}
        <div className="mt-4 bg-green-50 border border-green-100 rounded-xl p-4">
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center mt-0.5">
              <span className="text-white text-[10px] font-bold">M</span>
            </div>
            <div className="text-sm text-green-700 space-y-1">
              <p className="font-medium">Hi! I&apos;m Mia, your conversation partner.</p>
              <p className="text-green-600">Pick a scenario and let&apos;s chat! I&apos;ll help you practice natural English — no tests, no pressure. Just talking.</p>
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
          href={`/speaking/practice/free-chat?difficulty=${difficulty}`}
          className="block bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl p-5 text-white transition-all hover:shadow-lg hover:-translate-y-0.5 group"
        >
          <div className="flex items-center gap-4">
            <span className="text-3xl">{freeChat.icon}</span>
            <div>
              <h3 className="text-lg font-bold">{freeChat.title}</h3>
              <p className="text-sm text-white/80">{freeChat.description}</p>
            </div>
            <svg className="w-5 h-5 ml-auto opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </div>
        </Link>
      </div>

      {/* Scenario Grid */}
      <div>
        <div className="flex items-center gap-2 mb-3">
          <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
            Scenarios
          </h2>
          <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
            difficulty === 'easy' ? 'bg-green-100 text-green-700' :
            difficulty === 'hard' ? 'bg-red-100 text-red-700' :
            'bg-yellow-100 text-yellow-700'
          }`}>
            {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
          </span>
          <span className="text-xs text-gray-400">
            {scenarios.length} scenarios
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {scenarios.map((scenario) => (
            <ScenarioCard
              key={scenario.id}
              id={scenario.id}
              title={scenario.title}
              description={scenario.description}
              icon={scenario.icon}
              difficulty={scenario.difficulty}
              href={`/speaking/practice/${scenario.id}?difficulty=${difficulty}`}
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
