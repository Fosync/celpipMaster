'use client';

interface CorrectionCardProps {
  original: string;
  corrected: string;
  tip: string;
}

function LightbulbIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 18h6" />
      <path d="M10 22h4" />
      <path d="M12 2a7 7 0 0 0-4 12.7V17h8v-2.3A7 7 0 0 0 12 2z" />
    </svg>
  );
}

export default function CorrectionCard({
  original,
  corrected,
  tip,
}: CorrectionCardProps) {
  return (
    <div className="bg-amber-50 border border-amber-200 rounded-xl px-4 py-3 space-y-2">
      <div className="flex items-start gap-2">
        <LightbulbIcon className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
        <div className="space-y-1 min-w-0">
          <p className="text-sm leading-relaxed">
            <span className="text-red-500 line-through">{original}</span>
            <span className="mx-2 text-gray-400">&rarr;</span>
            <span className="text-green-600 font-medium">{corrected}</span>
          </p>
          <p className="text-xs text-gray-500 leading-relaxed">{tip}</p>
        </div>
      </div>
    </div>
  );
}
