import Link from 'next/link';

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen">
      {/* Left side - Form */}
      <div className="flex w-full flex-col justify-center px-6 sm:px-12 lg:w-1/2 lg:px-16">
        <div className="mx-auto w-full max-w-md">
          {/* Logo */}
          <Link href="/" className="mb-10 inline-flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 text-lg font-bold text-white shadow-lg shadow-blue-500/25">
              C
            </div>
            <span className="text-xl font-bold text-gray-900">
              Celpip<span className="text-blue-600">Master</span>
            </span>
          </Link>

          {children}
        </div>
      </div>

      {/* Right side - Decorative gradient panel */}
      <div className="relative hidden overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 lg:flex lg:w-1/2 lg:flex-col lg:items-center lg:justify-center lg:px-16">
        {/* Decorative blobs */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute top-1/2 left-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5 blur-2xl" />
        </div>

        <div className="relative text-center">
          {/* Big icon */}
          <div className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-3xl bg-white/10 text-5xl backdrop-blur-sm">
            🎓
          </div>

          <h2 className="text-3xl font-bold text-white">
            Your CELPIP journey<br />starts here
          </h2>

          <p className="mx-auto mt-4 max-w-sm text-lg text-blue-100">
            AI-powered preparation for all 4 CELPIP sections. Practice smarter, score higher.
          </p>

          {/* Stats */}
          <div className="mt-10 grid grid-cols-3 gap-6">
            {[
              { value: '4', label: 'Sections' },
              { value: 'AI', label: 'Feedback' },
              { value: '24/7', label: 'Access' },
            ].map((stat) => (
              <div key={stat.label} className="rounded-2xl bg-white/10 px-4 py-3 backdrop-blur-sm">
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-xs text-blue-200">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
