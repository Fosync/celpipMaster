import { createClient } from '@/lib/supabase/server';
import { DashboardShell } from '@/components/layout/dashboard-shell';
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

export default async function CoachLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  let profile: Profile | null = demoProfile;
  let email = 'demo@celpipmaster.com';

  if (user) {
    const { data } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', user.id)
      .single();
    profile = (data as Profile | null) ?? demoProfile;
    email = user.email || email;
  }

  return (
    <DashboardShell profile={profile} userEmail={email}>
      {children}
    </DashboardShell>
  );
}
