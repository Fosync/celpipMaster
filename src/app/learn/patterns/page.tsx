import { patternSets } from '@/lib/data/patterns';
import { VocabSetGrid } from '@/components/learning/vocab-set-grid';

export const metadata = {
  title: 'Pattern Sentences | CelpipMaster',
  description: 'Learn useful sentence patterns for CELPIP writing and speaking.',
};

export default function PatternsPage() {
  const setsData = patternSets.map((set) => ({
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
      <VocabSetGrid sets={setsData} backHref="/dashboard" title="Pattern Sentences" basePath="/learn/patterns" />
    </div>
  );
}
