import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, Users, FileText, ExternalLink } from 'lucide-react';
import type { Publication } from '@/lib/data';

type PublicationCardProps = {
  publication: Publication;
};

export default function PublicationCard({ publication }: PublicationCardProps) {
  return (
    <Card className="flex flex-col md:flex-row overflow-hidden border-transparent bg-secondary/50 transition-all hover:shadow-lg hover:shadow-primary/20">
      <div className="relative h-48 md:h-auto md:w-1/3">
        <Image
          src={publication.image}
          alt={`Image for ${publication.title}`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
          data-ai-hint={publication.aiHint}
        />
      </div>
      <div className="flex flex-1 flex-col justify-between p-6">
        <div>
          <CardHeader className="p-0 mb-4">
            <CardTitle className="text-xl font-bold">{publication.title}</CardTitle>
            <p className="flex items-center gap-2 text-sm text-primary">
              <FileText className="h-4 w-4" />
              {publication.journal}
            </p>
          </CardHeader>
          <CardContent className="p-0 space-y-2">
            <p className="flex items-center gap-2 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" />
              Published {publication.date}
            </p>
            <div className="flex items-start gap-2 text-sm text-muted-foreground">
              <Users className="h-4 w-4 mt-0.5 shrink-0" />
              <div>
                <span className="font-semibold">Authors:</span> {publication.authors.join(', ')}
              </div>
            </div>
          </CardContent>
        </div>
        <div className="mt-6">
          <Button asChild>
            <a href={publication.link} target="_blank" rel="noopener noreferrer">
              Read Paper <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </Card>
  );
}
