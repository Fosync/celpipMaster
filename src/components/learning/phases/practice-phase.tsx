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

interface PracticePhaseProps {
  items: LearningItem[];
  onComplete: (answers: QuizAnswer[]) => void;
  onRecordAnswer: (wordId: string, correct: boolean) => void;
  speak: (text: string) => void;
}

// Progressive difficulty tiers
const EASY_TYPES: QuestionType[] = ['turkish-to-english'];
const MEDIUM_TYPES: QuestionType[] = ['english-to-turkish', 'fill-in-blank'];
const HARD_TYPES: QuestionType[] = ['listen-and-choose', 'typing'];
const EXPERT_TYPES: QuestionType[] = ['emoji-match', 'sentence-build'];

/**
 * Build a progressive quiz queue:
 * - First 3: turkish-to-english (easiest)
 * - Next 3: english-to-turkish + fill-in-blank (medium)
 * - Next 2: listen-and-choose + typing (hard)
 * - Last 2: emoji-match + sentence-build (expert)
 * Total: 10-12 questions for 10 words
 */
function buildProgressiveQueue(items: LearningItem[]): QueueEntry[] {
  const shuffled = shuffleArray(items);
  const queue: QueueEntry[] = [];

  // Phase 1: Easy (first 3 words)
  for (let i = 0; i < Math.min(3, shuffled.length); i++) {
    const type = EASY_TYPES[i % EASY_TYPES.length];
    queue.push({ item: shuffled[i], questionType: type });
  }

  // Phase 2: Medium (next 3 words)
  for (let i = 3; i < Math.min(6, shuffled.length); i++) {
    const type = MEDIUM_TYPES[(i - 3) % MEDIUM_TYPES.length];
    queue.push({ item: shuffled[i], questionType: type });
  }

  // Phase 3: Hard (next 2 words)
  for (let i = 6; i < Math.min(8, shuffled.length); i++) {
    const type = HARD_TYPES[(i - 6) % HARD_TYPES.length];
    queue.push({ item: shuffled[i], questionType: type });
  }

  // Phase 4: Expert (remaining words)
  for (let i = 8; i < shuffled.length; i++) {
    const type = EXPERT_TYPES[(i - 8) % EXPERT_TYPES.length];
    queue.push({ item: shuffled[i], questionType: type });
  }

  // If set has fewer than 10 words, add extra questions from harder types
  if (queue.length < 10) {
    const extraCount = 10 - queue.length;
    const extraItems = shuffleArray(items);
    const allHarder = [...MEDIUM_TYPES, ...HARD_TYPES, ...EXPERT_TYPES];
    for (let i = 0; i < extraCount && i < extraItems.length; i++) {
      queue.push({
        item: extraItems[i],
        questionType: allHarder[i % allHarder.length],
      });
    }
  }

  return queue;
}

export function PracticePhase({ items, onComplete, onRecordAnswer, speak }: PracticePhaseProps) {
  const [queue, setQueue] = useState<QueueEntry[]>(() => buildProgressiveQueue(items));
  const [currentIdx, setCurrentIdx] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswer[]>([]);

  const current = queue[currentIdx];
  const totalQuestions = queue.length;

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

      if (!correct) {
        // Re-queue wrong answer with a harder question type
        const harderTypes = [...MEDIUM_TYPES, ...HARD_TYPES];
        const nextType = harderTypes[Math.floor(Math.random() * harderTypes.length)];
        const insertPos = Math.min(currentIdx + 3 + Math.floor(Math.random() * 3), queue.length);
        const newQueue = [...queue];
        newQueue.splice(insertPos, 0, { item: current.item, questionType: nextType });
        setQueue(newQueue);
      }

      if (currentIdx + 1 >= (correct ? queue.length : queue.length + 1)) {
        onComplete(newAnswers);
      } else {
        setCurrentIdx(currentIdx + 1);
      }
    },
    [current, currentIdx, queue, answers, onRecordAnswer, onComplete]
  );

  if (!current || currentIdx >= totalQuestions) {
    return null;
  }

  const questionProps = {
    item: current.item,
    allItems: items,
    onAnswer: handleAnswer,
    speak,
  };

  const correctCount = answers.filter((a) => a.correct).length;

  return (
    <div>
      {/* Practice stats */}
      <div className="mb-4 flex items-center justify-center gap-4 text-sm">
        <span className="rounded-full bg-green-50 px-3 py-1 font-medium text-green-600">
          {correctCount} dogru
        </span>
        <span className="rounded-full bg-gray-50 px-3 py-1 font-medium text-gray-500">
          {answers.length}/{totalQuestions}
        </span>
        <span className="rounded-full bg-blue-50 px-3 py-1 font-medium text-blue-600">
          {getDifficultyLabel(current.questionType)}
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

function getDifficultyLabel(type: QuestionType): string {
  switch (type) {
    case 'turkish-to-english':
      return 'Kolay';
    case 'english-to-turkish':
    case 'fill-in-blank':
      return 'Orta';
    case 'listen-and-choose':
    case 'typing':
      return 'Zor';
    case 'emoji-match':
    case 'sentence-build':
      return 'Uzman';
  }
}
