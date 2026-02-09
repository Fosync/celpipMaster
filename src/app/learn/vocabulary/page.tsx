import { vocabularySets } from '@/lib/data/vocabulary';
import { VocabSetGrid } from '@/components/learning/vocab-set-grid';

export default function VocabularyPage() {
  // Serialize set data for client component (without full word objects)
  const setsData = vocabularySets.map((set) => ({
    id: set.id,
    title: set.title,
    description: set.description,
    clbLevel: set.clbLevel,
    icon: set.icon,
    wordCount: set.words.length,
    wordIds: set.words.map((w) => w.id),
  }));

  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
      <VocabSetGrid sets={setsData} backHref="/dashboard" title="Vocabulary Builder" basePath="/learn/vocabulary" />
    </div>
  );
}
