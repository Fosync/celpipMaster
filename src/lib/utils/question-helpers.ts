import type { LearningItem } from '@/types/learning';

export function shuffleArray<T>(arr: T[]): T[] {
  const shuffled = [...arr];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

/**
 * Generate smart distractors that are from DIFFERENT categories
 * and have SIMILAR word length to avoid obvious wrong answers.
 */
export function generateSmartDistractors(
  correct: LearningItem,
  allItems: LearningItem[],
  getValue: (item: LearningItem) => string,
  count: number = 3
): string[] {
  const correctVal = getValue(correct);

  // All items except the correct one
  const anyOther = allItems.filter((i) => i.id !== correct.id);

  // Score each candidate by how different it is from the correct answer
  const candidates = anyOther.map((item) => {
    const val = getValue(item);
    let score = 0;

    // Prefer different category (most important)
    if (item.category !== correct.category) score += 10;

    // Prefer different part of speech
    if (item.partOfSpeech !== correct.partOfSpeech) score += 5;

    // Prefer similar word length (within 3 chars)
    const lenDiff = Math.abs(val.length - correctVal.length);
    if (lenDiff <= 3) score += 3;
    if (lenDiff <= 6) score += 1;

    // Small random factor
    score += Math.random() * 2;

    return { item, val, score };
  });

  // Sort by score descending
  candidates.sort((a, b) => b.score - a.score);

  // Pick top candidates, ensuring unique values
  const picked: string[] = [];
  const seenCategories = new Set<string>();

  for (const c of candidates) {
    if (picked.length >= count) break;
    if (c.val === correctVal) continue;
    if (picked.includes(c.val)) continue;

    // Try to get distractors from diverse categories
    if (seenCategories.size < count && seenCategories.has(c.item.category)) {
      // Skip if we already have one from this category (unless we need more)
      const remaining = candidates.filter(
        (x) => !picked.includes(x.val) && x.val !== correctVal && !seenCategories.has(x.item.category)
      );
      if (remaining.length > 0) continue;
    }

    picked.push(c.val);
    seenCategories.add(c.item.category);
  }

  // If we still need more, fill from any available
  if (picked.length < count) {
    for (const c of candidates) {
      if (picked.length >= count) break;
      if (c.val === correctVal || picked.includes(c.val)) continue;
      picked.push(c.val);
    }
  }

  return shuffleArray([correctVal, ...picked]);
}

/**
 * Generate options for multiple choice (backward compatible wrapper)
 */
export function generateOptionsFromItems(
  correct: LearningItem,
  allItems: LearningItem[],
  getValue: (item: LearningItem) => string
): string[] {
  return generateSmartDistractors(correct, allItems, getValue, 3);
}

/**
 * Create a blank sentence from an example by replacing the target word
 */
export function createBlankSentence(example: string, term: string): string | null {
  const escaped = term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const regex = new RegExp(`\\b${escaped}\\b`, 'gi');
  if (regex.test(example)) {
    return example.replace(regex, '______');
  }
  // Try case-insensitive partial match for conjugated forms
  const lower = term.toLowerCase();
  const words = example.split(/\s+/);
  for (const w of words) {
    const clean = w.replace(/[.,!?;:'"()]/g, '');
    if (clean.toLowerCase().startsWith(lower.slice(0, Math.min(4, lower.length)))) {
      return example.replace(w, '______');
    }
  }
  return null;
}

/**
 * Split a sentence into words for sentence-build questions.
 * Preserves punctuation attached to words.
 */
export function splitSentenceForBuild(sentence: string): string[] {
  return sentence.split(/\s+/).filter(Boolean);
}

/**
 * Get a typing hint: show first and last letter, rest as underscores
 */
export function getTypingHint(word: string): string {
  if (word.length <= 2) return word;
  const first = word[0];
  const last = word[word.length - 1];
  const middle = '_'.repeat(word.length - 2);
  return `${first}${middle}${last}`;
}

/**
 * Reveal one more letter in the typing hint
 */
export function revealHintLetter(word: string, currentHint: string): string {
  const chars = currentHint.split('');
  const hiddenIndices: number[] = [];
  for (let i = 0; i < chars.length; i++) {
    if (chars[i] === '_') hiddenIndices.push(i);
  }
  if (hiddenIndices.length === 0) return currentHint;
  const revealIdx = hiddenIndices[Math.floor(Math.random() * hiddenIndices.length)];
  chars[revealIdx] = word[revealIdx];
  return chars.join('');
}

/**
 * Category-based emoji mapping for words that don't have explicit emoji
 */
const CATEGORY_EMOJI_MAP: Record<string, string> = {
  'Greetings': '\u{1F44B}',
  'Family': '\u{1F46A}',
  'Food': '\u{1F354}',
  'Work': '\u{1F4BC}',
  'Workplace': '\u{1F3E2}',
  'Health': '\u{1FA7A}',
  'Travel': '\u{2708}\u{FE0F}',
  'Shopping': '\u{1F6D2}',
  'Home': '\u{1F3E0}',
  'School': '\u{1F393}',
  'Education': '\u{1F4DA}',
  'Weather': '\u{2600}\u{FE0F}',
  'Sports': '\u{26BD}',
  'Technology': '\u{1F4BB}',
  'Money': '\u{1F4B0}',
  'Time': '\u{23F0}',
  'Emotions': '\u{1F60A}',
  'Clothing': '\u{1F455}',
  'Transportation': '\u{1F697}',
  'Nature': '\u{1F333}',
  'Animals': '\u{1F436}',
  'Colors': '\u{1F308}',
  'Numbers': '\u{1F522}',
  'Body': '\u{1F4AA}',
  'Daily Life': '\u{2615}',
  'Communication': '\u{1F4AC}',
};

export function getEmojiForItem(item: LearningItem): string {
  if (item.emoji) return item.emoji;
  return CATEGORY_EMOJI_MAP[item.category] || '\u{1F4D6}';
}
