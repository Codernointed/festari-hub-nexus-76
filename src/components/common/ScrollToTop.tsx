
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Reset scroll position to top when route changes
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'  // Use 'instant' instead of 'smooth' to avoid animation
    });
  }, [pathname]);

  return null;
};
