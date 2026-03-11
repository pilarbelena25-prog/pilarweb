import imgDestacada from "@/assets/blog/articulo-5/5A.webp";
import imgContenido from "@/assets/blog/articulo-5/5B.webp";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const CALENDAR_URL = "https://calendly.com/pilarbelena25/30min";
const AUDITORIA_URL = "https://pilar-belena-seo-fintech-lab.netlify.app/auditoria-seo-fintech";

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5">
    <rect x="2" y="2" width="20" height="20" rx="4" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="2"/>
    <path d="M7 12l3 3 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const AuditoriasIaFintechEficienciaEmbudo = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Featured image */}
        <section className="pt-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <img
                src={imgDestacada}
                alt="Auditorías IA Fintech 2026: detecta ineficiencias en tu embudo financiero - SEO Fintech Lab"
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
                  Auditoría IA & Embudo Fintech
                </strong>
                <span className="font-body text-xs text-foreground-muted">
                  8 de febrero de 2026
                </span>
                <span className="font-body text-xs text-foreground-muted">
                  6 min de lectura
                </span>
              </div>
              <h1 className="font-display text-4xl md:text-5xl leading-tight text-primary mb-8">
                Auditorías de IA FINTECH: Cómo detectar qué partes de tu embudo financiero están perdiendo eficiencia
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
                  Tu embudo financiero pierde entre un 20-40% de eficiencia por problemas invisibles que la IA detecta al instante. Desde <a href="/blog/sge-y-el-nuevo-orden-de-busqueda" className="text-primary hover:underline font-medium">SGE</a> hasta <a href="/blog/muerte-palabra-clave-transaccional-fintech" className="text-primary hover:underline font-medium">LLM</a>, las auditorías inteligentes encuentran dónde se escapa tu conversión orgánica sin violar el cumplimiento.
                </p>
                <p className="font-body text-lg text-foreground leading-relaxed">
                  <strong>¿Para quién?</strong> Directores Financieros y Growth Managers de Fintech B2B que necesitan datos precisos para priorizar.
                </p>
                <div className="bg-soft-pink rounded-lg p-5">
                  <p className="font-body text-foreground leading-relaxed">
                    Este artículo complementa <a href="/blog/sge-y-el-nuevo-orden-de-busqueda" className="text-primary hover:underline font-medium">cómo proteger tu tráfico de marca ante SGE</a> y <a href="/blog/muerte-palabra-clave-transaccional-fintech" className="text-primary hover:underline font-medium">el SEO de intención en la era LLM</a>.
                  </p>
                </div>
              </div>

              {/* Índice */}
              <div className="bg-soft-pink rounded-lg p-6">
                <p className="font-display text-lg text-primary mb-4">Índice de contenidos</p>
                <ol className="font-body text-foreground-muted space-y-2 list-decimal list-inside">
                  <li><a href="#por-que-fallan" className="hover:text-primary transition-colors">Por qué fallan los embudos Fintech</a></li>
                  <li><a href="#4-puntos" className="hover:text-primary transition-colors">Auditoría IA: 4 puntos críticos</a></li>
                  <li><a href="#tabla-ineficiencias" className="hover:text-primary transition-colors">Tabla ineficiencias por etapa</a></li>
                  <li><a href="#checklist" className="hover:text-primary transition-colors">Lista de verificación de auditoría rápida</a></li>
                  <li><a href="#cumplimiento" className="hover:text-primary transition-colors">Cumplimiento de SEO en auditorías</a></li>
                </ol>
              </div>

              {/* Sección 1: Por qué fallan */}
              <div id="por-que-fallan" className="space-y-6">
                <h2 className="font-display text-3xl text-primary">
                  Por qué fallan los embudos Fintech
                </h2>

                <div className="space-y-3">
                  <p className="font-body font-semibold text-foreground uppercase text-xs tracking-wider">Pérdidas típicas por etapa</p>
                  <div className="space-y-3">
                    <div className="border border-border rounded-lg p-5 bg-background">
                      <p className="font-body font-medium text-foreground mb-1">🔹 Conciencia (SGE)</p>
                      <p className="font-body text-sm text-foreground-muted">"fintech pagos B2B" → IA responde sin clic</p>
                    </div>
                    <div className="border border-border rounded-lg p-5 bg-background">
                      <p className="font-body font-medium text-foreground mb-1">🔹 Consideración (intención)</p>
                      <p className="font-body text-sm text-foreground-muted">"mejor confirming conforme" → Contenido genérico no convierte</p>
                    </div>
                    <div className="border border-border rounded-lg p-5 bg-background">
                      <p className="font-body font-medium text-foreground mb-1">🔹 Decisión (transaccional)</p>
                      <p className="font-body text-sm text-foreground-muted">"contratar escrow" → Fricción legal/UX frena</p>
                    </div>
                    <div className="border border-border rounded-lg p-5 bg-background">
                      <p className="font-body font-medium text-foreground mb-1">🔹 Fidelización</p>
                      <p className="font-body text-sm text-foreground-muted">Post-venta sin SEO de retención</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sección 2: 4 puntos críticos */}
              <div id="4-puntos" className="space-y-6">
                <h2 className="font-display text-3xl text-primary">
                  Auditoría IA: 4 Puntos Críticos
                </h2>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-secondary rounded-lg p-6">
                    <p className="font-display text-lg text-white mb-2">1. Fugas SGE (tráfico cero)</p>
                    <p className="font-body text-sm text-white/80">IA responde tus búsquedas de marca sin enviar clics</p>
                  </div>
                  <div className="bg-secondary rounded-lg p-6">
                    <p className="font-display text-lg text-white mb-2">2. Contenido sin intención</p>
                    <p className="font-body text-sm text-white/80">Páginas optimizadas para palabras clave muertas, sin problemas reales</p>
                  </div>
                  <div className="bg-secondary rounded-lg p-6">
                    <p className="font-display text-lg text-white mb-2">3. Fricción compatible</p>
                    <p className="font-body text-sm text-white/80">Microtextos legales que matan conversión</p>
                  </div>
                  <div className="bg-secondary rounded-lg p-6">
                    <p className="font-display text-lg text-white mb-2">4. Embudo sin datos</p>
                    <p className="font-body text-sm text-white/80">Sin seguimiento granular por etapa + fuente</p>
                  </div>
                </div>

                <p className="font-body text-foreground leading-relaxed">
                  El cumplimiento regulatorio y el rendimiento SEO no tienen por qué estar reñidos. En la sección de <a href="#cumplimiento" className="text-primary hover:underline font-medium">cumplimiento de SEO en auditorías</a> verás cómo integrar ambos sin sacrificar conversión.
                </p>

                {/* Imagen 5B */}
                <div>
                  <img
                    src={imgContenido}
                    alt="Auditoría IA Fintech: mapa de ineficiencias del embudo financiero"
                    className="w-full rounded-lg object-cover"
                  />
                  <p className="font-body text-sm text-foreground-muted text-center mt-3">
                    Mapa de ineficiencias del embudo financiero Fintech
                  </p>
                </div>
              </div>

              {/* Sección 3: Tabla ineficiencias */}
              <div id="tabla-ineficiencias" className="space-y-6">
                <h2 className="font-display text-3xl text-primary">
                  Tabla: Ineficiencias por etapa del embudo
                </h2>

                <div className="divide-y divide-border border border-border rounded-lg overflow-hidden">
                  <div className="grid grid-cols-4 bg-secondary px-4 py-3">
                    <span className="font-body text-xs font-semibold text-white uppercase tracking-wider">Etapa</span>
                    <span className="font-body text-xs font-semibold text-white uppercase tracking-wider">Problema IA</span>
                    <span className="font-body text-xs font-semibold text-white uppercase tracking-wider">Métrica clave</span>
                    <span className="font-body text-xs font-semibold text-white uppercase tracking-wider">Fix</span>
                  </div>
                  <div className="grid grid-cols-4 px-4 py-4 bg-background gap-3">
                    <span className="font-body text-sm text-foreground font-medium">🔹 Conciencia</span>
                    <span className="font-body text-sm text-foreground-muted">SGE canibaliza impresiones</span>
                    <span className="font-body text-sm text-foreground-muted">CTR marca &lt;3%</span>
                    <span className="font-body text-sm text-foreground-muted">Brand SEO + clústeres SGE</span>
                  </div>
                  <div className="grid grid-cols-4 px-4 py-4 bg-background gap-3">
                    <span className="font-body text-sm text-foreground font-medium">🔹 Consideración</span>
                    <span className="font-body text-sm text-foreground-muted">LLM responde sin clic</span>
                    <span className="font-body text-sm text-foreground-muted">Tasa rebote &gt;70%</span>
                    <span className="font-body text-sm text-foreground-muted">Contenido intención profunda</span>
                  </div>
                  <div className="grid grid-cols-4 px-4 py-4 bg-background gap-3">
                    <span className="font-body text-sm text-foreground font-medium">🔹 Decisión</span>
                    <span className="font-body text-sm text-foreground-muted">Fricción UX/legal</span>
                    <span className="font-body text-sm text-foreground-muted">Tasa microconv. &lt;15%</span>
                    <span className="font-body text-sm text-foreground-muted">Auditoría + A/B</span>
                  </div>
                  <div className="grid grid-cols-4 px-4 py-4 bg-background gap-3">
                    <span className="font-body text-sm text-foreground font-medium">🔹 Fidelización</span>
                    <span className="font-body text-sm text-foreground-muted">Sin retención orgánica</span>
                    <span className="font-body text-sm text-foreground-muted">Retorno orgánico &lt;20%</span>
                    <span className="font-body text-sm text-foreground-muted">SEO post-venta</span>
                  </div>
                </div>
              </div>

              {/* Sección 4: Checklist */}
              <div id="checklist" className="space-y-6">
                <h2 className="font-display text-3xl text-primary">
                  Checklist Auditoría IA Fintech (15 min)
                </h2>

                <div className="bg-soft-pink rounded-lg p-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckIcon />
                    <p className="font-body text-foreground">CTR marca en Search Console (&lt;3% = problema SGE)</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckIcon />
                    <p className="font-body text-foreground">Top 10 páginas: intención vs keywords</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckIcon />
                    <p className="font-body text-foreground">Tasa rebote &gt;70% en páginas transaccionales</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckIcon />
                    <p className="font-body text-foreground">Schema markup aplicado (FAQ/Producto)</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckIcon />
                    <p className="font-body text-foreground">Legal revisó top 5 páginas de conversiones</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckIcon />
                    <p className="font-body text-foreground">Tracking granular por etapa embudo</p>
                  </div>
                </div>

                <div className="bg-soft-pink rounded-lg p-6 flex items-start gap-4">
                  <span className="text-2xl">👉</span>
                  <p className="font-body text-foreground leading-relaxed">
                    <a href={AUDITORIA_URL} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">Auditoría SEO Fintech completa</a> para detectar las ineficiencias específicas de tu embudo.
                  </p>
                </div>
              </div>

              {/* Sección 5: Cumplimiento */}
              <div id="cumplimiento" className="space-y-6">
                <h2 className="font-display text-3xl text-primary">
                  Cumplimiento de SEO en auditorías IA
                </h2>

                <p className="font-body text-foreground leading-relaxed">
                  Reglas del laboratorio para integrar regulación y rendimiento sin sacrificar uno por el otro:
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckIcon />
                    <p className="font-body text-foreground">Revisión legal automática de reclamaciones sensibles</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckIcon />
                    <p className="font-body text-foreground">Schema de Producto Financiero sin promesas no verificables</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckIcon />
                    <p className="font-body text-foreground">Contenido CNMV/EBA alineado en clúster principal</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckIcon />
                    <p className="font-body text-foreground">Avisos legales optimizados en UX (no matan conversión)</p>
                  </div>
                </div>
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
              <div className="bg-soft-pink rounded-lg p-8">
                <h2 className="font-display text-3xl text-primary mb-6">
                  Conclusión
                </h2>
                <p className="font-body text-lg text-foreground leading-relaxed mb-4">
                  Las auditorías IA no son opcionales en Fintech 2026: son supervivencia. Detectan el 30% de ineficiencias que los humanos pasan por alto, manteniendo el 100% de cumplimiento. SEO Fintech Lab integra <a href="/blog/sge-y-el-nuevo-orden-de-busqueda" className="text-primary hover:underline font-medium">SGE</a>, <a href="/blog/muerte-palabra-clave-transaccional-fintech" className="text-primary hover:underline font-medium">intención LLM</a> y regulación en un diagnóstico que prioriza el ROI real.
                </p>
                <p className="font-display text-xl text-primary font-medium">
                  ¿Tu embudo financiero pierde eficiencia silenciosa?
                </p>
              </div>

              {/* CTA final Calendly */}
              <div className="bg-gradient-hero rounded-lg p-10 text-center">
                <h2 className="font-display text-3xl text-primary mb-4">
                  ¿Listo para auditar tu embudo Fintech con IA?
                </h2>
                <p className="font-body text-foreground-muted mb-8">
                  Reserva una sesión estratégica y detectamos juntos dónde pierde eficiencia tu embudo orgánico.
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

export default AuditoriasIaFintechEficienciaEmbudo;
