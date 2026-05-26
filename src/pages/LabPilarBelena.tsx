import { useEffect } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";
import imgPortadaHome from "@/assets/portada-home.png";
import { LazyImage } from "@/components/ui/LazyImage";
import { ArrowRight, CheckCircle, ArrowUpRight } from "lucide-react";

const ArrowIcon = () => (
  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
);

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-primary flex-shrink-0 mt-0.5">
    <rect x="2" y="2" width="20" height="20" rx="4" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="2"/>
    <path d="M7 12l3 3 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const TableOfContents = () => {
  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="bg-soft-pink rounded-2xl p-6 md:p-8 border border-border shadow-elegant max-w-xl mx-auto my-8">
      <h2 className="font-display text-lg text-primary mb-4 font-semibold uppercase tracking-wider text-center">Índice del Lab</h2>
      <ul className="font-body text-foreground-muted space-y-3 text-sm md:text-base">
        <li>
          <button
            onClick={() => handleScroll("historia")}
            className="hover:text-primary transition-colors text-left font-medium flex items-center gap-2 w-full"
          >
            <span className="text-primary/40 text-xs font-display">01.</span> La historia detrás del Lab
          </button>
        </li>
        <li>
          <button
            onClick={() => handleScroll("cambio")}
            className="hover:text-primary transition-colors text-left font-medium flex items-center gap-2 pl-4 w-full"
          >
            <span className="text-primary/40 text-xs font-display">↳</span> Un cambio que lo transformó todo
          </button>
        </li>
        <li>
          <button
            onClick={() => handleScroll("hacemos")}
            className="hover:text-primary transition-colors text-left font-medium flex items-center gap-2 w-full"
          >
            <span className="text-primary/40 text-xs font-display">02.</span> Qué hacemos hoy
          </button>
        </li>
        <li>
          <button
            onClick={() => handleScroll("metodo")}
            className="hover:text-primary transition-colors text-left font-medium flex items-center gap-2 w-full"
          >
            <span className="text-primary/40 text-xs font-display">03.</span> Mi Método de 3 Pilares
          </button>
        </li>
        <li>
          <button
            onClick={() => handleScroll("enfoque")}
            className="hover:text-primary transition-colors text-left font-medium flex items-center gap-2 w-full"
          >
            <span className="text-primary/40 text-xs font-display">04.</span> Enfoque: SEO, IA y Real Estate
          </button>
        </li>
        <li>
          <button
            onClick={() => handleScroll("oportunidades")}
            className="hover:text-primary transition-colors text-left font-medium flex items-center gap-2 w-full"
          >
            <span className="text-primary/40 text-xs font-display">05.</span> Inversión Inmobiliaria Internacional
          </button>
        </li>
        <li>
          <button
            onClick={() => handleScroll("juntos")}
            className="hover:text-primary transition-colors text-left font-medium flex items-center gap-2 w-full font-semibold"
          >
            <span className="text-primary/40 text-xs font-display">06.</span> Trabajemos juntos
          </button>
        </li>
      </ul>
    </nav>
  );
};

const LabPilarBelena = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Pilar Beleña Lab | SEO Fintech & Inversión Inmobiliaria</title>
        <meta name="description" content="Pilar Beleña Lab: Consultoría SEO especializada en Fintech e Inversión Inmobiliaria. Auditorías Express, Estrategia Digital y Oportunidades Premium internacionales." />
        <meta name="keywords" content="Pilar Beleña Lab, SEO Fintech, Inversión inmobiliaria, Real Estate, Auditoría SEO Express, Lead generation, IA aplicada al SEO" />
        <link rel="canonical" href="https://pilar-belena-seo-fintech-lab.netlify.app/labs" />
      </Helmet>
      
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 bg-gradient-hero overflow-hidden">
          {/* Background Image with Opacity */}
          <div 
            className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-[0.40]"
            style={{ backgroundImage: `url(${imgPortadaHome})` }}
          />
          {/* Subtle gradient overlay to blend into the main background */}
          <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent via-transparent to-background pointer-events-none" />

          <div className="container relative z-10 mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <span className="inline-block font-body text-sm text-secondary uppercase tracking-widest mb-4">
                El Laboratorio
              </span>
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight mb-6 text-primary">
                Pilar Beleña <span className="text-gradient-primary">Lab</span>
              </h1>
              <p className="font-body text-lg md:text-xl text-foreground-muted max-w-2xl mx-auto mb-8 leading-relaxed">
                Donde la Estrategia Digital, el SEO Técnico, la Inteligencia Artificial y la Inversión Inmobiliaria se encuentran para generar valor real.
              </p>
              
              <TableOfContents />
            </div>
          </div>
        </section>

        {/* Article Content Layout */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto space-y-16">
              
              {/* La Historia Section */}
              <article id="historia" className="space-y-6 scroll-mt-24">
                <h2 className="font-display text-3xl md:text-4xl text-primary">
                  1. La historia detrás del Lab
                </h2>
                <div className="font-body text-foreground-muted leading-relaxed space-y-4 text-base sm:text-lg">
                  <p>
                    El Lab nació en 2025 como un punto de inflexión personal y profesional. Año nuevo, vida nueva. Fue mi tercera creación y la primera en la que uní con claridad todo lo que había construido hasta ahora: Estrategia Digital, SEO, Inteligencia Artificial e Inversión Inmobiliaria.
                  </p>
                  <p>
                    Durante años trabajé ayudando a marcas financieras, proyectos digitales y negocios con alta complejidad a ganar visibilidad, autoridad y oportunidades reales de negocio. Con el tiempo entendí que el SEO no debía quedarse solo en posicionamiento web, sino convertirse en una <strong>palanca estratégica</strong> para sectores con más recorrido, más valor y más potencial de crecimiento, como Fintech & Real Estate.
                  </p>
                </div>
              </article>

              {/* Un Cambio Section */}
              <article id="cambio" className="space-y-6 scroll-mt-24">
                <h3 className="font-display text-2xl md:text-3xl text-foreground">
                  ↳ Un cambio que lo transformó todo
                </h3>
                
                <div className="bg-soft-pink border-l-4 border-primary rounded-r-xl p-6 md:p-8 my-6">
                  <p className="font-display text-lg sm:text-xl italic text-primary mb-3">
                    "No tengo tiempo para SEO. Solo quiero leads sin depender de portales."
                  </p>
                  <p className="font-body text-foreground-muted text-sm">— Un inversor inmobiliario real</p>
                </div>
                
                <div className="font-body text-foreground-muted leading-relaxed space-y-4 text-base sm:text-lg">
                  <p>
                    Esa conversación me llevó a simplificar la propuesta y a crear un enfoque mucho más claro: una <strong>Auditoría SEO Express</strong> pensada para detectar qué bloquea una web, por qué no genera tráfico cualificado y cómo convertirla en una fuente real de visibilidad, credibilidad y leads.
                  </p>
                  <p>
                    Desde ahí, el Lab pasó a trabajar con proyectos que quieren crecer con criterio, no por intuición. Proyectos que buscan una estrategia digital sólida, medible y alineada con sus objetivos de negocio.
                  </p>
                </div>
              </article>

              <hr className="border-border" />

              {/* Qué Hacemos Section */}
              <article id="hacemos" className="space-y-6 scroll-mt-24">
                <h2 className="font-display text-3xl md:text-4xl text-primary">
                  2. Qué hacemos hoy
                </h2>
                <div className="font-body text-foreground-muted leading-relaxed space-y-4 text-base sm:text-lg">
                  <p>
                    Hoy el Lab une dos mundos que encajan de forma natural: <strong>SEO Fintech e Inversión Inmobiliaria &amp; Real Estate</strong>. Ayudamos a marcas, startups y proyectos premium a construir una presencia digital más fuerte, a ganar autoridad en Google y a generar oportunidades de negocio sin depender exclusivamente de portales o de inversión constante en ads.
                  </p>
                  <p>
                    Mi enfoque parte de una idea simple: <strong>si no sabes qué frena tu web, no puedes escalarla bien</strong>. Por eso trabajo desde el diagnóstico hasta la acción, con una visión estratégica que conecta SEO, contenido, IA y negocio.
                  </p>
                </div>
              </article>

              <hr className="border-border" />

              {/* Mi Método Section */}
              <article id="metodo" className="space-y-6 scroll-mt-24">
                <h2 className="font-display text-3xl md:text-4xl text-primary">
                  3. Mi Método de 3 Pilares
                </h2>
                <p className="font-body text-foreground-muted text-base sm:text-lg mb-8 leading-relaxed">
                  Para lograr resultados medibles, combinamos tres pilares fundamentales que estructuran la aceleración de tu visibilidad:
                </p>
                
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-card border border-border rounded-2xl p-6 shadow-elegant hover:-translate-y-0.5 transition-all">
                    <span className="font-display text-2xl text-primary/30 mb-2 block font-bold">01.</span>
                    <h4 className="font-display text-lg text-foreground mb-3 font-semibold">Diagnóstico preciso</h4>
                    <p className="font-body text-foreground-muted text-sm leading-relaxed">
                      Detectar problemas técnicos, de contenido, de autoridad y de arquitectura web antes de hacer cualquier inversión.
                    </p>
                  </div>
                  
                  <div className="bg-card border border-border rounded-2xl p-6 shadow-elegant hover:-translate-y-0.5 transition-all">
                    <span className="font-display text-2xl text-primary/30 mb-2 block font-bold">02.</span>
                    <h4 className="font-display text-lg text-foreground mb-3 font-semibold">Acciones priorizadas</h4>
                    <p className="font-body text-foreground-muted text-sm leading-relaxed">
                      Definir qué cambiar primero en base al impacto estimado, logrando victorias rápidas a corto plazo.
                    </p>
                  </div>
                  
                  <div className="bg-card border border-border rounded-2xl p-6 shadow-elegant hover:-translate-y-0.5 transition-all">
                    <span className="font-display text-2xl text-primary/30 mb-2 block font-bold">03.</span>
                    <h4 className="font-display text-lg text-foreground mb-3 font-semibold">Estrategia clara</h4>
                    <p className="font-body text-foreground-muted text-sm leading-relaxed">
                      Avanzar con foco y claridad semántica, tanto si trabajas con tu equipo interno como si lo hacemos de forma directa.
                    </p>
                  </div>
                </div>
              </article>

              <hr className="border-border" />

              {/* Mi Enfoque Section */}
              <article id="enfoque" className="space-y-6 scroll-mt-24">
                <h2 className="font-display text-3xl md:text-4xl text-primary">
                  4. Enfoque: SEO, IA y Real Estate
                </h2>
                <div className="font-body text-foreground-muted leading-relaxed space-y-6 text-base sm:text-lg">
                  <p>
                    Estamos especializados en <strong>SEO, Contenido B2B e Inteligencia Artificial aplicada a Fintech, Inversión Inmobiliaria y Proptech</strong>. Nos apasiona la unión entre tecnología, flujos de inversión y marketing estratégico para activos de alto valor en:
                  </p>
                  
                  <ul className="space-y-3 font-body text-base text-foreground pl-2">
                    {[
                      "Desarrollos de Obra Nueva y promociones residenciales",
                      "Activos inmobiliarios de Segunda Mano de alto standing",
                      "Estrategias de Inversión Inmobiliaria Nacional e Internacional",
                      "Captación de leads cualificados para activos con alto potencial de retorno",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <CheckIcon />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <p className="pt-4">
                    El Lab está pensado para construir <strong>visibilidad, credibilidad y oportunidades duraderas</strong> en el tiempo. No se trata solo de acumular visitas irrelevantes, sino de crear una arquitectura digital sólida que sostenga tu negocio.
                  </p>
                </div>
              </article>

              <hr className="border-border" />

              {/* Oportunidades Section */}
              <article id="oportunidades" className="space-y-6 scroll-mt-24">
                <h2 className="font-display text-3xl md:text-4xl text-primary">
                  5. Inversión Inmobiliaria Internacional
                </h2>
                
                <div className="font-body text-foreground-muted leading-relaxed space-y-4 text-base sm:text-lg">
                  <p>
                    Además de la consultoría estratégica, colaboro activamente como <strong>Directora de Inversiones Internacionales</strong> en proyectos premium en República Dominicana, gestionando un porfolio en zonas de gran proyección y alta rentabilidad.
                  </p>
                  <p>
                    Facilitamos oportunidades seleccionadas en <strong>Bayahibe, Punta Cana, La Romana, Bali y Dubai</strong>, abarcando condo-hoteles, villas exclusivas y desarrollos residenciales orientados al inversor institucional o privado.
                  </p>
                </div>

                <div className="space-y-4 pt-4">
                  <h3 className="font-display text-xl text-foreground font-semibold">Proyectos y ubicaciones destacadas:</h3>
                  
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="bg-card border border-border rounded-xl p-5 shadow-elegant">
                      <h4 className="font-display text-primary font-bold text-lg mb-2">Bayahibe</h4>
                      <p className="font-body text-sm text-foreground-muted">Proyectos premium como <em>Velero At Bayahibe</em>.</p>
                    </div>
                    
                    <div className="bg-card border border-border rounded-xl p-5 shadow-elegant">
                      <h4 className="font-display text-primary font-bold text-lg mb-2">Punta Cana</h4>
                      <p className="font-body text-sm text-foreground-muted mb-2">Portfolio selecto:</p>
                      <ul className="font-body text-xs text-foreground-muted space-y-1 list-disc list-inside">
                        <li>Velero Punta Cana &amp; Circle Residences</li>
                        <li>Marena &amp; District Residences</li>
                        <li>Condohoteles Meliá, Atalia y 7 Palms</li>
                      </ul>
                    </div>
                    
                    <div className="bg-card border border-border rounded-xl p-5 shadow-elegant">
                      <h4 className="font-display text-primary font-bold text-lg mb-2">La Romana</h4>
                      <p className="font-body text-sm text-foreground-muted">Proyectos de alta demanda:</p>
                      <ul className="font-body text-xs text-foreground-muted space-y-1 list-disc list-inside">
                        <li>Condohotel Nomad (operado por Sonesta)</li>
                        <li>Boulevard Villas</li>
                      </ul>
                    </div>
                    
                    <div className="bg-card border border-border rounded-xl p-5 shadow-elegant">
                      <h4 className="font-display text-primary font-bold text-lg mb-2">Activos de Expansión</h4>
                      <p className="font-body text-sm text-foreground-muted">Desarrollos premium por constructores líderes:</p>
                      <ul className="font-body text-xs text-foreground-muted space-y-1 list-disc list-inside">
                        <li>Noval Properties</li>
                        <li>Proyectos Hispalis, Duna y Becca</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="bg-soft-pink border border-border rounded-2xl p-6 md:p-8 mt-6">
                  <p className="font-body text-foreground-muted text-base leading-relaxed mb-4">
                    También coordinamos <strong>oportunidades exclusivas de obra nueva en Bali y Dubai</strong>.
                  </p>
                  <p className="font-body text-foreground-muted text-sm leading-relaxed">
                    Son zonas con un retorno de inversión sumamente interesante y con alta seguridad jurídica. Si buscas explorar opciones internacionales que diversifiquen tu portfolio o que se ajusten a tus objetivos fiscales y financieros, podemos agendar un breve análisis estratégico.
                  </p>
                </div>
              </article>

              {/* Trabajemos Juntos Section */}
              <article id="juntos" className="space-y-6 scroll-mt-24">
                <h2 className="font-display text-3xl md:text-4xl text-primary text-center">
                  6. Trabajemos juntos
                </h2>
                
                <div className="bg-gradient-hero border border-border rounded-2xl p-8 md:p-12 text-center shadow-elegant-lg relative overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
                  
                  <p className="font-body text-foreground-muted text-lg mb-8 max-w-xl mx-auto leading-relaxed">
                    Si tu web Fintech o Real Estate está estancada, si quieres captar inversores y leads orgánicos sin depender de costosas campañas de pago, diseñemos juntos tu plan de acción.
                  </p>
                  
                  <h3 className="font-display text-xl sm:text-2xl text-primary font-semibold mb-6">
                    Escríbeme "LAB" y analicemos tu proyecto hoy mismo.
                  </h3>
                  
                  <Button variant="hero" size="xl" className="group" asChild>
                    <a href="mailto:pilar@pilarbeleña.com?subject=LAB%20-%20Solicitud%20de%20consulta">
                      Contactar con el Lab
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </Button>
                </div>
              </article>


            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default LabPilarBelena;
