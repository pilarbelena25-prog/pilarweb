import { Button } from "@/components/ui/button";
import { 
  ArrowUpRight, 
  Check, 
  HelpCircle, 
  Activity, 
  Zap, 
  Gift, 
  Target, 
  Award 
} from "lucide-react";
import { Link } from "react-router-dom";

const ServicesSection = () => {
  return (
    <section id="servicios" className="py-24 bg-background relative overflow-hidden border-t border-border/50">
      {/* Decorative gradients */}
      <div className="absolute top-1/3 -right-32 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -left-32 w-96 h-96 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* H1 (Section Title) & Subtitle */}
        <div className="text-center max-w-3xl 3xl:max-w-4xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary font-body text-sm px-4 py-1.5 rounded-full mb-6">
            Soluciones SEO del Lab
          </div>
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6 leading-tight">
            Nuestros <br />
            <span className="text-gradient-primary font-semibold">Servicios SEO Estratégicos</span>
          </h2>
          <p className="font-body text-lg sm:text-xl text-foreground-muted leading-relaxed max-w-3xl mx-auto">
            Te ayudo a entender qué frena tu web, cómo priorizar acciones y cómo estructurar tu canal orgánico para atraer leads cualificados de forma recurrente.
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-16">
          
          {/* Grid de Servicios */}
          <div className="grid md:grid-cols-2 gap-8">
            
            {/* Servicio 1: Auditoría SEO Express */}
            <div className="bg-card border border-border/80 rounded-2xl p-8 shadow-elegant flex flex-col justify-between hover:border-primary/50 transition-colors">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Activity className="w-6 h-6 text-primary" />
                  <h3 className="font-display text-2xl text-foreground font-semibold">
                    Auditoría SEO Express
                  </h3>
                </div>
                <div className="space-y-4 font-body text-sm text-foreground-muted leading-relaxed mb-6">
                  <p>
                    Un <strong>diagnóstico rápido, técnico y accionable</strong> pensado para detectar los bloqueos reales que impiden que tu web gane visibilidad y genere resultados.
                  </p>
                  <ul className="space-y-2.5">
                    {[
                      "Estructura e indexación web",
                      "Optimización de contenido y semántica",
                      "Priorización de mejoras rápidas",
                      "Informe claro y directo, sin rodeos"
                    ].map((bullet, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs">
                        <Check className="w-4 h-4 text-primary bg-primary/10 rounded-full p-0.5 flex-shrink-0" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="pt-4 border-t border-border/60">
                <Button variant="hero" size="lg" className="w-full group" asChild>
                  <Link to="/auditoria-express-seo-fintech">
                    Ver Auditoría SEO Express
                    <ArrowUpRight className="w-4 h-4 ml-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Servicio 2: Consultoría SEO Estratégica */}
            <div className="bg-card border border-border/80 rounded-2xl p-8 shadow-elegant flex flex-col justify-between hover:border-primary/50 transition-colors">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Target className="w-6 h-6 text-primary" />
                  <h3 className="font-display text-2xl text-foreground font-semibold">
                    Consultoría SEO Estratégica
                  </h3>
                </div>
                <div className="space-y-4 font-body text-sm text-foreground-muted leading-relaxed mb-6">
                  <p>
                    Una <strong>sesión de trabajo 1 a 1</strong> para analizar tu situación actual, detectar bloqueos estratégicos y definir prioridades claras para tu proyecto.
                  </p>
                  <ul className="space-y-2.5">
                    {[
                      "Estructura general y propuesta de valor",
                      "Intención de búsqueda y autoridad temática",
                      "Especial para Fintech y Real Estate",
                      "Conversación honesta y orientada a negocio"
                    ].map((bullet, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs">
                        <Check className="w-4 h-4 text-primary bg-primary/10 rounded-full p-0.5 flex-shrink-0" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="pt-4 border-t border-border/60">
                <Button variant="hero" size="lg" className="w-full group" asChild>
                  <Link to="/consultoria-seo-estrategica">
                    Ver Consultoría Estratégica
                    <ArrowUpRight className="w-4 h-4 ml-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </Link>
                </Button>
              </div>
            </div>

          </div>

          {/* Por qué el Lab & Empieza aquí */}
          <div className="grid md:grid-cols-2 gap-8">
            
            {/* Por qué el Lab */}
            <div className="bg-card border border-border/80 rounded-2xl p-8 shadow-elegant flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Award className="w-6 h-6 text-primary" />
                  <h3 className="font-display text-xl text-foreground font-semibold">Por qué el Lab</h3>
                </div>
                <div className="space-y-4 font-body text-sm text-foreground-muted leading-relaxed">
                  <p>
                    Porque el Lab une SEO, Contenido, IA y Visión de negocio. No trabajamos sólo para mejorar rankings, sino para construir visibilidad, credibilidad y oportunidades reales que duren.
                  </p>
                  <p>
                    Aquí el enfoque no es hacer SEO por hacer; sino entender qué necesita cada proyecto para crecer con criterio, con una base digital sólida y con una estrategia adaptada a su sector.
                  </p>
                </div>
              </div>
            </div>

            {/* Empieza aquí */}
            <div className="bg-[#710426]/5 dark:bg-[#710426]/10 border border-[#710426]/30 rounded-2xl p-8 shadow-elegant flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#710426]/10 rounded-full blur-xl pointer-events-none" />
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="font-display text-xl text-[#710426] dark:text-[#e08aa0] font-semibold">Empieza aquí</h3>
                </div>
                <p className="font-body text-sm text-foreground-muted leading-relaxed mb-6">
                  Si tu web está estancada y quieres entender qué está pasando de verdad, podemos agendar una sesión o realizar un diagnóstico rápido.
                </p>
              </div>
              <div>
                <div className="bg-background rounded-xl p-4 border border-border mb-4 text-center">
                  <p className="font-body text-sm font-semibold text-foreground">
                    Escríbeme <span className="text-[#710426] underline font-bold">“SERVICIOS”</span> y lo vemos.
                  </p>
                </div>
                <Button variant="hero" size="lg" className="w-full" asChild>
                  <a href="mailto:pilarbelena25@gmail.com?subject=SERVICIOS%20SEO&body=Hola%20Pilar%2C%20quiero%20conocer%20m%C3%A1s%20sobre%20tus%20servicios%20de%20Auditor%C3%ADa%20y%20Consultor%C3%ADa%20SEO.">
                    Contactar ahora
                  </a>
                </Button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default ServicesSection;
