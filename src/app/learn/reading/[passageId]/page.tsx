import { notFound } from 'next/navigation';
import { readingPassages } from '@/lib/data/reading';
import { vocabularySets } from '@/lib/data/vocabulary';
import type { VocabWord } from '@/lib/data/vocabulary/types';
import { ReadingEngine } from '@/components/learning/reading-engine';

interface PageProps {
  params: Promise<{ passageId: string }>;
}

export function generateStaticParams() {
  return readingPassages.map((p) => ({ passageId: p.id }));
}

/** Find vocabulary words that appear in the passage text (whole-word, case-insensitive). */
function findVocabInPassage(passageText: string, clbLevel: number): VocabWord[] {
  const allWords = vocabularySets.flatMap((s) => s.words);
  const textLower = passageText.toLowerCase();

  return allWords.filter((w) => {
    // Only include words at or below the passage CLB level (+1 for slight stretch)
    if (w.clbLevel > clbLevel + 1) return false;
    const escaped = w.word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const re = new RegExp(`\\b${escaped}\\b`, 'i');
    return re.test(textLower);
  });
}

export default async function ReadingPassagePage({ params }: PageProps) {
  const { passageId } = await params;
  const passage = readingPassages.find((p) => p.id === passageId);

  if (!passage) {
    notFound();
  }

  const vocabWords = findVocabInPassage(passage.passage, passage.clbLevel);

  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
      <ReadingEngine passage={passage} backHref="/learn/reading" vocabWords={vocabWords} />
    </div>
  );
}
