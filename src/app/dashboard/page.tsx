import Link from 'next/link';
import { createClient } from '@/lib/supabase/server';
import type { Profile } from '@/types';
import { ContinueLearning } from '@/components/dashboard/continue-learning';

const demoProfile: Profile = {
  id: 'demo',
  full_name: 'Demo Learner',
  avatar_url: null,
  current_clb_level: 5,
  target_clb_level: 7,
  native_language: 'Turkish',
  streak_days: 3,
  longest_streak: 7,
  total_xp: 250,
  daily_xp_goal: 50,
  last_active_date: null,
  placement_completed: false,
  onboarding_completed: false,
  subscription_tier: 'free',
  created_at: null,
  updated_at: null,
};

const learnCards = [
  {
    title: 'Vocabulary',
    description: 'Learn new words and build your CELPIP vocabulary',
    href: '/learn/vocabulary',
    icon: '📚',
    gradient: 'from-blue-500 to-blue-600',
    lightBg: 'bg-blue-50',
  },
  {
    title: 'Idioms',
    description: 'Master common English idioms and expressions',
    href: '/learn/idioms',
    icon: '💬',
    gradient: 'from-teal-500 to-teal-600',
    lightBg: 'bg-teal-50',
  },
  {
    title: 'Grammar',
    description: 'Master grammar rules for better scores',
    href: '/learn/grammar',
    icon: '✏️',
    gradient: 'from-purple-500 to-purple-600',
    lightBg: 'bg-purple-50',
  },
  {
    title: 'Reading',
    description: 'Practice reading comprehension passages',
    href: '/learn/reading',
    icon: '📖',
    gradient: 'from-green-500 to-emerald-600',
    lightBg: 'bg-green-50',
  },
  {
    title: 'Writing',
    description: 'Practice emails and survey responses',
    href: '/learn/writing',
    icon: '✍️',
    gradient: 'from-amber-500 to-orange-600',
    lightBg: 'bg-amber-50',
  },
  {
    title: 'Listening',
    description: 'Improve listening with audio scripts',
    href: '/learn/listening',
    icon: '🎧',
    gradient: 'from-cyan-500 to-blue-600',
    lightBg: 'bg-cyan-50',
  },
  {
    title: 'Patterns',
    description: 'Learn sentence patterns for writing & speaking',
    href: '/learn/patterns',
    icon: '🧩',
    gradient: 'from-pink-500 to-rose-600',
    lightBg: 'bg-pink-50',
  },
];

const examCards = [
  {
    title: 'Speaking Practice',
    description: 'Practice speaking with AI voice coach',
    href: '/speaking',
    icon: '🎤',
    gradient: 'from-rose-500 to-pink-600',
    lightBg: 'bg-rose-50',
  },
  {
    title: 'Mock Exam',
    description: 'Take a full CELPIP practice test',
    href: '/exam',
    icon: '📝',
    gradient: 'from-indigo-500 to-violet-600',
    lightBg: 'bg-indigo-50',
  },
];

export default async function DashboardPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  let profile: Profile = demoProfile;
  let xpEarned = 15;

  if (user) {
    const { data } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', user.id)
      .single();
    if (data) profile = data as Profile;

    const today = new Date().toISOString().split('T')[0];
    const { data: dailyProgress } = await supabase
      .from('daily_progress')
      .select('xp_earned')
      .eq('user_id', user.id)
      .eq('progress_date', today)
      .single();

    xpEarned = dailyProgress?.xp_earned ?? 0;
  }

  const dailyGoal = profile.daily_xp_goal ?? 50;
  const progressPct = Math.min(100, Math.round((xpEarned / dailyGoal) * 100));

  return (
    <div className="space-y-8">
      {/* Welcome */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
          Welcome back, {profile.full_name || 'Learner'}!
        </h1>
        <p className="mt-1 text-gray-500">
          Keep up the great work. Here&apos;s your progress today.
        </p>
      </div>

      {/* Stats row */}
      <div className="grid gap-4 sm:grid-cols-3">
        {/* Daily XP Progress */}
        <div className="rounded-2xl border border-gray-200 bg-white p-5">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-gray-500">Daily Goal</span>
            <span className="text-sm font-semibold text-blue-600">
              {xpEarned}/{dailyGoal} XP
            </span>
          </div>
          <div className="mt-3 h-3 overflow-hidden rounded-full bg-gray-100">
            <div
              className="h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all"
              style={{ width: `${progressPct}%` }}
            />
          </div>
          <p className="mt-2 text-xs text-gray-400">
            {progressPct >= 100
              ? 'Goal reached! Amazing!'
              : `${dailyGoal - xpEarned} XP to go`}
          </p>
        </div>

        {/* Streak */}
        <div className="rounded-2xl border border-gray-200 bg-white p-5">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-gray-500">Streak</span>
            <span className="text-2xl">🔥</span>
          </div>
          <p className="mt-1 text-3xl font-bold text-gray-900">
            {profile.streak_days || 0}
            <span className="ml-1 text-sm font-normal text-gray-400">days</span>
          </p>
          <p className="mt-1 text-xs text-gray-400">
            Best: {profile.longest_streak || 0} days
          </p>
        </div>

        {/* Level */}
        <div className="rounded-2xl border border-gray-200 bg-white p-5">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-gray-500">CLB Level</span>
            <span className="text-2xl">🎯</span>
          </div>
          <p className="mt-1 text-3xl font-bold text-gray-900">
            {profile.current_clb_level || 1}
            <span className="ml-1 text-sm font-normal text-gray-400">
              / target {profile.target_clb_level || 7}
            </span>
          </p>
          <p className="mt-1 text-xs text-gray-400">
            {profile.total_xp || 0} total XP earned
          </p>
        </div>
      </div>

      {/* Continue Learning (client-side, reads localStorage mastery) */}
      <ContinueLearning />

      {/* Learn Section */}
      <div>
        <h2 className="mb-4 text-lg font-semibold text-gray-900">Learn</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {learnCards.map((card) => (
            <Link
              key={card.href}
              href={card.href}
              className="group flex items-start gap-4 rounded-2xl border border-gray-200 bg-white p-5 transition-all hover:-translate-y-0.5 hover:shadow-lg"
            >
              <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${card.gradient} text-2xl shadow-sm`}>
                {card.icon}
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 group-hover:text-blue-600">
                  {card.title}
                </h3>
                <p className="mt-0.5 text-sm text-gray-500">{card.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Practice & Exam Section */}
      <div>
        <h2 className="mb-4 text-lg font-semibold text-gray-900">Practice & Exam</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {examCards.map((card) => (
            <Link
              key={card.href}
              href={card.href}
              className="group flex items-start gap-4 rounded-2xl border border-gray-200 bg-white p-5 transition-all hover:-translate-y-0.5 hover:shadow-lg"
            >
              <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${card.gradient} text-2xl shadow-sm`}>
                {card.icon}
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 group-hover:text-blue-600">
                  {card.title}
                </h3>
                <p className="mt-0.5 text-sm text-gray-500">{card.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
