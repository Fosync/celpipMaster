'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { Profile } from '@/types';
import {
  HomeIcon,
  BookIcon,
  PencilIcon,
  GlassesIcon,
  FileTextIcon,
  PuzzleIcon,
  HeadphonesIcon,
  MicIcon,
  RepeatIcon,
  ClipboardListIcon,
  UserIcon,
  LogOutIcon,
  FlameIcon,
  ZapIcon,
  MenuIcon,
  XIcon,
} from '@/components/ui/icons';
import { Breadcrumbs } from './breadcrumbs';

interface DashboardShellProps {
  profile: Profile | null;
  userEmail: string;
  children: React.ReactNode;
}

const navItems = [
  { label: 'Dashboard', href: '/dashboard', icon: HomeIcon },
  { label: 'Vocabulary', href: '/learn/vocabulary', icon: BookIcon },
  { label: 'Idioms', href: '/learn/idioms', icon: BookIcon },
  { label: 'Grammar', href: '/learn/grammar', icon: PencilIcon },
  { label: 'Reading', href: '/learn/reading', icon: GlassesIcon },
  { label: 'Writing', href: '/learn/writing', icon: FileTextIcon },
  { label: 'Listening', href: '/learn/listening', icon: HeadphonesIcon },
  { label: 'Patterns', href: '/learn/patterns', icon: PuzzleIcon },
  { label: 'Shadowing', href: '/learn/shadowing', icon: RepeatIcon },
  { label: 'Speaking', href: '/speaking', icon: MicIcon },
  { label: 'Mock Exam', href: '/exam', icon: ClipboardListIcon },
  { label: 'Profile', href: '/profile', icon: UserIcon },
];

export function DashboardShell({ profile, userEmail, children }: DashboardShellProps) {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const displayName = profile?.full_name || userEmail.split('@')[0];
  const initials = (profile?.full_name || userEmail)
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 flex w-64 flex-col border-r border-gray-200 bg-white transition-transform lg:static lg:translate-x-0 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Logo */}
        <div className="flex h-16 items-center justify-between border-b border-gray-100 px-6">
          <Link href="/dashboard" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 text-sm font-bold text-white">
              C
            </div>
            <span className="text-lg font-bold text-gray-900">
              Celpip<span className="text-blue-600">Master</span>
            </span>
          </Link>
          <button
            onClick={() => setSidebarOpen(false)}
            className="rounded-lg p-1 text-gray-400 hover:bg-gray-100 lg:hidden"
          >
            <XIcon className="h-5 w-5" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 space-y-1 px-3 py-4">
          {navItems.map((item) => {
            const isActive =
              item.href === '/dashboard'
                ? pathname === '/dashboard'
                : pathname.startsWith(item.href);
            const Icon = item.icon;

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setSidebarOpen(false)}
                className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-blue-50 text-blue-700'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                }`}
              >
                <Icon className={`h-5 w-5 ${isActive ? 'text-blue-600' : 'text-gray-400'}`} />
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Sign out */}
        <div className="border-t border-gray-100 p-3">
          <form action="/auth/signout" method="POST">
            <button
              type="submit"
              className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-gray-600 transition-colors hover:bg-red-50 hover:text-red-600"
            >
              <LogOutIcon className="h-5 w-5 text-gray-400" />
              Sign out
            </button>
          </form>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex flex-1 flex-col">
        {/* Top bar */}
        <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-gray-200 bg-white px-4 sm:px-6">
          {/* Mobile menu button */}
          <button
            onClick={() => setSidebarOpen(true)}
            className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 lg:hidden"
          >
            <MenuIcon className="h-5 w-5" />
          </button>

          {/* Spacer for desktop */}
          <div className="hidden lg:block" />

          {/* Stats & Profile */}
          <div className="flex items-center gap-4">
            {/* Streak */}
            <div className="flex items-center gap-1.5 rounded-lg bg-orange-50 px-3 py-1.5">
              <FlameIcon className="h-4 w-4 text-orange-500" />
              <span className="text-sm font-semibold text-orange-700">
                {profile?.streak_days || 0}
              </span>
            </div>

            {/* XP */}
            <div className="flex items-center gap-1.5 rounded-lg bg-purple-50 px-3 py-1.5">
              <ZapIcon className="h-4 w-4 text-purple-500" />
              <span className="text-sm font-semibold text-purple-700">
                {profile?.total_xp || 0} XP
              </span>
            </div>

            {/* Profile avatar */}
            <div className="flex items-center gap-2">
              {profile?.avatar_url ? (
                <img
                  src={profile.avatar_url}
                  alt={displayName}
                  className="h-8 w-8 rounded-full object-cover"
                />
              ) : (
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-500 text-xs font-bold text-white">
                  {initials}
                </div>
              )}
              <span className="hidden text-sm font-medium text-gray-700 sm:block">
                {displayName}
              </span>
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8">
          <Breadcrumbs />
          {children}
        </main>
      </div>
    </div>
  );
}
