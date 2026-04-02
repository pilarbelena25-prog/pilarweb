import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const CheckMark = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 flex-shrink-0 text-primary">
    <rect x="2" y="2" width="20" height="20" rx="4" fill="currentColor" fillOpacity="0.12" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M7 12l3 3 7-7" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const includes = [
  {
    title: "Revisión de la web",
    description: "Estructura, títulos, arquitectura, enlazado interno, claridad de propuesta y llamadas a la acción.",
  },
  {
    title: "SEO técnico esencial",
    description: "Indexación, rastreo, velocidad, errores visibles y señales on-page críticas.",
  },
  {
    title: "Enfoque comercial",
    description: "Si la web explica bien qué haces, si la propuesta es clara y si el mensaje conecta con un líder Fintech real.",
  },
  {
    title: "Informe priorizado",
    description: "Problemas críticos, victorias rápidas, acciones en orden y siguiente paso recomendado.",
  },
  {
    title: "Entrega en 24–48 h",
    description: "En PDF o vídeo breve, con lenguaje claro y sin tecnicismos innecesarios.",
  },
];

const ServicesSection = () => {
  return (
    <section id="servicios" className="py-24 bg-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-1/2 -right-32 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute top-1/4 -left-32 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block font-body text-sm text-secondary uppercase tracking-widest mb-4">
            Servicio
          </span>
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">
            Un diagnóstico que te dice <br /> <span className="text-gradient-primary">exactamente qué corregir</span>
          </h2>
          <p className="font-body text-foreground-muted leading-relaxed">
            Sin planes largos ni propuestas confusas. Solo claridad sobre qué está frenando tu Fintech y qué debes priorizar primero.
          </p>
        </div>

        {/* Single Service — Two Column Layout */}
        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-12 items-center">

          {/* Left: Content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary font-body text-sm px-4 py-1.5 rounded-full mb-6">
              Auditoría Express SEO Fintech
            </div>

            <p className="font-body text-foreground-muted leading-relaxed mb-8">
              Un diagnóstico rápido, técnico y accionable para detectar en poco tiempo qué está frenando la visibilidad de tu Fintech y qué hay que corregir primero para empezar a generar resultados.
            </p>

            {/* Pain points */}
            <ul className="space-y-4 mb-8">
              {[
                "Tu web no posiciona aunque has invertido en contenido o SEO.",
                "Recibes tráfico pero sin leads, sin llamadas, sin señales claras.",
                "No sabes si el problema es técnico, de estructura o de enfoque.",
              ].map((pain, i) => (
                <li key={i} className="flex items-start gap-3 font-body text-foreground-muted">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  {pain}
                </li>
              ))}
            </ul>

            {/* Price badge */}
            <div className="flex items-center gap-4 mb-8">
              <span className="font-display text-4xl text-primary">290 €</span>
              <span className="font-body text-sm text-foreground-muted">Precio único · Sin sorpresas</span>
            </div>

            <Button variant="hero" size="lg" className="group" asChild>
              <Link to="/auditoria-express-seo-fintech">
                Solicitar auditoría
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </Button>
          </div>

          {/* Right: Includes card */}
          <div className="relative">
            {/* Floating badge */}
            <div className="absolute -top-4 -right-4 z-10 bg-primary text-primary-foreground font-body text-xs font-medium px-4 py-2 rounded-full shadow-elegant">
              Entrega 24–48 h
            </div>

            <div className="bg-card border border-border rounded-2xl p-8 shadow-elegant-lg">
              <h3 className="font-display text-xl text-primary mb-6">Qué incluye</h3>
              <ul className="space-y-5">
                {includes.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckMark />
                    <div>
                      <p className="font-body font-semibold text-foreground text-sm">{item.title}</p>
                      <p className="font-body text-foreground-muted text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
