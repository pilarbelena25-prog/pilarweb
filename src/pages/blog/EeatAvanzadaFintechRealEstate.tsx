import imgDestacada from "@/assets/blog/articulo-11/11A.png";
import imgContenido from "@/assets/blog/articulo-11/11B.png";
import ArticleSeoHead from "@/components/ArticleSeoHead";
import { Button } from "@/components/ui/button";
import GuiaGptModal from "@/components/sections/GuiaGptModal";
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

const EeatAvanzadaFintechRealEstate = () => {
  return (
    <div className="min-h-screen bg-background">
      <ArticleSeoHead
        title="11. EEAT avanzada en Fintech & Real Estate: Cómo demostrar Autoridad cuando el algoritmo es más escéptico que nunca"
        description="En sectores YMYL como Fintech y Real Estate, ya no basta con parecer experto: hay que probarlo. Descubre cómo demostrar EEAT real y coherente ante el escepticismo algorítmico."
        slug="eeat-avanzada-fintech-real-estate"
        image={imgDestacada}
        datePublished="2026-05-26"
        category="SEO para Startups Fintech & Inversión Inmobiliaria"
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
                alt="EEAT avanzada en Fintech & Real Estate - SEO Fintech Lab"
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
                  SEO para Startups Fintech &amp; Inversión Inmobiliaria
                </strong>
                <span className="font-body text-xs text-foreground-muted">
                  26 de mayo de 2026
                </span>
                <span className="font-body text-xs text-foreground-muted">
                  6 min de lectura
                </span>
              </div>
              <h1 className="font-display text-4xl md:text-5xl leading-tight text-primary mb-8">
                11. EEAT avanzada en Fintech &amp; Real Estate: Cómo demostrar Autoridad cuando el algoritmo es más escéptico que nunca
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
                  Hace poco, una empresa de inversión inmobiliaria me dijo algo que escucho cada vez más: <em>“Publicamos contenido útil, pero Google no parece creérselo”</em>.
                </p>
                <p className="font-body text-lg text-foreground leading-relaxed">
                  Y no era una sensación rara. En sectores como <strong>Fintech</strong> y <strong>Real Estate</strong>, el algoritmo no solo mira si escribes bien: mira si demuestras experiencia real, si tu marca inspira confianza y si tus señales de autoridad son coherentes en toda la web. En otras palabras, ya no basta con parecer experto. Hay que probarlo.
                </p>
                <p className="font-body text-lg text-foreground leading-relaxed">
                  Ese cambio afecta de lleno a marcas que trabajan con <strong>SEO para Inversores</strong>, <strong>Captación de Leads Inmobiliarios</strong>, <strong>SEO en Sectores Regulados</strong> y <strong>Contenido para captar inversores</strong>. Y también explica por qué muchas webs con buen contenido siguen sin despegar.
                </p>
              </div>

              {/* Índice */}
              <div className="bg-soft-pink rounded-lg p-6">
                <p className="font-display text-lg text-primary mb-4">Índice de contenidos</p>
                <ol className="font-body text-foreground-muted space-y-2 list-decimal list-inside">
                  <li><a href="#que-mira-algoritmo" className="hover:text-primary transition-colors">Qué está mirando el algoritmo ahora</a></li>
                  <li><a href="#como-construye-autoridad" className="hover:text-primary transition-colors">Cómo se construye autoridad en Fintech &amp; Real Estate</a></li>
                  <li><a href="#tabla-eeat" className="hover:text-primary transition-colors">Tabla: señales de EEAT que sí importan</a></li>
                  <li><a href="#paginas-confianza" className="hover:text-primary transition-colors">Qué páginas refuerzan más la confianza</a></li>
                  <li><a href="#conclusion" className="hover:text-primary transition-colors">Conclusión</a></li>
                </ol>
              </div>

              {/* Sección 1: Qué está mirando el algoritmo */}
              <div id="que-mira-algoritmo" className="space-y-6">
                <h2 className="font-display text-3xl text-primary">
                  1. Qué está mirando el Algoritmo ahora
                </h2>
                <div className="space-y-4">
                  <h3 className="font-display text-2xl text-foreground">
                    1.1. Señales de Experiencia Real
                  </h3>
                  <p className="font-body text-foreground leading-relaxed">
                    EEAT significa <em>Experience, Expertise, Authoritativeness y Trustworthiness</em>. Google lo usa como marco para valorar si una web merece confianza, especialmente en temas sensibles como Finanzas, Inversión o Servicios Regulados.
                  </p>
                </div>
                <div className="space-y-4">
                  <h3 className="font-display text-2xl text-foreground">
                    1.2. Señales de Confianza y Transparencia
                  </h3>
                  <p className="font-body text-foreground leading-relaxed">
                    Eso significa que no solo cuenta el contenido, sino también quién lo firma, qué pruebas aporta y cómo se sostiene el mensaje en toda la web.
                  </p>
                </div>
                <div className="space-y-4">
                  <h3 className="font-display text-2xl text-foreground">
                    1.3. Qué cambia en Sectores Regulados
                  </h3>
                  <p className="font-body text-foreground leading-relaxed">
                    En <strong>Fintech &amp; Real Estate</strong>, esto se vuelve todavía más exigente. Si hablas de inversión, patrimonio, captación o regulación, el usuario necesita ver que no estás improvisando. Y el algoritmo, igual.
                  </p>
                </div>
              </div>

              {/* Sección 2: Cómo se construye autoridad */}
              <div id="como-construye-autoridad" className="space-y-6">
                <h2 className="font-display text-3xl text-primary">
                  2. Cómo se construye Autoridad en Fintech &amp; Real Estate
                </h2>
                <p className="font-body text-foreground leading-relaxed">
                  La Autoridad no nace de un único artículo. Se construye sumando señales consistentes en el tiempo.
                </p>

                <div className="space-y-4">
                  <h3 className="font-display text-2xl text-foreground">
                    2.1. Autoridad del Autor y de la Marca
                  </h3>
                  <p className="font-body text-foreground leading-relaxed">
                    La Autoridad empieza por saber quién habla y desde dónde habla. En <strong>Fintech &amp; Real Estate</strong>, esto implica autores identificables, biografías claras, experiencia demostrable y una marca que transmite especialización real.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="font-display text-2xl text-foreground">
                    2.2. Autoridad por Contenido Especializado
                  </h3>
                  <p className="font-body text-foreground leading-relaxed">
                    La Autoridad también se construye con contenido que demuestra conocimiento profundo del sector. No basta con publicar por publicar: hacen falta artículos útiles, bien enfocados, con enfoque técnico o estratégico y conectados con problemas reales del negocio.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="font-display text-2xl text-foreground">
                    2.3. Autoridad por Menciones y Enlaces
                  </h3>
                  <p className="font-body text-foreground leading-relaxed">
                    La Autoridad externa refuerza lo anterior. Menciones, enlaces, colaboraciones y referencias desde contextos relevantes ayudan a que la web se perciba como parte de un ecosistema serio y confiable.
                  </p>
                </div>
              </div>

              {/* Sección 3: Tabla EEAT (secondary image sits beautifully right here!) */}
              <div id="tabla-eeat" className="space-y-6">
                <h2 className="font-display text-3xl text-primary">
                  3. TABLA: señales de EEAT que SÍ importan
                </h2>

                <div className="overflow-x-auto pb-2 [&::-webkit-scrollbar]:h-3 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-secondary/70">
                  <div className="divide-y divide-border border border-border rounded-lg overflow-hidden min-w-[600px]">
                    <div className="grid grid-cols-3 bg-secondary px-4 py-3">
                      <span className="font-body text-xs font-semibold text-white uppercase tracking-wider">Señal</span>
                      <span className="font-body text-xs font-semibold text-white uppercase tracking-wider">Cómo se ve en la web</span>
                      <span className="font-body text-xs font-semibold text-white uppercase tracking-wider">Qué aporta</span>
                    </div>
                    {[
                      ["Auditoría clara", "Nombre, cargo y experiencia del autor", "Más credibilidad"],
                      ["Casos o ejemplos reales", "Proyectos, métricas o aprendizajes", "Más experiencia demostrable"],
                      ["Enlaces de autoridad", "Fuentes, reguladores, medios sectoriales", "Más contexto y confianza"],
                      ["Consistencia de marca", "Mismo mensaje en home, blog y servicios", "Menos ruido semántico"],
                      ["Claridad regulatoria", "Avisos, cumplimiento y transparencia", "Menos fricción en sectores sensibles"],
                    ].map(([senal, como, aporta]) => (
                      <div key={senal} className="grid grid-cols-3 px-4 py-4 bg-background gap-3">
                        <span className="font-body text-sm text-foreground font-medium">{senal}</span>
                        <span className="font-body text-sm text-foreground-muted">{como}</span>
                        <span className="font-body text-sm text-foreground-muted">{aporta}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <p className="font-body text-xs text-foreground-muted text-center mt-1 sm:hidden">← Desliza para ver más →</p>

                <div className="space-y-4">
                  <h3 className="font-display text-2xl text-foreground">
                    3.1. Cómo leer cada señal en la web
                  </h3>
                  <p className="font-body text-foreground leading-relaxed">
                    No todas las señales pesan igual, pero todas suman cuando apuntan en la misma dirección. La idea es mirar si la web muestra experiencia real, transparencia y consistencia en su mensaje.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="font-display text-2xl text-foreground">
                    3.2. Qué aporta cada una a la credibilidad
                  </h3>
                  <p className="font-body text-foreground leading-relaxed">
                    Cada señal refuerza una parte distinta de la confianza: unas validan quién habla, otras prueban que sabe de lo que habla y otras reducen dudas en sectores donde el riesgo percibido es más alto.
                  </p>
                </div>

                {/* Secondary Image Injected Here: Visualizing EEAT trust anchors */}
                <div className="my-8">
                  <LazyImage
                    src={imgContenido}
                    alt="Señales de EEAT y Confianza en SEO Fintech - SEO Fintech Lab"
                    className="w-full rounded-lg object-cover"
                  />
                  <p className="font-body text-sm text-foreground-muted text-center mt-3">
                    Matriz de Confianza y EEAT en Sectores Altamente Regulados B2B
                  </p>
                </div>
              </div>

              {/* Sección 4: Páginas clave */}
              <div id="paginas-confianza" className="space-y-6">
                <h2 className="font-display text-3xl text-primary">
                  4. Qué páginas refuerzan más la confianza
                </h2>
                <div className="space-y-6">
                  <div className="border border-border rounded-lg p-5 bg-background">
                    <p className="font-body font-semibold text-foreground mb-1">4.1. Home</p>
                    <p className="font-body text-sm text-foreground-muted">La home debe explicar con claridad quién eres, qué haces y por qué deberían confiar en ti. Es la primera página donde el usuario busca señales de posicionamiento, especialización y coherencia.</p>
                  </div>
                  <div className="border border-border rounded-lg p-5 bg-background">
                    <p className="font-body font-semibold text-foreground mb-1">4.2. About / Quiénes somos</p>
                    <p className="font-body text-sm text-foreground-muted">La página de About ayuda a humanizar la marca y a mostrar quién está detrás. En sectores como Fintech y Real Estate, esta página reduce fricción porque aporta contexto, trayectoria y legitimidad.</p>
                  </div>
                  <div className="border border-border rounded-lg p-5 bg-background">
                    <p className="font-body font-semibold text-foreground mb-1">4.3. Servicios</p>
                    <p className="font-body text-sm text-foreground-muted">La página de servicios debe bajar a soluciones concretas y dejar claro qué problema resuelves. Cuanto más específico sea el servicio, más fácil es percibir especialización, por ejemplo: SEO para inversión inmobiliaria, SEO para inversores o SEO en sectores regulados.</p>
                  </div>
                  <div className="border border-border rounded-lg p-5 bg-background">
                    <p className="font-body font-semibold text-foreground mb-1">4.4. Blog / Artículos</p>
                    <p className="font-body text-sm text-foreground-muted">El blog no es sólo un escaparate de contenido, sino una forma de demostrar criterio, profundidad y conocimiento del sector. Cuando los artículos están bien enfocados y conectados con temas reales del negocio, refuerzan la percepción de autoridad.</p>
                  </div>
                  <div className="border border-border rounded-lg p-5 bg-background">
                    <p className="font-body font-semibold text-foreground mb-1">4.5. Contacto / Legal / Cumplimiento</p>
                    <p className="font-body text-sm text-foreground-muted">La página de contacto y las páginas legales son clave para transmitir transparencia. En sectores sensibles, ver datos claros, avisos legales, políticas y referencias de cumplimiento reduce dudas y aumenta la confianza.</p>
                  </div>
                </div>

                <div className="bg-soft-pink rounded-lg p-6 flex items-start gap-4">
                  <span className="text-2xl">👉</span>
                  <p className="font-body text-foreground leading-relaxed">
                    Muchas marcas confunden volumen con autoridad. Publican mucho, pero sin una voz sólida, sin pruebas reales y sin una estructura que conecte todo. Otras tienen buen contenido, pero no lo respaldan con autoridad visible: ni autoría, ni contexto, ni enlaces, ni una narrativa clara. En sectores como Fintech y Real Estate, esa falta de coherencia se nota enseguida. Y el algoritmo, que cada vez es más escéptico, lo penaliza con silencio.
                  </p>
                </div>
              </div>

              {/* Sección 5: Conclusión */}
              <div id="conclusion" className="bg-soft-pink rounded-lg p-8 space-y-4">
                <h2 className="font-display text-3xl text-primary">
                  5. Conclusión
                </h2>
                <div className="space-y-4">
                  <h3 className="font-display text-xl text-primary font-semibold">
                    5.1. Prioridades para mejorar EEAT
                  </h3>
                  <p className="font-body text-foreground leading-relaxed">
                    En Fintech &amp; Real Estate, la Autoridad ya no se presume: <strong>SE DEMUESTRA</strong>. Y se demuestra con Experiencia Real, Estructura clara, Señales de confianza y una Estrategia de Contenidos que no solo informa, sino que sostenga una Posición Experta de forma consistente.
                  </p>
                  <p className="font-body text-foreground leading-relaxed">
                    Si tu Web quiere captar más y mejor, necesita algo más que artículos bien escritos. Necesita una <strong>Arquitectura de Confianza</strong> que el algoritmo pueda leer y el usuario también…
                  </p>
                </div>
                <div className="space-y-4 pt-4 border-t border-primary/20">
                  <h3 className="font-display text-xl text-primary font-semibold">
                    5.2. Próximos pasos
                  </h3>
                  <p className="font-body text-foreground leading-relaxed">
                    ¿Quieres revisar si tu Marca está transmitiendo la Autoridad que necesita para competir en un sector escéptico?
                  </p>
                  <p className="font-body text-foreground leading-relaxed">
                    Entra en <strong>SEO Fintech Lab</strong>:
                  </p>
                  <p className="font-body text-foreground leading-relaxed">
                    Déjanos tus datos en la web y te enviamos una <strong>Guía Gratuita Fintech</strong>: <em>“Prompts de IA para SEO Fintech”</em> para ayudarte a reforzar tu Posicionamiento con más Criterio y más Confianza.
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
                  ¿Listo para evaluar la autoridad EEAT de tu Fintech?
                </h2>
                <p className="font-body text-foreground-muted mb-8">
                  Analizamos tu perfil de credibilidad técnica, optimizamos tus páginas YMYL y estructuramos señales sólidas para ganarnos la confianza de Google y tus inversores.
                </p>
                <Button variant="hero" size="xl" className="whitespace-normal h-auto py-4" asChild>
                  <a href={CALENDAR_URL} target="_blank" rel="noopener noreferrer">
                    Hablemos de tu EEAT en Fintech
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

export default EeatAvanzadaFintechRealEstate;
