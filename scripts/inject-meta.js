/**
 * Post-build script: injects per-route SEO meta tags into static HTML files.
 *
 * Run after `vite build`. For each route in routes-meta.js it:
 *   - Resolves hashed asset paths via dist/.vite/manifest.json
 *   - Replaces <!-- SEO_META_PLACEHOLDER --> in dist/index.html
 *   - Writes dist/<route>/index.html (or overwrites dist/index.html for "/")
 */

import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { routesMeta, BASE_URL } from './routes-meta.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const distDir = join(__dirname, '..', 'dist');

// Read Vite manifest to resolve hashed asset filenames
const manifest = JSON.parse(
  readFileSync(join(distDir, '.vite', 'manifest.json'), 'utf-8')
);

function resolveImageUrl(imageSource) {
  if (!imageSource) return null;
  const entry = manifest[imageSource];
  if (entry?.file) return `${BASE_URL}/${entry.file}`;
  return null;
}

function escapeHtml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function buildMetaBlock(routeMeta) {
  const { title, description, canonical, ogType, imageSource, datePublished, category, jsonLd } =
    routeMeta;

  const imageUrl = resolveImageUrl(imageSource);
  const safeTitle = escapeHtml(title);
  const safeDesc = escapeHtml(description);

  const isArticle = ogType === 'article';

  const articleJsonLd = isArticle
    ? {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: title,
        description,
        ...(imageUrl && { image: imageUrl }),
        datePublished,
        author: {
          '@type': 'Person',
          name: 'Pilar Beleña',
          url: BASE_URL,
          sameAs: ['https://linkedin.com/in/pilarbelena'],
        },
        publisher: {
          '@type': 'Person',
          name: 'Pilar Beleña',
          url: BASE_URL,
        },
        url: canonical,
        inLanguage: 'es',
        articleSection: category,
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': canonical,
        },
      }
    : null;

  const effectiveJsonLd = jsonLd ?? articleJsonLd;

  return `<title>${safeTitle}</title>
    <meta name="description" content="${safeDesc}" />
    <meta name="author" content="Pilar Beleña" />
    <meta name="robots" content="index, follow" />
    <link rel="canonical" href="${canonical}" />
    <meta property="og:title" content="${safeTitle}" />
    <meta property="og:description" content="${safeDesc}" />
    <meta property="og:type" content="${ogType}" />
    <meta property="og:url" content="${canonical}" />
    <meta property="og:site_name" content="Pilar Beleña - SEO Fintech Lab" />
    <meta property="og:locale" content="es_ES" />${
      imageUrl
        ? `\n    <meta property="og:image" content="${imageUrl}" />`
        : ''
    }
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${safeTitle}" />
    <meta name="twitter:description" content="${safeDesc}" />${
      imageUrl
        ? `\n    <meta name="twitter:image" content="${imageUrl}" />`
        : ''
    }${
      effectiveJsonLd
        ? `\n    <script type="application/ld+json">${JSON.stringify(effectiveJsonLd)}</script>`
        : ''
    }`;
}

const PLACEHOLDER = '<!-- SEO_META_PLACEHOLDER -->';
const baseHtml = readFileSync(join(distDir, 'index.html'), 'utf-8');

if (!baseHtml.includes(PLACEHOLDER)) {
  console.error(
    `Error: placeholder "${PLACEHOLDER}" not found in dist/index.html.\n` +
      'Make sure index.html contains <!-- SEO_META_PLACEHOLDER --> in <head>.'
  );
  process.exit(1);
}

let count = 0;

for (const routeMeta of routesMeta) {
  const metaBlock = buildMetaBlock(routeMeta);
  const html = baseHtml.replace(PLACEHOLDER, metaBlock);

  if (routeMeta.route === '/') {
    writeFileSync(join(distDir, 'index.html'), html, 'utf-8');
  } else {
    const segments = routeMeta.route.split('/').filter(Boolean);
    const routeDir = join(distDir, ...segments);
    mkdirSync(routeDir, { recursive: true });
    writeFileSync(join(routeDir, 'index.html'), html, 'utf-8');
  }

  count++;
  console.log(`✓ ${routeMeta.route}`);
}

console.log(`\nMeta injection complete: ${count} routes processed.`);
