import Link from 'next/link';
import { createClient } from '@/lib/supabase/server';
import type { Profile } from '@/types';

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

const quickAccessCards = [
  {
    title: 'Vocabulary',
    description: 'Learn new words and build your CELPIP vocabulary',
    href: '/learn/vocabulary',
    icon: '📚',
    color: 'bg-blue-50 border-blue-200 hover:border-blue-400',
    iconBg: 'bg-blue-100',
  },
  {
    title: 'Grammar',
    description: 'Master grammar rules for better scores',
    href: '/learn/grammar',
    icon: '✏️',
    color: 'bg-purple-50 border-purple-200 hover:border-purple-400',
    iconBg: 'bg-purple-100',
  },
  {
    title: 'Reading',
    description: 'Practice reading comprehension passages',
    href: '/learn/reading',
    icon: '📖',
    color: 'bg-green-50 border-green-200 hover:border-green-400',
    iconBg: 'bg-green-100',
  },
  {
    title: 'Writing',
    description: 'Get AI feedback on emails and surveys',
    href: '/exam/writing',
    icon: '✍️',
    color: 'bg-amber-50 border-amber-200 hover:border-amber-400',
    iconBg: 'bg-amber-100',
  },
  {
    title: 'Speaking',
    description: 'Practice speaking with AI voice coach',
    href: '/speaking',
    icon: '🎤',
    color: 'bg-rose-50 border-rose-200 hover:border-rose-400',
    iconBg: 'bg-rose-100',
  },
  {
    title: 'Mock Exam',
    description: 'Take a full CELPIP practice test',
    href: '/exam',
    icon: '📝',
    color: 'bg-indigo-50 border-indigo-200 hover:border-indigo-400',
    iconBg: 'bg-indigo-100',
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

      {/* Quick Access */}
      <div>
        <h2 className="mb-4 text-lg font-semibold text-gray-900">Quick Access</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {quickAccessCards.map((card) => (
            <Link
              key={card.href}
              href={card.href}
              className={`group flex items-start gap-4 rounded-2xl border p-5 transition-all hover:-translate-y-0.5 hover:shadow-md ${card.color}`}
            >
              <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-2xl ${card.iconBg}`}>
                {card.icon}
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">{card.title}</h3>
                <p className="mt-0.5 text-sm text-gray-500">{card.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
