'use client';

import { useState } from 'react';
import type { Project } from '@/lib/data';
import { projects } from '@/lib/data';
import ProjectCard from './ProjectCard';
import ProjectDetailModal from './ProjectDetailModal';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleOpenModal = (project: Project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="w-full py-24 sm:py-32">
      <div className="container">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Featured Projects</h2>
          <p className="mt-4 text-lg text-muted-foreground">A selection of my work. Click to learn more.</p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} onOpenModal={handleOpenModal} />
          ))}
        </div>
        <ProjectDetailModal
          project={selectedProject}
          isOpen={!!selectedProject}
          onOpenChange={handleCloseModal}
        />
      </div>
    </section>
  );
}