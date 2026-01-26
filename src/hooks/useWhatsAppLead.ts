import { useCallback } from 'react';
import { metaPixel } from '../utils/MetaPixel';

export const useWhatsAppLead = () => {
  const trackWhatsAppLead = useCallback(() => {
    try {
      // Track Lead event before redirect - wrapped in try-catch
      metaPixel.trackLead({
        content_name: 'Commande Carte NFC'
      });
    } catch (error) {
      console.error('WhatsApp Lead tracking failed:', error);
    }
  }, []);

  return { trackWhatsAppLead };
};
