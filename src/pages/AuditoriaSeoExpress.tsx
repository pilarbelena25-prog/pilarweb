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

const AuditoriaSeoExpress = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const sections = [
    { id: "que-es", title: "Qué es", icon: HelpCircle },
    { id: "que-revisamos", title: "Qué revisamos", icon: CheckSquare },
    { id: "como-trabajamos", title: "Cómo trabajamos", icon: Compass },
    { id: "que-recibiras", title: "Qué recibirás", icon: LineChart },
    { id: "para-quien", title: "Para quién es", icon: HeartHandshake },
    { id: "porque-lab", title: "Por qué el Lab", icon: Building2 },
    { id: "empieza-aqui", title: "Empieza aquí", icon: MessageSquare },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-white">
      <Helmet>
        <title>Auditoría SEO Express | Pilar Beleña SEO Lab</title>
        <meta
          name="description"
          content="Diagnóstico rápido, técnico y accionable para marcas Fintech y proyectos inmobiliarios. Descubre qué frena tu web y cómo captar leads orgánicos."
        />
        <meta
          name="keywords"
          content="Auditoria SEO express, SEO Fintech, SEO Inmobiliario, auditoria web, posicionamiento organico, Pilar Beleña"
        />
        <link rel="canonical" href="https://pilar-belena-seo-fintech-lab.netlify.app/auditoria-seo-express" />
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
                Diagnóstico Rápido y Actionable
              </span>
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight text-primary mb-6 animate-fade-up">
                Auditoría SEO Express para <br />
                <span className="text-gradient-primary font-semibold">Fintech & Inversión Inmobiliaria</span>
              </h1>
              <p className="font-body text-lg md:text-xl text-foreground-muted leading-relaxed max-w-3xl mx-auto mb-8 animate-fade-up animate-delay-100">
                Descubre qué está frenando tu Web, qué debes corregir primero y cómo convertir tu Presencia Digital en una fuente real de Autoridad, Visibilidad y Leads Orgánicos.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-up animate-delay-200">
                <Button variant="hero" size="xl" className="group w-full sm:w-auto" asChild>
                  <a href="#empieza-aqui">
                    Solicitar Auditoría
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
                <Button variant="heroOutline" size="xl" className="w-full sm:w-auto" asChild>
                  <a href="#que-es">
                    Quiero revisar mi web
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
                  Índice de la Auditoría
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

        {/* 2. QUÉ ES LA AUDITORÍA SEO EXPRESS */}
        <section id="que-es" className="py-20 bg-background scroll-mt-24">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-10">
                <span className="font-body text-xs font-semibold uppercase tracking-widest text-primary block mb-3">
                  01. Concepto
                </span>
                <h2 className="font-display text-3xl md:text-4xl text-primary mb-6 leading-tight">
                  Qué es la Auditoría SEO Express
                </h2>
              </div>
              <div className="bg-card border border-border/80 rounded-2xl p-8 sm:p-10 shadow-elegant space-y-4">
                <p className="font-body text-base md:text-lg text-foreground-muted leading-relaxed">
                  La Auditoría SEO Express es un <strong>Diagnóstico rápido, técnico y accionable</strong> para marcas Fintech, Proyectos Inmobiliarios y Negocios que necesitan entender por qué su web no está generando resultados. Está pensada para detectar bloqueos reales y convertir la complejidad en un plan claro de acción.
                </p>
                <p className="font-body text-base md:text-lg text-foreground-muted leading-relaxed">
                  No se trata solo de revisar una web, sino de entender qué está impidiendo que gane Visibilidad, Autoridad y Oportunidades de negocio. El objetivo es darte una visión clara de lo que está pasando y de qué hay que mover primero para empezar a mejorar.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. QUÉ REVISAMOS */}
        <section id="que-revisamos" className="py-20 bg-soft-pink/30 border-y border-border/50 scroll-mt-24">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-12 gap-12 items-center">
                <div className="md:col-span-6 space-y-6">
                  <span className="font-body text-xs font-semibold uppercase tracking-widest text-secondary">
                    02. Análisis
                  </span>
                  <h2 className="font-display text-3xl md:text-4xl text-primary leading-tight">
                    Qué revisamos
                  </h2>
                  <p className="font-body text-foreground-muted text-base md:text-lg leading-relaxed">
                    En la Auditoría analizamos los puntos que más impacto tienen en el rendimiento de una web:
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Estructura y arquitectura web.",
                      "Indexación y rastreo.",
                      "Títulos, meta descripciones y encabezados.",
                      "Enlazado interno.",
                      "Contenidos y alineación con la intención de búsqueda.",
                      "Autoridad temática y señales de confianza.",
                      "Claridad de la propuesta de valor.",
                      "Oportunidades de captación de leads orgánicos."
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 font-body text-sm text-foreground-muted">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="md:col-span-6">
                  <div className="bg-card border border-border/80 rounded-2xl p-8 shadow-elegant">
                    <p className="font-body text-base text-foreground-muted leading-relaxed">
                      También valoramos si la web está bien conectada con el tipo de usuario que quieres atraer, ya sea en <strong>Fintech, Inversión Inmobiliaria, Real Estate, Obra nueva o Segunda mano</strong>.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. CÓMO TRABAJAMOS */}
        <section id="como-trabajamos" className="py-20 bg-background scroll-mt-24">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <span className="font-body text-xs font-semibold uppercase tracking-widest text-primary">
                  03. Metodología
                </span>
                <h2 className="font-display text-3xl md:text-4xl text-primary mt-2">
                  Cómo trabajamos
                </h2>
              </div>
              <div className="bg-card border border-border rounded-2xl p-8 md:p-12 shadow-elegant space-y-6">
                <p className="font-body text-base md:text-lg text-foreground-muted leading-relaxed">
                  Primero identificamos el bloqueo principal. Después priorizamos las acciones y, por último, te entregamos una visión clara para avanzar con tu equipo o conmigo.
                </p>
                <p className="font-body text-base md:text-lg text-foreground-muted leading-relaxed">
                  Mi enfoque combina diagnóstico, criterio y estrategia. No busco darte una lista infinita de tareas, sino decirte qué mover primero para que la web empiece a generar impacto real.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 5. QUÉ RECIBIRÁS */}
        <section id="que-recibiras" className="py-20 bg-soft-pink/30 border-y border-border/50 scroll-mt-24">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <span className="font-body text-xs font-semibold uppercase tracking-widest text-secondary">
                  04. Entregables
                </span>
                <h2 className="font-display text-3xl md:text-4xl text-foreground mt-2">
                  Qué recibirás
                </h2>
                <p className="font-body text-foreground-muted mt-2">
                  Recibirás un informe claro, práctico y sin tecnicismos innecesarios, con:
                </p>
              </div>
              <div className="grid md:grid-cols-5 gap-4">
                {[
                  "Hallazgos priorizados.",
                  "Problemas críticos detectados.",
                  "Acciones recomendadas.",
                  "Mejoras rápidas.",
                  "Siguiente paso sugerido."
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-card border border-border p-6 rounded-2xl shadow-elegant relative flex flex-col items-center text-center justify-between hover:-translate-y-1 transition-all"
                  >
                    <span className="font-display text-2xl font-bold text-primary mb-2">
                      {idx + 1}
                    </span>
                    <p className="font-body text-xs text-foreground-muted leading-relaxed">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
              <div className="mt-8 text-center bg-background rounded-xl p-4 border border-border">
                <p className="font-body text-sm font-semibold text-foreground italic">
                  "La idea es que salgas sabiendo qué ocurre, por qué ocurre y cómo resolverlo."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 6. PARA QUIÉN ES */}
        <section id="para-quien" className="py-20 bg-background scroll-mt-24">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <span className="font-body text-xs font-semibold uppercase tracking-widest text-primary">
                  05. Público Objetivo
                </span>
                <h2 className="font-display text-3xl md:text-4xl text-primary mt-2">
                  Para quién es
                </h2>
                <p className="font-body text-foreground-muted mt-2">
                  Esta Auditoría es ideal para:
                </p>
              </div>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  "Empresas Fintech.",
                  "Proyectos de Inversión Inmobiliaria.",
                  "Webs estancadas.",
                  "Marcas que dependen demasiado de los portales.",
                  "Negocios que quieren captar leads orgánicos sin improvisar.",
                  "Proyectos de Obra Nueva, Segunda Mano y Real Estate Premium."
                ].map((card, idx) => (
                  <div key={idx} className="bg-card border border-border p-5 rounded-xl shadow-elegant flex items-start gap-3">
                    <Sparkles className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <span className="font-body text-xs font-bold text-foreground">{card}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 bg-primary/5 border border-primary/10 rounded-2xl p-6 text-center">
                <p className="font-body text-base text-foreground leading-relaxed">
                  Si tu web tiene tráfico pero no convierte, o si aún no está bien posicionada para el nicho que quieres trabajar, esta propuesta encaja muy bien.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 7. POR QUÉ EL LAB */}
        <section id="porque-lab" className="py-20 bg-soft-pink/30 border-y border-border/50 scroll-mt-24">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center max-w-2xl mx-auto mb-12">
                <span className="font-body text-xs font-semibold uppercase tracking-widest text-secondary">
                  06. Propuesta de Valor
                </span>
                <h2 className="font-display text-3xl md:text-4xl text-primary mt-2">
                  Por qué el Lab
                </h2>
              </div>
              <div className="bg-card border border-border rounded-2xl p-8 md:p-12 shadow-elegant space-y-4">
                <p className="font-body text-base md:text-lg text-foreground-muted leading-relaxed">
                  Porque el Lab une SEO, Contenido, IA y Visión de negocio. No trabajamos sólo para mejorar rankings, sino para construir visibilidad, credibilidad y oportunidades reales que duren.
                </p>
                <p className="font-body text-base md:text-lg text-foreground-muted leading-relaxed">
                  Aquí el enfoque no es hacer SEO por hacer; sino entender qué necesita cada proyecto para crecer con criterio, con una base digital sólida y con una estrategia adaptada a su sector.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 8. EMPIEZA AQUÍ (CTA) */}
        <section id="empieza-aqui" className="py-20 bg-background relative overflow-hidden scroll-mt-24">
          <div className="absolute inset-0 bg-gradient-hero opacity-80 z-0 pointer-events-none" />
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto bg-card border border-border rounded-3xl p-8 md:p-16 text-center shadow-elegant-lg relative">
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
              
              <span className="font-body text-xs font-semibold uppercase tracking-widest text-primary block mb-2">
                07. Contacto Directo
              </span>
              <h2 className="font-display text-3xl md:text-5xl text-primary mb-6">
                Empieza aquí
              </h2>
              <p className="font-body text-lg text-foreground-muted mb-6 max-w-2xl mx-auto leading-relaxed">
                Si tu web está estancada y quieres entender qué está pasando de verdad, la Auditoría SEO Express puede ser tu mejor punto de partida.
              </p>
              
              <div className="bg-background rounded-xl p-6 border border-border mb-8 max-w-md mx-auto text-center">
                <p className="font-body text-base font-semibold text-foreground mb-4">
                  Escríbeme <span className="text-[#710426] underline font-bold">“AUDITORÍA”</span> y lo vemos.
                </p>
                <div className="flex flex-col gap-3">
                  <Button variant="hero" size="lg" className="w-full group" asChild>
                    <a href="mailto:pilarbelena25@gmail.com?subject=AUDITOR%C3%8DA&body=Hola%20Pilar%2C%20quiero%20solicitar%20la%20Auditor%C3%ADa%20SEO%20Express%20para%20mi%20web.">
                      Contactar ahora
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AuditoriaSeoExpress;
