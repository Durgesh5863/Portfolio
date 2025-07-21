import Header from '@/components/app/Header';
import Hero from '@/components/app/Hero';
import Skills from '@/components/app/Skills';
import Projects from '@/components/app/Projects';
import Experience from '@/components/app/Experience';
import Testimonials from '@/components/app/Testimonials';
import Contact from '@/components/app/Contact';

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-transparent">
      <Header />
      <main className="flex flex-1 flex-col items-center">
        <div className="container">
          <Hero />
          <Projects />
          <Experience />
          <Skills />
          <Testimonials />
          <Contact />
        </div>
      </main>
      <footer className="w-full py-8 text-center text-muted-foreground">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Syntax & Synapse. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
