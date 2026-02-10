'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { createClient } from '@/lib/supabase/client';
import type { Profile } from '@/types';
import { getModuleStats, getVocabSummary, type ModuleStats } from '@/lib/progress/cross-tracker';
import { LogOutIcon } from '@/components/ui/icons';

export default function ProfilePage() {
  const router = useRouter();
  const [profile, setProfile] = useState<Profile | null>(null);
  const [email, setEmail] = useState('');
  const [moduleStats, setModuleStats] = useState<ModuleStats[]>([]);
  const [vocabSummary, setVocabSummary] = useState<{ total: number; byLevel: Record<number, number> }>({
    total: 0,
    byLevel: { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0 },
  });
  const [placementResult, setPlacementResult] = useState<{ level: number; score: number } | null>(null);
  const [loading, setLoading] = useState(true);

  // Password change state
  const [showPasswordForm, setShowPasswordForm] = useState(false);
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordMsg, setPasswordMsg] = useState<{ type: 'error' | 'success'; text: string } | null>(null);
  const [passwordLoading, setPasswordLoading] = useState(false);

  useEffect(() => {
    async function loadProfile() {
      const supabase = createClient();
      const { data: { user } } = await supabase.auth.getUser();

      if (user) {
        setEmail(user.email || '');
        const { data } = await supabase.from('profiles').select('*').eq('id', user.id).single();
        if (data) setProfile(data as Profile);
      }
      setLoading(false);
    }

    loadProfile();
    setModuleStats(getModuleStats());
    setVocabSummary(getVocabSummary());

    // Check placement test result from localStorage
    try {
      const raw = localStorage.getItem('celpipmaster_placement_result');
      if (raw) {
        const parsed = JSON.parse(raw);
        setPlacementResult(parsed);
      }
    } catch {
      // ignore
    }
  }, []);

  const handlePasswordChange = async () => {
    setPasswordMsg(null);

    if (newPassword.length < 6) {
      setPasswordMsg({ type: 'error', text: 'Password must be at least 6 characters' });
      return;
    }
    if (newPassword !== confirmPassword) {
      setPasswordMsg({ type: 'error', text: 'Passwords do not match' });
      return;
    }

    setPasswordLoading(true);
    const supabase = createClient();
    const { error } = await supabase.auth.updateUser({ password: newPassword });
    setPasswordLoading(false);

    if (error) {
      setPasswordMsg({ type: 'error', text: error.message });
    } else {
      setPasswordMsg({ type: 'success', text: 'Password updated successfully!' });
      setNewPassword('');
      setConfirmPassword('');
      setTimeout(() => setShowPasswordForm(false), 2000);
    }
  };

  const handleSignOut = async () => {
    const supabase = createClient();
    await supabase.auth.signOut();
    router.push('/');
  };

  const displayName = profile?.full_name || email.split('@')[0] || 'Learner';
  const initials = (profile?.full_name || email || 'U')
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);

  const totalCompleted = moduleStats.reduce((sum, s) => sum + s.completedItems, 0);

  const masteryLabels: Record<number, { label: string; color: string }> = {
    0: { label: 'New', color: 'bg-gray-200 text-gray-600' },
    1: { label: 'Recognized', color: 'bg-blue-100 text-blue-700' },
    2: { label: 'Practiced', color: 'bg-yellow-100 text-yellow-700' },
    3: { label: 'Active Use', color: 'bg-green-100 text-green-700' },
    4: { label: 'Mastered', color: 'bg-purple-100 text-purple-700' },
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-blue-500 border-t-transparent" />
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-4xl space-y-6">
      {/* Profile Header */}
      <div className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-8">
        <div className="flex flex-col items-center gap-6 sm:flex-row">
          {/* Avatar */}
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-600 text-2xl font-bold text-white shadow-lg shadow-blue-500/25">
            {initials}
          </div>

          {/* Info */}
          <div className="flex-1 text-center sm:text-left">
            <h1 className="text-2xl font-bold text-gray-900">{displayName}</h1>
            <p className="mt-1 text-gray-500">{email}</p>
            <div className="mt-3 flex flex-wrap items-center justify-center gap-2 sm:justify-start">
              <span className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700">
                CLB {profile?.current_clb_level || 5}
              </span>
              <span className="inline-flex items-center rounded-full bg-purple-50 px-3 py-1 text-sm font-medium text-purple-700">
                Target: CLB {profile?.target_clb_level || 7}
              </span>
              <span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-600 capitalize">
                {profile?.subscription_tier || 'free'} plan
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 sm:grid-cols-4">
        <div className="rounded-2xl border border-gray-200 bg-white p-5 text-center">
          <p className="text-3xl font-bold text-gray-900">{vocabSummary.total}</p>
          <p className="mt-1 text-sm text-gray-500">Words Learned</p>
        </div>
        <div className="rounded-2xl border border-gray-200 bg-white p-5 text-center">
          <p className="text-3xl font-bold text-gray-900">{totalCompleted}</p>
          <p className="mt-1 text-sm text-gray-500">Lessons Done</p>
        </div>
        <div className="rounded-2xl border border-gray-200 bg-white p-5 text-center">
          <p className="text-3xl font-bold text-gray-900">{profile?.streak_days || 0}</p>
          <p className="mt-1 text-sm text-gray-500">Day Streak</p>
        </div>
        <div className="rounded-2xl border border-gray-200 bg-white p-5 text-center">
          <p className="text-3xl font-bold text-gray-900">{profile?.total_xp || 0}</p>
          <p className="mt-1 text-sm text-gray-500">Total XP</p>
        </div>
      </div>

      {/* Placement Test Result */}
      {placementResult && (
        <div className="rounded-2xl border border-blue-200 bg-blue-50 p-6">
          <h2 className="text-lg font-semibold text-gray-900">Placement Test Result</h2>
          <div className="mt-3 flex items-center gap-6">
            <div>
              <span className="text-4xl font-bold text-blue-600">CLB {placementResult.level}</span>
              <p className="mt-1 text-sm text-gray-500">Estimated Level</p>
            </div>
            <div>
              <span className="text-4xl font-bold text-blue-600">{placementResult.score}%</span>
              <p className="mt-1 text-sm text-gray-500">Score</p>
            </div>
          </div>
        </div>
      )}

      {/* Module Progress */}
      <div className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-8">
        <h2 className="mb-6 text-lg font-semibold text-gray-900">Module Progress</h2>
        <div className="space-y-4">
          {moduleStats.map((stat) => (
            <div key={stat.module}>
              <div className="mb-1.5 flex items-center justify-between">
                <span className="flex items-center gap-2 text-sm font-medium text-gray-700">
                  <span>{stat.icon}</span>
                  {stat.label}
                </span>
                <span className="text-sm text-gray-500">
                  {stat.completedItems}/{stat.totalItems} ({stat.percentage}%)
                </span>
              </div>
              <div className="h-2.5 overflow-hidden rounded-full bg-gray-100">
                <div
                  className={`h-full rounded-full transition-all ${
                    stat.percentage >= 100
                      ? 'bg-green-500'
                      : stat.percentage >= 50
                        ? 'bg-blue-500'
                        : stat.percentage > 0
                          ? 'bg-amber-500'
                          : 'bg-gray-200'
                  }`}
                  style={{ width: `${stat.percentage}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Vocabulary Mastery Distribution */}
      {vocabSummary.total > 0 && (
        <div className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-8">
          <h2 className="mb-6 text-lg font-semibold text-gray-900">Vocabulary Mastery</h2>
          <div className="flex flex-wrap gap-3">
            {([0, 1, 2, 3, 4] as const).map((level) => {
              const count = vocabSummary.byLevel[level];
              if (count === 0) return null;
              const info = masteryLabels[level];
              return (
                <div
                  key={level}
                  className={`flex items-center gap-2 rounded-xl px-4 py-2.5 ${info.color}`}
                >
                  <span className="text-lg font-bold">{count}</span>
                  <span className="text-sm font-medium">{info.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Change Password */}
      <div className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-8">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-900">Security</h2>
          {!showPasswordForm && (
            <button
              onClick={() => setShowPasswordForm(true)}
              className="rounded-xl border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50"
            >
              Change Password
            </button>
          )}
        </div>

        {showPasswordForm && (
          <div className="mt-6 space-y-4">
            {passwordMsg && (
              <div
                className={`rounded-xl border px-4 py-3 text-sm ${
                  passwordMsg.type === 'error'
                    ? 'border-red-200 bg-red-50 text-red-700'
                    : 'border-green-200 bg-green-50 text-green-700'
                }`}
              >
                {passwordMsg.text}
              </div>
            )}

            <div>
              <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700">
                New Password
              </label>
              <input
                id="newPassword"
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="mt-1.5 block w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400 transition-colors focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                placeholder="Min. 6 characters"
              />
            </div>

            <div>
              <label htmlFor="confirmNewPassword" className="block text-sm font-medium text-gray-700">
                Confirm New Password
              </label>
              <input
                id="confirmNewPassword"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="mt-1.5 block w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400 transition-colors focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                placeholder="Re-enter your password"
              />
            </div>

            <div className="flex gap-3">
              <button
                onClick={handlePasswordChange}
                disabled={passwordLoading}
                className="rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/25 transition-all hover:shadow-xl disabled:opacity-50"
              >
                {passwordLoading ? 'Updating...' : 'Update Password'}
              </button>
              <button
                onClick={() => {
                  setShowPasswordForm(false);
                  setPasswordMsg(null);
                  setNewPassword('');
                  setConfirmPassword('');
                }}
                className="rounded-xl border border-gray-300 px-6 py-2.5 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50"
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Sign Out */}
      <div className="rounded-2xl border border-red-100 bg-white p-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-semibold text-gray-900">Sign Out</h2>
            <p className="mt-1 text-sm text-gray-500">
              Sign out of your account on this device
            </p>
          </div>
          <button
            onClick={handleSignOut}
            className="flex items-center gap-2 rounded-xl border border-red-200 px-5 py-2.5 text-sm font-medium text-red-600 transition-colors hover:bg-red-50"
          >
            <LogOutIcon className="h-4 w-4" />
            Sign Out
          </button>
        </div>
      </div>
    </div>
  );
}
