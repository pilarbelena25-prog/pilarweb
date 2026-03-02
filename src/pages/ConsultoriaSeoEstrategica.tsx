import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import pilarBelena from "@/assets/pilar-3.webp";

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-green-600 flex-shrink-0">
    <rect x="2" y="2" width="20" height="20" rx="4" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="2"/>
    <path d="M7 12l3 3 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const CALENDAR_URL = "https://calendly.com/pilarbelena25/30min";

const ConsultoriaSeoEstrategica = () => {
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
                    Transforma tu visión en liderazgo digital real para empresas Fintech listas para dominar su mercado.
                  </h1>

                  <h2 className="font-display text-xl md:text-2xl text-foreground-muted mb-8">
                    Para quién: Startups y Scale-ups Fintech que necesitan Estrategia Global (no sólo ejecución)
                  </h2>

                  <Button variant="hero" size="xl" asChild>
                    <a href={CALENDAR_URL} target="_blank" rel="noopener noreferrer">
                      Agenda tu Estrategia SEO Fintech
                    </a>
                  </Button>
                </div>

                <div className="flex justify-center">
                  <img
                    src={pilarBelena}
                    alt="Pilar Beleña - Consultoría SEO Estratégica Fintech"
                    className="max-w-md w-full rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pain Points Section */}
        <section className="py-20 bg-soft-pink text-soft-pink-foreground">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <p className="font-body text-lg text-soft-pink-foreground">
                Si tienes tráfico pero no negocio real...
              </p>
              <p className="font-body text-lg text-soft-pink-foreground">
                ¿Aplicas tácticas sueltas sin estrategia clara?
              </p>
              <p className="font-body text-lg text-soft-pink-foreground">
                ¿El mercado Fintech es cada vez más competitivo?
              </p>
              <p className="font-body text-lg text-soft-pink-foreground">
                ¿No sabes si tus esfuerzos generan ROI?
              </p>
              <p className="font-body text-lg text-soft-pink-foreground font-bold mt-8">
                Esta Consultoría es para ti.
              </p>
            </div>
          </div>
        </section>

        {/* Qué incluye Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-display text-3xl md:text-4xl text-center mb-16 text-primary">
                Qué incluye
              </h2>

              <div className="space-y-8 mb-16">
                <div className="flex items-start gap-4">
                  <span className="font-display text-2xl text-primary flex-shrink-0 w-8">1</span>
                  <div>
                    <h3 className="font-display text-xl text-primary mb-2">
                      Keyword research profunda + análisis semántico Fintech
                    </h3>
                    <p className="font-body text-foreground-muted">
                      Investigación avanzada: "consultora SEO Fintech España", "visibilidad Fintech", "autoridad marca Fintech" + keywords emergentes IA
                    </p>
                    <p className="font-body text-foreground-muted">
                      Clústeres semánticos + oportunidades ocultas del sector
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="font-display text-2xl text-primary flex-shrink-0 w-8">2</span>
                  <div>
                    <h3 className="font-display text-xl text-primary mb-2">
                      Auditoría completa (técnica + contenido + competencia)
                    </h3>
                    <p className="font-body text-foreground-muted">
                      Diagnóstico 360° de tu embudo digital (atraer, nutrir, convertir)
                    </p>
                    <p className="font-body text-foreground-muted">
                      Análisis predictivo IA de brechas competitivas
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="font-display text-2xl text-primary flex-shrink-0 w-8">3</span>
                  <div>
                    <h3 className="font-display text-xl text-primary mb-2">
                      Hoja de ruta SEO 6-12 meses con prioridades y KPIs
                    </h3>
                    <p className="font-body text-foreground-muted">
                      Roadmap estratégico personalizado con visión a largo plazo
                    </p>
                    <p className="font-body text-foreground-muted">
                      Priorización por impacto ROI + medición transparente
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="font-display text-2xl text-primary flex-shrink-0 w-8">4</span>
                  <div>
                    <h3 className="font-display text-xl text-primary mb-2">
                      Planes de contenido optimizado (blog, landing pages)
                    </h3>
                    <p className="font-body text-foreground-muted">
                      Contenido de autoridad para posicionarte como referente sectorial
                    </p>
                    <p className="font-body text-foreground-muted">
                      Estructura pillar-cluster optimizada para SGE e IA generativa
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="font-display text-2xl text-primary flex-shrink-0 w-8">5</span>
                  <div>
                    <h3 className="font-display text-xl text-primary mb-2">
                      Estrategia link building institucional (medios + partners)
                    </h3>
                    <p className="font-body text-foreground-muted">
                      Colaboraciones estratégicas ecosistema Fintech
                    </p>
                    <p className="font-body text-foreground-muted">
                      Menciones de marca + backlinks DA 50+ desde medios financieros
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="font-display text-2xl text-primary flex-shrink-0 w-8">6</span>
                  <div>
                    <h3 className="font-display text-xl text-primary mb-2">
                      Reporting mensual + ajustes según algoritmo/Google IA
                    </h3>
                    <p className="font-body text-foreground-muted">
                      Dashboard ejecutivo con métricas accionables
                    </p>
                    <p className="font-body text-foreground-muted">
                      Alertas proactivas algoritmo + optimización continua
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="font-display text-2xl text-primary flex-shrink-0 w-8">7</span>
                  <div>
                    <h3 className="font-display text-xl text-primary mb-2">
                      Soporte estratégico directo (llamadas, Slack)
                    </h3>
                    <p className="font-body text-foreground-muted">
                      Acceso directo a Pilar para CEOs y equipos directivos
                    </p>
                    <p className="font-body text-foreground-muted">
                      Sesiones estratégicas personalizadas + acompañamiento experto
                    </p>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <Button variant="hero" size="lg" asChild>
                  <a href={CALENDAR_URL} target="_blank" rel="noopener noreferrer">
                    Agenda tu Estrategia SEO Fintech
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Modalidades Section */}
        <section className="py-20 bg-soft-pink text-soft-pink-foreground">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="font-display text-3xl md:text-4xl text-center mb-16 text-foreground">
                Modalidades
              </h2>

              <div className="grid md:grid-cols-3 gap-8 mb-16">
                <div className="bg-secondary rounded-lg p-6 space-y-3">
                  <h3 className="font-display text-xl text-secondary-foreground text-center mb-4">
                    PLAN STARTUP
                    <span className="block font-body text-sm font-normal mt-1 text-secondary-foreground/70">Mensual</span>
                  </h3>
                  <div className="space-y-2 font-body text-secondary-foreground/90 text-sm">
                    <p><strong>Ideal para:</strong> primeras validaciones + crecimiento inicial</p>
                    <p>12h/mes estrategia + soporte</p>
                    <p>Roadmap 6 meses + 2 contenidos/mes</p>
                    <p>2 informes trimestrales</p>
                  </div>
                </div>

                <div className="bg-secondary rounded-lg p-6 space-y-3">
                  <h3 className="font-display text-xl text-secondary-foreground text-center mb-4">
                    PLAN SCALE-UP
                    <span className="block font-body text-sm font-normal mt-1 text-secondary-foreground/70">Anticipación 6 meses</span>
                  </h3>
                  <div className="space-y-2 font-body text-secondary-foreground/90 text-sm">
                    <p><strong>Ideal para:</strong> expansión agresiva + liderazgo sectorial</p>
                    <p>20h/mes + equipo dedicado</p>
                    <p>Roadmap 12 meses + 5 contenidos/mes</p>
                    <p>Link building institucional + CRO</p>
                    <p>Report mensual ejecutivo</p>
                  </div>
                </div>

                <div className="bg-secondary rounded-lg p-6 space-y-3">
                  <h3 className="font-display text-xl text-secondary-foreground text-center mb-4">
                    PLAN ENTERPRISE
                    <span className="block font-body text-sm font-normal mt-1 text-secondary-foreground/70">Personalizado</span>
                  </h3>
                  <div className="space-y-2 font-body text-secondary-foreground/90 text-sm">
                    <p><strong>Ideal para:</strong> Multinacionales Fintech + IPO</p>
                    <p>Soporte ejecutivo 1:1 ilimitado</p>
                    <p>IA predictiva completa + partnerships globales</p>
                    <p>KPIs personalizados + board reporting</p>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <Button variant="hero" size="lg" asChild>
                  <a href={CALENDAR_URL} target="_blank" rel="noopener noreferrer">
                    Agenda tu Estrategia SEO Fintech
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Beneficios Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-display text-3xl md:text-4xl text-center mb-4 text-primary">
                Beneficios
              </h2>
              <p className="font-body text-center text-foreground-muted mb-12">
                Posición de Liderazgo Sectorial, +200% Visibilidad Orgánica y Autoridad Medible
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckIcon />
                  <p className="font-body text-foreground">
                    <strong>Liderazgo indiscutible:</strong> tu Fintech como referencia en "consultora SEO Fintech"
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckIcon />
                  <p className="font-body text-foreground">
                    <strong>Rentabilidad real:</strong> foco en ROI, no solo tráfico
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckIcon />
                  <p className="font-body text-foreground">
                    <strong>Ventaja competitiva:</strong> experiencia Fintech + IA = diferenciación inmediata
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckIcon />
                  <p className="font-body text-foreground">
                    <strong>Escalabilidad:</strong> embudo digital optimizado para crecimiento exponencial
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckIcon />
                  <p className="font-body text-foreground">
                    <strong>Confianza:</strong> acceso directo + resultados medibles mes a mes
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-soft-pink text-soft-pink-foreground">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto text-center">
              <h2 className="font-display text-3xl md:text-4xl mb-6 text-foreground">
                Agenda tu Estrategia SEO Fintech
              </h2>
              <p className="font-body text-soft-pink-foreground text-lg mb-8">
                ¿Listo para llevar tu Estrategia SEO al siguiente nivel? Reserva tu sesión estratégica gratuita.
              </p>
              <Button variant="hero" size="xl" asChild>
                <a href={CALENDAR_URL} target="_blank" rel="noopener noreferrer">
                  Agenda tu Estrategia SEO Fintech
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="font-display text-3xl md:text-4xl text-center mb-16 text-primary">
                Preguntas Frecuentes
              </h2>

              <div className="max-w-3xl mx-auto">
                <Accordion type="single" collapsible className="space-y-2">
                  <AccordionItem value="item-1" className="bg-secondary rounded-lg border-none">
                    <AccordionTrigger className="px-6 py-4 text-left font-body text-secondary-foreground hover:no-underline">
                      ¿En qué se diferencia esta Consultoría de una Auditoría o Posicionamiento?
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4 font-body text-secondary-foreground/90">
                      Auditoría = Diagnóstico puntual | Posicionamiento = Ejecución táctica | <strong>Consultoría = Estrategia global 6-12 meses + visión CEO</strong>.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-2" className="bg-secondary rounded-lg border-none">
                    <AccordionTrigger className="px-6 py-4 text-left font-body text-secondary-foreground hover:no-underline">
                      ¿Qué tipo de Fintechs son ideales para este servicio?
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4 font-body text-secondary-foreground/90">
                      Startups B2B SaaS, Neobanks en crecimiento, Plataformas pagos Scale-up, Fintechs preparándose para rondas de inversión, etc.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-3" className="bg-secondary rounded-lg border-none">
                    <AccordionTrigger className="px-6 py-4 text-left font-body text-secondary-foreground hover:no-underline">
                      ¿Necesito conocimientos técnicos de SEO/IA para aprovecharla?
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4 font-body text-secondary-foreground/90">
                      No. Traduzco complejidad técnica en <strong>acciones estratégicas claras</strong> para CEOs y Equipos de marketing/Directivos.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-4" className="bg-secondary rounded-lg border-none">
                    <AccordionTrigger className="px-6 py-4 text-left font-body text-secondary-foreground hover:no-underline">
                      ¿Incluye Implementación o solo Estrategia?
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4 font-body text-secondary-foreground/90">
                      <strong>Estrategia ejecutable 100% + Acompañamiento en implementación crítica.</strong> Tú decides la profundidad de ejecución.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-5" className="bg-secondary rounded-lg border-none">
                    <AccordionTrigger className="px-6 py-4 text-left font-body text-secondary-foreground hover:no-underline">
                      ¿Cuánto dura el Proceso y cómo se estructura?
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4 font-body text-secondary-foreground/90">
                      6-12 meses según plan. Fases: <strong>Diagnóstico → Roadmap → Implementación → Optimización continua</strong> + reporte mensual.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-6" className="bg-secondary rounded-lg border-none">
                    <AccordionTrigger className="px-6 py-4 text-left font-body text-secondary-foreground hover:no-underline">
                      ¿Trabajas con tu Equipo Completo o solo contigo (CEO)?
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4 font-body text-secondary-foreground/90">
                      Ambos. Sesiones ejecutivas 1:1 + workshops equipo + canal Slack directo para dudas operativas.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-7" className="bg-secondary rounded-lg border-none">
                    <AccordionTrigger className="px-6 py-4 text-left font-body text-secondary-foreground hover:no-underline">
                      ¿Cómo integramos IA en la Estrategia SEO Fintech?
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4 font-body text-secondary-foreground/90">
                      Análisis predictivo keywords, optimización SGE, prompts contenido autoridad, alertas algoritmo proactivas.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-8" className="bg-secondary rounded-lg border-none">
                    <AccordionTrigger className="px-6 py-4 text-left font-body text-secondary-foreground hover:no-underline">
                      ¿Qué resultados puedo esperar en los primeros 90 días?
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4 font-body text-secondary-foreground/90">
                      Roadmap completo, <strong>+30% visibilidad orgánica inicial</strong>, 3-5 keywords Top 20, dashboard ejecutivo funcionando.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
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
