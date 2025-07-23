// Site configuration for SEO and analytics
export const siteConfig = {
  // Basic site information
  name: 'St. Jude Career Alliance',
  description: 'Empowering job seekers with hope, guidance, and practical tools through faith-based career support and networking.',
  url: import.meta.env.VITE_SITE_URL || 'https://stjudecareeralliance.com',
  
  // SEO defaults
  defaultTitle: 'St. Jude Career Alliance - Faith-Based Career Support',
  titleTemplate: '%s | St. Jude Career Alliance',
  defaultDescription: 'Join St. Jude Career Alliance for empowering workshops, mentoring, and faith-based career guidance. We help job seekers build confidence, network effectively, and find meaningful employment.',
  defaultImage: 'https://stjudecareeralliance.com/assets/og-image.png',
  
  // Google Analytics
  googleAnalyticsId: import.meta.env.VITE_GA_TRACKING_ID || 'G-XXXXXXXXXX', // Replace with your actual Google Analytics 4 tracking ID
  
  // Social media and contact
  social: {
    linkedin: 'https://www.linkedin.com/company/st-jude-career-alliance',
    facebook: '', // Add if you have one
    twitter: '', // Add if you have one
  },
  
  // Contact information
  contact: {
    email: import.meta.env.VITE_CONTACT_EMAIL || 'info@stjudecareeralliance.com', // Update with actual email
    phone: '', // Add if you want to include
    address: 'Allen, Texas', // Update with actual address if desired
  },
  
  // Organization schema data
  organization: {
    '@type': 'Organization',
    name: 'St. Jude Career Alliance',
    description: 'Faith-based career support organization providing workshops, mentoring, and job search assistance.',
    url: 'https://stjudecareeralliance.com',
    logo: 'https://stjudecareeralliance.com/assets/logos/SJ_logo.png',
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      email: 'info@stjudecareeralliance.com',
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Allen',
      addressRegion: 'TX',
      addressCountry: 'US',
    },
  },
};
