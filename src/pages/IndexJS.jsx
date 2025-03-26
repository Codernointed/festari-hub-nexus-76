
import React from 'react';
import HeroJS from '../components/home/HeroJS';
import NavigationCardsJS from '../components/home/NavigationCardsJS';
import NewsletterSignupJS from '../components/home/NewsletterSignupJS';

/**
 * JavaScript version of the Index page
 */
const IndexJS = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroJS />
      <NavigationCardsJS />
      <NewsletterSignupJS />
    </div>
  );
};

export default IndexJS;
