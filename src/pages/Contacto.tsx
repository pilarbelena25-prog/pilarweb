import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Linkedin, ArrowUpRight, Check, AlertCircle, Loader2 } from "lucide-react";
import { Helmet } from "react-helmet-async";
import imgContactoPortada from "@/assets/contacto-portada.png";

// ─── EmailJS credentials ───────────────────────────────────────────────────
// Replace these three placeholders with your real IDs from emailjs.com
const EMAILJS_SERVICE_ID  = "YOUR_SERVICE_ID";   // e.g. "service_xxxxxxx"
const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID";  // e.g. "template_xxxxxxx"
const EMAILJS_PUBLIC_KEY  = "YOUR_PUBLIC_KEY";   // e.g. "aBcDeFgHiJkLmNoPq"

type FormStatus = "idle" | "loading" | "success" | "error";

interface FormErrors {
  name?: string;
  email?: string;
  company?: string;
  service?: string;
  message?: string;
}

const Contacto = () => {
  const formRef = useRef<HTMLFormElement>(null);
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    phone: "",
    message: "",
  });
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

    if (!formData.company.trim()) {
      newErrors.company = "Este campo es obligatorio.";
    }

    if (!formData.service) {
      newErrors.service = "Selecciona un servicio / área de interés.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Evita recarga y errores de ruta en Netlify

    if (!validate()) return;
    if (!formRef.current) return;

    setStatus("loading");

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        { publicKey: EMAILJS_PUBLIC_KEY }
      );

      setStatus("success");
      setFormData({ name: "", email: "", company: "", service: "", phone: "", message: "" });
      setErrors({});
    } catch (error) {
      console.error("EmailJS error:", error);
      setStatus("error");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Contacto con Pilar Beleña | SEO Fintech Lab</title>
        <meta name="description" content="Contacta con Pilar Beleña para impulsar el posicionamiento SEO de tu Fintech, Startup Financiera o marca de Inversión Inmobiliaria. Agenda una consulta." />
        <meta name="keywords" content="Contacto Pilar Beleña, SEO Fintech Lab, consultoría SEO, contratar auditoría SEO, formulario contacto" />
        <link rel="canonical" href="https://pilar-belena-seo-fintech-lab.netlify.app/contacto" />
      </Helmet>

      <Header />

      <main>
        <section className="relative pt-32 pb-20 bg-gradient-hero overflow-hidden">
          {/* Background Image with Opacity */}
          <div
            className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-[0.40]"
            style={{ backgroundImage: `url(${imgContactoPortada})` }}
          />
          {/* Subtle gradient overlay to blend into the main background */}
          <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent via-transparent to-background pointer-events-none" />

          {/* Decorative gradients */}
          <div className="absolute top-1/4 right-0 w-80 h-80 bg-tertiary/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-6xl 3xl:max-w-7xl mx-auto">
              
              {/* Header elements (Title & Subtitle) */}
              <div className="text-center max-w-3xl mx-auto">
                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 leading-tight">
                  Contacta con <br />
                  <span className="text-gradient-primary">Pilar Beleña Lab</span>
                </h1>
                <p className="font-body text-lg sm:text-xl text-foreground-muted leading-relaxed">
                  Cuéntame tu proyecto y vemos juntas cómo darle más claridad, visibilidad y dirección con una estrategia pensada para crecer con criterio.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-background relative z-10">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl 3xl:max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-12 gap-12 items-start">
                
                {/* Left Column: Info blocks (7 cols) */}
                <div className="lg:col-span-7 space-y-10">
                  
                  {/* Texto de cabecera */}
                  <div className="bg-card border border-border/60 rounded-2xl p-6 sm:p-8 shadow-elegant">
                    <p className="font-display text-lg text-foreground font-semibold mb-4 leading-relaxed">
                      ¿Tienes un proyecto Fintech, Inmobiliario o Digital que quieres trabajar con más enfoque?
                    </p>
                    <p className="font-body text-base text-foreground-muted leading-relaxed">
                      Escríbeme y vemos si puedo ayudarte a <strong>Ordenar ideas</strong>, <strong>Detectar oportunidades</strong> y <strong>Convertir tu web o tu marca</strong> en algo más sólido y visible.
                    </p>
                  </div>

                  {/* Grid: En qué puedo ayudarte & Cómo prefiero trabajar */}
                  <div className="grid sm:grid-cols-2 gap-6">
                    
                    {/* En qué puedo ayudarte */}
                    <div className="bg-card border border-border/60 rounded-2xl p-6 shadow-elegant">
                      <h3 className="font-display text-base font-bold text-primary uppercase tracking-wider mb-4 border-b border-border pb-2">
                        En qué puedo ayudarte
                      </h3>
                      <ul className="space-y-2">
                        {[
                          "SEO Fintech.",
                          "Inversión Inmobiliaria.",
                          "Real Estate.",
                          "Obra nueva.",
                          "Segunda mano.",
                          "Auditoría SEO Express.",
                          "Estrategia digital.",
                          "Autoridad y Visibilidad online."
                        ].map((item, i) => (
                          <li key={i} className="flex items-center gap-2.5 font-body text-sm text-foreground-muted">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Cómo prefiero trabajar */}
                    <div className="bg-card border border-border/60 rounded-2xl p-6 shadow-elegant flex flex-col justify-between">
                      <div>
                        <h3 className="font-display text-base font-bold text-primary uppercase tracking-wider mb-4 border-b border-border pb-2">
                          Cómo prefiero trabajar
                        </h3>
                        <div className="space-y-4 font-body text-sm text-foreground-muted leading-relaxed">
                          <p>
                            Trabajo con proyectos que necesitan claridad, criterio y resultados medibles.
                          </p>
                          <p>
                            Si buscas una Solución Ordenada, Estratégica y pensada para generar impacto real, este puede ser un buen punto de partida.
                          </p>
                        </div>
                      </div>
                    </div>

                  </div>

                  {/* Qué puedes escribirme */}
                  <div className="bg-card border border-border/60 rounded-2xl p-6 sm:p-8 shadow-elegant">
                    <h3 className="font-display text-base font-bold text-primary uppercase tracking-wider mb-4 border-b border-border pb-2">
                      Qué puedes escribirme
                    </h3>
                    <p className="font-body text-sm text-foreground-muted mb-4 font-semibold">
                      Puedes contactarme si:
                    </p>
                    <ul className="grid sm:grid-cols-2 gap-3">
                      {[
                        "Tu web no genera Leads.",
                        "Quieres revisar tu Posicionamiento SEO.",
                        "Buscas una Auditoría exprés.",
                        "Tienes un proyecto de Obra nueva o de Segunda mano.",
                        "Te interesa explorar Oportunidades Inmobiliarias Internacionales.",
                        "Quieres mejorar la Visibilidad de tu marca Fintech o Real Estate."
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-2.5 font-body text-sm text-foreground-muted">
                          <Check className="w-4 h-4 text-[#710426] flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Cierre */}
                  <div className="bg-[#710426]/5 border border-[#710426]/10 rounded-2xl p-6 sm:p-8 shadow-elegant text-center sm:text-left">
                    <p className="font-body text-base text-foreground-muted leading-relaxed mb-4">
                      Si te resuena lo que ves en el Lab, escríbeme y cuéntame tu caso.
                    </p>
                    <p className="font-body text-base text-foreground font-medium">
                      Vemos juntas si tu proyecto encaja con esta nueva etapa y cuál puede ser el mejor siguiente paso.
                    </p>
                  </div>

                  {/* Direct contact methods links */}
                  <div className="flex flex-wrap gap-4 pt-2">
                    <a
                      href="mailto:pilarbelena25@gmail.com"
                      className="flex items-center gap-3 px-5 py-3 rounded-xl border border-border bg-card hover:border-[#710426]/40 transition-all font-body text-sm text-foreground-muted hover:text-foreground group"
                    >
                      <Mail className="w-4 h-4 text-primary" />
                      <span>pilarbelena25@gmail.com</span>
                      <ArrowUpRight className="w-4 h-4 opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                    </a>

                    <a
                      href="https://www.linkedin.com/in/mar%C3%ADa-pilar-bele%C3%B1a-gasent-178b145a/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 px-5 py-3 rounded-xl border border-border bg-card hover:border-[#710426]/40 transition-all font-body text-sm text-foreground-muted hover:text-foreground group"
                    >
                      <Linkedin className="w-4 h-4 text-secondary" />
                      <span>María Pilar Beleña</span>
                      <ArrowUpRight className="w-4 h-4 opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                    </a>
                  </div>

                </div>

                {/* Right Column: Interactive Form (5 cols) */}
                <div className="lg:col-span-5 bg-card rounded-2xl p-6 sm:p-8 shadow-elegant border border-border relative overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-tertiary" />
                  
                  <h3 className="font-display text-2xl text-foreground mb-1">Cuéntame tu proyecto</h3>
                  <p className="font-body text-sm text-foreground-muted mb-6">
                    Respondo habitualmente en menos de 24 horas.
                  </p>

                  {status === "success" ? (
                    <div className="flex flex-col items-center justify-center gap-4 py-12 text-center">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                        <Check className="w-6 h-6" />
                      </div>
                      <h4 className="font-display text-xl text-foreground">¡Mensaje enviado con éxito!</h4>
                      <p className="font-body text-sm text-foreground-muted">
                        Gracias por escribirme. Analizaré tu propuesta y te contactaré muy pronto para valorar los siguientes pasos.
                      </p>
                      <Button variant="outline" onClick={() => setStatus("idle")} className="mt-4">
                        Enviar otro mensaje
                      </Button>
                    </div>
                  ) : (
                    <form ref={formRef} onSubmit={handleSubmit} className="space-y-5" noValidate>
                      <div>
                        <label htmlFor="name" className="block font-body text-xs font-semibold text-foreground uppercase tracking-wider mb-2">
                          Nombre completo *
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
                          <p className="mt-1 text-xs text-red-500 font-body">{errors.name}</p>
                        )}
                      </div>

                      <div>
                        <label htmlFor="email" className="block font-body text-xs font-semibold text-foreground uppercase tracking-wider mb-2">
                          Correo electrónico *
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
                          <p className="mt-1 text-xs text-red-500 font-body">{errors.email}</p>
                        )}
                      </div>

                      <div>
                        <label htmlFor="company" className="block font-body text-xs font-semibold text-foreground uppercase tracking-wider mb-2">
                          Proyecto o Empresa *
                        </label>
                        <Input
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Nombre de tu proyecto o marca"
                          className={`bg-background ${errors.company ? "border-red-500 focus-visible:ring-red-500" : ""}`}
                        />
                        {errors.company && (
                          <p className="mt-1 text-xs text-red-500 font-body">{errors.company}</p>
                        )}
                      </div>

                      <div>
                        <label htmlFor="service" className="block font-body text-xs font-semibold text-foreground uppercase tracking-wider mb-2">
                          ¿Qué área te interesa trabajar? *
                        </label>
                        <select
                          id="service"
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          className={`flex h-10 w-full rounded-md border bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 font-body text-foreground ${errors.service ? "border-red-500 focus-visible:ring-red-500" : "border-input focus-visible:ring-ring"}`}
                        >
                          <option value="">Selecciona un área de interés</option>
                          <option value="SEO Fintech">SEO Fintech</option>
                          <option value="Inversión Inmobiliaria / Real Estate">Inversión Inmobiliaria / Real Estate</option>
                          <option value="Auditoría SEO Express">Auditoría SEO Express</option>
                          <option value="Estrategia Digital General">Estrategia Digital General</option>
                          <option value="Otros">Otros temas / Colaboraciones</option>
                        </select>
                        {errors.service && (
                          <p className="mt-1 text-xs text-red-500 font-body">{errors.service}</p>
                        )}
                      </div>

                      <div>
                        <label htmlFor="phone" className="block font-body text-xs font-semibold text-foreground uppercase tracking-wider mb-2">
                          Teléfono de contacto (Opcional)
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="Ej: +34 600 000 000"
                          className="bg-background"
                        />
                      </div>

                      <div>
                        <label htmlFor="message" className="block font-body text-xs font-semibold text-foreground uppercase tracking-wider mb-2">
                          Cuéntame tu caso / detalles del proyecto (Opcional)
                        </label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Describe brevemente tu situación o tus objetivos..."
                          rows={4}
                          className="bg-background resize-none"
                        />
                      </div>

                      {status === "error" && (
                        <div className="flex items-center gap-2 p-3 rounded-lg bg-red-500/10 border border-red-500/30">
                          <AlertCircle className="w-4 h-4 text-red-500 shrink-0" />
                          <p className="text-xs font-body text-red-500">
                            Error al enviar. Inténtalo de nuevo o escribe a pilarbelena25@gmail.com.
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
                          "Enviar Mensaje"
                        )}
                      </Button>

                      <p className="text-[10px] font-body text-foreground-muted text-center leading-normal">
                        Tratamiento de datos conforme a nuestra{" "}
                        <a href="/politica-privacidad" className="text-primary underline">
                          Política de Privacidad
                        </a>
                        .
                      </p>
                    </form>
                  )}
                </div>

              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contacto;
