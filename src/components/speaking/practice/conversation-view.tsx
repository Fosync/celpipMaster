'use client';

import { useEffect, useRef } from 'react';
import ChatBubble from '@/components/speaking/practice/chat-bubble';
import CorrectionCard from '@/components/speaking/practice/correction-card';

interface Message {
  id: string;
  role: 'ai' | 'user';
  text: string;
  correction?: { original: string; corrected: string; tip: string } | null;
  newVocabulary?: string[];
  mood?: string;
}

interface ConversationViewProps {
  messages: Message[];
  isLoading?: boolean;
  onSpeakMessage: (text: string) => void;
}

function TypingIndicator() {
  return (
    <div className="flex items-end gap-2 justify-start">
      {/* Mia Avatar */}
      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center shadow-sm">
        <span className="text-white text-[10px] font-bold">M</span>
      </div>
      <div className="bg-blue-50 rounded-2xl rounded-bl-md px-4 py-3">
        <div className="flex gap-1.5">
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="w-2 h-2 rounded-full bg-blue-400"
              style={{
                animation: `typing-bounce 1.2s ease-in-out ${i * 0.2}s infinite`,
              }}
            />
          ))}
        </div>
      </div>
      <style jsx>{`
        @keyframes typing-bounce {
          0%, 60%, 100% { transform: translateY(0); opacity: 0.4; }
          30% { transform: translateY(-6px); opacity: 1; }
        }
      `}</style>
    </div>
  );
}

export default function ConversationView({
  messages,
  isLoading = false,
  onSpeakMessage,
}: ConversationViewProps) {
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages.length, isLoading]);

  return (
    <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
      {messages.map((message) => {
        return (
          <div key={message.id} className="space-y-1.5">
            <ChatBubble
              role={message.role}
              text={message.text}
              mood={message.mood}
              onSpeak={
                message.role === 'ai'
                  ? () => onSpeakMessage(message.text)
                  : undefined
              }
            />

            {/* Correction box under user messages */}
            {message.role === 'user' && message.correction && (
              <div className="ml-0 mr-12">
                <CorrectionCard
                  original={message.correction.original}
                  corrected={message.correction.corrected}
                  tip={message.correction.tip}
                />
              </div>
            )}

            {/* Vocabulary tags under AI messages */}
            {message.newVocabulary && message.newVocabulary.length > 0 && (
              <div className="ml-10 flex flex-wrap gap-1.5">
                {message.newVocabulary.map((word) => (
                  <span
                    key={word}
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-200"
                  >
                    <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
                      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {word}
                  </span>
                ))}
              </div>
            )}
          </div>
        );
      })}

      {/* Typing Indicator */}
      {isLoading && <TypingIndicator />}

      {/* Spacer for mic button area */}
      <div className="h-24" />
      <div ref={bottomRef} />
    </div>
  );
}
