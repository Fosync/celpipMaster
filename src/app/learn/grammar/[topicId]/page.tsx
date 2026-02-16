import { notFound } from 'next/navigation';
import { grammarTopics } from '@/lib/data/grammar';
import { GrammarQuizEngine } from '@/components/learning/grammar-quiz-engine';

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

  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
      <GrammarQuizEngine
        items={topic.words}
        setId={topic.id}
        setTitle={topic.title}
        clbLevel={topic.clbLevel}
        backHref="/learn/grammar"
        topicTips={{
          commonMistakes: topic.commonMistakes,
          writingTip: topic.writingTip,
          speakingTip: topic.speakingTip,
        }}
      />
    </div>
  );
}
