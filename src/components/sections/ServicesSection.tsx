import { Button } from "@/components/ui/button";
import { Search, TrendingUp, MessageSquare, Bot, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const ServicesSection = () => {
  const services = [
    {
      icon: Search,
      title: "Auditoría SEO Fintech",
      description:
        "Análisis profundo de la presencia digital de tu marca financiera. Identifica oportunidades, errores técnicos y lagunas de contenido para que tu Fintech gane visibilidad real en Google y en las búsquedas potenciadas por IA.",
      features: ["Análisis técnico completo de SEO Financiero", "Estudio de competencia Fintech", "Hoja de ruta de mejora priorizada por impacto"],
      accent: "primary",
      href: "/auditoria-seo-fintech",
    },
    {
      icon: TrendingUp,
      title: "Posicionamiento SEO Fintech",
      description:
        "Estrategia integral de SEO Fintech para Startups y Marcas Financieras. Desde la arquitectura web hasta el contenido que atrae clientes cualificados y construye Autoridad de Marca Fintech en Google.",
      features: ["Investigación de palabras clave especializada en SEO Financiero", "Contenido optimizado para búsquedas Fintech", "Link building estratégico en medios financieros"],
      accent: "secondary",
      href: "/posicionamiento-seo-fintech"
    },
    {
      icon: MessageSquare,
      title: "Consultoría SEO Estratégica para Fintech",
      description:
        "Acompañamiento personalizado para CEOs y equipos internos de marcas financieras. Te ayudo a tomar decisiones SEO correctas en cada fase para crecer en visibilidad y autoridad de forma sostenida.",
      features: ["Sesiones estratégicas 1:1 y con equipo", "Formación en SEO Financiero y visión cross‑channel", "Revisión continua de KPIs y roadmap SEO"],
      accent: "tertiary",
      href: "/consultoria-seo-estrategica-para-fintechs"
    },
    {
      icon: Bot,
      title: "Estrategia SEO con IA",
      description:
        "Potencia tu SEO Fintech . Automatiza, Escala y Optimiza tu presencia en Google y en las nuevas búsquedas generativas impulsadas por IA",
      features: ["Agentes GPT personalizados para Fintech", "Automatización de flujos de trabajo SEO y reporting", "Análisis predictivo de oportunidades y palabras clave"],
      accent: "accent",
      href: "/integracion-ia-seo"
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
            Consultoría de SEO Financiero <br /> <span className="text-gradient-primary">a medida</span>
          </h2>
          <p className="font-body text-foreground-muted leading-relaxed">
            Cada empresa Fintech y cada Marca financiera tiene retos únicos. Los servicios de “SEO Fintech Lab" están diseñados para abordar las necesidades específicas del sector Financiero Digital y ayudar a ganar Visibilidad en Google y atraer Clientes Cualificados.
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