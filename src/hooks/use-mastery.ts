'use client';

import { useState, useCallback } from 'react';
import type { MasteryStore, WordMastery, SetResult, MasteryStatus } from '@/types/learning';

const STORAGE_KEY = 'celpipmaster_mastery';

function getEmptyStore(): MasteryStore {
  return { version: 1, words: {}, sets: {} };
}

function loadStore(): MasteryStore {
  if (typeof window === 'undefined') return getEmptyStore();
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return getEmptyStore();
    const parsed = JSON.parse(raw) as MasteryStore;
    if (parsed.version !== 1) return getEmptyStore();
    return parsed;
  } catch {
    return getEmptyStore();
  }
}

function saveStore(store: MasteryStore) {
  if (typeof window === 'undefined') return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(store));
}

function today(): string {
  return new Date().toISOString().split('T')[0];
}

export function useMastery() {
  const [store, setStore] = useState<MasteryStore>(() => loadStore());


  const persist = useCallback((next: MasteryStore) => {
    setStore(next);
    saveStore(next);
  }, []);

  const getWordMastery = useCallback(
    (wordId: string): WordMastery | null => store.words[wordId] ?? null,
    [store]
  );

  const getSetResult = useCallback(
    (setId: string): SetResult | null => store.sets[setId] ?? null,
    [store]
  );

  const getSetProgress = useCallback(
    (setId: string, wordIds: string[]) => {
      const counts: Record<MasteryStatus, number> = { new: 0, learning: 0, learned: 0, mastered: 0 };
      for (const id of wordIds) {
        const w = store.words[id];
        counts[w ? w.status : 'new']++;
      }
      return {
        total: wordIds.length,
        learned: counts.learned + counts.mastered,
        mastered: counts.mastered,
        statusCounts: counts,
      };
    },
    [store]
  );

  const markSeen = useCallback(
    (wordId: string) => {
      const next = { ...store, words: { ...store.words } };
      if (!next.words[wordId]) {
        next.words[wordId] = {
          status: 'learning',
          consecutiveCorrect: 0,
          lastCorrectDate: null,
          totalAttempts: 0,
          totalCorrect: 0,
        };
      }
      persist(next);
    },
    [store, persist]
  );

  const recordAnswer = useCallback(
    (wordId: string, correct: boolean) => {
      const next = { ...store, words: { ...store.words } };
      const existing = next.words[wordId];
      const w: WordMastery = existing
        ? { ...existing }
        : { status: 'learning', consecutiveCorrect: 0, lastCorrectDate: null, totalAttempts: 0, totalCorrect: 0 };

      w.totalAttempts++;
      if (correct) {
        w.totalCorrect++;
        w.consecutiveCorrect++;
        w.lastCorrectDate = today();
        if (w.consecutiveCorrect >= 2 && (w.status === 'new' || w.status === 'learning')) {
          w.status = 'learned';
        }
      } else {
        w.consecutiveCorrect = 0;
        if (w.status === 'mastered') w.status = 'learned';
        else if (w.status !== 'new') w.status = 'learning';
      }

      next.words[wordId] = w;
      persist(next);
    },
    [store, persist]
  );

  const recordTestResult = useCallback(
    (setId: string, score: number, wordIds: string[]) => {
      const next = { ...store, words: { ...store.words }, sets: { ...store.sets } };

      // Update set result
      const existing = next.sets[setId];
      const stars: 0 | 1 | 2 | 3 = score >= 100 ? 3 : score >= 90 ? 2 : score >= 80 ? 1 : 0;
      const sr: SetResult = existing
        ? { ...existing, attemptCount: existing.attemptCount + 1 }
        : { stars: 0, bestTestScore: 0, completedAt: null, attemptCount: 1 };

      if (score > sr.bestTestScore) sr.bestTestScore = score;
      if (stars > sr.stars) sr.stars = stars;
      if (score >= 80 && !sr.completedAt) sr.completedAt = today();
      next.sets[setId] = sr;

      // Check mastery upgrades for words answered correctly in test
      for (const id of wordIds) {
        const w = next.words[id];
        if (w && w.status === 'learned' && w.lastCorrectDate) {
          const daysDiff = Math.floor(
            (Date.now() - new Date(w.lastCorrectDate).getTime()) / (1000 * 60 * 60 * 24)
          );
          if (daysDiff >= 3) {
            next.words[id] = { ...w, status: 'mastered' };
          }
        }
      }

      persist(next);
    },
    [store, persist]
  );

  const getStarRating = useCallback(
    (setId: string): 0 | 1 | 2 | 3 => store.sets[setId]?.stars ?? 0,
    [store]
  );

  return {
    getWordMastery,
    getSetResult,
    getSetProgress,
    markSeen,
    recordAnswer,
    recordTestResult,
    getStarRating,
  };
}
