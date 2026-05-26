import { useEffect } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";

const ArrowIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
);

const CheckIcon = () => (
  <svg className="w-5 h-5 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
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
    <nav className="bg-primary/5 p-6 rounded-lg border border-primary/10 mb-12">
      <h2 className="text-sm font-semibold text-primary mb-4 uppercase tracking-wide">Índice</h2>
      <ul className="space-y-2 text-sm">
        <li>
          <button
            onClick={() => handleScroll("historia")}
            className="text-foreground hover:text-primary transition-colors"
          >
            La historia detrás del Lab
          </button>
        </li>
        <li>
          <button
            onClick={() => handleScroll("cambio")}
            className="text-foreground hover:text-primary transition-colors ml-4"
          >
            Un cambio que lo transformó todo
          </button>
        </li>
        <li>
          <button
            onClick={() => handleScroll("hacemos")}
            className="text-foreground hover:text-primary transition-colors"
          >
            Qué hacemos hoy
          </button>
        </li>
        <li>
          <button
            onClick={() => handleScroll("metodo")}
            className="text-foreground hover:text-primary transition-colors"
          >
            Mi Método
          </button>
        </li>
        <li>
          <button
            onClick={() => handleScroll("enfoque")}
            className="text-foreground hover:text-primary transition-colors"
          >
            Mi enfoque: SEO, IA e Inversión Inmobiliaria
          </button>
        </li>
        <li>
          <button
            onClick={() => handleScroll("oportunidades")}
            className="text-foreground hover:text-primary transition-colors"
          >
            Oportunidades Inmobiliarias internacionales
          </button>
        </li>
        <li>
          <button
            onClick={() => handleScroll("juntos")}
            className="text-foreground hover:text-primary transition-colors"
          >
            Trabajemos juntos
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
      </Helmet>
      
      <Header />
      
      <main className="min-h-[calc(100vh-80px)]">
        {/* Hero Section */}
        <section className="py-16 md:py-24 px-4 md:px-8 lg:px-12 max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
            Pilar Beleña Lab
          </h1>
          <p className="text-lg text-foreground/70 mb-8 max-w-3xl">
            Donde la Estrategia Digital, SEO, Inteligencia Artificial e Inversión Inmobiliaria se encuentran.
          </p>
          
          <TableOfContents />
        </section>

        {/* La Historia Section */}
        <section id="historia" className="py-12 md:py-16 px-4 md:px-8 lg:px-12 max-w-5xl mx-auto scroll-mt-20">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
            La historia detrás del Lab
          </h2>
          
          <div className="prose prose-invert max-w-none space-y-6 text-foreground/80">
            <p className="text-lg leading-relaxed">
              El Lab nació en 2025 como un punto de inflexión personal y profesional. Año nuevo, vida nueva. Fue mi tercera creación y la primera en la que uní con claridad todo lo que había construido hasta ahora: Estrategia Digital, SEO, Inteligencia Artificial e Inversión Inmobiliaria.
            </p>
            
            <p className="text-lg leading-relaxed">
              Durante años trabajé ayudando a Marcas financieras, Proyectos digitales y Negocios con alta complejidad a ganar Visibilidad, Autoridad y Oportunidades reales de negocio. Con el tiempo entendí que el SEO no debía quedarse solo en Posicionamiento web, sino convertirse en una <strong>PALANCA ESTRATÉGICA</strong> para sectores con más recorrido, más valor y más potencial de crecimiento, como Fintech & Real Estate.
            </p>
          </div>
        </section>

        {/* Un Cambio Section */}
        <section id="cambio" className="py-12 md:py-16 px-4 md:px-8 lg:px-12 max-w-5xl mx-auto scroll-mt-20">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
            Un cambio que lo transformó todo
          </h3>
          
          <div className="bg-primary/5 border border-primary/10 rounded-lg p-6 md:p-8 mb-6">
            <p className="text-lg font-semibold text-primary mb-4">
              "No tengo tiempo para SEO. Solo quiero Leads sin depender de portales."
            </p>
            <p className="text-foreground/70 text-sm">— Un inversor inmobiliario</p>
          </div>
          
          <div className="space-y-6 text-foreground/80">
            <p className="text-lg leading-relaxed">
              Esa conversación me llevó a simplificar la propuesta y a crear un enfoque mucho más claro: una <strong>Auditoría SEO Express</strong> pensada para detectar qué bloquea una web, por qué no genera tráfico cualificado y cómo convertirla en una fuente real de Visibilidad, Credibilidad y Leads.
            </p>
            
            <p className="text-lg leading-relaxed">
              Desde ahí, el Lab pasó a trabajar con proyectos que quieren crecer con criterio, no por intuición. Proyectos que buscan una Estrategia Digital Sólida, Medible y Alineada con sus objetivos de negocio.
            </p>
          </div>
        </section>

        {/* Qué Hacemos Section */}
        <section id="hacemos" className="py-12 md:py-16 px-4 md:px-8 lg:px-12 max-w-5xl mx-auto scroll-mt-20">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
            Qué hacemos hoy
          </h2>
          
          <div className="space-y-6 text-foreground/80">
            <p className="text-lg leading-relaxed">
              Hoy el Lab une dos mundos que encajan de forma natural: <strong>SEO Fintech e Inversión Inmobiliaria & Real Estate</strong>. Ayudamos a <strong>MARCAS, STARTUPS y PROYECTOS PREMIUM</strong> a construir una Presencia Digital más fuerte, a ganar Autoridad en Google y a generar Oportunidades de negocio sin depender exclusivamente de portales o de inversión constante en ads.
            </p>
            
            <p className="text-lg leading-relaxed">
              Mi enfoque parte de una idea simple: <strong>si no sabes qué frena tu web, no puedes escalarla bien</strong>. Por eso trabajo desde el Diagnóstico hasta la Acción, con una Visión Estratégica que conecta SEO, Contenido, IA y Negocio.
            </p>
          </div>
        </section>

        {/* Mi Método Section */}
        <section id="metodo" className="py-12 md:py-16 px-4 md:px-8 lg:px-12 max-w-5xl mx-auto scroll-mt-20">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
            Mi Método
          </h2>
          
          <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
            Mi Método combina <strong>TRES pilares</strong>:
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-primary/5 border border-primary/10 rounded-lg p-6">
              <h4 className="text-lg font-bold text-foreground mb-3">1. Diagnóstico preciso</h4>
              <p className="text-foreground/70 text-sm leading-relaxed">
                Detectar problemas técnicos, de contenido, de autoridad y de arquitectura web.
              </p>
            </div>
            
            <div className="bg-primary/5 border border-primary/10 rounded-lg p-6">
              <h4 className="text-lg font-bold text-foreground mb-3">2. Acciones priorizadas</h4>
              <p className="text-foreground/70 text-sm leading-relaxed">
                Saber qué mover primero y qué impacto puede tener.
              </p>
            </div>
            
            <div className="bg-primary/5 border border-primary/10 rounded-lg p-6">
              <h4 className="text-lg font-bold text-foreground mb-3">3. Estrategia clara</h4>
              <p className="text-foreground/70 text-sm leading-relaxed">
                Avanzar con foco, tanto si trabajas con tu equipo como si lo hacemos juntas.
              </p>
            </div>
          </div>
        </section>

        {/* Mi Enfoque Section */}
        <section id="enfoque" className="py-12 md:py-16 px-4 md:px-8 lg:px-12 max-w-5xl mx-auto scroll-mt-20">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
            Mi enfoque: SEO, IA e Inversión Inmobiliaria
          </h2>
          
          <div className="space-y-6 text-foreground/80">
            <p className="text-lg leading-relaxed">
              Estoy especializada en <strong>SEO, Contenido e IA para Fintech e Inversión Inmobiliaria & Real Estate</strong> y también me interesa profundamente el cruce entre Tecnología, Inversión y Negocio en sectores como el inmobiliario. Me gusta trabajar con proyectos de:
            </p>
            
            <ul className="space-y-2 ml-4">
              <li className="flex items-start gap-3">
                <CheckIcon />
                <span>Obra nueva</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckIcon />
                <span>Segunda mano</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckIcon />
                <span>Inversión Nacional e Internacional</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckIcon />
                <span>Activos con potencial real de crecimiento</span>
              </li>
            </ul>
            
            <p className="text-lg leading-relaxed pt-4">
              El Lab está pensado para construir <strong>Visibilidad, Credibilidad y Oportunidades duraderas</strong>. No se trata solo de "hacer SEO", sino de crear una Base digital que acompañe el Crecimiento de cada proyecto con sentido Estratégico.
            </p>
          </div>
        </section>

        {/* Oportunidades Section */}
        <section id="oportunidades" className="py-12 md:py-16 px-4 md:px-8 lg:px-12 max-w-5xl mx-auto scroll-mt-20">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
            Inversión Inmobiliaria Internacional
          </h2>
          
          <div className="space-y-6 text-foreground/80 mb-8">
            <p className="text-lg leading-relaxed">
              Además, también soy <strong>Directora de Inversiones Internacionales</strong> de mi laboratorio en República Dominicana, donde gestionamos un portfolio de más de 30 proyectos en zonas de Gran Proyección y Alta Rentabilidad.
            </p>
            
            <p className="text-lg leading-relaxed">
              Trabajamos con <strong>Oportunidades muy Premium</strong> en Bayahibe, Punta Cana, La Romana, Bali y Dubai, con opciones de obra nueva, condo hoteles, villas, residenciales y desarrollos orientados tanto a compra como a inversión.
            </p>
          </div>
          
          <div className="space-y-4 mb-8">
            <h3 className="text-xl font-bold text-foreground">En concreto, estamos impulsando proyectos en:</h3>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-secondary/10 border border-secondary/20 rounded-lg p-4">
                <h4 className="font-bold text-foreground mb-2">Bayahibe</h4>
                <p className="text-sm text-foreground/70">Velero At Bayahibe</p>
              </div>
              
              <div className="bg-secondary/10 border border-secondary/20 rounded-lg p-4">
                <h4 className="font-bold text-foreground mb-2">Punta Cana</h4>
                <ul className="text-sm text-foreground/70 space-y-1">
                  <li>• Velero Punta Cana</li>
                  <li>• Marena Residences</li>
                  <li>• Meridiano 18</li>
                  <li>• District Residences</li>
                  <li>• Circle Residences</li>
                  <li>• City Place</li>
                  <li>• Condohotel Meliá</li>
                  <li>• Atalia, Paradise y 7 Palms</li>
                </ul>
              </div>
              
              <div className="bg-secondary/10 border border-secondary/20 rounded-lg p-4">
                <h4 className="font-bold text-foreground mb-2">La Romana</h4>
                <ul className="text-sm text-foreground/70 space-y-1">
                  <li>• Condohotel Nomad (operado por Sonesta)</li>
                  <li>• Boulevard Villas</li>
                </ul>
              </div>
              
              <div className="bg-secondary/10 border border-secondary/20 rounded-lg p-4">
                <h4 className="font-bold text-foreground mb-2">Proyectos destacados</h4>
                <ul className="text-sm text-foreground/70 space-y-1">
                  <li>• Noval Properties</li>
                  <li>• Hispalis</li>
                  <li>• Duna</li>
                  <li>• Germosen</li>
                  <li>• Becca</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-primary/5 border border-primary/10 rounded-lg p-6">
            <p className="text-foreground/80 leading-relaxed mb-4">
              También gestionamos <strong>oportunidades de obra nueva en Bali y Dubai</strong>.
            </p>
            <p className="text-foreground/70 leading-relaxed">
              Son zonas con un retorno de inversión muy interesante, un enfoque premium y una propuesta pensada para distintos perfiles de comprador e inversor. Si estás explorando opciones de inversión inmobiliaria o buscas una oportunidad que encaje con tu perfil, podemos hablar brevemente y ver qué proyecto tiene más sentido para ti.
            </p>
          </div>
        </section>

        {/* Trabajemos Juntos Section */}
        <section id="juntos" className="py-12 md:py-16 px-4 md:px-8 lg:px-12 max-w-5xl mx-auto scroll-mt-20">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
            Trabajemos juntos
          </h2>
          
          <div className="space-y-6 mb-8">
            <p className="text-lg text-foreground/80 leading-relaxed">
              Si tu web está estancada, si quieres captar <strong>Leads sin depender de portales</strong> o si buscas una <strong>Estrategia digital que conecte SEO Fintech, Real Estate e Inversión Inmobiliaria</strong>, el Lab puede ayudarte a dar el siguiente paso con claridad y enfoque.
            </p>
            
            <div className="bg-primary/10 border-2 border-primary/30 rounded-lg p-8 text-center">
              <p className="text-xl font-bold text-foreground mb-6">
                Escríbeme "LAB" y cuéntame qué estás buscando.
              </p>
              <a href="mailto:pilar@pilarbeleña.com?subject=LAB%20-%20Solicitud%20de%20consulta">
                <Button size="lg" className="gap-2">
                  Contactar <ArrowIcon />
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* Keywords Section */}
        <section className="py-12 md:py-16 px-4 md:px-8 lg:px-12 max-w-5xl mx-auto border-t border-primary/10">
          <h3 className="text-sm font-semibold text-primary/70 mb-4 uppercase tracking-wide">
            Palabras clave integradas
          </h3>
          <div className="flex flex-wrap gap-2">
            {[
              "Pilar Beleña Lab",
              "SEO Fintech",
              "Inversión inmobiliaria",
              "Real Estate",
              "Obra nueva",
              "Segunda mano",
              "Auditoría SEO Express",
              "Arquitectura web",
              "Autoridad digital",
              "Leads orgánicos",
              "IA aplicada al SEO",
              "Lead generation",
              "Proyectos premium",
            ].map((keyword) => (
              <span
                key={keyword}
                className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full border border-primary/20"
              >
                {keyword}
              </span>
            ))}
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default LabPilarBelena;
