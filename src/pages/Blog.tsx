import { useSearchParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import imgSeoEIa from "@/assets/blog/articulo-1/1A.webp";
import imgHojaDeRuta from "@/assets/blog/articulo-2/2.webp";
import imgSgeNuevoOrden from "@/assets/blog/articulo-3/3A.webp";
import imgMuertePalabraClave from "@/assets/blog/articulo-4/4A.webp";
import imgAuditoriasIa from "@/assets/blog/articulo-5/5A.webp";
import imgSeoEntornosRegulados from "@/assets/blog/articulo-6/6A.webp";
import imgContenidoMasivo from "@/assets/blog/articulo-7/7A.webp";
import imgDatosEstructurados from "@/assets/blog/articulo-8/8A.webp";
import imgEscalarSinPerder from "@/assets/blog/articulo-9/9A.webp";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { LazyImage } from "@/components/ui/LazyImage";

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  family: string;
  readTime: string;
  image: string;
  imageAlt: string;
}

const FAMILIES = [
  { slug: "consultor-seo-fintech", label: "Consultor SEO Fintech" },
  { slug: "seo-startups-fintech", label: "SEO para Startups Fintech" },
  { slug: "seo-empresas-financieras", label: "SEO para Empresas Financieras" },
];

const posts: BlogPost[] = [
  {
    slug: "seo-e-ia",
    title: "SEO e IA: Por qué la Estrategia importa más que el volumen en SEO Fintech 2026",
    excerpt: "Con la IA Generativa, cualquier Fintech puede publicar miles de artículos diarios. Pero el volumen masivo no es ventaja competitiva: es un riesgo directo para tu autoridad de marca.",
    date: "28 dic 2025",
    category: "Consultor SEO Fintech",
    family: "consultor-seo-fintech",
    readTime: "5 min de lectura",
    image: imgSeoEIa,
    imageAlt: "SEO e IA - Estrategia SEO Fintech 2026",
  },
  {
    slug: "hoja-de-ruta-seo-fintech-lab",
    title: "De 'Encontrable' a IRREMPLAZABLE en FINTECH: Hoja de ruta desde el SEO Fintech Lab",
    excerpt: "Estar en Google ya no es suficiente. En 2026, el verdadero reto del SEO Fintech es volverse irremplazable: que tu marca sea la referencia que los algoritmos eligen citar.",
    date: "30 dic 2025",
    category: "Consultor SEO Fintech",
    family: "consultor-seo-fintech",
    readTime: "4 min de lectura",
    image: imgHojaDeRuta,
    imageAlt: "De Encontrable a Irremplazable en Fintech - SEO Fintech Lab",
  },
  {
    slug: "sge-y-el-nuevo-orden-de-busqueda",
    title: "SGE y el nuevo orden de búsqueda FINTECH: Cómo proteger el tráfico de tu marca financiera este año",
    excerpt: "La SGE convierte la página de resultados en un panel de respuestas. Para las marcas financieras, el riesgo no es solo perder posiciones: es que la IA se quede con la visibilidad que antes era tuya.",
    date: "19 ene 2026",
    category: "SEO para Empresas Financieras",
    family: "seo-empresas-financieras",
    readTime: "6 min de lectura",
    image: imgSgeNuevoOrden,
    imageAlt: "SGE y el nuevo orden de búsqueda Fintech - SEO Fintech Lab",
  },
  {
    slug: "muerte-palabra-clave-transaccional-fintech",
    title: "La muerte de la palabra clave transaccional FINTECH: SEO de intención en la era de los LLM",
    excerpt: "Las palabras clave transaccionales mueren con LLM y SGE. Aprende SEO de intención para Fintech: protege conversiones ante la nueva búsqueda IA.",
    date: "27 ene 2026",
    category: "Consultor SEO Fintech",
    family: "consultor-seo-fintech",
    readTime: "7 min de lectura",
    image: imgMuertePalabraClave,
    imageAlt: "La muerte de la palabra clave transaccional Fintech - SEO de intención LLM 2026",
  },
  {
    slug: "auditorias-ia-fintech-eficiencia-embudo",
    title: "Auditorías de IA FINTECH: Cómo detectar qué partes de tu embudo financiero están perdiendo eficiencia",
    excerpt: "Tu embudo financiero pierde entre un 20-40% de eficiencia por problemas invisibles que la IA detecta al instante. Auditorías inteligentes para encontrar dónde se escapa tu conversión orgánica sin violar el cumplimiento.",
    date: "8 feb 2026",
    category: "SEO para Startups Fintech",
    family: "seo-startups-fintech",
    readTime: "6 min de lectura",
    image: imgAuditoriasIa,
    imageAlt: "Auditorías IA Fintech 2026: detecta ineficiencias en tu embudo financiero",
  },
  {
    slug: "seo-entornos-regulados-fintech",
    title: "SEO FINTECH en Entornos Regulados: Cómo innovar sin romper el 'compliance' desde el Lab",
    excerpt: "Aprende cómo las Fintech pueden innovar en SEO sin incumplir la regulación. Estrategias prácticas, ejemplos y herramientas para crecer de forma segura.",
    date: "26 feb 2026",
    category: "SEO para Empresas Financieras",
    family: "seo-empresas-financieras",
    readTime: "6 min de lectura",
    image: imgSeoEntornosRegulados,
    imageAlt: "SEO Fintech en Entornos Regulados: innovar sin romper el compliance - SEO Fintech Lab",
  },
  {
    slug: "contenido-masivo-fintech-mito",
    title: "El Mito del Contenido Masivo FINTECH: Por qué 10 Artículos Estratégicos baten a 100 generados por bots",
    excerpt: "Saturar tu blog Fintech con posts generados por IA no genera autoridad: genera rebote. Descubre por qué 10 artículos estratégicos con datos B2B reales superan en leads a 100 artículos de bots.",
    date: "17 mar 2026",
    category: "Consultor SEO Fintech",
    family: "consultor-seo-fintech",
    readTime: "7 min de lectura",
    image: imgContenidoMasivo,
    imageAlt: "El Mito del Contenido Masivo Fintech: 10 artículos estratégicos vs 100 bots - SEO Fintech Lab",
  },
  {
    slug: "datos-estructurados-entidades-fintech",
    title: "Datos Estructurados y Entidades Fintech: La verdadera forma en que la IA entiende tu Marca Financiera",
    excerpt: "Cuando la IA no tiene claro quién es tu Fintech, mezcla tu marca con otras similares. Los datos estructurados y entidades son la solución para que Google y los LLM te identifiquen correctamente.",
    date: "27 mar 2026",
    category: "SEO para Empresas Financieras",
    family: "seo-empresas-financieras",
    readTime: "7 min de lectura",
    image: imgDatosEstructurados,
    imageAlt: "Datos Estructurados y Entidades Fintech: cómo la IA entiende tu marca financiera - SEO Fintech Lab",
  },
  {
    slug: "escalar-sin-perder-el-alma-fintech",
    title: "Escalar sin perder el alma FINTECH: Cómo entrenar a tu IA con el tono de voz de tu Empresa Financiera",
    excerpt: "El 78% de Startups Fintech pierde conversión por sonar 'Genérico-IA'. Aprende la metodología del Lab para entrenar tu IA con tu voz financiera: datos reales, compliance integrado y autoridad sectorial.",
    date: "6 abr 2026",
    category: "SEO para Startups Fintech",
    family: "seo-startups-fintech",
    readTime: "8 min de lectura",
    image: imgEscalarSinPerder,
    imageAlt: "Escalar sin perder el alma Fintech: entrenar IA con tono de voz financiero - SEO Fintech Lab",
  },
];

const Blog = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoriaActiva = searchParams.get("categoria");

  const postsFiltrados = categoriaActiva
    ? posts.filter((p) => p.family === categoriaActiva)
    : posts;

  const handleFiltro = (slug: string | null) => {
    if (slug) {
      setSearchParams({ categoria: slug });
    } else {
      setSearchParams({});
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Blog SEO Fintech | Pilar Beleña SEO Fintech Lab</title>
        <meta name="description" content="Estrategias SEO, marketing Fintech e inteligencia artificial aplicada al posicionamiento digital. Artículos para Consultores, Startups y Empresas Financieras." />
        <link rel="canonical" href="https://pilar-belena-seo-fintech-lab.netlify.app/blog" />
        <meta property="og:title" content="Blog SEO Fintech | Pilar Beleña SEO Fintech Lab" />
        <meta property="og:description" content="Estrategias SEO, marketing Fintech e inteligencia artificial aplicada al posicionamiento digital." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://pilar-belena-seo-fintech-lab.netlify.app/blog" />
        <meta property="og:site_name" content="Pilar Beleña - SEO Fintech Lab" />
      </Helmet>
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
              {/* Filtros por categoría */}
              <div className="flex flex-wrap gap-3 mb-12 justify-center">
                <button
                  onClick={() => handleFiltro(null)}
                  className={`font-body text-sm px-5 py-2 rounded-full border transition-colors duration-200 ${
                    !categoriaActiva
                      ? "border-primary text-primary"
                      : "border-border text-foreground-muted hover:border-primary hover:text-primary"
                  }`}
                >
                  Todos
                </button>
                {FAMILIES.map((f) => (
                  <button
                    key={f.slug}
                    onClick={() => handleFiltro(f.slug)}
                    className={`font-body text-sm px-5 py-2 rounded-full border transition-colors duration-200 ${
                      categoriaActiva === f.slug
                        ? "border-primary text-primary"
                        : "border-border text-foreground-muted hover:border-primary hover:text-primary"
                    }`}
                  >
                    {f.label}
                  </button>
                ))}
              </div>

              {postsFiltrados.length === 0 ? (
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
                  {postsFiltrados.map((post) => (
                    <a
                      key={post.slug}
                      href={`/blog/${post.slug}`}
                      className="block group bg-background border border-border rounded-lg overflow-hidden hover:border-primary transition-colors duration-200"
                    >
                      <LazyImage
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
