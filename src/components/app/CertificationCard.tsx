import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Award, Building, Calendar, ExternalLink } from 'lucide-react';
import type { Certification } from '@/lib/data';

type CertificationCardProps = {
  certification: Certification;
};

export default function CertificationCard({ certification }: CertificationCardProps) {
  return (
    <Card className="flex flex-col overflow-hidden border-transparent bg-secondary/50 transition-all hover:shadow-lg hover:shadow-primary/20">
       <div className="relative h-48 w-full">
          <Image
            src={certification.image}
            alt={`${certification.name} certificate`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            data-ai-hint={certification.aiHint}
          />
        </div>
      <CardHeader>
        <div className="flex items-start gap-4">
          <Award className="h-10 w-10 shrink-0 text-primary mt-1" />
          <div>
            <CardTitle className="text-xl font-bold">{certification.name}</CardTitle>
            <p className="flex items-center gap-2 text-sm text-muted-foreground">
              <Building className="h-4 w-4" />
              {certification.issuing_organization}
            </p>
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex flex-grow flex-col justify-between pt-0">
         <div>
            <p className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
            <Calendar className="h-4 w-4" />
            Issued {certification.date}
            </p>
        </div>
        {certification.credential_url && (
            <Button asChild>
            <a href={certification.credential_url} target="_blank" rel="noopener noreferrer">
                View Credential <ExternalLink className="ml-2 h-4 w-4" />
            </a>
            </Button>
        )}
      </CardContent>
    </Card>
  );
}
