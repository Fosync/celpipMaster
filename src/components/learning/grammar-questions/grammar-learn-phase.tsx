'use client';

import { useState, useEffect } from 'react';
import type { GrammarItem } from '@/lib/data/grammar/types';
import { SpeakButton } from '../common/speak-button';

interface GrammarLearnPhaseProps {
  items: GrammarItem[];
  onComplete: () => void;
  onMarkSeen: (itemId: string) => void;
  speak: (text: string) => void;
}

export function GrammarLearnPhase({ items, onComplete, onMarkSeen, speak }: GrammarLearnPhaseProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showDetails, setShowDetails] = useState(false);
  const current = items[currentIndex];

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (current) {
      onMarkSeen(current.id);
    }
  }, [currentIndex]);

  const handleNext = () => {
    setShowDetails(false);
    if (currentIndex < items.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      onComplete();
    }
  };

  if (!current) return null;

  return (
    <div>
      <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-lg">
        {/* Top gradient */}
        <div className="h-2 bg-gradient-to-r from-amber-500 to-orange-500" />

        <div className="p-6">
          {/* Rule formula */}
          <div className="rounded-xl bg-amber-50 p-4 text-center">
            <p className="text-xs font-medium text-amber-600">KURAL</p>
            <h2 className="mt-1 text-xl font-bold text-gray-900">{current.rule}</h2>
          </div>

          {/* Turkish meaning - always visible */}
          <div className="mt-4 rounded-xl bg-purple-50 p-4">
            <p className="text-xs font-medium text-purple-600">TURKCE ACIKLAMA</p>
            <p className="mt-1 text-sm text-gray-800">{current.turkishMeaning}</p>
          </div>

          {/* Tap to see more */}
          {!showDetails ? (
            <button
              onClick={() => setShowDetails(true)}
              className="mt-4 w-full rounded-xl border-2 border-dashed border-gray-200 px-4 py-3 text-sm text-gray-400 transition-colors hover:border-blue-300 hover:text-blue-500"
            >
              Detaylari gormek icin tikla
            </button>
          ) : (
            <div className="mt-4 space-y-3">
              {/* English explanation */}
              <div className="rounded-xl bg-blue-50 p-4">
                <p className="text-xs font-medium text-blue-600">ACIKLAMA (EN)</p>
                <p className="mt-1 text-sm text-gray-800">{current.explanation}</p>
              </div>

              {/* Example sentence */}
              <div className="rounded-xl bg-green-50 p-4">
                <div className="flex items-center justify-between">
                  <p className="text-xs font-medium text-green-600">ORNEK CUMLE</p>
                  <SpeakButton text={current.example} label="Dinle" speak={speak} />
                </div>
                <p className="mt-1 text-sm italic text-gray-700">&ldquo;{current.example}&rdquo;</p>
              </div>

              {/* Turkish detailed explanation */}
              {current.turkishExplanation && (
                <div className="rounded-xl bg-indigo-50 p-4">
                  <p className="text-xs font-medium text-indigo-600">DETAYLI TURKCE ACIKLAMA</p>
                  <p className="mt-1 text-sm text-gray-800">{current.turkishExplanation}</p>
                </div>
              )}

              {/* Common mistake */}
              {current.commonMistake && (
                <div className="rounded-xl bg-red-50 p-4">
                  <p className="text-xs font-medium text-red-600">SIK YAPILAN HATA</p>
                  <p className="mt-1 text-sm text-gray-800">{current.commonMistake}</p>
                </div>
              )}

              {/* CELPIP context */}
              {current.celpipContext && (
                <div className="rounded-xl bg-cyan-50 p-4">
                  <p className="text-xs font-medium text-cyan-600">CELPIP SINAVINDA</p>
                  <p className="mt-1 text-sm text-gray-800">{current.celpipContext}</p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Next button */}
      {showDetails && (
        <button
          onClick={handleNext}
          className="mt-4 w-full rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 px-4 py-3.5 font-semibold text-white shadow-lg shadow-amber-500/25 transition-all hover:shadow-xl"
        >
          {currentIndex < items.length - 1 ? 'Ogrendim — Sonraki' : 'Pratige Basla'}
        </button>
      )}
    </div>
  );
}
