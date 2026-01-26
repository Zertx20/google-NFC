import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { metaPixel } from '../utils/MetaPixel';

const PageViewTracker = () => {
  const location = useLocation();

  useEffect(() => {
    // Track PageView on route change - wrapped in try-catch
    try {
      metaPixel.trackPageView(location.pathname);
    } catch (error) {
      console.error('PageViewTracker failed:', error);
    }
  }, [location.pathname]);

  return null; // This component doesn't render anything
};

export default PageViewTracker;
