'use client';

interface LevelBadgeProps {
  level: number;
  size?: 'sm' | 'md' | 'lg';
  showLabel?: boolean;
}

const levelConfig: Record<number, { gradient: string; label: string }> = {
  4: { gradient: 'from-gray-400 to-gray-500', label: 'Beginner' },
  5: { gradient: 'from-blue-400 to-blue-600', label: 'Intermediate' },
  6: { gradient: 'from-green-400 to-emerald-600', label: 'Upper Intermediate' },
  7: { gradient: 'from-purple-400 to-purple-600', label: 'Advanced' },
  8: { gradient: 'from-amber-400 to-yellow-500', label: 'Advanced' },
};

const sizeClasses: Record<string, { badge: string; text: string; label: string }> = {
  sm: { badge: 'h-8 w-8', text: 'text-[10px]', label: 'text-[10px]' },
  md: { badge: 'h-12 w-12', text: 'text-xs', label: 'text-xs' },
  lg: { badge: 'h-[72px] w-[72px]', text: 'text-base', label: 'text-sm' },
};

export function LevelBadge({ level, size = 'md', showLabel = false }: LevelBadgeProps) {
  const clampedLevel = Math.max(4, Math.min(8, level));
  const config = levelConfig[clampedLevel];
  const sizes = sizeClasses[size];

  return (
    <div className="flex flex-col items-center gap-1">
      <div
        className={`${sizes.badge} flex items-center justify-center rounded-full bg-gradient-to-br ${config.gradient} shadow-lg ring-2 ring-white`}
      >
        <span className={`${sizes.text} font-bold leading-none text-white`}>
          CLB {clampedLevel}
        </span>
      </div>
      {showLabel && (
        <span className={`${sizes.label} font-medium text-gray-500`}>
          {config.label}
        </span>
      )}
    </div>
  );
}
