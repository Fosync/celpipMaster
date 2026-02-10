'use server';

import { redirect } from 'next/navigation';
import { createClient } from '@/lib/supabase/server';

export async function resetPassword(formData: FormData) {
  const supabase = await createClient();

  const email = formData.get('email') as string;

  if (!email) {
    redirect('/auth/forgot-password?error=' + encodeURIComponent('Please enter your email address'));
  }

  const { error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: `${process.env.NEXT_PUBLIC_APP_URL}/auth/callback?next=/profile`,
  });

  if (error) {
    redirect('/auth/forgot-password?error=' + encodeURIComponent(error.message));
  }

  redirect('/auth/forgot-password?message=' + encodeURIComponent('Check your email for a password reset link'));
}
