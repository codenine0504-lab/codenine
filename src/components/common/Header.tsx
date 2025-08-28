"use client";

import Link from 'next/link';
import { Home, Users, LogIn } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

export function Header() {
  const pathname = usePathname();

  const navLinks = [
    { href: '/', label: 'Home', icon: Home },
    { href: '/teams', label: 'Teams', icon: Users },
  ];

  return (
    <header className="bg-card border-b sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 font-bold text-lg">
            <span>
              <span className="text-primary">CODE</span>
              <span className="text-muted-foreground">-9</span>
            </span>
          </Link>
          <nav className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => (
              <Button asChild variant="ghost" key={link.href} className={cn(pathname === link.href && "bg-accent text-accent-foreground")}>
                <Link href={link.href} className="flex items-center gap-2">
                  <link.icon className="w-4 h-4" />
                  {link.label}
                </Link>
              </Button>
            ))}
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="outline">
              <LogIn className="mr-2 h-4 w-4" />
              Login
            </Button>
          </div>
          <div className="md:hidden">
            {/* Mobile menu could be added here */}
          </div>
        </div>
      </div>
    </header>
  );
}
