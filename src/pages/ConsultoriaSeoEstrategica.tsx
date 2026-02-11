import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import pilarBelena from "@/assets/pilar-3.png";

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
                    Transforma Tu Visión En Un Liderazgo Digital Real
                  </h1>

                  <h2 className="font-display text-xl md:text-2xl text-foreground-muted mb-8">
                    Consultoría SEO Estratégica Para Empresas Fintech Que Ya Entienden El Poder Del Posicionamiento... Y Están Listas Para Dominar Su Mercado.
                  </h2>

                  <Button variant="hero" size="xl" asChild>
                    <a href={CALENDAR_URL} target="_blank" rel="noopener noreferrer">
                      Agenda tu Sesión Estratégica Gratuita
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
                Si estás aquí, ya sabes que el SEO importa... pero también sabes que no es suficiente.
              </p>
              <p className="font-body text-lg text-soft-pink-foreground">
                ¿Tienes tráfico, pero no se traduce en negocio real?
              </p>
              <p className="font-body text-lg text-soft-pink-foreground">
                ¿Estás aplicando tácticas sueltas sin una estrategia clara?
              </p>
              <p className="font-body text-lg text-soft-pink-foreground">
                ¿El mercado Fintech se vuelve más competitivo cada mes?
              </p>
              <p className="font-body text-lg text-soft-pink-foreground">
                ¿No sabes si tus esfuerzos actuales están generando ROI?
              </p>
              <p className="font-body text-lg text-soft-pink-foreground font-bold mt-8">
                Lo que necesitas es una visión estratégica, integral y accionable.
              </p>
            </div>
          </div>
        </section>

        {/* Consultoría Estratégica SEO Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="font-display text-3xl md:text-4xl text-center mb-4 text-primary">
                Consultoría Estratégica SEO Para Fintechs
              </h2>
              <p className="font-body text-center text-foreground-muted mb-16">
                Una Estrategia Pensada Para Líderes Que Buscan Resultados, No Solo Rankings.
              </p>

              <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
                <div>
                  <h3 className="font-display text-2xl text-primary mb-8">
                    ¿Qué Obtienes?
                  </h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckIcon />
                    <p className="font-body text-foreground">
                      <strong>Roadmap SEO personalizado</strong> con visión a largo plazo
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckIcon />
                    <p className="font-body text-foreground">
                      <strong>Integración de IA</strong> para análisis predictivo y personalización
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckIcon />
                    <p className="font-body text-foreground">
                      <strong>Optimización de todo tu embudo digital</strong> (atraer, nutrir, convertir)
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckIcon />
                    <p className="font-body text-foreground">
                      <strong>Contenido de autoridad</strong> para posicionarte como referente
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckIcon />
                    <p className="font-body text-foreground">
                      <strong>Identificación de oportunidades ocultas</strong> y palabras clave emergentes
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckIcon />
                    <p className="font-body text-foreground">
                      <strong>Medición transparente de cada acción</strong> SEO (ROI real, no suposiciones)
                    </p>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <Button variant="hero" size="lg" asChild>
                  <a href={CALENDAR_URL} target="_blank" rel="noopener noreferrer">
                    Solicita tu Diagnóstico Estratégico
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* ¿Cómo Trabajamos Paso A Paso? Section */}
        <section className="py-20 bg-soft-pink text-soft-pink-foreground">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="font-display text-3xl md:text-4xl text-center mb-16 text-foreground italic">
                ¿Cómo Trabajamos Paso A Paso?
              </h2>

              <div className="grid md:grid-cols-4 gap-8 mb-16">
                <div className="text-center">
                  <span className="font-display text-2xl text-primary">1|</span>
                  <h3 className="font-display text-xl text-primary mb-2">Diagnóstico Profundo + Sesiones Estratégicas Personalizadas</h3>
                </div>
                <div className="text-center">
                  <span className="font-display text-2xl text-primary">2|</span>
                  <h3 className="font-display text-xl text-primary mb-2">Planificación Del Roadmap Con Foco En Impacto Y Prioridad</h3>
                </div>
                <div className="text-center">
                  <span className="font-display text-2xl text-primary">3|</span>
                  <h3 className="font-display text-xl text-primary mb-2">Implementación Con Acompañamiento Experto</h3>
                </div>
                <div className="text-center">
                  <span className="font-display text-2xl text-primary">4|</span>
                  <h3 className="font-display text-xl text-primary mb-2">Análisis De Datos, Ajustes Proactivos Y Crecimiento Sostenido</h3>
                </div>
              </div>

              <div className="text-center">
                <p className="font-body text-soft-pink-foreground text-lg italic">
                  Cada fase está pensada para CEOs y equipos que quieren claridad y resultados reales.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ¿Por Qué Tú, Pilar? Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-display text-3xl md:text-4xl text-center mb-12 text-primary italic">
                ¿Por Qué Tú, Pilar?
              </h2>

              <div className="space-y-4 mb-12">
                <div className="flex items-center justify-center gap-3">
                  <CheckIcon />
                  <p className="font-body text-foreground">Solo para Fintechs: 100% enfoque sectorial</p>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <CheckIcon />
                  <p className="font-body text-foreground">Capacidad de traducir complejidad técnica en acción estratégica</p>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <CheckIcon />
                  <p className="font-body text-foreground">Foco en rentabilidad, no solo en tráfico</p>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <CheckIcon />
                  <p className="font-body text-foreground">Experiencia + IA = ventaja competitiva</p>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <CheckIcon />
                  <p className="font-body text-foreground">Acceso directo, trato personalizado, soporte continuo</p>
                </div>
              </div>

              <p className="font-body text-foreground text-lg text-center">
                Esto <strong>no es una agencia más</strong> ni una consultoría superficial. Es una alianza estratégica para liderar.
              </p>
            </div>
          </div>
        </section>

        {/* ¿Para Quién Es Esta Consultoría? Section */}
        <section className="py-20 bg-soft-pink text-soft-pink-foreground">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-display text-3xl md:text-4xl text-center mb-12 text-primary italic">
                ¿Para Quién Es Esta Consultoría?
              </h2>

              <div className="space-y-4">
                <div className="flex items-center justify-center gap-3">
                  <CheckIcon />
                  <p className="font-body text-soft-pink-foreground">Solo para Fintechs: 100% enfoque sectorial</p>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <CheckIcon />
                  <p className="font-body text-soft-pink-foreground">Capacidad de traducir complejidad técnica en acción estratégica</p>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <CheckIcon />
                  <p className="font-body text-soft-pink-foreground">Foco en rentabilidad, no solo en tráfico</p>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <CheckIcon />
                  <p className="font-body text-soft-pink-foreground">Experiencia + IA = ventaja competitiva</p>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <CheckIcon />
                  <p className="font-body text-soft-pink-foreground">Acceso directo, trato personalizado, soporte continuo</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto text-center">
              <p className="font-body text-foreground text-lg italic mb-8">
                ¿Listo para llevar tu estrategia SEO al siguiente nivel?
              </p>
              <Button variant="hero" size="xl" asChild>
                <a href={CALENDAR_URL} target="_blank" rel="noopener noreferrer">
                  Agenda tu Sesión Estratégica Gratuita
                </a>
              </Button>
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
                      ¿En qué se diferencia esta consultoría SEO de una auditoría o servicio tradicional?
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4 font-body text-secondary-foreground/90">
                      Esta consultoría es una alianza estratégica. No solo analizo tu web, sino que <strong>defino contigo una estrategia global de posicionamiento</strong>, incluyendo embudos, contenido, IA y ROI real.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-2" className="bg-secondary rounded-lg border-none">
                    <AccordionTrigger className="px-6 py-4 text-left font-body text-secondary-foreground hover:no-underline">
                      ¿Qué tipo de empresas pueden acceder a este servicio?
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4 font-body text-secondary-foreground/90">
                      Startups y empresas Fintech en fase de crecimiento o expansión que quieren consolidarse como referentes en su nicho y escalar resultados de forma sostenible.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-3" className="bg-secondary rounded-lg border-none">
                    <AccordionTrigger className="px-6 py-4 text-left font-body text-secondary-foreground hover:no-underline">
                      ¿Necesito tener conocimientos avanzados de SEO o IA para aprovechar esta consultoría?
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4 font-body text-secondary-foreground/90">
                      No. Mi objetivo es <strong>hacer lo complejo sencillo y accionable</strong>. Te guiaré paso a paso y hablaremos en lenguaje de negocio, no solo técnico.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-4" className="bg-secondary rounded-lg border-none">
                    <AccordionTrigger className="px-6 py-4 text-left font-body text-secondary-foreground hover:no-underline">
                      ¿La consultoría incluye implementación o solo estrategia?
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4 font-body text-secondary-foreground/90">
                      Incluye <strong>asesoría constante</strong>, sesiones estratégicas y acompañamiento para implementación. Si necesitas, podemos coordinar también la ejecución completa.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-5" className="bg-secondary rounded-lg border-none">
                    <AccordionTrigger className="px-6 py-4 text-left font-body text-secondary-foreground hover:no-underline">
                      ¿Cuánto dura el proceso y cómo se estructura?
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4 font-body text-secondary-foreground/90">
                      Dependiendo de tu objetivo, puede ser un proceso de 3 a 6 meses. Comenzamos con diagnóstico, luego roadmap, implementación y seguimiento continuo con ajustes proactivos.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-6" className="bg-secondary rounded-lg border-none">
                    <AccordionTrigger className="px-6 py-4 text-left font-body text-secondary-foreground hover:no-underline">
                      ¿Trabajas con mi equipo de marketing o solo conmigo?
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4 font-body text-secondary-foreground/90">
                      Ambos. Puedo trabajar directamente contigo como CEO/CMO y también con tu equipo interno para alinearlos y maximizar la ejecución.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-7" className="bg-secondary rounded-lg border-none">
                    <AccordionTrigger className="px-6 py-4 text-left font-body text-secondary-foreground hover:no-underline">
                      ¿Cómo integramos la Inteligencia Artificial en mi estrategia SEO?
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4 font-body text-secondary-foreground/90">
                      Te asesoro en el uso de herramientas como <strong>ChatGPT y Gemini Advanced</strong> para automatización, análisis predictivo, generación de contenido y optimización personalizada.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-8" className="bg-secondary rounded-lg border-none">
                    <AccordionTrigger className="px-6 py-4 text-left font-body text-secondary-foreground hover:no-underline">
                      ¿Qué tipo de resultados puedo esperar?
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4 font-body text-secondary-foreground/90">
                      Mejora de visibilidad, incremento de leads cualificados, mayor autoridad digital y un plan claro para escalar tu SEO con medición de resultados y ROI real.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-9" className="bg-secondary rounded-lg border-none">
                    <AccordionTrigger className="px-6 py-4 text-left font-body text-secondary-foreground hover:no-underline">
                      ¿Puedo ver ejemplos de otras Fintechs con las que hayas trabajado?
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4 font-body text-secondary-foreground/90">
                      Sí, tengo casos documentados de Fintechs que han crecido significativamente tras aplicar estrategias como las que te propongo. Te los comparto en nuestra sesión inicial.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-10" className="bg-secondary rounded-lg border-none">
                    <AccordionTrigger className="px-6 py-4 text-left font-body text-secondary-foreground hover:no-underline">
                      ¿Cuál es el primer paso para comenzar?
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4 font-body text-secondary-foreground/90">
                      Agenda tu sesión estratégica gratuita. Analizaremos tu situación actual, tus objetivos y si esta consultoría es adecuada para ti. Sin compromiso.
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
