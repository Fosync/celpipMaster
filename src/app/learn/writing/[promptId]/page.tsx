import { notFound } from 'next/navigation';
import { writingPrompts } from '@/lib/data/writing';
import { WritingEngine } from '@/components/learning/writing-engine';

interface PageProps {
  params: Promise<{ promptId: string }>;
}

export function generateStaticParams() {
  return writingPrompts.map((p) => ({ promptId: p.id }));
}

export default async function WritingPromptPage({ params }: PageProps) {
  const { promptId } = await params;
  const prompt = writingPrompts.find((p) => p.id === promptId);

  if (!prompt) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
      <WritingEngine prompt={prompt} backHref="/learn/writing" />
    </div>
  );
}
