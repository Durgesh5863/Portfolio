import { certifications } from '@/lib/data';
import CertificationCard from '@/components/app/CertificationCard';
import Header from '@/components/app/Header';

export default function CertificationsPage() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-transparent">
      <Header />
      <main className="flex-1">
        <section id="certifications" className="container py-24 sm:py-32">
          <div className="text-center">
            <h1 className="text-3xl font-bold tracking-tight md:text-4xl">Licenses & Certifications</h1>
            <p className="mt-4 text-lg text-muted-foreground">A record of my professional development and qualifications.</p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {certifications.map((cert) => (
              <CertificationCard key={cert.id} certification={cert} />
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
