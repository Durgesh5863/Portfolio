import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight } from 'lucide-react';
import type { Project } from '@/lib/data';

type ProjectCardProps = {
  project: Project;
  onOpenModal: (project: Project) => void;
};

export default function ProjectCard({ project, onOpenModal }: ProjectCardProps) {
  return (
    <Card
      className="group grid cursor-pointer grid-rows-subgrid row-span-2 overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-1"
      onClick={() => onOpenModal(project)}
      onKeyDown={(e) => e.key === 'Enter' && onOpenModal(project)}
      tabIndex={0}
      role="button"
      aria-label={`View details for ${project.title}`}
    >
      <CardHeader className="p-0">
        <div className="relative h-60 w-full">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            data-ai-hint={project.aiHint}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        </div>
      </CardHeader>
      <CardContent className="relative -mt-16 z-10 flex h-full flex-col justify-end p-6">
        <CardTitle className="mb-2 text-2xl text-primary-foreground">{project.title}</CardTitle>
        <p className="mb-4 text-sm text-muted-foreground line-clamp-2">{project.short_description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.slice(0, 4).map((tag) => (
            <Badge key={tag} variant="secondary" className="bg-background/70 text-foreground backdrop-blur-sm">{tag}</Badge>
          ))}
        </div>
        <div className="mt-4 flex items-center gap-2 text-sm text-primary">
          <span>View Details</span>
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </div>
      </CardContent>
    </Card>
  );
}
