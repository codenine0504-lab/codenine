import Link from 'next/link';
import { CodeXml } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2 text-primary">
            <CodeXml className="w-6 h-6" />
            <span className="font-semibold">Codenine</span>
          </div>
          <nav className="flex gap-4 md:gap-6 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <Link href="/teams" className="hover:text-primary transition-colors">Teams</Link>
          </nav>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Codenine. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
