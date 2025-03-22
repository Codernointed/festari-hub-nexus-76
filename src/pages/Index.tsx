
import { useState, useEffect } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/home/Hero';
import FeaturedSection from '@/components/home/FeaturedSection';
import NavigationCards from '@/components/home/NavigationCards';
import NewsletterSignup from '@/components/home/NewsletterSignup';

const Index = () => {
  // Page load animation state
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className={`transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <Header />
      <main>
        <Hero />
        <NavigationCards />
        <FeaturedSection />
        <NewsletterSignup />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
