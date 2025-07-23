// Google Analytics utility functions
import { siteConfig } from '../config/siteConfig';

export const gtag = (...args) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag(...args);
  }
};

// Track page views
export const trackPageView = (url, title) => {
  gtag('config', siteConfig.googleAnalyticsId, {
    page_title: title,
    page_location: url,
  });
};

// Track custom events
export const trackEvent = ({ action, category, label, value }) => {
  gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};

// Common event tracking functions
export const trackButtonClick = (buttonName, location) => {
  trackEvent({
    action: 'click',
    category: 'Button',
    label: `${buttonName} - ${location}`,
  });
};

export const trackFormSubmit = (formName) => {
  trackEvent({
    action: 'submit',
    category: 'Form',
    label: formName,
  });
};

export const trackDownload = (fileName) => {
  trackEvent({
    action: 'download',
    category: 'File',
    label: fileName,
  });
};

export const trackOutboundLink = (url) => {
  trackEvent({
    action: 'click',
    category: 'Outbound Link',
    label: url,
  });
};

export const trackWorkshopRegistration = (workshopDate) => {
  trackEvent({
    action: 'register',
    category: 'Workshop',
    label: workshopDate,
  });
};

export const trackVolunteerFormStart = () => {
  trackEvent({
    action: 'start',
    category: 'Volunteer Form',
    label: 'Form Started',
  });
};

export const trackContactFormSubmit = () => {
  trackEvent({
    action: 'submit',
    category: 'Contact Form',
    label: 'Contact Form Submitted',
  });
};
