'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import { getAllRecommendations } from '@/lib/coach/recommendations';
import { getGameStats } from '@/lib/progress/gamification';
import { getModuleStats } from '@/lib/progress/cross-tracker';
import type { Recommendation } from '@/lib/coach/recommendations';
import type { GameStats } from '@/lib/progress/gamification';
import type { ModuleStats } from '@/lib/progress/cross-tracker';

// ─── Types ───

interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

// ─── Constants ───

const SESSION_KEY = 'celpipmaster_coach_chat';

// ─── Color map for recommendation types ───

const TYPE_COLORS: Record<Recommendation['type'], string> = {
  daily_plan: 'border-l-blue-500',
  weak_area: 'border-l-orange-500',
  motivation: 'border-l-green-500',
  next_step: 'border-l-purple-500',
  celpip_tip: 'border-l-teal-500',
};

const TYPE_LABELS: Record<Recommendation['type'], string> = {
  daily_plan: 'Daily Plan',
  weak_area: 'Weak Area',
  motivation: 'Motivation',
  next_step: 'Next Step',
  celpip_tip: 'CELPIP Tip',
};

const TYPE_BG: Record<Recommendation['type'], string> = {
  daily_plan: 'bg-blue-50 text-blue-700',
  weak_area: 'bg-orange-50 text-orange-700',
  motivation: 'bg-green-50 text-green-700',
  next_step: 'bg-purple-50 text-purple-700',
  celpip_tip: 'bg-teal-50 text-teal-700',
};

// ─── Helper: Build context string ───

function buildContext(
  gameStats: GameStats | null,
  moduleStatsList: ModuleStats[],
  recommendations: Recommendation[]
): string {
  const parts: string[] = [];

  if (gameStats) {
    parts.push(`Level: ${gameStats.level.level} (${gameStats.level.name})`);
    parts.push(`Total XP: ${gameStats.totalXP}`);
    parts.push(`Streak: ${gameStats.streakDays} days`);
    parts.push(`Badges unlocked: ${gameStats.unlockedBadges.length}`);
    parts.push(`Words learned: ${gameStats.stats.wordsLearned}`);
    parts.push(`Lessons completed: ${gameStats.stats.lessonsCompleted}`);
    parts.push(`Quizzes completed: ${gameStats.stats.quizzesCompleted}`);
    parts.push(`Readings completed: ${gameStats.stats.readingsCompleted}`);
    parts.push(`Writings completed: ${gameStats.stats.writingsCompleted}`);
    parts.push(`Speaking practices: ${gameStats.stats.speakingPractices}`);
  } else {
    parts.push('No progress data available yet - new student.');
  }

  if (moduleStatsList.length > 0) {
    parts.push('\nModule progress:');
    for (const m of moduleStatsList) {
      parts.push(`  ${m.label}: ${m.percentage}% (${m.completedItems}/${m.totalItems})`);
    }
  }

  if (recommendations.length > 0) {
    parts.push('\nTop recommendations:');
    for (const r of recommendations) {
      parts.push(`  - ${r.title}: ${r.message}`);
    }
  }

  return parts.join('\n');
}

// ─── Helper: Generate initial greeting ───

function buildGreeting(recommendations: Recommendation[]): string {
  const topRec = recommendations[0];
  let greeting =
    'Hi there! I\'m Mia, your CELPIP study coach. I\'m here to help you prepare for your exam and give you personalized study advice.';

  if (topRec) {
    greeting += `\n\n**${topRec.title}** - ${topRec.message}`;
  }

  greeting += '\n\nWhat would you like to work on today? You can ask me about study strategies, CELPIP tips, or anything about your preparation!';
  return greeting;
}

// ─── Helper: render **bold** text ───

function renderBold(text: string): React.ReactNode {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return (
        <span key={i} className="font-semibold">
          {part.slice(2, -2)}
        </span>
      );
    }
    return part;
  });
}

// ─── Page Component ───

export default function CoachPage() {
  const [recommendations, setRecommendations] = useState<Recommendation[]>([]);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [context, setContext] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Load data on mount
  useEffect(() => {
    let gameStats: GameStats | null = null;
    let moduleStatsList: ModuleStats[] = [];
    let recs: Recommendation[] = [];

    try {
      gameStats = getGameStats();
    } catch {
      // No data yet
    }
    try {
      moduleStatsList = getModuleStats();
    } catch {
      // No data
    }
    try {
      recs = getAllRecommendations();
    } catch {
      // No data
    }

    setRecommendations(recs);
    setContext(buildContext(gameStats, moduleStatsList, recs));

    // Load saved messages from sessionStorage
    const saved = sessionStorage.getItem(SESSION_KEY);
    if (saved) {
      try {
        const parsed = JSON.parse(saved) as ChatMessage[];
        setMessages(parsed);
      } catch {
        // Invalid data
      }
    }

    // If no saved messages, set up greeting
    if (!saved) {
      const greeting = buildGreeting(recs);
      const initial: ChatMessage[] = [{ role: 'assistant', content: greeting }];
      setMessages(initial);
      sessionStorage.setItem(SESSION_KEY, JSON.stringify(initial));
    }
  }, []);

  // Auto-scroll on new messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  // Focus input on mount
  useEffect(() => {
    setTimeout(() => inputRef.current?.focus(), 200);
  }, []);

  // Save messages to sessionStorage
  const saveMessages = useCallback((msgs: ChatMessage[]) => {
    sessionStorage.setItem(SESSION_KEY, JSON.stringify(msgs));
  }, []);

  // Send message
  const sendMessage = useCallback(async () => {
    const trimmed = input.trim();
    if (!trimmed || isLoading) return;

    const userMessage: ChatMessage = { role: 'user', content: trimmed };
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    saveMessages(updatedMessages);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/coach', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: updatedMessages,
          context,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to get response');
      }

      const data = (await response.json()) as { message: string };
      const assistantMessage: ChatMessage = {
        role: 'assistant',
        content: data.message,
      };
      const finalMessages = [...updatedMessages, assistantMessage];
      setMessages(finalMessages);
      saveMessages(finalMessages);
    } catch {
      const errorMessage: ChatMessage = {
        role: 'assistant',
        content:
          'Sorry, I couldn\'t process your message right now. Please try again in a moment.',
      };
      const finalMessages = [...updatedMessages, errorMessage];
      setMessages(finalMessages);
      saveMessages(finalMessages);
    } finally {
      setIsLoading(false);
    }
  }, [input, messages, isLoading, context, saveMessages]);

  // Handle key press
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  // Clear chat
  const clearChat = () => {
    const recs = recommendations;
    const greeting = buildGreeting(recs);
    const initial: ChatMessage[] = [{ role: 'assistant', content: greeting }];
    setMessages(initial);
    saveMessages(initial);
  };

  return (
    <div className="mx-auto max-w-6xl py-6 px-4">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500 to-purple-600 text-2xl">
            {'👩\u200D🏫'}
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              Meet Mia {'👩\u200D🏫'}
            </h1>
            <p className="text-sm text-gray-500">Your AI Study Coach</p>
          </div>
        </div>
      </div>

      {/* Main content: recommendations + chat */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-5">
        {/* Left side: Recommendations */}
        <div className="lg:col-span-2 space-y-4">
          <h2 className="text-lg font-semibold text-gray-900">
            Personalized Recommendations
          </h2>

          {recommendations.length === 0 && (
            <div className="rounded-2xl border border-gray-200 bg-white p-6 text-center">
              <p className="text-sm text-gray-500">
                Start learning to get personalized recommendations!
              </p>
              <Link
                href="/learn/vocabulary"
                className="mt-3 inline-block rounded-xl bg-purple-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-purple-700"
              >
                Start Learning
              </Link>
            </div>
          )}

          {recommendations.map((rec, idx) => (
            <div
              key={idx}
              className={`rounded-2xl border border-gray-200 border-l-4 bg-white p-4 shadow-sm transition-shadow hover:shadow-md ${TYPE_COLORS[rec.type]}`}
            >
              <div className="mb-2 flex items-center gap-2">
                <span
                  className={`inline-flex rounded-full px-2 py-0.5 text-[11px] font-semibold ${TYPE_BG[rec.type]}`}
                >
                  {TYPE_LABELS[rec.type]}
                </span>
              </div>
              <h3 className="text-sm font-semibold text-gray-900 mb-1">
                {rec.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {rec.message}
              </p>
              {rec.action && (
                <Link
                  href={rec.action.href}
                  className="mt-3 inline-flex items-center gap-1 rounded-xl bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-700 transition-colors hover:bg-gray-200"
                >
                  {rec.action.label}
                  <svg
                    className="h-3 w-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              )}
            </div>
          ))}
        </div>

        {/* Right side: Full chat */}
        <div className="lg:col-span-3">
          <div className="flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm" style={{ height: '600px' }}>
            {/* Chat header */}
            <div className="flex items-center justify-between bg-gradient-to-r from-purple-600 to-purple-700 px-5 py-3">
              <div className="flex items-center gap-3">
                <span className="text-xl">{'👩\u200D🏫'}</span>
                <div>
                  <h3 className="text-sm font-semibold text-white">
                    Chat with Mia
                  </h3>
                  <p className="text-[11px] text-purple-200">
                    Ask about study strategies, CELPIP tips, or your progress
                  </p>
                </div>
              </div>
              <button
                onClick={clearChat}
                className="rounded-lg px-3 py-1 text-xs font-medium text-purple-200 transition-colors hover:bg-purple-500 hover:text-white"
                title="Clear chat history"
              >
                Clear
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  {msg.role === 'assistant' && (
                    <div className="mr-2 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-purple-100 text-sm">
                      {'👩\u200D🏫'}
                    </div>
                  )}
                  <div
                    className={`max-w-[75%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                      msg.role === 'user'
                        ? 'bg-blue-600 text-white'
                        : 'bg-purple-50 text-gray-800'
                    }`}
                  >
                    {msg.content.split('\n').map((line, i) => (
                      <p key={i} className={i > 0 ? 'mt-2' : ''}>
                        {renderBold(line)}
                      </p>
                    ))}
                  </div>
                </div>
              ))}

              {/* Typing indicator */}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="mr-2 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-purple-100 text-sm">
                    {'👩\u200D🏫'}
                  </div>
                  <div className="flex items-center gap-1.5 rounded-2xl bg-purple-50 px-5 py-3">
                    <span
                      className="inline-block h-2 w-2 animate-bounce rounded-full bg-purple-400"
                      style={{ animationDelay: '0ms' }}
                    />
                    <span
                      className="inline-block h-2 w-2 animate-bounce rounded-full bg-purple-400"
                      style={{ animationDelay: '150ms' }}
                    />
                    <span
                      className="inline-block h-2 w-2 animate-bounce rounded-full bg-purple-400"
                      style={{ animationDelay: '300ms' }}
                    />
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="border-t border-gray-100 px-4 py-3">
              <div className="flex items-center gap-3">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Ask Mia about your study plan, CELPIP tips, weak areas..."
                  className="flex-1 rounded-xl border border-gray-200 px-4 py-2.5 text-sm outline-none transition-colors focus:border-purple-400 focus:ring-2 focus:ring-purple-100"
                  disabled={isLoading}
                />
                <button
                  onClick={sendMessage}
                  disabled={isLoading || !input.trim()}
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-600 text-white transition-colors hover:bg-purple-700 disabled:opacity-50"
                  aria-label="Send message"
                >
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
