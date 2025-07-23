import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const GoogleAnalytics = ({ trackingId }) => {
  const location = useLocation();

  useEffect(() => {
    if (!trackingId) return;

    // Load Google Analytics script
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${trackingId}`;
    document.head.appendChild(script);

    // Initialize gtag
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    window.gtag = gtag;
    
    gtag('js', new Date());
    gtag('config', trackingId, {
      page_title: document.title,
      page_location: window.location.href,
    });

    // Clean up script on unmount
    return () => {
      document.head.removeChild(script);
    };
  }, [trackingId]);

  // Track page views on route changes
  useEffect(() => {
    if (!trackingId || !window.gtag) return;

    window.gtag('config', trackingId, {
      page_title: document.title,
      page_location: window.location.href,
      page_path: location.pathname + location.search,
    });
  }, [location, trackingId]);

  return null;
};

export default GoogleAnalytics;
