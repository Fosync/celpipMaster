'use client';

import { useEffect, useState } from 'react';

interface SetCompleteAnimationProps {
  stars: 0 | 1 | 2 | 3;
}

export function SetCompleteAnimation({ stars }: SetCompleteAnimationProps) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (!visible || stars === 0) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 flex items-center justify-center">
      <div className="animate-bounce text-center">
        <div className="text-7xl">
          {stars === 3 ? '🌟' : stars === 2 ? '⭐' : '🎉'}
        </div>
        <p className="mt-2 text-2xl font-bold text-purple-600">
          {stars === 3 ? 'Perfect!' : stars === 2 ? 'Amazing!' : 'Set Complete!'}
        </p>
        <div className="mt-1 flex justify-center gap-1 text-3xl">
          {[1, 2, 3].map((n) => (
            <span key={n} className={n <= stars ? 'opacity-100' : 'opacity-20'}>
              ⭐
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
