import { skills } from '@/lib/data';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function Skills() {
  return (
    <section id="skills" className="w-full py-24 sm:py-32">
      <div className="container">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Skills & Expertise</h2>
          <p className="mt-4 text-lg text-muted-foreground">My technical arsenal for building modern web solutions.</p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          {skills.map((skillCategory) => (
            <Card key={skillCategory.category} className="flex flex-col border-transparent bg-secondary/50 transition-all hover:bg-secondary/80 hover:shadow-lg hover:shadow-primary/10">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <skillCategory.icon className="h-8 w-8 text-primary" aria-hidden="true"/>
                  <CardTitle className="text-xl font-semibold">{skillCategory.category}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="flex h-full flex-col">
                <div className="flex flex-wrap gap-2">
                  {skillCategory.list.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-sm bg-background/70 text-foreground backdrop-blur-sm">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}