"use client";

import { trackSovereignEvent } from '@/lib/sovereignty';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { FeaturesSection } from './components/FeaturesSection';
import { SolutionsSection } from './components/SolutionsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    trackSovereignEvent('page_view', { page: 'home' });
  }, []);

  return (
    <main className="min-h-screen bg-void-950 text-white">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <SolutionsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
