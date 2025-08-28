import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-primary tracking-tight">
            Welcome to CODE-9
          </h1>
          <p className="mt-4 md:mt-6 max-w-3xl mx-auto text-lg md:text-xl text-foreground/80">
            At CODE-9, we believe the best ideas come from teamwork across disciplines. We unite diverse knowledge to make things possible.
          </p>
          <div className="mt-8 md:mt-10">
            <Button asChild size="lg">
              <Link href="/teams">
                Meet The Team <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
