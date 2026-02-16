'use client';

import { useState, useCallback } from 'react';
import type { LearningItem, QuestionType, QueueEntry, QuizAnswer } from '@/types/learning';
import { shuffleArray } from '@/lib/utils/question-helpers';
import { QuestionTurkishToEnglish } from '../questions/question-turkish-to-english';
import { QuestionEnglishToTurkish } from '../questions/question-english-to-turkish';
import { QuestionFillBlank } from '../questions/question-fill-blank';
import { QuestionListenChoose } from '../questions/question-listen-choose';
import { QuestionTyping } from '../questions/question-typing';
import { QuestionSentenceBuild } from '../questions/question-sentence-build';

interface PracticePhaseProps {
  items: LearningItem[];
  allItemsForDistractors?: LearningItem[];
  onComplete: (answers: QuizAnswer[]) => void;
  onRecordAnswer: (wordId: string, correct: boolean) => void;
  speak: (text: string) => void;
}

// Progressive difficulty tiers
const EASY_TYPES: QuestionType[] = ['turkish-to-english'];
const MEDIUM_TYPES: QuestionType[] = ['english-to-turkish', 'fill-in-blank'];
const HARD_TYPES: QuestionType[] = ['listen-and-choose', 'typing'];
const EXPERT_TYPES: QuestionType[] = ['sentence-build'];

/**
 * Build a progressive quiz queue:
 * - First 3: turkish-to-english (easiest)
 * - Next 3: english-to-turkish + fill-in-blank (medium)
 * - Next 2: listen-and-choose + typing (hard)
 * - Last 2+: sentence-build (expert)
 */
function buildProgressiveQueue(items: LearningItem[]): QueueEntry[] {
  const shuffled = shuffleArray(items);
  const queue: QueueEntry[] = [];

  for (let i = 0; i < shuffled.length; i++) {
    let type: QuestionType;
    if (i < 3) {
      type = EASY_TYPES[i % EASY_TYPES.length];
    } else if (i < 6) {
      type = MEDIUM_TYPES[(i - 3) % MEDIUM_TYPES.length];
    } else if (i < 8) {
      type = HARD_TYPES[(i - 6) % HARD_TYPES.length];
    } else {
      type = EXPERT_TYPES[(i - 8) % EXPERT_TYPES.length];
    }
    queue.push({ item: shuffled[i], questionType: type });
  }

  // Ensure minimum 10 questions
  if (queue.length < 10) {
    const extraCount = 10 - queue.length;
    const extraItems = shuffleArray(items);
    const allHarder = [...MEDIUM_TYPES, ...HARD_TYPES];
    for (let i = 0; i < extraCount && i < extraItems.length; i++) {
      queue.push({
        item: extraItems[i],
        questionType: allHarder[i % allHarder.length],
      });
    }
  }

  return queue;
}

export function PracticePhase({
  items,
  allItemsForDistractors,
  onComplete,
  onRecordAnswer,
  speak,
}: PracticePhaseProps) {
  const [queue, setQueue] = useState<QueueEntry[]>(() => buildProgressiveQueue(items));
  const [currentIdx, setCurrentIdx] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswer[]>([]);
  // Track how many times each word was answered wrong (for aggressive re-queue)
  const [wrongCounts, setWrongCounts] = useState<Record<string, number>>({});

  const current = queue[currentIdx];
  const totalQuestions = queue.length;

  // Use the global pool for distractors if available, otherwise fall back to set items
  const distractorItems = allItemsForDistractors && allItemsForDistractors.length > items.length
    ? allItemsForDistractors
    : items;

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
        const wordId = current.item.id;
        const currentWrongCount = (wrongCounts[wordId] || 0) + 1;
        setWrongCounts((prev) => ({ ...prev, [wordId]: currentWrongCount }));

        // RE-QUEUE: Add 2 more questions for this word (different types each time)
        const reTypes = currentWrongCount <= 1
          ? [...EASY_TYPES, ...MEDIUM_TYPES]  // First mistake: easier questions
          : [...MEDIUM_TYPES, ...HARD_TYPES]; // Repeated mistake: medium-hard

        const newQueue = [...queue];

        // Add first re-queue 2-4 positions later
        const type1 = reTypes[Math.floor(Math.random() * reTypes.length)];
        const pos1 = Math.min(currentIdx + 2 + Math.floor(Math.random() * 3), newQueue.length);
        newQueue.splice(pos1, 0, { item: current.item, questionType: type1 });

        // Add second re-queue 5-7 positions later (different type)
        const remainingTypes = reTypes.filter((t) => t !== type1);
        const type2 = remainingTypes.length > 0
          ? remainingTypes[Math.floor(Math.random() * remainingTypes.length)]
          : reTypes[Math.floor(Math.random() * reTypes.length)];
        const pos2 = Math.min(currentIdx + 5 + Math.floor(Math.random() * 3), newQueue.length);
        newQueue.splice(pos2, 0, { item: current.item, questionType: type2 });

        setQueue(newQueue);
      }

      // +2 because we added 2 items to queue on wrong answer
      const nextQueueLen = correct ? queue.length : queue.length + 2;
      if (currentIdx + 1 >= nextQueueLen) {
        onComplete(newAnswers);
      } else {
        setCurrentIdx(currentIdx + 1);
      }
    },
    [current, currentIdx, queue, answers, wrongCounts, onRecordAnswer, onComplete]
  );

  if (!current || currentIdx >= totalQuestions) {
    return null;
  }

  const questionProps = {
    item: current.item,
    allItems: distractorItems,
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
    case 'sentence-build':
      return 'Uzman';
  }
}
