import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import pilarBelena from "@/assets/pilar-2.png";

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
                Impulsa Tu Fintech En Google Con Una Auditoría SEO Diseñada Para Liderar Con IA
              </h1>

              <h2 className="font-display text-xl md:text-2xl text-foreground-muted mb-8">
                ¿Por Qué Tu Fintech No Está Generando Los Leads Que Merece?
              </h2>

              <ul className="space-y-4 mb-10 font-body">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span className="text-foreground">
                    Inviertes en marketing, pero <strong>no apareces</strong> en los primeros resultados.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span className="text-foreground">
                    Recibes visitas, pero <strong>pocas</strong> se convierten en clientes reales.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span className="text-foreground">
                    Tus competidores dominan Google mientras <strong>tú luchas</strong> por visibilidad.
                  </span>
                </li>
              </ul>

              <Button variant="hero" size="xl" asChild>
                <a href={CALENDAR_URL} target="_blank" rel="noopener noreferrer">
                  Solicita tu Auditoría SEO
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
            ¿Qué Incluye La Auditoría SEO Fintech?
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Análisis Técnico */}
            <div className="text-center">
              <AnalysisTechIcon />
              <h3 className="font-display text-xl mb-4 text-primary">
                Análisis Técnico Para Destacar En Google
              </h3>
              <ul className="text-left space-y-3 font-body text-soft-pink-foreground">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span>Primero, Detectamos los errores que frenan tu visibilidad: velocidad lenta, problemas de indexación o fallos técnicos.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span>Después, Optimizamos tu web para móviles y mejoramos su estructura para que Google la entienda mejor.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span>Por último, Revisamos aspectos clave como HTTPS, rastreo y estabilidad general.</span>
                </li>
              </ul>
            </div>

            {/* Estudio Estratégico */}
            <div className="text-center">
              <CompetitorIcon />
              <h3 className="font-display text-xl mb-4 text-primary">
                Estudio Estratégico De Tu Competencia
              </h3>
              <ul className="text-left space-y-3 font-body text-soft-pink-foreground">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span>Comenzamos Analizando a tus competidores Fintech mejor posicionados.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span>Luego, Identificamos las brechas de contenido y autoridad que puedes aprovechar para adelantarte.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span>Finalmente, Comparamos enlaces externos y reputación de dominio para encontrar ventajas ocultas.</span>
                </li>
              </ul>
            </div>

            {/* Link Building */}
            <div className="text-center">
              <LinkBuildingIcon />
              <h3 className="font-display text-xl mb-4 text-primary">
                Link Building Con Medios Fintech
              </h3>
              <ul className="text-left space-y-3 font-body text-soft-pink-foreground">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span>Primero, Auditamos tus enlaces actuales y eliminamos los que dañan tu posicionamiento.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span>Después, Diseñamos una estrategia de backlinks con medios Fintech y portales relevantes.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span>Y por último, Reforzamos tu autoridad digital con enlaces de alto valor que multiplican tu visibilidad.</span>
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
                  Solicita tu Diagnóstico
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
            Nuestro Método Para Posicionar Tu Fintech Como Autoridad
          </h2>
          <p className="font-body text-center text-foreground-muted mb-16 max-w-3xl mx-auto">
            Un proceso claro, paso a paso, para Multiplicar tu Visibilidad y atraer Leads Cualificados en buscadores con y sin IA.
          </p>

          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="text-center">
              <span className="font-display text-2xl text-primary">1|</span>
              <h3 className="font-display text-xl text-secondary mb-2">Diagnóstico SEO</h3>
              <p className="font-body text-foreground-muted text-sm">
                Detectamos los bloqueos invisibles que frenan tu posicionamiento.
              </p>
            </div>
            <div className="text-center">
              <span className="font-display text-2xl text-primary">2|</span>
              <h3 className="font-display text-xl text-secondary mb-2">Análisis En Profundidad</h3>
              <p className="font-body text-foreground-muted text-sm">
                Revisamos tu web, tu sector y tus competidores con mirada Fintech.
              </p>
            </div>
            <div className="text-center">
              <span className="font-display text-2xl text-primary">3|</span>
              <h3 className="font-display text-xl text-secondary mb-2">Informe Accionable</h3>
              <p className="font-body text-foreground-muted text-sm">
                Recibes un documento visual, claro y priorizado por impacto.
              </p>
            </div>
            <div className="text-center">
              <span className="font-display text-2xl text-primary">4|</span>
              <h3 className="font-display text-xl text-secondary mb-2">Estrategia Personalizada</h3>
              <p className="font-body text-foreground-muted text-sm">
                Trazamos tu hoja de ruta SEO, adaptada a tu modelo de negocio.
              </p>
            </div>
          </div>

          <div className="text-center mb-16">
            <span className="font-display text-2xl text-primary">5|</span>
            <h3 className="font-display text-xl text-secondary mb-2">Implementación Y Soporte (Opcional)</h3>
            <p className="font-body text-foreground-muted text-sm max-w-lg mx-auto">
              Te acompañamos si lo necesitas para aplicar cada mejora con foco en resultados.
            </p>
          </div>

          <div className="text-center border-t border-border pt-12">
            <p className="font-body text-foreground-muted mb-4">
              Un proceso <strong>ESTRATÉGICO</strong>, <strong>PERSONALIZADO</strong> y <strong>DISEÑADO</strong> para convertir tu Fintech en un Referente Digital.
            </p>
            <h3 className="font-display text-2xl text-foreground mb-2">
              ¿Preparado Para Posicionar Tu Fintech Como Una Autoridad Online?
            </h3>
            <p className="font-body text-foreground-muted mb-8">
              Solicita tu Auditoría SEO Personalizada y da el primer paso hacia el Liderazgo Digital.
            </p>
            <Button variant="hero" size="lg" asChild>
              <a href={CALENDAR_URL} target="_blank" rel="noopener noreferrer">
                Quiero una Auditoría como esta
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
            Beneficios Clave De Una Auditoría SEO Fintech
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <VisibilityIcon />
              <h3 className="font-display text-xl mb-2 text-primary">
                Visibilidad Real En Google E IA
              </h3>
              <p className="font-body text-foreground-muted text-sm">
                Aparece donde tus clientes te buscan: en los resultados tradicionales y en las nuevas búsquedas generativas.
              </p>
            </div>
            <div className="text-center">
              <UserExperienceIcon />
              <h3 className="font-display text-xl mb-2 text-primary">
                Mejor Experiencia Para Tus Usuarios
              </h3>
              <p className="font-body text-foreground-muted text-sm">
                Tu web será más rápida, clara y fácil de navegar, optimizada para captar la atención y guiar a la acción.
              </p>
            </div>
            <div className="text-center">
              <AuthorityIcon />
              <h3 className="font-display text-xl mb-2 text-primary">
                Autoridad Digital Sólida
              </h3>
              <p className="font-body text-foreground-muted text-sm">
                Fortalece tu reputación en el sector con contenido relevante y enlaces estratégicos que Google valora.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto mb-12">
            <div className="text-center">
              <OpportunityIcon />
              <h3 className="font-display text-xl mb-2 text-primary">
                Más Oportunidades De Negocio
              </h3>
              <p className="font-body text-foreground-muted text-sm">
                Atrae leads cualificados y mejora tu tasa de conversión desde el primer contacto.
              </p>
            </div>
            <div className="text-center">
              <ROIIcon />
              <h3 className="font-display text-xl mb-2 text-primary">
                ROI Claro Y Medible
              </h3>
              <p className="font-body text-foreground-muted text-sm">
                Cada acción está pensada para generar impacto: más visibilidad, más autoridad, más clientes.
              </p>
            </div>
          </div>

            <p className="text-center font-body text-lg text-foreground">
              Cada <strong>ACCIÓN</strong> está pensada para <strong>GENERAR IMPACTO</strong>: MÁS VISIBILIDAD, MÁS AUTORIDAD, MÁS CLIENTES.
            </p>
          </div>
        </div>
      </section>

      {/* Por Qué Elegir Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl text-center mb-16 text-foreground">
            ¿Por Qué Elegir Una Auditoría SEO Fintech?
          </h2>

          <div className="max-w-3xl mx-auto space-y-8 mb-12">
            <div className="flex items-start gap-4">
              <CheckIcon />
              <div>
                <h3 className="font-body font-semibold text-foreground mb-2">
                  Porque tu sector no es como los demás.
                </h3>
                <p className="font-body text-foreground-muted">
                  Trabajamos con Fintechs y entendemos sus retos: <strong>ALTA COMPETENCIA</strong>, <strong>LENGUAJE TÉCNICO</strong> y <strong>NORMATIVAS</strong> que cambian constantemente.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <CheckIcon />
              <div>
                <h3 className="font-body font-semibold text-foreground mb-2">
                  Porque no usamos plantillas.
                </h3>
                <p className="font-body text-foreground-muted">
                  Diseñamos <strong>ESTRATEGIAS</strong> a medida, con Keywords Específicas, Análisis Real del mercado y Foco en Resultados Tangibles.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <CheckIcon />
              <div>
                <h3 className="font-body font-semibold text-foreground mb-2">
                  Porque buscas resultados, no informes vacíos.
                </h3>
                <p className="font-body text-foreground-muted">
                  Te entregamos <strong>ACCIONES CLARAS</strong> para mejorar tu Visibilidad, Autoridad y Captación de Leads Cualificados desde el primer mes.
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
              Preguntas Frecuentes
            </h2>

            <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-2">
              <AccordionItem value="item-1" className="bg-secondary rounded-lg border-none">
                <AccordionTrigger className="px-6 py-4 text-left font-body text-secondary-foreground hover:no-underline">
                  ¿Qué diferencia a esta Auditoría SEO Fintech de otras auditorías genéricas?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 font-body text-secondary-foreground/90">
                  Esta auditoría está 100% enfocada en Fintechs: contempla regulaciones específicas, términos técnicos del sector y el entorno competitivo digital. No se aplican plantillas, sino estrategias personalizadas para destacar en Google y en las búsquedas potenciadas por IA.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-secondary rounded-lg border-none">
                <AccordionTrigger className="px-6 py-4 text-left font-body text-secondary-foreground hover:no-underline">
                  ¿Qué beneficios obtendré al mejorar la Visibilidad de mi Fintech en Google?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 font-body text-secondary-foreground/90">
                  Con mayor visibilidad, tu Fintech atraerá tráfico más cualificado, mejorará su autoridad de marca y multiplicará las oportunidades de captación de leads. Es el primer paso para posicionarte como referente digital.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-secondary rounded-lg border-none">
                <AccordionTrigger className="px-6 py-4 text-left font-body text-secondary-foreground hover:no-underline">
                  ¿Cómo se aprovechan las búsquedas con IA en esta Auditoría?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 font-body text-secondary-foreground/90">
                  Analizamos cómo impactan las nuevas búsquedas generativas (como SGE o chatbots con IA) y adaptamos tu contenido y estructura para que tu Fintech sea relevante en este nuevo contexto.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="bg-secondary rounded-lg border-none">
                <AccordionTrigger className="px-6 py-4 text-left font-body text-secondary-foreground hover:no-underline">
                  ¿Qué tipo de Leads puedo esperar tras la Auditoría?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 font-body text-secondary-foreground/90">
                  Leads más cualificados: decisores con intención real de compra o colaboración, que encuentran tu Fintech por autoridad temática y confianza generada en los resultados de búsqueda.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="bg-secondary rounded-lg border-none">
                <AccordionTrigger className="px-6 py-4 text-left font-body text-secondary-foreground hover:no-underline">
                  ¿Qué incluye exactamente la Auditoría SEO para Fintechs?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 font-body text-secondary-foreground/90">
                  Incluye un diagnóstico técnico, análisis de competencia, evaluación de autoridad, estrategia de link building y recomendaciones personalizadas para potenciar tu presencia online.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="bg-secondary rounded-lg border-none">
                <AccordionTrigger className="px-6 py-4 text-left font-body text-secondary-foreground hover:no-underline">
                  ¿Cuánto tarda en entregarse y cómo se presenta?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 font-body text-secondary-foreground/90">
                  El plazo medio es de entre 10 y 15 días hábiles. Se entrega en un informe visual y técnico con acciones claras, priorizadas por impacto y facilidad de implementación.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7" className="bg-secondary rounded-lg border-none">
                <AccordionTrigger className="px-6 py-4 text-left font-body text-secondary-foreground hover:no-underline">
                  ¿Necesito dar acceso a herramientas como Search Console o Analytics?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 font-body text-secondary-foreground/90">
                  Sí, para un análisis profundo es necesario el acceso a Search Console y Google Analytics. También pueden usarse herramientas adicionales según el Stack SEO actual de tu Fintech.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-8" className="bg-secondary rounded-lg border-none">
                <AccordionTrigger className="px-6 py-4 text-left font-body text-secondary-foreground hover:no-underline">
                  ¿Qué pasa si no tengo Equipo Técnico para implementar los cambios?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 font-body text-secondary-foreground/90">
                  Puedes contratar un Soporte Adicional de implementación y seguimiento para aplicar las mejoras.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-9" className="bg-secondary rounded-lg border-none">
                <AccordionTrigger className="px-6 py-4 text-left font-body text-secondary-foreground hover:no-underline">
                  ¿Está adaptada esta Auditoría para SEO Local o Internacional?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 font-body text-secondary-foreground/90">
                  Sí, adaptamos el enfoque según el mercado objetivo de la Fintech, ya sea local (España) o Internacional; considerando idioma, competencia y perfil del usuario.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-10" className="bg-secondary rounded-lg border-none">
                <AccordionTrigger className="px-6 py-4 text-left font-body text-secondary-foreground hover:no-underline">
                  ¿Cuál es el siguiente paso tras recibir la Auditoría?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 font-body text-secondary-foreground/90">
                  <p className="mb-4">
                    Decidir si deseas implementar internamente las acciones o si prefieres apoyo externo. En ambos casos, se incluyen recomendaciones claras y ordenadas para facilitar la toma de decisiones.
                  </p>
                  <p className="font-semibold mb-2">Enlaces útiles:</p>
                  <ul className="space-y-1">
                    <li>
                      <a href="/posicionamiento-fintech" className="text-secondary-foreground underline hover:opacity-80">
                        Qué incluye el posicionamiento de una Fintech como autoridad de marca
                      </a>
                    </li>
                    <li>
                      <a href="/blog" className="text-secondary-foreground underline hover:opacity-80">
                        Conoce más sobre cómo destacar en Google con tu Fintech
                      </a>
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl mb-6 text-primary">
            Haz Que Tu Fintech Sea La Que Todos Encuentran (Y Eligen).
          </h2>
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
