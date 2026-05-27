import { Button } from "@/components/ui/button";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import heroImage from "@/assets/Auditoria Express SEO Fintech Lab.webp";
import { LazyImage } from "@/components/ui/LazyImage";
import { 
  Check, 
  ArrowRight, 
  Search, 
  Compass, 
  FileText, 
  Target, 
  Sparkles 
} from "lucide-react";

const CALENDLY_URL = "https://calendly.com/pilarbelena25/30min";

const AuditoriaExpressSeoFintech = () => {
  // Función para hacer scroll hasta la sección de contacto / "Empieza aquí"
  const scrollToContact = () => {
    const contactSection = document.getElementById("empieza-aquí");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* 1. Hero Section */}
        <section className="pt-32 pb-24 bg-gradient-hero relative overflow-hidden">
          {/* Decorative gradients */}
          <div className="absolute top-1/4 right-0 w-80 h-80 bg-tertiary/10 rounded-full blur-3xl animate-pulse-soft pointer-events-none" />
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <span className="inline-block font-body text-sm font-semibold text-primary bg-primary/10 px-4 py-1.5 rounded-full mb-6 uppercase tracking-wider">
                Auditoría Express · 290 €
              </span>
              
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl leading-tight mb-8 text-foreground">
                <span>Auditoría SEO Express para </span>
                <span className="text-gradient-primary">Fintech & Inversión Inmobiliaria</span>
              </h1>
              
              <p className="font-body text-lg sm:text-xl text-foreground-muted mb-12 max-w-3xl mx-auto leading-relaxed">
                Descubre qué está frenando tu Web, qué debes corregir primero y cómo convertir tu Presencia Digital en una fuente real de Autoridad, Visibilidad y Leads Orgánicos.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4 sm:px-0 mb-16">
                <Button variant="hero" size="xl" className="w-full sm:w-auto" asChild>
                  <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
                    Solicitar Auditoría
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </a>
                </Button>
                <Button 
                  variant="heroOutline" 
                  size="xl" 
                  className="w-full sm:w-auto hover:bg-primary/5"
                  onClick={scrollToContact}
                >
                  Quiero revisar mi web
                </Button>
              </div>

              <div className="relative max-w-3xl mx-auto rounded-2xl overflow-hidden shadow-elegant-lg border border-border bg-card">
                <LazyImage
                  eager
                  src={heroImage}
                  alt="Auditoría Express SEO Fintech e Inversión Inmobiliaria"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* 2. Qué es la Auditoría SEO Express */}
        <section className="py-24 bg-card border-t border-b border-border/50 relative">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center gap-3 mb-6 justify-center sm:justify-start">
                <Search className="w-6 h-6 text-primary" />
                <span className="font-body text-sm font-semibold uppercase tracking-wider text-primary">Diagnóstico Estratégico</span>
              </div>
              
              <h2 className="font-display text-3xl md:text-4xl text-foreground mb-8 text-center sm:text-left">
                Qué es la Auditoría SEO Express
              </h2>
              
              <div className="space-y-6 font-body text-base sm:text-lg text-foreground-muted leading-relaxed">
                <p>
                  La Auditoría SEO Express es un <strong>Diagnóstico rápido, técnico y accionable</strong> para marcas Fintech, Proyectos Inmobiliarios y Negocios que necesitan entender por qué su web no está generando resultados. Está pensada para detectar bloqueos reales y convertir la complejidad en un plan claro de acción.
                </p>
                <p>
                  No se trata solo de revisar una web, sino de entender qué está impidiendo que gane Visibilidad, Autoridad y Oportunidades de negocio. El objetivo es darte una visión clara de lo que está pasando y de qué hay que mover primero para empezar a mejorar.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Qué revisamos */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="font-display text-3xl md:text-4xl text-foreground mb-6">
                  Qué revisamos
                </h2>
                <p className="font-body text-foreground-muted text-lg max-w-2xl mx-auto">
                  En la Auditoría analizamos los puntos que más impacto tienen en el rendimiento de una web:
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-12">
                {[
                  "Estructura y arquitectura web.",
                  "Indexación y rastreo.",
                  "Títulos, meta descripciones y encabezados.",
                  "Enlazado interno.",
                  "Contenidos y alineación con la intención de búsqueda.",
                  "Autoridad temática y señales de confianza.",
                  "Claridad de la propuesta de valor.",
                  "Oportunidades de captación de leads orgánicos."
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 p-5 rounded-xl bg-card border border-border/60 shadow-elegant">
                    <div className="w-6 h-6 rounded-lg bg-primary/10 flex items-center justify-center text-primary flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4" />
                    </div>
                    <p className="font-body text-foreground text-base font-medium">{item}</p>
                  </div>
                ))}
              </div>

              <div className="bg-primary/5 rounded-2xl p-6 sm:p-8 border border-primary/20 text-center">
                <p className="font-body text-foreground-muted text-base sm:text-lg leading-relaxed">
                  También valoramos si la web está bien conectada con el tipo de usuario que quieres atraer, ya sea en <strong>Fintech, Inversión Inmobiliaria, Real Estate, Obra nueva o Segunda mano.</strong>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Cómo trabajamos */}
        <section className="py-24 bg-background-secondary border-t border-b border-border/50">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center gap-3 mb-6 justify-center sm:justify-start">
                <Compass className="w-6 h-6 text-primary" />
                <span className="font-body text-sm font-semibold uppercase tracking-wider text-primary">Metodología y Enfoque</span>
              </div>
              
              <h2 className="font-display text-3xl md:text-4xl text-foreground mb-8 text-center sm:text-left">
                Cómo trabajamos
              </h2>
              
              <div className="space-y-6 font-body text-base sm:text-lg text-foreground-muted leading-relaxed mb-8">
                <p>
                  Primero identificamos el bloqueo principal. Después priorizamos las acciones y, por último, te entregamos una visión clara para avanzar con tu equipo o conmigo.
                </p>
                <p>
                  Mi enfoque combina diagnóstico, criterio y estrategia. No busco darte una lista infinita de tareas, sino decirte qué mover primero para que la web empiece a generar impacto real.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Qué recibirás */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-16">
                <div className="inline-flex items-center gap-2 bg-primary/10 text-primary font-body text-sm px-4 py-1.5 rounded-full mb-4">
                  <FileText className="w-4 h-4" /> Entregables Clave
                </div>
                <h2 className="font-display text-3xl md:text-4xl text-foreground mb-6">
                  Qué recibirás
                </h2>
                <p className="font-body text-foreground-muted text-lg">
                  Recibirás un informe claro, práctico y sin tecnicismos innecesarios, con:
                </p>
              </div>

              <div className="space-y-4 mb-10">
                {[
                  "Hallazgos priorizados.",
                  "Problemas críticos detectados.",
                  "Acciones recomendadas.",
                  "Victorias rápidas.",
                  "Siguiente paso sugerido."
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border">
                    <span className="font-display text-lg font-bold text-primary bg-primary/10 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                      {i + 1}
                    </span>
                    <p className="font-body text-foreground font-medium text-base">{item}</p>
                  </div>
                ))}
              </div>

              <p className="font-body text-foreground text-center text-lg italic font-medium bg-card p-6 rounded-xl border border-border shadow-elegant">
                "La idea es que salgas sabiendo qué ocurre, por qué ocurre y cómo resolverlo."
              </p>
            </div>
          </div>
        </section>

        {/* 6. Para quién es */}
        <section className="py-24 bg-card border-t border-b border-border/50">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <div className="inline-flex items-center gap-2 bg-primary/10 text-primary font-body text-sm px-4 py-1.5 rounded-full mb-4">
                  <Target className="w-4 h-4" /> Perfil Ideal
                </div>
                <h2 className="font-display text-3xl md:text-4xl text-foreground mb-6">
                  Para quién es
                </h2>
                <p className="font-body text-foreground-muted text-lg max-w-2xl mx-auto">
                  Esta Auditoría es ideal para marcas que buscan rentabilidad y crecimiento estructurado:
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-12">
                {[
                  "Empresas Fintech.",
                  "Proyectos de Inversión Inmobiliaria.",
                  "Webs estancadas.",
                  "Marcas que dependen demasiado de los portales.",
                  "Negocios que quieren captar leads orgánicos sin improvisar.",
                  "Proyectos de Obra Nueva, Segunda Mano y Real Estate Premium."
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-background border border-border/60">
                    <div className="w-2.5 h-2.5 rounded-full bg-primary flex-shrink-0" />
                    <p className="font-body text-foreground text-base font-semibold">{item}</p>
                  </div>
                ))}
              </div>

              <div className="bg-primary/5 rounded-2xl p-6 sm:p-8 border border-primary/20 text-center">
                <p className="font-body text-foreground-muted text-base sm:text-lg leading-relaxed">
                  Si tu web tiene tráfico pero no convierte, o si aún no está bien posicionada para el nicho que quieres trabajar, esta propuesta encaja muy bien.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 7. Por qué el Lab */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center gap-3 mb-6 justify-center sm:justify-start">
                <Sparkles className="w-6 h-6 text-primary" />
                <span className="font-body text-sm font-semibold uppercase tracking-wider text-primary">Diferencial</span>
              </div>
              
              <h2 className="font-display text-3xl md:text-4xl text-foreground mb-8 text-center sm:text-left">
                Por qué el Lab
              </h2>
              
              <div className="space-y-6 font-body text-base sm:text-lg text-foreground-muted leading-relaxed">
                <p>
                  Porque el Lab une SEO, Contenido, IA y Visión de negocio. No trabajamos sólo para mejorar rankings, sino para construir visibilidad, credibilidad y oportunidades reales que duren.
                </p>
                <p>
                  Aquí el enfoque no es hacer SEO por hacer; sino entender qué necesita cada proyecto para crecer con criterio, con una base digital sólida y con una estrategia adaptada a su sector.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 8. Empieza aquí (Pricing / CTA Final) */}
        <section id="empieza-aquí" className="py-24 bg-gradient-hero border-t border-border/50 relative">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl mx-auto text-center">
              <span className="inline-block font-body text-sm font-semibold text-primary bg-primary/10 px-4 py-1.5 rounded-full mb-6 uppercase tracking-wider">
                El Punto de Partida
              </span>
              
              <h2 className="font-display text-3xl sm:text-4xl text-foreground mb-8">
                Empieza aquí
              </h2>
              
              <p className="font-body text-lg sm:text-xl text-foreground-muted mb-10 leading-relaxed">
                Si tu web está estancada y quieres entender qué está pasando de verdad, la Auditoría SEO Express puede ser tu mejor punto de partida.
              </p>

              <div className="bg-card rounded-2xl border border-border shadow-elegant-lg p-8 sm:p-10 mb-8 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary via-secondary to-tertiary" />
                
                <p className="font-display text-sm font-semibold text-foreground-muted uppercase tracking-widest mb-4">
                  Auditoría Express
                </p>
                <p className="font-display text-5xl sm:text-6xl text-primary font-bold mb-2">
                  290 €
                </p>
                <p className="font-body text-sm text-foreground-muted mb-8">
                  Precio único · Sin cuotas mensuales · IVA no incluido
                </p>

                <div className="border-t border-border/80 pt-8 mb-8 text-left max-w-md mx-auto">
                  <p className="font-body text-foreground font-semibold text-center text-lg mb-6">
                    Escríbeme <span className="text-[#710426] underline font-bold">“AUDITORÍA”</span> y lo vemos.
                  </p>
                  
                  <div className="flex flex-col gap-4">
                    <Button variant="hero" size="lg" className="w-full" asChild>
                      <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
                        Reservar mi Auditoría — 290 €
                      </a>
                    </Button>
                    <Button variant="heroOutline" size="lg" className="w-full" asChild>
                      <a href="mailto:pilarbelena25@gmail.com?subject=AUDITOR%C3%8DA&body=Hola%20Pilar%2C%20quiero%20solicitar%20la%20Auditor%C3%ADa%20SEO%20Express%20para%20mi%20web.">
                        Enviar Correo "AUDITORÍA"
                      </a>
                    </Button>
                  </div>
                </div>
                
                <p className="font-body text-xs text-foreground-muted">
                  Entrega garantizada en 24-48 horas tras recibir los accesos necesarios.
                </p>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
};

export default AuditoriaExpressSeoFintech;
