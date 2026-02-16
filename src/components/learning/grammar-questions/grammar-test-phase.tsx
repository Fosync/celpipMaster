'use client';

import { useState, useCallback } from 'react';
import type { GrammarItem } from '@/lib/data/grammar/types';
import type { QuizAnswer } from '@/types/learning';
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

interface GrammarTestPhaseProps {
  items: GrammarItem[];
  onPass: (score: number, answers: QuizAnswer[]) => void;
  onFail: (score: number, weakIds: string[], answers: QuizAnswer[]) => void;
  onRecordAnswer: (itemId: string, correct: boolean) => void;
}

const ALL_TYPES: GrammarQuestionType[] = [
  'example-to-rule',
  'turkish-match',
  'fill-correct-form',
  'rule-to-example',
  'error-find',
  'common-mistake',
];

function buildTestQueue(items: GrammarItem[]): QueueEntry[] {
  return shuffleArray(items).map((item, idx) => {
    // For items without commonMistake, avoid error-find/common-mistake
    const hasCommonMistake = !!item.commonMistake;
    let type = ALL_TYPES[idx % ALL_TYPES.length];
    if (!hasCommonMistake && (type === 'error-find' || type === 'common-mistake')) {
      type = 'fill-correct-form';
    }
    return { item, questionType: type };
  });
}

export function GrammarTestPhase({ items, onPass, onFail, onRecordAnswer }: GrammarTestPhaseProps) {
  const [queue] = useState<QueueEntry[]>(() => buildTestQueue(items));
  const [currentIdx, setCurrentIdx] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswer[]>([]);

  const current = queue[currentIdx];

  const handleAnswer = useCallback(
    (correct: boolean) => {
      if (!current) return;
      onRecordAnswer(current.item.id, correct);

      const answer: QuizAnswer = {
        wordId: current.item.id,
        word: current.item.rule,
        correct,
        correctAnswer: current.item.rule,
        turkishMeaning: current.item.turkishMeaning,
        questionType: 'fill-in-blank', // use generic type for compatibility
      };
      const newAnswers = [...answers, answer];
      setAnswers(newAnswers);

      if (currentIdx + 1 >= queue.length) {
        const correctCount = newAnswers.filter((a) => a.correct).length;
        const score = Math.round((correctCount / items.length) * 100);
        const weakIds = newAnswers.filter((a) => !a.correct).map((a) => a.wordId);

        if (score >= 80) {
          onPass(score, newAnswers);
        } else {
          onFail(score, weakIds, newAnswers);
        }
      } else {
        setCurrentIdx(currentIdx + 1);
      }
    },
    [current, currentIdx, queue, answers, items.length, onPass, onFail, onRecordAnswer]
  );

  if (!current) return null;

  const qProps = {
    item: current.item,
    allItems: items,
    onAnswer: handleAnswer,
  };

  return (
    <div>
      {/* Test header */}
      <div className="mb-4 flex items-center justify-center gap-2">
        <span className="rounded-full bg-red-50 px-3 py-1 text-sm font-semibold text-red-600">
          TEST
        </span>
        <span className="text-sm text-gray-500">
          Soru {answers.length + 1} / {items.length}
        </span>
      </div>

      {current.questionType === 'example-to-rule' && <QExampleToRule {...qProps} />}
      {current.questionType === 'turkish-match' && <QTurkishMatch {...qProps} />}
      {current.questionType === 'error-find' && <QErrorFind {...qProps} />}
      {current.questionType === 'fill-correct-form' && <QFillCorrectForm {...qProps} />}
      {current.questionType === 'rule-to-example' && <QRuleToExample {...qProps} />}
      {current.questionType === 'common-mistake' && <QCommonMistake {...qProps} />}
    </div>
  );
}
