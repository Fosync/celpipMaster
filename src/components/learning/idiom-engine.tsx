'use client';

import { useState, useCallback } from 'react';
import type { IdiomWord } from '@/lib/data/idioms/types';
import { useSpeech } from '@/hooks/use-speech';
import { useMastery } from '@/hooks/use-mastery';
import { ProgressHeader } from './common/progress-header';
import { QuizResult } from './results/quiz-result';

// ==========================================
// Sub-components for each phase
// ==========================================

// Phase 1: Introduction - Flashcard with meaning, example, whenToUse, audio
function IntroPhase({
  idioms,
  onComplete,
  speak,
}: {
  idioms: IdiomWord[];
  onComplete: () => void;
  speak: (text: string) => void;
}) {
  const [index, setIndex] = useState(0);
  const current = idioms[index];

  const handleNext = () => {
    if (index < idioms.length - 1) {
      setIndex(index + 1);
    } else {
      onComplete();
    }
  };

  if (!current) return null;

  return (
    <div className="space-y-4 px-4">
      <div className="bg-white rounded-2xl border border-gray-200 p-6 space-y-4">
        {/* Idiom */}
        <div className="text-center">
          <button
            onClick={() => speak(current.idiom)}
            className="text-2xl font-bold text-gray-900 hover:text-blue-600 transition-colors"
          >
            {current.idiom} 🔊
          </button>
        </div>

        {/* Meaning */}
        <div className="bg-blue-50 rounded-xl p-4">
          <p className="text-xs font-semibold text-blue-600 uppercase tracking-wide mb-1">Meaning</p>
          <p className="text-sm text-gray-800">{current.meaning}</p>
        </div>

        {/* Turkish */}
        <div className="bg-gray-50 rounded-xl p-4">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Turkce</p>
          <p className="text-sm text-gray-700">{current.turkishMeaning}</p>
        </div>

        {/* Example */}
        <div className="bg-green-50 rounded-xl p-4">
          <p className="text-xs font-semibold text-green-600 uppercase tracking-wide mb-1">Example</p>
          <p className="text-sm text-gray-800 italic">&quot;{current.example}&quot;</p>
          <button
            onClick={() => speak(current.example)}
            className="mt-2 text-xs text-green-600 hover:text-green-700 font-medium"
          >
            Listen 🔊
          </button>
        </div>

        {/* When to use */}
        <div className="bg-yellow-50 rounded-xl p-4">
          <p className="text-xs font-semibold text-yellow-700 uppercase tracking-wide mb-1">When to use</p>
          <p className="text-sm text-gray-700">{current.whenToUse}</p>
        </div>

        {/* Collocations */}
        {current.collocations.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {current.collocations.map((col, i) => (
              <span key={i} className="px-3 py-1 bg-purple-50 text-purple-700 text-xs font-medium rounded-full border border-purple-100">
                {col}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Progress indicator */}
      <p className="text-center text-xs text-gray-400">
        {index + 1} / {idioms.length}
      </p>

      {/* Next button */}
      <button
        onClick={handleNext}
        className="w-full py-3.5 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all"
      >
        {index < idioms.length - 1 ? 'Next Idiom' : 'Start Context Practice'}
      </button>
    </div>
  );
}

// Phase 2: Context - Read scenarios and identify meaning from context
function ContextPhase({
  idioms,
  onComplete,
  onRecordAnswer,
}: {
  idioms: IdiomWord[];
  onComplete: () => void;
  onRecordAnswer: (idiomId: string, correct: boolean) => void;
}) {
  // Build queue: 1 context question per idiom (pick randomly from 3 contexts)
  const [questions] = useState(() => {
    return idioms
      .filter((i) => i.contexts.length > 0)
      .map((idiom) => {
        const ctx = idiom.contexts[Math.floor(Math.random() * idiom.contexts.length)];
        return { idiom, context: ctx };
      })
      .sort(() => Math.random() - 0.5);
  });

  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);

  const current = questions[index];

  const handleSelect = (optionIndex: number) => {
    if (showResult) return;
    setSelected(optionIndex);
    setShowResult(true);

    const correct = optionIndex === current.context.correctIndex;
    onRecordAnswer(current.idiom.id, correct);

    setTimeout(() => {
      setSelected(null);
      setShowResult(false);
      if (index < questions.length - 1) {
        setIndex(index + 1);
      } else {
        onComplete();
      }
    }, 1500);
  };

  if (!current) {
    onComplete();
    return null;
  }

  return (
    <div className="space-y-4 px-4">
      {/* Scenario */}
      <div className="bg-white rounded-2xl border border-gray-200 p-5">
        <p className="text-xs font-semibold text-purple-600 uppercase tracking-wide mb-2">
          Read the scenario
        </p>
        <p className="text-sm text-gray-800 leading-relaxed mb-4">
          {current.context.scenario}
        </p>
        <p className="text-sm font-semibold text-gray-700">
          {current.context.question}
        </p>
      </div>

      {/* Options */}
      <div className="space-y-2">
        {current.context.options.map((option, i) => {
          let style = 'bg-white border-gray-200 hover:border-blue-300 hover:bg-blue-50';
          if (showResult) {
            if (i === current.context.correctIndex) {
              style = 'bg-green-50 border-green-400 ring-2 ring-green-200';
            } else if (i === selected && i !== current.context.correctIndex) {
              style = 'bg-red-50 border-red-400 ring-2 ring-red-200';
            } else {
              style = 'bg-gray-50 border-gray-200 opacity-50';
            }
          }

          return (
            <button
              key={i}
              onClick={() => handleSelect(i)}
              disabled={showResult}
              className={`w-full text-left px-4 py-3 rounded-xl border transition-all text-sm ${style}`}
            >
              <span className="font-semibold text-gray-400 mr-2">
                {String.fromCharCode(65 + i)}.
              </span>
              {option}
            </button>
          );
        })}
      </div>

      <p className="text-center text-xs text-gray-400">
        {index + 1} / {questions.length}
      </p>
    </div>
  );
}

// Phase 3: Practice - Multiple choice questions (definition match, fill blank, Turkish match)
function PracticePhase({
  idioms,
  allIdioms,
  onComplete,
  onRecordAnswer,
}: {
  idioms: IdiomWord[];
  allIdioms: IdiomWord[];
  onComplete: () => void;
  onRecordAnswer: (idiomId: string, correct: boolean) => void;
}) {
  type QType = 'definition' | 'turkish' | 'fill-blank';

  const [questions] = useState(() => {
    const qs: { idiom: IdiomWord; type: QType; options: string[]; correctIndex: number; prompt: string }[] = [];

    for (const idiom of idioms) {
      // Question 1: Definition match
      const defDistractors = allIdioms
        .filter((i) => i.id !== idiom.id)
        .sort(() => Math.random() - 0.5)
        .slice(0, 3)
        .map((i) => i.meaning);
      const defOptions = [...defDistractors];
      const defCorrectIdx = Math.floor(Math.random() * 4);
      defOptions.splice(defCorrectIdx, 0, idiom.meaning);

      qs.push({
        idiom,
        type: 'definition',
        options: defOptions.slice(0, 4),
        correctIndex: defCorrectIdx,
        prompt: `What does "${idiom.idiom}" mean?`,
      });

      // Question 2: Turkish match
      const turkDistractors = allIdioms
        .filter((i) => i.id !== idiom.id)
        .sort(() => Math.random() - 0.5)
        .slice(0, 3)
        .map((i) => i.turkishMeaning);
      const turkOptions = [...turkDistractors];
      const turkCorrectIdx = Math.floor(Math.random() * 4);
      turkOptions.splice(turkCorrectIdx, 0, idiom.turkishMeaning);

      qs.push({
        idiom,
        type: 'turkish',
        options: turkOptions.slice(0, 4),
        correctIndex: turkCorrectIdx,
        prompt: `"${idiom.idiom}" — Turkce anlami nedir?`,
      });
    }

    return qs.sort(() => Math.random() - 0.5);
  });

  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);

  const current = questions[index];

  const handleSelect = (optionIndex: number) => {
    if (showResult) return;
    setSelected(optionIndex);
    setShowResult(true);

    const correct = optionIndex === current.correctIndex;
    onRecordAnswer(current.idiom.id, correct);

    setTimeout(() => {
      setSelected(null);
      setShowResult(false);
      if (index < questions.length - 1) {
        setIndex(index + 1);
      } else {
        onComplete();
      }
    }, 1500);
  };

  if (!current) {
    onComplete();
    return null;
  }

  const typeLabel = current.type === 'definition'
    ? 'Meaning Match'
    : current.type === 'turkish'
    ? 'Turkce Eslestir'
    : 'Fill in the Blank';

  return (
    <div className="space-y-4 px-4">
      <div className="bg-white rounded-2xl border border-gray-200 p-5">
        <p className="text-xs font-semibold text-blue-600 uppercase tracking-wide mb-3">
          {typeLabel}
        </p>
        <p className="text-base font-semibold text-gray-800">{current.prompt}</p>
      </div>

      <div className="space-y-2">
        {current.options.map((option, i) => {
          let style = 'bg-white border-gray-200 hover:border-blue-300 hover:bg-blue-50';
          if (showResult) {
            if (i === current.correctIndex) {
              style = 'bg-green-50 border-green-400 ring-2 ring-green-200';
            } else if (i === selected && i !== current.correctIndex) {
              style = 'bg-red-50 border-red-400 ring-2 ring-red-200';
            } else {
              style = 'bg-gray-50 border-gray-200 opacity-50';
            }
          }

          return (
            <button
              key={i}
              onClick={() => handleSelect(i)}
              disabled={showResult}
              className={`w-full text-left px-4 py-3 rounded-xl border transition-all text-sm ${style}`}
            >
              <span className="font-semibold text-gray-400 mr-2">
                {String.fromCharCode(65 + i)}.
              </span>
              {option}
            </button>
          );
        })}
      </div>

      <p className="text-center text-xs text-gray-400">
        {index + 1} / {questions.length}
      </p>
    </div>
  );
}

// Phase 4: Production - Write a sentence using the idiom
function ProductionPhase({
  idioms,
  onComplete,
  speak,
}: {
  idioms: IdiomWord[];
  onComplete: () => void;
  speak: (text: string) => void;
}) {
  const [index, setIndex] = useState(0);
  const [userSentence, setUserSentence] = useState('');
  const [showModel, setShowModel] = useState(false);

  const current = idioms[index];

  const handleSubmit = () => {
    setShowModel(true);
  };

  const handleNext = () => {
    setUserSentence('');
    setShowModel(false);
    if (index < idioms.length - 1) {
      setIndex(index + 1);
    } else {
      onComplete();
    }
  };

  if (!current) return null;

  return (
    <div className="space-y-4 px-4">
      <div className="bg-white rounded-2xl border border-gray-200 p-5">
        <p className="text-xs font-semibold text-orange-600 uppercase tracking-wide mb-2">
          Use it in a sentence
        </p>
        <p className="text-base font-semibold text-gray-800 mb-1">
          Write a sentence using: <span className="text-blue-600">&quot;{current.idiom}&quot;</span>
        </p>
        <p className="text-xs text-gray-500">
          Meaning: {current.meaning}
        </p>
      </div>

      <textarea
        value={userSentence}
        onChange={(e) => setUserSentence(e.target.value)}
        placeholder={`Write a sentence using "${current.idiom}"...`}
        className="w-full h-24 px-4 py-3 text-sm border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none resize-none"
        disabled={showModel}
      />

      {!showModel && (
        <button
          onClick={handleSubmit}
          disabled={userSentence.trim().length < 5}
          className="w-full py-3 bg-orange-500 text-white font-semibold rounded-xl hover:bg-orange-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Check My Sentence
        </button>
      )}

      {showModel && (
        <div className="space-y-3">
          {/* User's sentence */}
          <div className="bg-gray-50 rounded-xl p-4">
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Your sentence</p>
            <p className="text-sm text-gray-700">{userSentence}</p>
          </div>

          {/* Model example */}
          <div className="bg-green-50 rounded-xl p-4">
            <p className="text-xs font-semibold text-green-600 uppercase tracking-wide mb-1">Example</p>
            <p className="text-sm text-gray-800 italic">&quot;{current.example}&quot;</p>
            <button
              onClick={() => speak(current.example)}
              className="mt-2 text-xs text-green-600 hover:text-green-700 font-medium"
            >
              Listen 🔊
            </button>
          </div>

          {/* Contains idiom check */}
          <div className={`rounded-xl p-3 text-sm font-medium ${
            userSentence.toLowerCase().includes(current.idiom.toLowerCase())
              ? 'bg-green-50 text-green-700'
              : 'bg-yellow-50 text-yellow-700'
          }`}>
            {userSentence.toLowerCase().includes(current.idiom.toLowerCase())
              ? '✓ Great! You used the idiom correctly.'
              : '⚠ Make sure to include the idiom in your sentence.'}
          </div>

          <button
            onClick={handleNext}
            className="w-full py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all"
          >
            {index < idioms.length - 1 ? 'Next Idiom' : 'Start Final Test'}
          </button>
        </div>
      )}

      <p className="text-center text-xs text-gray-400">
        {index + 1} / {idioms.length}
      </p>
    </div>
  );
}

// Phase 5: Test - Mixed questions, single attempt
function TestPhase({
  idioms,
  allIdioms,
  onComplete,
}: {
  idioms: IdiomWord[];
  allIdioms: IdiomWord[];
  onComplete: (score: number) => void;
}) {
  const [questions] = useState(() => {
    return idioms.map((idiom) => {
      const distractors = allIdioms
        .filter((i) => i.id !== idiom.id)
        .sort(() => Math.random() - 0.5)
        .slice(0, 3)
        .map((i) => i.idiom);
      const options = [...distractors];
      const correctIdx = Math.floor(Math.random() * 4);
      options.splice(correctIdx, 0, idiom.idiom);

      return {
        idiom,
        prompt: idiom.meaning,
        options: options.slice(0, 4),
        correctIndex: correctIdx,
      };
    }).sort(() => Math.random() - 0.5);
  });

  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);

  const current = questions[index];

  const handleSelect = (optionIndex: number) => {
    if (showResult) return;
    setSelected(optionIndex);
    setShowResult(true);

    if (optionIndex === current.correctIndex) {
      setCorrectCount((c) => c + 1);
    }

    setTimeout(() => {
      setSelected(null);
      setShowResult(false);
      if (index < questions.length - 1) {
        setIndex(index + 1);
      } else {
        const finalCorrect = correctCount + (optionIndex === current.correctIndex ? 1 : 0);
        const score = Math.round((finalCorrect / questions.length) * 100);
        onComplete(score);
      }
    }, 1500);
  };

  if (!current) return null;

  return (
    <div className="space-y-4 px-4">
      <div className="bg-white rounded-2xl border border-gray-200 p-5">
        <p className="text-xs font-semibold text-red-600 uppercase tracking-wide mb-3">
          Final Test — Which idiom means:
        </p>
        <p className="text-sm text-gray-800 leading-relaxed">{current.prompt}</p>
      </div>

      <div className="space-y-2">
        {current.options.map((option, i) => {
          let style = 'bg-white border-gray-200 hover:border-blue-300 hover:bg-blue-50';
          if (showResult) {
            if (i === current.correctIndex) {
              style = 'bg-green-50 border-green-400 ring-2 ring-green-200';
            } else if (i === selected && i !== current.correctIndex) {
              style = 'bg-red-50 border-red-400 ring-2 ring-red-200';
            } else {
              style = 'bg-gray-50 border-gray-200 opacity-50';
            }
          }

          return (
            <button
              key={i}
              onClick={() => handleSelect(i)}
              disabled={showResult}
              className={`w-full text-left px-4 py-3 rounded-xl border transition-all text-sm ${style}`}
            >
              <span className="font-semibold text-gray-400 mr-2">
                {String.fromCharCode(65 + i)}.
              </span>
              {option}
            </button>
          );
        })}
      </div>

      <p className="text-center text-xs text-gray-400">
        {index + 1} / {questions.length}
      </p>
    </div>
  );
}

// ==========================================
// Main IdiomEngine - 5-phase orchestrator
// ==========================================

interface IdiomEngineProps {
  idioms: IdiomWord[];
  allIdioms: IdiomWord[];  // All idioms for generating distractors
  setId: string;
  setTitle: string;
  clbLevel: number;
  backHref: string;
}

type Phase = 'intro' | 'context' | 'practice' | 'production' | 'test' | 'result';

const phaseLabels: Record<Phase, string> = {
  intro: '1/5 — Introduction',
  context: '2/5 — Context',
  practice: '3/5 — Practice',
  production: '4/5 — Production',
  test: '5/5 — Final Test',
  result: '',
};

export function IdiomEngine({ idioms, allIdioms, setId, setTitle, clbLevel, backHref }: IdiomEngineProps) {
  const [phase, setPhase] = useState<Phase>('intro');
  const [testScore, setTestScore] = useState(0);
  const { speak } = useSpeech();
  const mastery = useMastery();

  const handleRecordAnswer = useCallback(
    (idiomId: string, correct: boolean) => {
      mastery.recordAnswer(idiomId, correct);
    },
    [mastery]
  );

  const handleTestComplete = useCallback(
    (score: number) => {
      setTestScore(score);
      const correctIds = idioms.map((i) => i.id);
      mastery.recordTestResult(setId, score, correctIds);
      setPhase('result');
    },
    [idioms, setId, mastery]
  );

  const handleRestart = useCallback(() => {
    if (testScore < 80) {
      setPhase('practice');
    } else {
      setPhase('intro');
    }
  }, [testScore]);

  // Progress calculation
  const phaseOrder: Phase[] = ['intro', 'context', 'practice', 'production', 'test'];
  const currentPhaseIndex = phaseOrder.indexOf(phase);
  const progressPercent = phase === 'result' ? 100 : ((currentPhaseIndex + 1) / phaseOrder.length) * 100;

  if (phase === 'result') {
    const stars = mastery.getStarRating(setId);
    const correctCount = Math.round((testScore / 100) * idioms.length);
    return (
      <QuizResult
        setTitle={setTitle}
        correctCount={correctCount}
        totalCount={idioms.length}
        score={testScore}
        stars={stars}
        backHref={backHref}
        onRestart={handleRestart}
      />
    );
  }

  return (
    <div className="mx-auto max-w-2xl">
      <ProgressHeader
        backHref={backHref}
        clbLevel={clbLevel}
        currentIndex={Math.round(progressPercent)}
        totalCount={100}
        phaseLabel={phaseLabels[phase]}
      />

      {phase === 'intro' && (
        <IntroPhase
          idioms={idioms}
          onComplete={() => setPhase('context')}
          speak={speak}
        />
      )}

      {phase === 'context' && (
        <ContextPhase
          idioms={idioms}
          onComplete={() => setPhase('practice')}
          onRecordAnswer={handleRecordAnswer}
        />
      )}

      {phase === 'practice' && (
        <PracticePhase
          idioms={idioms}
          allIdioms={allIdioms}
          onComplete={() => setPhase('production')}
          onRecordAnswer={handleRecordAnswer}
        />
      )}

      {phase === 'production' && (
        <ProductionPhase
          idioms={idioms}
          onComplete={() => setPhase('test')}
          speak={speak}
        />
      )}

      {phase === 'test' && (
        <TestPhase
          idioms={idioms}
          allIdioms={allIdioms}
          onComplete={handleTestComplete}
        />
      )}
    </div>
  );
}
