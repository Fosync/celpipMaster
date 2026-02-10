import { notFound } from 'next/navigation';
import { listeningScripts } from '@/lib/data/listening';
import { vocabularySets } from '@/lib/data/vocabulary';
import type { VocabWord } from '@/lib/data/vocabulary/types';
import { ListeningEngine } from '@/components/learning/listening-engine';

interface PageProps {
  params: Promise<{ scriptId: string }>;
}

export function generateStaticParams() {
  return listeningScripts.map((s) => ({ scriptId: s.id }));
}

/** Find vocabulary words that appear in the listening script segments. */
function findVocabInScript(segments: { text: string }[], clbLevel: number): VocabWord[] {
  const allWords = vocabularySets.flatMap((s) => s.words);
  const fullText = segments.map((s) => s.text).join(' ').toLowerCase();

  return allWords.filter((w) => {
    if (w.clbLevel > clbLevel + 1) return false;
    const escaped = w.word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const re = new RegExp(`\\b${escaped}\\b`, 'i');
    return re.test(fullText);
  });
}

export default async function ListeningScriptPage({ params }: PageProps) {
  const { scriptId } = await params;
  const script = listeningScripts.find((s) => s.id === scriptId);

  if (!script) {
    notFound();
  }

  const vocabWords = findVocabInScript(script.segments, script.clbLevel);

  return <ListeningEngine script={script} backHref="/learn/listening" vocabWords={vocabWords} />;
}
