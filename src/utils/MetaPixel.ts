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
    fbq?: (command: string, eventName: string, parameters?: any) => void;
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
    if (this.isInitialized || typeof window === 'undefined') {
      return;
    }

    // Initialize Meta Pixel (only init, no PageView here)
    if (window.fbq) {
      window.fbq('init', this.pixelId);
      this.isInitialized = true;
      console.log('Meta Pixel initialized');
    }
  }

  public trackPageView(pathname: string): void {
    if (!this.isInitialized || !window.fbq) {
      return;
    }

    // Prevent duplicate PageView for same path
    if (this.lastTrackedPath === pathname) {
      return;
    }

    window.fbq('track', 'PageView');
    this.lastTrackedPath = pathname;
    console.log('Meta Pixel PageView tracked for:', pathname);
  }

  public trackViewContent(data: ViewContentData): void {
    if (!this.isInitialized || !window.fbq) {
      return;
    }

    window.fbq('track', 'ViewContent', {
      content_name: data.content_name,
      content_type: data.content_type,
      value: data.value,
      currency: data.currency
    });
    console.log('Meta Pixel ViewContent tracked:', data);
  }

  public trackLead(data: LeadData): void {
    if (!this.isInitialized || !window.fbq) {
      return;
    }

    window.fbq('track', 'Lead', {
      content_name: data.content_name
    });
    console.log('Meta Pixel Lead tracked:', data);
  }
}

export const metaPixel = MetaPixel.getInstance();
export type { ViewContentData, LeadData };
