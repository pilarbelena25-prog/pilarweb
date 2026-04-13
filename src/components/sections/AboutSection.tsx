import { TrendingUp, Brain, Target, Users, Music, Code2, Globe, Wrench } from "lucide-react";
import pilarPhoto from "@/assets/pilar-belena.webp";
import grilloPhoto from "@/assets/img-grillo.webp";

const AboutSection = () => {
  const pilarHighlights = [
    {
      icon: TrendingUp,
      title: "+5 años",
      description: "En SEO Estratégico y Marketing Digital para Marcas Financieras.",
    },
    {
      icon: Brain,
      title: "IA Aplicada al SEO",
      description: "Estrategias SEO Fintech potenciadas con Inteligencia Artificial.",
    },
    {
      icon: Target,
      title: "100% Fintech",
      description: "Especialización en SEO para el Sector Financiero digital en España.",
    },
    {
      icon: Users,
      title: "+5 Proyectos Fintech",
      description: "Startups y Marcas Financieras Posicionadas con Éxito.",
    },
  ];

  const manuelHighlights = [
    {
      icon: Music,
      title: "Ingeniero de Sonido",
      description: "Audioplace (2015) · +5 años en Producción Audiovisual · Nick Jr. + Grandes Producciones en Venezuela.",
    },
    {
      icon: Code2,
      title: "SEO Técnico desde 2020",
      description: "Plataformas optimizadas: Rendimiento · Arquitectura · Indexabilidad · Estructura Semántica.",
    },
    {
      icon: Globe,
      title: "Startups LATAM + España",
      description: "Venezuela, Argentina, México, Uruguay y España: Tráfico Orgánico y Conversión en Negocio Real.",
    },
    {
      icon: Wrench,
      title: "Socio Técnico SEO Fintech Lab",
      description: "Desde 01/01/2026. Responsable de toda la Parte Técnica del Laboratorio.",
    },
  ];

  return (
    <section id="equipo" className="py-16 bg-background-secondary relative">
      {/* Decorative accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-px bg-gradient-to-r from-transparent via-accent to-transparent" />

      <div className="container mx-auto px-6 space-y-16">

        <h2 className="font-display text-3xl md:text-4xl text-foreground text-center">
          Nuestro Equipo
        </h2>

        {/* ── Pilar ── image left · content right */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Column */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-elegant-lg">
              <img
                src={pilarPhoto}
                alt="Pilar Beleña - Fundadora SEO Fintech Lab | Consultora SEO Fintech España"
                className="w-full h-auto"
              />
            </div>
            {/* Decorative border */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-primary/30 rounded-2xl -z-10" />
          </div>

          {/* Content Column */}
          <div>
            <span className="inline-block font-body text-sm text-secondary uppercase tracking-widest mb-4">
              Quién soy
            </span>

            <h3 className="font-display text-4xl md:text-5xl text-foreground mb-6 leading-tight">
              La conexión entre <br />
              <span className="text-gradient-primary">Fintech y Visibilidad Digital</span>
            </h3>

            <div className="space-y-4 mb-10">
              <p className="font-body text-foreground-muted leading-relaxed">
                Soy Pilar Beleña , <strong className="text-primary font-medium">Fundadora de "SEO Fintech Lab" y Consultora SEO Fintech</strong> Especializada en el Sector Financiero Digital. Transformo la complejidad del mundo Fintech en Estrategias de Posicionamiento SEO con resultados medibles.
              </p>
              <p className="font-body text-foreground-muted leading-relaxed">
                No soy una consultora SEO genérica. Como <strong className="text-primary font-medium">Especialista en SEO Financiero en España</strong>, conozco regulaciones, retos y oportunidades de Banca Digital, Pagos, Insurtech y WealthTech, lo que me permite diseñar SEO Fintech que no solo Posiciona, sino que Conecta con tu Audiencia Ideal.
              </p>
              <p className="font-body text-foreground-muted leading-relaxed">
                Además, integro herramientas de <span className="text-secondary font-medium">Inteligencia Artificial</span> en cada proyecto, acelerando resultados y detectando oportunidades que otros pasan por alto.
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-4">
              {pilarHighlights.map((item, index) => (
                <div
                  key={index}
                  className="p-4 rounded-xl bg-background border border-border hover:border-primary/50 transition-all duration-300 group"
                >
                  <item.icon className="w-6 h-6 text-primary mb-3 group-hover:scale-110 transition-transform" />
                  <h4 className="font-display text-sm md:text-xl text-foreground mb-1 leading-snug">{item.title}</h4>
                  <p className="font-body text-xs text-foreground-muted">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Separator */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />

        {/* ── Manuel ── content left · placeholder right */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Content Column (left) */}
          <div className="order-2 lg:order-1">
            <span className="inline-block font-body text-sm text-secondary uppercase tracking-widest mb-4">
              El equipo técnico
            </span>

            <h3 className="font-display text-4xl md:text-5xl text-foreground mb-6 leading-tight">
              Desarrollo Web &{" "}
              <span className="text-gradient-primary">SEO Técnico Fintech</span>
            </h3>

            <div className="space-y-4 mb-10">
              <p className="font-body text-foreground-muted leading-relaxed">
                <a
                  href="https://elgrillo.dev"
                  target="_blank"
                  rel="noopener"
                  className="text-primary font-medium hover:underline underline-offset-4"
                ><strong>Manuel (Grillo) De León</strong></a> es Ingeniero de Sonido, formado en la Academia Audioplace (2015), con más de cinco años de experiencia en Producción Audiovisual para teatro y televisión, incluyendo proyectos para <strong className="text-primary font-medium">Nick Jr.</strong> y grandes producciones musicales en Venezuela.
              </p>
              <p className="font-body text-foreground-muted leading-relaxed">
                En 2020 reorientó su carrera hacia el <strong className="text-primary font-medium">Desarrollo Web</strong> y se especializó en la creación de sitios Estratégicos con fuerte enfoque en <strong className="text-secondary font-medium">SEO Técnico</strong>: Rendimiento, Arquitectura, Indexabilidad y Estructura Semántica pensadas para destacar en Google.
              </p>
              <p className="font-body text-foreground-muted leading-relaxed">
                Desde entonces ha trabajado con empresas de Venezuela y Argentina, además de Startups de México, Uruguay y España, desarrollando plataformas optimizadas para Posicionamiento SEO, escalada de tráfico orgánico y conversión en negocio real.
              </p>
              <p className="font-body text-foreground-muted leading-relaxed">
                Manu es <strong className="text-primary font-medium">Socio Colaborador en SEO Fintech Lab desde el 1 de enero de 2026</strong> y responsable de toda la parte técnica del Laboratorio: Implementación de mejoras, Soporte en Auditorías SEO Fintech y puesta en marcha de soluciones que conectan la Estrategia con un código limpio y medible.
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-4">
              {manuelHighlights.map((item, index) => (
                <div
                  key={index}
                  className="p-4 rounded-xl bg-background border border-border hover:border-primary/50 transition-all duration-300 group"
                >
                  <item.icon className="w-6 h-6 text-primary mb-3 group-hover:scale-110 transition-transform" />
                  <h4 className="font-display text-sm md:text-xl text-foreground mb-1 leading-snug">{item.title}</h4>
                  <p className="font-body text-xs text-foreground-muted">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Image Column (right) */}
          <div className="relative order-1 lg:order-2">
            <div className="rounded-2xl overflow-hidden shadow-elegant-lg">
              <img
                src={grilloPhoto}
                alt="Manuel De León - Socio Técnico SEO Fintech Lab | Desarrollador Web SEO Técnico"
                className="w-full h-auto"
              />
            </div>
            {/* Decorative border */}
            <div className="absolute -bottom-4 -left-4 w-full h-full border-2 border-primary/30 rounded-2xl -z-10" />
          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutSection;
