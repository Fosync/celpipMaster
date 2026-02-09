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

  const { error } = await supabase.auth.signUp({
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

  revalidatePath('/', 'layout');
  redirect('/auth/login?message=' + encodeURIComponent('Account created! Check your email to confirm, then log in.'));
}
