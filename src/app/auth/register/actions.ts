'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { createClient } from '@/lib/supabase/server';

export async function register(formData: FormData) {
  const supabase = await createClient();

  const fullName = formData.get('fullName') as string;
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;
  const confirmPassword = formData.get('confirmPassword') as string;

  if (!fullName || !email || !password || !confirmPassword) {
    redirect('/auth/register?error=' + encodeURIComponent('Please fill in all fields'));
  }

  if (password.length < 6) {
    redirect('/auth/register?error=' + encodeURIComponent('Password must be at least 6 characters'));
  }

  if (password !== confirmPassword) {
    redirect('/auth/register?error=' + encodeURIComponent('Passwords do not match'));
  }

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        full_name: fullName,
      },
    },
  });

  if (error) {
    redirect('/auth/register?error=' + encodeURIComponent(error.message));
  }

  // If email confirmation is disabled, user is auto-confirmed and session exists.
  // If confirmation is enabled but we still want auto-login for development:
  if (!data.session) {
    const { error: signInError } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (signInError) {
      redirect('/auth/login?message=' + encodeURIComponent('Account created! Please log in.'));
    }
  }

  revalidatePath('/', 'layout');
  redirect('/dashboard');
}
