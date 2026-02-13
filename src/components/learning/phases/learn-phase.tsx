'use client';

import { useState, useEffect } from 'react';
import type { LearningItem } from '@/types/learning';
import { SpeakButton } from '../common/speak-button';

interface LearnPhaseProps {
  items: LearningItem[];
  onComplete: () => void;
  onMarkSeen: (wordId: string) => void;
  speak: (text: string) => void;
}

export function LearnPhase({ items, onComplete, onMarkSeen, speak }: LearnPhaseProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showBack, setShowBack] = useState(false);
  const currentItem = items[currentIndex];

  // Auto-speak word on card change only (not on speak ref change)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (currentItem) {
      speak(currentItem.term);
    }
  }, [currentIndex]);

  // Mark word as seen on card change only
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (currentItem) {
      onMarkSeen(currentItem.id);
    }
  }, [currentIndex]);

  const handleNext = () => {
    setShowBack(false);
    if (currentIndex < items.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      onComplete();
    }
  };

  if (!currentItem) return null;

  return (
    <div>
      <div onClick={() => setShowBack(true)} className="group cursor-pointer">
        <div className="relative overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-lg transition-all hover:shadow-xl">
          <div className="h-2 bg-gradient-to-r from-blue-500 to-purple-500" />
          <div className="p-8 text-center">
            {/* Word + speak button */}
            <div className="flex items-center justify-center gap-3">
              <h2 className="text-4xl font-bold text-gray-900">{currentItem.term}</h2>
              <SpeakButton text={currentItem.term} speak={speak} />
            </div>
            {currentItem.partOfSpeech && (
              <span className="mt-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-500">
                {currentItem.partOfSpeech}
              </span>
            )}

            {/* Back side */}
            {showBack ? (
              <div className="mt-6 space-y-4 text-left">
                <div className="rounded-xl bg-blue-50 p-4">
                  <p className="text-sm font-medium text-blue-600">Definition</p>
                  <p className="mt-1 text-gray-800">{currentItem.definition}</p>
                </div>
                <div className="rounded-xl bg-green-50 p-4">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-green-600">Example</p>
                    <SpeakButton text={currentItem.example} label="Listen" speak={speak} />
                  </div>
                  <p className="mt-1 italic text-gray-700">&ldquo;{currentItem.example}&rdquo;</p>
                </div>
                <div className="rounded-xl bg-purple-50 p-4">
                  <p className="text-sm font-medium text-purple-600">Turkce</p>
                  <p className="mt-1 text-gray-800">{currentItem.turkishMeaning}</p>
                </div>
              </div>
            ) : (
              <p className="mt-8 text-sm text-gray-400">Tap to reveal definition</p>
            )}
          </div>
        </div>

        {/* Next button */}
        {showBack && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            className="mt-4 w-full rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-3.5 font-semibold text-white shadow-lg shadow-blue-500/25 transition-all hover:shadow-xl"
          >
            {currentIndex < items.length - 1 ? 'Ogrendim — Next' : 'Start Practice'}
          </button>
        )}
      </div>
    </div>
  );
}
