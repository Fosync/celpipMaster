'use client';

import { useState, useEffect, useRef } from 'react';

interface EndConversationButtonProps {
  onEnd: () => void;
}

export default function EndConversationButton({
  onEnd,
}: EndConversationButtonProps) {
  const [showConfirm, setShowConfirm] = useState(false);
  const popoverRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!showConfirm) return;

    function handleClickOutside(event: MouseEvent) {
      if (
        popoverRef.current &&
        !popoverRef.current.contains(event.target as Node)
      ) {
        setShowConfirm(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [showConfirm]);

  return (
    <div className="relative" ref={popoverRef}>
      <button
        onClick={() => setShowConfirm(true)}
        className="text-sm text-gray-500 hover:text-red-500 transition-colors"
      >
        End Conversation
      </button>

      {showConfirm && (
        <div className="absolute right-0 top-full mt-2 w-56 bg-white rounded-xl border border-gray-200 shadow-lg p-4 z-50">
          <p className="text-sm text-gray-700 mb-3">
            End this conversation?
          </p>
          <div className="flex gap-2">
            <button
              onClick={() => setShowConfirm(false)}
              className="flex-1 px-3 py-1.5 text-xs font-medium rounded-lg border border-gray-200 text-gray-600 bg-white hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={() => {
                setShowConfirm(false);
                onEnd();
              }}
              className="flex-1 px-3 py-1.5 text-xs font-medium rounded-lg bg-red-500 text-white hover:bg-red-600 transition-colors"
            >
              Yes, end
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
