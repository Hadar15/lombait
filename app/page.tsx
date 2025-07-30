import HeroSection from '@/components/sections/HeroSection';
import FeaturedCompetitions from '@/components/sections/FeaturedCompetitions';
import StatsSection from '@/components/sections/StatsSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import NewsletterSection from '@/components/sections/NewsletterSection';

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <FeaturedCompetitions />
      <StatsSection />
      <TestimonialsSection />
      <NewsletterSection />
    </main>
  );
}