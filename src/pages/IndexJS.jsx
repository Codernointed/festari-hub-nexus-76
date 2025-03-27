
import React, { useState, useEffect } from 'react';
import HeaderJS from '../components/layout/HeaderJS';
import HeroJS from '../components/home/HeroJS';
import NavigationCardsJS from '../components/home/NavigationCardsJS';
import NewsletterSignupJS from '../components/home/NewsletterSignupJS';

/**
 * JavaScript version of the Index page
 */
const IndexJS = () => {
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
      <HeaderJS />
      <main className="min-h-screen bg-background">
        <HeroJS />
        <NavigationCardsJS />
        <NewsletterSignupJS />
      </main>
    </div>
  );
};

export default IndexJS;
