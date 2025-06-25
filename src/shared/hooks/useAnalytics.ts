import { useCallback } from 'react';
import { trackEvent } from '@/shared/components/GoogleTagManager';

/**
 * Interface defining the analytics tracking functions available through the useAnalytics hook
 */
interface UseAnalytics {
  /**
   * Tracks demo-related click events
   * @param source - Identifier for the source of the click (e.g., 'explore_dashboard_button')
   */
  trackDemoClick: (source: string) => void;

  /**
   * Tracks page view events
   * @param url - The URL of the page being viewed
   */
  trackPageView: (url: string) => void;
}

/**
 * Custom hook for analytics tracking throughout the application
 * @returns Object containing tracking functions
 */
export const useAnalytics = (): UseAnalytics => {
  /**
   * Tracks clicks on demo-related elements
   * @param source - Identifier for the source of the click
   */
  const trackDemoClick = useCallback((source: string) => {
    trackEvent('demo_click', 'Demo', source);
  }, []);

  /**
   * Tracks page view events when navigation occurs
   * @param url - The URL of the page being viewed
   */
  const trackPageView = useCallback((url: string) => {
    trackEvent('page_view', 'Navigation', url, {
      page_path: url,
    });
  }, []);

  return {
    trackDemoClick,
    trackPageView,
  };
};
