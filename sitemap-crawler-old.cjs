import SitemapGenerator from 'sitemap-generator';

// Replace with your actual site URL (local or deployed)
const generator = SitemapGenerator('https://localhost:5173', {
  stripQuerystring: false,
  filepath: './public/sitemap.xml'
});

generator.start();