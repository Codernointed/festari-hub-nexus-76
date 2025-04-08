
/**
 * Utility service for optimizing website performance
 * Handles image preloading, caching, and other performance improvements
 */

// Image URLs to preload for faster page rendering
const criticalImages = [
  "/logo-icon.png",
  "/logo-icon-black.png",
  "/base_logo_transparent_background.png",
  "/black_text-logoname_transparent_background.png",
  "/white-text.png"
];

// Video URLs to preload
const criticalVideos = [
  "https://player.vimeo.com/external/459786579.sd.mp4?s=f657763306dfda2277e4e9079990e15fad6a387c&profile_id=164&oauth2_token_id=57447761",
  "https://player.vimeo.com/external/517090081.sd.mp4?s=ec9e7fa812f3652a76c42adde73be7df1e440239&profile_id=164&oauth2_token_id=57447761",
  "https://player.vimeo.com/external/370467553.sd.mp4?s=90e8aeacc23552520da6c873110ebd19ccf981c9&profile_id=164&oauth2_token_id=57447761"
];

/**
 * Preloads critical assets to improve initial load times
 */
export const preloadCriticalAssets = () => {
  // Preload critical images
  criticalImages.forEach(url => {
    const img = new Image();
    img.src = url;
  });
  
  // Preload critical videos for hero section
  criticalVideos.forEach(url => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = url;
    link.as = 'video';
    document.head.appendChild(link);
  });
};

/**
 * Sets up caching headers for static assets
 * This is done via Service Worker to cache assets for offline use
 */
export const setupCaching = () => {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/service-worker.js').then(
        (registration) => {
          console.log('ServiceWorker registration successful with scope: ', registration.scope);
        },
        (err) => {
          console.log('ServiceWorker registration failed: ', err);
        }
      );
    });
  }
};

/**
 * Implements lazy loading for non-critical images
 */
export const setupLazyLoading = () => {
  // Use Intersection Observer to lazy load images
  if ('IntersectionObserver' in window) {
    const lazyImages = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          img.src = img.dataset.src || '';
          imageObserver.unobserve(img);
        }
      });
    });
    
    lazyImages.forEach(image => {
      imageObserver.observe(image);
    });
  } else {
    // Fallback for browsers that don't support Intersection Observer
    const lazyImages = document.querySelectorAll('img[data-src]');
    lazyImages.forEach(img => {
      const image = img as HTMLImageElement;
      image.src = image.dataset.src || '';
    });
  }
};

/**
 * Optimizes performance by implementing various techniques
 */
export const optimizePerformance = () => {
  preloadCriticalAssets();
  setupLazyLoading();
  setupCaching();
};

export default optimizePerformance;
