import { Sparkles } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from './ThemeToggle';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-lg">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-bold" aria-label="Syntax & Synapse Home">
          <Sparkles className="h-6 w-6 text-primary" />
          <span className="text-lg">Syntax &amp; Synapse</span>
        </Link>
        <div className="flex items-center gap-4">
            <nav className="hidden items-center gap-6 text-sm md:flex">
                <Link href="/#projects" className="text-muted-foreground transition-colors hover:text-primary">
                    Projects
                </Link>
                <Link href="/#experience" className="text-muted-foreground transition-colors hover:text-primary">
                    Experience
                </Link>
                <Link href="/#skills" className="text-muted-foreground transition-colors hover:text-primary">
                    Skills
                </Link>
                 <Link href="/certifications" className="text-muted-foreground transition-colors hover:text-primary">
                    Certifications
                </Link>
                <Link href="/publications" className="text-muted-foreground transition-colors hover:text-primary">
                    Publications
                </Link>
                <Link href="/achievements" className="text-muted-foreground transition-colors hover:text-primary">
                    Achievements
                </Link>
                <Link href="/#contact" className="text-muted-foreground transition-colors hover:text-primary">
                    Contact
                </Link>
            </nav>
            <div className="flex items-center gap-2">
                <ThemeToggle />
                <Button asChild>
                    <Link href="/#contact">Hire Me</Link>
                </Button>
            </div>
        </div>
      </div>
    </header>
  );
}
