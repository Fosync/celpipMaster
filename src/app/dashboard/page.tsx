import Link from 'next/link';
import { createClient } from '@/lib/supabase/server';
import type { Profile } from '@/types';
import { ContinueLearning } from '@/components/dashboard/continue-learning';
import { ProgressWidgets } from '@/components/dashboard/progress-widgets';
import { PlacementBanner } from '@/components/dashboard/placement-banner';

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

const learnModules = [
  { title: 'Vocabulary', href: '/learn/vocabulary', icon: '📚', desc: 'Build your word bank' },
  { title: 'Grammar', href: '/learn/grammar', icon: '✏️', desc: 'Master grammar rules' },
  { title: 'Idioms', href: '/learn/idioms', icon: '💬', desc: 'Learn expressions' },
  { title: 'Patterns', href: '/learn/patterns', icon: '🧩', desc: 'Sentence patterns' },
  { title: 'Daily Speaking', href: '/speaking/practice', icon: '🗣️', desc: 'Chat with Mia' },
  { title: 'AI Coach', href: '/coach', icon: '🤖', desc: 'Personal tutor' },
];

const celpipModules = [
  { title: 'Mock Exam', href: '/exam', icon: '🎯', desc: 'Full practice test' },
  { title: 'Exam Speaking', href: '/speaking/exam', icon: '🎤', desc: 'Timed speaking tasks' },
  { title: 'Reading', href: '/learn/reading', icon: '📄', desc: 'Reading comprehension' },
  { title: 'Writing', href: '/learn/writing', icon: '✍️', desc: 'Email & survey tasks' },
  { title: 'Listening', href: '/learn/listening', icon: '🎧', desc: 'Audio practice' },
  { title: 'Placement Test', href: '/placement-test', icon: '📊', desc: 'Find your level' },
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

      {/* Placement Test Banner */}
      <PlacementBanner />

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

      {/* Cross-module progress widgets */}
      <ProgressWidgets />

      {/* Continue Learning (client-side, reads localStorage mastery) */}
      <ContinueLearning />

      {/* Two Main Section Cards */}
      <div className="grid gap-6 md:grid-cols-2">
        {/* Learn English Card */}
        <div className="rounded-2xl border-2 border-green-200 bg-white overflow-hidden">
          <div className="bg-gradient-to-r from-green-500 to-emerald-500 px-6 py-4">
            <h2 className="text-lg font-bold text-white">Learn English</h2>
            <p className="text-sm text-white/80">Build your English foundation</p>
          </div>
          <div className="p-5 space-y-2">
            {learnModules.map((mod) => (
              <Link
                key={mod.href}
                href={mod.href}
                className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-green-50 transition-colors group"
              >
                <span className="text-xl w-8 text-center">{mod.icon}</span>
                <div className="flex-1 min-w-0">
                  <span className="text-sm font-semibold text-gray-800 group-hover:text-green-700">
                    {mod.title}
                  </span>
                  <p className="text-xs text-gray-400">{mod.desc}</p>
                </div>
                <svg className="w-4 h-4 text-gray-300 group-hover:text-green-500 transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </Link>
            ))}
          </div>
        </div>

        {/* CELPIP Preparation Card */}
        <div className="rounded-2xl border-2 border-blue-200 bg-white overflow-hidden">
          <div className="bg-gradient-to-r from-blue-500 to-indigo-600 px-6 py-4">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-lg font-bold text-white">CELPIP Preparation</h2>
                <p className="text-sm text-white/80">Get ready for your CELPIP exam</p>
              </div>
              <div className="bg-white/20 rounded-lg px-3 py-1">
                <span className="text-xs font-bold text-white">
                  CLB {profile.current_clb_level || '?'}
                </span>
              </div>
            </div>
          </div>
          <div className="p-5 space-y-2">
            {celpipModules.map((mod) => (
              <Link
                key={mod.href}
                href={mod.href}
                className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-blue-50 transition-colors group"
              >
                <span className="text-xl w-8 text-center">{mod.icon}</span>
                <div className="flex-1 min-w-0">
                  <span className="text-sm font-semibold text-gray-800 group-hover:text-blue-700">
                    {mod.title}
                  </span>
                  <p className="text-xs text-gray-400">{mod.desc}</p>
                </div>
                <svg className="w-4 h-4 text-gray-300 group-hover:text-blue-500 transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
