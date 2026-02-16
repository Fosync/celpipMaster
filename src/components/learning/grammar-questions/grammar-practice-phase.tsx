'use client';

import { useState, useCallback } from 'react';
import type { GrammarItem } from '@/lib/data/grammar/types';
import { shuffleArray } from '@/lib/utils/question-helpers';
import { QExampleToRule } from './q-example-to-rule';
import { QTurkishMatch } from './q-turkish-match';
import { QErrorFind } from './q-error-find';
import { QFillCorrectForm } from './q-fill-correct-form';
import { QRuleToExample } from './q-rule-to-example';
import { QCommonMistake } from './q-common-mistake';

type GrammarQuestionType =
  | 'example-to-rule'
  | 'turkish-match'
  | 'error-find'
  | 'fill-correct-form'
  | 'rule-to-example'
  | 'common-mistake';

interface QueueEntry {
  item: GrammarItem;
  questionType: GrammarQuestionType;
}

interface GrammarPracticePhaseProps {
  items: GrammarItem[];
  allItems: GrammarItem[];
  onComplete: () => void;
  onRecordAnswer: (itemId: string, correct: boolean) => void;
}

// Progressive difficulty
const EASY_TYPES: GrammarQuestionType[] = ['example-to-rule', 'turkish-match'];
const MEDIUM_TYPES: GrammarQuestionType[] = ['rule-to-example', 'fill-correct-form'];
const HARD_TYPES: GrammarQuestionType[] = ['error-find', 'common-mistake'];

function buildProgressiveQueue(items: GrammarItem[]): QueueEntry[] {
  const shuffled = shuffleArray(items);
  const queue: QueueEntry[] = [];

  // Phase 1: Easy (first 3)
  for (let i = 0; i < Math.min(3, shuffled.length); i++) {
    queue.push({ item: shuffled[i], questionType: EASY_TYPES[i % EASY_TYPES.length] });
  }

  // Phase 2: Medium (next 3-4)
  for (let i = 3; i < Math.min(7, shuffled.length); i++) {
    queue.push({ item: shuffled[i], questionType: MEDIUM_TYPES[(i - 3) % MEDIUM_TYPES.length] });
  }

  // Phase 3: Hard (remaining)
  for (let i = 7; i < shuffled.length; i++) {
    // Only use error-find/common-mistake for items that have commonMistake
    const hasCommonMistake = shuffled[i].commonMistake;
    const type = hasCommonMistake
      ? HARD_TYPES[(i - 7) % HARD_TYPES.length]
      : MEDIUM_TYPES[(i - 7) % MEDIUM_TYPES.length];
    queue.push({ item: shuffled[i], questionType: type });
  }

  // Ensure minimum 10 questions
  if (queue.length < 10) {
    const extraCount = 10 - queue.length;
    const extraItems = shuffleArray(items);
    const allTypes = [...MEDIUM_TYPES, ...HARD_TYPES];
    for (let i = 0; i < extraCount && i < extraItems.length; i++) {
      const hasCommonMistake = extraItems[i].commonMistake;
      const type = hasCommonMistake
        ? allTypes[i % allTypes.length]
        : MEDIUM_TYPES[i % MEDIUM_TYPES.length];
      queue.push({ item: extraItems[i], questionType: type });
    }
  }

  return queue;
}

export function GrammarPracticePhase({
  items,
  allItems,
  onComplete,
  onRecordAnswer,
}: GrammarPracticePhaseProps) {
  const [queue, setQueue] = useState<QueueEntry[]>(() => buildProgressiveQueue(items));
  const [currentIdx, setCurrentIdx] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [totalAnswered, setTotalAnswered] = useState(0);

  const current = queue[currentIdx];

  const handleAnswer = useCallback(
    (correct: boolean) => {
      if (!current) return;
      onRecordAnswer(current.item.id, correct);
      setTotalAnswered((t) => t + 1);

      if (correct) {
        setCorrectCount((c) => c + 1);
      } else {
        // Re-queue with a different type
        const reTypes = [...EASY_TYPES, ...MEDIUM_TYPES];
        const nextType = reTypes[Math.floor(Math.random() * reTypes.length)];
        const insertPos = Math.min(currentIdx + 3 + Math.floor(Math.random() * 3), queue.length);
        const newQueue = [...queue];
        newQueue.splice(insertPos, 0, { item: current.item, questionType: nextType });
        setQueue(newQueue);
      }

      if (currentIdx + 1 >= (correct ? queue.length : queue.length + 1)) {
        onComplete();
      } else {
        setCurrentIdx(currentIdx + 1);
      }
    },
    [current, currentIdx, queue, onRecordAnswer, onComplete]
  );

  if (!current || currentIdx >= queue.length) return null;

  const qProps = {
    item: current.item,
    allItems,
    onAnswer: handleAnswer,
  };

  return (
    <div>
      {/* Stats */}
      <div className="mb-4 flex items-center justify-center gap-4 text-sm">
        <span className="rounded-full bg-green-50 px-3 py-1 font-medium text-green-600">
          {correctCount} dogru
        </span>
        <span className="rounded-full bg-gray-50 px-3 py-1 font-medium text-gray-500">
          {totalAnswered}/{queue.length}
        </span>
      </div>

      {/* Render question */}
      {current.questionType === 'example-to-rule' && <QExampleToRule {...qProps} />}
      {current.questionType === 'turkish-match' && <QTurkishMatch {...qProps} />}
      {current.questionType === 'error-find' && <QErrorFind {...qProps} />}
      {current.questionType === 'fill-correct-form' && <QFillCorrectForm {...qProps} />}
      {current.questionType === 'rule-to-example' && <QRuleToExample {...qProps} />}
      {current.questionType === 'common-mistake' && <QCommonMistake {...qProps} />}
    </div>
  );
}
