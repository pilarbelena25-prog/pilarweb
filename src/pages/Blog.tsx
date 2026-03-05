import imgSeoEIa from "@/assets/blog/articulo-1/1A.webp";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
  image: string;
  imageAlt: string;
}

const posts: BlogPost[] = [
  {
    slug: "seo-e-ia",
    title: "SEO e IA: Por qué la Estrategia importa más que el volumen en SEO Fintech 2026",
    excerpt: "Con la IA Generativa, cualquier Fintech puede publicar miles de artículos diarios. Pero el volumen masivo no es ventaja competitiva: es un riesgo directo para tu autoridad de marca.",
    date: "28 dic 2025",
    category: "SEO & IA",
    readTime: "5 min de lectura",
    image: imgSeoEIa,
    imageAlt: "SEO e IA - Estrategia SEO Fintech 2026",
  },
];

const Blog = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-16 bg-gradient-hero">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl leading-tight mb-6 text-primary">
                Blog
              </h1>
              <p className="font-display text-xl md:text-2xl text-foreground-muted">
                Estrategias SEO, marketing Fintech e inteligencia artificial aplicada al posicionamiento digital.
              </p>
            </div>
          </div>
        </section>

        {/* Article list */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              {posts.length === 0 ? (
                <div className="text-center py-20">
                  <p className="font-display text-2xl text-primary mb-4">
                    Próximamente
                  </p>
                  <p className="font-body text-foreground-muted">
                    Los primeros artículos están en camino. Vuelve pronto.
                  </p>
                </div>
              ) : (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {posts.map((post) => (
                    <a
                      key={post.slug}
                      href={`/blog/${post.slug}`}
                      className="block group bg-background border border-border rounded-lg overflow-hidden hover:border-primary transition-colors duration-200"
                    >
                      <img
                        src={post.image}
                        alt={post.imageAlt}
                        className="w-full h-56 object-cover"
                      />
                      <div className="p-8">
                        <div className="flex items-center gap-4 mb-3">
                          <span className="font-body text-xs font-medium text-primary uppercase tracking-wider">
                            {post.category}
                          </span>
                          <span className="font-body text-xs text-foreground-muted">
                            {post.date}
                          </span>
                          <span className="font-body text-xs text-foreground-muted">
                            {post.readTime}
                          </span>
                        </div>
                        <h2 className="font-display text-2xl text-foreground group-hover:text-primary transition-colors mb-3">
                          {post.title}
                        </h2>
                        <p className="font-body text-foreground-muted">
                          {post.excerpt}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
