import { allIdiomSets } from '@/lib/data/idioms';
import { VocabSetGrid } from '@/components/learning/vocab-set-grid';

export default function IdiomsPage() {
  const setsData = allIdiomSets.map((set) => ({
    id: set.id,
    title: set.title,
    description: set.description,
    clbLevel: set.clbLevel,
    icon: set.icon,
    wordCount: set.words.length,
    wordIds: set.words.map((w) => w.id),
  }));

  return (
    <div className="mx-auto max-w-4xl">
      <VocabSetGrid sets={setsData} backHref="/dashboard" title="Idioms & Phrases" basePath="/learn/idioms" />
    </div>
  );
}
