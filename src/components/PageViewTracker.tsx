import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { metaPixel } from '../utils/MetaPixel';

const PageViewTracker = () => {
  const location = useLocation();

  useEffect(() => {
    // Track PageView on route change
    metaPixel.trackPageView(location.pathname);
  }, [location.pathname]);

  return null; // This component doesn't render anything
};

export default PageViewTracker;
