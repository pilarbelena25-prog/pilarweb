import imgDestacada from "@/assets/blog/articulo-12/12A.png";
import imgContenido from "@/assets/blog/articulo-12/12B.png";
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

const AtribucionDarkSocialFintechRealEstate = () => {
  return (
    <div className="min-h-screen bg-background">
      <ArticleSeoHead
        title="12. Atribución en la era del Dark Social para Fintech & Inversión Inmobiliaria: ¿Realmente sabes de dónde vienen tus Leads Financieros y de Propiedades?"
        description="En Fintech y en Inversión Inmobiliaria, gran parte de la conversación comercial ya no ocurre en el analytics clásico. Aprende a dominar la atribución en la era del Dark Social."
        slug="atribucion-dark-social-fintech-real-estate"
        image={imgDestacada}
        datePublished="2026-06-08"
        category="SEO para Empresas Fintech & Real Estate"
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
                alt="Atribución en la era del Dark Social para Fintech & Inversión Inmobiliaria - SEO Fintech Lab"
                className="w-full rounded-lg object-cover"
              />
              <p className="font-body text-sm text-foreground-muted text-center mt-3">
                Pilar Beleña - Consultora SEO Fintech & Real Estate
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
                  SEO para Empresas Fintech &amp; Real Estate
                </strong>
                <span className="font-body text-xs text-foreground-muted">
                  8 de junio de 2026
                </span>
                <span className="font-body text-xs text-foreground-muted">
                  7 min de lectura
                </span>
              </div>
              <h1 className="font-display text-4xl md:text-5xl leading-tight text-primary mb-8">
                12. Atribución en la era del Dark Social para Fintech &amp; Inversión Inmobiliaria: ¿Realmente sabes de dónde vienen tus Leads Financieros y de Propiedades?
              </h1>
              <p className="font-body text-sm text-foreground-muted mb-2">
                María Pilar Beleña Gasent
              </p>
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
                  En Fintech y en Inversión Inmobiliaria, gran parte de la conversación comercial ya no ocurre donde el analytics clásico la puede ver. La gente comparte enlaces por WhatsApp, Telegram, email, notas privadas o mensajes directos, y ese recorrido termina influyendo en leads que parecen venir de “directo” o de canales poco claros. A ese ecosistema se le suele llamar <strong>Dark Social</strong>, y obliga a repensar la atribución con más criterio y menos fe ciega en el último clic.
                </p>
                <div className="bg-soft-pink rounded-lg p-5">
                  <p className="font-body text-foreground leading-relaxed italic">
                    El problema no es solo técnico. También es Estratégico: si no sabes qué contenidos, páginas y temas activan la conversación real, puedes invertir en tráfico que no convierte o infravalorar piezas que sí empujan decisiones de alto valor.
                  </p>
                </div>
              </div>

              {/* Índice */}
              <div className="bg-soft-pink rounded-lg p-6">
                <p className="font-display text-lg text-primary mb-4">Índice de contenidos</p>
                <ol className="font-body text-foreground-muted space-y-2 list-decimal list-inside">
                  <li><a href="#que-es-dark-social" className="hover:text-primary transition-colors">Qué es Dark Social en este contexto</a></li>
                  <li><a href="#por-que-afecta-mas" className="hover:text-primary transition-colors">Por qué afecta más a Fintech y Real Estate</a></li>
                  <li><a href="#error-ultimo-toque" className="hover:text-primary transition-colors">El Error más común: medir solo el último toque</a></li>
                  <li><a href="#senales-atribuir" className="hover:text-primary transition-colors">Tabla: señales útiles para atribuir mejor</a></li>
                  <li><a href="#atribucion-realista" className="hover:text-primary transition-colors">Cómo trabajar una atribución más realista</a></li>
                  <li><a href="#arquitectura-contenidos" className="hover:text-primary transition-colors">La Arquitectura de contenidos también atribuye</a></li>
                  <li><a href="#conclusion" className="hover:text-primary transition-colors">Conclusión</a></li>
                </ol>
              </div>

              {/* Sección 1: Qué es Dark Social */}
              <div id="que-es-dark-social" className="space-y-6">
                <h2 className="font-display text-3xl text-primary">
                  Qué es Dark Social en este contexto
                </h2>
                <p className="font-body text-foreground leading-relaxed">
                  <strong>Dark Social</strong> es el tráfico o la difusión de contenido que no se rastrea de forma limpia en herramientas estándar. Ocurre cuando alguien copia una URL y la envía por un canal privado, cuando un lead llega tras varias conversaciones fuera del sitio, o cuando una recomendación viaja por comunidades cerradas.
                </p>
                <p className="font-body text-foreground leading-relaxed">
                  En sectores regulados o de alta implicación económica, esto es todavía más habitual porque la decisión se cocina durante más tiempo y en más puntos de contacto.
                </p>
              </div>

              {/* Sección 2: Por qué afecta más a Fintech y Real Estate */}
              <div id="por-que-afecta-mas" className="space-y-6">
                <h2 className="font-display text-3xl text-primary">
                  Por qué afecta más a Fintech y Real Estate
                </h2>
                <p className="font-body text-foreground leading-relaxed">
                  En ambos sectores, la confianza pesa tanto como la intención. Antes de pedir información, una persona suele leer, comparar, preguntar y validar con terceros; muchas de esas interacciones no dejan una huella visible en el panel de analítica. Por eso, el dato aislado de origen puede ser insuficiente para entender qué está funcionando de verdad.
                </p>
              </div>

              {/* Sección 3: El Error más común */}
              <div id="error-ultimo-toque" className="space-y-6">
                <h2 className="font-display text-3xl text-primary">
                  El Error más común: medir solo el último toque
                </h2>
                <p className="font-body text-foreground leading-relaxed">
                  Muchas marcas celebran un formulario completado y lo asignan al canal que aparece en la última sesión. Ese enfoque simplifica la realidad y distorsiona la inversión. Un artículo puede haber creado confianza una semana antes, una landing puede haber resuelto objeciones y una conversación privada puede haber cerrado la decisión; si solo miras el último clic, ves una foto incompleta.
                </p>
                <div className="bg-soft-pink rounded-lg p-5">
                  <p className="font-body font-semibold text-primary mb-3">Lo que sí conviene observar:</p>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckIcon />
                      <p className="font-body text-foreground">Páginas de entrada con alto tiempo de lectura.</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckIcon />
                      <p className="font-body text-foreground">Contenido que genera compartidos indirectos.</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckIcon />
                      <p className="font-body text-foreground">Rutas con múltiples visitas antes de convertir.</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckIcon />
                      <p className="font-body text-foreground">Páginas de confianza: about, legal, equipo, casos y contacto.</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckIcon />
                      <p className="font-body text-foreground">Contenido que abre conversaciones en canales cerrados.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sección 4: Tabla: señales útiles */}
              <div id="senales-atribuir" className="space-y-6">
                <h2 className="font-display text-3xl text-primary">
                  Tabla: señales útiles para atribuir mejor
                </h2>
                <div className="overflow-x-auto pb-2 [&::-webkit-scrollbar]:h-3 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-secondary/70">
                  <div className="divide-y divide-border border border-border rounded-lg overflow-hidden min-w-[600px]">
                    <div className="grid grid-cols-3 bg-secondary px-4 py-3">
                      <span className="font-body text-xs font-semibold text-white uppercase tracking-wider">Señal</span>
                      <span className="font-body text-xs font-semibold text-white uppercase tracking-wider">Qué indica</span>
                      <span className="font-body text-xs font-semibold text-white uppercase tracking-wider">Qué conviene hacer</span>
                    </div>
                    {[
                      ["Direct alto", "Posible Dark Social", "Revisar páginas que se comparten más"],
                      ["Sesiones largas", "Interés real", "Analizar contenidos de apoyo"],
                      ["Repetición de visitas", "Ciclo de consideración", "Medir asistencia al cierre"],
                      ["Tráfico a páginas de confianza", "Validación previa", "Fortalecer about, legal y equipo"],
                      ["Conversión asistida", "Influencia indirecta", "No atribuir sólo al último clic"],
                    ].map(([senal, indica, conviene]) => (
                      <div key={senal} className="grid grid-cols-3 px-4 py-4 bg-background gap-3">
                        <span className="font-body text-sm text-foreground font-medium">{senal}</span>
                        <span className="font-body text-sm text-foreground-muted">{indica}</span>
                        <span className="font-body text-sm text-foreground-muted">{conviene}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <p className="font-body text-xs text-foreground-muted text-center mt-1 sm:hidden">← Desliza para ver más →</p>
              </div>

              {/* Sección 5: Cómo trabajar una atribución más realista */}
              <div id="atribucion-realista" className="space-y-6">
                <h2 className="font-display text-3xl text-primary">
                  Cómo trabajar una atribución más realista
                </h2>
                <p className="font-body text-foreground leading-relaxed">
                  La clave no es eliminar el Dark Social, sino aceptarlo como parte del proceso. Para ello, conviene combinar analítica web, CRM, UTMs bien definidos, encuestas de origen y lectura cualitativa de las conversaciones comerciales. Cuando alguien dice “te encontré por recomendación” o “te vi en un artículo que me pasó un colega”, ese dato importa más de lo que parece.
                </p>

                <div className="bg-soft-pink rounded-lg p-5">
                  <p className="font-body font-semibold text-primary mb-3">Buenas Prácticas mínimas:</p>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckIcon />
                      <p className="font-body text-foreground">Etiquetar campañas con disciplina.</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckIcon />
                      <p className="font-body text-foreground">Separar tráfico de marca y tráfico de demanda.</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckIcon />
                      <p className="font-body text-foreground">Revisar conversiones asistidas, no sólo directas.</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckIcon />
                      <p className="font-body text-foreground">Mapear las páginas que más ayudan a cerrar.</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckIcon />
                      <p className="font-body text-foreground">Preguntarle al lead cómo llegó realmente.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sección 6: La Arquitectura de contenidos también atribuye */}
              <div id="arquitectura-contenidos" className="space-y-6">
                <h2 className="font-display text-3xl text-primary">
                  La Arquitectura de contenidos también atribuye
                </h2>
                <p className="font-body text-foreground leading-relaxed">
                  No todo el mérito está en los anuncios o en el tráfico orgánico. La forma en que conectas artículos, páginas de servicio, activos descargables y páginas de confianza ayuda a que el usuario avance sin fricción. En nichos complejos, una estructura clara reduce dudas y acelera la decisión, incluso cuando la visita final llega desde un canal invisible.
                </p>

                {/* IMAGEN 12B */}
                <div className="my-8">
                  <LazyImage
                    src={imgContenido}
                    alt="Atribución de canales e influencia del Dark Social - SEO Fintech Lab"
                    className="w-full rounded-lg object-cover"
                  />
                  <p className="font-body text-sm text-foreground-muted text-center mt-3">
                    Ecosistema de atribución del Dark Social: Canales visibles vs. invisibles
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
                  Conclusión
                </h2>
                <p className="font-body text-lg text-foreground leading-relaxed">
                  En la era del Dark Social, la atribución perfecta no existe, pero sí existe una atribución mucho más útil. Si te limitas a mirar lo visible, vas a tomar decisiones con una parte pequeña de la historia. Si combinas datos, contexto y conversación real, entenderás mejor qué contenidos generan negocio y qué piezas solo acumulan tráfico.
                </p>
                <p className="font-body text-lg text-foreground leading-relaxed font-semibold">
                  La pregunta correcta ya no es solo “¿de dónde viene el lead?”, sino “¿qué ha influido de verdad en su decisión?”.
                </p>
                <div className="pt-4 border-t border-primary/20 space-y-4">
                  <h3 className="font-display text-xl text-primary font-semibold">
                    Llamada a la acción
                  </h3>
                  <p className="font-body text-foreground leading-relaxed">
                    Si trabajas en la familia <strong>SEO para Empresas Fintech &amp; Real Estate</strong>, este artículo encaja con tu blog porque aborda atribución, analítica, confianza y contenido en sectores complejos. Revisa tus rutas de conversión, identifica qué páginas sostienen la decisión y ajusta tu arquitectura para captar leads con más claridad y menos ruido.
                  </p>
                </div>
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
                  ¿Quieres mejorar la atribución de tus leads financieros?
                </h2>
                <p className="font-body text-foreground-muted mb-8">
                  Analizamos tus canales reales, identificamos la influencia del Dark Social en tus cierres de negocio y diseñamos una estrategia de contenido y conversión adaptada a tus inversores.
                </p>
                <Button variant="hero" size="xl" className="whitespace-normal h-auto py-4" asChild>
                  <a href={CALENDAR_URL} target="_blank" rel="noopener noreferrer">
                    Reserva tu sesión de diagnóstico
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

export default AtribucionDarkSocialFintechRealEstate;
