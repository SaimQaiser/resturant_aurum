import HeroSection from '@/components/sections/HeroSection';
import StatsSection from '@/components/sections/StatsSection';
import FeaturedDishes from '@/components/sections/FeaturedDishes';
import ChefSpotlight from '@/components/sections/ChefSpotlight';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import GallerySection from '@/components/sections/GallerySection';
import ReservationCTA from '@/components/sections/ReservationCTA';
import NewsletterSection from '@/components/sections/NewsletterSection';

// Landing page — the full luxury narrative, top to bottom.
export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <FeaturedDishes />
      <ChefSpotlight />
      <TestimonialsSection />
      <GallerySection />
      <ReservationCTA />
      <NewsletterSection />
    </>
  );
}
