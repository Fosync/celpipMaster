'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
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
const FIRST_VISIT_KEY = 'celpipmaster_coach_seen';

// ─── Helper: Build context string ───

function buildContext(
  gameStats: GameStats | null,
  moduleStats: ModuleStats[],
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

  if (moduleStats.length > 0) {
    parts.push('\nModule progress:');
    for (const m of moduleStats) {
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
  let greeting = 'Hi there! I\'m Mia, your CELPIP study coach. I\'m here to help you prepare for your exam.';

  if (topRec) {
    greeting += `\n\nHere's my top suggestion for you: **${topRec.title}** - ${topRec.message}`;
  }

  greeting += '\n\nWhat would you like to work on today?';
  return greeting;
}

// ─── Component ───

export function CoachChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isFirstVisit, setIsFirstVisit] = useState(false);
  const [context, setContext] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Load chat history and build context on mount
  useEffect(() => {
    // Check first visit
    const seen = sessionStorage.getItem(FIRST_VISIT_KEY);
    if (!seen) {
      setIsFirstVisit(true);
    }

    // Build context
    let gameStats: GameStats | null = null;
    let moduleStatsList: ModuleStats[] = [];
    let recommendations: Recommendation[] = [];

    try {
      gameStats = getGameStats();
    } catch {
      // No game stats yet
    }
    try {
      moduleStatsList = getModuleStats();
    } catch {
      // No module stats
    }
    try {
      recommendations = getAllRecommendations();
    } catch {
      // No recommendations
    }

    const ctx = buildContext(gameStats, moduleStatsList, recommendations);
    setContext(ctx);

    // Load saved messages from sessionStorage
    const saved = sessionStorage.getItem(SESSION_KEY);
    if (saved) {
      try {
        const parsed = JSON.parse(saved) as ChatMessage[];
        setMessages(parsed);
      } catch {
        // Invalid data, start fresh
      }
    }

    // If no saved messages, set up greeting
    if (!saved) {
      const greeting = buildGreeting(recommendations);
      const initial: ChatMessage[] = [{ role: 'assistant', content: greeting }];
      setMessages(initial);
      sessionStorage.setItem(SESSION_KEY, JSON.stringify(initial));
    }
  }, []);

  // Auto-scroll on new messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

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
        content: 'Sorry, I couldn\'t process your message right now. Please try again in a moment.',
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

  // Handle open (mark as seen)
  const handleOpen = () => {
    setIsOpen(true);
    setIsFirstVisit(false);
    sessionStorage.setItem(FIRST_VISIT_KEY, 'true');
  };

  return (
    <>
      {/* Floating button */}
      <button
        onClick={isOpen ? () => setIsOpen(false) : handleOpen}
        className={`fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-purple-600 to-purple-700 text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl ${
          isFirstVisit ? 'animate-pulse' : ''
        }`}
        aria-label={isOpen ? 'Close study coach' : 'Open study coach'}
      >
        {isOpen ? (
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <span className="text-2xl" role="img" aria-label="Coach">
            {'👩\u200D🏫'}
          </span>
        )}
      </button>

      {/* Chat panel */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 flex w-[350px] flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-2xl" style={{ height: '450px' }}>
          {/* Header */}
          <div className="flex items-center justify-between bg-gradient-to-r from-purple-600 to-purple-700 px-4 py-3">
            <div className="flex items-center gap-2">
              <span className="text-lg">{'👩\u200D🏫'}</span>
              <div>
                <h3 className="text-sm font-semibold text-white">Mia - Study Coach</h3>
                <p className="text-[11px] text-purple-200">CELPIP Preparation</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="rounded-lg p-1 text-purple-200 transition-colors hover:bg-purple-500 hover:text-white"
              aria-label="Close chat"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-3 py-3 space-y-3">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-3 py-2 text-sm leading-relaxed ${
                    msg.role === 'user'
                      ? 'bg-blue-600 text-white'
                      : 'bg-purple-50 text-gray-800'
                  }`}
                >
                  {msg.content.split('\n').map((line, i) => (
                    <p key={i} className={i > 0 ? 'mt-1.5' : ''}>
                      {renderBold(line)}
                    </p>
                  ))}
                </div>
              </div>
            ))}

            {/* Typing indicator */}
            {isLoading && (
              <div className="flex justify-start">
                <div className="flex items-center gap-1 rounded-2xl bg-purple-50 px-4 py-3">
                  <span className="inline-block h-2 w-2 animate-bounce rounded-full bg-purple-400" style={{ animationDelay: '0ms' }} />
                  <span className="inline-block h-2 w-2 animate-bounce rounded-full bg-purple-400" style={{ animationDelay: '150ms' }} />
                  <span className="inline-block h-2 w-2 animate-bounce rounded-full bg-purple-400" style={{ animationDelay: '300ms' }} />
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="border-t border-gray-100 px-3 py-2">
            <div className="flex items-center gap-2">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask Mia anything..."
                className="flex-1 rounded-xl border border-gray-200 px-3 py-2 text-sm outline-none transition-colors focus:border-purple-400 focus:ring-1 focus:ring-purple-200"
                disabled={isLoading}
              />
              <button
                onClick={sendMessage}
                disabled={isLoading || !input.trim()}
                className="flex h-9 w-9 items-center justify-center rounded-xl bg-purple-600 text-white transition-colors hover:bg-purple-700 disabled:opacity-50"
                aria-label="Send message"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
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
