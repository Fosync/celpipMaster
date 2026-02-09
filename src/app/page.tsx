export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-blue-50 to-white dark:from-gray-950 dark:to-gray-900">
      <main className="flex flex-col items-center gap-8 px-6 text-center">
        <div className="flex items-center gap-3">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 text-2xl font-bold text-white">
            C
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
            CelpipMaster
          </h1>
        </div>

        <p className="max-w-md text-lg text-gray-600 dark:text-gray-400">
          AI-powered CELPIP exam preparation. Master all four sections with
          personalized learning and real exam simulations.
        </p>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {[
            { icon: "🎧", label: "Listening", color: "bg-purple-100 text-purple-700" },
            { icon: "📖", label: "Reading", color: "bg-green-100 text-green-700" },
            { icon: "✍️", label: "Writing", color: "bg-orange-100 text-orange-700" },
            { icon: "🎤", label: "Speaking", color: "bg-red-100 text-red-700" },
          ].map((section) => (
            <div
              key={section.label}
              className={`flex flex-col items-center gap-2 rounded-xl p-4 ${section.color}`}
            >
              <span className="text-2xl">{section.icon}</span>
              <span className="text-sm font-semibold">{section.label}</span>
            </div>
          ))}
        </div>

        <div className="mt-4 flex gap-4">
          <a
            href="/learn/vocabulary"
            className="rounded-full bg-blue-600 px-8 py-3 font-semibold text-white transition-colors hover:bg-blue-700"
          >
            Start Learning
          </a>
          <a
            href="/exam/reading"
            className="rounded-full border-2 border-blue-600 px-8 py-3 font-semibold text-blue-600 transition-colors hover:bg-blue-50 dark:hover:bg-blue-950"
          >
            Practice Exam
          </a>
        </div>

        <p className="mt-8 text-sm text-gray-400">
          Powered by AI — Built for CELPIP General success
        </p>
      </main>
    </div>
  );
}
