'use client';

import { useState, useRef, useEffect } from 'react';
import type { VocabWord } from '@/lib/data/vocabulary/types';

interface WordPopupProps {
  word: VocabWord;
  children: React.ReactNode;
}

export function WordPopup({ word, children }: WordPopupProps) {
  const [open, setOpen] = useState(false);
  const popupRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!open) return;
    const handleClick = (e: MouseEvent) => {
      if (
        popupRef.current &&
        !popupRef.current.contains(e.target as Node) &&
        triggerRef.current &&
        !triggerRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [open]);

  return (
    <span className="relative inline">
      <span
        ref={triggerRef}
        onClick={() => setOpen(!open)}
        className="cursor-pointer rounded bg-blue-50 px-0.5 text-blue-700 underline decoration-blue-300 decoration-dotted underline-offset-2 transition-colors hover:bg-blue-100"
      >
        {children}
      </span>
      {open && (
        <div
          ref={popupRef}
          className="absolute left-0 top-full z-50 mt-1 w-72 rounded-xl border border-gray-200 bg-white p-3 shadow-lg"
        >
          <div className="mb-1 flex items-center justify-between">
            <span className="text-sm font-bold text-gray-900">{word.word}</span>
            <span className="rounded-full bg-purple-50 px-2 py-0.5 text-xs font-medium text-purple-600">
              {word.partOfSpeech}
            </span>
          </div>
          <p className="mb-1 text-xs text-gray-600">{word.definition}</p>
          <p className="mb-1 text-xs italic text-gray-500">&ldquo;{word.example}&rdquo;</p>
          <div className="border-t border-gray-100 pt-1">
            <p className="text-xs text-blue-600">{word.turkishMeaning}</p>
          </div>
          <button
            onClick={() => setOpen(false)}
            className="absolute right-2 top-2 text-gray-400 hover:text-gray-600"
          >
            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      )}
    </span>
  );
}
