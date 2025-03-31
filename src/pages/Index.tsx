import { useState, useEffect } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/home/Hero';
import FeaturedSection from '@/components/home/FeaturedSection';
import NavigationCards from '@/components/home/NavigationCards';
import NewsletterSignup from '@/components/home/NewsletterSignup';
import Testimonials from '@/components/home/Testimonials';
import AnimatedStats from '@/components/home/AnimatedStats';
import Features from '@/components/home/Features';
import BusinessDivisions from '@/components/home/BusinessDivisions';
import CoreValues from '@/components/home/CoreValues';
import MissionVision from '@/components/home/MissionVision';
import CallToAction from '@/components/home/CallToAction';

const Index = () => {
  // Page load animation state
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Set page as loaded after a short delay to ensure smooth transition
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      {/* Header component */}
      <Header />
      <main>
        <Hero />
        <AnimatedStats />
        <BusinessDivisions />
        <Features />
        <MissionVision />
        <CoreValues />
        <FeaturedSection />
        <NavigationCards />
        <Testimonials />
        <CallToAction />
        <NewsletterSignup />
      </main>
      {/* Footer component */}
      <Footer />
    </div>
  );
};

export default Index;
