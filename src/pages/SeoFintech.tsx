import { useEffect } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Shield, Landmark, Rocket, Sparkles, Key, TrendingUp } from "lucide-react";
import imgPortada from "@/assets/seo-fintech-portada.png";

const SeoFintech = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const sectors = [
    { name: "Banca digital", icon: Landmark, desc: "Posicionamiento institucional y confianza regulada." },
    { name: "Pagos online", icon: Key, desc: "Captación transaccional y optimización de conversión." },
    { name: "Insurtech", icon: Shield, desc: "Estrategias de contenido educativo de alto valor." },
    { name: "Cripto y Activos Digitales", icon: Sparkles, desc: "Visibilidad en entornos dinámicos y de alta innovación." },
    { name: "Startups Fintech", icon: Rocket, desc: "Crecimiento orgánico escalable y eficiencia en embudos." },
    { name: "Inversión financiera y modelos híbridos con Real Estate", icon: TrendingUp, desc: "SEO premium para captar inversores cualificados." },
  ];

  const landings = [
    {
      title: "SEO para Fintech",
      desc: "Estrategias de posicionamiento a largo plazo y captación de clientes de alto valor.",
      url: "/blog?categoria=consultor-seo-fintech",
      accent: "from-primary/10 to-primary/5 border-primary/20",
    },
    {
      title: "Startups Fintech",
      desc: "Metodologías ágiles de crecimiento para escalar de forma rápida y orgánica.",
      url: "/blog?categoria=seo-startups-fintech",
      accent: "from-secondary/10 to-secondary/5 border-secondary/20",
    },
    {
      title: "Contenido e IA",
      desc: "Creación de contenido estratégico de alta calidad que combina datos e IA.",
      url: "/blog?categoria=seo-empresas-financieras",
      accent: "from-tertiary/10 to-tertiary/5 border-tertiary/20",
    },
    {
      title: "Autoridad y EEAT",
      desc: "Construcción de confianza y cumplimiento de directrices YMYL en Google.",
      url: "/blog?categoria=seo-avanzado-arquitectura-eeat",
      accent: "from-accent/15 to-accent/5 border-accent/20",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-white">
      <Helmet>
        <title>SEO Fintech | Pilar Beleña SEO Fintech Lab</title>
        <meta
          name="description"
          content="Posicionamiento SEO estratégico, visibilidad, autoridad y generación de leads orgánicos para startups y marcas financieras que buscan crecer con criterio."
        />
        <meta
          name="keywords"
          content="SEO Fintech, SEO financiero, posicionamiento marcas financieras, Pilar Beleña, SEO startups fintech, EEAT finanzas"
        />
        <link rel="canonical" href="https://pilar-belena-seo-fintech-lab.netlify.app/seo-fintech" />
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
                Consultoría SEO Especializada
              </span>
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight text-primary mb-6 animate-fade-up">
                SEO <span className="text-gradient-primary">Fintech</span>
              </h1>
              <p className="font-body text-lg md:text-xl text-foreground-muted leading-relaxed max-w-3xl mx-auto mb-8 animate-fade-up" style={{ animationDelay: "0.1s" }}>
                Visibilidad, autoridad y leads orgánicos para marcas financieras que quieren crecer con una estrategia clara, medible y adaptada a un sector competitivo.
              </p>
              <div className="animate-fade-up" style={{ animationDelay: "0.2s" }}>
                <Button variant="hero" size="xl" asChild className="group">
                  <Link to="/contacto">
                    Diseñar mi plan SEO
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* BLOQUE INICIAL */}
        <section className="py-20 bg-background border-t border-border/50 relative">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              {/* Decorative quotation mark icon */}
              <span className="font-display text-7xl text-primary/10 absolute -top-4 left-1/2 -translate-x-1/2 select-none">“</span>
              <blockquote className="relative z-10">
                <p className="font-display text-2xl md:text-3xl lg:text-4xl text-foreground leading-relaxed font-normal text-balance">
                  "El SEO para Fintech no consiste solo en posicionar palabras clave. Se trata de{" "}
                  <span className="text-gradient-primary font-medium block sm:inline">
                    Construir una Presencia Digital Sólida, Confiable y Alineada
                  </span>{" "}
                  con la intención real de búsqueda de usuarios que comparan, investigan y toman decisiones con más cautela que en otros sectores."
                </p>
              </blockquote>
            </div>
          </div>
        </section>

        {/* BLOQUE DE PROPUESTA */}
        <section className="py-20 bg-soft-pink/30 border-y border-border/50 relative">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-12 gap-12 items-center">
                <div className="md:col-span-6 space-y-6">
                  <span className="font-body text-xs font-semibold uppercase tracking-widest text-secondary">
                    Nuestra Propuesta de Valor
                  </span>
                  <h2 className="font-display text-3xl md:text-4xl text-primary leading-tight">
                    Transformamos tu web en un motor de captación orgánica
                  </h2>
                  <p className="font-body text-foreground-muted text-lg leading-relaxed">
                    En Pilar Beleña Lab ayudamos a marcas Fintech a convertir su web en una herramienta de captación, autoridad y crecimiento. Trabajamos desde el Diagnóstico hasta la Estrategia, pasando por Contenido, Arquitectura, IA y Señales de confianza.
                  </p>
                </div>
                <div className="md:col-span-6 grid grid-cols-2 gap-4">
                  {[
                    "Diagnóstico Técnico",
                    "Estrategia de Contenidos",
                    "Optimización IA",
                    "Arquitectura Web",
                    "Señales de EEAT",
                    "Conversión Orgánica",
                  ].map((prop, idx) => (
                    <div
                      key={idx}
                      className="bg-card border border-border p-4 rounded-xl shadow-elegant flex items-center gap-3 hover:-translate-y-0.5 transition-transform"
                    >
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="font-body text-sm font-semibold text-foreground">{prop}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* BLOQUE DE METODOLOGÍA */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center max-w-2xl mx-auto mb-16">
                <span className="font-body text-xs font-semibold uppercase tracking-widest text-primary">
                  Metodología de Aceleración
                </span>
                <h2 className="font-display text-3xl md:text-4xl text-foreground mt-2">
                  Un Enfoque en Tres Pasos
                </h2>
                <p className="font-body text-foreground-muted mt-4">
                  Así puedes entender qué frena tu web, qué debe corregirse primero y cómo escalar sin depender solo de ads o de la intuición.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 relative">
                {/* Connector line for desktop */}
                <div className="hidden md:block absolute top-1/2 left-1/6 right-1/6 h-px bg-gradient-to-r from-primary/30 via-secondary/30 to-accent/30 -z-10" />

                {[
                  {
                    step: "01",
                    title: "Diagnóstico preciso",
                    desc: "Identificamos los bloqueos invisibles que detienen la captación orgánica y el compliance de tu plataforma.",
                    color: "text-primary border-primary/20",
                  },
                  {
                    step: "02",
                    title: "Prioridades claras",
                    desc: "Filtramos los datos clave para atacar primero lo que genere mayor retorno con el menor esfuerzo operativo.",
                    color: "text-secondary border-secondary/20",
                  },
                  {
                    step: "03",
                    title: "Acciones de impacto real",
                    desc: "Ejecutamos con foco semántico y optimización de conversión, creando una base sólida y duradera.",
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

        {/* BLOQUE DE SECTORES */}
        <section className="py-20 bg-soft-pink/30 border-y border-border/50">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <div className="text-center max-w-2xl mx-auto mb-16">
                <span className="font-body text-xs font-semibold uppercase tracking-widest text-secondary">
                  Especialización Sectorial
                </span>
                <h2 className="font-display text-3xl md:text-4xl text-primary mt-2">
                  Trabajamos con Proyectos como:
                </h2>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {sectors.map((sector, idx) => {
                  const Icon = sector.icon;
                  return (
                    <div
                      key={idx}
                      className="bg-card border border-border p-6 rounded-xl shadow-elegant hover:border-primary/50 transition-colors flex gap-4"
                    >
                      <div className="w-12 h-12 rounded-lg bg-primary/5 flex items-center justify-center text-primary flex-shrink-0">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div className="space-y-1">
                        <h3 className="font-display text-base font-bold text-foreground">
                          {sector.name}
                        </h3>
                        <p className="font-body text-xs text-foreground-muted leading-relaxed">
                          {sector.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* BLOQUE DE ENLACES */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <div className="text-center max-w-2xl mx-auto mb-16">
                <span className="font-body text-xs font-semibold uppercase tracking-widest text-primary">
                  Recursos y Especialidades
                </span>
                <h2 className="font-display text-3xl md:text-4xl text-foreground mt-2">
                  Explora las Áreas Clave del Lab
                </h2>
                <p className="font-body text-foreground-muted mt-4">
                  Desde esta página podrás acceder a guías, artículos estratégicos y metodologías aplicadas:
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                {landings.map((landing, idx) => (
                  <Link
                    key={idx}
                    to={landing.url}
                    className={`block bg-gradient-to-br ${landing.accent} border p-8 rounded-2xl shadow-elegant hover:scale-[1.01] transition-all group relative overflow-hidden`}
                  >
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="font-display text-2xl text-foreground font-semibold group-hover:text-primary transition-colors">
                        {landing.title}
                      </h3>
                      <div className="w-8 h-8 rounded-full bg-background border border-border flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                    <p className="font-body text-sm text-foreground-muted leading-relaxed">
                      {landing.desc}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="py-20 bg-background relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-hero opacity-80 z-0 pointer-events-none" />
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto bg-card border border-border rounded-3xl p-8 md:p-16 text-center shadow-elegant-lg relative">
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
              
              <h2 className="font-display text-3xl md:text-5xl text-primary mb-6">
                ¿Hablamos con criterio?
              </h2>
              <p className="font-body text-lg text-foreground-muted mb-10 max-w-2xl mx-auto leading-relaxed">
                Si tu Marca Financiera necesita más Visibilidad, más Autoridad y una Estrategia SEO con criterio, escríbeme y vemos por dónde empezar.
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

export default SeoFintech;
