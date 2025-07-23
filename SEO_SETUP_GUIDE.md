# SEO & Google Analytics Setup Guide

## 🎯 What's Been Set Up

### ✅ Google Analytics 4 (GA4)
- **Component**: `src/components/GoogleAnalytics.jsx` - Handles GA4 tracking
- **Utilities**: `src/utils/analytics.js` - Helper functions for event tracking
- **Integration**: Added to `App.jsx` for site-wide tracking

### ✅ Enhanced SEO Component
- **Component**: `src/components/SEO.jsx` - Enhanced with more comprehensive meta tags
- **Features**: 
  - Dynamic titles and descriptions
  - Open Graph tags for social sharing
  - Twitter Card support
  - Schema.org structured data
  - Canonical URLs
  - Keywords support

### ✅ Site Configuration
- **Config**: `src/config/siteConfig.js` - Centralized site settings
- **Environment**: `.env.example` - Template for environment variables

### ✅ Existing Files Enhanced
- **index.html** - Already has good SEO meta tags
- **robots.txt** - Already exists in public/
- **sitemap.xml** - Already exists in public/

## 🚀 Next Steps to Complete Setup

### 1. Set Up Google Analytics 4
1. Go to [Google Analytics](https://analytics.google.com/)
2. Create a new GA4 property for your website
3. Get your tracking ID (format: G-XXXXXXXXXX)
4. Create a `.env.local` file in your project root:
   ```
   VITE_GA_TRACKING_ID=G-YOUR-ACTUAL-TRACKING-ID
   VITE_SITE_URL=https://stjudecareeralliance.com
   VITE_CONTACT_EMAIL=your-actual-email@domain.com
   ```

### 2. Google Search Console
1. Go to [Google Search Console](https://search.google.com/search-console/)
2. Add your property: `https://stjudecareeralliance.com`
3. Verify ownership (you already have the meta tag in index.html)
4. Submit your sitemap: `https://stjudecareeralliance.com/sitemap.xml`

### 3. Update sitemap.xml
- Your sitemap exists but may need updates with current routes
- Make sure all active pages are included
- Update lastmod dates regularly

### 4. Schema.org Structured Data
- Organization schema is automatically added via SEO component
- Consider adding:
  - Event schema for workshops
  - FAQ schema for FAQ page
  - Article schema for news items

## 📊 Available Analytics Events

The analytics utility provides these tracking functions:

```javascript
import { trackButtonClick, trackFormSubmit, trackDownload, trackOutboundLink, trackWorkshopRegistration } from '../utils/analytics';

// Track button clicks
trackButtonClick('Register Now', 'Workshop Page');

// Track form submissions
trackFormSubmit('Contact Form');

// Track file downloads
trackDownload('workshop-flyer.pdf');

// Track external links
trackOutboundLink('https://external-site.com');

// Track workshop registrations
trackWorkshopRegistration('July 12, 2025');
```

## 🎯 SEO Best Practices Implemented

### ✅ Technical SEO
- Semantic HTML structure
- Fast loading with Vite
- Mobile-responsive design
- Proper heading hierarchy
- Clean URLs with React Router

### ✅ On-Page SEO
- Unique titles for each page
- Meta descriptions under 160 characters
- Keyword-optimized content
- Alt tags for images
- Internal linking structure

### ✅ Social Media Optimization
- Open Graph tags for Facebook/LinkedIn
- Twitter Card tags
- High-quality og-image.png

## 📝 Recommended Updates for Each Page

### Example: Workshop Page
```jsx
<SEO
  title="Career Workshop"
  description="Join our quarterly workshop to enhance your career skills with expert guidance on confidence building, networking, and interview preparation."
  keywords="career workshop, job search skills, networking, interview preparation, St. Jude Career Alliance"
  schema={{
    "@context": "https://schema.org",
    "@type": "Event",
    "name": "St. Jude Career Alliance Workshop",
    "description": "Quarterly career development workshop",
    "startDate": "2025-07-12T09:00:00",
    "location": {
      "@type": "Place",
      "name": "St. Jude Catholic Church",
      "address": "Allen, TX"
    }
  }}
/>
```

## 🔧 Performance Optimization

### Already Good:
- React with Vite (fast builds)
- Optimized images in /assets/
- CSS modules for styling

### Consider Adding:
- Image optimization (webp format)
- Lazy loading for images
- Service worker for caching
- Compression (gzip/brotli)

## 📈 Monitoring & Maintenance

### Regular Tasks:
1. **Monthly**: Update sitemap.xml lastmod dates
2. **Quarterly**: Review GA4 reports and adjust strategy
3. **After content changes**: Test structured data with [Schema Markup Validator](https://validator.schema.org/)
4. **Ongoing**: Monitor Core Web Vitals in Search Console

### Key Metrics to Track:
- Organic traffic growth
- Workshop registration conversions
- Contact form submissions
- Page load speeds
- Mobile usability

## 🛠️ Tools for SEO Monitoring

1. **Google Analytics 4** - Traffic and user behavior
2. **Google Search Console** - Search performance and indexing
3. **Google PageSpeed Insights** - Core Web Vitals
4. **Schema Markup Validator** - Structured data testing
5. **Lighthouse** - Overall site quality audit

## 🎯 Content Strategy Recommendations

1. **Blog/News Section**: Regular updates help with SEO rankings
2. **Success Stories**: Add individual testimonial pages
3. **Workshop Archive**: Create pages for past workshop materials
4. **FAQ Content**: Expand with common job search questions
5. **Local SEO**: Add location-specific content for Allen, TX area

---

**Need Help?** 
- Check the console for any GA4 tracking issues
- Use browser dev tools to verify meta tags are loading correctly
- Test social sharing with Facebook's [Sharing Debugger](https://developers.facebook.com/tools/debug/)
