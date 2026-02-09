import type { LearningItem } from '@/types/learning';

export function shuffleArray<T>(arr: T[]): T[] {
  const shuffled = [...arr];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export function generateDistractors(
  correctValue: string,
  pool: string[],
  count: number
): string[] {
  const others = pool.filter((v) => v !== correctValue);
  const picked = shuffleArray(others).slice(0, count);
  return shuffleArray([correctValue, ...picked]);
}

export function generateOptionsFromItems(
  correct: LearningItem,
  allItems: LearningItem[],
  getValue: (item: LearningItem) => string
): string[] {
  const correctVal = getValue(correct);
  const pool = allItems.filter((i) => i.id !== correct.id).map(getValue);
  return generateDistractors(correctVal, pool, 3);
}

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
