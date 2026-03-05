// import { useState } from "react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Checkbox } from "@/components/ui/checkbox";
// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from "@/components/ui/accordion";
// import emailjs from "@emailjs/browser";
// import { CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

// const CheckIcon = () => (
//   <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-green-600 flex-shrink-0">
//     <rect x="2" y="2" width="20" height="20" rx="4" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="2"/>
//     <path d="M7 12l3 3 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//   </svg>
// );

// const XIcon = () => (
//   <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-foreground-muted flex-shrink-0 opacity-40">
//     <rect x="2" y="2" width="20" height="20" rx="4" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="2"/>
//     <path d="M8 8l8 8M16 8l-8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
//   </svg>
// );

// const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
// const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
// const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

// type FormStatus = "idle" | "loading" | "success" | "error";

// interface FormErrors {
//   name?: string;
//   email?: string;
//   privacy?: string;
// }

const GuiaGpt = () => {
  // const [formData, setFormData] = useState({
  //   name: "",
  //   email: "",
  //   company: "",
  // });
  // const [privacyAccepted, setPrivacyAccepted] = useState(false);
  // const [errors, setErrors] = useState<FormErrors>({});
  // const [status, setStatus] = useState<FormStatus>("idle");

  // const validate = (): boolean => {
  //   const newErrors: FormErrors = {};
  //   if (!formData.name.trim() || formData.name.trim().length < 2) {
  //     newErrors.name = "El nombre debe tener al menos 2 caracteres.";
  //   }
  //   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  //   if (!formData.email.trim() || !emailRegex.test(formData.email)) {
  //     newErrors.email = "Introduce un email válido.";
  //   }
  //   if (!privacyAccepted) {
  //     newErrors.privacy = "Debes aceptar la política de privacidad.";
  //   }
  //   setErrors(newErrors);
  //   return Object.keys(newErrors).length === 0;
  // };

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   if (!validate()) return;
  //   setStatus("loading");
  //   try {
  //     await emailjs.send(SERVICE_ID, TEMPLATE_ID, {
  //       name: formData.name,
  //       email: formData.email,
  //       company: formData.company || "No especificada",
  //       message: "Solicitud de descarga: Guía GPT para Fintech",
  //     }, PUBLIC_KEY);
  //     setStatus("success");
  //     setFormData({ name: "", email: "", company: "" });
  //     setPrivacyAccepted(false);
  //     setErrors({});
  //   } catch {
  //     setStatus("error");
  //   }
  // };

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const { name, value } = e.target;
  //   setFormData((prev) => ({ ...prev, [name]: value }));
  //   if (errors[name as keyof FormErrors]) {
  //     setErrors((prev) => ({ ...prev, [name]: undefined }));
  //   }
  // };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="pt-32 pb-16 bg-gradient-hero relative overflow-hidden min-h-[80vh] flex items-center">
          <div className="absolute top-1/4 right-10 w-72 h-72 bg-tertiary/10 rounded-full blur-3xl animate-pulse-soft" />
          <div className="absolute bottom-1/4 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse-soft" />

          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-lg mx-auto text-center">
              <div className="bg-card rounded-2xl p-10 border border-border shadow-elegant">
                <p className="font-body text-sm text-foreground-muted uppercase tracking-widest mb-4">
                  Guía GPT para Fintech
                </p>
                <h1 className="font-display text-3xl md:text-4xl text-primary mb-6 leading-tight">
                  La guía estará lista pronto
                </h1>
                <p className="font-body text-foreground-muted mb-8">
                  Estamos preparando algo increíble para ti. Vuelve en breve.
                </p>
                <a
                  href="/"
                  className="inline-flex items-center gap-2 font-body text-sm text-primary hover:underline underline-offset-4 transition-all"
                >
                  ← Volver a la página principal
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default GuiaGpt;
