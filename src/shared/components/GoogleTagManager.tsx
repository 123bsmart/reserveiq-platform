import Script from 'next/script';

interface GoogleTagManagerProps {
  gtmId: string;
}

export const GoogleTagManager = ({ gtmId }: GoogleTagManagerProps): JSX.Element => {
  return (
    <>
      {/* Google Tag Manager - Script */}
      <Script
        id="gtm-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${gtmId}');
          `,
        }}
      />
    </>
  );
};

// Define types for analytics data
export interface AnalyticsEventData {
  event: string;
  event_category?: string;
  event_label?: string;
  page_path?: string;
  [key: string]: string | number | boolean | undefined;
}

// Helper function to push events to the data layer
export const pushToDataLayer = (data: AnalyticsEventData): void => {
  if (typeof window !== 'undefined') {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(data);
  }
};

// Helper function similar to the legacy trackDemoClick
export const trackEvent = (
  eventName: string,
  eventCategory: string,
  eventLabel: string,
  additionalParams: Omit<AnalyticsEventData, 'event' | 'event_category' | 'event_label'> = {}
): void => {
  pushToDataLayer({
    event: eventName,
    event_category: eventCategory,
    event_label: eventLabel,
    ...additionalParams,
  });
};

// Add TypeScript declaration for dataLayer
declare global {
  interface Window {
    dataLayer: AnalyticsEventData[];
  }
}
