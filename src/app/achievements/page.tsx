import { achievements } from '@/lib/data';
import AchievementCard from '@/components/app/AchievementCard';
import Header from '@/components/app/Header';

export default function AchievementsPage() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-transparent">
      <Header />
      <main className="flex-1">
        <section id="achievements" className="container py-24 sm:py-32">
          <div className="text-center">
            <h1 className="text-3xl font-bold tracking-tight md:text-4xl">Honors & Achievements</h1>
            <p className="mt-4 text-lg text-muted-foreground">A recognition of my dedication and accomplishments.</p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {achievements.map((achievement) => (
              <AchievementCard key={achievement.id} achievement={achievement} />
            ))}
          </div>
        </section>
      </main>
      <footer className="py-8 text-center text-muted-foreground">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Syntax & Synapse. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
