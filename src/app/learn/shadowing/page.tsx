import { shadowingSets } from '@/lib/data/shadowing';
import { VocabSetGrid } from '@/components/learning/vocab-set-grid';

export default function ShadowingPage() {
  const setsData = shadowingSets.map((set) => ({
    id: set.id,
    title: set.title,
    description: set.description,
    clbLevel: set.clbLevel,
    icon: set.icon,
    wordCount: set.sentences.length,
    wordIds: set.sentences.map((s) => s.id),
  }));

  return (
    <div className="mx-auto max-w-4xl">
      <VocabSetGrid
        sets={setsData}
        backHref="/dashboard"
        title="Shadowing Practice"
        basePath="/learn/shadowing"
      />
    </div>
  );
}
