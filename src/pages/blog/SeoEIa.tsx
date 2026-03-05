import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const SeoEIa = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-16 bg-gradient-hero">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              <a
                href="/blog"
                className="inline-block font-body text-sm text-primary mb-8 hover:underline"
              >
                ← Volver al Blog
              </a>
              <div className="flex items-center gap-4 mb-6">
                <span className="font-body text-xs font-medium text-primary uppercase tracking-wider">
                  {/* categoría */}
                </span>
                <span className="font-body text-xs text-foreground-muted">
                  {/* fecha */}
                </span>
                <span className="font-body text-xs text-foreground-muted">
                  {/* tiempo de lectura */}
                </span>
              </div>
              <h1 className="font-display text-4xl md:text-5xl leading-tight text-primary">
                {/* título del artículo */}
              </h1>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto prose prose-lg">
              {/* contenido del artículo */}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default SeoEIa;
