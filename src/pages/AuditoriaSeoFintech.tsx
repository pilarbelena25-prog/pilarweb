import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import pilarBelena from "@/assets/pilar-2.webp";

// SVG Icons as components
const AnalysisTechIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 mx-auto mb-4">
    <rect x="8" y="12" width="32" height="40" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/>
    <path d="M14 20h20M14 28h20M14 36h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="48" cy="20" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
    <path d="M48 14v6l4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M44 44l8-8M52 44l-8-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const CompetitorIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 mx-auto mb-4">
    <circle cx="32" cy="16" r="6" stroke="currentColor" strokeWidth="2" fill="none"/>
    <circle cx="16" cy="32" r="5" stroke="currentColor" strokeWidth="2" fill="none"/>
    <circle cx="48" cy="32" r="5" stroke="currentColor" strokeWidth="2" fill="none"/>
    <path d="M32 22v6M22 30l6-4M42 30l-6-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="32" cy="48" r="8" stroke="currentColor" strokeWidth="2" fill="none"/>
    <path d="M28 48h8M32 44v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const LinkBuildingIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 mx-auto mb-4">
    <path d="M24 28l-4 4a8 8 0 000 11.3l0 0a8 8 0 0011.3 0l4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M40 36l4-4a8 8 0 000-11.3l0 0a8 8 0 00-11.3 0l-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M28 36l8-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="16" cy="16" r="4" stroke="currentColor" strokeWidth="2" fill="none"/>
    <circle cx="48" cy="48" r="4" stroke="currentColor" strokeWidth="2" fill="none"/>
  </svg>
);

const VisibilityIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 mx-auto mb-4">
    <rect x="12" y="20" width="40" height="32" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/>
    <path d="M20 44V36M28 44V32M36 44V28M44 44V24" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="20" cy="12" r="4" stroke="currentColor" strokeWidth="2" fill="none"/>
    <path d="M24 12h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M36 8l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const UserExperienceIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 mx-auto mb-4">
    <rect x="16" y="8" width="32" height="48" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/>
    <path d="M24 16h16M24 24h16M24 32h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M28 44l4 4 8-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="50" cy="20" r="6" stroke="currentColor" strokeWidth="2" fill="none"/>
    <path d="M48 18l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const AuthorityIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 mx-auto mb-4">
    <circle cx="32" cy="32" r="20" stroke="currentColor" strokeWidth="2" fill="none"/>
    <circle cx="32" cy="32" r="8" stroke="currentColor" strokeWidth="2" fill="none"/>
    <path d="M32 12v8M32 44v8M12 32h8M44 32h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M20 20l6 6M38 38l6 6M44 20l-6 6M26 38l-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const OpportunityIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 mx-auto mb-4">
    <rect x="16" y="24" width="20" height="28" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/>
    <path d="M22 32h8M22 40h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="42" cy="20" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
    <path d="M42 14v6M38 20h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M42 34v8M38 38h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const ROIIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 mx-auto mb-4">
    <rect x="12" y="12" width="28" height="20" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/>
    <text x="26" y="26" textAnchor="middle" fontSize="10" fill="currentColor" fontWeight="bold">ROI</text>
    <circle cx="44" cy="44" r="12" stroke="currentColor" strokeWidth="2" fill="none"/>
    <path d="M44 36v8l4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M16 40l8-4 8 6 8-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-green-600">
    <rect x="2" y="2" width="20" height="20" rx="4" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="2"/>
    <path d="M7 12l3 3 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const CALENDAR_URL = "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ0cCX8JU1YZ1H7eBKT199JlRVDK3S4VteS7Wf6ca0ljZ-coZRqYSOqMO6nt9Qb5kDnW6hGK367q";

const AuditoriaSeoFintech = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-hero">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl leading-tight mb-6 text-primary">
                Impulsa tu Fintech en Google con una Auditoría SEO diseñada para liderar con IA
              </h1>

              <h2 className="font-display text-xl md:text-2xl text-foreground-muted mb-8">
                ¿Por qué tu Fintech no está generando los leads que mereces?
              </h2>

              <ul className="space-y-4 mb-10 font-body">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span className="text-foreground">
                    Inviertes en marketing, pero no apareces en los primeros resultados de Google.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span className="text-foreground">
                    Recibes visitas, pero pocas se convierten en clientes reales.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span className="text-foreground">
                    Tus competidores dominan Google mientras tu marca Fintech lucha por visibilidad y autoridad.
                  </span>
                </li>
              </ul>

              <Button variant="hero" size="xl" asChild>
                <a href={CALENDAR_URL} target="_blank" rel="noopener noreferrer">
                  Solicita tu Auditoría SEO Fintech
                </a>
              </Button>
            </div>

            <div className="flex justify-center">
              <img
                src={pilarBelena}
                alt="Pilar Beleña - Especialista SEO Fintech"
                className="max-w-md w-full rounded-lg"
              />
            </div>
            </div>
          </div>
        </div>
      </section>

      {/* Qué Incluye Section */}
      <section className="py-20 bg-soft-pink text-soft-pink-foreground">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl text-center mb-16 text-primary">
              ¿Qué incluye la Auditoría SEO Fintech?
            </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Análisis Técnico */}
            <div className="text-center">
              <AnalysisTechIcon />
              <h3 className="font-display text-xl mb-4 text-primary">
                Análisis Técnico para destacar en Google
              </h3>
              <ul className="text-left space-y-3 font-body text-soft-pink-foreground">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span>Detectamos los errores que frenan tu Visibilidad: velocidad, indexación, rastreo y otros fallos técnicos.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span>Optimizamos tu web para móviles y mejoramos la arquitectura para que Google entienda mejor tu proyecto Fintech.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span>Revisamos HTTPS, estabilidad y salud general del sitio para que tu SEO financiero tenga una base sólida.</span>
                </li>
              </ul>
            </div>

            {/* Estudio Estratégico */}
            <div className="text-center">
              <CompetitorIcon />
              <h3 className="font-display text-xl mb-4 text-primary">
                Estudio Estratégico de tu competencia Fintech
              </h3>
              <ul className="text-left space-y-3 font-body text-soft-pink-foreground">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span>Analizamos a los competidores Fintech mejor posicionados en tu nicho.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span>Identificamos brechas de contenido y de autoridad que podemos aprovechar para adelantar.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span>Comparamos enlaces externos y reputación de dominio para encontrar ventajas competitivas reales.</span>
                </li>
              </ul>
            </div>

            {/* Link Building */}
            <div className="text-center">
              <LinkBuildingIcon />
              <h3 className="font-display text-xl mb-4 text-primary">
                Estrategia de link building con medios Fintech
              </h3>
              <ul className="text-left space-y-3 font-body text-soft-pink-foreground">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span>Auditamos tu perfil de enlaces y detectamos enlaces tóxicos que dañan tu posicionamiento.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span>Diseñamos una Estrategia de backlinks con medios Fintech y portales financieros relevantes.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span>Reforzamos la Autoridad digital de tu marca con enlaces de alto valor que multiplican tu visibilidad.</span>
                </li>
              </ul>
            </div>
          </div>

            <div className="text-center">
              <p className="font-display text-xl mb-6 text-soft-pink-foreground">
                ¿Quieres ver estos errores en tu web?
              </p>
              <Button variant="hero" size="lg" asChild>
                <a href={CALENDAR_URL} target="_blank" rel="noopener noreferrer">
                  Solicita tu Diagnóstico SEO Fintech
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Método Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl text-center mb-4 text-primary">
              Nuestro método para posicionar tu Fintech como autoridad
            </h2>
          <p className="font-body text-center text-foreground-muted mb-16 max-w-3xl mx-auto">
            Proceso paso a paso para multiplicar tu visibilidad Fintech , autoridad de marca y atraer leads cualificados en Google (con y sin IA).
          </p>

          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="text-center">
              <span className="font-display text-2xl text-primary">1|</span>
              <h3 className="font-display text-xl text-secondary mb-2">Diagnóstico SEO Fintech</h3>
              <p className="font-body text-foreground-muted text-sm">
                Detectamos bloqueos técnicos y de contenido que frenan tu posicionamiento.
              </p>
            </div>
            <div className="text-center">
              <span className="font-display text-2xl text-primary">2|</span>
              <h3 className="font-display text-xl text-secondary mb-2">Análisis En Profundidad</h3>
              <p className="font-body text-foreground-muted text-sm">
                Auditoría completa de tu web, sector Fintech y competidores mejor posicionados.
              </p>
            </div>
            <div className="text-center">
              <span className="font-display text-2xl text-primary">3|</span>
              <h3 className="font-display text-xl text-secondary mb-2">Informe Accionable</h3>
              <p className="font-body text-foreground-muted text-sm">
                Documento visual con prioridades claras por impacto en visibilidad y leads.
              </p>
            </div>
            <div className="text-center">
              <span className="font-display text-2xl text-primary">4|</span>
              <h3 className="font-display text-xl text-secondary mb-2">Estrategia Personalizada</h3>
              <p className="font-body text-foreground-muted text-sm">
                Hoja de ruta SEO adaptada a tu modelo Fintech y objetivos de crecimiento.
              </p>
            </div>
          </div>

          <div className="text-center mb-16">
            <span className="font-display text-2xl text-primary">5|</span>
            <h3 className="font-display text-xl text-secondary mb-2">Implementación + Soporte (Opcional)</h3>
            <p className="font-body text-foreground-muted text-sm max-w-lg mx-auto">
              Te acompañamos aplicando mejoras con foco en resultados medibles.
            </p>
          </div>

          <div className="text-center pb-6">
            <p className="font-display text-xl mb-6 text-soft-pink-foreground">
                ¿Listo para convertir tu Fintech en líder del sector?
            </p>
            <Button variant="hero" size="lg" asChild>
              <a href={CALENDAR_URL} target="_blank" rel="noopener noreferrer">
                Solicita tu Diagnóstico SEO Fintech
              </a>
            </Button>
          </div>

          <div className="text-center border-t border-border pt-12 mt-6">
            <h2 className="font-display text-3xl md:text-4xl text-center mb-4 text-primary">Proceso Estratégico para liderar con tu Fintech</h2>
            <p className="font-body text-foreground-muted mb-4">
              Un enfoque <strong>ESTRATÉGICO</strong>, <strong>PERSONALIZADO</strong> y <strong>DISEÑADO</strong> para convertir tu Fintech en un Referente Digital con Autoridad de Marca Fintech.
            </p>
            <h3 className="font-display text-2xl text-foreground mb-2">
              ¿Preparado para Posicionar tu Fintech como Autoridad Online?
            </h3>
            <p className="font-body text-foreground-muted mb-8">
              Solicita tu Auditoría SEO Fintech Personalizada y da el primer paso hacia el Liderazgo en Google.
            </p>
            <Button variant="hero" size="lg" asChild>
              <a href={CALENDAR_URL} target="_blank" rel="noopener noreferrer">
                Quiero una Auditoría SEO Fintech
              </a>
            </Button>
          </div>
          </div>
        </div>
      </section>

      {/* Beneficios Section */}
      <section className="py-20 bg-background-secondary">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl text-center mb-16 text-primary">
              Beneficios clave de una Auditoría SEO Fintech
            </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <VisibilityIcon />
              <h3 className="font-display text-xl mb-2 text-primary">
                Visibilidad real en Google e IA
              </h3>
              <p className="font-body text-foreground-muted text-sm">
                Aparece donde tus clientes buscan: resultados tradicionales y búsquedas generativas con IA.
              </p>
            </div>
            <div className="text-center">
              <UserExperienceIcon />
              <h3 className="font-display text-xl mb-2 text-primary">
                Mejor experiencia para tus usuarios
              </h3>
              <p className="font-body text-foreground-muted text-sm">
                Web más rápida, clara y navegable, optimizada para captar atención y guiar conversiones.
              </p>
            </div>
            <div className="text-center">
              <AuthorityIcon />
              <h3 className="font-display text-xl mb-2 text-primary">
                Autoridad digital sólida
              </h3>
              <p className="font-body text-foreground-muted text-sm">
                Fortalece tu reputación Fintech con contenido relevante y enlaces que Google valora.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto mb-12">
            <div className="text-center">
              <OpportunityIcon />
              <h3 className="font-display text-xl mb-2 text-primary">
                Más oportunidades de negocio
              </h3>
              <p className="font-body text-foreground-muted text-sm">
                Atrae leads cualificados y mejoras en las tasas de conversión desde el primer contacto.
              </p>
            </div>
            <div className="text-center">
              <ROIIcon />
              <h3 className="font-display text-xl mb-2 text-primary">
                ROI claro y medible
              </h3>
              <p className="font-body text-foreground-muted text-sm">
                Cada acción genera impacto: más visibilidad, autoridad y clientes reales.
              </p>
            </div>
          </div>

            <p className="text-center font-body text-lg text-foreground">
              Cada <strong>ACCIÓN</strong> genera <strong>IMPACTO REAL</strong>: Más Visibilidad, Más autoridad, más Clientes Fintech.
            </p>
          </div>
        </div>
      </section>

      {/* Por Qué Elegir Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl text-center mb-16 text-foreground">
            ¿Por qué elegir una Auditoría SEO Fintech?
          </h2>

          <div className="max-w-3xl mx-auto space-y-8 mb-12">
            <div className="flex items-start gap-4">
              <CheckIcon />
              <div>
                <h3 className="font-body font-semibold text-foreground mb-2">
                  Porque tu sector no es como los demás.
                </h3>
                <p className="font-body text-foreground-muted">
                  Trabajamos exclusivamente con Fintechs y entendemos sus retos únicos: alta competencia , lenguaje técnico complejo y normativas que cambian constantemente.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <CheckIcon />
              <div>
                <h3 className="font-body font-semibold text-foreground mb-2">
                  Porque no usamos plantillas genéricas.
                </h3>
                <p className="font-body text-foreground-muted">
                  Diseñamos estrategias personalizadas con palabras clave específicas Fintech , análisis real del mercado y foco en resultados tangibles desde el primer mes.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <CheckIcon />
              <div>
                <h3 className="font-body font-semibold text-foreground mb-2">
                  Porque buscas resultados, no hay informes vacíos.
                </h3>
                <p className="font-body text-foreground-muted">
                  Te entregamos acciones claras y priorizadas para mejorar visibilidad Fintech , autoridad de marca y captación de leads cualificados.
                </p>
              </div>
            </div>
          </div>

            <div className="text-center">
              <Button variant="hero" size="lg" asChild>
                <a href={CALENDAR_URL} target="_blank" rel="noopener noreferrer">
                  Quiero mi Auditoría SEO Fintech
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-background-secondary">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl text-center mb-16 text-foreground">
              Preguntas frecuentes optimizadas para tu Auditoría SEO Fintech
            </h2>

            <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-2">
              <AccordionItem value="item-1" className="bg-secondary rounded-lg border-none">
                <AccordionTrigger className="px-6 py-4 text-left font-body text-secondary-foreground hover:no-underline">
                  ¿Qué diferencia esta Auditoría SEO Fintech de las genéricas?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 font-body text-secondary-foreground/90">
                  Está diseñada exclusivamente para Fintechs : alta competencia, lenguaje técnico y normativas específicas. Sin plantillas, sino estrategias con tus palabras clave Fintech reales.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-secondary rounded-lg border-none">
                <AccordionTrigger className="px-6 py-4 text-left font-body text-secondary-foreground hover:no-underline">
                  ¿Qué beneficios obtengo al mejorar la visibilidad de mi Fintech en Google?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 font-body text-secondary-foreground/90">
                  Visibilidad real , autoridad de marca y leads cualificados que convierten. Apareces donde tus clientes buscan: Google tradicional e IA generativa.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-secondary rounded-lg border-none">
                <AccordionTrigger className="px-6 py-4 text-left font-body text-secondary-foreground hover:no-underline">
                  ¿Cómo se aprovechan las búsquedas con IA en esta Auditoría?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 font-body text-secondary-foreground/90">
                  Optimizamos para respuestas directas que Google IA prioriza: estructura contenido, preguntas long-tail y autoridad temática Fintech.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="bg-secondary rounded-lg border-none">
                <AccordionTrigger className="px-6 py-4 text-left font-body text-secondary-foreground hover:no-underline">
                  ¿Qué incluye exactamente la Auditoría SEO para Fintechs?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 font-body text-secondary-foreground/90">
                  Análisis técnico, estudio de competencia Fintech, estrategia link building con medios financieros y hoja de ruta accionable priorizada por impacto.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="bg-secondary rounded-lg border-none">
                <AccordionTrigger className="px-6 py-4 text-left font-body text-secondary-foreground hover:no-underline">
                  ¿Cuánto tarda y cómo se entrega el informe?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 font-body text-secondary-foreground/90">
                  Entrega en 7 días con documento visual: diagnóstico, prioridades claras y acciones paso a paso para resultados desde el mes 1.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="bg-secondary rounded-lg border-none">
                <AccordionTrigger className="px-6 py-4 text-left font-body text-secondary-foreground hover:no-underline">
                  ¿Cuál es el siguiente paso tras la Auditoría?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 font-body text-secondary-foreground/90">
                  Implementamos juntos (opcional) o te guía en cada acción. Primer foco: visibilidad rápida y autoridad medible.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            </div>
              <div className="text-center mt-8">
                <Button variant="hero" size="xl" asChild>
                  <a href={CALENDAR_URL} target="_blank" rel="noopener noreferrer">
                    Quiero mi Auditoría SEO Fintech
                  </a>
                </Button>
              </div>
          </div>
        </div>
      </section>

      {/* CTA Final Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl mb-6 text-primary">
            Haz que tu Fintech sea la que todos encuentran (y eligen).
          </h2>
          <p className="font-body text-foreground-muted mb-8">
            Convierte tu Visibilidad Fintech en Autoridad de Marca y atrae Leads Cualificados que convierten.
          </p>
          <p className="font-body text-foreground-muted mb-8">
            Solicita tu Auditoría SEO Fintech ahora.
          </p>
            <Button variant="hero" size="xl" asChild>
              <a href={CALENDAR_URL} target="_blank" rel="noopener noreferrer">
                Quiero mi Auditoría SEO Fintech
              </a>
            </Button>
          </div>
        </div>
      </section>
      </main>
      <Footer />
    </div>
  );
};

export default AuditoriaSeoFintech;
