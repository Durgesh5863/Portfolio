import { publications } from '@/lib/data';
import PublicationCard from '@/components/app/PublicationCard';
import Header from '@/components/app/Header';

export default function PublicationsPage() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-transparent">
      <Header />
      <main className="flex-1">
        <section id="publications" className="container py-24 sm:py-32">
          <div className="text-center">
            <h1 className="text-3xl font-bold tracking-tight md:text-4xl">Publications & Research</h1>
            <p className="mt-4 text-lg text-muted-foreground">A collection of my academic and research contributions.</p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-1 lg:grid-cols-2">
            {publications.map((pub) => (
              <PublicationCard key={pub.id} publication={pub} />
            ))}
          </div>
        </section>
      </main>
      <footer className="py-8 text-center text-muted-foreground">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Syntax & Synapse. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
