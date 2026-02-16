'use client';

import { useState, useCallback } from 'react';
import type { GrammarItem } from '@/lib/data/grammar/types';
import type { QuizAnswer } from '@/types/learning';
import { useSpeech } from '@/hooks/use-speech';
import { useMastery } from '@/hooks/use-mastery';
import { ProgressHeader } from './common/progress-header';
import { GrammarLearnPhase } from './grammar-questions/grammar-learn-phase';
import { GrammarPracticePhase } from './grammar-questions/grammar-practice-phase';
import { GrammarTestPhase } from './grammar-questions/grammar-test-phase';
import { QuizResult } from './results/quiz-result';

interface GrammarQuizEngineProps {
  items: GrammarItem[];
  setId: string;
  setTitle: string;
  clbLevel: number;
  backHref: string;
  topicTips?: {
    commonMistakes: string[];
    writingTip: string;
    speakingTip: string;
  };
}

type Phase = 'learn' | 'practice' | 'test' | 'result';

const phaseLabels: Record<Phase, string> = {
  learn: 'Kurallari ogren',
  practice: 'Pratik — karisik soru tipleri',
  test: 'Test — bilgini kanitla',
  result: '',
};

export function GrammarQuizEngine({
  items,
  setId,
  setTitle,
  clbLevel,
  backHref,
}: GrammarQuizEngineProps) {
  const [phase, setPhase] = useState<Phase>('learn');
  const [practiceItems, setPracticeItems] = useState<GrammarItem[]>(items);
  const [testScore, setTestScore] = useState(0);
  const [testCorrectCount, setTestCorrectCount] = useState(0);
  const [testAnswers, setTestAnswers] = useState<QuizAnswer[]>([]);
  const { speak } = useSpeech();
  const mastery = useMastery();

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
    (score: number, weakIds: string[], answers: QuizAnswer[]) => {
      const correctCount = answers.filter((a) => a.correct).length;
      setTestScore(score);
      setTestCorrectCount(correctCount);
      setTestAnswers(answers);
      const weakItems = items.filter((i) => weakIds.includes(i.id));
      setPracticeItems(weakItems.length > 0 ? weakItems : items);
      mastery.recordTestResult(setId, score, weakIds);
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
    (itemId: string, correct: boolean) => {
      mastery.recordAnswer(itemId, correct);
      if (phase === 'practice') setPracticeIndex((i) => i + 1);
      if (phase === 'test') setTestIndex((i) => i + 1);
    },
    [mastery, phase]
  );

  const handleMarkSeen = useCallback(
    (itemId: string) => {
      mastery.markSeen(itemId);
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
        <GrammarLearnPhase
          items={items}
          onComplete={handleLearnComplete}
          onMarkSeen={handleMarkSeen}
          speak={speak}
        />
      )}

      {phase === 'practice' && (
        <GrammarPracticePhase
          items={practiceItems}
          allItems={items}
          onComplete={handlePracticeComplete}
          onRecordAnswer={handleRecordAnswer}
        />
      )}

      {phase === 'test' && (
        <GrammarTestPhase
          items={items}
          onPass={handleTestPass}
          onFail={handleTestFail}
          onRecordAnswer={handleRecordAnswer}
        />
      )}
    </div>
  );
}
