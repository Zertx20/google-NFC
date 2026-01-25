// Meta Pixel utility functions
declare global {
  interface Window {
    fbq?: (
      action: string,
      event: string,
      params?: Record<string, any>
    ) => void;
    _fbPixelInitialized?: boolean;
  }
}

/**
 * Initialize Meta Pixel tracking
 */
export const initMetaPixel = () => {
  if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
    return true;
  }
  return false;
};

/**
 * Track PageView event
 */
export const trackPageView = () => {
  if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
    // Ensure pixel is initialized
    if (!window._fbPixelInitialized) {
      window.fbq('init', '1910072642926314');
      window._fbPixelInitialized = true;
    }
    window.fbq('track', 'PageView');
  }
};

/**
 * Track ViewContent event
 */
export const trackViewContent = (contentData?: Record<string, any>) => {
  if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
    if (contentData) {
      window.fbq('track', 'ViewContent', contentData);
    } else {
      window.fbq('track', 'ViewContent');
    }
  }
};

/**
 * Track Lead event
 */
export const trackLead = (leadData?: Record<string, any>) => {
  if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
    if (leadData) {
      window.fbq('track', 'Lead', leadData);
    } else {
      window.fbq('track', 'Lead');
    }
  }
};

/**
 * Track InitiateCheckout event
 */
export const trackInitiateCheckout = (checkoutData?: Record<string, any>) => {
  if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
    if (checkoutData) {
      window.fbq('track', 'InitiateCheckout', checkoutData);
    } else {
      window.fbq('track', 'InitiateCheckout');
    }
  }
};

/**
 * Track Purchase event
 */
export const trackPurchase = (purchaseData?: Record<string, any>) => {
  if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
    if (purchaseData) {
      window.fbq('track', 'Purchase', purchaseData);
    } else {
      window.fbq('track', 'Purchase');
    }
  }
};

