'use client';

import { useState, useEffect, useCallback } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { conversationScenarios, freeChat } from '@/lib/data/speaking';
import type { ConversationScenario } from '@/lib/data/speaking';
import { useSpeechRecognition } from '@/hooks/use-speech-recognition';
import { useConversation } from '@/hooks/use-conversation';
import ConversationView from '@/components/speaking/practice/conversation-view';
import ConversationSummary from '@/components/speaking/practice/conversation-summary';
import EndConversationButton from '@/components/speaking/practice/end-conversation-button';
import MicButton from '@/components/speaking/mic-button';

export default function ConversationPage() {
  const params = useParams();
  const scenarioId = params.scenarioId as string;

  const [scenario, setScenario] = useState<ConversationScenario | null>(null);
  const [showSummary, setShowSummary] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);

  // Find scenario
  useEffect(() => {
    if (scenarioId === 'free-chat') {
      setScenario(freeChat);
    } else {
      const found = conversationScenarios.find((s) => s.id === scenarioId);
      if (found) setScenario(found);
    }
  }, [scenarioId]);

  // TTS function
  const speak = useCallback((text: string) => {
    if (typeof window === 'undefined' || !window.speechSynthesis) return;

    // Cancel any ongoing speech
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    utterance.rate = 0.9;
    utterance.pitch = 1;

    // Try to find a good English voice
    const voices = window.speechSynthesis.getVoices();
    const englishVoice = voices.find(
      (v) =>
        v.lang.startsWith('en') &&
        (v.name.includes('Google') || v.name.includes('Samantha') || v.name.includes('Daniel'))
    ) || voices.find((v) => v.lang.startsWith('en-'));
    if (englishVoice) utterance.voice = englishVoice;

    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);

    window.speechSynthesis.speak(utterance);
  }, []);

  // Conversation hook
  const conversation = useConversation({
    scenarioContext: scenario?.systemContext ?? '',
    openingLine: scenario?.openingLine ?? '',
    maxTurns: scenario?.maxTurns ?? 10,
    onSpeak: speak,
  });

  // Speech recognition
  const speechRecognition = useSpeechRecognition();

  // Show summary when conversation ends
  useEffect(() => {
    if (conversation.isEnded && !showSummary) {
      // Small delay to let the last message appear
      const timer = setTimeout(() => setShowSummary(true), 1500);
      return () => clearTimeout(timer);
    }
  }, [conversation.isEnded, showSummary]);

  // Handle mic toggle
  const handleMicToggle = useCallback(() => {
    if (speechRecognition.isListening) {
      // Stop recording and send message
      speechRecognition.stop();
      const transcript = speechRecognition.transcript;
      if (transcript.trim()) {
        conversation.sendMessage(transcript);
      }
      speechRecognition.reset();
    } else {
      // Stop TTS if playing
      if (typeof window !== 'undefined') {
        window.speechSynthesis.cancel();
        setIsSpeaking(false);
      }
      // Start recording
      speechRecognition.start();
    }
  }, [speechRecognition, conversation]);

  // Handle end conversation
  const handleEnd = useCallback(() => {
    speechRecognition.stop();
    speechRecognition.reset();
    if (typeof window !== 'undefined') {
      window.speechSynthesis.cancel();
    }
    conversation.endConversation();
  }, [speechRecognition, conversation]);

  // Handle try again
  const handleTryAgain = useCallback(() => {
    setShowSummary(false);
    speechRecognition.reset();
    if (typeof window !== 'undefined') {
      window.speechSynthesis.cancel();
    }
    conversation.reset();
  }, [speechRecognition, conversation]);

  // Speak message handler for chat bubbles
  const handleSpeakMessage = useCallback(
    (text: string) => {
      speak(text);
    },
    [speak]
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
          scenarioTitle={scenario.title}
          onTryAgain={handleTryAgain}
          onBackToScenarios={() => {}}
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
            </p>
          </div>
        </div>
        <EndConversationButton onEnd={handleEnd} />
      </div>

      {/* Chat Area */}
      <div className="flex-1 overflow-hidden">
        <ConversationView
          messages={conversation.messages}
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
        {isSpeaking && (
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
            <span className="text-xs text-blue-500 font-medium">AI is speaking...</span>
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

        {/* Mic button */}
        <div className="flex flex-col items-center gap-2">
          <MicButton
            state={micState}
            onClick={handleMicToggle}
            disabled={conversation.isEnded}
          />
          <p className="text-xs text-gray-400">
            {conversation.isEnded
              ? 'Conversation ended'
              : micState === 'recording'
              ? 'Tap to send'
              : micState === 'processing'
              ? 'AI is thinking...'
              : 'Tap to speak'}
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
