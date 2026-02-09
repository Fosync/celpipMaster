'use client';

import { useEffect, useRef } from 'react';

interface ChatBubbleProps {
  role: 'ai' | 'user';
  text: string;
  onSpeak?: () => void;
  isLatest?: boolean;
}

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
  onSpeak,
  isLatest = false,
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

  return (
    <div
      ref={bubbleRef}
      className={`flex items-end gap-2 ${isAI ? 'justify-start' : 'justify-end'}`}
    >
      {isAI && (
        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
          <span className="text-white text-xs font-bold">AI</span>
        </div>
      )}

      <div className="flex flex-col gap-1 max-w-[75%]">
        <div
          className={`
            px-4 py-2.5 text-sm text-gray-800
            ${
              isAI
                ? 'bg-blue-100 rounded-2xl rounded-bl-md'
                : 'bg-gray-100 rounded-2xl rounded-br-md'
            }
          `}
        >
          {text}
        </div>

        {isAI && onSpeak && (
          <button
            onClick={onSpeak}
            className="self-start ml-1 p-1 rounded-full text-gray-400 hover:text-blue-500 hover:bg-blue-50 transition-colors"
            aria-label="Listen to this message"
          >
            <SpeakerIcon className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
}
