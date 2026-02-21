import { TrendingUp, Brain, Target, Users } from "lucide-react";
import pilarPhoto from "@/assets/pilar-belena.webp";

const AboutSection = () => {
  const highlights = [
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

  return (
    <section id="quien-soy" className="py-24 bg-background-secondary relative">
      {/* Decorative accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-px bg-gradient-to-r from-transparent via-accent to-transparent" />
      
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/*  Image Column  */}
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
            
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6 leading-tight">
              La conexión entre <br />
              <span className="text-gradient-primary">Fintech y Visibilidad Digital</span>
            </h2>
            
            <div className="space-y-4 mb-10">
              <p className="font-body text-foreground-muted leading-relaxed">
                Soy Pilar Beleña , <strong className="text-primary font-medium">Fundadora de “SEO Fintech Lab” y Consultora SEO Fintech</strong> Especializada en el Sector Financiero Digital. Transformo la complejidad del mundo Fintech en Estrategias de Posicionamiento SEO con resultados medibles.
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
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="p-4 rounded-xl bg-background border border-border hover:border-primary/50 transition-all duration-300 group"
                >
                  <item.icon className="w-6 h-6 text-primary mb-3 group-hover:scale-110 transition-transform" />
                  <h4 className="font-display text-xl text-foreground mb-1">{item.title}</h4>
                  <p className="font-body text-xs text-foreground-muted">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;