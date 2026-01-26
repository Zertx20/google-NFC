import { useCallback } from 'react';
import { metaPixel } from '../utils/MetaPixel';

export const useWhatsAppLead = () => {
  const trackWhatsAppLead = useCallback(() => {
    // Track Lead event before redirect
    metaPixel.trackLead({
      content_name: 'Commande Carte NFC'
    });
  }, []);

  return { trackWhatsAppLead };
};
