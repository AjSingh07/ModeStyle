import React from 'react';
import Hero from '../components/Hero';
import { FeaturedCategories } from '../components/FeaturedCategories';
import { TrendingSection } from '../components/TrendingSection';
import NewArrivals from '../components/NewArrivals';
import { ProductHighlights } from '../components/ProductHighlights';
import { Testimonials } from '../components/Testimonials';
import { Newsletter } from '../components/Newsletter';

export const HomePage = () => {
  return (
    <main>
      <Hero />
      <FeaturedCategories />
      <TrendingSection />
      <NewArrivals />
      <ProductHighlights />
      <Testimonials />
      <Newsletter />
    </main>
  );
};