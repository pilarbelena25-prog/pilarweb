import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import GuiaGptModal from "@/components/sections/GuiaGptModal";
import homeAuditoria from "@/assets/Home_Auditoría Express Lab.webp";

const HeroSection = () => {
  return (
    <section
      id="inicio"
      className="min-h-screen flex flex-col items-center justify-start lg:justify-center bg-gradient-hero relative overflow-hidden pt-20 lg:pt-32"
    >
      {/* Decorative elements */}
      <div className="absolute top-1/4 right-10 w-72 h-72 bg-tertiary/10 rounded-full blur-3xl animate-pulse-soft" />
      <div className="absolute bottom-1/4 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse-soft" />

      {/* Silver accent lines */}
      <div className="absolute top-40 left-0 w-32 h-px bg-gradient-to-r from-transparent via-accent to-transparent" />
      <div className="absolute bottom-40 right-0 w-48 h-px bg-gradient-to-r from-transparent via-accent to-transparent" />

      <div className="container mx-auto px-6 relative z-10 pt-10 lg:pt-0">
        <div className="max-w-4xl 3xl:max-w-5xl mx-auto text-center">
          {/* Tagline */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent bg-background/50 backdrop-blur-sm mb-8 animate-fade-up">
            <span className="text-sm font-body text-foreground-muted">
              SEO Fintech con IA para Marcas Financieras
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl leading-tight mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            <span className="text-foreground">Posiciona tu </span>
            <span className="text-gradient-primary">Fintech</span>
            <br />
            <span className="text-foreground">con SEO Estratégico</span>
          </h1>

          {/* Subtitle */}
          <h2
            className="font-body text-lg md:text-xl text-foreground-muted max-w-2xl 3xl:max-w-3xl mx-auto mb-10 leading-relaxed animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            Auditoría SEO Express que convierte Fintechs estancadas en 10-15 leads orgánicos al mes, sin depender de portales ni ADS.
          </h2>

          {/* CTAs */}
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-up"
            style={{ animationDelay: "0.3s" }}
          >
            <Button variant="hero" size="xl" className="group">
              Descubrir mi enfoque
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <GuiaGptModal>
              <Button variant="heroOutline" size="xl">
                Descargar guía IA gratuita
              </Button>
            </GuiaGptModal>
          </div>

          {/* Cover image */}
          <div
            className="mt-12 animate-fade-up"
            style={{ animationDelay: "0.35s" }}
          >
            <img
              src={homeAuditoria}
              alt="Auditoría SEO Express para Webs Fintech"
              className="w-full max-w-3xl 3xl:max-w-4xl mx-auto rounded-2xl shadow-2xl"
              fetchPriority="high"
            />
          </div>

          {/* Trust indicators */}
          <div
            className="mt-16 pt-10 border-t border-border/50 animate-fade-up"
            style={{ animationDelay: "0.4s" }}
          >
            <p className="text-sm text-foreground-muted mb-6 font-body">
              Más de 5 años acompañando a Marcas Financieras y Startups Fintech a ganar Visibilidad y Autoridad en Google.
            </p>
            <div className="flex flex-wrap justify-center gap-8 items-center">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <p className="text-sm font-body text-foreground">Banca Digital</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-secondary" />
                <p className="text-sm font-body text-foreground">Pagos Online</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-tertiary" />
                <p className="text-sm font-body text-foreground">Insurtech</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-accent" />
                <p className="text-sm font-body text-foreground">Cripto y activos digitales</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
