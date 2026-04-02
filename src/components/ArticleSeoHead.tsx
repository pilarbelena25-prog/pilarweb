import { Helmet } from "react-helmet-async";

interface ArticleSeoHeadProps {
  title: string;
  description: string;
  slug: string;
  image: string;
  datePublished: string;
  category: string;
}

const BASE_URL = "https://pilar-belena-seo-fintech-lab.netlify.app";

const ArticleSeoHead = ({
  title,
  description,
  slug,
  image,
  datePublished,
  category,
}: ArticleSeoHeadProps) => {
  const fullTitle = `${title} | Pilar Beleña SEO Fintech Lab`;
  const canonicalUrl = `${BASE_URL}/blog/${slug}`;
  const imageUrl = `${BASE_URL}${image}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="author" content="Pilar Beleña" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="article" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:site_name" content="Pilar Beleña - SEO Fintech Lab" />
      <meta property="og:locale" content="es_ES" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />

      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: title,
          description: description,
          image: imageUrl,
          datePublished: datePublished,
          author: {
            "@type": "Person",
            name: "Pilar Beleña",
            url: BASE_URL,
            sameAs: ["https://linkedin.com/in/pilarbelena"],
          },
          publisher: {
            "@type": "Person",
            name: "Pilar Beleña",
            url: BASE_URL,
          },
          url: canonicalUrl,
          inLanguage: "es",
          articleSection: category,
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": canonicalUrl,
          },
        })}
      </script>
    </Helmet>
  );
};

export default ArticleSeoHead;
