// src/components/SEO.jsx
import { Helmet } from "react-helmet-async";
import { siteConfig } from "../config/siteConfig";

export default function SEO({
  title,
  description,
  image,
  url,
  type = "website",
  schema,
  keywords,
  author = "St. Jude Career Alliance",
  noindex = false,
  canonical,
}) {
  // Use siteConfig defaults if not provided
  const seoTitle = title 
    ? `${title} | ${siteConfig.name}`
    : siteConfig.defaultTitle;
  
  const seoDescription = description || siteConfig.defaultDescription;
  const seoImage = image || siteConfig.defaultImage;
  
  // Ensure URL is always non-www for consistency
  const normalizeUrl = (url) => {
    if (!url) return siteConfig.url;
    return url.replace(/^https?:\/\/www\./, 'https://');
  };
  
  const seoUrl = normalizeUrl(url || siteConfig.url);
  const seoCanonical = normalizeUrl(canonical || seoUrl);
  return (
    <Helmet>
      {/* Basic meta tags */}
      <title>{seoTitle}</title>
      <meta name="description" content={seoDescription} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="author" content={author} />
      <link rel="canonical" href={seoCanonical} />
      
      {/* Robots meta tag */}
      {noindex && <meta name="robots" content="noindex, nofollow" />}

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={seoTitle} />
      <meta property="og:description" content={seoDescription} />
      <meta property="og:image" content={seoImage} />
      <meta property="og:url" content={seoUrl} />
      <meta property="og:site_name" content={siteConfig.name} />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seoTitle} />
      <meta name="twitter:description" content={seoDescription} />
      <meta name="twitter:image" content={seoImage} />
      <meta name="twitter:url" content={seoUrl} />

      {/* Additional meta tags for better SEO */}
      <meta name="format-detection" content="telephone=no" />
      <meta name="theme-color" content="#204370" />
      
      {/* Schema.org structured data */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
      
      {/* Default organization schema if none provided */}
      {!schema && (
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            ...siteConfig.organization,
          })}
        </script>
      )}
    </Helmet>
  );
}
