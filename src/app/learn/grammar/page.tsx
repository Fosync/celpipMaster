import { grammarTopics } from '@/lib/data/grammar';
import { VocabSetGrid } from '@/components/learning/vocab-set-grid';

export default function GrammarPage() {
  const setsData = grammarTopics.map((topic) => ({
    id: topic.id,
    title: topic.title,
    description: topic.description,
    clbLevel: topic.clbLevel,
    icon: topic.icon,
    wordCount: topic.words.length,
    wordIds: topic.words.map((w) => w.id),
  }));

  return (
    <div className="mx-auto max-w-4xl">
      <VocabSetGrid sets={setsData} backHref="/dashboard" title="Grammar Lessons" basePath="/learn/grammar" />
    </div>
  );
}
