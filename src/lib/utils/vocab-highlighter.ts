import type { VocabWord } from '@/lib/data/vocabulary/types';

export interface TextSegment {
  text: string;
  vocabWord: VocabWord | null;
}

/**
 * Finds vocabulary words in a text and returns segments for rendering.
 * Case-insensitive matching, whole word only.
 */
export function highlightVocabInText(
  text: string,
  vocabWords: VocabWord[]
): TextSegment[] {
  if (!vocabWords.length) return [{ text, vocabWord: null }];

  // Build a map of lowercase word -> VocabWord (longer words first for greedy matching)
  const sortedWords = [...vocabWords].sort(
    (a, b) => b.word.length - a.word.length
  );

  // Create a regex that matches any vocabulary word (whole word, case-insensitive)
  const escapedWords = sortedWords.map((w) =>
    w.word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  );
  const pattern = new RegExp(`\\b(${escapedWords.join('|')})\\b`, 'gi');

  const wordMap = new Map<string, VocabWord>();
  for (const w of sortedWords) {
    wordMap.set(w.word.toLowerCase(), w);
  }

  const segments: TextSegment[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = pattern.exec(text)) !== null) {
    // Add text before this match
    if (match.index > lastIndex) {
      segments.push({ text: text.slice(lastIndex, match.index), vocabWord: null });
    }

    const matchedText = match[0];
    const vocabWord = wordMap.get(matchedText.toLowerCase()) ?? null;
    segments.push({ text: matchedText, vocabWord });

    lastIndex = match.index + matchedText.length;
  }

  // Add remaining text
  if (lastIndex < text.length) {
    segments.push({ text: text.slice(lastIndex), vocabWord: null });
  }

  return segments;
}
