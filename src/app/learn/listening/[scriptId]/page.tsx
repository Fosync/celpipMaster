import { notFound } from 'next/navigation';
import { listeningScripts } from '@/lib/data/listening';
import { ListeningEngine } from '@/components/learning/listening-engine';

interface PageProps {
  params: Promise<{ scriptId: string }>;
}

export function generateStaticParams() {
  return listeningScripts.map((s) => ({ scriptId: s.id }));
}

export default async function ListeningScriptPage({ params }: PageProps) {
  const { scriptId } = await params;
  const script = listeningScripts.find((s) => s.id === scriptId);

  if (!script) {
    notFound();
  }

  return <ListeningEngine script={script} backHref="/learn/listening" />;
}
