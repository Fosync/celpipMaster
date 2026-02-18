'use client';

import { useEffect, useRef } from 'react';

interface ChatBubbleProps {
  role: 'ai' | 'user';
  text: string;
  mood?: string;
  onSpeak?: () => void;
}

const MOOD_EMOJI: Record<string, string> = {
  happy: '',
  curious: '',
  surprised: '',
  empathetic: '',
  amused: '',
  thoughtful: '',
};

function SpeakerIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
      <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
      <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
    </svg>
  );
}

export default function ChatBubble({
  role,
  text,
  mood,
  onSpeak,
}: ChatBubbleProps) {
  const bubbleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = bubbleRef.current;
    if (!el) return;

    el.style.opacity = '0';
    el.style.transform = 'translateY(8px)';

    const frame = requestAnimationFrame(() => {
      el.style.transition = 'opacity 0.3s ease-out, transform 0.3s ease-out';
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    });

    return () => cancelAnimationFrame(frame);
  }, []);

  const isAI = role === 'ai';
  const moodEmoji = mood ? MOOD_EMOJI[mood] : '';

  return (
    <div
      ref={bubbleRef}
      className={`flex items-end gap-2 ${isAI ? 'justify-start' : 'justify-end'}`}
    >
      {/* Mia Avatar */}
      {isAI && (
        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center shadow-sm">
          <span className="text-white text-[10px] font-bold">M</span>
        </div>
      )}

      <div className="flex flex-col gap-1 max-w-[75%]">
        {/* Name label */}
        {isAI && (
          <span className="text-[10px] text-gray-400 font-medium ml-1">
            Mia {moodEmoji}
          </span>
        )}

        <div
          className={`
            px-4 py-2.5 text-sm leading-relaxed
            ${
              isAI
                ? 'bg-blue-50 text-gray-800 rounded-2xl rounded-bl-md border border-blue-100'
                : 'bg-white text-gray-800 rounded-2xl rounded-br-md border border-gray-200 shadow-sm'
            }
          `}
        >
          {text}
        </div>

        {/* Replay button for AI */}
        {isAI && onSpeak && (
          <button
            onClick={onSpeak}
            className="self-start ml-1 p-1 rounded-full text-gray-400 hover:text-blue-500 hover:bg-blue-50 transition-colors"
            aria-label="Listen to this message"
          >
            <SpeakerIcon className="w-3.5 h-3.5" />
          </button>
        )}
      </div>

      {/* User avatar */}
      {!isAI && (
        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-gray-400 to-gray-600 flex items-center justify-center shadow-sm">
          <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
        </div>
      )}
    </div>
  );
}
