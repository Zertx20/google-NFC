interface ViewContentData {
  content_name: string;
  content_type: string;
  value: number;
  currency: string;
}

interface LeadData {
  content_name: string;
}

declare global {
  interface Window {
    fbq?: (...args: any[]) => void;
  }
}

class MetaPixel {
  private static instance: MetaPixel;
  private pixelId: string = '1910072642926314';
  private isInitialized: boolean = false;
  private lastTrackedPath: string = '';

  private constructor() {}

  public static getInstance(): MetaPixel {
    if (!MetaPixel.instance) {
      MetaPixel.instance = new MetaPixel();
    }
    return MetaPixel.instance;
  }

  public init(): void {
    try {
      if (this.isInitialized || typeof window === 'undefined') {
        return;
      }

      // Check if fbq exists before using it
      if (typeof window.fbq === 'function') {
        window.fbq('init', this.pixelId);
        this.isInitialized = true;
        console.log('Meta Pixel initialized');
      } else {
        console.warn('Meta Pixel fbq not available');
      }
    } catch (error) {
      console.error('Meta Pixel initialization failed:', error);
    }
  }

  public trackPageView(pathname: string): void {
    try {
      if (!this.isInitialized || typeof window === 'undefined' || typeof window.fbq !== 'function') {
        return;
      }

      // Prevent duplicate PageView for same path
      if (this.lastTrackedPath === pathname) {
        return;
      }

      window.fbq('track', 'PageView');
      this.lastTrackedPath = pathname;
      console.log('Meta Pixel PageView tracked for:', pathname);
    } catch (error) {
      console.error('Meta Pixel PageView tracking failed:', error);
    }
  }

  public trackViewContent(data: ViewContentData): void {
    try {
      if (typeof window === 'undefined' || typeof window.fbq !== 'function') {
        return;
      }

      window.fbq('track', 'ViewContent', {
        content_name: data.content_name,
        content_type: data.content_type,
        value: data.value,
        currency: data.currency
      });
      console.log('Meta Pixel ViewContent tracked:', data);
    } catch (error) {
      console.error('Meta Pixel ViewContent tracking failed:', error);
    }
  }

  public trackLead(data: LeadData): void {
    try {
      if (typeof window === 'undefined' || typeof window.fbq !== 'function') {
        return;
      }

      window.fbq('track', 'Lead', {
        content_name: data.content_name
      });
      console.log('Meta Pixel Lead tracked:', data);
    } catch (error) {
      console.error('Meta Pixel Lead tracking failed:', error);
    }
  }
}

export const metaPixel = MetaPixel.getInstance();
export type { ViewContentData, LeadData };
