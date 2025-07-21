import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Github, Linkedin, ArrowRight, Download } from 'lucide-react';

export default function Hero() {
  return (
    <section id="about" className="w-full">
      <div className="container grid items-center gap-10 py-24 md:grid-cols-2 lg:py-32">
        <div className="flex flex-col items-start gap-4">
          <p className="font-bold text-primary">Hi, I'm Durgesh Babu P</p>
          <h1 className="text-4xl font-extrabold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
            I'm an <span className="text-glow">AI Engineer</span> who loves building intelligent systems.
          </h1>
          <p className="max-w-[700px] text-lg text-muted-foreground md:text-xl">
            From developing machine learning models to deploying scalable AI-driven applications, I thrive on turning complex data into actionable insights and creating seamless, intelligent user experiences.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg">
              <Link href="#projects">
                See My Work <ArrowRight className="ml-2" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="/Durgesh_Babu_P_Resume.pdf" download="Durgesh_Babu_P_Resume.pdf" aria-label="Download Resume">
                  <Download className="mr-2" />
                  Download Resume
              </a>
            </Button>
            <div className="flex items-center gap-4">
              <a href="#" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
                <Github className="h-7 w-7 text-muted-foreground transition-colors hover:text-primary" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
                <Linkedin className="h-7 w-7 text-muted-foreground transition-colors hover:text-primary" />
              </a>
            </div>
          </div>
        </div>
        <div className="relative flex h-full min-h-[400px] w-full items-center justify-center">
          <div className="absolute h-80 w-80 rounded-full bg-primary/10 blur-3xl animate-pulse" />
          <Image
            src="/durgesh.png"
            alt="Durgesh Babu P"
            width={350}
            height={350}
            priority
            className="relative z-10 rounded-full object-cover shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}