import { listeningScripts } from '@/lib/data/listening';
import { ListeningSetGrid } from '@/components/learning/listening-set-grid';

export const metadata = {
  title: 'Listening Practice | CelpipMaster',
  description: 'Practice CELPIP-style listening comprehension with audio scripts and questions.',
};

export default function ListeningPage() {
  const scriptsData = listeningScripts.map((s) => ({
    id: s.id,
    title: s.title,
    description: s.description,
    format: s.format,
    clbLevel: s.clbLevel,
    icon: s.icon,
    questionCount: s.questions.length,
    timeLimit: s.timeLimit,
  }));

  return <ListeningSetGrid scripts={scriptsData} backHref="/dashboard" />;
}
