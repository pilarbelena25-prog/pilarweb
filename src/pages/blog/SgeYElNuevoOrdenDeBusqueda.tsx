import imgDestacada from "@/assets/blog/articulo-3/3A.webp";
import imgContenido from "@/assets/blog/articulo-3/3B.webp";
import ArticleSeoHead from "@/components/ArticleSeoHead";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const CALENDAR_URL = "https://calendly.com/pilarbelena25/30min";

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5">
    <rect x="2" y="2" width="20" height="20" rx="4" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="2"/>
    <path d="M7 12l3 3 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const SgeYElNuevoOrdenDeBusqueda = () => {
  return (
    <div className="min-h-screen bg-background">
      <ArticleSeoHead
        title="SGE y el nuevo orden de búsqueda FINTECH: Cómo proteger el tráfico de tu marca financiera este año"
        description="La SGE convierte la página de resultados en un panel de respuestas. Para las marcas financieras, el riesgo no es solo perder posiciones: es que la IA se quede con la visibilidad que antes era tuya."
        slug="sge-y-el-nuevo-orden-de-busqueda"
        image={imgDestacada}
        datePublished="2026-01-19"
        category="SEO para Empresas Financieras"
      />
      <Header />
      <main>
        {/* Featured image */}
        <section className="pt-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <img
                src={imgDestacada}
                alt="SGE y el nuevo orden de búsqueda Fintech - SEO Fintech Lab"
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
                  SGE & Visibilidad Fintech
                </strong>
                <span className="font-body text-xs text-foreground-muted">
                  19 de enero de 2026
                </span>
                <span className="font-body text-xs text-foreground-muted">
                  6 min de lectura
                </span>
              </div>
              <h1 className="font-display text-4xl md:text-5xl leading-tight text-primary mb-8">
                SGE y el nuevo orden de búsqueda FINTECH: Cómo proteger el tráfico de tu marca financiera este año
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
                  La búsqueda está cambiando rápidamente con la <a href="/blog/seo-e-ia" className="text-primary hover:underline font-medium">SGE y los resultados generados por IA</a>. Para las marcas financieras, el riesgo no es solo "perder posiciones", sino que la respuesta de la IA se queda con la visibilidad que antes era tuya. Este artículo está pensado para equipos de marketing y fundadores Fintech B2B que ya tienen tráfico orgánico y quieren protegerlo antes de que lleguen las caídas.
                </p>
              </div>

              {/* Índice */}
              <div className="bg-soft-pink rounded-lg p-6">
                <p className="font-display text-lg text-primary mb-4">Índice de contenido</p>
                <ol className="font-body text-foreground-muted space-y-2 list-decimal list-inside">
                  <li><a href="#que-cambia" className="hover:text-primary transition-colors">Qué cambia con SGE para una Fintech</a></li>
                  <li><a href="#prioridades" className="hover:text-primary transition-colors">Prioridades SEO para proteger tu tráfico de marca</a></li>
                  <li><a href="#matriz-acciones" className="hover:text-primary transition-colors">Dónde enfocarte este año: matriz de acciones</a></li>
                  <li><a href="#checklist" className="hover:text-primary transition-colors">Lista de verificación rápida para tu equipo</a></li>
                  <li><a href="#conclusion" className="hover:text-primary transition-colors">Conclusión</a></li>
                </ol>
              </div>

              {/* Sección 1: Qué cambia */}
              <div id="que-cambia" className="space-y-6">
                <h2 className="font-display text-3xl text-primary">
                  1. Qué cambia con SGE para una Fintech
                </h2>
                <p className="font-body text-foreground leading-relaxed">
                  La <a href="/blog/seo-e-ia" className="text-primary hover:underline font-medium">SGE</a> convierte la página de resultados en un panel de respuestas: menos clics, más síntesis y más competencia por cada impresión. En Fintech esto se nota especialmente en búsquedas de marca, comparativas y términos educativos de alto valor (p. ej. "qué es el confirming", "cuentas escrow fintech", "pagos B2B seguros").
                </p>

                {/* Tabla: riesgos clave SGE */}
                <div className="space-y-3">
                  <p className="font-body font-semibold text-foreground uppercase text-xs tracking-wider">Riesgos clave SGE para Fintech</p>
                  <div className="divide-y divide-border border border-border rounded-lg overflow-hidden">
                    <div className="grid grid-cols-3 bg-secondary px-4 py-3">
                      <span className="font-body text-xs font-semibold text-white uppercase tracking-wider">Tipo de búsqueda</span>
                      <span className="font-body text-xs font-semibold text-white uppercase tracking-wider">Ejemplo</span>
                      <span className="font-body text-xs font-semibold text-white uppercase tracking-wider">Riesgo</span>
                    </div>
                    <div className="grid grid-cols-3 px-4 py-4 bg-background">
                      <span className="font-body text-sm text-foreground font-medium">Marca + genérico</span>
                      <span className="font-body text-sm text-foreground-muted">"tu Fintech + comisiones"</span>
                      <span className="font-body text-sm text-foreground-muted">La IA muestra opiniones externas por encima de tu web.</span>
                    </div>
                    <div className="grid grid-cols-3 px-4 py-4 bg-background">
                      <span className="font-body text-sm text-foreground font-medium">Problema del cliente</span>
                      <span className="font-body text-sm text-foreground-muted">"cómo reducir riesgo de fraude B2B"</span>
                      <span className="font-body text-sm text-foreground-muted">La IA responde sin necesidad de clic y te roba demanda fría.</span>
                    </div>
                    <div className="grid grid-cols-3 px-4 py-4 bg-background">
                      <span className="font-body text-sm text-foreground font-medium">Comparativa</span>
                      <span className="font-body text-sm text-foreground-muted">"mejores plataformas pagos B2B"</span>
                      <span className="font-body text-sm text-foreground-muted">Quedas fuera del panel si no eres referencia clara del nicho.</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sección 2: Prioridades */}
              <div id="prioridades" className="space-y-6">
                <h2 className="font-display text-3xl text-primary">
                  2. Prioridades SEO para proteger tu tráfico de marca
                </h2>
                <p className="font-body text-foreground leading-relaxed">
                  En este nuevo orden, tu web debe ser la fuente "obvia" que la IA usa para hablar de tu empresa. Eso implica controlar tres frentes: señales de marca, contenido especializado y consistencia regulatoria.
                </p>

                {/* Imagen de contenido */}
                <div>
                  <img
                    src={imgContenido}
                    alt="De Consultor a Socio Estratégico Fintech - SEO Fintech Lab"
                    className="w-full rounded-lg object-cover"
                  />
                  <p className="font-body text-sm text-foreground-muted text-center mt-3">
                    De Consultor a Socio Estratégico Fintech
                  </p>
                </div>

                {/* 3 ejes */}
                <div className="space-y-4">
                  <p className="font-body font-semibold text-foreground uppercase text-xs tracking-wider">3 ejes para blindar tu marca</p>
                  <div className="space-y-4">
                    <div className="bg-secondary rounded-lg p-6">
                      <p className="font-display text-lg text-white mb-3">🧩 Señales de marca (Brand SEO)</p>
                      <ul className="font-body text-white/80 space-y-2 list-disc list-inside">
                        <li>Fichas actualizadas (Google Business Profile, directorios sectoriales).</li>
                        <li>Menciones coherentes en medios y socios.</li>
                      </ul>
                    </div>
                    <div className="bg-secondary rounded-lg p-6">
                      <p className="font-display text-lg text-white mb-3">📚 Contenido experto y profundo</p>
                      <ul className="font-body text-white/80 space-y-2 list-disc list-inside">
                        <li>Guías largas orientadas a problemas concretos de clientes.</li>
                        <li>Casos de uso B2B con datos, no solo reclamos comerciales.</li>
                      </ul>
                    </div>
                    <div className="bg-secondary rounded-lg p-6">
                      <p className="font-display text-lg text-white mb-3">🛡️ Cumplimiento visible</p>
                      <ul className="font-body text-white/80 space-y-2 list-disc list-inside">
                        <li>Páginas claras de avisos legales y regulación aplicables.</li>
                        <li>Mensajes alineados con el marco CNMV / UE en toda la web.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sección 3: Matriz de acciones */}
              <div id="matriz-acciones" className="space-y-6">
                <h2 className="font-display text-3xl text-primary">
                  3. Dónde enfocarte este año: matriz de acciones
                </h2>
                <p className="font-body text-foreground leading-relaxed">
                  Piensa en tu SEO como un Plan de Defensa activa: refuerzas lo que ya convierte y ciegas lo que la SGE puede "canibalizar".
                </p>

                {/* Tabla de acciones */}
                <div className="space-y-4">
                  <p className="font-body font-semibold text-foreground uppercase text-xs tracking-wider">Acciones prioritarias</p>
                  <div className="divide-y divide-border border border-border rounded-lg overflow-hidden">
                    <div className="grid grid-cols-2 bg-secondary px-4 py-3">
                      <span className="font-body text-xs font-semibold text-white uppercase tracking-wider">Acción</span>
                      <span className="font-body text-xs font-semibold text-white uppercase tracking-wider">Qué hacer / Impacto</span>
                    </div>
                    <div className="grid grid-cols-2 px-4 py-5 bg-background gap-6">
                      <div className="flex items-start gap-2">
                        <CheckIcon />
                        <span className="font-body text-sm text-foreground font-medium">Optimizar búsquedas de marca</span>
                      </div>
                      <div className="space-y-2">
                        <ul className="font-body text-sm text-foreground-muted list-disc list-inside space-y-1">
                          <li>Página "Sobre [Nombre Fintech]" ultra completa.</li>
                          <li>Preguntas frecuentes de marca con dudas reales de clientes.</li>
                        </ul>
                        <p className="font-body text-sm text-primary font-medium">Protege reputación y clics en resultados IA+orgánicos.</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 px-4 py-5 bg-background gap-6">
                      <div className="flex items-start gap-2">
                        <CheckIcon />
                        <span className="font-body text-sm text-foreground font-medium">Profundizar en 3–5 temas básicos</span>
                      </div>
                      <div className="space-y-2">
                        <ul className="font-body text-sm text-foreground-muted list-disc list-inside space-y-1">
                          <li>Clúster de contenidos por solución (pagos, riesgo, lending…).</li>
                          <li>Enlazado interno fuerte hacia páginas de negocio.</li>
                        </ul>
                        <p className="font-body text-sm text-primary font-medium">Tu posición como <a href="/blog/hoja-de-ruta-seo-fintech-lab" className="hover:underline">autoridad temática en tu vertical</a>.</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 px-4 py-5 bg-background gap-6">
                      <div className="flex items-start gap-2">
                        <CheckIcon />
                        <span className="font-body text-sm text-foreground font-medium">Refuerzo técnico en sitio</span>
                      </div>
                      <div className="space-y-2">
                        <ul className="font-body text-sm text-foreground-muted list-disc list-inside space-y-1">
                          <li>Schema de entidad, producto y preguntas frecuentes.</li>
                          <li>Velocidad y experiencia móvil impecables.</li>
                        </ul>
                        <p className="font-body text-sm text-primary font-medium">Facilita que la IA entienda y cite tu contenido.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sección 4: Checklist */}
              <div id="checklist" className="space-y-6">
                <h2 className="font-display text-3xl text-primary">
                  4. Lista de verificación rápida para tu equipo
                </h2>
                <p className="font-body text-foreground leading-relaxed">
                  Puedes usar esta lista en la próxima reunión de Marketing + Producto:
                </p>
                <div className="bg-soft-pink rounded-lg p-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckIcon />
                    <p className="font-body text-foreground">¿Tenemos una página de marca que responde mejor que cualquier resultado externo?</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckIcon />
                    <p className="font-body text-foreground">¿Hay al menos 3 clústeres de contenido Fintech profundos y actualizados?</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckIcon />
                    <p className="font-body text-foreground">¿Estamos monitoreando las búsquedas de marca y comparativas en Search Console?</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckIcon />
                    <p className="font-body text-foreground">¿Legal/compliance revisa los contenidos clave sin frenar su publicación?</p>
                  </div>
                </div>
                <p className="font-body text-foreground leading-relaxed">
                  Si quieres aplicar este enfoque en tu Fintech, en <strong>SEO Fintech Lab</strong> te ayudamos a auditar qué parte de tu tráfico está más expuesta al nuevo orden de búsqueda y a priorizar acciones antes de que la IA se quede con tus clics.
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

              {/* Conclusión */}
              <div id="conclusion" className="bg-soft-pink rounded-lg p-8">
                <h2 className="font-display text-3xl text-primary mb-6">
                  Conclusión
                </h2>
                <p className="font-body text-lg text-foreground leading-relaxed mb-4">
                  La búsqueda está cambiando rápidamente con la <a href="/blog/seo-e-ia" className="text-primary hover:underline font-medium">SGE y los resultados generados por IA</a>. Para las marcas financieras, el riesgo no es solo "perder posiciones", sino que la respuesta de la IA se queda con la visibilidad que antes era tuya. Este artículo está pensado para equipos de marketing y fundadores Fintech B2B que ya tienen tráfico orgánico y quieren protegerlo antes de que lleguen las caídas.
                </p>
                <p className="font-display text-xl text-primary font-medium">
                  ¿Tu Fintech está preparada?
                </p>
              </div>

              {/* CTA final Calendly */}
              <div className="bg-gradient-hero rounded-lg p-10 text-center">
                <h2 className="font-display text-3xl text-primary mb-4">
                  ¿Listo para proteger el tráfico de tu marca Fintech?
                </h2>
                <p className="font-body text-foreground-muted mb-8">
                  Reserva una sesión estratégica y diseñamos juntos tu plan de <a href="/blog/hoja-de-ruta-seo-fintech-lab" className="text-primary hover:underline font-medium">Visibilidad Fintech Sostenible</a>.
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

export default SgeYElNuevoOrdenDeBusqueda;
