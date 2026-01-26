import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { metaPixel } from '../utils/MetaPixel';

const MetaPixel = () => {
  const location = useLocation();

  useEffect(() => {
    // Initialize Meta Pixel once
    metaPixel.init();
  }, []);

  useEffect(() => {
    // Track ViewContent only on product page (home page)
    if (location.pathname === '/' || location.pathname === '/home') {
      metaPixel.trackViewContent({
        content_name: 'Carte NFC',
        content_type: 'product',
        value: 1,
        currency: 'DZD'
      });
    }
  }, [location.pathname]);

  return null; // This component doesn't render anything
};

export default MetaPixel;
