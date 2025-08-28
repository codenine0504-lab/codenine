import { Button } from '@/components/ui/button';
import { ArrowRight, Combine, Lightbulb, Users } from 'lucide-react';
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

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12 md:mb-16">
             <h2 className="text-3xl md:text-4xl font-bold text-foreground">Our Approach</h2>
             <p className="mt-4 text-lg text-foreground/70">
                Every project is powered by the combined genius of different departments, ensuring practical, innovative, and sustainable outcomes.
             </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            <div className="text-center p-6 bg-card rounded-lg shadow-sm">
                <div className="mb-4 inline-flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary">
                    <Combine className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-primary">Cross-Disciplinary Teams</h3>
                <p className="text-foreground/80">Whether it’s coding, circuits, machines, or systems — we bring diverse knowledge bases together.</p>
            </div>
            <div className="text-center p-6 bg-card rounded-lg shadow-sm">
                <div className="mb-4 inline-flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary">
                    <Lightbulb className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-primary">Innovative Solutions</h3>
                <p className="text-foreground/80">Our collaborative genius ensures that every outcome is practical, innovative, and sustainable.</p>
            </div>
             <div className="text-center p-6 bg-card rounded-lg shadow-sm">
                <div className="mb-4 inline-flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary">
                    <Users className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-primary">People First</h3>
                <p className="text-foreground/80">We are a passionate group of engineers, designers, and managers united to build great things.</p>
            </div>
          </div>
        </div>
      </section>

       {/* CTA Section */}
      <section className="py-20 md:py-24 bg-background">
        <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Ready to See Our Talent?</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/70">
                Get to know the experts who are pushing the boundaries of what's possible.
            </p>
            <div className="mt-8">
                 <Button asChild size="lg" variant="outline">
                    <Link href="/teams">
                        Explore Our Team
                    </Link>
                </Button>
            </div>
        </div>
      </section>
    </div>
  );
}
