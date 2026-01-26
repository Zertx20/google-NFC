interface MetaPixelEvent {
  event_name: string;
  event_time: number;
  action_source: 'website';
  user_data?: any;
  custom_data?: any;
}

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
  private hasPageView: boolean = false;
  private hasViewContent: boolean = false;

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

    // Initialize Meta Pixel
    if (window.fbq) {
      window.fbq('init', this.pixelId);
      this.isInitialized = true;
      console.log('Meta Pixel initialized');
    }
  }

  public trackPageView(): void {
    if (!this.isInitialized || !window.fbq || this.hasPageView) {
      return;
    }

    window.fbq('track', 'PageView');
    this.hasPageView = true;
    console.log('Meta Pixel PageView tracked');
  }

  public trackViewContent(data: ViewContentData): void {
    if (!this.isInitialized || !window.fbq || this.hasViewContent) {
      return;
    }

    window.fbq('track', 'ViewContent', {
      content_name: data.content_name,
      content_type: data.content_type,
      value: data.value,
      currency: data.currency
    });
    this.hasViewContent = true;
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

  public resetViewContent(): void {
    this.hasViewContent = false;
  }

  public resetPageView(): void {
    this.hasPageView = false;
  }
}

export const metaPixel = MetaPixel.getInstance();
export type { ViewContentData, LeadData };
