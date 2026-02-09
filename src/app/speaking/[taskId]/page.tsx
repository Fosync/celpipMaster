'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { speakingTasks } from '@/lib/data/speaking';
import type { SpeakingTask } from '@/lib/data/speaking';
import { useSpeechRecognition } from '@/hooks/use-speech-recognition';
import { useAudioRecorder } from '@/hooks/use-audio-recorder';
import { usePronunciation } from '@/hooks/use-pronunciation';
import { useSpeakingFeedback } from '@/hooks/use-speaking-feedback';
import PrepTimer from '@/components/speaking/prep-timer';
import SpeakTimer from '@/components/speaking/speak-timer';
import MicButton from '@/components/speaking/mic-button';
import AudioVisualizer from '@/components/speaking/audio-visualizer';
import LiveTranscript from '@/components/speaking/live-transcript';
import AnalysisLoading from '@/components/speaking/analysis-loading';
import FeedbackDashboard from '@/components/speaking/feedback-dashboard';

type Phase = 'prep' | 'speaking' | 'analysis' | 'feedback';

export default function SpeakingTaskPage() {
  const params = useParams();
  const router = useRouter();
  const taskId = params.taskId as string;

  const [task, setTask] = useState<SpeakingTask | null>(null);
  const [phase, setPhase] = useState<Phase>('prep');
  const [prepTime, setPrepTime] = useState(0);
  const [speakTime, setSpeakTime] = useState(0);
  const [analysisStage, setAnalysisStage] = useState<'pronunciation' | 'feedback' | 'complete'>('pronunciation');

  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const hasStartedAnalysis = useRef(false);

  // Hooks
  const speechRecognition = useSpeechRecognition();
  const audioRecorder = useAudioRecorder();
  const pronunciation = usePronunciation();
  const speakingFeedback = useSpeakingFeedback();

  // Find task
  useEffect(() => {
    const found = speakingTasks.find((t) => t.id === taskId);
    if (found) {
      setTask(found);
      setPrepTime(found.prepTime);
      setSpeakTime(found.speakTime);
    }
  }, [taskId]);

  // Prep timer countdown
  useEffect(() => {
    if (phase !== 'prep' || !task) return;

    timerRef.current = setInterval(() => {
      setPrepTime((prev) => {
        if (prev <= 1) {
          if (timerRef.current) clearInterval(timerRef.current);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [phase, task]);

  // Speaking timer countdown
  useEffect(() => {
    if (phase !== 'speaking' || !task) return;

    timerRef.current = setInterval(() => {
      setSpeakTime((prev) => {
        if (prev <= 1) {
          if (timerRef.current) clearInterval(timerRef.current);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [phase, task]);

  // Auto-stop when speaking timer runs out
  useEffect(() => {
    if (phase === 'speaking' && speakTime <= 0) {
      handleStopSpeaking();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [speakTime, phase]);

  // Start speaking phase
  const handleStartSpeaking = useCallback(async () => {
    if (!task) return;
    setPhase('speaking');
    setSpeakTime(task.speakTime);

    // Start speech recognition and audio recording
    speechRecognition.start();
    await audioRecorder.start();
  }, [task, speechRecognition, audioRecorder]);

  // Prep timer complete handler
  const handlePrepComplete = useCallback(() => {
    // Auto-transition to speaking after prep
    handleStartSpeaking();
  }, [handleStartSpeaking]);

  // Stop speaking and start analysis
  const handleStopSpeaking = useCallback(() => {
    if (hasStartedAnalysis.current) return;
    hasStartedAnalysis.current = true;

    speechRecognition.stop();
    audioRecorder.stop();
    setPhase('analysis');
    setAnalysisStage('pronunciation');
  }, [speechRecognition, audioRecorder]);

  // Run analysis when audio blob is ready
  useEffect(() => {
    if (phase !== 'analysis' || !audioRecorder.audioBlob || !task) return;

    const runAnalysis = async () => {
      try {
        // Step 1: Pronunciation assessment
        setAnalysisStage('pronunciation');
        const pronResult = await pronunciation.assess(
          audioRecorder.audioBlob!,
          speechRecognition.transcript || task.prompt
        );

        // Step 2: AI feedback
        setAnalysisStage('feedback');
        const pronScores: Record<string, number> = pronResult
          ? {
              accuracyScore: pronResult.accuracyScore,
              fluencyScore: pronResult.fluencyScore,
              completenessScore: pronResult.completenessScore,
              pronScore: pronResult.pronScore,
            }
          : {};

        await speakingFeedback.analyze(
          speechRecognition.transcript || '(no speech detected)',
          task.prompt,
          pronScores
        );

        // Step 3: Complete
        setAnalysisStage('complete');
        setTimeout(() => {
          setPhase('feedback');
        }, 800);
      } catch {
        // If analysis fails, still show feedback phase with whatever we have
        setPhase('feedback');
      }
    };

    runAnalysis();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase, audioRecorder.audioBlob]);

  // Try again handler
  const handleTryAgain = useCallback(() => {
    if (!task) return;
    hasStartedAnalysis.current = false;
    speechRecognition.reset();
    audioRecorder.reset();
    pronunciation.reset();
    speakingFeedback.reset();
    setPrepTime(task.prepTime);
    setSpeakTime(task.speakTime);
    setPhase('prep');
  }, [task, speechRecognition, audioRecorder, pronunciation, speakingFeedback]);

  // Next task handler
  const handleNextTask = useCallback(() => {
    if (!task) return;
    const currentIndex = speakingTasks.findIndex((t) => t.id === task.id);
    const nextIndex = (currentIndex + 1) % speakingTasks.length;
    const nextTask = speakingTasks[nextIndex];
    router.push(`/speaking/${nextTask.id}`);
  }, [task, router]);

  if (!task) {
    return (
      <div className="mx-auto max-w-2xl py-12 text-center">
        <p className="text-gray-500">Task not found.</p>
        <Link
          href="/speaking"
          className="mt-4 inline-block text-blue-600 hover:underline text-sm"
        >
          Back to Speaking Tasks
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-2xl py-6 px-4">
      {/* Header - always visible */}
      <div className="mb-6">
        <Link
          href="/speaking"
          className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-700 transition-colors mb-3"
        >
          <svg
            className="w-4 h-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="15 18 9 12 15 6" />
          </svg>
          Speaking Tasks
        </Link>
        <h1 className="text-lg font-bold text-gray-900">
          Task {task.taskNumber}: {task.title}
        </h1>
      </div>

      {/* PREP PHASE */}
      {phase === 'prep' && (
        <div className="space-y-6">
          {/* Task Prompt */}
          <div className="bg-white rounded-xl border border-gray-200 p-5">
            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">
              Task Prompt
            </h3>
            <p className="text-sm text-gray-800 leading-relaxed">{task.prompt}</p>
          </div>

          {/* Tips */}
          <div className="bg-yellow-50 border border-yellow-100 rounded-xl p-4">
            <h3 className="text-xs font-semibold text-yellow-700 uppercase tracking-wide mb-2">
              Tips
            </h3>
            <ul className="space-y-1.5">
              {task.tips.map((tip, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 text-sm text-yellow-800"
                >
                  <span className="text-yellow-500 mt-0.5 flex-shrink-0">&#x2022;</span>
                  {tip}
                </li>
              ))}
            </ul>
          </div>

          {/* Prep Timer */}
          <div className="flex flex-col items-center gap-4 py-4">
            <PrepTimer
              seconds={prepTime}
              totalSeconds={task.prepTime}
              onComplete={handlePrepComplete}
            />
          </div>

          {/* Skip Prep Button */}
          <div className="text-center">
            <button
              onClick={handleStartSpeaking}
              className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/25"
            >
              Start Speaking Now
            </button>
          </div>
        </div>
      )}

      {/* SPEAKING PHASE */}
      {phase === 'speaking' && (
        <div className="space-y-6">
          {/* Task Prompt (compact) */}
          <div className="bg-gray-50 rounded-xl border border-gray-200 p-4">
            <p className="text-sm text-gray-700 leading-relaxed">{task.prompt}</p>
          </div>

          {/* Timer */}
          <SpeakTimer seconds={speakTime} totalSeconds={task.speakTime} />

          {/* Visualizer + Mic */}
          <div className="flex flex-col items-center gap-4 py-4">
            <AudioVisualizer isActive={audioRecorder.isRecording} />

            <MicButton
              state={audioRecorder.isRecording ? 'recording' : 'idle'}
              onClick={handleStopSpeaking}
            />

            <p className="text-sm text-gray-500">
              {audioRecorder.isRecording
                ? 'Tap to stop recording'
                : 'Recording stopped'}
            </p>
          </div>

          {/* Live Transcript */}
          <LiveTranscript
            text={speechRecognition.transcript}
            interimText={speechRecognition.interimTranscript}
          />

          {/* Errors */}
          {(speechRecognition.error || audioRecorder.error) && (
            <div className="bg-red-50 border border-red-100 rounded-xl p-3 text-sm text-red-700">
              {speechRecognition.error || audioRecorder.error}
            </div>
          )}

          {/* Done Button */}
          <div className="text-center">
            <button
              onClick={handleStopSpeaking}
              className="px-6 py-3 bg-gray-800 text-white font-semibold rounded-xl hover:bg-gray-900 transition-all"
            >
              Finish Speaking
            </button>
          </div>
        </div>
      )}

      {/* ANALYSIS PHASE */}
      {phase === 'analysis' && (
        <div className="py-12">
          <AnalysisLoading stage={analysisStage} />

          {/* Show errors if any */}
          {(pronunciation.error || speakingFeedback.error) && (
            <div className="mt-6 bg-red-50 border border-red-100 rounded-xl p-3 text-sm text-red-700 text-center">
              {pronunciation.error || speakingFeedback.error}
              <button
                onClick={handleTryAgain}
                className="block mx-auto mt-3 px-4 py-2 bg-red-600 text-white font-semibold rounded-lg text-sm hover:bg-red-700 transition-all"
              >
                Try Again
              </button>
            </div>
          )}
        </div>
      )}

      {/* FEEDBACK PHASE */}
      {phase === 'feedback' && speakingFeedback.feedback && (
        <FeedbackDashboard
          feedback={speakingFeedback.feedback}
          wordScores={pronunciation.result?.wordScores ?? []}
          pronScore={pronunciation.result?.pronScore ?? 0}
          fluencyScore={pronunciation.result?.fluencyScore ?? 0}
          onTryAgain={handleTryAgain}
          onNextTask={handleNextTask}
          backHref="/speaking"
        />
      )}

      {/* Fallback if feedback phase but no feedback data */}
      {phase === 'feedback' && !speakingFeedback.feedback && (
        <div className="py-12 text-center">
          <p className="text-gray-500 mb-4">
            Unable to generate feedback. Please try again.
          </p>
          <button
            onClick={handleTryAgain}
            className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all"
          >
            Try Again
          </button>
        </div>
      )}
    </div>
  );
}
