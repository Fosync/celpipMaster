'use client';

import { useState, useMemo, useCallback } from 'react';
import type { LearningItem, QuestionType, QueueEntry } from '@/types/learning';
import { shuffleArray } from '@/lib/utils/question-helpers';
import { QuestionEnglishToTurkish } from '../questions/question-english-to-turkish';
import { QuestionTurkishToEnglish } from '../questions/question-turkish-to-english';
import { QuestionDefinitionMatch } from '../questions/question-definition-match';
import { QuestionFillBlank } from '../questions/question-fill-blank';
import { QuestionListenSpell } from '../questions/question-listen-spell';

interface TestPhaseProps {
  items: LearningItem[];
  onPass: (score: number) => void;
  onFail: (score: number, weakWordIds: string[]) => void;
  onRecordAnswer: (wordId: string, correct: boolean) => void;
  speak: (text: string) => void;
}

const ALL_TYPES: QuestionType[] = [
  'english-to-turkish',
  'turkish-to-english',
  'definition-match',
  'fill-blank',
  'listen-spell',
];

function buildTestQueue(items: LearningItem[]): QueueEntry[] {
  return shuffleArray(items).map((item) => ({
    item,
    questionType: shuffleArray(ALL_TYPES)[0],
  }));
}

export function TestPhase({ items, onPass, onFail, onRecordAnswer, speak }: TestPhaseProps) {
  const [queue] = useState<QueueEntry[]>(() => buildTestQueue(items));
  const [currentIdx, setCurrentIdx] = useState(0);
  const [results, setResults] = useState<Record<string, boolean>>({});

  const current = queue[currentIdx];

  const handleAnswer = useCallback(
    (correct: boolean) => {
      if (!current) return;
      onRecordAnswer(current.item.id, correct);

      const newResults = { ...results, [current.item.id]: correct };
      setResults(newResults);

      if (currentIdx + 1 >= queue.length) {
        // Test complete
        const correctCount = Object.values(newResults).filter(Boolean).length;
        const score = Math.round((correctCount / items.length) * 100);
        const weakIds = Object.entries(newResults)
          .filter(([, v]) => !v)
          .map(([k]) => k);

        if (score >= 80) {
          onPass(score);
        } else {
          onFail(score, weakIds);
        }
      } else {
        setCurrentIdx(currentIdx + 1);
      }
    },
    [current, currentIdx, queue, results, items.length, onPass, onFail, onRecordAnswer]
  );

  if (!current) return null;

  const questionProps = {
    item: current.item,
    allItems: items,
    onAnswer: handleAnswer,
    speak,
  };

  const answeredCount = Object.keys(results).length;

  return (
    <div>
      {/* Test header */}
      <div className="mb-4 flex items-center justify-center gap-2">
        <span className="rounded-full bg-red-50 px-3 py-1 text-sm font-semibold text-red-600">
          TEST
        </span>
        <span className="text-sm text-gray-500">
          Question {answeredCount + 1} of {items.length}
        </span>
      </div>

      {/* Render question by type */}
      {current.questionType === 'english-to-turkish' && <QuestionEnglishToTurkish {...questionProps} />}
      {current.questionType === 'turkish-to-english' && <QuestionTurkishToEnglish {...questionProps} />}
      {current.questionType === 'definition-match' && <QuestionDefinitionMatch {...questionProps} />}
      {current.questionType === 'fill-blank' && <QuestionFillBlank {...questionProps} />}
      {current.questionType === 'listen-spell' && <QuestionListenSpell {...questionProps} />}
    </div>
  );
}
