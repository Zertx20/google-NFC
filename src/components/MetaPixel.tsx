import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { metaPixel } from '../utils/MetaPixel';

const MetaPixel = () => {
  const location = useLocation();

  useEffect(() => {
    // Initialize Meta Pixel once - wrapped in try-catch
    try {
      metaPixel.init();
    } catch (error) {
      console.error('MetaPixel component initialization failed:', error);
    }
  }, []);

  useEffect(() => {
    // Track ViewContent only on product page - wrapped in try-catch
    try {
      if (location.pathname === '/' || location.pathname === '/home') {
        metaPixel.trackViewContent({
          content_name: 'Carte NFC',
          content_type: 'product',
          value: 1,
          currency: 'DZD'
        });
      }
    } catch (error) {
      console.error('MetaPixel ViewContent tracking failed:', error);
    }
  }, [location.pathname]);

  return null; // This component doesn't render anything
};

export default MetaPixel;
