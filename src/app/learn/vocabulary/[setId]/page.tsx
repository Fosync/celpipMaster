import { notFound } from 'next/navigation';
import { vocabularySets } from '@/lib/data/vocabulary';
import { synonymMap } from '@/lib/data/vocabulary/synonyms';
import { QuizEngine } from '@/components/learning/quiz-engine';
import type { LearningItem } from '@/types/learning';

interface PageProps {
  params: Promise<{ setId: string }>;
}

export function generateStaticParams() {
  return vocabularySets.map((set) => ({ setId: set.id }));
}

// Build a global pool of all vocabulary words for diverse distractors
function buildDistractorPool(excludeSetId: string): LearningItem[] {
  const pool: LearningItem[] = [];
  for (const set of vocabularySets) {
    if (set.id === excludeSetId) continue;
    for (const w of set.words) {
      pool.push({
        id: w.id,
        term: w.word,
        definition: w.definition,
        example: w.example,
        turkishMeaning: w.turkishMeaning,
        partOfSpeech: w.partOfSpeech,
        clbLevel: w.clbLevel,
        category: w.category,
        emoji: w.emoji,
      });
    }
  }
  return pool;
}

export default async function VocabSetPage({ params }: PageProps) {
  const { setId } = await params;
  const vocabSet = vocabularySets.find((s) => s.id === setId);

  if (!vocabSet) {
    notFound();
  }

  const items: LearningItem[] = vocabSet.words.map((w) => ({
    id: w.id,
    term: w.word,
    definition: w.definition,
    example: w.example,
    turkishMeaning: w.turkishMeaning,
    partOfSpeech: w.partOfSpeech,
    clbLevel: w.clbLevel,
    category: w.category,
    emoji: w.emoji,
    synonyms: w.synonyms || synonymMap[w.word.toLowerCase()],
  }));

  // Get words from OTHER sets for diverse distractors
  const distractorPool = buildDistractorPool(vocabSet.id);

  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
      <QuizEngine
        items={items}
        distractorPool={distractorPool}
        setId={vocabSet.id}
        setTitle={vocabSet.title}
        clbLevel={vocabSet.clbLevel}
        backHref="/learn/vocabulary"
      />
    </div>
  );
}
