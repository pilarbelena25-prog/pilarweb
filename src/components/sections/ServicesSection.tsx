import { Button } from "@/components/ui/button";
import { Search, TrendingUp, MessageSquare, Bot, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const ServicesSection = () => {
  const services = [
    {
      icon: Search,
      title: "Auditoría SEO Fintech",
      description:
        "Análisis profundo de tu presencia digital. Identifico oportunidades, errores técnicos y gaps de contenido específicos del sector financiero.",
      features: ["Análisis técnico completo", "Estudio de competencia", "Roadmap de mejora prioritizado"],
      accent: "primary",
      href: "/auditoria-seo-fintech",
    },
    {
      icon: TrendingUp,
      title: "Posicionamiento SEO Fintech",
      description:
        "Estrategia integral para dominar las búsquedas de tu nicho. Desde la arquitectura web hasta el contenido que convierte.",
      features: ["Keyword research especializado", "Contenido optimizado", "Link building estratégico"],
      accent: "secondary",
    },
    {
      icon: MessageSquare,
      title: "Consultoría Estratégica SEO",
      description:
        "Acompañamiento personalizado para equipos internos. Te ayudo a tomar las decisiones correctas en cada fase.",
      features: ["Sesiones 1:1 estratégicas", "Formación de equipos", "Revisión continua de KPIs"],
      accent: "tertiary",
    },
    {
      icon: Bot,
      title: "Integración IA + SEO",
      description:
        "Potencia tu estrategia con inteligencia artificial. Automatiza, escala y optimiza con las herramientas más avanzadas.",
      features: ["Agentes GPT personalizados", "Automatización de workflows", "Análisis predictivo"],
      accent: "accent",
    },
  ];

  const getAccentClasses = (accent: string) => {
    switch (accent) {
      case "primary":
        return {
          iconBg: "bg-primary/10",
          iconText: "text-primary",
          hoverBorder: "hover:border-primary/50",
          dot: "bg-primary",
        };
      case "secondary":
        return {
          iconBg: "bg-secondary/10",
          iconText: "text-secondary",
          hoverBorder: "hover:border-secondary/50",
          dot: "bg-secondary",
        };
      case "tertiary":
        return {
          iconBg: "bg-tertiary/10",
          iconText: "text-tertiary",
          hoverBorder: "hover:border-tertiary/50",
          dot: "bg-tertiary",
        };
      default:
        return {
          iconBg: "bg-accent/20",
          iconText: "text-accent",
          hoverBorder: "hover:border-accent",
          dot: "bg-accent",
        };
    }
  };

  return (
    <section id="servicios" className="py-24 bg-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-1/2 -right-32 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute top-1/4 -left-32 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block font-body text-sm text-secondary uppercase tracking-widest mb-4">
            Servicios
          </span>
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">
            Soluciones <span className="text-gradient-primary">a medida</span> para Fintech
          </h2>
          <p className="font-body text-foreground-muted leading-relaxed">
            Cada empresa fintech tiene retos únicos. Mis servicios están diseñados para 
            abordar las necesidades específicas del sector financiero digital.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const colors = getAccentClasses(service.accent);
            return (
              <div
                key={index}
                className={`group p-8 rounded-2xl bg-card border border-border ${colors.hoverBorder} transition-all duration-500 hover:shadow-elegant-lg hover:-translate-y-1`}
              >
                {/* Icon */}
                <div
                  className={`w-14 h-14 rounded-xl ${colors.iconBg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <service.icon className={`w-7 h-7 ${colors.iconText}`} />
                </div>

                {/* Content */}
                <h3 className="font-display text-2xl text-foreground mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="font-body text-foreground-muted mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm font-body text-foreground-muted">
                      <span className={`w-1.5 h-1.5 rounded-full ${colors.dot}`} />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                {service.href ? (
                  <Button variant="elegant" className="group/btn" asChild>
                    <Link to={service.href}>
                      Saber más
                      <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    </Link>
                  </Button>
                ) : (
                  <Button variant="elegant" className="group/btn">
                    Saber más
                    <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </Button>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
