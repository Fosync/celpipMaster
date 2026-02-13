'use client';

import { useEffect } from 'react';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // If the error is from a stale deployment (old cached JS),
    // force a full page reload to get fresh bundles
    if (
      error.message?.includes('Server Action') ||
      error.message?.includes('Failed to find') ||
      error.message?.includes('older or newer deployment')
    ) {
      window.location.reload();
      return;
    }
  }, [error]);

  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center p-8">
      <h2 className="mb-4 text-xl font-bold text-gray-900">Something went wrong</h2>
      <button
        onClick={() => reset()}
        className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
      >
        Try again
      </button>
    </div>
  );
}
