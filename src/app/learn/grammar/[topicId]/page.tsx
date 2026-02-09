import { notFound } from 'next/navigation';
import { grammarTopics } from '@/lib/data/grammar';
import { QuizEngine } from '@/components/learning/quiz-engine';
import type { LearningItem } from '@/types/learning';

interface PageProps {
  params: Promise<{ topicId: string }>;
}

export function generateStaticParams() {
  return grammarTopics.map((topic) => ({ topicId: topic.id }));
}

export default async function GrammarTopicPage({ params }: PageProps) {
  const { topicId } = await params;
  const topic = grammarTopics.find((t) => t.id === topicId);

  if (!topic) {
    notFound();
  }

  // Map GrammarItem[] to LearningItem[]
  const items: LearningItem[] = topic.words.map((w) => ({
    id: w.id,
    term: w.rule,
    definition: w.explanation,
    example: w.example,
    turkishMeaning: w.turkishMeaning,
    clbLevel: w.clbLevel,
    category: w.category,
  }));

  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
      <QuizEngine
        items={items}
        setId={topic.id}
        setTitle={topic.title}
        clbLevel={topic.clbLevel}
        backHref="/learn/grammar"
      />
    </div>
  );
}
