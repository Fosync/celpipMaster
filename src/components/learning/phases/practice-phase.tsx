'use client';

import { useState, useMemo, useCallback } from 'react';
import type { LearningItem, QuestionType, QueueEntry } from '@/types/learning';
import { shuffleArray } from '@/lib/utils/question-helpers';
import { QuestionEnglishToTurkish } from '../questions/question-english-to-turkish';
import { QuestionTurkishToEnglish } from '../questions/question-turkish-to-english';
import { QuestionDefinitionMatch } from '../questions/question-definition-match';
import { QuestionFillBlank } from '../questions/question-fill-blank';
import { QuestionListenSpell } from '../questions/question-listen-spell';

interface PracticePhaseProps {
  items: LearningItem[];
  onComplete: () => void;
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

function buildQueue(items: LearningItem[]): QueueEntry[] {
  const queue: QueueEntry[] = [];
  for (const item of items) {
    const types = shuffleArray(ALL_TYPES);
    queue.push({ item, questionType: types[0] });
    queue.push({ item, questionType: types[1] });
  }
  return shuffleArray(queue);
}

export function PracticePhase({ items, onComplete, onRecordAnswer, speak }: PracticePhaseProps) {
  const [queue, setQueue] = useState<QueueEntry[]>(() => buildQueue(items));
  const [currentIdx, setCurrentIdx] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [totalAnswered, setTotalAnswered] = useState(0);

  // Track which types have been used per word (for re-queuing variety)
  const [usedTypes, setUsedTypes] = useState<Record<string, QuestionType[]>>(() => {
    const map: Record<string, QuestionType[]> = {};
    for (const entry of queue) {
      if (!map[entry.item.id]) map[entry.item.id] = [];
      map[entry.item.id].push(entry.questionType);
    }
    return map;
  });

  const current = queue[currentIdx];
  const totalQuestions = queue.length;

  const handleAnswer = useCallback(
    (correct: boolean) => {
      if (!current) return;
      onRecordAnswer(current.item.id, correct);
      setTotalAnswered((t) => t + 1);

      if (correct) {
        setCorrectCount((c) => c + 1);
      } else {
        // Re-queue wrong answer with a different question type
        const used = usedTypes[current.item.id] ?? [];
        const remaining = ALL_TYPES.filter((t) => !used.includes(t));
        const nextType = remaining.length > 0 ? shuffleArray(remaining)[0] : shuffleArray(ALL_TYPES)[0];

        setUsedTypes((prev) => ({
          ...prev,
          [current.item.id]: [...(prev[current.item.id] ?? []), nextType],
        }));

        // Insert 3-5 positions later
        const insertPos = Math.min(currentIdx + 3 + Math.floor(Math.random() * 3), queue.length);
        const newQueue = [...queue];
        newQueue.splice(insertPos, 0, { item: current.item, questionType: nextType });
        setQueue(newQueue);
      }

      // Move to next
      if (currentIdx + 1 >= queue.length + (correct ? 0 : 1)) {
        onComplete();
      } else {
        setCurrentIdx(currentIdx + 1);
      }
    },
    [current, currentIdx, queue, usedTypes, onRecordAnswer, onComplete]
  );

  // Check completion after state update
  const remaining = totalQuestions - currentIdx;
  if (!current || remaining <= 0) {
    // Will complete on next render
    return null;
  }

  const questionProps = {
    item: current.item,
    allItems: items,
    onAnswer: handleAnswer,
    speak,
  };

  return (
    <div>
      {/* Practice stats */}
      <div className="mb-4 flex items-center justify-center gap-4 text-sm">
        <span className="rounded-full bg-green-50 px-3 py-1 font-medium text-green-600">
          {correctCount} correct
        </span>
        <span className="rounded-full bg-gray-50 px-3 py-1 font-medium text-gray-500">
          {totalAnswered} answered
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
