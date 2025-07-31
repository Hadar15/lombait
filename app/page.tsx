import HeroSection from '@/components/sections/HeroSection';
import FeaturedCompetitions from '@/components/sections/FeaturedCompetitions';
import StatsSection from '@/components/sections/StatsSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';

// Force dynamic rendering to prevent caching
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <div id="after-hero">
        <FeaturedCompetitions />
      </div>
      <StatsSection />
      <TestimonialsSection />
    </main>
  );
}