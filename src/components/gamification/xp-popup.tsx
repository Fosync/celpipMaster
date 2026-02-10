'use client';
import { useState, useEffect, useCallback } from 'react';

interface XPPopupEvent {
  amount: number;
  reason: string;
}

let showPopupFn: ((event: XPPopupEvent) => void) | null = null;

export function triggerXPPopup(amount: number, reason: string) {
  showPopupFn?.({ amount, reason });
}

export function XPPopup() {
  const [event, setEvent] = useState<XPPopupEvent | null>(null);
  const [visible, setVisible] = useState(false);

  const show = useCallback((e: XPPopupEvent) => {
    setEvent(e);
    setVisible(true);
    setTimeout(() => setVisible(false), 2500);
    setTimeout(() => setEvent(null), 3000);
  }, []);

  useEffect(() => {
    showPopupFn = show;
    return () => { showPopupFn = null; };
  }, [show]);

  if (!event) return null;

  return (
    <div className={`fixed top-20 right-4 z-[60] transition-all duration-500 ${visible ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'}`}>
      <div className="flex items-center gap-2 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-600 px-5 py-3 text-white shadow-2xl shadow-purple-500/30">
        <span className="text-xl">⚡</span>
        <div>
          <p className="text-lg font-bold">+{event.amount} XP</p>
          <p className="text-xs text-purple-200">{event.reason}</p>
        </div>
      </div>
    </div>
  );
}
