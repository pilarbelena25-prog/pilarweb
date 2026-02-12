import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      id="inicio"
      className="min-h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden pt-20"
    >
      {/* Decorative elements */}
      <div className="absolute top-1/4 right-10 w-72 h-72 bg-tertiary/10 rounded-full blur-3xl animate-pulse-soft" />
      <div className="absolute bottom-1/4 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse-soft" />
      
      {/* Silver accent lines */}
      <div className="absolute top-40 left-0 w-32 h-px bg-gradient-to-r from-transparent via-accent to-transparent" />
      <div className="absolute bottom-40 right-0 w-48 h-px bg-gradient-to-r from-transparent via-accent to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Tagline */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent bg-background/50 backdrop-blur-sm mb-8 animate-fade-up">
            {/* <Sparkles className="w-4 h-4 text-tertiary" /> */}
            <span className="text-sm font-body text-foreground-muted">
              SEO Fintech potenciado por Inteligencia Artificial
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl leading-tight mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            <span className="text-foreground">Posiciona tu </span>
            <span className="text-gradient-primary">Fintech</span>
            <br />
            <span className="text-foreground">en el lugar que merece</span>
          </h1>

          {/* Subtitle */}
          <p
            className="font-body text-lg md:text-xl text-foreground-muted max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            Especialista SEO en el Sector Financiero. Combino <span className="uppercase font-semibold text-foreground">ESTRATEGIA</span>, <span className="uppercase font-semibold text-foreground">DATOS</span> y la potencia de la IA para llevar tu <span className="font-semibold text-foreground">Marca</span> a los primeros resultados de búsqueda.
          </p>

          {/* CTAs */}
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-up"
            style={{ animationDelay: "0.3s" }}
          >
            <Button variant="hero" size="xl" className="group">
              Descubrir mi enfoque
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="heroOutline" size="xl">
              Descargar guía IA gratuita
            </Button>
          </div>

          {/* Trust indicators */}
          <div
            className="mt-16 pt-10 border-t border-border/50 animate-fade-up"
            style={{ animationDelay: "0.4s" }}
          >
            <p className="text-sm text-foreground-muted mb-6 font-body">
              Más de 10 años ayudando a empresas Fintech a dominar los buscadores
            </p>
            <div className="flex flex-wrap justify-center gap-8 items-center">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span className="text-sm font-body text-foreground">Banca Digital</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-secondary" />
                <span className="text-sm font-body text-foreground">Pagos Online</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-tertiary" />
                <span className="text-sm font-body text-foreground">Insurtech</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-accent" />
                <span className="text-sm font-body text-foreground">Criptomonedas</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
