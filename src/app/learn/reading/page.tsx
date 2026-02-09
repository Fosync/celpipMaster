import { readingPassages } from '@/lib/data/reading';
import { ReadingSetGrid } from '@/components/learning/reading-set-grid';

export default function ReadingPage() {
  const passagesData = readingPassages.map((p) => ({
    id: p.id,
    title: p.title,
    description: p.description,
    passageType: p.passageType,
    clbLevel: p.clbLevel,
    icon: p.icon,
    questionCount: p.questions.length,
    timeLimit: p.timeLimit,
  }));

  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
      <ReadingSetGrid passages={passagesData} backHref="/dashboard" />
    </div>
  );
}
