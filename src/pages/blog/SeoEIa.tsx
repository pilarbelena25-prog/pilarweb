import imgDestacada from "@/assets/blog/articulo-1/1A.webp";
import ArticleSeoHead from "@/components/ArticleSeoHead";
import imgContenido from "@/assets/blog/articulo-1/1B.webp";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { LazyImage } from "@/components/ui/LazyImage";

const CALENDAR_URL = "https://calendly.com/pilarbelena25/30min";

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5">
    <rect x="2" y="2" width="20" height="20" rx="4" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="2"/>
    <path d="M7 12l3 3 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const XIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5">
    <rect x="2" y="2" width="20" height="20" rx="4" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="2"/>
    <path d="M8 8l8 8M16 8l-8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const SeoEIa = () => {
  return (
    <div className="min-h-screen bg-background">
      <ArticleSeoHead
        title="SEO e IA: Por qué la Estrategia importa más que el volumen en SEO Fintech 2026"
        description="Con la IA Generativa, cualquier Fintech puede publicar miles de artículos diarios. Pero el volumen masivo no es ventaja competitiva: es un riesgo directo para tu autoridad de marca."
        slug="seo-e-ia"
        image={imgDestacada}
        datePublished="2025-12-28"
        category="Consultor SEO Fintech"
      />
      <Header />
      <main>
        {/* Featured image */}
        <section className="pt-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <LazyImage
                eager
                src={imgDestacada}
                alt="SEO e IA - Estrategia SEO Fintech 2026"
                className="w-full rounded-lg object-cover"
              />
              <p className="font-body text-sm text-foreground-muted text-center mt-3">
                Pilar Beleña - Consultora SEO Fintech
              </p>
            </div>
          </div>
        </section>

        {/* Header del artículo */}
        <section className="pt-10 pb-4 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              <a
                href="/blog"
                className="inline-block font-body text-sm text-primary mb-8 hover:underline"
              >
                ← Volver al Blog
              </a>
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <strong className="font-body text-xs font-medium text-primary uppercase tracking-wider">
                  SEO Fintech
                </strong>
                <span className="font-body text-xs text-foreground-muted">
                  28 de diciembre de 2025
                </span>
                <span className="font-body text-xs text-foreground-muted">
                  5 min de lectura
                </span>
              </div>
              <h1 className="font-display text-4xl md:text-5xl leading-tight text-primary mb-8">
                SEO e IA: Por qué la Estrategia importa más que el volumen en SEO Fintech 2026
              </h1>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="pb-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto space-y-12">

              {/* Intro */}
              <div className="space-y-4">
                <p className="font-body text-lg text-foreground leading-relaxed">
                  El ruido digital ha alcanzado niveles nunca vistos. Con la IA Generativa, cualquier Fintech puede publicar miles de artículos diarios. Pero en el sector Financiero Digital, el volumen masivo no es ventaja competitiva: es un riesgo directo para tu <strong>autoridad de marca Fintech</strong>.
                </p>
                <p className="font-body text-lg text-foreground leading-relaxed">
                  Si gestionas una Startup Fintech o Scale-Up Financiera, sabes que el tráfico "porque sí" no genera leads cualificados ni cierra rondas de inversión. En 2026, Google SGE y los motores de respuesta IA distinguen contenido bot del que construye <strong>Visibilidad Fintech</strong> real.
                </p>
              </div>

              {/* Índice */}
              <div className="bg-soft-pink rounded-lg p-6">
                <p className="font-display text-lg text-primary mb-4">Índice de contenido</p>
                <ol className="font-body text-foreground-muted space-y-2 list-decimal list-inside">
                  <li><a href="#que-cambia" className="hover:text-primary transition-colors">¿Qué cambia para tu Consultora SEO Fintech?</a></li>
                  <li><a href="#entidades" className="hover:text-primary transition-colors">Del relleno de palabras clave al Reconocimiento de Entidades</a></li>
                  <li><a href="#calidad" className="hover:text-primary transition-colors">Calidad x10 &gt; Masa x100</a></li>
                  <li><a href="#ia-copiloto" className="hover:text-primary transition-colors">IA como Copiloto Estratégico, NO CEO</a></li>
                  <li><a href="#ecuacion" className="hover:text-primary transition-colors">La ecuación SEO Fintech 2026</a></li>
                  <li><a href="#faq" className="hover:text-primary transition-colors">Preguntas Frecuentes</a></li>
                </ol>
              </div>

              {/* Qué cambia */}
              <div id="que-cambia">
                <h2 className="font-display text-3xl text-primary mb-6">
                  ¿Qué cambia para tu Consultora SEO Fintech?
                </h2>

                {/* Segunda imagen */}
                <div className="mb-8">
                  <LazyImage
                    src={imgContenido}
                    alt="SEO Tradicional vs GEO IA 2026"
                    className="w-full rounded-lg object-cover"
                  />
                  <p className="font-body text-sm text-foreground-muted text-center mt-3">
                    SEO TRADICIONAL → GEO (IA) 2026
                  </p>
                </div>

                {/* Punto 1 */}
                <div id="entidades" className="space-y-4 mb-10">
                  <h3 className="font-display text-2xl text-foreground">
                    1. Del relleno de palabras clave al Reconocimiento de Entidades
                  </h3>
                  <p className="font-body text-foreground leading-relaxed">
                    Ya no optimizamos <strong>"Consultora SEO Fintech"</strong> aislada. Google reconoce "SEO Fintech Lab" como entidad confiable en el gráfico de conocimiento: Regulaciones, Banca Digital, Insurtech, Wealth Tech.
                  </p>
                  <div className="bg-soft-pink rounded-lg p-6">
                    <p className="font-body text-sm font-medium text-primary mb-2">Ejemplo real</p>
                    <p className="font-body text-foreground-muted leading-relaxed">
                      Una neobank española pasó de 120 palabras clave dispersas a dominar 3 entidades: <strong>"Auditoría SEO Fintech"</strong>, <strong>"Posicionamiento SEO Fintech"</strong>, <strong>"Autoridad marca Fintech"</strong>. Resultado: Top 3 SGE, +240% leads orgánicos.
                    </p>
                  </div>
                </div>

                {/* Punto 2 */}
                <div id="calidad" className="space-y-4 mb-10">
                  <h3 className="font-display text-2xl text-foreground">
                    2. Calidad x10 &gt; Masa x100
                  </h3>
                  <p className="font-body text-foreground leading-relaxed">
                    En Fintech, un artículo profundo sobre <em>"Mi análisis SEO Fintech detectó 17 errores críticos que frenaban leads"</em> vale más de 50 posts genéricos sobre "SEO tips".
                  </p>
                  <div>
                    <p className="font-body font-medium text-foreground mb-3">Por qué falla el volumen IA:</p>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <XIcon />
                        <p className="font-body text-foreground">Sin guardrails Fintech, ChatGPT promete "x10 conversiones" (penalizable)</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <XIcon />
                        <p className="font-body text-foreground">Falta EEAT sectorial (Experiencia regulada, Experiencia técnica)</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <XIcon />
                        <p className="font-body text-foreground">Actualización de contenido útil de Google 2026</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Punto 3 */}
                <div id="ia-copiloto" className="space-y-6">
                  <h3 className="font-display text-2xl text-foreground">
                    3. IA como Copiloto Estratégico, NO CEO
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-green-50 rounded-lg p-6">
                      <p className="font-body font-medium text-green-700 mb-4">✅ IA SÍ hace:</p>
                      <div className="space-y-3">
                        <div className="flex items-start gap-3">
                          <CheckIcon />
                          <p className="font-body text-foreground text-sm">Keyword research semántico "Consultora marketing Fintech"</p>
                        </div>
                        <div className="flex items-start gap-3">
                          <CheckIcon />
                          <p className="font-body text-foreground text-sm">Análisis competencia 50 Fintechs en 3 minutos</p>
                        </div>
                        <div className="flex items-start gap-3">
                          <CheckIcon />
                          <p className="font-body text-foreground text-sm">Estructura pillar-cluster automática</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-red-50 rounded-lg p-6">
                      <p className="font-body font-medium text-red-700 mb-4">❌ IA NO decide:</p>
                      <div className="space-y-3">
                        <div className="flex items-start gap-3">
                          <XIcon />
                          <p className="font-body text-foreground text-sm">Tu posicionamiento: "¿Premium o accesible?"</p>
                        </div>
                        <div className="flex items-start gap-3">
                          <XIcon />
                          <p className="font-body text-foreground text-sm">Voz de marca: "Conservadora o disruptiva"</p>
                        </div>
                        <div className="flex items-start gap-3">
                          <XIcon />
                          <p className="font-body text-foreground text-sm">Prioridades: "¿Leads o autoridad primero?"</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Ecuación */}
              <div id="ecuacion" className="bg-soft-pink rounded-lg p-8 text-center">
                <h2 className="font-display text-3xl text-primary mb-6">
                  La ecuación SEO Fintech 2026
                </h2>
                <p className="font-display text-xl text-foreground mb-6">
                  Estrategia Humana + IA Táctico =<br />
                  <strong>Dominio SGE + Leads Cualificados x3</strong>
                </p>
                <p className="font-body text-foreground-muted leading-relaxed mb-6">
                  Escalar contenido Fintech no es "publicar más". Es hacer que cada pieza trabaje tu <strong>autoridad de marca Fintech</strong> 3x más eficientemente.
                </p>
                <p className="font-body text-foreground-muted leading-relaxed mb-6">
                  <strong>Pregunta clave para tu Fintech 2026:</strong> ¿Tu plan es producir más (riesgo penalización) o producir mejor (<strong>Visibilidad Fintech Sostenible</strong>)?
                </p>
                <p className="font-body text-foreground leading-relaxed">
                  En SEO Fintech Lab escalamos calidad estratégica con <strong>IA aplicada SEO Fintech</strong>. Resultado: Top 3 Google, posición 0 SGE, leads que pagan facturas.
                </p>
              </div>

              {/* CTA a servicios */}
              <div className="text-center">
                <Button variant="hero" size="xl" asChild>
                  <a href="/#servicios">
                    Solicita tu Auditoría SEO Fintech
                  </a>
                </Button>
              </div>

              {/* FAQ */}
              <div id="faq">
                <h2 className="font-display text-3xl text-primary mb-8">
                  Preguntas Frecuentes
                </h2>
                <Accordion type="single" collapsible className="space-y-2">
                  <AccordionItem value="item-1" className="bg-secondary rounded-lg border-none">
                    <AccordionTrigger className="px-6 py-4 text-left font-body text-secondary-foreground hover:no-underline">
                      ¿La IA puede reemplazar una estrategia SEO Fintech?
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4 font-body text-secondary-foreground/90">
                      No. La IA es una herramienta táctica poderosa, pero no puede tomar decisiones estratégicas: posicionamiento de marca, prioridades de negocio o voz editorial. En Fintech, donde la confianza y el EEAT son críticos, la estrategia humana es irreemplazable.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-2" className="bg-secondary rounded-lg border-none">
                    <AccordionTrigger className="px-6 py-4 text-left font-body text-secondary-foreground hover:no-underline">
                      ¿Cuánto contenido debería publicar mi Fintech por mes?
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4 font-body text-secondary-foreground/90">
                      La frecuencia importa menos que la profundidad. Un artículo pilar mensual bien construido —con datos sectoriales, EEAT demostrable y estructura semántica— supera en impacto a 20 posts genéricos. Prioriza calidad estratégica sobre volumen.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-3" className="bg-secondary rounded-lg border-none">
                    <AccordionTrigger className="px-6 py-4 text-left font-body text-secondary-foreground hover:no-underline">
                      ¿Qué es Google SGE y cómo afecta a mi Fintech?
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4 font-body text-secondary-foreground/90">
                      Google SGE (Search Generative Experience) es el sistema de respuestas generadas por IA de Google. En 2026 aparece en la mayoría de búsquedas informacionales. Para Fintechs, posicionarse en SGE significa ser la fuente que Google cita como referencia, lo que genera tráfico de altísima intención.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-4" className="bg-secondary rounded-lg border-none">
                    <AccordionTrigger className="px-6 py-4 text-left font-body text-secondary-foreground hover:no-underline">
                      ¿Cómo sé si mi contenido Fintech tiene suficiente EEAT?
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4 font-body text-secondary-foreground/90">
                      Tu contenido tiene EEAT sólido si: incluye experiencia real documentada, cita regulaciones aplicables a tu sector, tiene autoría experta visible y genera menciones en medios financieros de referencia. Una auditoría SEO Fintech detecta exactamente qué señales EEAT faltan en tu caso.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>

              {/* CTA final Calendly */}
              <div className="bg-gradient-hero rounded-lg p-10 text-center">
                <h2 className="font-display text-3xl text-primary mb-4">
                  ¿Listo para transformar ruido en Autoridad Medible?
                </h2>
                <p className="font-body text-foreground-muted mb-8">
                  Reserva una sesión estratégica y diseñamos juntos tu plan de Visibilidad Fintech Sostenible.
                </p>
                <Button variant="hero" size="xl" className="whitespace-normal h-auto py-4" asChild>
                  <a href={CALENDAR_URL} target="_blank" rel="noopener noreferrer">
                    Hablemos de tu Estrategia SEO Fintech
                  </a>
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

export default SeoEIa;
