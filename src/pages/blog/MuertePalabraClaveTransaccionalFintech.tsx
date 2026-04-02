import imgDestacada from "@/assets/blog/articulo-4/4A.webp";
import imgContenido from "@/assets/blog/articulo-4/4b.webp";
import ArticleSeoHead from "@/components/ArticleSeoHead";
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

const MuertePalabraClaveTransaccionalFintech = () => {
  return (
    <div className="min-h-screen bg-background">
      <ArticleSeoHead
        title="La muerte de la palabra clave transaccional FINTECH: SEO de intención en la era de los LLM"
        description="Las palabras clave transaccionales mueren con LLM y SGE. Aprende SEO de intención para Fintech: protege conversiones ante la nueva búsqueda IA."
        slug="muerte-palabra-clave-transaccional-fintech"
        image={imgDestacada}
        datePublished="2026-01-27"
        category="Consultor SEO Fintech"
      />
      <Header />
      <main>
        {/* Featured image */}
        <section className="pt-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <img
                src={imgDestacada}
                alt="La muerte de la palabra clave transaccional Fintech - SEO de intención LLM 2026"
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
                  LLM & SEO de Intención
                </strong>
                <span className="font-body text-xs text-foreground-muted">
                  27 de enero de 2026
                </span>
                <span className="font-body text-xs text-foreground-muted">
                  7 min de lectura
                </span>
              </div>
              <h1 className="font-display text-4xl md:text-5xl leading-tight text-primary mb-8">
                La Muerte de la Palabra Clave Transaccional FINTECH: SEO de intención en la era de los LLM
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
                  Durante más de una década, el SEO se basó en una premisa simple: "si alguien busca 'comprar zapatillas', yo optimizo para esa frase". Pero en 2026, esa estrategia es insuficiente. Los Modelos de Lenguaje Extensos (LLM) han cambiado el "qué" buscamos por el "por qué" lo buscamos.
                </p>
                <p className="font-body text-lg text-foreground leading-relaxed">
                  Las palabras clave transaccionales ("contratar préstamo fintech", "abrir cuenta B2B") están muriendo. Los LLM como <a href="/blog/seo-e-ia" className="text-primary hover:underline font-medium">Google SGE</a> responden directamente sin clics, robando conversiones que antes capturaste en la página de resultados.
                </p>
                <p className="font-body text-lg text-foreground leading-relaxed">
                  <strong>¿Para quién?</strong> CMOs y Growth Leads de Fintechs B2B que ven caídas en leads orgánicos y quieren pivotar a SEO de intención antes de que sea tarde.
                </p>
                <div className="bg-soft-pink rounded-lg p-5">
                  <p className="font-body text-foreground leading-relaxed">
                    Si ya <a href="/blog/sge-y-el-nuevo-orden-de-busqueda" className="text-primary hover:underline font-medium">proteges tu tráfico de marca ante SGE</a>, ahora toca las conversiones.
                  </p>
                </div>
              </div>

              {/* Índice */}
              <div className="bg-soft-pink rounded-lg p-6">
                <p className="font-display text-lg text-primary mb-4">Índice de contenidos</p>
                <ol className="font-body text-foreground-muted space-y-2 list-decimal list-inside">
                  <li><a href="#por-que-mueren" className="hover:text-primary transition-colors">Por qué mueren las palabras clave transaccionales</a></li>
                  <li><a href="#nuevo-mapa" className="hover:text-primary transition-colors">SEO de intención: el nuevo mapa Fintech</a></li>
                  <li><a href="#tabla-intencion" className="hover:text-primary transition-colors">Tabla: intención vs. palabras clave tradicionales</a></li>
                  <li><a href="#acciones" className="hover:text-primary transition-colors">Acciones concretas para 2026</a></li>
                  <li><a href="#checklist" className="hover:text-primary transition-colors">Implementación de la lista de verificación</a></li>
                </ol>
              </div>

              {/* Sección 1: Por qué mueren */}
              <div id="por-que-mueren" className="space-y-6">
                <h2 className="font-display text-3xl text-primary">
                  Por qué mueren las palabras clave transaccionales
                </h2>
                <p className="font-body text-foreground leading-relaxed">
                  Los LLM entienden la <strong>intención profunda</strong>, no solo las palabras. Cuando alguien busca "fintech pagos B2B seguros", la IA ya sabe si quiere:
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-secondary rounded-lg p-5 text-center">
                    <p className="font-display text-lg text-white mb-1">Información</p>
                    <p className="font-body text-sm text-white/80">educativa</p>
                  </div>
                  <div className="bg-secondary rounded-lg p-5 text-center">
                    <p className="font-display text-lg text-white mb-1">Comparativa</p>
                    <p className="font-body text-sm text-white/80">decisión</p>
                  </div>
                  <div className="bg-secondary rounded-lg p-5 text-center">
                    <p className="font-display text-lg text-white mb-1">Acción</p>
                    <p className="font-body text-sm text-white/80">transaccional</p>
                  </div>
                </div>
                <p className="font-body text-foreground leading-relaxed">
                  <strong>Resultado:</strong> Tu página "contratar ahora" queda invisible si no responde la intención real del usuario.
                </p>

                {/* Muertes típicas */}
                <div className="space-y-3">
                  <p className="font-body font-semibold text-foreground uppercase text-xs tracking-wider">Muertes típicas en Fintech</p>
                  <div className="space-y-3">
                    <div className="border border-border rounded-lg p-5 bg-background">
                      <p className="font-body font-medium text-foreground mb-1">🔹 "Mejores préstamos fintech"</p>
                      <p className="font-body text-sm text-foreground-muted">→ SGE lista 3 opciones sin clic</p>
                    </div>
                    <div className="border border-border rounded-lg p-5 bg-background">
                      <p className="font-body font-medium text-foreground mb-1">🔹 "Comparador confirming"</p>
                      <p className="font-body text-sm text-foreground-muted">→ IA compara comisiones directamente</p>
                    </div>
                    <div className="border border-border rounded-lg p-5 bg-background">
                      <p className="font-body font-medium text-foreground mb-1">🔹 "Cuenta de depósito en garantía B2B"</p>
                      <p className="font-body text-sm text-foreground-muted">→ Respuesta sintética: pros/contras sin visitar</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sección 2: Nuevo mapa */}
              <div id="nuevo-mapa" className="space-y-6">
                <h2 className="font-display text-3xl text-primary">
                  SEO de intención: el nuevo mapa Fintech
                </h2>
                <p className="font-body text-foreground leading-relaxed">
                  Cambia de "qué buscan" a <strong>"qué necesitan resolver"</strong>. En Fintech, las intenciones giran en 4 ejes:
                </p>

                {/* Gráfico 4 intenciones */}
                <div className="bg-secondary rounded-lg p-6 space-y-3">
                  <p className="font-body text-xs font-semibold text-white/60 uppercase tracking-wider mb-4">4 intenciones críticas Fintech</p>
                  <div className="space-y-3 font-mono">
                    <div className="flex items-start gap-4">
                      <span className="font-body text-sm text-white/60 w-28 flex-shrink-0">NAVEGACIONAL</span>
                      <span className="font-body text-sm text-white">→ "Fintech [nombre]"</span>
                    </div>
                    <div className="flex items-start gap-4">
                      <span className="font-body text-sm text-white/60 w-28 flex-shrink-0">INFORMACIONAL</span>
                      <span className="font-body text-sm text-white">→ "Qué es confirming B2B"</span>
                    </div>
                    <div className="flex items-start gap-4">
                      <span className="font-body text-sm text-white/60 w-28 flex-shrink-0">COMPARATIVA</span>
                      <span className="font-body text-sm text-white">→ "Mejor plataforma pagos"</span>
                    </div>
                    <div className="flex items-start gap-4 border-t border-white/20 pt-3">
                      <span className="font-body text-sm text-white/60 w-28 flex-shrink-0">TRANSACCIONAL</span>
                      <div>
                        <span className="font-body text-sm text-white">→ "Reducir riesgo fraude"</span>
                        <span className="ml-2 font-body text-xs text-white/50">(← ANTES CLIC, AHORA RESPUESTA IA)</span>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="font-body text-foreground leading-relaxed">
                  <strong>Estrategia:</strong> Crear clústeres de intención que alimenten a la IA con respuestas completas.
                </p>

                {/* Imagen 4B */}
                <div>
                  <img
                    src={imgContenido}
                    alt="SEO de intención para Fintech - Mapa de intenciones LLM 2026"
                    className="w-full rounded-lg object-cover"
                  />
                  <p className="font-body text-sm text-foreground-muted text-center mt-3">
                    SEO de intención Fintech: del keyword al clúster de resolución
                  </p>
                </div>
              </div>

              {/* Sección 3: Tabla */}
              <div id="tabla-intencion" className="space-y-6">
                <h2 className="font-display text-3xl text-primary">
                  Palabras clave tradicionales vs. Intención LLM
                </h2>

                <div className="divide-y divide-border border border-border rounded-lg overflow-hidden">
                  <div className="grid grid-cols-3 bg-secondary px-4 py-3">
                    <span className="font-body text-xs font-semibold text-white uppercase tracking-wider">Palabra clave tradicional</span>
                    <span className="font-body text-xs font-semibold text-white uppercase tracking-wider">Intención real</span>
                    <span className="font-body text-xs font-semibold text-white uppercase tracking-wider">Nuevo enfoque</span>
                  </div>
                  <div className="grid grid-cols-3 px-4 py-5 bg-background gap-4">
                    <div>
                      <span className="font-body text-sm text-foreground-muted">🔹</span>
                      <p className="font-body text-sm text-foreground font-medium">"contratar préstamo fintech"</p>
                    </div>
                    <p className="font-body text-sm text-foreground-muted">"quiero financiación rápida sin riesgos regulatorios"</p>
                    <p className="font-body text-sm text-foreground-muted">Guía: "3 pasos evaluar préstamo compatible"</p>
                  </div>
                  <div className="grid grid-cols-3 px-4 py-5 bg-background gap-4">
                    <div>
                      <span className="font-body text-sm text-foreground-muted">🔹</span>
                      <p className="font-body text-sm text-foreground font-medium">"mejor cuenta B2B"</p>
                    </div>
                    <p className="font-body text-sm text-foreground-muted">"comisiones transparentes + integración API"</p>
                    <p className="font-body text-sm text-foreground-muted">Comparativa: "Cuentas B2B por caso de uso"</p>
                  </div>
                  <div className="grid grid-cols-3 px-4 py-5 bg-background gap-4">
                    <div>
                      <span className="font-body text-sm text-foreground-muted">🔹</span>
                      <p className="font-body text-sm text-foreground font-medium">"confirming fintech"</p>
                    </div>
                    <p className="font-body text-sm text-foreground-muted">"reducir DSO sin perder control cobros"</p>
                    <p className="font-body text-sm text-foreground-muted">Caso: "Confirming reducción DSO 45 días"</p>
                  </div>
                </div>

                <p className="font-body text-foreground leading-relaxed">
                  Antes de pasar a las acciones: <a href="/blog/sge-y-el-nuevo-orden-de-busqueda" className="text-primary hover:underline font-medium">protege tu marca ante SGE</a> para consolidar la base sobre la que construir tus clústeres de intención.
                </p>
              </div>

              {/* Sección 4: Acciones */}
              <div id="acciones" className="space-y-6">
                <h2 className="font-display text-3xl text-primary">
                  Acciones concretas para 2026
                </h2>

                <div className="space-y-6">
                  <div className="space-y-2">
                    <h3 className="font-display text-xl text-foreground">1. Mapea 10 intenciones core de clientes</h3>
                    <p className="font-body text-foreground leading-relaxed">
                      Habla con Ventas/CS: <em>"¿Qué duda resuelven antes de comprar?"</em>
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-display text-xl text-foreground">2. Reescribir las 5 páginas transaccionales principales</h3>
                    <p className="font-body text-foreground leading-relaxed">
                      De "contratar" → "evaluar + decidir + ejecutar conforme"
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-display text-xl text-foreground">3. Marcado de esquema de intención</h3>
                    <p className="font-body text-foreground leading-relaxed">
                      FAQSchema + HowToSchema + ProductSchema en cada clúster
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-display text-xl text-foreground">4. Contenido conversacional largo</h3>
                    <p className="font-body text-foreground leading-relaxed">
                      2.000+ palabras por intención principal, con datos Fintech reales
                    </p>
                  </div>
                </div>

                <div className="bg-soft-pink rounded-lg p-6 flex items-start gap-4">
                  <span className="text-2xl">👉</span>
                  <p className="font-body text-foreground leading-relaxed">
                    <a href={AUDITORIA_URL} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">Solicita tu auditoría SEO Fintech</a> para mapear tus intenciones perdidas.
                  </p>
                </div>
              </div>

              {/* Sección 5: Checklist */}
              <div id="checklist" className="space-y-6">
                <h2 className="font-display text-3xl text-primary">
                  Implementación de la lista de verificación
                </h2>

                <div className="bg-soft-pink rounded-lg p-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckIcon />
                    <p className="font-body text-foreground">10 intenciones principales mapeadas (Sales/CS)</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckIcon />
                    <p className="font-body text-foreground">Top 5 páginas transaccionales reescritas</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckIcon />
                    <p className="font-body text-foreground">Schema markup en páginas clave aplicado</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckIcon />
                    <p className="font-body text-foreground">3 clústeres conversacionales publicados</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckIcon />
                    <p className="font-body text-foreground">Test A/B: intención vs. keyword tradicional</p>
                  </div>
                </div>
              </div>

              {/* Conclusión */}
              <div className="bg-soft-pink rounded-lg p-8">
                <h2 className="font-display text-3xl text-primary mb-6">
                  Conclusión
                </h2>
                <p className="font-body text-lg text-foreground leading-relaxed mb-4">
                  Las palabras clave transaccionales no vuelven. El <a href="/blog/hoja-de-ruta-seo-fintech-lab" className="text-primary hover:underline font-medium">SEO Fintech exitoso 2026</a> anticipa intenciones antes que búsquedas. Las Fintech que pivotan ahora capturarán el 70% del tráfico que otros pierden ante LLM.
                </p>
                <p className="font-display text-xl text-primary font-medium">
                  ¿Tu embudo orgánico resiste la era de la intención?
                </p>
              </div>

              {/* CTA final Calendly */}
              <div className="bg-gradient-hero rounded-lg p-10 text-center">
                <h2 className="font-display text-3xl text-primary mb-4">
                  ¿Listo para pivotar al SEO de intención en tu Fintech?
                </h2>
                <p className="font-body text-foreground-muted mb-8">
                  Reserva una sesión estratégica y auditamos juntos las intenciones que estás perdiendo ante los LLM.
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

export default MuertePalabraClaveTransaccionalFintech;
