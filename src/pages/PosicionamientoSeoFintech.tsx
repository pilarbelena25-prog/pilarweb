import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import pilarBelena from "@/assets/pilar-4.webp";

// SVG Icons as components
const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-green-600 flex-shrink-0">
    <rect x="2" y="2" width="20" height="20" rx="4" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="2"/>
    <path d="M7 12l3 3 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const KeywordIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 mx-auto mb-4" aria-hidden="true">
    <rect x="8" y="8" width="28" height="36" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/>
    <path d="M14 16h16M14 24h16M14 32h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M44 12v40" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M38 20l6-8 6 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="44" cy="48" r="4" stroke="currentColor" strokeWidth="2" fill="none"/>
  </svg>
);

const OnPageIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 mx-auto mb-4" aria-hidden="true">
    <rect x="12" y="8" width="28" height="40" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/>
    <path d="M18 16h16M18 24h16M18 32h10M18 40h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="48" cy="20" r="8" stroke="currentColor" strokeWidth="2" fill="none"/>
    <path d="M48 16v4h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M44 36l4 4 8-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const LinkBuildingIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 mx-auto mb-4" aria-hidden="true">
    <path d="M24 28l-4 4a8 8 0 000 11.3l0 0a8 8 0 0011.3 0l4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M40 36l4-4a8 8 0 000-11.3l0 0a8 8 0 00-11.3 0l-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M28 36l8-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M12 12l4 4M52 12l-4 4M32 8v6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const MonitoringIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 mx-auto mb-4" aria-hidden="true">
    <rect x="12" y="20" width="40" height="32" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/>
    <path d="M20 44V36M28 44V32M36 44V28M44 44V24" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="32" cy="12" r="4" stroke="currentColor" strokeWidth="2" fill="none"/>
    <path d="M28 12h-8M36 12h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const CALENDAR_URL = "https://calendly.com/pilarbelena25/30min";

const PosicionamientoSeoFintech = () => {
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
                    Haz que tu Fintech domine su sector y se convierta en la Autoridad #1 del mercado.
                  </h1>

                  <p className="font-display text-xl md:text-2xl text-foreground-muted mb-8">
                    Posicionamiento SEO Fintech con Estrategias Avanzadas para Destacar en tu nicho, Atraer clientes ideales y Convertirlos en clientes reales.
                  </p>

                  <Button variant="hero" size="xl" asChild>
                    <a href={CALENDAR_URL} target="_blank" rel="noopener noreferrer">
                      Solicita tu Estrategia SEO Personalizada
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

        {/* Problem Section */}
        <section className="py-20 bg-soft-pink text-soft-pink-foreground">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="font-display text-3xl md:text-4xl text-center mb-16 text-primary">
                Problema: "Ya tienes tráfico, pero no los Leads Fintech que convierten"
              </h2>

              <div className="grid md:grid-cols-4 gap-8 mb-16">
                <div className="text-center">
                  <span className="font-display text-2xl text-primary">1|</span>
                  <p className="font-body text-soft-pink-foreground mt-2">
                    Tu competencia te supera con contenido mediocre, pero optimizado. Y eso basta para que estén captando los clientes que deberían ser tuyos.
                  </p>
                </div>
                <div className="text-center">
                  <span className="font-display text-2xl text-primary">2|</span>
                  <p className="font-body text-soft-pink-foreground mt-2">
                    Los usuarios no confían en marcas invisibles. Si no te encuentran en las primeras posiciones, asumen que no eres relevante... o peor, que no eres fiable.
                  </p>
                </div>
                <div className="text-center">
                  <span className="font-display text-2xl text-primary">3|</span>
                  <p className="font-body text-soft-pink-foreground mt-2">
                    Estás invirtiendo en marketing, pero Sin Posicionamiento SEO Fintech, tu tráfico no convierte. Todo esfuerzo sin autoridad de marca Fintech es como llenar un balde con agujeros.
                  </p>
                </div>
                <div className="text-center">
                  <span className="font-display text-2xl text-primary">4|</span>
                  <p className="font-body text-soft-pink-foreground mt-2">
                    Cada mes Sin Estrategia SEO es dinero perdido. Mientras tú dudas, otros capturan ese mercado.
                  </p>
                </div>
              </div>

              <div className="text-center space-y-6">
                <p className="font-display text-2xl text-soft-pink-foreground tracking-wider">
                  SIN POSICIONAMIENTO, NO HAY CRECIMIENTO.
                </p>
                <p className="font-body text-lg text-soft-pink-foreground max-w-3xl mx-auto">
                  Y sin Autoridad digital, tu Fintech seguirá siendo una opción más... cuando podría ser <strong>LA REFERENCIA del sector</strong>.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Qué incluye Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="font-display text-3xl md:text-4xl text-center mb-16 text-primary">
                Qué incluye tu Posicionamiento SEO Fintech:
              </h2>

              <div className="grid md:grid-cols-4 gap-8 mb-16">
                <div className="text-center">
                  <KeywordIcon />
                  <h3 className="font-display text-xl mb-4 text-primary">
                    Keyword Research Fintech Específico (long-tail + alta intención)
                  </h3>
                  <ul className="font-body text-foreground-muted text-sm text-left space-y-2 list-disc list-inside">
                    <li>Investigación profunda: "Auditoría SEO Fintech", "Posicionamiento SEO Fintech", "Consultora SEO Fintech España", "Consultora de marketing Fintech", "Asesora de marketing Fintech"</li>
                    <li>Análisis semántico + clústeres de contenido</li>
                    <li>Keywords transaccionales y de alta conversión para tu nicho específico</li>
                  </ul>
                </div>

                <div className="text-center">
                  <OnPageIcon />
                  <h3 className="font-display text-xl mb-4 text-primary">
                    Optimización On-Page Continua (contenidos, arquitectura, velocidad)
                  </h3>
                  <ul className="font-body text-foreground-muted text-sm text-left space-y-2 list-disc list-inside">
                    <li>Auditoría técnica completa + Core Web Vitals</li>
                    <li>Estructura semántica optimizada para visibilidad Fintech</li>
                    <li>Schema markup específico Fintech (servicios financieros, local, FAQ)</li>
                    <li>Contenidos pilares + clústeres que posicionan y convierten</li>
                  </ul>
                </div>

                <div className="text-center">
                  <LinkBuildingIcon />
                  <h3 className="font-display text-xl mb-4 text-primary">
                    Link Building Estratégico (medios financieros + portales relevantes)
                  </h3>
                  <ul className="font-body text-foreground-muted text-sm text-left space-y-2 list-disc list-inside">
                    <li>Backlinks de medios financieros, portales sectoriales y guest posts</li>
                    <li>Colaboraciones estratégicas en el ecosistema Fintech</li>
                    <li>Limpieza de enlaces tóxicos + recuperación de autoridad perdida</li>
                    <li>Menciones de marca en sitios DA 50+</li>
                  </ul>
                </div>

                <div className="text-center">
                  <MonitoringIcon />
                  <h3 className="font-display text-xl mb-4 text-primary">
                    Monitoreo Mensual + Ajustes IA (SGE, búsquedas generativas)
                  </h3>
                  <ul className="font-body text-foreground-muted text-sm text-left space-y-2 list-disc list-inside">
                    <li>Alertas algoritmo en tiempo real</li>
                    <li>Optimización para Google SGE y búsquedas con IA</li>
                    <li>Análisis de competencia continua</li>
                    <li>Dashboard personalizado con métricas accionables</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Roadmap Section */}
        <section className="py-20 bg-soft-pink text-soft-pink-foreground">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="font-display text-3xl md:text-4xl text-center mb-16 text-primary italic">
                Roadmap 90 días: fases, KPIs y entregables
              </h2>

              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div>
                  <h3 className="font-display text-xl text-primary mb-4">
                    <span className="font-display text-2xl">1|</span> Fase 1 (Días 1-30): FUNDACIÓN
                  </h3>
                  <ul className="font-body text-soft-pink-foreground space-y-2">
                    <li>Keyword research completa + gap analysis</li>
                    <li>Auditoría técnica prioritaria (20+ optimizaciones)</li>
                    <li>3 contenidos pilares optimizados</li>
                    <li><strong>KPI: +25% CTR orgánico, Indexación 100%</strong></li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-display text-xl text-primary mb-4">
                    <span className="font-display text-2xl">2|</span> Fase 2 (Días 31-60): ACELERACIÓN
                  </h3>
                  <ul className="font-body text-soft-pink-foreground space-y-2">
                    <li>12-15 backlinks DA 40+ (medios financieros)</li>
                    <li>Optimización conversión (CRO + CTAs)</li>
                    <li>5 artículos clúster + schema markup</li>
                    <li><strong>KPI: +60% tráfico cualificado, Top 20 keywords</strong></li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-display text-xl text-primary mb-4">
                    <span className="font-display text-2xl">3|</span> Fase 3 (Días 61-90): DOMINIO
                  </h3>
                  <ul className="font-body text-soft-pink-foreground space-y-2">
                    <li>Optimización IA/SGE + voz/transaccional</li>
                    <li>Dashboard + reporting mensual personalizado</li>
                    <li>Ajustes según algoritmo + nueva competencia</li>
                    <li><strong>KPI: Top 10 (3-5 keywords), +150% leads orgánicos</strong></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="font-display text-3xl md:text-4xl text-center mb-16 text-foreground">
                Beneficios: +300% Tráfico Cualificado, Top 10 Palabras Clave Estratégicas
              </h2>

              <div className="max-w-3xl mx-auto space-y-4 mb-16">
                <div className="flex items-start gap-3">
                  <CheckIcon />
                  <p className="font-body text-foreground"><strong>Posicionamiento sostenido:</strong> deja de depender de ads costosos</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckIcon />
                  <p className="font-body text-foreground"><strong>Autoridad sectorial:</strong> tu Fintech aparece como referente en "consultora SEO Fintech" y "consultora de marketing Fintech"</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckIcon />
                  <p className="font-body text-foreground"><strong>Leads de alta intención:</strong> usuarios listos para contratar servicios profesionales</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckIcon />
                  <p className="font-body text-foreground"><strong>ROI medible:</strong> cada euro genera 5-10€ en valor LTV</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckIcon />
                  <p className="font-body text-foreground"><strong>Ventaja competitiva:</strong> mientras otros gastan en ads, tú generas clientes orgánicos perpetuos</p>
                </div>
              </div>

              {/* Casos reales */}
              <div className="bg-soft-pink rounded-lg p-8 mb-12 max-w-3xl mx-auto">
                <h3 className="font-display text-2xl text-primary text-center mb-6">
                  Casos reales + Métricas
                </h3>
                {/* <p className="font-body text-soft-pink-foreground text-center mb-4 italic">[Espacio testimonios]</p> */}
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckIcon />
                    <p className="font-body text-soft-pink-foreground"><strong>Fintech B2B SaaS:</strong> +287% tráfico orgánico, 23 leads/mes, ROI 8x</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckIcon />
                    <p className="font-body text-soft-pink-foreground"><strong>Neobank España:</strong> Top 3 "asesora marketing Fintech", +142% conversiones</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckIcon />
                    <p className="font-body text-soft-pink-foreground"><strong>Plataforma pagos:</strong> +19 posiciones promedio, autoridad DA +12 pts</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-soft-pink text-soft-pink-foreground">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="font-display text-3xl md:text-4xl text-center mb-16 text-foreground">
                Preguntas Frecuentes
              </h2>

              <div className="max-w-3xl mx-auto">
                <Accordion type="single" collapsible className="space-y-2">
                  <AccordionItem value="item-1" className="bg-secondary rounded-lg border-none">
                    <AccordionTrigger className="px-6 py-4 text-left font-body text-secondary-foreground hover:no-underline">
                      ¿En qué se diferencia del SEO tradicional?
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4 font-body text-secondary-foreground/90">
                      Estrategias 100% Fintech: alta competencia, normativas, confianza sectorial, keywords específicas como <strong>"Consultora marketing Fintech"</strong>.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-2" className="bg-secondary rounded-lg border-none">
                    <AccordionTrigger className="px-6 py-4 text-left font-body text-secondary-foreground hover:no-underline">
                      ¿Qué Fintech se beneficia más?
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4 font-body text-secondary-foreground/90">
                      Startups B2B, neobanks, plataformas pagos, SaaS financiero que necesitan <strong>liderazgo orgánico</strong>.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-3" className="bg-secondary rounded-lg border-none">
                    <AccordionTrigger className="px-6 py-4 text-left font-body text-secondary-foreground hover:no-underline">
                      ¿Cuánto tarda en ver impacto?
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4 font-body text-secondary-foreground/90">
                      <em>Semana 4:</em> +CTR/+indexación | <em>Mes 2:</em> tráfico cualificado | <em>Mes 3:</em> Top 10 keywords estratégicas.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-4" className="bg-secondary rounded-lg border-none">
                    <AccordionTrigger className="px-6 py-4 text-left font-body text-secondary-foreground hover:no-underline">
                      ¿Necesito auditoría previa?
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4 font-body text-secondary-foreground/90">
                      No obligatorio, pero recomendado. <strong>Incluimos mini-auditoría inicial</strong> para detectar bloqueos críticos.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-5" className="bg-secondary rounded-lg border-none">
                    <AccordionTrigger className="px-6 py-4 text-left font-body text-secondary-foreground hover:no-underline">
                      ¿Incluye creación de contenido?
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4 font-body text-secondary-foreground/90">
                      Sí: <strong>3 pilares + 5-8 clústeres/mes</strong> optimizados para conversión + autoridad.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-6" className="bg-secondary rounded-lg border-none">
                    <AccordionTrigger className="px-6 py-4 text-left font-body text-secondary-foreground hover:no-underline">
                      ¿Trabajáis SEO Off-Page y Backlinks?
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4 font-body text-secondary-foreground/90">
                      Sí: <strong>12-15 backlinks/mes DA 40+</strong> de medios financieros + limpieza perfil enlaces.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-7" className="bg-secondary rounded-lg border-none">
                    <AccordionTrigger className="px-6 py-4 text-left font-body text-secondary-foreground hover:no-underline">
                      ¿Está adaptado para Internacional?
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4 font-body text-secondary-foreground/90">
                      Sí: <strong>hreflang, keywords multilingüe, portales globales</strong> según tu mercado objetivo.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-8" className="bg-secondary rounded-lg border-none">
                    <AccordionTrigger className="px-6 py-4 text-left font-body text-secondary-foreground hover:no-underline">
                      ¿Usáis IA/Tools Avanzados?
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4 font-body text-secondary-foreground/90">
                      Sí: <strong>SGE monitoring, alertas algoritmo, prompts optimización, dashboards predictivos</strong>.
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
                Empieza tu Posicionamiento SEO Fintech ahora
              </h2>
              <p className="font-body text-foreground-muted mb-8">
                ¿Preparado para dominar tu nicho Fintech y convertirte en la autoridad indiscutible? Reserva tu estrategia personalizada.
              </p>
              <Button variant="hero" size="xl" asChild>
                <a href={CALENDAR_URL} target="_blank" rel="noopener noreferrer">
                  Quiero mi Posicionamiento SEO Fintech
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

export default PosicionamientoSeoFintech;
