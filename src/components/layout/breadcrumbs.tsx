'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const pathLabels: Record<string, string> = {
  dashboard: 'Dashboard',
  learn: 'Learn',
  vocabulary: 'Vocabulary',
  grammar: 'Grammar',
  idioms: 'Idioms',
  reading: 'Reading',
  writing: 'Writing',
  listening: 'Listening',
  patterns: 'Patterns',
  speaking: 'Speaking',
  exam: 'Exam',
  profile: 'Profile',
};

export function Breadcrumbs() {
  const pathname = usePathname();
  const segments = pathname.split('/').filter(Boolean);

  // Don't show breadcrumbs on dashboard root
  if (segments.length <= 1) return null;

  const crumbs = segments.map((seg, i) => {
    const href = '/' + segments.slice(0, i + 1).join('/');
    const label = pathLabels[seg] || seg.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
    const isLast = i === segments.length - 1;
    return { href, label, isLast };
  });

  return (
    <nav className="mb-4 flex items-center gap-1.5 text-sm text-gray-400">
      <Link href="/dashboard" className="hover:text-gray-600">
        Home
      </Link>
      {crumbs.map((crumb) => (
        <span key={crumb.href} className="flex items-center gap-1.5">
          <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
          {crumb.isLast ? (
            <span className="font-medium text-gray-700">{crumb.label}</span>
          ) : (
            <Link href={crumb.href} className="hover:text-gray-600">
              {crumb.label}
            </Link>
          )}
        </span>
      ))}
    </nav>
  );
}
