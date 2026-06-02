import { useEffect } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Building2, TrendingUp, Home, Briefcase, Eye, Layers, Compass, HelpCircle } from "lucide-react";
import imgPortada from "@/assets/inmobiliaria-portada.png";

const Inmobiliaria = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const sections = [
    { id: "seo-inmobiliaria", title: "SEO para Inmobiliaria", icon: Eye },
    { id: "real-estate", title: "Real Estate", icon: Building2 },
    { id: "inversion-inmobiliaria", title: "Inversión inmobiliaria", icon: TrendingUp },
    { id: "obra-nueva", title: "Obra nueva", icon: Home },
    { id: "segunda-mano", title: "Segunda mano", icon: Briefcase },
    { id: "como-trabajamos", title: "Cómo trabajamos", icon: HelpCircle },
    { id: "sectores-oportunidades", title: "Sectores y oportunidades", icon: Compass },
    { id: "cta-final", title: "CTA final", icon: Layers },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-white">
      <Helmet>
        <title>SEO Inmobiliaria & Real Estate | Pilar Beleña SEO Lab</title>
        <meta
          name="description"
          content="Estrategia SEO premium para inmobiliarias, Real Estate, promociones de obra nueva, segunda mano e inversión. Diseña una web clara y estructurada para captar leads."
        />
        <meta
          name="keywords"
          content="SEO Inmobiliaria, Real Estate SEO, posicionamiento inmobiliario, obra nueva SEO, inversion inmobiliaria, Pilar Beleña"
        />
        <link rel="canonical" href="https://pilar-belena-seo-fintech-lab.netlify.app/inmobiliaria" />
      </Helmet>

      <Header />

      <main className="overflow-hidden">
        {/* HERO SECTION */}
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-hero overflow-hidden">
          {/* Background Image with Opacity */}
          <div
            className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-[0.40]"
            style={{ backgroundImage: `url(${imgPortada})` }}
          />
          {/* Subtle gradient overlay to blend into the main background */}
          <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent via-transparent to-background pointer-events-none" />

          {/* Decorative gradients */}
          <div className="absolute top-1/4 right-10 w-72 h-72 bg-tertiary/10 rounded-full blur-3xl animate-pulse-soft pointer-events-none" />
          <div className="absolute bottom-1/4 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse-soft pointer-events-none" />
          {/* Silver accent lines */}
          <div className="absolute top-40 left-0 w-32 h-px bg-gradient-to-r from-transparent via-accent to-transparent pointer-events-none" />
          <div className="absolute bottom-20 right-0 w-48 h-px bg-gradient-to-r from-transparent via-accent to-transparent pointer-events-none" />

          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <span className="inline-block font-body text-xs sm:text-sm font-semibold uppercase tracking-widest text-primary bg-primary/5 px-4 py-1.5 rounded-full border border-primary/20 mb-6 animate-fade-up">
                Estrategia y Posicionamiento Organico
              </span>
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight text-primary mb-6 animate-fade-up">
                Inmobiliaria
              </h1>
              <p className="font-body text-lg md:text-xl text-foreground-muted leading-relaxed max-w-3xl mx-auto mb-8 animate-fade-up" style={{ animationDelay: "0.1s" }}>
                Construyendo la base digital definitiva para proyectos de Real Estate, inversión, obra nueva y segunda mano. Lidera el mercado orgánico con criterio.
              </p>
              <div className="animate-fade-up" style={{ animationDelay: "0.2s" }}>
                <Button variant="hero" size="xl" asChild className="group">
                  <a href="#seo-inmobiliaria">
                    Explorar Estrategia
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* INDICE REAL / TABLE OF CONTENTS */}
        <section className="py-12 bg-card border-y border-border/50 relative z-20">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-8">
                <span className="font-body text-xs font-semibold uppercase tracking-widest text-secondary">
                  Navegación del Contenido
                </span>
                <h2 className="font-display text-2xl text-foreground mt-1">
                  Índice de Contenidos
                </h2>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {sections.map((sect) => {
                  const IconComponent = sect.icon;
                  return (
                    <a
                      key={sect.id}
                      href={`#${sect.id}`}
                      className="flex items-center gap-3 p-4 bg-background border border-border rounded-xl hover:border-primary/50 hover:shadow-elegant transition-all group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors flex-shrink-0">
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <span className="font-body text-xs font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                        {sect.title}
                      </span>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* SECCIÓN: SEO PARA INMOBILIARIA */}
        <section id="seo-inmobiliaria" className="py-20 bg-background scroll-mt-24">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <span className="font-body text-xs font-semibold uppercase tracking-widest text-primary">
                01. Enfoque Digital
              </span>
              <h2 className="font-display text-3xl md:text-5xl text-primary mt-2 mb-6">
                SEO para Inmobiliaria
              </h2>
              <p className="font-body text-lg md:text-xl text-foreground-muted leading-relaxed max-w-3xl mx-auto">
                La visibilidad digital en el sector inmobiliario no depende solo de publicar propiedades. Se trata de construir una web clara, bien estructurada y orientada a captar usuarios que buscan comprar, invertir o comparar opciones con intención real.
              </p>
            </div>
          </div>
        </section>

        {/* SECCIÓN: REAL ESTATE */}
        <section id="real-estate" className="py-20 bg-soft-pink/30 border-y border-border/50 scroll-mt-24">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-12 gap-12 items-center">
                <div className="md:col-span-7 space-y-6">
                  <span className="font-body text-xs font-semibold uppercase tracking-widest text-secondary">
                    02. Crecimiento Orgánico
                  </span>
                  <h2 className="font-display text-3xl md:text-4xl text-primary leading-tight">
                    Real Estate
                  </h2>
                  <p className="font-body text-foreground-muted text-lg leading-relaxed">
                    En Pilar Beleña Lab trabajamos proyectos inmobiliarios que necesitan Posicionarse con criterio, Mejorar su arquitectura web y Generar oportunidades de negocio más allá de los portales. La clave está en Crear una base digital sólida que conecte Contenido, Autoridad y Captación.
                  </p>
                </div>
                <div className="md:col-span-5 space-y-4">
                  {[
                    "Posicionamiento con criterio",
                    "Optimización de arquitectura web",
                    "Captación directa sin depender de portales",
                    "Autoridad de marca sectorial",
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="bg-card border border-border p-4 rounded-xl shadow-elegant flex items-center gap-3 hover:-translate-y-0.5 transition-transform"
                    >
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="font-body text-sm font-semibold text-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECCIÓN: INVERSIÓN INMOBILIARIA */}
        <section id="inversion-inmobiliaria" className="py-20 bg-background scroll-mt-24">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <span className="font-body text-xs font-semibold uppercase tracking-widest text-primary">
                  03. Confianza & Retorno
                </span>
                <h2 className="font-display text-3xl md:text-4xl text-primary mt-2">
                  Inversión inmobiliaria
                </h2>
              </div>
              <div className="bg-card border border-border rounded-2xl p-8 md:p-12 shadow-elegant relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent" />
                <p className="font-body text-lg md:text-xl text-foreground leading-relaxed text-center">
                  La Inversión Inmobiliaria necesita un enfoque digital distinto al de una web puramente comercial. Aquí importa transmitir confianza, claridad y potencial de retorno, tanto si hablamos de obra nueva como de segunda mano o de oportunidades internacionales.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECCIÓN: OBRA NUEVA & SEGUNDA MANO */}
        <section className="py-20 bg-soft-pink/30 border-y border-border/50">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
              {/* Obra Nueva */}
              <div id="obra-nueva" className="bg-card border border-border p-8 rounded-2xl shadow-elegant hover:-translate-y-1 transition-all scroll-mt-24 flex flex-col justify-between">
                <div>
                  <span className="font-body text-xs font-semibold uppercase tracking-widest text-primary block mb-2">
                    04. Proyectos y Promociones
                  </span>
                  <h3 className="font-display text-2xl text-foreground font-semibold mb-4">
                    Obra nueva
                  </h3>
                  <p className="font-body text-sm text-foreground-muted leading-relaxed">
                    Las promociones de obra nueva requieren páginas pensadas para informar, convencer y convertir. Un buen Posicionamiento ayuda a captar usuarios interesados en zonas, tipologías y proyectos concretos, además de reforzar la autoridad de la marca promotora.
                  </p>
                </div>
              </div>

              {/* Segunda Mano */}
              <div id="segunda-mano" className="bg-card border border-border p-8 rounded-2xl shadow-elegant hover:-translate-y-1 transition-all scroll-mt-24 flex flex-col justify-between">
                <div>
                  <span className="font-body text-xs font-semibold uppercase tracking-widest text-secondary block mb-2">
                    05. Estrategia Multicanal
                  </span>
                  <h3 className="font-display text-2xl text-foreground font-semibold mb-4">
                    Segunda mano
                  </h3>
                  <p className="font-body text-sm text-foreground-muted leading-relaxed">
                    La segunda mano también puede tener una estrategia SEO muy potente si se organiza bien la oferta, se trabaja la intención de búsqueda y se crea contenido útil para compradores e inversores.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECCIÓN: CÓMO TRABAJAMOS */}
        <section id="como-trabajamos" className="py-20 bg-background scroll-mt-24">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center max-w-2xl mx-auto mb-16">
                <span className="font-body text-xs font-semibold uppercase tracking-widest text-primary">
                  06. Metodología Lab
                </span>
                <h2 className="font-display text-3xl md:text-4xl text-foreground mt-2">
                  Cómo trabajamos
                </h2>
                <p className="font-body text-foreground-muted mt-4">
                  Mi método combina tres pasos orientados a potenciar los resultados de tu negocio inmobiliario de forma transparente y ágil:
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 relative">
                <div className="hidden md:block absolute top-1/2 left-1/6 right-1/6 h-px bg-gradient-to-r from-primary/30 via-secondary/30 to-accent/30 -z-10" />

                {[
                  {
                    step: "01",
                    title: "Diagnóstico preciso",
                    desc: "Detectamos qué frena la captación de leads cualificados en tu arquitectura actual.",
                    color: "text-primary border-primary/20",
                  },
                  {
                    step: "02",
                    title: "Prioridades claras",
                    desc: "Identificamos qué páginas o zonas necesitan más foco estratégico inmediato.",
                    color: "text-secondary border-secondary/20",
                  },
                  {
                    step: "03",
                    title: "Acciones de impacto real",
                    desc: "Construimos e implementamos una estrategia robusta con visión de negocio a largo plazo.",
                    color: "text-accent border-accent/20",
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-card border border-border p-8 rounded-2xl shadow-elegant relative flex flex-col justify-between hover:-translate-y-1 transition-all"
                  >
                    <div>
                      <span className={`font-display text-4xl font-bold block mb-4 ${item.color.split(" ")[0]}`}>
                        {item.step}
                      </span>
                      <h3 className="font-display text-xl text-foreground font-semibold mb-3">
                        {item.title}
                      </h3>
                      <p className="font-body text-sm text-foreground-muted leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SECCIÓN: SECTORES Y OPORTUNIDADES */}
        <section id="sectores-oportunidades" className="py-20 bg-soft-pink/30 border-y border-border/50 scroll-mt-24">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <div className="text-center max-w-2xl mx-auto mb-16">
                <span className="font-body text-xs font-semibold uppercase tracking-widest text-secondary">
                  07. Amplitud Temática
                </span>
                <h2 className="font-display text-3xl md:text-4xl text-primary mt-2">
                  Sectores y oportunidades
                </h2>
                <p className="font-body text-foreground-muted mt-4">
                  Damos soporte integral a todas las vertientes del ecosistema inmobiliario digital:
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { name: "Proyectos Inmobiliarios", desc: "Consultoría y auditoría de la plataforma madre." },
                  { name: "Promociones Obra Nueva", desc: "Estructuración de landings y embudos de ventas." },
                  { name: "Activos de Segunda Mano", desc: "Optimización de búsquedas y páginas de categoría." },
                  { name: "Inversión Premium", desc: "Estrategias de contenidos exclusivos para perfiles cualificados." },
                  { name: "Oportunidades Internacionales", desc: "SEO multiidioma y posicionamiento geolocalizado exterior." },
                  { name: "Soporte de Contenidos y Autoridad", desc: "Construcción de arquitectura web robusta y enlazado estratégico." },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-card border border-border p-6 rounded-xl shadow-elegant hover:border-primary/50 transition-colors flex flex-col justify-between"
                  >
                    <div>
                      <h4 className="font-display text-base font-bold text-foreground mb-2">
                        {item.name}
                      </h4>
                      <p className="font-body text-xs text-foreground-muted leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SECCIÓN: CTA FINAL */}
        <section id="cta-final" className="py-20 bg-background relative overflow-hidden scroll-mt-24">
          <div className="absolute inset-0 bg-gradient-hero opacity-80 z-0 pointer-events-none" />
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto bg-card border border-border rounded-3xl p-8 md:p-16 text-center shadow-elegant-lg relative">
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
              
              <span className="font-body text-xs font-semibold uppercase tracking-widest text-primary block mb-2">
                08. Próximo Paso
              </span>
              <h2 className="font-display text-3xl md:text-5xl text-primary mb-6">
                ¿Hablamos de tu estrategia?
              </h2>
              <p className="font-body text-lg text-foreground-muted mb-10 max-w-2xl mx-auto leading-relaxed">
                Si tu proyecto inmobiliario necesita más Visibilidad, una Web mejor Estructurada o una Estrategia SEO que genere leads con más criterio, escríbeme y vemos por dónde empezar.
              </p>
              
              <Button variant="hero" size="xl" className="group" asChild>
                <Link to="/contacto">
                  Iniciar análisis estratégico
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Inmobiliaria;
