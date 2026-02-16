'use client';

import { useState, useCallback } from 'react';
import type { LearningItem, QuestionType, QueueEntry, QuizAnswer } from '@/types/learning';
import { shuffleArray } from '@/lib/utils/question-helpers';
import { QuestionTurkishToEnglish } from '../questions/question-turkish-to-english';
import { QuestionEnglishToTurkish } from '../questions/question-english-to-turkish';
import { QuestionEmojiMatch } from '../questions/question-emoji-match';
import { QuestionFillBlank } from '../questions/question-fill-blank';
import { QuestionListenChoose } from '../questions/question-listen-choose';
import { QuestionTyping } from '../questions/question-typing';
import { QuestionSentenceBuild } from '../questions/question-sentence-build';

interface TestPhaseProps {
  items: LearningItem[];
  onPass: (score: number, answers: QuizAnswer[]) => void;
  onFail: (score: number, weakWordIds: string[], answers: QuizAnswer[]) => void;
  onRecordAnswer: (wordId: string, correct: boolean) => void;
  speak: (text: string) => void;
}

const ALL_TYPES: QuestionType[] = [
  'turkish-to-english',
  'english-to-turkish',
  'fill-in-blank',
  'listen-and-choose',
  'typing',
  'emoji-match',
  'sentence-build',
];

function buildTestQueue(items: LearningItem[]): QueueEntry[] {
  const shuffled = shuffleArray(items);
  return shuffled.map((item, idx) => ({
    item,
    questionType: ALL_TYPES[idx % ALL_TYPES.length],
  }));
}

export function TestPhase({ items, onPass, onFail, onRecordAnswer, speak }: TestPhaseProps) {
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
        word: current.item.term,
        correct,
        correctAnswer: current.item.term,
        turkishMeaning: current.item.turkishMeaning,
        questionType: current.questionType,
      };
      const newAnswers = [...answers, answer];
      setAnswers(newAnswers);

      if (currentIdx + 1 >= queue.length) {
        // Test complete
        const correctCount = newAnswers.filter((a) => a.correct).length;
        const score = Math.round((correctCount / items.length) * 100);
        const weakIds = newAnswers
          .filter((a) => !a.correct)
          .map((a) => a.wordId);

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

  const questionProps = {
    item: current.item,
    allItems: items,
    onAnswer: handleAnswer,
    speak,
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

      {/* Render question by type */}
      {current.questionType === 'turkish-to-english' && <QuestionTurkishToEnglish {...questionProps} />}
      {current.questionType === 'english-to-turkish' && <QuestionEnglishToTurkish {...questionProps} />}
      {current.questionType === 'emoji-match' && <QuestionEmojiMatch {...questionProps} />}
      {current.questionType === 'fill-in-blank' && <QuestionFillBlank {...questionProps} />}
      {current.questionType === 'listen-and-choose' && <QuestionListenChoose {...questionProps} />}
      {current.questionType === 'typing' && <QuestionTyping {...questionProps} />}
      {current.questionType === 'sentence-build' && <QuestionSentenceBuild {...questionProps} />}
    </div>
  );
}
