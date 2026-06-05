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
import imgPortada from "@/assets/servicios-portada.png"; // reusing the services banner

const ConsultoriaSeoEstrategica = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const sections = [
    { id: "que-es", title: "Una sesión estratégica", icon: HelpCircle },
    { id: "que-incluye", title: "Qué incluye", icon: CheckSquare },
    { id: "cuando-sentido", title: "Cuándo tiene sentido", icon: Compass },
    { id: "como-trabajamos", title: "Cómo trabajamos", icon: LineChart },
    { id: "que-esperar", title: "Qué puedes esperar", icon: HeartHandshake },
    { id: "sectores", title: "Sectores con los que trabajo", icon: Building2 },
    { id: "cta-final", title: "CTA final", icon: MessageSquare },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-white">
      <Helmet>
        <title>Consultoría SEO Estratégica | Pilar Beleña SEO Lab</title>
        <meta
          name="description"
          content="Una sesión estratégica para entender qué frena tu web y qué debes priorizar. Consultoría SEO práctica y orientada a negocio para Fintech y Real Estate."
        />
        <meta
          name="keywords"
          content="Consultoria SEO, SEO estrategico, auditoria SEO, posicionamiento buscadores, SEO Fintech, SEO Real Estate, Pilar Beleña"
        />
        <link rel="canonical" href="https://pilar-belena-seo-fintech-lab.netlify.app/consultoria-seo-estrategica" />
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
                Servicio de Diagnóstico y Enfoque
              </span>
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight text-primary mb-6 animate-fade-up">
                Consultoría SEO Estratégica
              </h1>
              <p className="font-body text-lg md:text-xl text-foreground-muted leading-relaxed max-w-3xl mx-auto mb-8 animate-fade-up animate-delay-100">
                Una sesión para entender qué frena tu web y qué debes priorizar de forma clara y orientada a negocio.
              </p>
              <div className="animate-fade-up animate-delay-200">
                <Button variant="hero" size="xl" asChild className="group">
                  <a href="#que-es">
                    Comenzar Sesión
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
                  Navegación
                </span>
                <h2 className="font-display text-2xl text-foreground mt-1">
                  Índice de la Consultoría
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

        {/* 2. UNA SESIÓN PARA ENTENDER QUÉ FRENA TU WEB Y QUÉ DEBES PRIORIZAR */}
        <section id="que-es" className="py-20 bg-background scroll-mt-24">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <span className="font-body text-xs font-semibold uppercase tracking-widest text-primary block mb-3">
                01. Propósito
              </span>
              <h2 className="font-display text-3xl md:text-4xl text-primary mb-6 leading-tight">
                Una sesión para entender qué frena tu web y qué debes priorizar
              </h2>
              <div className="bg-card border border-border/80 rounded-2xl p-8 sm:p-10 shadow-elegant text-left space-y-4">
                <p className="font-body text-base md:text-lg text-foreground-muted leading-relaxed">
                  La Consultoría es un espacio de trabajo pensado para analizar tu situación actual, detectar bloqueos y definir prioridades claras.
                </p>
                <p className="font-body text-base md:text-lg text-foreground-muted leading-relaxed">
                  No se trata de una reunión genérica, sino de una sesión estratégica en la que aterrizamos qué necesita tu web para avanzar con más foco.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. QUÉ INCLUYE LA CONSULTORÍA */}
        <section id="que-incluye" className="py-20 bg-soft-pink/30 border-y border-border/50 scroll-mt-24">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-12 gap-12 items-center">
                <div className="md:col-span-6 space-y-6">
                  <span className="font-body text-xs font-semibold uppercase tracking-widest text-secondary">
                    02. El Diagnóstico
                  </span>
                  <h2 className="font-display text-3xl md:text-4xl text-primary leading-tight">
                    Qué incluye la Consultoría
                  </h2>
                  <p className="font-body text-foreground-muted text-base md:text-lg leading-relaxed">
                    Durante la Consultoría revisamos la Estructura general de la Web, la Propuesta de valor, el Contenido, la Intención de búsqueda, la Autoridad temática y los Puntos que están limitando el crecimiento.
                  </p>
                  <p className="font-body text-foreground-muted text-base md:text-lg leading-relaxed">
                    El objetivo es salir con una visión más clara de qué hacer primero y qué no merece la pena tocar todavía.
                  </p>
                </div>
                <div className="md:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    "Estructura general de la Web",
                    "Propuesta de valor",
                    "Contenido del sitio",
                    "Intención de búsqueda",
                    "Autoridad temática",
                    "Puntos limitantes de crecimiento"
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
                    title: "Web Activa sin Resultados",
                    desc: "Si ya tienes una web activa, pero notas que no termina de generar resultados."
                  },
                  {
                    title: "Lanzamiento de Proyecto",
                    desc: "Si estás a punto de lanzar un proyecto nuevo y quieres sentar bases correctas."
                  },
                  {
                    title: "Segunda Opinión Experta",
                    desc: "Si necesitas una segunda opinión profesional antes de tomar decisiones importantes."
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
                  También encaja muy bien en proyectos <strong>Fintech, Inmobiliaria y Real Estate</strong> que quieren una visión estratégica antes de invertir más tiempo o presupuesto.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 5. CÓMO TRABAJAMOS */}
        <section id="como-trabajamos" className="py-20 bg-soft-pink/30 border-y border-border/50 scroll-mt-24">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <span className="font-body text-xs font-semibold uppercase tracking-widest text-secondary">
                  04. Metodología
                </span>
                <h2 className="font-display text-3xl md:text-4xl text-foreground mt-2">
                  Cómo trabajamos
                </h2>
              </div>
              <div className="grid md:grid-cols-3 gap-8 relative">
                {[
                  {
                    step: "01",
                    title: "Revisar contexto y objetivos",
                    desc: "Primero revisamos el contexto y los objetivos del proyecto para entender dónde estamos."
                  },
                  {
                    step: "02",
                    title: "Identificar frenos de rendimiento",
                    desc: "Después identificamos detalladamente lo que frena el rendimiento y visibilidad de tu web."
                  },
                  {
                    step: "03",
                    title: "Marcar prioridades y próximos pasos",
                    desc: "Por último, te marco Prioridades, Oportunidades y Próximos pasos para que avances con dirección clara."
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
              <div className="mt-8 text-center text-xs font-body text-foreground-muted italic">
                * Si hace falta, esta consultoría también puede convertirse en una base para integrar el trabajo dentro de un presupuesto más amplio.
              </div>
            </div>
          </div>
        </section>

        {/* 6. QUÉ PUEDES ESPERAR */}
        <section id="que-esperar" className="py-20 bg-background scroll-mt-24">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center max-w-2xl mx-auto mb-12">
                <span className="font-body text-xs font-semibold uppercase tracking-widest text-primary">
                  05. Expectativas
                </span>
                <h2 className="font-display text-3xl md:text-4xl text-primary mt-2">
                  Qué puedes esperar
                </h2>
              </div>
              <div className="bg-card border border-border rounded-2xl p-8 md:p-12 shadow-elegant relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent" />
                <p className="font-body text-lg md:text-xl text-foreground leading-relaxed text-center mb-6">
                  Puedes esperar una conversación honesta, práctica y orientada a negocio.
                </p>
                <p className="font-body text-base text-foreground-muted leading-relaxed text-center">
                  Mi forma de trabajar no se centra en promesas vacías, sino en darte criterio, foco y una visión útil para que sepas dónde está el problema y cómo abordarlo de verdad.
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
                  Acompaño a proyectos que están creciendo y que necesitan alinear contenido, estructura y autoridad con su modelo de negocio:
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { name: "SEO Fintech & Finanzas", desc: "Plataformas digitales que necesitan optimizar la captación en nichos de alta competencia y regulación." },
                  { name: "Inversión Inmobiliaria", desc: "Modelos orientados a inversores donde la confianza, el E-E-A-T y la autoridad temática son claves." },
                  { name: "Real Estate & Obra Nueva", desc: "Promociones y desarrollos inmobiliarios que buscan captar compradores directos calificados." },
                  { name: "Segunda Mano & Marcas", desc: "Portales y agencias que necesitan ordenar su arquitectura web y ganar posicionamiento local." }
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
                07. Contacto Directo
              </span>
              <h2 className="font-display text-3xl md:text-5xl text-primary mb-6">
                ¿Vemos tu caso?
              </h2>
              <p className="font-body text-lg text-foreground-muted mb-10 max-w-2xl mx-auto leading-relaxed">
                Si quieres una visión estratégica de tu proyecto y necesitas entender qué conviene priorizar antes de invertir más tiempo y presupuesto, escríbeme y vemos tu caso.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button variant="hero" size="xl" className="group w-full sm:w-auto" asChild>
                  <a href="mailto:pilarbelena25@gmail.com?subject=CONSULTOR%C3%8DA%20SEO&body=Hola%20Pilar%2C%20quiero%20solicitar%20una%20Consultor%C3%ADa%20SEO%20Estrat%C3%A9gica%20para%20mi%20proyecto.">
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

export default ConsultoriaSeoEstrategica;
