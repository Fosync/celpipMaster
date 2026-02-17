import { notFound } from 'next/navigation';
import { patternSets } from '@/lib/data/patterns';
import { patternSynonymMap } from '@/lib/data/patterns/synonyms';
import { QuizEngine } from '@/components/learning/quiz-engine';
import type { LearningItem } from '@/types/learning';

interface PageProps {
  params: Promise<{ setId: string }>;
}

export function generateStaticParams() {
  return patternSets.map((s) => ({ setId: s.id }));
}

export default async function PatternSetPage({ params }: PageProps) {
  const { setId } = await params;
  const set = patternSets.find((s) => s.id === setId);

  if (!set) {
    notFound();
  }

  const items: LearningItem[] = set.words.map((w) => ({
    ...w,
    synonyms: w.synonyms || patternSynonymMap[w.id],
  }));

  return (
    <QuizEngine
      items={items}
      setId={set.id}
      setTitle={set.title}
      clbLevel={set.clbLevel}
      backHref="/learn/patterns"
    />
  );
}
