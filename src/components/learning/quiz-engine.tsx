'use client';

import { useState, useCallback } from 'react';
import type { LearningItem } from '@/types/learning';
import { useSpeech } from '@/hooks/use-speech';
import { useMastery } from '@/hooks/use-mastery';
import { ProgressHeader } from './common/progress-header';
import { LearnPhase } from './phases/learn-phase';
import { PracticePhase } from './phases/practice-phase';
import { TestPhase } from './phases/test-phase';
import { QuizResult } from './results/quiz-result';

interface QuizEngineProps {
  items: LearningItem[];
  setId: string;
  setTitle: string;
  clbLevel: number;
  backHref: string;
}

type Phase = 'learn' | 'practice' | 'test' | 'result';

const phaseLabels: Record<Phase, string> = {
  learn: 'Learn the words',
  practice: 'Practice — mixed question types',
  test: 'Test — prove your knowledge',
  result: '',
};

export function QuizEngine({ items, setId, setTitle, clbLevel, backHref }: QuizEngineProps) {
  const [phase, setPhase] = useState<Phase>('learn');
  const [practiceItems, setPracticeItems] = useState<LearningItem[]>(items);
  const [testScore, setTestScore] = useState(0);
  const [testCorrectCount, setTestCorrectCount] = useState(0);
  const { speak } = useSpeech();
  const mastery = useMastery();

  // Phase index tracking for progress header
  const [learnIndex, setLearnIndex] = useState(0);
  const [practiceIndex, setPracticeIndex] = useState(0);
  const [testIndex, setTestIndex] = useState(0);

  const handleLearnComplete = useCallback(() => {
    setPracticeItems(items);
    setPhase('practice');
    setPracticeIndex(0);
  }, [items]);

  const handlePracticeComplete = useCallback(() => {
    setPhase('test');
    setTestIndex(0);
  }, []);

  const handleTestPass = useCallback(
    (score: number) => {
      const correctCount = Math.round((score / 100) * items.length);
      setTestScore(score);
      setTestCorrectCount(correctCount);
      const correctIds = items.map((i) => i.id); // simplified: all in test
      mastery.recordTestResult(setId, score, correctIds);
      setPhase('result');
    },
    [items, setId, mastery]
  );

  const handleTestFail = useCallback(
    (score: number, weakWordIds: string[]) => {
      setTestScore(score);
      setTestCorrectCount(Math.round((score / 100) * items.length));
      // Go back to practice with weak words
      const weakItems = items.filter((i) => weakWordIds.includes(i.id));
      setPracticeItems(weakItems.length > 0 ? weakItems : items);
      setPhase('result');
    },
    [items]
  );

  const handleRestart = useCallback(() => {
    if (testScore < 80) {
      // Failed: go to practice with weak words
      setPhase('practice');
      setPracticeIndex(0);
    } else {
      // Passed: full restart
      setPhase('learn');
      setLearnIndex(0);
      setPracticeItems(items);
    }
  }, [testScore, items]);

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

  // Calculate progress header values
  const getProgressValues = () => {
    switch (phase) {
      case 'learn':
        return { index: learnIndex, total: items.length };
      case 'practice':
        return { index: practiceIndex, total: practiceItems.length * 2 };
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
        backHref={backHref}
        onRestart={handleRestart}
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
          onComplete={handlePracticeComplete}
          onRecordAnswer={handleRecordAnswer}
          speak={speak}
        />
      )}

      {phase === 'test' && (
        <TestPhase
          items={items}
          onPass={handleTestPass}
          onFail={handleTestFail}
          onRecordAnswer={handleRecordAnswer}
          speak={speak}
        />
      )}
    </div>
  );
}
