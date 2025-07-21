import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background text-center">
      <div className="container relative space-y-6">
        <div className="absolute -top-1/2 left-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl" />
        <h1 className="text-8xl font-extrabold tracking-tighter text-primary sm:text-9xl">404</h1>
        <div className="z-10 space-y-4">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Page Not Found</h2>
            <p className="mx-auto max-w-md text-lg text-muted-foreground">
                Oops! It seems you've wandered off the beaten path. The page you're looking for doesn't exist.
            </p>
            <Button asChild size="lg">
                <Link href="/">
                    <Home className="mr-2" />
                    Return to Home
                </Link>
            </Button>
        </div>
      </div>
    </div>
  );
}
