import Link from "next/link";

const features = [
  {
    icon: "🤖",
    title: "AI Tutor",
    description:
      "Get instant, personalized feedback on your writing and speaking from advanced AI models.",
    gradient: "from-blue-500 to-indigo-500",
    bg: "bg-blue-50",
  },
  {
    icon: "🎯",
    title: "Smart Practice",
    description:
      "Adaptive exercises that focus on your weak areas using spaced repetition technology.",
    gradient: "from-purple-500 to-pink-500",
    bg: "bg-purple-50",
  },
  {
    icon: "📊",
    title: "Track Progress",
    description:
      "Visual dashboards showing your improvement across all CELPIP sections over time.",
    gradient: "from-emerald-500 to-teal-500",
    bg: "bg-emerald-50",
  },
  {
    icon: "📝",
    title: "Exam Simulation",
    description:
      "Full-length CELPIP mock exams with realistic timing, format, and AI-powered scoring.",
    gradient: "from-orange-500 to-red-500",
    bg: "bg-orange-50",
  },
];

const steps = [
  {
    number: "01",
    title: "Test",
    description: "Take a quick placement test to discover your current CELPIP level and weak spots.",
    icon: "🧪",
  },
  {
    number: "02",
    title: "Learn",
    description: "Follow personalized lessons in vocabulary, grammar, reading, writing, and speaking.",
    icon: "📚",
  },
  {
    number: "03",
    title: "Pass",
    description: "Practice with full exam simulations until you're confident and ready to ace CELPIP.",
    icon: "🏆",
  },
];

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Get started with basic features",
    features: [
      "Basic vocabulary lessons",
      "Limited grammar exercises",
      "1 practice test per month",
      "Progress tracking",
    ],
    cta: "Start Free",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$19",
    period: "/month",
    description: "Everything you need to pass CELPIP",
    features: [
      "Unlimited lessons & exercises",
      "AI writing feedback",
      "AI voice speaking practice",
      "Unlimited mock exams",
      "Detailed analytics",
      "Priority support",
    ],
    cta: "Start Pro Trial",
    highlighted: true,
  },
  {
    name: "Lifetime",
    price: "$149",
    period: "one-time",
    description: "Pay once, access forever",
    features: [
      "Everything in Pro",
      "Lifetime access",
      "All future updates",
      "Exclusive study materials",
      "1-on-1 AI coaching sessions",
      "Certificate of completion",
    ],
    cta: "Get Lifetime",
    highlighted: false,
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 z-50 w-full border-b border-gray-100 bg-white/80 backdrop-blur-lg">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6">
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 text-lg font-bold text-white shadow-lg shadow-blue-500/25">
              C
            </div>
            <span className="text-xl font-bold text-gray-900">
              Celpip<span className="text-blue-600">Master</span>
            </span>
          </div>
          <div className="hidden items-center gap-8 md:flex">
            <a href="#features" className="text-sm font-medium text-gray-600 transition-colors hover:text-blue-600">
              Features
            </a>
            <a href="#how-it-works" className="text-sm font-medium text-gray-600 transition-colors hover:text-blue-600">
              How it Works
            </a>
            <a href="#pricing" className="text-sm font-medium text-gray-600 transition-colors hover:text-blue-600">
              Pricing
            </a>
          </div>
          <div className="flex items-center gap-3">
            <Link
              href="/login"
              className="hidden text-sm font-semibold text-gray-700 transition-colors hover:text-blue-600 sm:block"
            >
              Log in
            </Link>
            <Link
              href="/signup"
              className="rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/25 transition-all hover:shadow-xl hover:shadow-blue-500/30"
            >
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-32">
        {/* Background decoration */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-gradient-to-br from-blue-400/20 to-purple-400/20 blur-3xl" />
          <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-gradient-to-br from-purple-400/20 to-pink-400/20 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6">
          {/* Badge */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-500" />
            </span>
            AI-Powered CELPIP Preparation
          </div>

          {/* Heading */}
          <h1 className="mx-auto max-w-4xl text-5xl font-extrabold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl">
            Master CELPIP{" "}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              with AI
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-600 sm:text-xl">
            The smartest way to prepare for your CELPIP General exam. Practice all 4 sections
            with AI-powered feedback, adaptive learning, and realistic exam simulations.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/signup"
              className="group flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 text-lg font-semibold text-white shadow-xl shadow-blue-500/25 transition-all hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-blue-500/30 sm:w-auto"
            >
              Start Learning Free
              <svg className="h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link
              href="/exam/reading"
              className="flex w-full items-center justify-center gap-2 rounded-full border-2 border-gray-200 bg-white px-8 py-4 text-lg font-semibold text-gray-700 transition-all hover:-translate-y-0.5 hover:border-blue-300 hover:text-blue-600 sm:w-auto"
            >
              Try Practice Exam
            </Link>
          </div>

          {/* Stats */}
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-3 gap-8">
            {[
              { value: "4", label: "Exam Sections" },
              { value: "AI", label: "Powered Feedback" },
              { value: "24/7", label: "Practice Anytime" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl font-bold text-gray-900 sm:text-4xl">{stat.value}</div>
                <div className="mt-1 text-sm text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Section pills */}
          <div className="mt-12 flex flex-wrap justify-center gap-3">
            {[
              { icon: "🎧", label: "Listening", color: "bg-purple-100 text-purple-700 border-purple-200" },
              { icon: "📖", label: "Reading", color: "bg-green-100 text-green-700 border-green-200" },
              { icon: "✍️", label: "Writing", color: "bg-amber-100 text-amber-700 border-amber-200" },
              { icon: "🎤", label: "Speaking", color: "bg-rose-100 text-rose-700 border-rose-200" },
            ].map((section) => (
              <span
                key={section.label}
                className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold ${section.color}`}
              >
                <span>{section.icon}</span>
                {section.label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-gray-50 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-blue-600">
              Features
            </span>
            <h2 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">
              Everything you need to{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                ace CELPIP
              </span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              Our platform combines cutting-edge AI with proven language learning methods
              to give you the best CELPIP preparation experience.
            </p>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-8 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-gray-200/50"
              >
                <div className={`mb-5 inline-flex h-14 w-14 items-center justify-center rounded-xl ${feature.bg} text-2xl`}>
                  {feature.icon}
                </div>
                <h3 className="mb-2 text-lg font-bold text-gray-900">{feature.title}</h3>
                <p className="text-sm leading-relaxed text-gray-600">{feature.description}</p>
                <div className={`absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r ${feature.gradient} opacity-0 transition-opacity group-hover:opacity-100`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-purple-600">
              How It Works
            </span>
            <h2 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">
              Three steps to{" "}
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                CELPIP success
              </span>
            </h2>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-3">
            {steps.map((step, index) => (
              <div key={step.title} className="relative text-center">
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="absolute top-12 right-0 hidden h-0.5 w-full translate-x-1/2 bg-gradient-to-r from-blue-200 to-purple-200 sm:block" />
                )}

                <div className="relative mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 text-4xl shadow-lg shadow-blue-100/50">
                  {step.icon}
                  <span className="absolute -top-2 -right-2 flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-xs font-bold text-white">
                    {step.number}
                  </span>
                </div>

                <h3 className="mb-2 text-xl font-bold text-gray-900">{step.title}</h3>
                <p className="mx-auto max-w-xs text-sm leading-relaxed text-gray-600">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="bg-gray-50 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-blue-600">
              Pricing
            </span>
            <h2 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">
              Choose your{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                learning plan
              </span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-gray-600">
              Start free and upgrade when you&apos;re ready. No hidden fees.
            </p>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-3">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative flex flex-col rounded-2xl border p-8 transition-all hover:-translate-y-1 ${
                  plan.highlighted
                    ? "border-blue-500 bg-white shadow-2xl shadow-blue-500/10"
                    : "border-gray-200 bg-white hover:shadow-xl hover:shadow-gray-200/50"
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-1 text-xs font-bold text-white">
                    Most Popular
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-lg font-bold text-gray-900">{plan.name}</h3>
                  <p className="mt-1 text-sm text-gray-500">{plan.description}</p>
                </div>

                <div className="mb-6">
                  <span className="text-4xl font-extrabold text-gray-900">{plan.price}</span>
                  <span className="ml-1 text-sm text-gray-500">{plan.period}</span>
                </div>

                <ul className="mb-8 flex-1 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm text-gray-600">
                      <svg className="mt-0.5 h-5 w-5 shrink-0 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/signup"
                  className={`w-full rounded-full py-3 text-center text-sm font-semibold transition-all ${
                    plan.highlighted
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30"
                      : "border-2 border-gray-200 text-gray-700 hover:border-blue-300 hover:text-blue-600"
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 px-8 py-16 text-center shadow-2xl shadow-blue-500/25 sm:px-16">
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
              <div className="absolute -top-20 -left-20 h-60 w-60 rounded-full bg-white/10 blur-2xl" />
              <div className="absolute -bottom-20 -right-20 h-60 w-60 rounded-full bg-white/10 blur-2xl" />
            </div>

            <div className="relative">
              <h2 className="text-3xl font-bold text-white sm:text-4xl">
                Ready to master CELPIP?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-lg text-blue-100">
                Join thousands of learners who improved their CELPIP scores with AI-powered practice.
              </p>
              <Link
                href="/signup"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-lg font-semibold text-blue-600 shadow-xl transition-all hover:-translate-y-0.5 hover:shadow-2xl"
              >
                Get Started for Free
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 bg-white py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-8 sm:grid-cols-4">
            {/* Brand */}
            <div className="sm:col-span-1">
              <div className="flex items-center gap-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 text-sm font-bold text-white">
                  C
                </div>
                <span className="text-lg font-bold text-gray-900">
                  Celpip<span className="text-blue-600">Master</span>
                </span>
              </div>
              <p className="mt-3 text-sm text-gray-500">
                AI-powered CELPIP exam preparation for guaranteed success.
              </p>
            </div>

            {/* Learn */}
            <div>
              <h4 className="mb-4 text-sm font-semibold text-gray-900">Learn</h4>
              <ul className="space-y-2">
                {["Vocabulary", "Grammar", "Patterns", "Reading"].map((item) => (
                  <li key={item}>
                    <Link
                      href={`/learn/${item.toLowerCase()}`}
                      className="text-sm text-gray-500 transition-colors hover:text-blue-600"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Exam */}
            <div>
              <h4 className="mb-4 text-sm font-semibold text-gray-900">Exam Practice</h4>
              <ul className="space-y-2">
                {["Listening", "Reading", "Writing", "Speaking"].map((item) => (
                  <li key={item}>
                    <Link
                      href={`/exam/${item.toLowerCase()}`}
                      className="text-sm text-gray-500 transition-colors hover:text-blue-600"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="mb-4 text-sm font-semibold text-gray-900">Company</h4>
              <ul className="space-y-2">
                {["About", "Privacy Policy", "Terms of Service", "Contact"].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-sm text-gray-500 transition-colors hover:text-blue-600">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-gray-100 pt-8 sm:flex-row">
            <p className="text-sm text-gray-400">
              &copy; {new Date().getFullYear()} CelpipMaster. All rights reserved.
            </p>
            <p className="text-sm text-gray-400">
              Powered by AI &mdash; Built for CELPIP General success
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
