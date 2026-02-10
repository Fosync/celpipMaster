import { notFound } from 'next/navigation';
import { allIdiomSets, allIdiomWords } from '@/lib/data/idioms';
import { IdiomEngine } from '@/components/learning/idiom-engine';

interface PageProps {
  params: Promise<{ setId: string }>;
}

export function generateStaticParams() {
  return allIdiomSets.map((set) => ({ setId: set.id }));
}

export default async function IdiomSetPage({ params }: PageProps) {
  const { setId } = await params;
  const idiomSet = allIdiomSets.find((s) => s.id === setId);

  if (!idiomSet) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
      <IdiomEngine
        idioms={idiomSet.words}
        allIdioms={allIdiomWords}
        setId={idiomSet.id}
        setTitle={idiomSet.title}
        clbLevel={idiomSet.clbLevel}
        backHref="/learn/idioms"
      />
    </div>
  );
}
