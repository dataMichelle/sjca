// sitemap-gen.cjs 
import { routes } from './src/data/routes.js';
import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'fs';

const hostname = 'https://www.stjudecareeralliance.com'; // Your actual domain

const links = routes.map(route => ({
  url: route.to,
  changefreq: 'monthly',
  priority: route.to === '/' ? 1.0 : 0.8,
}));

const sitemap = new SitemapStream({ hostname });
const writeStream = createWriteStream('./public/sitemap.xml');
for (const link of links) sitemap.write(link);
sitemap.end();

streamToPromise(sitemap).then(sm => writeStream.end(sm));
