'use client';

import { useEffect, useRef } from 'react';

interface LiveTranscriptProps {
  text: string;
  interimText: string;
}

export default function LiveTranscript({ text, interimText }: LiveTranscriptProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [text, interimText]);

  const isEmpty = !text && !interimText;

  return (
    <div
      ref={containerRef}
      className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 min-h-[100px] max-h-[200px] overflow-y-auto"
    >
      {isEmpty ? (
        <p className="text-gray-400 text-sm italic">Listening...</p>
      ) : (
        <p className="text-sm leading-relaxed">
          {text && <span className="text-gray-900">{text}</span>}
          {interimText && (
            <span className="text-gray-400 italic">
              {text ? ' ' : ''}
              {interimText}
            </span>
          )}
        </p>
      )}
    </div>
  );
}
