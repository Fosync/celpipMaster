'use client';

interface SpeakTimerProps {
  seconds: number;
  totalSeconds: number;
}

export default function SpeakTimer({ seconds, totalSeconds }: SpeakTimerProps) {
  const progress = totalSeconds > 0 ? seconds / totalSeconds : 0;

  // Format as MM:SS
  const minutes = Math.floor(seconds / 60);
  const secs = seconds % 60;
  const timeDisplay = `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;

  // Color based on remaining time ratio
  const getBarColor = (): string => {
    if (progress > 0.5) return '#22c55e'; // green
    if (progress > 0.25) return '#eab308'; // yellow
    return '#ef4444'; // red
  };

  const getTextColor = (): string => {
    if (progress > 0.5) return 'text-green-600';
    if (progress > 0.25) return 'text-yellow-600';
    return 'text-red-600';
  };

  const barColor = getBarColor();

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-1.5">
        <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">
          Time Remaining
        </span>
        <span className={`text-sm font-bold tabular-nums ${getTextColor()}`}>
          {timeDisplay}
        </span>
      </div>
      <div className="w-full h-2.5 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full"
          style={{
            width: `${progress * 100}%`,
            backgroundColor: barColor,
            transition: 'width 0.5s ease, background-color 0.5s ease',
          }}
        />
      </div>
    </div>
  );
}
