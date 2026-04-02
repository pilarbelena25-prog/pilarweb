import { Button } from "@/components/ui/button";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const CALENDLY_URL = "https://calendly.com/pilarbelena25/30min";

// SVG Icons
const WebIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-primary">
    <rect x="8" y="14" width="48" height="36" rx="3" stroke="currentColor" strokeWidth="2" fill="none"/>
    <path d="M8 22h48" stroke="currentColor" strokeWidth="2"/>
    <circle cx="16" cy="18" r="2" fill="currentColor"/>
    <circle cx="23" cy="18" r="2" fill="currentColor"/>
    <circle cx="30" cy="18" r="2" fill="currentColor"/>
    <path d="M16 30h32M16 37h20M16 44h26" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const TechnicalIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-primary">
    <circle cx="32" cy="32" r="20" stroke="currentColor" strokeWidth="2" fill="none"/>
    <path d="M32 16v4M32 44v4M16 32h4M44 32h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="32" cy="32" r="8" stroke="currentColor" strokeWidth="2" fill="none"/>
    <path d="M32 28v4l3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const FocusIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-primary">
    <path d="M12 24V16a4 4 0 014-4h8M40 12h8a4 4 0 014 4v8M52 40v8a4 4 0 01-4 4h-8M24 52h-8a4 4 0 01-4-4v-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="32" cy="32" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
    <circle cx="32" cy="32" r="4" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="2"/>
  </svg>
);

const ReportIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-primary">
    <rect x="12" y="8" width="32" height="40" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/>
    <path d="M20 18h16M20 26h16M20 34h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M36 38l6 6M38 44l6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="43" cy="47" r="8" stroke="currentColor" strokeWidth="2" fill="none"/>
    <path d="M40 47l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const DeliveryIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-primary">
    <path d="M12 32h24l4-16h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M36 32l4 12H12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="20" cy="48" r="4" stroke="currentColor" strokeWidth="2" fill="none"/>
    <circle cx="40" cy="48" r="4" stroke="currentColor" strokeWidth="2" fill="none"/>
    <path d="M28 20v-8M24 16l4-4 4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 flex-shrink-0 text-primary">
    <rect x="2" y="2" width="20" height="20" rx="4" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M7 12l3 3 7-7" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const XIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 flex-shrink-0 text-foreground-muted">
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" fill="none" strokeOpacity="0.3"/>
    <path d="M9 9l6 6M15 9l-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.6"/>
  </svg>
);

const includesItems = [
  {
    icon: WebIcon,
    title: "Revisión de la web",
    points: [
      "Estructura y arquitectura de páginas",
      "Títulos, metas y claridad de propuesta",
      "Enlazado interno y llamadas a la acción",
    ],
  },
  {
    icon: TechnicalIcon,
    title: "SEO técnico esencial",
    points: [
      "Indexación, rastreo y velocidad",
      "Errores visibles y señales on-page críticas",
      "Señales básicas de autoridad de dominio",
    ],
  },
  {
    icon: FocusIcon,
    title: "Revisión del enfoque comercial",
    points: [
      "Si la web explica bien qué haces y para quién",
      "Si la propuesta diferencia a tu Fintech",
      "Si el mensaje conecta con un líder Fintech real",
    ],
  },
  {
    icon: ReportIcon,
    title: "Informe priorizado",
    points: [
      "Problemas críticos y victorias rápidas",
      "Acciones ordenadas por impacto",
      "Siguiente paso recomendado con claridad",
    ],
  },
  {
    icon: DeliveryIcon,
    title: "Entrega rápida",
    points: [
      "En 24–48 horas desde el inicio",
      "En PDF o vídeo breve según prefierais",
      "Lenguaje claro, sin tecnicismos innecesarios",
    ],
  },
];

const notItems = [
  "Una auditoría de 40 páginas que nadie lee.",
  "Una estrategia mensual ni consultoría continua.",
  "Implementación ni ejecución de cambios.",
  "Un plan enorme que te marea antes de empezar.",
  "Un informe genérico que podría ser de cualquier web.",
];

const forWhom = [
  {
    title: "Tienes web pero no ves resultados",
    description: "Llevas tiempo online pero el tráfico no llega o el que llega no convierte.",
  },
  {
    title: "Has invertido sin claridad",
    description: "Has tocado contenido o SEO, pero no tienes certeza de qué está funcionando ni qué falla.",
  },
  {
    title: "Necesitas una visión externa rápida",
    description: "No tienes tiempo para una consultoría larga y quieres una respuesta directa y accionable.",
  },
  {
    title: "No sabes si el problema es técnico o de enfoque",
    description: "El síntoma está claro —sin leads, sin llamadas, sin señales— pero la causa no.",
  },
];

const AuditoriaExpressSeoFintech = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>

        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-hero">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <span className="inline-block font-body text-sm text-secondary uppercase tracking-widest mb-6">
                Auditoría Express · 290 €
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl leading-tight mb-6 text-primary">
                Descubre en 48 h qué está frenando la visibilidad de tu Fintech
              </h1>
              <p className="font-body text-xl text-foreground-muted mb-10 max-w-2xl mx-auto leading-relaxed">
                Un diagnóstico rápido, técnico y accionable para saber exactamente qué corregir primero. Sin planes largos. Sin confusión. Solo claridad y foco.
              </p>

              <ul className="space-y-3 mb-10 max-w-xl mx-auto text-left">
                {[
                  "Tu web recibe visitas pero sin leads ni llamadas.",
                  "Has invertido en SEO o contenido sin ver retorno claro.",
                  "No sabes si el bloqueo es técnico, estructural o de mensaje.",
                  "No tienes tiempo para una consultoría larga ahora mismo.",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 font-body text-foreground">
                    <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <Button variant="hero" size="xl" asChild>
                <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
                  Solicitar mi Auditoría Express
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Qué es Section */}
        <section className="py-20 bg-soft-pink">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-display text-3xl md:text-4xl text-primary mb-8 text-center">
                Qué es la Auditoría Express SEO Fintech
              </h2>
              <p className="font-body text-soft-pink-foreground leading-relaxed text-lg mb-6">
                No es una consultoría larga. No es una estrategia mensual.
              </p>
              <p className="font-body text-soft-pink-foreground leading-relaxed mb-8">
                Es una auditoría especializada en Fintech que te dice, con claridad, qué está bloqueando tu SEO, qué errores están frenando tu web, qué ganancias rápidas puedes aplicar ya, y qué tendría que pasar después si quieres escalar.
              </p>
              <blockquote className="border-l-4 border-primary pl-6 py-2">
                <p className="font-display text-xl text-primary italic">
                  "Un diagnóstico rápido para tomar decisiones. Sin marearte con un plan enorme."
                </p>
              </blockquote>
            </div>
          </div>
        </section>

        {/* Para quién es Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <h2 className="font-display text-3xl md:text-4xl text-center mb-4 text-foreground">
                Para quién es
              </h2>
              <p className="font-body text-foreground-muted text-center mb-14 max-w-2xl mx-auto">
                Está pensado para Fintechs que ya tienen web pero no están obteniendo los resultados que deberían.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                {forWhom.map((item, i) => (
                  <div key={i} className="flex items-start gap-4 p-6 rounded-2xl bg-card border border-border">
                    <CheckIcon />
                    <div>
                      <h3 className="font-body font-semibold text-foreground mb-1">{item.title}</h3>
                      <p className="font-body text-foreground-muted text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Qué incluye Section */}
        <section className="py-20 bg-background-secondary">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <h2 className="font-display text-3xl md:text-4xl text-center mb-4 text-primary">
                Qué incluye
              </h2>
              <p className="font-body text-foreground-muted text-center mb-14 max-w-2xl mx-auto">
                Cinco áreas de análisis para darte una imagen completa y priorizada de lo que necesita tu Fintech.
              </p>

              <div className="space-y-8">
                {includesItems.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div key={i} className="flex items-start gap-8 p-8 rounded-2xl bg-card border border-border">
                      <div className="flex-shrink-0">
                        <Icon />
                      </div>
                      <div>
                        <div className="flex items-center gap-3 mb-3">
                          <span className="font-display text-2xl text-primary/30">{String(i + 1).padStart(2, "0")}</span>
                          <h3 className="font-display text-xl text-foreground">{item.title}</h3>
                        </div>
                        <ul className="space-y-2">
                          {item.points.map((point, j) => (
                            <li key={j} className="flex items-start gap-2 font-body text-foreground-muted text-sm">
                              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                              {point}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="text-center mt-12">
                <Button variant="hero" size="lg" asChild>
                  <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
                    Solicitar mi Auditoría Express
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Qué NO es Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-display text-3xl md:text-4xl text-center mb-4 text-foreground">
                Qué NO es
              </h2>
              <p className="font-body text-foreground-muted text-center mb-12">
                Decirlo también ayuda a vender sin confusión.
              </p>
              <ul className="space-y-4">
                {notItems.map((item, i) => (
                  <li key={i} className="flex items-center gap-4 font-body text-foreground-muted py-4 border-b border-border last:border-0">
                    <XIcon />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Precio + CTA Section */}
        <section className="py-20 bg-soft-pink">
          <div className="container mx-auto px-6">
            <div className="max-w-xl mx-auto text-center">
              <h2 className="font-display text-3xl md:text-4xl text-primary mb-4">
                Precio único. Sin sorpresas.
              </h2>
              <p className="font-body text-soft-pink-foreground mb-10 leading-relaxed">
                Una sola inversión para obtener claridad total sobre lo que necesita tu Fintech para empezar a posicionar con foco.
              </p>

              <div className="bg-background rounded-2xl border border-border shadow-elegant-lg p-10 mb-8 relative overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
                <p className="font-display text-6xl text-primary mb-2">290 €</p>
                <p className="font-body text-foreground-muted text-sm mb-8">Precio único · IVA no incluido</p>
                <ul className="space-y-3 text-left mb-8">
                  {[
                    "Entrega en 24–48 horas",
                    "Informe priorizado por impacto",
                    "Lenguaje claro, sin tecnicismos",
                    "Siguiente paso recomendado incluido",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 font-body text-foreground-muted text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Button variant="hero" size="xl" className="w-full" asChild>
                  <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
                    Reservar mi Auditoría — 290 €
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Final Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-display text-3xl md:text-4xl mb-6 text-primary">
                Si tu Fintech no está generando resultados, no necesitas más ruido.
              </h2>
              <p className="font-body text-foreground-muted mb-4 leading-relaxed">
                Necesitas una Auditoría Express que detecte el bloqueo y te diga exactamente qué corregir primero.
              </p>
              <p className="font-body text-foreground-muted mb-10 leading-relaxed">
                Menos dudas. Más claridad. Más foco.
              </p>
              <Button variant="hero" size="xl" asChild>
                <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
                  Solicitar mi Auditoría Express SEO Fintech
                </a>
              </Button>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
};

export default AuditoriaExpressSeoFintech;
