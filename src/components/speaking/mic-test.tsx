'use client';

import { useState } from 'react';

export default function MicTest() {
  const [status, setStatus] = useState<'idle' | 'testing' | 'success' | 'error'>('idle');
  const [error, setError] = useState<string>('');
  const [permissionState, setPermissionState] = useState<string>('');

  const testMicrophone = async () => {
    setStatus('testing');
    setError('');
    setPermissionState('');

    try {
      // Check if browser supports microphone
      if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        throw new Error('Your browser does not support microphone access. Please use Chrome, Edge, or Safari.');
      }

      // Check permission state if supported
      if (navigator.permissions && navigator.permissions.query) {
        try {
          const result = await navigator.permissions.query({ name: 'microphone' as PermissionName });
          setPermissionState(result.state);

          if (result.state === 'denied') {
            throw new Error('Microphone access is blocked. Please enable it in your browser settings.');
          }
        } catch (err) {
          // Permission API might not support microphone query in some browsers
          console.log('Permission query not supported:', err);
        }
      }

      // Request microphone access
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: {
          echoCancellation: true,
          noiseSuppression: true,
        },
      });

      // Success! Stop the stream
      stream.getTracks().forEach(track => track.stop());
      setStatus('success');

    } catch (err) {
      setStatus('error');

      if (err instanceof Error) {
        if (err.name === 'NotAllowedError' || err.name === 'PermissionDeniedError') {
          setError('Microphone access denied. Please click "Allow" when your browser asks for microphone permission.');
        } else if (err.name === 'NotFoundError' || err.name === 'DevicesNotFoundError') {
          setError('No microphone found. Please connect a microphone and try again.');
        } else if (err.name === 'NotReadableError' || err.name === 'TrackStartError') {
          setError('Microphone is being used by another application. Please close other apps and try again.');
        } else if (err.name === 'SecurityError') {
          setError('Microphone access blocked for security reasons. Make sure you are using HTTPS.');
        } else {
          setError(err.message || 'Failed to access microphone');
        }
      } else {
        setError('Failed to access microphone');
      }
    }
  };

  return (
    <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
      <div className="flex items-start gap-3">
        <span className="text-gray-500 flex-shrink-0 mt-0.5">
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
            <rect x="9" y="1" width="6" height="12" rx="3" />
            <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
            <line x1="12" y1="19" x2="12" y2="23" />
            <line x1="8" y1="23" x2="16" y2="23" />
          </svg>
        </span>
        <div className="flex-1">
          <h3 className="text-sm font-semibold text-gray-700 mb-2">Test Your Microphone</h3>
          <p className="text-xs text-gray-600 mb-3">
            Make sure your microphone works before starting a speaking task.
          </p>

          <button
            onClick={testMicrophone}
            disabled={status === 'testing'}
            className="px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-lg hover:bg-blue-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status === 'testing' ? 'Testing...' : 'Test Microphone'}
          </button>

          {/* Permission State */}
          {permissionState && status === 'testing' && (
            <div className="mt-3 text-xs text-gray-600">
              Permission state: <span className="font-mono">{permissionState}</span>
            </div>
          )}

          {/* Success Message */}
          {status === 'success' && (
            <div className="mt-3 flex items-start gap-2 bg-green-50 border border-green-100 rounded-lg p-3">
              <svg className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <div className="text-xs text-green-700">
                <p className="font-semibold">Microphone working!</p>
                <p className="mt-0.5">You can now start speaking tasks.</p>
              </div>
            </div>
          )}

          {/* Error Message */}
          {status === 'error' && error && (
            <div className="mt-3 flex items-start gap-2 bg-red-50 border border-red-100 rounded-lg p-3">
              <svg className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <line x1="15" y1="9" x2="9" y2="15" />
                <line x1="9" y1="9" x2="15" y2="15" />
              </svg>
              <div className="text-xs text-red-700">
                <p className="font-semibold">Microphone Error</p>
                <p className="mt-0.5">{error}</p>
                {error.includes('denied') && (
                  <div className="mt-2 pt-2 border-t border-red-200">
                    <p className="font-semibold mb-1">How to fix:</p>
                    <ol className="list-decimal list-inside space-y-0.5 ml-1">
                      <li>Click the <span className="font-mono">🔒</span> or <span className="font-mono">🛈</span> icon in your browser&apos;s address bar</li>
                      <li>Find &quot;Microphone&quot; in the permissions list</li>
                      <li>Select &quot;Allow&quot; or &quot;Ask&quot;</li>
                      <li>Refresh the page and test again</li>
                    </ol>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
