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
}

interface ConversationViewProps {
  messages: Message[];
  onSpeakMessage: (text: string) => void;
}

export default function ConversationView({
  messages,
  onSpeakMessage,
}: ConversationViewProps) {
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages.length]);

  return (
    <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4">
      {messages.map((message, index) => {
        const isLatest = index === messages.length - 1;

        return (
          <div key={message.id} className="space-y-2">
            <ChatBubble
              role={message.role}
              text={message.text}
              onSpeak={
                message.role === 'ai'
                  ? () => onSpeakMessage(message.text)
                  : undefined
              }
              isLatest={isLatest}
            />

            {message.role === 'user' && message.correction && (
              <div className="ml-0 mr-10">
                <CorrectionCard
                  original={message.correction.original}
                  corrected={message.correction.corrected}
                  tip={message.correction.tip}
                />
              </div>
            )}

            {message.newVocabulary && message.newVocabulary.length > 0 && (
              <div
                className={`flex flex-wrap gap-1.5 ${
                  message.role === 'ai' ? 'ml-10' : 'mr-10 justify-end'
                }`}
              >
                {message.newVocabulary.map((word) => (
                  <span
                    key={word}
                    className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-700"
                  >
                    {word}
                  </span>
                ))}
              </div>
            )}
          </div>
        );
      })}

      {/* Spacer for mic button area */}
      <div className="h-24" />
      <div ref={bottomRef} />
    </div>
  );
}
