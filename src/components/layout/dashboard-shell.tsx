'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
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
  ClipboardListIcon,
  UserIcon,
  LogOutIcon,
  FlameIcon,
  ZapIcon,
  MenuIcon,
  XIcon,
  SparklesIcon,
  ChatIcon,
  TargetIcon,
  BarChartIcon,
} from '@/components/ui/icons';
import { Breadcrumbs } from './breadcrumbs';
import { getModuleStats, type ModuleName } from '@/lib/progress/cross-tracker';

interface DashboardShellProps {
  profile: Profile | null;
  userEmail: string;
  children: React.ReactNode;
}

interface NavItem {
  label: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  module?: ModuleName;
}

interface NavSection {
  title: string;
  items: NavItem[];
}

const navSections: NavSection[] = [
  {
    title: 'Learn English',
    items: [
      { label: 'Dashboard', href: '/dashboard', icon: HomeIcon },
      { label: 'Vocabulary', href: '/learn/vocabulary', icon: BookIcon, module: 'vocabulary' },
      { label: 'Grammar', href: '/learn/grammar', icon: PencilIcon, module: 'grammar' },
      { label: 'Idioms', href: '/learn/idioms', icon: ChatIcon, module: 'idioms' },
      { label: 'Patterns', href: '/learn/patterns', icon: PuzzleIcon, module: 'patterns' },
      { label: 'Daily Speaking', href: '/speaking/practice', icon: MicIcon, module: 'speaking' },
      { label: 'AI Coach', href: '/coach', icon: SparklesIcon },
    ],
  },
  {
    title: 'CELPIP Prep',
    items: [
      { label: 'Mock Exam', href: '/exam', icon: TargetIcon },
      { label: 'Exam Speaking', href: '/speaking/exam', icon: MicIcon },
      { label: 'Reading', href: '/learn/reading', icon: GlassesIcon, module: 'reading' },
      { label: 'Writing', href: '/learn/writing', icon: FileTextIcon, module: 'writing' },
      { label: 'Listening', href: '/learn/listening', icon: HeadphonesIcon, module: 'listening' },
      { label: 'Placement Test', href: '/placement-test', icon: BarChartIcon },
    ],
  },
];

const bottomItems: NavItem[] = [
  { label: 'Profile', href: '/profile', icon: UserIcon },
];

export function DashboardShell({ profile, userEmail, children }: DashboardShellProps) {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [moduleProgress, setModuleProgress] = useState<Record<string, number>>({});

  useEffect(() => {
    const compute = () => {
      const stats = getModuleStats();
      const map: Record<string, number> = {};
      for (const s of stats) {
        map[s.module] = s.percentage;
      }
      setModuleProgress(map);
    };

    if (typeof window !== 'undefined' && 'requestIdleCallback' in window) {
      const id = (window as unknown as { requestIdleCallback: (cb: () => void) => number }).requestIdleCallback(compute);
      return () => (window as unknown as { cancelIdleCallback: (id: number) => void }).cancelIdleCallback(id);
    } else {
      const id = setTimeout(compute, 0);
      return () => clearTimeout(id);
    }
  }, [pathname]);

  const displayName = profile?.full_name || userEmail.split('@')[0];
  const initials = (profile?.full_name || userEmail)
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);

  const isActive = (href: string) =>
    href === '/dashboard'
      ? pathname === '/dashboard'
      : pathname.startsWith(href);

  const renderNavItem = (item: NavItem) => {
    const active = isActive(item.href);
    const Icon = item.icon;

    return (
      <Link
        key={item.href}
        href={item.href}
        onClick={() => setSidebarOpen(false)}
        className={`flex items-center gap-3 rounded-xl px-3 py-2 text-sm font-medium transition-colors ${
          active
            ? 'bg-blue-50 text-blue-700'
            : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
        }`}
      >
        <Icon className={`h-[18px] w-[18px] ${active ? 'text-blue-600' : 'text-gray-400'}`} />
        <span className="flex-1">{item.label}</span>
        {item.module && moduleProgress[item.module] !== undefined && moduleProgress[item.module] > 0 && (
          <span
            className={`ml-auto flex h-5 min-w-5 items-center justify-center rounded-full px-1.5 text-[10px] font-bold ${
              moduleProgress[item.module] >= 100
                ? 'bg-green-100 text-green-700'
                : moduleProgress[item.module] >= 50
                  ? 'bg-blue-100 text-blue-700'
                  : 'bg-gray-100 text-gray-500'
            }`}
          >
            {moduleProgress[item.module]}%
          </span>
        )}
      </Link>
    );
  };

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

        {/* Navigation Sections */}
        <nav className="flex-1 overflow-y-auto px-3 py-3">
          {navSections.map((section, idx) => (
            <div key={section.title} className={idx > 0 ? 'mt-4' : ''}>
              <p className="px-3 mb-1.5 text-[10px] font-bold uppercase tracking-wider text-gray-400">
                {section.title}
              </p>
              <div className="space-y-0.5">
                {section.items.map(renderNavItem)}
              </div>
            </div>
          ))}

          {/* Divider + Profile */}
          <div className="mt-4 pt-3 border-t border-gray-100 space-y-0.5">
            {bottomItems.map(renderNavItem)}
          </div>
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
                <Image
                  src={profile.avatar_url}
                  alt={displayName}
                  width={32}
                  height={32}
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
