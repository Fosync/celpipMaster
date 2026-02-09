import { writingPrompts } from '@/lib/data/writing';
import { WritingSetGrid } from '@/components/learning/writing-set-grid';

export default function WritingPage() {
  const promptsData = writingPrompts.map((p) => ({
    id: p.id,
    title: p.title,
    description: p.description,
    taskType: p.taskType,
    clbLevel: p.clbLevel,
    icon: p.icon,
    timeLimit: p.timeLimit,
    minWords: p.minWords,
    maxWords: p.maxWords,
  }));

  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
      <WritingSetGrid prompts={promptsData} backHref="/dashboard" />
    </div>
  );
}
