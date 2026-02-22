import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Linkedin, ArrowUpRight, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { useState } from "react";
import emailjs from "@emailjs/browser";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

type FormStatus = "idle" | "loading" | "success" | "error";

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
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

    if (!formData.message.trim() || formData.message.trim().length < 10) {
      newErrors.message = "El mensaje debe tener al menos 10 caracteres.";
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
          message: formData.message,
        },
        PUBLIC_KEY
      );

      setStatus("success");
      setFormData({ name: "", email: "", company: "", message: "" });
      setErrors({});
    } catch {
      setStatus("error");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <section id="contacto" className="py-24 bg-background relative">
      {/* Decorative top border */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-px bg-gradient-to-r from-transparent via-accent to-transparent" />

      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left Column - Info */}
            <div>
              <span className="inline-block font-body text-sm text-secondary uppercase tracking-widest mb-4">
                Contacto
              </span>

              <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6 leading-tight">
                ¿Listo para ganar <br />
                <span className="text-gradient-primary">visibilidad en Google?</span>
              </h2>

              <p className="font-body text-lg text-foreground-muted mb-10 leading-relaxed">
                Cuéntame sobre tu Proyecto Fintech. Como Consultora SEO Fintech Especializada en el sector Financiero Digital, analizaré tu situación actual y te propondré un plan de acción personalizado para atraer Clientes Cualificados y construir Autoridad de Marca.
              </p>

              {/* Contact methods */}
              <div className="space-y-6 mb-10">
                <a
                  href="mailto:pilarbelena25@gmail.com"
                  className="flex items-center gap-4 p-4 rounded-xl border border-border hover:border-primary/50 hover:bg-muted/50 transition-all group"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-body text-sm text-foreground-muted">Email</p>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-foreground-muted ml-auto group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </a>

                <a
                  href="https://www.linkedin.com/in/mar%C3%ADa-pilar-bele%C3%B1a-gasent-178b145a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl border border-border hover:border-secondary/50 hover:bg-muted/50 transition-all group"
                >
                  <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center">
                    <Linkedin className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <p className="font-body text-sm text-foreground-muted">LinkedIn</p>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-foreground-muted ml-auto group-hover:text-secondary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </a>
              </div>

              {/* Quote */}
              <div className="p-6 rounded-xl bg-background-secondary border-l-4 border-primary">
                <p className="font-display text-lg text-foreground italic mb-2">
                  "El SEO Fintech no es solo Posicionamiento. Es construir Autoridad de Marca y Confianza."
                </p>
                <p className="font-body text-sm text-foreground-muted">— Pilar Beleña, Laboratorio SEO Fintech.</p>
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="bg-card rounded-2xl p-8 shadow-elegant border border-border">
              <h3 className="font-display text-2xl text-foreground mb-2">Escríbeme</h3>
              <p className="font-body text-foreground-muted mb-8">
                Respondo en menos de 24 horas laborables
              </p>

              {status === "success" ? (
                <div className="flex flex-col items-center justify-center gap-4 py-12 text-center">
                  <CheckCircle className="w-14 h-14 text-primary" />
                  <h4 className="font-display text-xl text-foreground">¡Mensaje enviado!</h4>
                  <p className="font-body text-foreground-muted">
                    Gracias por escribirme. Te responderé en menos de 24 horas laborables.
                  </p>
                  <Button variant="outline" onClick={() => setStatus("idle")} className="mt-4">
                    Enviar otro mensaje
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block font-body text-sm text-foreground mb-2">
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
                        <p className="mt-1 text-xs text-red-500 font-body">{errors.name}</p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="email" className="block font-body text-sm text-foreground mb-2">
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
                        <p className="mt-1 text-xs text-red-500 font-body">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="company" className="block font-body text-sm text-foreground mb-2">
                      Empresa / Proyecto
                    </label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Nombre de tu empresa o startup"
                      className="bg-background"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block font-body text-sm text-foreground mb-2">
                      ¿En qué puedo ayudarte? *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Cuéntame brevemente tu situación actual y qué objetivos tienes..."
                      rows={5}
                      className={`bg-background resize-none ${errors.message ? "border-red-500 focus-visible:ring-red-500" : ""}`}
                    />
                    {errors.message && (
                      <p className="mt-1 text-xs text-red-500 font-body">{errors.message}</p>
                    )}
                  </div>

                  {status === "error" && (
                    <div className="flex items-center gap-2 p-3 rounded-lg bg-red-500/10 border border-red-500/30">
                      <AlertCircle className="w-4 h-4 text-red-500 shrink-0" />
                      <p className="text-sm font-body text-red-500">
                        Hubo un error al enviar el mensaje. Inténtalo de nuevo o escríbeme directamente a pilarbelena25@gmail.com.
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
                      "Enviar mensaje"
                    )}
                  </Button>

                  <p className="text-xs font-body text-foreground-muted text-center">
                    Al enviar aceptas que te contacte para responder a tu consulta y tratar tus datos según la{" "}
                    <a href="/politica-privacidad" className="text-primary">
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
  );
};

export default ContactSection;
