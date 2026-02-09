import type { MasteryStatus } from '@/types/learning';

const statusConfig: Record<MasteryStatus, { color: string; label: string; emoji: string }> = {
  new: { color: 'bg-gray-100 text-gray-500', label: 'New', emoji: '⚪' },
  learning: { color: 'bg-yellow-100 text-yellow-700', label: 'Learning', emoji: '🟡' },
  learned: { color: 'bg-green-100 text-green-700', label: 'Learned', emoji: '🟢' },
  mastered: { color: 'bg-purple-100 text-purple-700', label: 'Mastered', emoji: '⭐' },
};

interface MasteryBadgeProps {
  status: MasteryStatus;
  compact?: boolean;
}

export function MasteryBadge({ status, compact }: MasteryBadgeProps) {
  const cfg = statusConfig[status];
  if (compact) {
    return <span title={cfg.label}>{cfg.emoji}</span>;
  }
  return (
    <span className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-medium ${cfg.color}`}>
      {cfg.emoji} {cfg.label}
    </span>
  );
}
