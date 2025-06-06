// src/components/SEO.jsx
import { Helmet } from "react-helmet";

const defaultTitle = "St. Jude Career Alliance";
const defaultDescription =
  "Empowering individuals in their job search or career change through faith-based support.";
const defaultImage = "https://stjudecareeralliance.com/assets/og-image.png";
const defaultUrl = "https://stjudecareeralliance.com/";

export default function SEO({
  title = defaultTitle,
  description = defaultDescription,
  image = defaultImage,
  url = defaultUrl,
}) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content="St. Jude Career Alliance" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:url" content={url} />
    </Helmet>
  );
}
