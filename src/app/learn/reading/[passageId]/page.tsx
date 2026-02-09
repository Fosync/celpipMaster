import { notFound } from 'next/navigation';
import { readingPassages } from '@/lib/data/reading';
import { ReadingEngine } from '@/components/learning/reading-engine';

interface PageProps {
  params: Promise<{ passageId: string }>;
}

export function generateStaticParams() {
  return readingPassages.map((p) => ({ passageId: p.id }));
}

export default async function ReadingPassagePage({ params }: PageProps) {
  const { passageId } = await params;
  const passage = readingPassages.find((p) => p.id === passageId);

  if (!passage) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
      <ReadingEngine passage={passage} backHref="/learn/reading" />
    </div>
  );
}
