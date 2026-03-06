import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import { CheckCircle, AlertCircle, Loader2, Download } from "lucide-react";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const LEAD_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_LEAD_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const PDF_PATH = "/GUIA_IA_GRATUITA.pdf";

type FormStatus = "idle" | "loading" | "success" | "error";

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
}

interface GuiaGptModalProps {
  children: React.ReactNode;
}

const GuiaGptModal = ({ children }: GuiaGptModalProps) => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
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

    const phoneDigits = formData.phone.replace(/\D/g, "");
    if (phoneDigits.length < 9 || phoneDigits.length > 15) {
      newErrors.phone = "Introduce un teléfono válido con código de área (ej. +34 600 000 000).";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("loading");

    try {
      // Notificación a Pilar con los datos del lead
      await emailjs.send(
        SERVICE_ID,
        LEAD_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          company: formData.company || "No especificada",
        },
        PUBLIC_KEY
      );

      setStatus("success");
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

  const handleDownload = async () => {
    const res = await fetch(PDF_PATH);
    const blob = await res.blob();
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "Guia-Agente-GPT-SEO-Fintech.pdf";
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleOpenChange = (isOpen: boolean) => {
    setOpen(isOpen);
    if (!isOpen) {
      setFormData({ name: "", email: "", phone: "", company: "" });
      setErrors({});
      setStatus("idle");
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="font-display text-2xl text-foreground">
            Obtén tu guía gratis
          </DialogTitle>
        </DialogHeader>

        {status === "success" ? (
          <div className="flex flex-col items-center justify-center gap-4 py-8 text-center">
            <CheckCircle className="w-14 h-14 text-primary" />
            <h4 className="font-display text-xl text-foreground">¡Todo listo!</h4>
            <p className="font-body text-foreground-muted">
              Tu guía está lista para descargar.
            </p>
            <Button variant="hero" size="lg" onClick={handleDownload} className="mt-2 gap-2">
              <Download className="w-4 h-4" />
              Descargar guía
            </Button>
            <Button variant="outline" onClick={() => handleOpenChange(false)} className="w-full">
              Cerrar
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5 pt-2" noValidate>
            <div>
              <label htmlFor="guia-name" className="block font-body text-sm text-foreground mb-2">
                Nombre completo *
              </label>
              <Input
                id="guia-name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Tu nombre y apellidos"
                className={`bg-background ${errors.name ? "border-red-500 focus-visible:ring-red-500" : ""}`}
              />
              {errors.name && (
                <p className="mt-1 text-xs text-red-500 font-body">{errors.name}</p>
              )}
            </div>

            <div>
              <label htmlFor="guia-email" className="block font-body text-sm text-foreground mb-2">
                Email *
              </label>
              <Input
                id="guia-email"
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
              <label htmlFor="guia-phone" className="block font-body text-sm text-foreground mb-2">
                Teléfono *
              </label>
              <Input
                id="guia-phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+34 600 000 000"
                className={`bg-background ${errors.phone ? "border-red-500 focus-visible:ring-red-500" : ""}`}
              />
              {errors.phone && (
                <p className="mt-1 text-xs text-red-500 font-body">{errors.phone}</p>
              )}
            </div>

            <div>
              <label htmlFor="guia-company" className="block font-body text-sm text-foreground mb-2">
                Empresa <span className="text-foreground-muted">(opcional)</span>
              </label>
              <Input
                id="guia-company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Nombre de tu empresa o startup"
                className="bg-background"
              />
            </div>

            {status === "error" && (
              <div className="flex items-center gap-2 p-3 rounded-lg bg-red-500/10 border border-red-500/30">
                <AlertCircle className="w-4 h-4 text-red-500 shrink-0" />
                <p className="text-sm font-body text-red-500">
                  Hubo un error al enviar. Inténtalo de nuevo o escríbeme a pilarbelena25@gmail.com.
                </p>
              </div>
            )}

            <Button
              type="submit"
              variant="hero"
              size="lg"
              className="w-full"
              disabled={status === "loading" || !formData.name.trim() || !formData.email.trim() || formData.phone.replace(/\D/g, "").length < 9}
            >
              {status === "loading" ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Cargando documento...
                </>
              ) : (
                "Descargar"
              )}
            </Button>

            <p className="text-xs font-body text-foreground-muted text-center">
              Sin spam. Solo contenido de valor. Datos tratados según la{" "}
              <a href="/politica-privacidad" className="text-primary hover:underline">
                Política de Privacidad
              </a>
              .
            </p>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default GuiaGptModal;
