'use client';

import { useCallback } from 'react';

interface MicButtonProps {
  state: 'idle' | 'recording' | 'processing';
  onClick: () => void;
  disabled?: boolean;
}

export default function MicButton({ state, onClick, disabled = false }: MicButtonProps) {
  const handleClick = useCallback(() => {
    if (!disabled) {
      onClick();
    }
  }, [disabled, onClick]);

  const baseSize = 'w-16 h-16 md:w-20 md:h-20';

  const stateStyles: Record<typeof state, string> = {
    idle: 'border-2 border-gray-400 bg-white hover:border-gray-500 hover:bg-gray-50',
    recording: 'border-0 bg-red-500 hover:bg-red-600',
    processing: 'border-0 bg-blue-500 cursor-wait',
  };

  const MicIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`w-7 h-7 md:w-8 md:h-8 ${state === 'recording' ? 'text-white' : 'text-gray-500'}`}
    >
      <rect x="9" y="1" width="6" height="12" rx="3" />
      <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
      <line x1="12" y1="19" x2="12" y2="23" />
      <line x1="8" y1="23" x2="16" y2="23" />
    </svg>
  );

  const SpinnerIcon = () => (
    <svg
      className="w-7 h-7 md:w-8 md:h-8 text-white"
      viewBox="0 0 24 24"
      fill="none"
      style={{ animation: 'mic-spin 1s linear infinite' }}
    >
      <circle
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth={3}
        strokeDasharray="31.4 31.4"
        strokeLinecap="round"
      />
    </svg>
  );

  return (
    <div className="relative flex items-center justify-center">
      {/* Pulse rings for recording state */}
      {state === 'recording' && (
        <>
          <span
            className="absolute rounded-full bg-red-400"
            style={{
              width: '100%',
              height: '100%',
              animation: 'mic-pulse-ring 1.5s ease-out infinite',
              opacity: 0,
            }}
          />
          <span
            className="absolute rounded-full bg-red-400"
            style={{
              width: '100%',
              height: '100%',
              animation: 'mic-pulse-ring 1.5s ease-out 0.4s infinite',
              opacity: 0,
            }}
          />
          <span
            className="absolute rounded-full bg-red-400"
            style={{
              width: '100%',
              height: '100%',
              animation: 'mic-pulse-ring 1.5s ease-out 0.8s infinite',
              opacity: 0,
            }}
          />
        </>
      )}

      {/* Subtle pulse for idle state */}
      {state === 'idle' && !disabled && (
        <span
          className="absolute rounded-full border-2 border-gray-300"
          style={{
            width: '100%',
            height: '100%',
            animation: 'mic-idle-pulse 2.5s ease-in-out infinite',
          }}
        />
      )}

      <button
        onClick={handleClick}
        disabled={disabled}
        className={`
          ${baseSize}
          rounded-full flex items-center justify-center
          transition-all duration-200 ease-in-out
          ${stateStyles[state]}
          ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
          relative z-10
        `}
        aria-label={
          state === 'idle'
            ? 'Start recording'
            : state === 'recording'
            ? 'Stop recording'
            : 'Processing...'
        }
      >
        {state === 'processing' ? <SpinnerIcon /> : <MicIcon />}
      </button>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes mic-pulse-ring {
          0% { transform: scale(1); opacity: 0.4; }
          100% { transform: scale(1.8); opacity: 0; }
        }
        @keyframes mic-idle-pulse {
          0%, 100% { transform: scale(1); opacity: 0.5; }
          50% { transform: scale(1.1); opacity: 0; }
        }
        @keyframes mic-spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}} />
    </div>
  );
}
