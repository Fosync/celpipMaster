import { createServerClient } from '@supabase/ssr';
import { NextResponse, type NextRequest } from 'next/server';

export async function updateSession(request: NextRequest) {
  let supabaseResponse = NextResponse.next({ request });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) => request.cookies.set(name, value));
          supabaseResponse = NextResponse.next({ request });
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options)
          );
        },
      },
    }
  );

  // Refresh session token if exists
  await supabase.auth.getUser();

  // TODO: Re-enable auth redirects when login/register is ready
  // const { pathname } = request.nextUrl;
  // const isAuthRoute = pathname.startsWith('/auth');
  // const protectedPrefixes = ['/dashboard', '/learn', '/exam', '/speaking', '/profile'];
  // const isProtectedRoute = protectedPrefixes.some((prefix) => pathname.startsWith(prefix));
  // if (!user && isProtectedRoute) redirect to /auth/login
  // if (user && isAuthRoute) redirect to /dashboard

  return supabaseResponse;
}
