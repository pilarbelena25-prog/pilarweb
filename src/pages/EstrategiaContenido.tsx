import { useEffect } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  HelpCircle, 
  CheckSquare, 
  Compass, 
  LineChart, 
  HeartHandshake, 
  Building2, 
  MessageSquare,
  Sparkles
} from "lucide-react";
import imgPortada from "@/assets/servicios-portada.png";

const EstrategiaContenido = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const sections = [
    { id: "que-es", title: "Contenido estratégico", icon: HelpCircle },
    { id: "que-incluye", title: "Qué incluye", icon: CheckSquare },
    { id: "cuando-sentido", title: "Cuándo tiene sentido", icon: Compass },
    { id: "como-trabajo", title: "Cómo lo trabajo", icon: LineChart },
    { id: "resultados", title: "Qué resultados aporta", icon: HeartHandshake },
    { id: "sectores", title: "Sectores con los que trabajo", icon: Building2 },
    { id: "cta-final", title: "CTA final", icon: MessageSquare },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-white">
      <Helmet>
        <title>Estrategia de Contenido SEO | Pilar Beleña SEO Lab</title>
        <meta
          name="description"
          content="Estrategia de contenido limpia, estratégica y sin rodeos. Atrae tráfico orgánico, construye autoridad de marca y genera oportunidades reales de negocio."
        />
        <meta
          name="keywords"
          content="Estrategia de contenido, SEO de contenidos, marketing de contenidos, redaccion SEO, autoridad tematica, SEO Fintech, SEO Real Estate, Pilar Beleña"
        />
        <link rel="canonical" href="https://pilar-belena-seo-fintech-lab.netlify.app/estrategia-contenido" />
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

          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <span className="inline-block font-body text-xs sm:text-sm font-semibold uppercase tracking-widest text-primary bg-primary/5 px-4 py-1.5 rounded-full border border-primary/20 mb-6 animate-fade-up">
                Servicio de Enfoque Editorial y SEO
              </span>
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight text-primary mb-6 animate-fade-up">
                Estrategia de Contenido
              </h1>
              <p className="font-body text-lg md:text-xl text-foreground-muted leading-relaxed max-w-3xl mx-auto mb-8 animate-fade-up animate-delay-100">
                Contenido que atrae tráfico, construye autoridad y genera oportunidades reales sin rodeos.
              </p>
              <div className="animate-fade-up animate-delay-200">
                <Button variant="hero" size="xl" asChild className="group">
                  <a href="#que-es">
                    Explorar Estrategia
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* TABLE OF CONTENTS */}
        <section className="py-12 bg-card border-y border-border/50 relative z-20">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-8">
                <span className="font-body text-xs font-semibold uppercase tracking-widest text-secondary">
                  Navegación del Contenido
                </span>
                <h2 className="font-display text-2xl text-foreground mt-1">
                  Índice de la Estrategia
                </h2>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3">
                {sections.map((sect) => {
                  const IconComponent = sect.icon;
                  return (
                    <a
                      key={sect.id}
                      href={`#${sect.id}`}
                      className="flex flex-col items-center text-center gap-2 p-3 bg-background border border-border rounded-xl hover:border-primary/50 hover:shadow-elegant transition-all group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors flex-shrink-0">
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <span className="font-body text-[10px] font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2 leading-tight">
                        {sect.title}
                      </span>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* 2. CONTENIDO QUE ATRAE TRÁFICO, CONSTRUYE AUTORIDAD Y GENERA OPORTUNIDADES */}
        <section id="que-es" className="py-20 bg-background scroll-mt-24">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <span className="font-body text-xs font-semibold uppercase tracking-widest text-primary block mb-3">
                01. Enfoque
              </span>
              <h2 className="font-display text-3xl md:text-4xl text-primary mb-6 leading-tight">
                Contenido que atrae tráfico, construye autoridad y genera oportunidades
              </h2>
              <div className="bg-card border border-border/80 rounded-2xl p-8 sm:p-10 shadow-elegant text-left space-y-4">
                <p className="font-body text-base md:text-lg text-foreground-muted leading-relaxed">
                  Una buena Estrategia de Contenido no consiste en publicar por publicar. Se trata de crear piezas útiles, bien estructuradas y alineadas con la intención de búsqueda, para atraer tráfico orgánico, reforzar la autoridad de marca y acompañar el proceso de decisión del usuario.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. QUÉ INCLUYE LA ESTRATEGIA */}
        <section id="que-incluye" className="py-20 bg-soft-pink/30 border-y border-border/50 scroll-mt-24">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-12 gap-12 items-center">
                <div className="md:col-span-6 space-y-6">
                  <span className="font-body text-xs font-semibold uppercase tracking-widest text-secondary">
                    02. Planificación
                  </span>
                  <h2 className="font-display text-3xl md:text-4xl text-primary leading-tight">
                    Qué incluye la estrategia
                  </h2>
                  <p className="font-body text-foreground-muted text-base md:text-lg leading-relaxed">
                    La Estrategia parte de un Análisis de la situación actual, la Audiencia, la Competencia y las Oportunidades de Posicionamiento.
                  </p>
                  <p className="font-body text-foreground-muted text-base md:text-lg leading-relaxed">
                    A partir de ahí se define qué temas tienen recorrido, qué páginas o landings deben existir, cómo se conectan entre sí y qué formato necesita cada contenido para cumplir su función.
                  </p>
                </div>
                <div className="md:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    "Análisis de situación actual",
                    "Estudio de audiencia y competencia",
                    "Oportunidades de Posicionamiento",
                    "Definición de temas con recorrido",
                    "Estructura de páginas y landings",
                    "Arquitectura de enlazado interno"
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="bg-card border border-border p-4 rounded-xl shadow-elegant flex items-center gap-3 hover:-translate-y-0.5 transition-transform"
                    >
                      <Sparkles className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="font-body text-xs font-semibold text-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. CUÁNDO TIENE SENTIDO */}
        <section id="cuando-sentido" className="py-20 bg-background scroll-mt-24">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <span className="font-body text-xs font-semibold uppercase tracking-widest text-primary">
                  03. Idoneidad
                </span>
                <h2 className="font-display text-3xl md:text-4xl text-primary mt-2">
                  Cuándo tiene sentido
                </h2>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    title: "Necesidad de Orden",
                    desc: "Tiene sentido si tu web necesita orden y coherencia temática en su propuesta digital."
                  },
                  {
                    title: "Publicación sin Dirección",
                    desc: "Si publicas contenido constantemente pero sin una dirección ni objetivo estratégico claro."
                  },
                  {
                    title: "Sinergia Blog y Landings",
                    desc: "Si quieres que el blog y las landings trabajen juntos para captar y canalizar más visibilidad."
                  }
                ].map((card, idx) => (
                  <div key={idx} className="bg-card border border-border p-6 rounded-2xl shadow-elegant hover:-translate-y-1 transition-all">
                    <h3 className="font-display text-lg text-foreground font-semibold mb-3">{card.title}</h3>
                    <p className="font-body text-sm text-foreground-muted leading-relaxed">{card.desc}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8 bg-primary/5 border border-primary/10 rounded-2xl p-6 text-center">
                <p className="font-body text-base text-foreground leading-relaxed">
                  También encaja muy bien cuando ya existe una base web pero faltan estructura, coherencia temática o una narrativa que conecte mejor con el usuario.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 5. CÓMO TRABAJO LA ESTRATEGIA */}
        <section id="como-trabajo" className="py-20 bg-soft-pink/30 border-y border-border/50 scroll-mt-24">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <span className="font-body text-xs font-semibold uppercase tracking-widest text-secondary">
                  04. Metodología
                </span>
                <h2 className="font-display text-3xl md:text-4xl text-foreground mt-2">
                  Cómo trabajo la estrategia
                </h2>
              </div>
              <div className="grid md:grid-cols-3 gap-8 relative">
                {[
                  {
                    step: "01",
                    title: "Auditoría de contenido",
                    desc: "Primero reviso la situación actual de tu sitio web y detecto huecos de contenido útiles."
                  },
                  {
                    step: "02",
                    title: "Organización semántica",
                    desc: "Después organizo los temas por intención, prioridad de posicionamiento y potencial de negocio."
                  },
                  {
                    step: "03",
                    title: "Propuesta accionable",
                    desc: "Finalmente, aterrizo una propuesta clara de contenidos, landings y enlaces internos para que cada pieza cumpla su función."
                  }
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-card border border-border p-8 rounded-2xl shadow-elegant relative flex flex-col justify-between hover:-translate-y-1 transition-all"
                  >
                    <div>
                      <span className="font-display text-4xl font-bold block mb-4 text-primary">
                        {item.step}
                      </span>
                      <h3 className="font-display text-lg text-foreground font-semibold mb-3">
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

        {/* 6. QUÉ RESULTADOS PUEDE APORTAR */}
        <section id="resultados" className="py-20 bg-background scroll-mt-24">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center max-w-2xl mx-auto mb-12">
                <span className="font-body text-xs font-semibold uppercase tracking-widest text-primary">
                  05. Resultados
                </span>
                <h2 className="font-display text-3xl md:text-4xl text-primary mt-2">
                  Qué resultados puede aportar
                </h2>
              </div>
              <div className="bg-card border border-border rounded-2xl p-8 md:p-12 shadow-elegant space-y-4">
                <p className="font-body text-base md:text-lg text-foreground-muted leading-relaxed text-center">
                  Una buena Estrategia de contenido ayuda a ganar visibilidad, posicionar mejor la marca y crear una base más sólida de autoridad temática.
                </p>
                <p className="font-body text-base md:text-lg text-foreground-muted leading-relaxed text-center">
                  También mejora la navegación general, la experiencia del usuario final y la capacidad técnica de convertir visitas recurrentes en contactos o leads de calidad.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 7. SECTORES CON LOS QUE TRABAJO */}
        <section id="sectores" className="py-20 bg-soft-pink/30 border-y border-border/50 scroll-mt-24">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <div className="text-center max-w-2xl mx-auto mb-16">
                <span className="font-body text-xs font-semibold uppercase tracking-widest text-secondary">
                  06. Especialización
                </span>
                <h2 className="font-display text-3xl md:text-4xl text-primary mt-2">
                  Sectores con los que trabajo
                </h2>
                <p className="font-body text-foreground-muted mt-4">
                  Trabajo especialmente con proyectos que quieren combinar Contenido, SEO y enfoque comercial en una misma dirección:
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { name: "SEO Fintech & Finanzas", desc: "Contenido estratégico y claro en verticales financieros altamente regulados y competitivos." },
                  { name: "Inversión Inmobiliaria", desc: "Análisis y contenidos exclusivos para Real Estate, inversionistas y obra nueva." },
                  { name: "Marcas con Línea Editorial", desc: "Marcas consolidadas o startups que necesitan estructurar una narrativa coherente y con alta visibilidad." }
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

        {/* 8. CTA FINAL */}
        <section id="cta-final" className="py-20 bg-background relative overflow-hidden scroll-mt-24">
          <div className="absolute inset-0 bg-gradient-hero opacity-80 z-0 pointer-events-none" />
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto bg-card border border-border rounded-3xl p-8 md:p-16 text-center shadow-elegant-lg relative">
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
              
              <span className="font-body text-xs font-semibold uppercase tracking-widest text-primary block mb-2">
                07. Próximo Paso
              </span>
              <h2 className="font-display text-3xl md:text-5xl text-primary mb-6">
                ¿Hablamos de tu estrategia?
              </h2>
              <p className="font-body text-lg text-foreground-muted mb-10 max-w-2xl mx-auto leading-relaxed">
                Si tu marca necesita una Estrategia de contenido más clara, más útil y mejor conectada con el negocio, escríbeme y vemos cómo plantearla.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button variant="hero" size="xl" className="group w-full sm:w-auto" asChild>
                  <a href="mailto:pilarbelena25@gmail.com?subject=ESTRATEGIA%20DE%20CONTENIDO&body=Hola%20Pilar%2C%20quiero%20solicitar%20una%20Estrategia%20de%20Contenido%20para%20mi%20proyecto.">
                    Escribir email
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
                <Button variant="heroOutline" size="xl" className="w-full sm:w-auto" asChild>
                  <Link to="/contacto">
                    Ir a formulario
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default EstrategiaContenido;
