import { promises as fs } from 'fs';
import path from 'path';
import { MarkdownRenderer } from '@/components/common/MarkdownRenderer';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default async function Home() {
  const filePath = path.join(process.cwd(), 'src', 'content', 'home.md');
  let markdownContent = '';
  try {
    markdownContent = await fs.readFile(filePath, 'utf8');
  } catch (error) {
    console.error("Could not read markdown file:", error);
    markdownContent = "# Error\n\nCould not load content. Please check the server logs.";
  }

  return (
    <div className="container mx-auto px-4 py-12 sm:py-16 md:py-24">
      <div className="max-w-3xl mx-auto">
        <MarkdownRenderer content={markdownContent} />
        <div className="mt-12 text-center">
          <Button asChild size="lg">
            <Link href="/teams">Meet the Team</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
