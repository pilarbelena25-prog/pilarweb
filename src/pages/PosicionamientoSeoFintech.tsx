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
const StrategyIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 mx-auto mb-4">
    <rect x="8" y="8" width="28" height="36" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/>
    <path d="M14 16h16M14 24h16M14 32h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M44 12v40" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M38 20l6-8 6 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="44" cy="48" r="4" stroke="currentColor" strokeWidth="2" fill="none"/>
  </svg>
);

const ContentIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 mx-auto mb-4">
    <rect x="12" y="8" width="28" height="40" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/>
    <path d="M18 16h16M18 24h16M18 32h10M18 40h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="48" cy="20" r="8" stroke="currentColor" strokeWidth="2" fill="none"/>
    <path d="M48 16v4h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M44 36l4 4 8-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const AuthorityBuildIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 mx-auto mb-4">
    <path d="M24 28l-4 4a8 8 0 000 11.3l0 0a8 8 0 0011.3 0l4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M40 36l4-4a8 8 0 000-11.3l0 0a8 8 0 00-11.3 0l-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M28 36l8-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M12 12l4 4M52 12l-4 4M32 8v6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const TrafficIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 mx-auto mb-4">
    <rect x="12" y="20" width="40" height="32" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/>
    <path d="M20 44V36M28 44V32M36 44V28M44 44V24" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="32" cy="12" r="4" stroke="currentColor" strokeWidth="2" fill="none"/>
    <path d="M28 12h-8M36 12h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const DiamondIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 mx-auto mb-4">
    <circle cx="32" cy="32" r="20" stroke="currentColor" strokeWidth="2" fill="none"/>
    <circle cx="32" cy="32" r="8" stroke="currentColor" strokeWidth="2" fill="none"/>
    <circle cx="32" cy="32" r="3" fill="currentColor"/>
    <path d="M32 12v8M32 44v8M12 32h8M44 32h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const ShieldIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 mx-auto mb-4">
    <path d="M32 8L12 18v16c0 12 8 20 20 24 12-4 20-12 20-24V18L32 8z" stroke="currentColor" strokeWidth="2" fill="none"/>
    <path d="M24 32l5 5 11-11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const GearPersonIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 mx-auto mb-4">
    <circle cx="28" cy="20" r="8" stroke="currentColor" strokeWidth="2" fill="none"/>
    <path d="M12 48c0-8 7-14 16-14s16 6 16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="48" cy="36" r="8" stroke="currentColor" strokeWidth="2" fill="none"/>
    <path d="M48 32v8M44 36h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const ChartIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 mx-auto mb-4">
    <rect x="8" y="12" width="32" height="24" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/>
    <path d="M14 28l6-6 6 4 8-10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <rect x="28" y="32" width="28" height="20" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/>
    <path d="M34 40h8M34 46h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
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
                    Haz Que Tu Fintech Domine Su Sector Y Se Convierta En La Autoridad Nº1 Del Mercado
                  </h1>

                  <h2 className="font-display text-xl md:text-2xl text-foreground-muted mb-8">
                    Posicionamiento SEO Fintech con Estrategias Avanzadas para destacar en tu nicho, atraer clientes ideales y convertirlos en clientes reales.
                  </h2>

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

        {/* Posicionamiento SEO Fintech Clave Section */}
        <section className="py-20 bg-soft-pink text-soft-pink-foreground">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="font-display text-3xl md:text-4xl text-center mb-6 text-primary">
                Posicionamiento Seo Fintech Clave
              </h2>

              <p className="font-body text-center text-soft-pink-foreground mb-16 max-w-3xl mx-auto">
                Introduce la importancia de adaptar el SEO a las particularidades del sector financiero: entornos regulados, alta competencia, seguridad y confianza.
              </p>

              <div className="grid md:grid-cols-4 gap-8 mb-16">
                <div className="text-center">
                  <span className="font-display text-2xl text-primary">1|</span>
                  <p className="font-body text-soft-pink-foreground mt-2">
                    Tu competencia te supera con contenido mediocre, pero optimizado. Y eso basta para que estén captando a los clientes que deberían ser tuyos.
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
                    Estás invirtiendo en marketing, pero sin posicionamiento, tu tráfico no convierte. Todo esfuerzo sin autoridad es como llenar un balde con agujeros.
                  </p>
                </div>
                <div className="text-center">
                  <span className="font-display text-2xl text-primary">4|</span>
                  <p className="font-body text-soft-pink-foreground mt-2">
                    Cada mes sin estrategia SEO, es dinero perdido. Porque mientras tú dudas, otros están capturando ese mercado.
                  </p>
                </div>
              </div>

              <div className="text-center space-y-6">
                <p className="font-display text-2xl text-soft-pink-foreground tracking-wider">
                  SIN POSICIONAMIENTO, NO HAY CRECIMIENTO.
                </p>
                <p className="font-body text-lg text-soft-pink-foreground max-w-3xl mx-auto">
                  Y sin Autoridad digital, tu Fintech seguirá siendo una opción más... cuando podría ser <em>la referencia del sector</em>.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Posicionamiento Como Autoridad Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="font-display text-3xl md:text-4xl text-center mb-4 text-primary">
                Posicionamiento Como Autoridad
              </h2>
              <p className="font-body text-center text-foreground-muted mb-16">
                Posicionamiento SEO Fintech: Credibilidad, Reputación Y Resultados Reales.
              </p>

              <div className="grid md:grid-cols-4 gap-8 mb-16">
                <div className="text-center">
                  <StrategyIcon />
                  <h3 className="font-display text-xl mb-4 text-primary">
                    Estrategia 100% Adaptada Al Sector Fintech
                  </h3>
                  <p className="font-body text-foreground-muted text-sm">
                    Nada de recetas genéricas. Analizo tu mercado, tus competidores y tu posicionamiento actual para diseñar una hoja de ruta SEO que se alinee con tus objetivos comerciales.
                  </p>
                </div>

                <div className="text-center">
                  <ContentIcon />
                  <h3 className="font-display text-xl mb-4 text-primary">
                    Contenido Optimizado Y Pensado Para Atraer Clientes Reales
                  </h3>
                  <p className="font-body text-foreground-muted text-sm">
                    Creamos y optimizamos contenido con intención estratégica: artículos, guías, casos de uso y recursos que no solo posicionan... sino que construyen autoridad y confianza en tu marca.
                  </p>
                </div>

                <div className="text-center">
                  <AuthorityBuildIcon />
                  <h3 className="font-display text-xl mb-4 text-primary">
                    Autoridad Digital Con Link Building Inteligente
                  </h3>
                  <p className="font-body text-foreground-muted text-sm">
                    Trabajamos tu reputación digital con enlaces desde medios relevantes, menciones estratégicas y colaboraciones en el ecosistema Fintech. Esto no solo mejora tu SEO, sino tu imagen global.
                  </p>
                </div>

                <div className="text-center">
                  <TrafficIcon />
                  <h3 className="font-display text-xl mb-4 text-primary">
                    Tráfico Cualificado Que Convierte
                  </h3>
                  <p className="font-body text-foreground-muted text-sm">
                    No buscamos visitas vacías. Aplicamos técnicas de SEO avanzado, optimización para voz, búsquedas transaccionales y embudos orientados a conversión para atraer usuarios con alta intención de acción.
                  </p>
                </div>
              </div>

              <div className="text-center border-t border-border pt-12">
                <p className="font-display text-xl text-primary mb-4">
                  EL RESULTADO
                </p>
                <p className="font-body text-foreground text-lg mb-8 max-w-3xl mx-auto">
                  Un Posicionamiento SEO Fintech sólido que transforma tu Startup en un <strong>IMÁN DE CLIENTES, INVERSORES y ALIADOS.</strong>
                </p>
                <Button variant="hero" size="lg" asChild>
                  <a href={CALENDAR_URL} target="_blank" rel="noopener noreferrer">
                    Quiero Convertirme en Referente
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Mi Proceso SEO Section */}
        <section className="py-20 bg-soft-pink text-soft-pink-foreground">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="font-display text-3xl md:text-4xl text-center mb-16 text-primary italic">
                Mi Proceso SEO Para Fintechs Que Lideran
              </h2>

              <div className="grid md:grid-cols-4 gap-8 mb-12">
                <div className="text-center">
                  <span className="font-display text-2xl text-primary">1|</span>
                  <h3 className="font-display text-xl text-primary mb-2">Auditoría Inicial Profunda</h3>
                </div>
                <div className="text-center">
                  <span className="font-display text-2xl text-primary">2|</span>
                  <h3 className="font-display text-xl text-primary mb-2">Diseño Estratégico Personalizado</h3>
                </div>
                <div className="text-center">
                  <span className="font-display text-2xl text-primary">3|</span>
                  <h3 className="font-display text-xl text-primary mb-2">Aplicación De IA Y Ajustes Continuos</h3>
                </div>
                <div className="text-center">
                  <span className="font-display text-2xl text-primary">4|</span>
                  <h3 className="font-display text-xl text-primary mb-2">Generación De Contenido + Link Building</h3>
                </div>
              </div>

              <div className="text-center mb-16">
                <span className="font-display text-2xl text-primary">5|</span>
                <h3 className="font-display text-xl text-primary mb-2">Optimización Para Conversión Real</h3>
              </div>

              <div className="text-center">
                <p className="font-body text-soft-pink-foreground text-lg italic">
                  Todo diseñado para que Google te AME y tu cliente CONFÍE.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ¿Por Qué Pilar Beleña? Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="font-display text-3xl md:text-4xl text-center mb-16 text-foreground">
                ¿Por Qué Pilar Beleña?
              </h2>

              <div className="grid md:grid-cols-4 gap-8 mb-12">
                <div className="text-center">
                  <DiamondIcon />
                  <h3 className="font-display text-xl mb-2 text-primary">
                    Enfoque Exclusivo En Fintech
                  </h3>
                </div>
                <div className="text-center">
                  <ShieldIcon />
                  <h3 className="font-display text-xl mb-2 text-primary">
                    SEO Basado En Autoridad, No En Palabras Vacías
                  </h3>
                </div>
                <div className="text-center">
                  <GearPersonIcon />
                  <h3 className="font-display text-xl mb-2 text-primary">
                    Estrategias Personalizadas (Nada Genérico)
                  </h3>
                </div>
                <div className="text-center">
                  <ChartIcon />
                  <h3 className="font-display text-xl mb-2 text-primary">
                    Resultados Medibles Con Datos Concretos
                  </h3>
                </div>
              </div>

              <div className="text-center space-y-6">
                <p className="font-body text-foreground-muted text-lg italic">
                  No hago <strong>SEO</strong> por hacer. Hago <strong>SEO</strong> que vende.
                </p>
                <p className="font-body text-foreground text-lg">
                  ¿Listo para dejar de ser invisible y liderar tu mercado Fintech?
                </p>
                <Button variant="hero" size="lg" asChild>
                  <a href={CALENDAR_URL} target="_blank" rel="noopener noreferrer">
                    Reserva una Consultoría Gratuita
                  </a>
                </Button>
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
                      ¿En qué se diferencia este servicio de un SEO tradicional?
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4 font-body text-secondary-foreground/90">
                      El SEO tradicional se enfoca en posicionarte. El SEO Fintech basado en autoridad no solo te posiciona, sino que <strong>construye credibilidad, confianza y reputación</strong> en un sector altamente competitivo y regulado.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-2" className="bg-secondary rounded-lg border-none">
                    <AccordionTrigger className="px-6 py-4 text-left font-body text-secondary-foreground hover:no-underline">
                      ¿Qué tipo de Fintechs pueden beneficiarse de este servicio?
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4 font-body text-secondary-foreground/90">
                      Startups financieras, plataformas de pagos, Insurtechs, neobancos, criptonegocios, y cualquier empresa tecnológica del sector financiero que quiera <strong>escalar su visibilidad y convertirse en referente</strong>.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-3" className="bg-secondary rounded-lg border-none">
                    <AccordionTrigger className="px-6 py-4 text-left font-body text-secondary-foreground hover:no-underline">
                      ¿Cuánto tiempo tarda en verse el impacto del posicionamiento?
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4 font-body text-secondary-foreground/90">
                      Dependiendo del estado actual de tu web y la competencia, los primeros resultados comienzan a verse en <em>3 a 6 meses</em>. Pero el verdadero poder está en el crecimiento sostenido a largo plazo.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-4" className="bg-secondary rounded-lg border-none">
                    <AccordionTrigger className="px-6 py-4 text-left font-body text-secondary-foreground hover:no-underline">
                      ¿Puedo hacer este posicionamiento sin haber hecho antes una auditoría SEO?
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4 font-body text-secondary-foreground/90">
                      No lo recomiendo. La <strong>auditoría es el punto de partida esencial</strong>. Nos permite detectar bloqueos, errores críticos y definir una estrategia sólida desde la base.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-5" className="bg-secondary rounded-lg border-none">
                    <AccordionTrigger className="px-6 py-4 text-left font-body text-secondary-foreground hover:no-underline">
                      ¿Este servicio incluye creación de contenido?
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4 font-body text-secondary-foreground/90">
                      Sí. Incluye la <strong>creación y optimización de contenido especializado</strong>: artículos, guías, blogposts, recursos educativos y más, enfocados en captar tráfico cualificado y fortalecer tu autoridad.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-6" className="bg-secondary rounded-lg border-none">
                    <AccordionTrigger className="px-6 py-4 text-left font-body text-secondary-foreground hover:no-underline">
                      ¿También se trabaja el SEO off-page y backlinks?
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4 font-body text-secondary-foreground/90">
                      Absolutamente. Diseñamos una estrategia de <strong>link building ético y eficaz</strong>, consiguiendo menciones y enlaces de alto valor en medios relevantes del ecosistema Fintech.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-7" className="bg-secondary rounded-lg border-none">
                    <AccordionTrigger className="px-6 py-4 text-left font-body text-secondary-foreground hover:no-underline">
                      ¿El servicio está adaptado para SEO internacional?
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4 font-body text-secondary-foreground/90">
                      Sí. Trabajo tanto con empresas que quieren posicionarse en España como en mercados hispanohablantes e internacionales. <strong>Adaptamos idioma, intención y enfoque según el público objetivo</strong>.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-8" className="bg-secondary rounded-lg border-none">
                    <AccordionTrigger className="px-6 py-4 text-left font-body text-secondary-foreground hover:no-underline">
                      ¿Usas herramientas avanzadas e IA en el proceso?
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4 font-body text-secondary-foreground/90">
                      Sí. Utilizo herramientas como SEMrush, Ahrefs, Screaming Frog y tecnologías como <strong>ChatGPT y Gemini Advanced</strong> para análisis predictivo, generación de contenido y optimización dinámica.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-9" className="bg-secondary rounded-lg border-none">
                    <AccordionTrigger className="px-6 py-4 text-left font-body text-secondary-foreground hover:no-underline">
                      ¿Qué pasa si no tengo equipo técnico para implementar los cambios?
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4 font-body text-secondary-foreground/90">
                      ¡Sin problema! También ofrezco un servicio de <strong>implementación y acompañamiento</strong>, donde puedo coordinar con tu equipo o ejecutarlo directamente contigo.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-10" className="bg-secondary rounded-lg border-none">
                    <AccordionTrigger className="px-6 py-4 text-left font-body text-secondary-foreground hover:no-underline">
                      ¿Cómo empiezo el proceso?
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4 font-body text-secondary-foreground/90">
                      Fácil. Solo tienes que <strong>reservar tu consultoría gratuita</strong> y te guiaré paso a paso. Tendrás una propuesta clara, personalizada y orientada a resultados.
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
                Solicita tu Estrategia de Posicionamiento SEO Fintech ahora.
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
