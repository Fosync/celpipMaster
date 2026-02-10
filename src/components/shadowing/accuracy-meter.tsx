'use client';

interface AccuracyMeterProps {
  accuracy: number;
  passed: boolean;
}

export function AccuracyMeter({ accuracy, passed }: AccuracyMeterProps) {
  const color = passed
    ? 'text-green-400'
    : accuracy >= 70
      ? 'text-yellow-400'
      : 'text-red-400';

  const bgRing = passed
    ? 'stroke-green-400'
    : accuracy >= 70
      ? 'stroke-yellow-400'
      : 'stroke-red-400';

  const circumference = 2 * Math.PI * 40;
  const dashOffset = circumference - (accuracy / 100) * circumference;

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="relative h-24 w-24">
        <svg className="h-24 w-24 -rotate-90" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r="40"
            fill="none"
            strokeWidth="8"
            className="stroke-gray-700"
          />
          <circle
            cx="50"
            cy="50"
            r="40"
            fill="none"
            strokeWidth="8"
            strokeLinecap="round"
            className={`transition-all duration-700 ${bgRing}`}
            style={{
              strokeDasharray: circumference,
              strokeDashoffset: dashOffset,
            }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className={`text-2xl font-bold ${color}`}>{accuracy}%</span>
        </div>
      </div>
      <span className={`text-sm font-medium ${color}`}>
        {passed ? 'Passed!' : accuracy >= 70 ? 'Almost there' : 'Try again'}
      </span>
    </div>
  );
}
