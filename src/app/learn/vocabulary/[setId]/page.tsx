import { notFound } from 'next/navigation';
import { vocabularySets } from '@/lib/data/vocabulary';
import { QuizEngine } from '@/components/learning/quiz-engine';
import type { LearningItem } from '@/types/learning';

interface PageProps {
  params: Promise<{ setId: string }>;
}

export function generateStaticParams() {
  return vocabularySets.map((set) => ({ setId: set.id }));
}

export default async function VocabSetPage({ params }: PageProps) {
  const { setId } = await params;
  const vocabSet = vocabularySets.find((s) => s.id === setId);

  if (!vocabSet) {
    notFound();
  }

  // Map VocabWord[] to LearningItem[]
  const items: LearningItem[] = vocabSet.words.map((w) => ({
    id: w.id,
    term: w.word,
    definition: w.definition,
    example: w.example,
    turkishMeaning: w.turkishMeaning,
    partOfSpeech: w.partOfSpeech,
    clbLevel: w.clbLevel,
    category: w.category,
  }));

  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
      <QuizEngine
        items={items}
        setId={vocabSet.id}
        setTitle={vocabSet.title}
        clbLevel={vocabSet.clbLevel}
        backHref="/learn/vocabulary"
      />
    </div>
  );
}
