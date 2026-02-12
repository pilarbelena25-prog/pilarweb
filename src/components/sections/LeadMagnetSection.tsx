import { Button } from "@/components/ui/button";
import { Download, CheckCircle2, BookOpen } from "lucide-react";

const LeadMagnetSection = () => {
  const benefits = [
    "Diseña tu agente GPT paso a paso",
    "Prompts optimizados para SEO Fintech",
    "Plantillas listas para usar en tu estrategia SEO con IA",
    "Casos de uso reales del sector Fintech",
    "Bonus: checklist de implementación",
  ];

  return (
    <section id="guia-gpt" className="py-24 bg-background-secondary relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-tr from-secondary/10 to-transparent" />
      </div>

      {/* Decorative lines */}
      <div className="absolute top-20 left-0 w-1/4 h-px bg-gradient-to-r from-transparent via-accent to-transparent" />
      <div className="absolute bottom-20 right-0 w-1/3 h-px bg-gradient-to-r from-transparent via-accent to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-tertiary/30 bg-tertiary/10 mb-6">
                {/* <Sparkles className="w-4 h-4 text-tertiary" /> */}
                <span className="text-sm font-body text-tertiary font-medium">
                  Recurso gratuito de SEO Fintech Lab
                </span>
              </div>

              <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6 leading-tight">
                Guía práctica: <br />
                <span className="text-gradient-primary">Diseña tu Agente GPT</span>
              </h2>

              <p className="font-body text-lg text-foreground-muted mb-8 leading-relaxed">
                Aprende a crear agentes de inteligencia artificial para potenciar tu estrategia SEO con Inteligencia Artificial. 
                Una guía paso a paso diseñada específicamente para profesionales del sector financiero.
              </p>

              {/* Benefits list */}
              <ul className="space-y-4 mb-10">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="font-body text-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>

              <Button variant="hero" size="xl" className="group">
                <Download className="w-5 h-5" />
                Descargar guía gratis
              </Button>

              <p className="mt-4 text-sm font-body text-foreground-muted">
                * Sin spam. Solo contenido de valor para tu estrategia.
              </p>
            </div>

            {/* Visual Card */}
            <div className="relative">
              <div className="bg-background rounded-2xl p-8 shadow-elegant-lg border border-border relative overflow-hidden">
                {/* Decorative gradient */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-full" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-secondary/10 to-transparent rounded-tr-full" />

                {/* Mock guide preview */}
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <BookOpen className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-display text-lg text-foreground">SEO Fintech Lab</p>
                      <p className="text-xs font-body text-foreground-muted">por Pilar Beleña</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="h-3 bg-muted rounded-full w-full" />
                    <div className="h-3 bg-muted rounded-full w-4/5" />
                    <div className="h-3 bg-muted rounded-full w-3/4" />
                  </div>

                  <div className="mt-8 p-4 rounded-xl bg-background-secondary border border-border">
                    <p className="font-body text-sm text-foreground-muted mb-2">Capítulo 1</p>
                    <p className="font-display text-lg text-foreground">
                      Fundamentos de los Agentes GPT para SEO
                    </p>
                  </div>

                  <div className="mt-4 flex gap-2">
                    <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-body">
                      IA
                    </span>
                    <span className="px-3 py-1 rounded-full bg-secondary/10 text-secondary text-xs font-body">
                      SEO
                    </span>
                    <span className="px-3 py-1 rounded-full bg-tertiary/10 text-tertiary text-xs font-body">
                      Fintech
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground px-4 py-2 rounded-full font-body text-sm font-medium shadow-lg">
                100% Gratis
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadMagnetSection;