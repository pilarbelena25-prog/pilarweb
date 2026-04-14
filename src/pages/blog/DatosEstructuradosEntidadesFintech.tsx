import imgDestacada from "@/assets/blog/articulo-8/8A.webp";
import imgContenido from "@/assets/blog/articulo-8/8B.webp";
import ArticleSeoHead from "@/components/ArticleSeoHead";
import { Button } from "@/components/ui/button";
import GuiaGptModal from "@/components/sections/GuiaGptModal";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { LazyImage } from "@/components/ui/LazyImage";

const CALENDAR_URL = "https://calendly.com/pilarbelena25/30min";
const AUDITORIA_URL = "https://pilar-belena-seo-fintech-lab.netlify.app/auditoria-seo-fintech";

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5">
    <rect x="2" y="2" width="20" height="20" rx="4" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="2"/>
    <path d="M7 12l3 3 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const DatosEstructuradosEntidadesFintech = () => {
  return (
    <div className="min-h-screen bg-background">
      <ArticleSeoHead
        title="Datos Estructurados y Entidades Fintech: La verdadera forma en que la IA entiende tu Marca Financiera"
        description="Cuando la IA no tiene claro quién es tu Fintech, mezcla tu marca con otras similares. Los datos estructurados y entidades son la solución para que Google y los LLM te identifiquen correctamente."
        slug="datos-estructurados-entidades-fintech"
        image={imgDestacada}
        datePublished="2026-03-27"
        category="SEO para Empresas Financieras"
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
                alt="Datos Estructurados y Entidades Fintech: cómo la IA entiende tu marca financiera - SEO Fintech Lab"
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
                  Datos Estructurados & SEO Fintech
                </strong>
                <span className="font-body text-xs text-foreground-muted">
                  27 de marzo de 2026
                </span>
                <span className="font-body text-xs text-foreground-muted">
                  7 min de lectura
                </span>
              </div>
              <h1 className="font-display text-4xl md:text-5xl leading-tight text-primary mb-8">
                Datos Estructurados y Entidades Fintech: La verdadera forma en que la IA entiende tu Marca Financiera
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
                  La primera vez que una <strong>Fintech</strong> llegó al <strong>Lab</strong> con "problemas de visibilidad", juraba que era cosa de palabras clave. Tenían artículos, notas de prensa, un blog activo… pero cuando buscabas el nombre de la marca, Google mezclaba resultados antiguos, fichas sin logo y hasta confundía la empresa con otra casi igual. No era un problema de contenidos: era un problema de <strong>identidad digital</strong>. La <strong>IA</strong> simplemente no tenía claro quién era esa Fintech. Ahí entran en juego los <strong>Datos Estructurados</strong> y las <strong>Entidades</strong>.
                </p>
              </div>

              {/* Índice */}
              <div className="bg-soft-pink rounded-lg p-6">
                <p className="font-display text-lg text-primary mb-4">Índice de contenidos</p>
                <ol className="font-body text-foreground-muted space-y-2 list-decimal list-inside">
                  <li><a href="#de-palabras-a-entidades" className="hover:text-primary transition-colors">De palabras sueltas a Entidades Claras</a></li>
                  <li><a href="#tabla-ia" className="hover:text-primary transition-colors">Tabla rápida: cómo te ve la IA</a></li>
                  <li><a href="#entidades-fintech" className="hover:text-primary transition-colors">Entidades Fintech: más allá del Logo</a></li>
                  <li><a href="#ejemplo-real" className="hover:text-primary transition-colors">Un Ejemplo Real</a></li>
                  <li><a href="#tablas-o-historias" className="hover:text-primary transition-colors">¿Tablas o Historias? Tu usuario quiere Ambas</a></li>
                  <li><a href="#checklist" className="hover:text-primary transition-colors">Pequeño Checklist para empezar</a></li>
                  <li><a href="#conclusion" className="hover:text-primary transition-colors">Conclusión</a></li>
                </ol>
              </div>

              {/* Sección 1 */}
              <div id="de-palabras-a-entidades" className="space-y-6">
                <h2 className="font-display text-3xl text-primary">
                  De palabras sueltas a Entidades Claras
                </h2>

                <p className="font-body text-foreground leading-relaxed">
                  Para un humano, "plataforma de pagos B2B regulada en la UE" es una frase normal. Para un buscador, son señales que necesita ordenar:
                </p>

                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckIcon />
                    <p className="font-body text-foreground">¿Es una empresa concreta?</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckIcon />
                    <p className="font-body text-foreground">¿En qué país opera?</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckIcon />
                    <p className="font-body text-foreground">¿Qué <strong>producto financiero</strong> ofrece?</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckIcon />
                    <p className="font-body text-foreground">¿Está asociada a alguna <strong>normativa</strong> específica?</p>
                  </div>
                </div>

                <p className="font-body text-foreground leading-relaxed">
                  Cuando no marcas correctamente estas piezas, los modelos de IA hacen lo que pueden: adivinan. Y cuando adivinan, tu marca se diluye entre miles de resultados parecidos. Los Datos Estructurados (schema.org) son la forma de decirle a la máquina: "Esto es una <strong>entidad</strong> real, con nombre, contexto y <strong>sector financiero</strong>".
                </p>

                <div className="bg-soft-pink rounded-lg p-5">
                  <p className="font-body text-foreground leading-relaxed">
                    Si quieres entender cómo la SGE afecta directamente a la visibilidad de tu marca, lee{" "}
                    <a href="/blog/sge-y-el-nuevo-orden-de-busqueda" className="text-primary hover:underline font-medium">
                      SGE y el nuevo orden de búsqueda Fintech
                    </a>.
                  </p>
                </div>
              </div>

              {/* Sección 2: Tabla */}
              <div id="tabla-ia" className="space-y-6">
                <h2 className="font-display text-3xl text-primary">
                  Tabla rápida: cómo te ve la IA
                </h2>

                <div className="overflow-x-auto pb-2 [&::-webkit-scrollbar]:h-3 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-secondary/70">
                  <div className="divide-y divide-border border border-border rounded-lg overflow-hidden min-w-[560px]">
                    <div className="grid grid-cols-3 bg-secondary px-4 py-3">
                      <span className="font-body text-xs font-semibold text-white uppercase tracking-wider">Situación</span>
                      <span className="font-body text-xs font-semibold text-white uppercase tracking-wider">Lo que ve la IA</span>
                      <span className="font-body text-xs font-semibold text-white uppercase tracking-wider">Riesgo principal</span>
                    </div>
                    <div className="grid grid-cols-3 px-4 py-4 bg-background gap-3">
                      <span className="font-body text-sm text-foreground font-medium">Sin datos estructurados</span>
                      <span className="font-body text-sm text-foreground-muted">Texto suelto y genérico</span>
                      <span className="font-body text-sm text-foreground-muted">Te mezcla con otras Fintech similares</span>
                    </div>
                    <div className="grid grid-cols-3 px-4 py-4 bg-background gap-3">
                      <span className="font-body text-sm text-foreground font-medium">Con schema básico mal configurado</span>
                      <span className="font-body text-sm text-foreground-muted">Campos incompletos o ambiguos</span>
                      <span className="font-body text-sm text-foreground-muted">Resúmenes erróneos en SGE y paneles IA</span>
                    </div>
                    <div className="grid grid-cols-3 px-4 py-4 bg-background gap-3">
                      <span className="font-body text-sm text-foreground font-medium">Con entidades bien marcadas</span>
                      <span className="font-body text-sm text-foreground-muted">Marca + producto + sector claros</span>
                      <span className="font-body text-sm text-foreground-muted">Mayor probabilidad de ser "referencia"</span>
                    </div>
                  </div>
                </div>
                <p className="font-body text-xs text-foreground-muted text-center mt-1 sm:hidden">← Desliza para ver más →</p>
              </div>

              {/* Sección 3 */}
              <div id="entidades-fintech" className="space-y-6">
                <h2 className="font-display text-3xl text-primary">
                  Entidades Fintech: más allá del logo
                </h2>

                <p className="font-body text-foreground leading-relaxed">
                  En Fintech no basta con decir "somos una app de pagos". Para la IA, tu marca es un nodo dentro de una red de conceptos: bancos, reguladores, licencias, mercados, socios.
                </p>

                <p className="font-body text-foreground leading-relaxed">
                  Al trabajar con clientes del <strong>Lab</strong>, solemos empezar por algo tan simple como este mapa de entidades:
                </p>

                <div className="space-y-3">
                  <div className="border border-border rounded-lg p-5 bg-background">
                    <p className="font-body font-medium text-foreground mb-1">🔹 Entidad marca</p>
                    <p className="font-body text-sm text-foreground-muted">Nombre legal + nombre comercial</p>
                  </div>
                  <div className="border border-border rounded-lg p-5 bg-background">
                    <p className="font-body font-medium text-foreground mb-1">🔹 Sector</p>
                    <p className="font-body text-sm text-foreground-muted"><strong>Fintech</strong>, <strong>Banca Digital</strong>, <strong>Pagos B2B</strong>, <strong>Préstamos</strong>, <strong>Insurtech</strong></p>
                  </div>
                  <div className="border border-border rounded-lg p-5 bg-background">
                    <p className="font-body font-medium text-foreground mb-1">🔹 Regulación asociada</p>
                    <p className="font-body text-sm text-foreground-muted"><strong>PSD2</strong>, <strong>RGPD</strong>, normativas locales</p>
                  </div>
                  <div className="border border-border rounded-lg p-5 bg-background">
                    <p className="font-body font-medium text-foreground mb-1">🔹 Productos concretos</p>
                    <p className="font-body text-sm text-foreground-muted">"plataforma de pagos B2B", "confirming digital", "cuentas escrow"</p>
                  </div>
                  <div className="border border-border rounded-lg p-5 bg-background">
                    <p className="font-body font-medium text-foreground mb-1">🔹 Relaciones clave</p>
                    <p className="font-body text-sm text-foreground-muted"><strong>Socios bancarios</strong>, <strong>certificaciones</strong>, <strong>asociaciones</strong></p>
                  </div>
                </div>

                <p className="font-body text-foreground leading-relaxed">
                  Cuando ese mapa se refleja en tu web con datos estructurados, pasas de ser "otra web financiera" a una pieza clara del gráfico de conocimiento. Y ahí es donde{" "}
                  <a href="/blog/sge-y-el-nuevo-orden-de-busqueda" className="text-primary hover:underline font-medium">
                    la SGE y otros LLM
                  </a>{" "}
                  empiezan a citarte.
                </p>
              </div>

              {/* Sección 4: Ejemplo Real */}
              <div id="ejemplo-real" className="space-y-6">
                <h2 className="font-display text-3xl text-primary">
                  Un Ejemplo Real (simplificado)
                </h2>

                <p className="font-body text-foreground leading-relaxed">
                  Imagina una Fintech de pagos B2B que solo tiene una página "Quiénes somos" genérica. Después de una{" "}
                  <a href={AUDITORIA_URL} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">
                    Auditoría SEO Fintech
                  </a>
                  , hacemos tres movimientos:
                </p>

                <div className="space-y-6">
                  <div className="space-y-3">
                    <h3 className="font-display text-xl text-foreground">
                      1. Añadimos schema de Organization con:
                    </h3>
                    <div className="space-y-2 pl-4">
                      <div className="flex items-start gap-3">
                        <CheckIcon />
                        <p className="font-body text-foreground">Nombre legal y comercial</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckIcon />
                        <p className="font-body text-foreground">Logo</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckIcon />
                        <p className="font-body text-foreground">País</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckIcon />
                        <p className="font-body text-foreground">URLs oficiales de redes</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h3 className="font-display text-xl text-foreground">
                      2. Marcamos las páginas de soluciones con schema de Product/Service, incluyendo:
                    </h3>
                    <div className="space-y-2 pl-4">
                      <div className="flex items-start gap-3">
                        <CheckIcon />
                        <p className="font-body text-foreground">Tipo de producto ("Plataforma de Pagos B2B")</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckIcon />
                        <p className="font-body text-foreground">Público objetivo ("empresas medianas")</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckIcon />
                        <p className="font-body text-foreground">Referencias a certificaciones y regulaciones relevantes</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h3 className="font-display text-xl text-foreground">
                      3. Conectamos contenidos del blog con esas entidades mediante{" "}
                      <a href="/blog/contenido-masivo-fintech-mito" className="text-primary hover:underline font-medium">
                        enlaces internos coherentes
                      </a>.
                    </h3>
                  </div>
                </div>

                {/* Imagen 8B */}
                <div>
                  <LazyImage
                    src={imgContenido}
                    alt="Ejemplo de mapa de entidades Fintech con datos estructurados - SEO Fintech Lab 2026"
                    className="w-full rounded-lg object-cover"
                  />
                  <p className="font-body text-sm text-foreground-muted text-center mt-3">
                    Mapa de entidades Fintech: cómo conectar marca, sector y regulación para la IA
                  </p>
                </div>

                <p className="font-body font-semibold text-foreground uppercase text-xs tracking-wider">Resultado al cabo de unos meses:</p>

                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckIcon />
                    <p className="font-body text-foreground">El panel de conocimiento empieza a mostrar el logo correcto.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckIcon />
                    <p className="font-body text-foreground">La SGE utiliza textos de la propia web para describir la empresa.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckIcon />
                    <p className="font-body text-foreground">Cuando se busca "pagos B2B seguros + país", la marca aparece con mucha más frecuencia en contextos relevantes.</p>
                  </div>
                </div>

                <div className="bg-soft-pink rounded-lg p-5">
                  <p className="font-body text-foreground leading-relaxed">
                    No fue magia. Fue hacerle fácil a la <strong>IA</strong> entender quién es quién.
                  </p>
                </div>
              </div>

              {/* Sección 5 */}
              <div id="tablas-o-historias" className="space-y-6">
                <h2 className="font-display text-3xl text-primary">
                  ¿Tablas o Historias? Tu usuario quiere Ambas
                </h2>

                <p className="font-body text-foreground leading-relaxed">
                  Los <strong>equipos de marketing</strong> a veces piensan que los datos estructurados son "solo cosa técnica". Pero, si lo piensas, son el puente entre tu narrativa de marca y cómo la máquina la puede representar.
                </p>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-secondary rounded-lg p-6">
                    <p className="font-display text-lg text-white mb-2">El copy</p>
                    <p className="font-body text-sm text-white/80">Cuenta la historia de tu marca con claridad y autoridad.</p>
                  </div>
                  <div className="bg-secondary rounded-lg p-6">
                    <p className="font-display text-lg text-white mb-2">Los datos estructurados</p>
                    <p className="font-body text-sm text-white/80">La convierten en hechos legibles por la IA.</p>
                  </div>
                </div>

                <p className="font-body text-foreground leading-relaxed">
                  En otras palabras: puedes tener el mejor <strong>storytelling</strong> del sector, pero si no marcas tus <strong>entidades</strong>, seguirás siendo un párrafo más en medio del ruido. Aprende más sobre cómo{" "}
                  <a href="/blog/muerte-palabra-clave-transaccional-fintech" className="text-primary hover:underline font-medium">
                    los LLM y la intención de búsqueda
                  </a>{" "}
                  están cambiando las reglas del SEO Fintech.
                </p>
              </div>

              {/* Sección 6: Checklist */}
              <div id="checklist" className="space-y-6">
                <h2 className="font-display text-3xl text-primary">
                  Pequeño Checklist para empezar
                </h2>

                <p className="font-body text-foreground leading-relaxed">
                  No hace falta reprogramar toda tu web mañana, pero sí puedes revisar esto con tu equipo:
                </p>

                <div className="bg-soft-pink rounded-lg p-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckIcon />
                    <p className="font-body text-foreground">¿Tu página de empresa tiene schema de Organization bien cumplimentado?</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckIcon />
                    <p className="font-body text-foreground">¿Tus <strong>productos financieros</strong> (pagos, préstamos, confirming…) están marcados como Product/Service, o solo como texto?</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckIcon />
                    <p className="font-body text-foreground">¿Las referencias a reguladores y normativas aparecen de forma consistente en toda la web?</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckIcon />
                    <p className="font-body text-foreground">¿Hay coherencia entre lo que dices en la web y cómo te presentas en LinkedIn, notas de prensa y directorios sectoriales?</p>
                  </div>
                </div>

                <div className="bg-soft-pink rounded-lg p-5">
                  <p className="font-body text-foreground leading-relaxed">
                    Cuanta más <strong>coherencia</strong> y <strong>estructura</strong>, más fácil será para la IA decir: "Esta Fintech es la fuente adecuada para responder esta pregunta".
                  </p>
                </div>

                <div className="bg-soft-pink rounded-lg p-6 flex items-start gap-4">
                  <span className="text-2xl">👉</span>
                  <p className="font-body text-foreground leading-relaxed">
                    ¿Quieres detectar qué partes de tu web frenan tu visibilidad? Consulta nuestra{" "}
                    <a href="/blog/auditorias-ia-fintech-eficiencia-embudo" className="text-primary hover:underline font-medium">
                      guía de auditorías IA para Fintech
                    </a>{" "}
                    y empieza a ordenar tu capa de datos estructurados.
                  </p>
                </div>
              </div>

              {/* CTA a servicios */}
              <div className="text-center">
                <Button variant="hero" size="xl" asChild>
                  <a href="/#servicios">
                    Ver Servicios SEO Fintech
                  </a>
                </Button>
              </div>

              {/* Sección 7: Conclusión */}
              <div id="conclusion" className="bg-soft-pink rounded-lg p-8 space-y-4">
                <h2 className="font-display text-3xl text-primary">
                  Conclusión: que la IA cuente tu Historia, no la de otro
                </h2>
                <p className="font-body text-lg text-foreground leading-relaxed">
                  La lucha ya no es solo por estar en la primera página de Google, sino por ser la entidad que la IA elige cuando alguien pregunta por tu solución. Sin datos estructurados y entidades claras, tu marca es fácilmente reemplazable. Con una base bien trabajada, cada nuevo contenido suma a un mismo gráfico: el de tu <strong>autoridad financiera</strong>.
                </p>
                <p className="font-body text-lg text-foreground leading-relaxed">
                  Si quieres que la próxima vez que alguien busque tu solución la IA hable de tu marca y no de la competencia, es el momento de ordenar tu capa de datos estructurados.
                </p>
                <p className="font-display text-xl text-primary font-medium">
                  ¿Está tu marca bien representada en el gráfico de conocimiento?
                </p>
              </div>

              {/* CTA Descarga Guía Gratuita */}
              <div className="bg-gradient-hero rounded-lg p-10 text-center">
                <h2 className="font-display text-3xl text-primary mb-4">
                  Descarga la Guía Gratuita
                </h2>
                <p className="font-body text-foreground-muted mb-8">
                  Aprende a integrar Agentes GPT en tu estrategia SEO Fintech. Una guía paso a paso pensada para profesionales del sector financiero.
                </p>
                <GuiaGptModal>
                  <Button variant="hero" size="xl">
                    Descargar guía IA gratuita
                  </Button>
                </GuiaGptModal>
              </div>

              {/* CTA final Calendly */}
              <div className="bg-gradient-hero rounded-lg p-10 text-center">
                <h2 className="font-display text-3xl text-primary mb-4">
                  ¿Listo para que la IA identifique tu Marca Financiera?
                </h2>
                <p className="font-body text-foreground-muted mb-8">
                  Analizamos tu capa de datos estructurados y diseñamos el mapa de entidades que necesita tu Fintech para destacar en SGE y LLM.
                </p>
                <Button variant="hero" size="xl" className="whitespace-normal h-auto py-4" asChild>
                  <a href={CALENDAR_URL} target="_blank" rel="noopener noreferrer">
                    Hablemos de tu Estrategia de Datos Estructurados
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

export default DatosEstructuradosEntidadesFintech;
