'use client';

import { useState, useCallback, useMemo } from 'react';
import type { LearningItem, QuizAnswer } from '@/types/learning';
import { useSpeech } from '@/hooks/use-speech';
import { useMastery } from '@/hooks/use-mastery';
import { ProgressHeader } from './common/progress-header';
import { LearnPhase } from './phases/learn-phase';
import { PracticePhase } from './phases/practice-phase';
import { TestPhase } from './phases/test-phase';
import { QuizResult } from './results/quiz-result';

interface QuizEngineProps {
  items: LearningItem[];
  distractorPool?: LearningItem[];
  setId: string;
  setTitle: string;
  clbLevel: number;
  backHref: string;
}

type Phase = 'learn' | 'practice' | 'test' | 'result';

const phaseLabels: Record<Phase, string> = {
  learn: 'Kelimeleri ogren',
  practice: 'Pratik — karisik soru tipleri',
  test: 'Test — bilgini kanitla',
  result: '',
};

export function QuizEngine({ items, distractorPool, setId, setTitle, clbLevel, backHref }: QuizEngineProps) {
  const [phase, setPhase] = useState<Phase>('learn');
  const [practiceItems, setPracticeItems] = useState<LearningItem[]>(items);
  const [testScore, setTestScore] = useState(0);
  const [testCorrectCount, setTestCorrectCount] = useState(0);
  const [testAnswers, setTestAnswers] = useState<QuizAnswer[]>([]);
  const { speak } = useSpeech();
  const mastery = useMastery();

  // Combine current items with distractor pool for diverse options
  const allItemsForDistractors = useMemo(() => {
    if (distractorPool && distractorPool.length > 0) {
      return [...items, ...distractorPool];
    }
    return items;
  }, [items, distractorPool]);

  const [learnIndex, setLearnIndex] = useState(0);
  const [practiceIndex, setPracticeIndex] = useState(0);
  const [testIndex, setTestIndex] = useState(0);

  const handleLearnComplete = useCallback(() => {
    setPracticeItems(items);
    setPhase('practice');
    setPracticeIndex(0);
  }, [items]);

  const handlePracticeComplete = useCallback((answers: QuizAnswer[]) => {
    setPhase('test');
    setTestIndex(0);
    void answers;
  }, []);

  const handleTestPass = useCallback(
    (score: number, answers: QuizAnswer[]) => {
      const correctCount = answers.filter((a) => a.correct).length;
      setTestScore(score);
      setTestCorrectCount(correctCount);
      setTestAnswers(answers);
      const correctIds = items.map((i) => i.id);
      mastery.recordTestResult(setId, score, correctIds);
      setPhase('result');
    },
    [items, setId, mastery]
  );

  const handleTestFail = useCallback(
    (score: number, weakWordIds: string[], answers: QuizAnswer[]) => {
      const correctCount = answers.filter((a) => a.correct).length;
      setTestScore(score);
      setTestCorrectCount(correctCount);
      setTestAnswers(answers);
      const weakItems = items.filter((i) => weakWordIds.includes(i.id));
      setPracticeItems(weakItems.length > 0 ? weakItems : items);
      mastery.recordTestResult(setId, score, weakWordIds);
      setPhase('result');
    },
    [items, setId, mastery]
  );

  const handleRestart = useCallback(() => {
    if (testScore < 80) {
      setPhase('practice');
      setPracticeIndex(0);
    } else {
      setPhase('learn');
      setLearnIndex(0);
      setPracticeItems(items);
    }
    setTestAnswers([]);
  }, [testScore, items]);

  const handlePracticeWeak = useCallback(() => {
    const weakIds = testAnswers.filter((a) => !a.correct).map((a) => a.wordId);
    const weakItems = items.filter((i) => weakIds.includes(i.id));
    setPracticeItems(weakItems.length > 0 ? weakItems : items);
    setPhase('practice');
    setPracticeIndex(0);
    setTestAnswers([]);
  }, [testAnswers, items]);

  const handleRecordAnswer = useCallback(
    (wordId: string, correct: boolean) => {
      mastery.recordAnswer(wordId, correct);
      if (phase === 'practice') setPracticeIndex((i) => i + 1);
      if (phase === 'test') setTestIndex((i) => i + 1);
    },
    [mastery, phase]
  );

  const handleMarkSeen = useCallback(
    (wordId: string) => {
      mastery.markSeen(wordId);
      setLearnIndex((i) => i);
    },
    [mastery]
  );

  const getProgressValues = () => {
    switch (phase) {
      case 'learn':
        return { index: learnIndex, total: items.length };
      case 'practice':
        return { index: practiceIndex, total: Math.max(practiceItems.length, 10) };
      case 'test':
        return { index: testIndex, total: items.length };
      default:
        return { index: 0, total: 1 };
    }
  };

  if (phase === 'result') {
    const stars = mastery.getStarRating(setId);
    return (
      <QuizResult
        setTitle={setTitle}
        correctCount={testCorrectCount}
        totalCount={items.length}
        score={testScore}
        stars={stars}
        answers={testAnswers}
        backHref={backHref}
        onRestart={handleRestart}
        onPracticeWeak={handlePracticeWeak}
      />
    );
  }

  const { index, total } = getProgressValues();

  return (
    <div className="mx-auto max-w-2xl">
      <ProgressHeader
        backHref={backHref}
        clbLevel={clbLevel}
        currentIndex={Math.min(index, total - 1)}
        totalCount={total}
        phaseLabel={phaseLabels[phase]}
      />

      {phase === 'learn' && (
        <LearnPhase
          items={items}
          onComplete={handleLearnComplete}
          onMarkSeen={handleMarkSeen}
          speak={speak}
        />
      )}

      {phase === 'practice' && (
        <PracticePhase
          items={practiceItems}
          allItemsForDistractors={allItemsForDistractors}
          onComplete={handlePracticeComplete}
          onRecordAnswer={handleRecordAnswer}
          speak={speak}
        />
      )}

      {phase === 'test' && (
        <TestPhase
          items={items}
          allItemsForDistractors={allItemsForDistractors}
          onPass={handleTestPass}
          onFail={handleTestFail}
          onRecordAnswer={handleRecordAnswer}
          speak={speak}
        />
      )}
    </div>
  );
}
