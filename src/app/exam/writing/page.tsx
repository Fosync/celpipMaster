import Link from 'next/link';

export default function WritingPractice() {
  return (
    <div className="mx-auto max-w-4xl py-8 text-center">
      <div className="rounded-3xl border border-gray-200 bg-white p-12 shadow-lg">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-50 text-4xl">
          ✍️
        </div>
        <h1 className="text-2xl font-bold text-gray-900">Writing Practice</h1>
        <p className="mt-2 text-gray-500">This module is coming soon. Stay tuned!</p>
        <Link
          href="/dashboard"
          className="mt-6 inline-block rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 font-semibold text-white shadow-lg shadow-blue-500/25 transition-all hover:shadow-xl"
        >
          Back to Dashboard
        </Link>
      </div>
    </div>
  );
}
