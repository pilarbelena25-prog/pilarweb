import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import emailjs from "@emailjs/browser";
import { CheckCircle, AlertCircle, Loader2, Download } from "lucide-react";

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-green-600 flex-shrink-0">
    <rect x="2" y="2" width="20" height="20" rx="4" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="2"/>
    <path d="M7 12l3 3 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const XIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-foreground-muted flex-shrink-0 opacity-40">
    <rect x="2" y="2" width="20" height="20" rx="4" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="2"/>
    <path d="M8 8l8 8M16 8l-8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

type FormStatus = "idle" | "loading" | "success" | "error";

interface FormErrors {
  name?: string;
  email?: string;
  privacy?: string;
}

const GuiaGpt = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
  });
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<FormStatus>("idle");

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim() || formData.name.trim().length < 2) {
      newErrors.name = "El nombre debe tener al menos 2 caracteres.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email)) {
      newErrors.email = "Introduce un email válido.";
    }

    if (!privacyAccepted) {
      newErrors.privacy = "Debes aceptar la política de privacidad.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    setStatus("loading");

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          company: formData.company || "No especificada",
          message: "Solicitud de descarga: Guía GPT para Fintech",
        },
        PUBLIC_KEY
      );

      setStatus("success");
      setFormData({ name: "", email: "", company: "" });
      setPrivacyAccepted(false);
      setErrors({});
    } catch {
      setStatus("error");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section
          className="pt-32 pb-16 bg-gradient-hero relative overflow-hidden"
          aria-labelledby="guia-gpt-heading"
        >
          <div className="absolute top-1/4 right-10 w-72 h-72 bg-tertiary/10 rounded-full blur-3xl animate-pulse-soft" />
          <div className="absolute bottom-1/4 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse-soft" />

          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1
                id="guia-gpt-heading"
                className="font-display text-4xl md:text-5xl lg:text-6xl leading-tight mb-6 text-primary"
              >
                Guía GPT para Fintech
              </h1>

              <p className="font-body text-xl md:text-2xl text-foreground-muted max-w-3xl mx-auto leading-relaxed mb-10">
                La Guía Práctica definitiva para que tu Fintech Automatice
                Marketing con IA sin perder Autoridad SEO.
              </p>
            </div>
          </div>
        </section>

        {/* Qué es la Guía */}
        <section
          className="py-20 bg-background"
          aria-labelledby="que-es-heading"
        >
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2
                id="que-es-heading"
                className="font-display text-3xl md:text-4xl text-primary mb-8"
              >
                ¿Qué es la Guía GPT para Fintech?
              </h2>
              <p className="font-body text-xl text-foreground leading-relaxed">
                50+ prompts, plantillas y flujos IA listos para usar que
                generan contenido SEO optimizado específicamente para Fintechs.
                No teoría. Resultados inmediatos.
              </p>
            </div>
          </div>
        </section>

        {/* A quién va dirigida */}
        <section
          className="py-20 bg-soft-pink text-soft-pink-foreground"
          aria-labelledby="audiencia-heading"
        >
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2
                id="audiencia-heading"
                className="font-display text-3xl md:text-4xl text-primary mb-10"
              >
                A quién va dirigida
              </h2>
              <ul className="space-y-5 font-body text-lg" role="list">
                <li className="flex items-center gap-3">
                  <CheckIcon />
                  <span className="text-foreground">
                    Founders Fintech (sin equipo marketing)
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckIcon />
                  <span className="text-foreground">
                    CMOs Fintech (necesitan escala 10x)
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckIcon />
                  <span className="text-foreground">
                    Content managers (manual = no escalable)
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckIcon />
                  <span className="text-foreground">
                    Equipos pequeños (1-3 personas marketing)
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <XIcon />
                  <span className="text-foreground-muted">
                    Agencias genéricas (no entienden Fintech)
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Qué incluye */}
        <section
          className="py-20 bg-background"
          aria-labelledby="incluye-heading"
        >
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <h2
                id="incluye-heading"
                className="font-display text-3xl md:text-4xl text-primary mb-12 text-center"
              >
                Qué incluye (25 recursos descargables)
              </h2>

              <div className="grid md:grid-cols-3 gap-8">
                {/* Prompts */}
                <article className="bg-card rounded-2xl p-6 border border-border shadow-elegant">
                  <div className="text-4xl mb-4" aria-hidden="true">
                    📋
                  </div>
                  <h3 className="font-display text-xl text-primary mb-5">
                    15 PROMPTS MAESTRO Fintech
                  </h3>
                  <ul className="space-y-3 font-body text-sm text-foreground-muted">
                    <li className="flex items-start gap-2">
                      <span className="text-accent shrink-0 font-mono">├──</span>
                      <span>
                        Keyword research &ldquo;consultora SEO Fintech&rdquo;
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent shrink-0 font-mono">├──</span>
                      <span>Artículos pillar-cluster SGE-ready</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent shrink-0 font-mono">├──</span>
                      <span>LinkedIn posts ejecutivos (leads B2B)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent shrink-0 font-mono">├──</span>
                      <span>FAQs posición 0 Google</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent shrink-0 font-mono">└──</span>
                      <span>Email sequences alta conversión</span>
                    </li>
                  </ul>
                </article>

                {/* Plantillas */}
                <article className="bg-card rounded-2xl p-6 border border-border shadow-elegant">
                  <div className="text-4xl mb-4" aria-hidden="true">
                    🎨
                  </div>
                  <h3 className="font-display text-xl text-primary mb-5">
                    8 PLANTILLAS CANVA optimizadas
                  </h3>
                  <ul className="space-y-3 font-body text-sm text-foreground-muted">
                    <li className="flex items-start gap-2">
                      <span className="text-accent shrink-0 font-mono">├──</span>
                      <span>Calendario editorial 30 días SEO-first</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent shrink-0 font-mono">├──</span>
                      <span>Infografías autoridad Fintech</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent shrink-0 font-mono">├──</span>
                      <span>Carrusel LinkedIn 12 slides</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent shrink-0 font-mono">└──</span>
                      <span>Reporte ejecutivo KPIs</span>
                    </li>
                  </ul>
                </article>

                {/* Flujos */}
                <article className="bg-card rounded-2xl p-6 border border-border shadow-elegant">
                  <div className="text-4xl mb-4" aria-hidden="true">
                    ⚙️
                  </div>
                  <h3 className="font-display text-xl text-primary mb-5">
                    2 FLUJOS AUTOMATIZACIÓN completa
                  </h3>
                  <ul className="space-y-3 font-body text-sm text-foreground-muted">
                    <li className="flex items-start gap-2">
                      <span className="text-accent shrink-0 font-mono">├──</span>
                      <span>GPT → Contenido → SEO → Publicación</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent shrink-0 font-mono">└──</span>
                      <span>Leads → Respuesta personalizada IA</span>
                    </li>
                  </ul>
                </article>
              </div>

              <div className="mt-12 text-center p-8 bg-primary/5 rounded-2xl border border-primary/20">
                <p className="font-display text-2xl text-primary">
                  Valor real: ahorra 120h/mes de trabajo manual.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Formulario de descarga */}
        <section
          id="descargar"
          className="py-20 bg-background-secondary"
          aria-labelledby="form-heading"
        >
          <div className="container mx-auto px-6">
            <div className="max-w-lg mx-auto">
              <h2
                id="form-heading"
                className="font-display text-3xl md:text-4xl text-primary mb-4 text-center"
              >
                Formulario de Descarga
              </h2>
              {/* <p className="font-body text-foreground-muted text-center mb-10">
                Acceso inmediato · 25 recursos · 100% gratuito
              </p> */}

              <div className="bg-card rounded-2xl p-8 border border-border shadow-elegant">
                {status === "success" ? (
                  <div className="flex flex-col items-center justify-center gap-4 py-12 text-center">
                    <CheckCircle className="w-14 h-14 text-primary" />
                    <h3 className="font-display text-xl text-foreground">
                      ¡Solicitud recibida!
                    </h3>
                    <p className="font-body text-foreground-muted">
                      Recibirás la Guía GPT para Fintech en tu email en las
                      próximas horas.
                    </p>
                    <Button
                      variant="outline"
                      onClick={() => setStatus("idle")}
                      className="mt-4"
                    >
                      Volver al formulario
                    </Button>
                  </div>
                ) : (
                  <form
                    onSubmit={handleSubmit}
                    className="space-y-6"
                    noValidate
                  >
                    <div>
                      <label
                        htmlFor="name"
                        className="block font-body text-sm text-foreground mb-2"
                      >
                        Nombre *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Tu nombre"
                        className={`bg-background ${errors.name ? "border-red-500 focus-visible:ring-red-500" : ""}`}
                      />
                      {errors.name && (
                        <p className="mt-1 text-xs text-red-500 font-body">
                          {errors.name}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block font-body text-sm text-foreground mb-2"
                      >
                        Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="tu@email.com"
                        className={`bg-background ${errors.email ? "border-red-500 focus-visible:ring-red-500" : ""}`}
                      />
                      {errors.email && (
                        <p className="mt-1 text-xs text-red-500 font-body">
                          {errors.email}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="company"
                        className="block font-body text-sm text-foreground mb-2"
                      >
                        Empresa Fintech
                      </label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Nombre de tu empresa Fintech"
                        className="bg-background"
                      />
                    </div>

                    <div className="flex items-start gap-3">
                      <Checkbox
                        id="privacy"
                        checked={privacyAccepted}
                        onCheckedChange={(checked) => {
                          setPrivacyAccepted(checked === true);
                          if (errors.privacy)
                            setErrors((prev) => ({
                              ...prev,
                              privacy: undefined,
                            }));
                        }}
                        className={errors.privacy ? "border-red-500" : ""}
                      />
                      <label
                        htmlFor="privacy"
                        className="font-body text-sm text-foreground-muted leading-relaxed cursor-pointer"
                      >
                        Acepto la{" "}
                        <a
                          href="/politica-privacidad"
                          className="text-primary hover:underline"
                        >
                          política de privacidad
                        </a>
                      </label>
                    </div>
                    {errors.privacy && (
                      <p className="text-xs text-red-500 font-body -mt-2">
                        {errors.privacy}
                      </p>
                    )}

                    {status === "error" && (
                      <div className="flex items-center gap-2 p-3 rounded-lg bg-red-500/10 border border-red-500/30">
                        <AlertCircle className="w-4 h-4 text-red-500 shrink-0" />
                        <p className="text-sm font-body text-red-500">
                          Hubo un error. Inténtalo de nuevo o escríbeme a{" "}
                          pilarbelena25@gmail.com.
                        </p>
                      </div>
                    )}

                    <Button
                      type="submit"
                      variant="hero"
                      size="lg"
                      className="w-full"
                      disabled={status === "loading"}
                    >
                      {status === "loading" ? (
                        <>
                          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                          Enviando...
                        </>
                      ) : (
                        "DESCARGAR GRATIS"
                      )}
                    </Button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section
          className="py-20 bg-background"
          aria-labelledby="faq-heading"
        >
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              <h2
                id="faq-heading"
                className="font-display text-3xl md:text-4xl text-primary mb-12 text-center"
              >
                Preguntas frecuentes
              </h2>

              <Accordion type="single" collapsible className="space-y-2">
                <AccordionItem
                  value="faq-1"
                  className="bg-secondary rounded-lg border-none"
                >
                  <AccordionTrigger className="px-6 py-4 text-left font-body text-secondary-foreground hover:no-underline">
                    ¿Funciona con ChatGPT free o necesito GPT-4?
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 font-body text-secondary-foreground/90">
                    100% con GPT-3.5. Prompts optimizados para máximo
                    rendimiento gratuito.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="faq-2"
                  className="bg-secondary rounded-lg border-none"
                >
                  <AccordionTrigger className="px-6 py-4 text-left font-body text-secondary-foreground hover:no-underline">
                    ¿Los prompts están en español?
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 font-body text-secondary-foreground/90">
                    Sí. Optimizados para mercado España + Latam Fintech.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="faq-3"
                  className="bg-secondary rounded-lg border-none"
                >
                  <AccordionTrigger className="px-6 py-4 text-left font-body text-secondary-foreground hover:no-underline">
                    ¿Necesito conocimientos técnicos IA?
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 font-body text-secondary-foreground/90">
                    No. Copy-paste → resultado profesional en 2min.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="faq-4"
                  className="bg-secondary rounded-lg border-none"
                >
                  <AccordionTrigger className="px-6 py-4 text-left font-body text-secondary-foreground hover:no-underline">
                    ¿Es contenido penalizable por Google?
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 font-body text-secondary-foreground/90">
                    No. 100% SEO-first + guardrails E-E-A-T Fintech.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="faq-5"
                  className="bg-secondary rounded-lg border-none"
                >
                  <AccordionTrigger className="px-6 py-4 text-left font-body text-secondary-foreground hover:no-underline">
                    ¿Puedo usarlos ya mañana?
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 font-body text-secondary-foreground/90">
                    Sí. Plantillas Canva editables + prompts listos.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section
          className="py-20 bg-gradient-hero relative overflow-hidden"
        >
          <div className="absolute top-1/4 right-10 w-72 h-72 bg-tertiary/10 rounded-full blur-3xl animate-pulse-soft" />
          <div className="absolute bottom-1/4 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse-soft" />

          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <a href="#descargar">
                <Button variant="hero" size="xl">
                  Obtén tu Guía GPT Fintech gratis
                </Button>
              </a>
              <p className="font-body text-xl text-foreground-muted mt-10">
                Transforma 50h manuales en 1h de IA Automatizada.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default GuiaGpt;
