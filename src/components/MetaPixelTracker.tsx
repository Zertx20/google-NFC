import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// TypeScript declarations for Meta Pixel functions
declare global {
  interface Window {
    trackPageView?: (pathname: string) => void;
    trackPurchase?: () => void;
    lastTrackedPath?: string;
  }
}

/**
 * Meta Pixel Tracker for React SPA
 * Handles PageView events on route changes
 */
export default function MetaPixelTracker() {
  const location = useLocation();

  useEffect(() => {
    // Track PageView on route changes
    if (typeof window !== 'undefined' && window.trackPageView) {
      window.trackPageView(location.pathname);
    }
  }, [location.pathname]);

  return null; // This component doesn't render anything
}
