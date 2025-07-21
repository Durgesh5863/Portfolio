'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { ExternalLink } from 'lucide-react';
import type { Project } from '@/lib/data';

type ProjectDetailModalProps = {
  project: Project | null;
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
};

export default function ProjectDetailModal({ project, isOpen, onOpenChange }: ProjectDetailModalProps) {
  if (!project) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90svh] overflow-y-auto p-0">
        <div className="relative h-80 w-full">
            <Image src={project.image} alt={project.title} fill className="object-cover" data-ai-hint={project.aiHint} />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
        </div>
        <div className="p-6 relative -mt-20 z-10 space-y-6">
            <DialogHeader className="text-left">
            <DialogTitle className="text-3xl font-bold">{project.title}</DialogTitle>
            <DialogDescription asChild>
                <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">{tag}</Badge>
                    ))}
                </div>
            </DialogDescription>
            </DialogHeader>
            <div className="grid gap-8 md:grid-cols-5">
            <div className="md:col-span-3 space-y-4">
                <div className='space-y-2'>
                  <h3 className="text-xl font-semibold">Problem Statement</h3>
                  <p className="text-muted-foreground">{project.problem}</p>
                </div>
                 <div className='space-y-2'>
                  <h3 className="text-xl font-semibold">Our Solution</h3>
                  <p className="text-muted-foreground">{project.solution}</p>
                </div>

                <div className='space-y-2'>
                  <h3 className="text-xl font-semibold">Project Details</h3>
                  <p className="text-muted-foreground">{project.long_description}</p>
                </div>
            </div>
            <div className="md:col-span-2 space-y-4">
                 <h3 className="text-xl font-semibold">Technologies Used</h3>
                 <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                        <Badge key={tag} variant="outline">{tag}</Badge>
                    ))}
                 </div>
                 <h3 className="text-xl font-semibold">Project Links</h3>
                <div className="flex flex-col gap-3">
                <Button asChild className="justify-start">
                    <a href={project.live_url} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                    </a>
                </Button>
                <Button variant="outline" asChild className="justify-start">
                    <a href={project.repo_url} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" /> GitHub Repo
                    </a>
                </Button>
                </div>
            </div>
            </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
