import React, { useEffect } from 'react';
import { Hero } from '../components/Hero';
import { FeaturedProducts } from '../components/FeaturedProducts';
import { RitualShowcaseSection } from '../components/RitualShowcaseSection';
import { BrandStory } from '../components/BrandStory';
import { CollectionSection } from '../components/CollectionSection';
import { IngredientsSection } from '../components/IngredientsSection';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { NewsletterSection } from '../components/NewsletterSection';

export const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <Hero />
      <FeaturedProducts />
      <RitualShowcaseSection />
      <BrandStory />
      <CollectionSection />
      <IngredientsSection />
      <TestimonialsSection />
      <NewsletterSection />
    </main>
  );
};
