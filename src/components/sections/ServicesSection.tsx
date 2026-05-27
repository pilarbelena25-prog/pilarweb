import { Button } from "@/components/ui/button";
import { 
  ArrowUpRight, 
  Check, 
  HelpCircle, 
  Activity, 
  Zap, 
  Gift, 
  Target, 
  Award 
} from "lucide-react";
import { Link } from "react-router-dom";

const ServicesSection = () => {
  return (
    <section id="servicios" className="py-24 bg-background relative overflow-hidden border-t border-border/50">
      {/* Decorative gradients */}
      <div className="absolute top-1/3 -right-32 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -left-32 w-96 h-96 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* H1 (Section Title) & Subtitle */}
        <div className="text-center max-w-3xl 3xl:max-w-4xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary font-body text-sm px-4 py-1.5 rounded-full mb-6">
            Auditoría Express SEO Fintech e Inversión Inmobiliaria
          </div>
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6 leading-tight">
            Auditoría SEO Express para <br />
            <span className="text-gradient-primary font-semibold">Fintech & Inversión Inmobiliaria</span>
          </h2>
          <p className="font-body text-lg sm:text-xl text-foreground-muted leading-relaxed max-w-3xl mx-auto">
            Descubre qué está frenando tu Web, qué debes corregir primero y cómo convertir tu Presencia Digital en una fuente real de Autoridad, Visibilidad y Leads Orgánicos.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
            <Button variant="hero" size="lg" className="group" asChild>
              <Link to="/auditoria-express-seo-fintech">
                Solicitar Auditoría
                <ArrowUpRight className="w-4 h-4 ml-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </Button>
            <Button variant="heroOutline" size="lg" asChild>
              <a href="#contacto">
                Quiero revisar mi web
              </a>
            </Button>
          </div>
        </div>

        <div className="max-w-5xl mx-auto space-y-16">
          
          {/* Qué es la Auditoría SEO Express */}
          <div className="bg-card border border-border/80 rounded-2xl p-8 sm:p-10 shadow-elegant">
            <div className="flex items-center gap-3 mb-6">
              <Activity className="w-6 h-6 text-primary" />
              <h3 className="font-display text-2xl text-foreground font-semibold">
                Qué es la Auditoría SEO Express
              </h3>
            </div>
            <div className="space-y-4 font-body text-base text-foreground-muted leading-relaxed">
              <p>
                La Auditoría SEO Express es un <strong>Diagnóstico rápido, técnico y accionable</strong> para marcas Fintech, Proyectos Inmobiliarios y Negocios que necesitan entender por qué su web no está generando resultados. Está pensada para detectar bloqueos reales y convertir la complejidad en un plan claro de acción.
              </p>
              <p>
                No se trata solo de revisar una web, sino de entender qué está impidiendo que gane Visibilidad, Autoridad y Oportunidades de negocio. El objetivo es darte una visión clara de lo que está pasando y de qué hay que mover primero para empezar a mejorar.
              </p>
            </div>
          </div>

          {/* Dos columnas: Qué revisamos & Cómo trabajamos */}
          <div className="grid md:grid-cols-2 gap-8">
            
            {/* Qué revisamos */}
            <div className="bg-card border border-border/80 rounded-2xl p-8 shadow-elegant flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Check className="w-6 h-6 text-primary bg-primary/10 rounded-full p-1" />
                  <h3 className="font-display text-xl text-foreground font-semibold">Qué revisamos</h3>
                </div>
                <p className="font-body text-sm text-foreground-muted mb-6">
                  En la Auditoría analizamos los puntos que más impacto tienen en el rendimiento de una web:
                </p>
                <ul className="space-y-3 mb-6">
                  {[
                    "Estructura y arquitectura web.",
                    "Indexación y rastreo.",
                    "Títulos, meta descripciones y encabezados.",
                    "Enlazado interno.",
                    "Contenidos y alineación con la intención de búsqueda.",
                    "Autoridad temática y señales de confianza.",
                    "Claridad de la propuesta de valor.",
                    "Oportunidades de captación de leads orgánicos."
                  ].map((point, index) => (
                    <li key={index} className="flex items-start gap-2.5 font-body text-sm text-foreground-muted">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="border-t border-border/60 pt-4 mt-4">
                <p className="font-body text-xs text-foreground-muted leading-relaxed">
                  También valoramos si la web está bien conectada con el tipo de usuario que quieres atraer, ya sea en <strong>Fintech, Inversión Inmobiliaria, Real Estate, Obra nueva o Segunda mano</strong>.
                </p>
              </div>
            </div>

            {/* Cómo trabajamos */}
            <div className="bg-card border border-border/80 rounded-2xl p-8 shadow-elegant flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Zap className="w-6 h-6 text-primary" />
                  <h3 className="font-display text-xl text-foreground font-semibold">Cómo trabajamos</h3>
                </div>
                <div className="space-y-4 font-body text-sm text-foreground-muted leading-relaxed">
                  <p>
                    Primero identificamos el bloqueo principal. Después priorizamos las acciones y, por último, te entregamos una visión clara para avanzar con tu equipo o conmigo.
                  </p>
                  <p>
                    Mi enfoque combina diagnóstico, criterio y estrategia. No busco darte una lista infinita de tareas, sino decirte qué mover primero para que la web empiece a generar impacto real.
                  </p>
                </div>
              </div>
              <div className="bg-primary/5 border border-primary/10 rounded-xl p-4 mt-6">
                <p className="font-body text-xs text-foreground font-medium text-center">
                  Diagnóstico directo y priorizado por nivel de impacto real.
                </p>
              </div>
            </div>

          </div>

          {/* Dos columnas: Qué recibirás & Para quién es */}
          <div className="grid md:grid-cols-2 gap-8">

            {/* Qué recibirás */}
            <div className="bg-card border border-border/80 rounded-2xl p-8 shadow-elegant">
              <div className="flex items-center gap-3 mb-6">
                <Gift className="w-6 h-6 text-primary" />
                <h3 className="font-display text-xl text-foreground font-semibold">Qué recibirás</h3>
              </div>
              <p className="font-body text-sm text-foreground-muted mb-6">
                Recibirás un informe claro, práctico y sin tecnicismos innecesarios, con:
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  "Hallazgos priorizados.",
                  "Problemas críticos detectados.",
                  "Acciones recomendadas.",
                  "Victories rápidas.",
                  "Siguiente paso sugerido."
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 font-body text-sm text-foreground">
                    <span className="font-display text-xs font-bold text-primary bg-primary/10 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0">
                      {index + 1}
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="font-body text-xs text-foreground-muted italic border-t border-border/60 pt-4">
                La idea es que salgas sabiendo qué ocurre, por qué ocurre y cómo resolverlo.
              </p>
            </div>

            {/* Para quién es */}
            <div className="bg-card border border-border/80 rounded-2xl p-8 shadow-elegant flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Target className="w-6 h-6 text-primary" />
                  <h3 className="font-display text-xl text-foreground font-semibold">Para quién es</h3>
                </div>
                <p className="font-body text-sm text-foreground-muted mb-4">
                  Esta Auditoría es ideal para:
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-6">
                  {[
                    "Empresas Fintech.",
                    "Proyectos de Inversión Inmobiliaria.",
                    "Webs estancadas.",
                    "Marcas que dependen de portales.",
                    "Negocios sin leads orgánicos.",
                    "Real Estate Premium."
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-2 font-body text-xs text-foreground-muted bg-background/50 border border-border/40 px-2.5 py-1.5 rounded-lg">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="border-t border-border/60 pt-4">
                <p className="font-body text-xs text-foreground-muted leading-relaxed">
                  Si tu web tiene tráfico pero no convierte, o si aún no está bien posicionada para el nicho que quieres trabajar, esta propuesta encaja muy bien.
                </p>
              </div>
            </div>

          </div>

          {/* Por qué el Lab & Empieza aquí */}
          <div className="grid md:grid-cols-2 gap-8">
            
            {/* Por qué el Lab */}
            <div className="bg-card border border-border/80 rounded-2xl p-8 shadow-elegant flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Award className="w-6 h-6 text-primary" />
                  <h3 className="font-display text-xl text-foreground font-semibold">Por qué el Lab</h3>
                </div>
                <div className="space-y-4 font-body text-sm text-foreground-muted leading-relaxed">
                  <p>
                    Porque el Lab une SEO, Contenido, IA y Visión de negocio. No trabajamos sólo para mejorar rankings, sino para construir visibilidad, credibilidad y oportunidades reales que duren.
                  </p>
                  <p>
                    Aquí el enfoque no es hacer SEO por hacer; sino entender qué necesita cada proyecto para crecer con criterio, con una base digital sólida y con una estrategia adaptada a su sector.
                  </p>
                </div>
              </div>
            </div>

            {/* Empieza aquí */}
            <div className="bg-[#710426]/5 dark:bg-[#710426]/10 border border-[#710426]/30 rounded-2xl p-8 shadow-elegant flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#710426]/10 rounded-full blur-xl pointer-events-none" />
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="font-display text-xl text-[#710426] dark:text-[#e08aa0] font-semibold">Empieza aquí</h3>
                </div>
                <p className="font-body text-sm text-foreground-muted leading-relaxed mb-6">
                  Si tu web está estancada y quieres entender qué está pasando de verdad, la Auditoría SEO Express puede ser tu mejor punto de partida.
                </p>
              </div>
              <div>
                <div className="bg-background rounded-xl p-4 border border-border mb-4 text-center">
                  <p className="font-body text-sm font-semibold text-foreground">
                    Escríbeme <span className="text-[#710426] underline font-bold">“AUDITORÍA”</span> y lo vemos.
                  </p>
                </div>
                <Button variant="hero" size="lg" className="w-full" asChild>
                  <a href="mailto:pilarbelena25@gmail.com?subject=AUDITOR%C3%8DA&body=Hola%20Pilar%2C%20quiero%20solicitar%20la%20Auditor%C3%ADa%20SEO%20Express%20para%20mi%20web.">
                    Contactar ahora
                  </a>
                </Button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default ServicesSection;
