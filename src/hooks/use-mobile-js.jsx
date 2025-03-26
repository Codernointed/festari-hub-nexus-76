
import * as React from "react";

const MOBILE_BREAKPOINT = 768;

/**
 * JavaScript version of the useIsMobile hook
 * @returns {boolean} Whether the current viewport is mobile
 */
export function useIsMobileJS() {
  const [isMobile, setIsMobile] = React.useState(undefined);

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };
    
    if (typeof mql.addEventListener === 'function') {
      mql.addEventListener("change", onChange);
    } else {
      // Fallback for older browsers
      mql.addListener(onChange);
    }
    
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    
    return () => {
      if (typeof mql.removeEventListener === 'function') {
        mql.removeEventListener("change", onChange);
      } else {
        // Fallback for older browsers
        mql.removeListener(onChange);
      }
    };
  }, []);

  return !!isMobile;
}
