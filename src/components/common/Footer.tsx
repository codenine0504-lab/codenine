"use client";

import Link from 'next/link';
import { Home, Users } from 'lucide-react';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';

export function Footer() {
  const pathname = usePathname();

  const navLinks = [
    { href: '/', label: 'Home', icon: Home },
    { href: '/teams', label: 'Teams', icon: Users },
  ];

  return (
    <>
      {/* Mobile-only fixed footer */}
      <footer className="md:hidden fixed bottom-0 left-0 right-0 bg-card border-t z-50">
        <nav className="flex justify-around items-center h-16">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'flex flex-col items-center justify-center gap-1 w-full h-full transition-colors',
                pathname === link.href
                  ? 'text-primary'
                  : 'text-muted-foreground hover:text-primary'
              )}
            >
              <link.icon className="w-6 h-6" />
              <span className="text-xs font-medium">{link.label}</span>
            </Link>
          ))}
        </nav>
      </footer>

      {/* Desktop-only footer */}
      <footer className="hidden md:block bg-card border-t">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <span className="font-semibold">
                <span className="text-primary">CODE</span>
                <span className="text-muted-foreground">-9</span>
              </span>
            </div>
            <nav className="flex gap-4 md:gap-6 text-sm text-muted-foreground">
              <Link href="/" className="hover:text-primary transition-colors">Home</Link>
              <Link href="/teams" className="hover:text-primary transition-colors">Teams</Link>
            </nav>
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} CODE-9. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
