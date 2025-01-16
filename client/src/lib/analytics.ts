type GAEventProps = {
  action: string;
  category: string;
  label?: string;
  value?: number;
};

export const trackEvent = ({ action, category, label, value }: GAEventProps) => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value
    });
  }
};

// Type declaration for gtag
declare global {
  interface Window {
    gtag: (
      command: 'event' | 'config' | 'js' | 'set',
      targetId: string,
      config?: Record<string, any>
    ) => void;
    dataLayer: any[];
  }
}
