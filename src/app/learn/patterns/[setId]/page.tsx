import { notFound } from 'next/navigation';
import { patternSets } from '@/lib/data/patterns';
import { QuizEngine } from '@/components/learning/quiz-engine';

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

  return (
    <QuizEngine
      items={set.words}
      setId={set.id}
      setTitle={set.title}
      clbLevel={set.clbLevel}
      backHref="/learn/patterns"
    />
  );
}
