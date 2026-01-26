import { useEffect } from 'react';
import { metaPixel } from '../utils/MetaPixel';

const MetaPixel = () => {
  useEffect(() => {
    // Initialize Meta Pixel
    metaPixel.init();
    
    // Track initial PageView
    metaPixel.trackPageView();

    // Track ViewContent for product page
    metaPixel.trackViewContent({
      content_name: 'Carte NFC',
      content_type: 'product',
      value: 1,
      currency: 'DZD'
    });
  }, []);

  return null; // This component doesn't render anything
};

export default MetaPixel;
