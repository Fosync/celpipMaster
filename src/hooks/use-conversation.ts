'use client';

import { useState, useCallback, useRef, useEffect } from 'react';

export interface ConversationMessage {
  id: string;
  role: 'ai' | 'user';
  text: string;
  correction?: { original: string; corrected: string; tip: string } | null;
  feedback?: string;
  newVocabulary?: string[];
}

interface AIResponse {
  correction: { original: string; corrected: string; tip: string } | null;
  feedback: string;
  next_line: string;
  turn_number: number;
  should_end: boolean;
  new_vocabulary: string[];
}

interface UseConversationOptions {
  scenarioContext: string;
  openingLine: string;
  maxTurns: number;
  onSpeak?: (text: string) => void;
}

interface UseConversationReturn {
  messages: ConversationMessage[];
  turnNumber: number;
  isLoading: boolean;
  isEnded: boolean;
  allCorrections: { original: string; corrected: string; tip: string }[];
  allVocabulary: string[];
  error: string | null;
  sendMessage: (transcript: string) => Promise<void>;
  endConversation: () => void;
  reset: () => void;
}

let messageIdCounter = 0;
function genId(): string {
  return `msg-${Date.now()}-${++messageIdCounter}`;
}

export function useConversation(options: UseConversationOptions): UseConversationReturn {
  const { scenarioContext, openingLine, maxTurns, onSpeak } = options;

  const [messages, setMessages] = useState<ConversationMessage[]>([]);
  const [turnNumber, setTurnNumber] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [isEnded, setIsEnded] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const allCorrectionsRef = useRef<{ original: string; corrected: string; tip: string }[]>([]);
  const allVocabularyRef = useRef<string[]>([]);
  const [allCorrections, setAllCorrections] = useState<{ original: string; corrected: string; tip: string }[]>([]);
  const [allVocabulary, setAllVocabulary] = useState<string[]>([]);

  // Add opening message on mount only
  const hasInitialized = useRef(false);
  const onSpeakRef = useRef(onSpeak);
  onSpeakRef.current = onSpeak;

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (!hasInitialized.current && openingLine) {
      hasInitialized.current = true;
      const aiMsg: ConversationMessage = {
        id: genId(),
        role: 'ai',
        text: openingLine,
      };
      setMessages([aiMsg]);

      // Speak the opening line
      if (onSpeakRef.current) {
        setTimeout(() => onSpeakRef.current?.(openingLine), 500);
      }
    }
  }, [openingLine]);

  const sendMessage = useCallback(
    async (transcript: string) => {
      if (isEnded || isLoading || !transcript.trim()) return;

      setError(null);
      const currentTurn = turnNumber + 1;
      setTurnNumber(currentTurn);

      // Add user message
      const userMsg: ConversationMessage = {
        id: genId(),
        role: 'user',
        text: transcript.trim(),
      };
      setMessages((prev) => [...prev, userMsg]);
      setIsLoading(true);

      try {
        // Build history for API
        const history = messages.map((m) => ({
          role: m.role,
          text: m.text,
        }));
        history.push({ role: 'user', text: transcript.trim() });

        const response = await fetch('/api/conversation', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            scenarioContext,
            conversationHistory: history,
            userTranscript: transcript.trim(),
            turnNumber: currentTurn,
          }),
        });

        if (!response.ok) {
          const data = await response.json();
          throw new Error(data.error || 'Failed to get AI response');
        }

        const data: AIResponse = await response.json();

        // Update the user message with correction if any
        if (data.correction) {
          setMessages((prev) =>
            prev.map((m) =>
              m.id === userMsg.id
                ? { ...m, correction: data.correction, feedback: data.feedback }
                : m
            )
          );
          allCorrectionsRef.current = [...allCorrectionsRef.current, data.correction];
          setAllCorrections([...allCorrectionsRef.current]);
        }

        // Track new vocabulary
        if (data.new_vocabulary && data.new_vocabulary.length > 0) {
          allVocabularyRef.current = [
            ...allVocabularyRef.current,
            ...data.new_vocabulary.filter(
              (v) => !allVocabularyRef.current.includes(v)
            ),
          ];
          setAllVocabulary([...allVocabularyRef.current]);
        }

        // Add AI response message
        const aiMsg: ConversationMessage = {
          id: genId(),
          role: 'ai',
          text: data.next_line,
          newVocabulary: data.new_vocabulary?.length ? data.new_vocabulary : undefined,
        };
        setMessages((prev) => [...prev, aiMsg]);

        // Speak AI response
        if (onSpeakRef.current) {
          onSpeakRef.current(data.next_line);
        }

        // Check if conversation should end
        if (data.should_end || currentTurn >= maxTurns) {
          setIsEnded(true);
        }
      } catch (err) {
        const message =
          err instanceof Error ? err.message : 'Failed to get AI response';
        setError(message);
      } finally {
        setIsLoading(false);
      }
    },
    [isEnded, isLoading, turnNumber, messages, scenarioContext, maxTurns]
  );

  const endConversation = useCallback(() => {
    setIsEnded(true);
  }, []);

  const reset = useCallback(() => {
    hasInitialized.current = false;
    setMessages([]);
    setTurnNumber(0);
    setIsLoading(false);
    setIsEnded(false);
    setError(null);
    allCorrectionsRef.current = [];
    allVocabularyRef.current = [];
    setAllCorrections([]);
    setAllVocabulary([]);

    // Re-initialize with opening line
    setTimeout(() => {
      hasInitialized.current = true;
      const aiMsg: ConversationMessage = {
        id: genId(),
        role: 'ai',
        text: openingLine,
      };
      setMessages([aiMsg]);
      if (onSpeakRef.current) {
        setTimeout(() => onSpeakRef.current?.(openingLine), 500);
      }
    }, 100);
  }, [openingLine]);

  return {
    messages,
    turnNumber,
    isLoading,
    isEnded,
    allCorrections,
    allVocabulary,
    error,
    sendMessage,
    endConversation,
    reset,
  };
}
