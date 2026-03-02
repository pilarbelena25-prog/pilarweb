import { Button } from "@/components/ui/button";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import pilarBelena from "@/assets/pilar-4.webp";

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-green-600 flex-shrink-0">
    <rect x="2" y="2" width="20" height="20" rx="4" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="2"/>
    <path d="M7 12l3 3 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const CALENDAR_URL = "https://calendly.com/pilarbelena25/30min";

const pipelineSteps = [
  "Contenido IA raw",
  "Keyword optimization",
  "Schema markup",
  "Internal linking",
  "Core Web Vitals",
  "SGE-ready",
  "Publicado",
];

const IntegracionIaSeo = () => {
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
                  <p className="font-body text-foreground-muted uppercase tracking-widest text-sm mb-4">
                    SEO + IA para Fintech
                  </p>
                  <h1 className="font-display text-4xl md:text-5xl lg:text-6xl leading-tight mb-8 text-primary">
                    Escala tu Marketing Fintech con IA sin perder calidad SEO ni voz de marca
                  </h1>
                  <Button variant="hero" size="xl" asChild>
                    <a href={CALENDAR_URL} target="_blank" rel="noopener noreferrer">
                      Implementa IA en tu marketing Fintech hoy
                    </a>
                  </Button>
                </div>

                <div className="flex justify-center">
                  <img
                    src={pilarBelena}
                    alt="Pilar Beleña - SEO e Inteligencia Artificial para Fintech"
                    className="max-w-md w-full rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Qué problemas resuelve Section */}
        <section className="py-20 bg-soft-pink text-soft-pink-foreground">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="font-display text-3xl md:text-4xl text-center mb-16 text-foreground">
                Qué problemas resuelve
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <article className="bg-secondary rounded-lg p-6">
                  <h3 className="font-display text-lg text-secondary-foreground mb-2">
                    Escala de contenidos imposible
                  </h3>
                  <p className="font-body text-secondary-foreground/80 text-sm">
                    Necesitas 10x más contenido pero sin equipo 10x mayor
                  </p>
                </article>
                <article className="bg-secondary rounded-lg p-6">
                  <h3 className="font-display text-lg text-secondary-foreground mb-2">
                    Prompts genéricos que fallan
                  </h3>
                  <p className="font-body text-secondary-foreground/80 text-sm">
                    ChatGPT/Gemini generan contenido que Google penaliza
                  </p>
                </article>
                <article className="bg-secondary rounded-lg p-6">
                  <h3 className="font-display text-lg text-secondary-foreground mb-2">
                    Eficiencia operativa baja
                  </h3>
                  <p className="font-body text-secondary-foreground/80 text-sm">
                    Horas perdidas formateando, optimizando, republicando
                  </p>
                </article>
                <article className="bg-secondary rounded-lg p-6">
                  <h3 className="font-display text-lg text-secondary-foreground mb-2">
                    Falta de coherencia
                  </h3>
                  <p className="font-body text-secondary-foreground/80 text-sm">
                    Cada IA genera tono diferente, rompiendo tu autoridad Fintech
                  </p>
                </article>
                <article className="bg-secondary rounded-lg p-6 md:col-span-2 md:max-w-lg md:mx-auto w-full">
                  <h3 className="font-display text-lg text-secondary-foreground mb-2">
                    SEO post-IA
                  </h3>
                  <p className="font-body text-secondary-foreground/80 text-sm">
                    Contenido generado no rankea ni convierte
                  </p>
                </article>
              </div>
            </div>
          </div>
        </section>

        {/* Servicios incluidos Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-display text-3xl md:text-4xl text-center mb-16 text-primary">
                Servicios incluidos
              </h2>

              <div className="space-y-12 mb-16">
                {/* Servicio 1 */}
                <article className="flex items-start gap-4">
                  <span className="font-display text-2xl text-primary flex-shrink-0 w-8" aria-hidden="true">1</span>
                  <div>
                    <h3 className="font-display text-xl text-primary mb-4">
                      Diseño de Prompts Especializados Fintech
                    </h3>
                    <p className="font-body text-foreground-muted mb-3">
                      <strong>Prompt Master</strong> para:
                    </p>
                    <ul className="space-y-2 font-body text-foreground-muted text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-primary flex-shrink-0 mt-0.5" aria-hidden="true">›</span>
                        Keyword research semántico "consultora SEO Fintech España"
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary flex-shrink-0 mt-0.5" aria-hidden="true">›</span>
                        Artículos pillar-cluster optimizados SGE
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary flex-shrink-0 mt-0.5" aria-hidden="true">›</span>
                        FAQs que rankean en posición 0
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary flex-shrink-0 mt-0.5" aria-hidden="true">›</span>
                        LinkedIn posts que generan leads B2B
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary flex-shrink-0 mt-0.5" aria-hidden="true">›</span>
                        Email marketing con intención comercial
                      </li>
                    </ul>
                  </div>
                </article>

                {/* Servicio 2 */}
                <article className="flex items-start gap-4">
                  <span className="font-display text-2xl text-primary flex-shrink-0 w-8" aria-hidden="true">2</span>
                  <div>
                    <h3 className="font-display text-xl text-primary mb-4">
                      Flujos IA Automatizados para Marketing
                    </h3>
                    <p className="font-body text-foreground-muted mb-3">
                      Sistema <strong>plug&amp;play</strong> que genera:
                    </p>
                    <ul className="space-y-2 font-body text-foreground-muted text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-primary flex-shrink-0 mt-0.5" aria-hidden="true">›</span>
                        Calendario editorial 30 días (SEO-first)
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary flex-shrink-0 mt-0.5" aria-hidden="true">›</span>
                        12 posts LinkedIn/semana (autoridad ejecutiva)
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary flex-shrink-0 mt-0.5" aria-hidden="true">›</span>
                        4 newsletters/mes (alta conversión)
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary flex-shrink-0 mt-0.5" aria-hidden="true">›</span>
                        Respuestas automatizadas leads (personalizadas)
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary flex-shrink-0 mt-0.5" aria-hidden="true">›</span>
                        Reportes ejecutivos semanales (KPIs + insights)
                      </li>
                    </ul>
                  </div>
                </article>

                {/* Servicio 3 */}
                <article className="flex items-start gap-4">
                  <span className="font-display text-2xl text-primary flex-shrink-0 w-8" aria-hidden="true">3</span>
                  <div className="w-full">
                    <h3 className="font-display text-xl text-primary mb-4">
                      Pipeline contenidos IA → SEO optimizado
                    </h3>
                    <p className="font-body text-foreground-muted mb-4">
                      Flujo automático:
                    </p>
                    <div className="flex flex-wrap items-center gap-2" role="list" aria-label="Pasos del pipeline de contenidos">
                      {pipelineSteps.map((step, index) => (
                        <div key={step} className="flex items-center gap-2" role="listitem">
                          <span className="bg-secondary text-secondary-foreground font-body text-xs px-3 py-1.5 rounded-full">
                            {step}
                          </span>
                          {index < pipelineSteps.length - 1 && (
                            <span className="text-primary font-bold text-sm" aria-hidden="true">→</span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </article>

                {/* Servicio 4 */}
                <article className="flex items-start gap-4">
                  <span className="font-display text-2xl text-primary flex-shrink-0 w-8" aria-hidden="true">4</span>
                  <div>
                    <h3 className="font-display text-xl text-primary mb-4">
                      Guardrails (filtros de control inteligente) de Marca Fintech
                    </h3>
                    <ul className="space-y-2 font-body text-foreground-muted text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-primary flex-shrink-0 mt-0.5" aria-hidden="true">›</span>
                        Tono ejecutivo-conservador (sector regulado)
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary flex-shrink-0 mt-0.5" aria-hidden="true">›</span>
                        Keywords obligatorias por clúster semántico
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary flex-shrink-0 mt-0.5" aria-hidden="true">›</span>
                        Competencia exclusion list (no copias)
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary flex-shrink-0 mt-0.5" aria-hidden="true">›</span>
                        Autoridad temática progresiva (E-E-A-T)
                      </li>
                    </ul>
                  </div>
                </article>
              </div>

              <div className="text-center">
                <Button variant="hero" size="lg" asChild>
                  <a href={CALENDAR_URL} target="_blank" rel="noopener noreferrer">
                    Implementa IA en tu marketing Fintech hoy
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Beneficios Section */}
        <section className="py-20 bg-soft-pink text-soft-pink-foreground">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="font-display text-3xl md:text-4xl text-center mb-16 text-foreground">
                Beneficios
              </h2>

              <div className="grid md:grid-cols-2 gap-8">
                <article className="bg-secondary rounded-lg p-8">
                  <h3 className="font-display text-2xl text-secondary-foreground mb-2">PRODUCTIVIDAD x10</h3>
                  <p className="font-body text-secondary-foreground/90">
                    8h contenido manual → 45min supervisión IA
                  </p>
                </article>

                <article className="bg-secondary rounded-lg p-8">
                  <h3 className="font-display text-2xl text-secondary-foreground mb-2">SEO GARANTIZADO</h3>
                  <p className="font-body text-secondary-foreground/90">
                    Contenido IA pasa TODOS los filtros Google 2026
                  </p>
                </article>

                <article className="bg-secondary rounded-lg p-8">
                  <h3 className="font-display text-2xl text-secondary-foreground mb-2">COHERENCIA 100%</h3>
                  <p className="font-body text-secondary-foreground/90">
                    IA entrenada con TU voz de marca Fintech
                  </p>
                </article>

                <article className="bg-secondary rounded-lg p-8">
                  <h3 className="font-display text-2xl text-secondary-foreground mb-2">RESULTADOS INMEDIATOS</h3>
                  <ul className="space-y-1 font-body text-secondary-foreground/90 text-sm">
                    <li>Semana 1: calendario 30 días listo</li>
                    <li>Mes 1: +200% contenido publicado</li>
                    <li>Mes 3: +80% tráfico orgánico clústeres IA</li>
                  </ul>
                </article>
              </div>
            </div>
          </div>
        </section>

        {/* Integración con servicios Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="font-display text-3xl md:text-4xl text-center mb-16 text-primary">
                Integración perfecta con servicios anteriores
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start gap-4">
                  <CheckIcon />
                  <p className="font-body text-foreground">
                    <strong>Auditoría SEO</strong> → detecta gaps de contenido
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <CheckIcon />
                  <p className="font-body text-foreground">
                    <strong>Posicionamiento</strong> → IA acelera link building
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <CheckIcon />
                  <p className="font-body text-foreground">
                    <strong>Consultoría</strong> → IA ejecuta la estrategia escala
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <CheckIcon />
                  <p className="font-body text-foreground">
                    <strong>SEO + IA</strong> → el <strong>MOTOR</strong> que ejecuta todo
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
                Implementa IA en tu marketing Fintech hoy
              </h2>
              <p className="font-body text-soft-pink-foreground text-lg mb-8">
                Genera el contenido masivo que posiciona tu Fintech sin contratar un equipo completo.
              </p>
              <Button variant="hero" size="xl" asChild>
                <a href={CALENDAR_URL} target="_blank" rel="noopener noreferrer">
                  Implementa IA en tu marketing Fintech hoy
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

export default IntegracionIaSeo;
