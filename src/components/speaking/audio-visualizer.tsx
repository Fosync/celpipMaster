'use client';

interface AudioVisualizerProps {
  isActive: boolean;
}

export default function AudioVisualizer({ isActive }: AudioVisualizerProps) {
  const barCount = 12;
  const bars = Array.from({ length: barCount }, (_, i) => i);

  // Generate pseudo-random delays and durations for each bar
  const getBarStyle = (index: number): React.CSSProperties => {
    if (!isActive) {
      return {
        height: '4px',
        backgroundColor: '#d1d5db',
        transition: 'height 0.3s ease, background-color 0.3s ease',
      };
    }

    const delay = (index * 0.08) % 0.6;
    const duration = 0.4 + (index % 3) * 0.15;

    return {
      backgroundColor: '#3b82f6',
      animation: `visualizer-bar ${duration}s ease-in-out ${delay}s infinite alternate`,
      transition: 'background-color 0.3s ease',
    };
  };

  return (
    <div className="flex items-end justify-center gap-[3px] h-12 px-4">
      {bars.map((i) => (
        <div
          key={i}
          className="w-[3px] rounded-full"
          style={getBarStyle(i)}
        />
      ))}

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes visualizer-bar {
          0% { height: 6px; }
          25% { height: 24px; }
          50% { height: 12px; }
          75% { height: 36px; }
          100% { height: 18px; }
        }
      `}} />
    </div>
  );
}
