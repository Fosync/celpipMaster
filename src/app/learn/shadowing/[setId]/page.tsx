import { notFound } from 'next/navigation';
import { shadowingSets } from '@/lib/data/shadowing';
import { ShadowPlayer } from '@/components/shadowing/shadow-player';

interface PageProps {
  params: Promise<{ setId: string }>;
}

export function generateStaticParams() {
  return shadowingSets.map((s) => ({ setId: s.id }));
}

export default async function ShadowingSetPage({ params }: PageProps) {
  const { setId } = await params;
  const set = shadowingSets.find((s) => s.id === setId);

  if (!set) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
      <ShadowPlayer set={set} backHref="/learn/shadowing" />
    </div>
  );
}
