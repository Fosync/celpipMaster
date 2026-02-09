import { notFound } from 'next/navigation';
import { idiomSets } from '@/lib/data/idioms';
import { QuizEngine } from '@/components/learning/quiz-engine';
import type { LearningItem } from '@/types/learning';

interface PageProps {
  params: Promise<{ setId: string }>;
}

export function generateStaticParams() {
  return idiomSets.map((set) => ({ setId: set.id }));
}

export default async function IdiomSetPage({ params }: PageProps) {
  const { setId } = await params;
  const idiomSet = idiomSets.find((s) => s.id === setId);

  if (!idiomSet) {
    notFound();
  }

  // Map IdiomWord[] to LearningItem[]
  const items: LearningItem[] = idiomSet.words.map((w) => ({
    id: w.id,
    term: w.idiom,
    definition: w.meaning,
    example: w.example,
    turkishMeaning: w.turkishMeaning,
    clbLevel: w.clbLevel,
    category: w.category,
  }));

  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
      <QuizEngine
        items={items}
        setId={idiomSet.id}
        setTitle={idiomSet.title}
        clbLevel={idiomSet.clbLevel}
        backHref="/learn/idioms"
      />
    </div>
  );
}
