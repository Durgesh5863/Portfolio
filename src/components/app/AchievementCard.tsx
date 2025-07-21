import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Trophy, Calendar } from 'lucide-react';
import type { Achievement } from '@/lib/data';

type AchievementCardProps = {
  achievement: Achievement;
};

export default function AchievementCard({ achievement }: AchievementCardProps) {
  return (
    <Card className="flex flex-col overflow-hidden border-transparent bg-secondary/50 transition-all hover:shadow-lg hover:shadow-primary/20">
      <CardHeader>
        <div className="flex items-start gap-4">
          <Trophy className="h-10 w-10 shrink-0 text-primary mt-1" />
          <div>
            <CardTitle className="text-xl font-bold">{achievement.title}</CardTitle>
            <p className="flex items-center gap-2 text-sm text-muted-foreground">
              {achievement.issuer}
            </p>
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex flex-grow flex-col justify-between pt-0">
         <div>
            <p className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
            <Calendar className="h-4 w-4" />
            {achievement.date}
            </p>
            <p className="text-muted-foreground">{achievement.description}</p>
        </div>
      </CardContent>
    </Card>
  );
}
