'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { useParams, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { conversationScenarios, freeChat } from '@/lib/data/speaking';
import { useSpeechRecognition } from '@/hooks/use-speech-recognition';
import { useConversation } from '@/hooks/use-conversation';
import { useGoogleTTS } from '@/hooks/use-google-tts';
import ConversationView from '@/components/speaking/practice/conversation-view';
import ConversationSummary from '@/components/speaking/practice/conversation-summary';
import EndConversationButton from '@/components/speaking/practice/end-conversation-button';
import MicButton from '@/components/speaking/mic-button';

// Mood-based voice settings for Web Speech API fallback
const MOOD_VOICE_SETTINGS: Record<string, { rate: number; pitch: number }> = {
  happy: { rate: 1.0, pitch: 1.05 },
  curious: { rate: 0.95, pitch: 1.1 },
  surprised: { rate: 1.05, pitch: 1.2 },
  empathetic: { rate: 0.85, pitch: 0.95 },
  amused: { rate: 1.0, pitch: 1.1 },
  thoughtful: { rate: 0.85, pitch: 0.9 },
};

export default function ConversationPage() {
  const params = useParams();
  const searchParams = useSearchParams();
  const scenarioId = params.scenarioId as string;
  const difficulty = searchParams.get('difficulty') ?? 'medium';

  const scenario = scenarioId === 'free-chat'
    ? freeChat
    : conversationScenarios.find((s) => s.id === scenarioId) ?? null;

  const [showSummary, setShowSummary] = useState(false);

  // Auto-flow state
  const [conversationStarted, setConversationStarted] = useState(false);
  const [autoFlow, setAutoFlow] = useState(false);
  const autoFlowRef = useRef(false);
  const conversationStartedRef = useRef(false);
  const conversationEndedRef = useRef(false);

  // Google TTS for high-quality AI voice
  const tts = useGoogleTTS();
  const isSpeaking = tts.isPlaying || tts.isLoading;

  // Refs for accessing latest state in callbacks
  const conversationRef = useRef<ReturnType<typeof useConversation>>(null!);

  // TTS done handler — auto-open mic after 0.5s delay
  const handleTTSDone = useCallback(() => {
    if (!autoFlowRef.current || conversationEndedRef.current) return;
    setTimeout(() => {
      if (autoFlowRef.current && !conversationEndedRef.current) {
        speechRecognitionRef.current.start();
      }
    }, 500);
  }, []);

  // Mood-aware TTS — Mia uses ElevenLabs pro voice
  // Only speaks after user clicks "Start Conversation"
  const speak = useCallback((text: string, mood?: string) => {
    if (!conversationStartedRef.current) return;
    const settings = MOOD_VOICE_SETTINGS[mood ?? 'happy'] ?? MOOD_VOICE_SETTINGS.happy;
    tts.playText(text, 'nova', settings.rate, handleTTSDone, 'pro');
  }, [tts.playText, handleTTSDone]);

  // Conversation hook
  const conversation = useConversation({
    scenarioContext: scenario?.systemContext ?? '',
    openingLine: scenario?.openingLine ?? '',
    maxTurns: scenario?.maxTurns ?? 10,
    difficulty,
    onSpeak: speak,
  });
  conversationRef.current = conversation;

  // Track conversation ended
  useEffect(() => {
    conversationEndedRef.current = conversation.isEnded;
  }, [conversation.isEnded]);

  // Auto-send handler — called when speech recognition auto-stops (silence/browser end)
  const handleAutoSend = useCallback((transcript: string) => {
    if (!autoFlowRef.current || conversationEndedRef.current) return;
    if (transcript.trim()) {
      conversationRef.current.sendMessage(transcript);
    }
  }, []);

  // Speech recognition with auto-stop on silence
  const speechRecognition = useSpeechRecognition({
    continuous: false,
    silenceTimeoutMs: 2000,
    onAutoStop: handleAutoSend,
  });
  const speechRecognitionRef = useRef(speechRecognition);
  speechRecognitionRef.current = speechRecognition;

  // Show summary when conversation ends
  useEffect(() => {
    if (conversation.isEnded && !showSummary) {
      const timer = setTimeout(() => setShowSummary(true), 1500);
      return () => clearTimeout(timer);
    }
  }, [conversation.isEnded, showSummary]);

  // Start conversation — plays opening line TTS, enables auto-flow
  const handleStartConversation = useCallback(() => {
    conversationStartedRef.current = true;
    setConversationStarted(true);
    autoFlowRef.current = true;
    setAutoFlow(true);

    // Speak the opening line
    const openingText = conversationRef.current.messages[0]?.text || scenario?.openingLine || '';
    if (openingText) {
      const settings = MOOD_VOICE_SETTINGS.happy;
      tts.playText(openingText, 'nova', settings.rate, handleTTSDone, 'pro');
    }
  }, [scenario?.openingLine, tts.playText, handleTTSDone]);

  // Toggle auto-flow pause/resume
  const handleToggleAutoFlow = useCallback(() => {
    if (autoFlow) {
      // Pause auto-flow
      autoFlowRef.current = false;
      setAutoFlow(false);
      if (speechRecognition.isListening) {
        speechRecognition.stop();
      }
    } else {
      // Resume auto-flow
      autoFlowRef.current = true;
      setAutoFlow(true);
      // If not currently speaking/loading, open mic
      if (!tts.isPlaying && !tts.isLoading && !conversationRef.current.isLoading) {
        speechRecognition.start();
      }
    }
  }, [autoFlow, speechRecognition, tts.isPlaying, tts.isLoading]);

  // Manual mic toggle — works in both auto and manual modes
  const handleMicToggle = useCallback(() => {
    if (speechRecognition.isListening) {
      // Stop recording and send message manually
      speechRecognition.stop();
      const transcript = speechRecognition.transcript;
      if (transcript.trim()) {
        conversation.sendMessage(transcript);
      }
    } else {
      // Interrupt AI if speaking
      if (isSpeaking) {
        tts.stop();
      }
      // If not started yet, start the conversation
      if (!conversationStartedRef.current) {
        handleStartConversation();
        return;
      }
      // Start recording
      speechRecognition.start();
    }
  }, [speechRecognition, conversation, tts, isSpeaking, handleStartConversation]);

  // Handle end conversation
  const handleEnd = useCallback(() => {
    autoFlowRef.current = false;
    setAutoFlow(false);
    speechRecognition.stop();
    speechRecognition.reset();
    tts.stop();
    conversation.endConversation();
  }, [speechRecognition, conversation, tts]);

  // Handle try again
  const handleTryAgain = useCallback(() => {
    setShowSummary(false);
    autoFlowRef.current = false;
    setAutoFlow(false);
    conversationStartedRef.current = false;
    setConversationStarted(false);
    conversationEndedRef.current = false;
    speechRecognition.reset();
    tts.stop();
    conversation.reset();
  }, [speechRecognition, conversation, tts]);

  // Speak message handler for chat bubble replay
  const handleSpeakMessage = useCallback(
    (text: string) => {
      if (!conversationStartedRef.current) {
        conversationStartedRef.current = true;
        setConversationStarted(true);
      }
      const settings = MOOD_VOICE_SETTINGS.happy;
      tts.playText(text, 'nova', settings.rate, undefined, 'pro');
    },
    [tts.playText]
  );

  if (!scenario) {
    return (
      <div className="mx-auto max-w-2xl py-12 text-center">
        <p className="text-gray-500">Scenario not found.</p>
        <Link
          href="/speaking/practice"
          className="mt-4 inline-block text-blue-600 hover:underline text-sm"
        >
          Back to Scenarios
        </Link>
      </div>
    );
  }

  // Summary screen
  if (showSummary) {
    return (
      <div className="mx-auto max-w-2xl py-6 px-4">
        <ConversationSummary
          totalTurns={conversation.turnNumber}
          corrections={conversation.allCorrections}
          newVocabulary={conversation.allVocabulary}
          goodPhrases={conversation.allGoodPhrases}
          scenarioTitle={scenario.title}
          onTryAgain={handleTryAgain}
          onBackToScenarios={() => window.location.assign('/speaking/practice')}
        />
      </div>
    );
  }

  // Get mic state
  const micState: 'idle' | 'recording' | 'processing' = conversation.isLoading
    ? 'processing'
    : speechRecognition.isListening
    ? 'recording'
    : 'idle';

  // Status text
  const getStatusText = () => {
    if (conversation.isEnded) return 'Conversation ended';
    if (!conversationStarted) return 'Tap to start your conversation with Mia';
    if (micState === 'recording') {
      return autoFlow ? 'Listening... will auto-send on pause' : 'Tap to send';
    }
    if (micState === 'processing') return 'Mia is thinking...';
    if (isSpeaking) return autoFlow ? 'Mia is speaking...' : 'Tap to interrupt & speak';
    if (autoFlow) return 'Getting ready...';
    return 'Tap mic to speak';
  };

  return (
    <div className="flex flex-col h-[calc(100vh-64px)]">
      {/* Top Bar */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200 bg-white">
        <div className="flex items-center gap-3">
          <Link
            href="/speaking/practice"
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <svg
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </Link>
          <div>
            <h2 className="text-sm font-semibold text-gray-800">
              <span className="mr-1.5">{scenario.icon}</span>
              {scenario.title}
            </h2>
            <p className="text-xs text-gray-400">
              Turn {conversation.turnNumber}/{scenario.maxTurns}
              <span className="mx-1.5 text-gray-300">|</span>
              <span className={`font-medium ${
                difficulty === 'easy' ? 'text-green-500' :
                difficulty === 'hard' ? 'text-red-500' : 'text-yellow-500'
              }`}>
                {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
              </span>
              {autoFlow && (
                <>
                  <span className="mx-1.5 text-gray-300">|</span>
                  <span className="text-blue-500 font-medium">Auto</span>
                </>
              )}
            </p>
          </div>
        </div>
        <EndConversationButton onEnd={handleEnd} />
      </div>

      {/* Chat Area */}
      <div className="flex-1 overflow-hidden bg-gray-50">
        <ConversationView
          messages={conversation.messages}
          isLoading={conversation.isLoading}
          onSpeakMessage={handleSpeakMessage}
        />
      </div>

      {/* Bottom Controls */}
      <div className="border-t border-gray-200 bg-white px-4 py-4">
        {/* Live transcript preview */}
        {speechRecognition.isListening && (
          <div className="mb-3 px-3 py-2 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-600">
              {speechRecognition.transcript && (
                <span>{speechRecognition.transcript} </span>
              )}
              {speechRecognition.interimTranscript && (
                <span className="text-gray-400 italic">
                  {speechRecognition.interimTranscript}
                </span>
              )}
              {!speechRecognition.transcript &&
                !speechRecognition.interimTranscript && (
                  <span className="text-gray-400 italic">Listening...</span>
                )}
            </p>
          </div>
        )}

        {/* AI speaking indicator */}
        {isSpeaking && !speechRecognition.isListening && conversationStarted && (
          <div className="mb-3 flex items-center justify-center gap-2">
            <div className="flex gap-1">
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  className="w-1.5 h-1.5 rounded-full bg-blue-400"
                  style={{
                    animation: `speaking-dot 1s ease-in-out ${i * 0.2}s infinite`,
                  }}
                />
              ))}
            </div>
            <span className="text-xs text-blue-500 font-medium">Mia is speaking...</span>
            <button
              onClick={() => tts.stop()}
              className="text-xs text-gray-400 hover:text-gray-600 underline ml-1"
            >
              Skip
            </button>
          </div>
        )}

        {/* Error */}
        {(conversation.error || speechRecognition.error) && (
          <div className="mb-3 px-3 py-2 bg-red-50 rounded-lg">
            <p className="text-xs text-red-600">
              {conversation.error || speechRecognition.error}
            </p>
          </div>
        )}

        {/* Main control area */}
        <div className="flex flex-col items-center gap-2">
          {!conversationStarted ? (
            /* Start Conversation button */
            <button
              onClick={handleStartConversation}
              disabled={conversation.isEnded}
              className="flex items-center gap-2.5 px-7 py-3.5 bg-green-500 hover:bg-green-600 text-white rounded-full font-semibold text-sm transition-all shadow-lg shadow-green-500/25 hover:shadow-green-500/40 active:scale-95"
            >
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="9" y="1" width="6" height="12" rx="3" />
                <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                <line x1="12" y1="19" x2="12" y2="23" />
                <line x1="8" y1="23" x2="16" y2="23" />
              </svg>
              Start Conversation
            </button>
          ) : (
            /* Mic button + auto-flow toggle */
            <>
              <MicButton
                state={micState}
                onClick={handleMicToggle}
                disabled={conversation.isEnded}
              />

              {/* Auto-flow toggle */}
              {!conversation.isEnded && (
                <button
                  onClick={handleToggleAutoFlow}
                  className={`mt-1 px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
                    autoFlow
                      ? 'bg-blue-50 text-blue-600 hover:bg-blue-100'
                      : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                  }`}
                >
                  {autoFlow ? (
                    <span className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                      Auto Mode On — Tap to Pause
                    </span>
                  ) : (
                    'Resume Auto Mode'
                  )}
                </button>
              )}
            </>
          )}

          {/* Status text */}
          <p className="text-xs text-gray-400">
            {getStatusText()}
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes speaking-dot {
          0%,
          80%,
          100% {
            transform: scale(0.6);
            opacity: 0.4;
          }
          40% {
            transform: scale(1.2);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}
