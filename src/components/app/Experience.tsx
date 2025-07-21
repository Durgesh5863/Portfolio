import { Briefcase } from 'lucide-react';
import { experiences } from '@/lib/data';

export default function Experience() {
  return (
    <section id="experience" className="w-full py-24 sm:py-32">
      <div className="container">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Work Experience</h2>
          <p className="mt-4 text-lg text-muted-foreground">My professional journey and accomplishments.</p>
        </div>
        <div className="relative mt-12">
          {/* Timeline Line */}
          <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-border"></div>

          {experiences.map((exp, index) => (
            <div key={exp.id} className="group relative flex items-start">
              {/* Timeline Content */}
              <div className={`flex w-full items-start ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                <div className="w-1/2 px-8 py-6">
                  <div className={`rounded-lg border bg-card p-6 shadow-sm transition-all duration-300 group-hover:shadow-lg group-hover:shadow-primary/20 ${index % 2 === 0 ? 'text-left' : 'text-right'}`}>
                    <p className="text-sm text-muted-foreground">{exp.date}</p>
                    <h3 className="text-xl font-bold text-primary">{exp.title}</h3>
                    <p className="font-semibold">{exp.company}</p>
                    <p className="mt-2 text-muted-foreground">{exp.description}</p>
                  </div>
                </div>
              </div>

              {/* Timeline Dot */}
              <div className="absolute left-1/2 top-6 z-10 -translate-x-1/2">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-primary bg-background transition-all duration-300 group-hover:scale-110">
                  <Briefcase className="h-5 w-5 text-primary" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}