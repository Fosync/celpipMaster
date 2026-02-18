'use client';

import { useState, useCallback, useRef, useEffect } from 'react';

export interface ConversationMessage {
  id: string;
  role: 'ai' | 'user';
  text: string;
  correction?: { original: string; corrected: string; tip: string } | null;
  feedback?: string;
  newVocabulary?: string[];
  mood?: string;
}

interface AIResponse {
  correction: { original: string; corrected: string; tip: string } | null;
  feedback: string;
  next_line: string;
  turn_number: number;
  should_end: boolean;
  new_vocabulary: string[];
  mood?: string;
  good_phrases?: string[] | null;
  follow_up_topic?: string | null;
}

interface UseConversationOptions {
  scenarioContext: string;
  openingLine: string;
  maxTurns: number;
  difficulty?: string;
  onSpeak?: (text: string, mood?: string) => void;
}

interface UseConversationReturn {
  messages: ConversationMessage[];
  turnNumber: number;
  isLoading: boolean;
  isEnded: boolean;
  allCorrections: { original: string; corrected: string; tip: string }[];
  allVocabulary: string[];
  allGoodPhrases: string[];
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
  const { scenarioContext, openingLine, maxTurns, difficulty, onSpeak } = options;

  const [messages, setMessages] = useState<ConversationMessage[]>([]);
  const [turnNumber, setTurnNumber] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [isEnded, setIsEnded] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const allCorrectionsRef = useRef<{ original: string; corrected: string; tip: string }[]>([]);
  const allVocabularyRef = useRef<string[]>([]);
  const allGoodPhrasesRef = useRef<string[]>([]);
  const [allCorrections, setAllCorrections] = useState<{ original: string; corrected: string; tip: string }[]>([]);
  const [allVocabulary, setAllVocabulary] = useState<string[]>([]);
  const [allGoodPhrases, setAllGoodPhrases] = useState<string[]>([]);

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
        mood: 'happy',
      };
      setMessages([aiMsg]);

      // Speak the opening line
      if (onSpeakRef.current) {
        setTimeout(() => onSpeakRef.current?.(openingLine, 'happy'), 500);
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
            difficulty,
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

        // Track good phrases
        if (data.good_phrases && data.good_phrases.length > 0) {
          allGoodPhrasesRef.current = [
            ...allGoodPhrasesRef.current,
            ...data.good_phrases.filter(
              (p) => !allGoodPhrasesRef.current.includes(p)
            ),
          ];
          setAllGoodPhrases([...allGoodPhrasesRef.current]);
        }

        // Add AI response message
        const aiMsg: ConversationMessage = {
          id: genId(),
          role: 'ai',
          text: data.next_line,
          newVocabulary: data.new_vocabulary?.length ? data.new_vocabulary : undefined,
          mood: data.mood || 'happy',
        };
        setMessages((prev) => [...prev, aiMsg]);

        // Speak AI response with mood
        if (onSpeakRef.current) {
          onSpeakRef.current(data.next_line, data.mood);
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
    [isEnded, isLoading, turnNumber, messages, scenarioContext, maxTurns, difficulty]
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
    allGoodPhrasesRef.current = [];
    setAllCorrections([]);
    setAllVocabulary([]);
    setAllGoodPhrases([]);

    // Re-initialize with opening line
    setTimeout(() => {
      hasInitialized.current = true;
      const aiMsg: ConversationMessage = {
        id: genId(),
        role: 'ai',
        text: openingLine,
        mood: 'happy',
      };
      setMessages([aiMsg]);
      if (onSpeakRef.current) {
        setTimeout(() => onSpeakRef.current?.(openingLine, 'happy'), 500);
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
    allGoodPhrases,
    error,
    sendMessage,
    endConversation,
    reset,
  };
}
