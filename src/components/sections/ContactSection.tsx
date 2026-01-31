import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Linkedin, ArrowUpRight } from "lucide-react";
import { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
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
                ¿Listo para dominar <br />
                <span className="text-gradient-primary">los buscadores?</span>
              </h2>

              <p className="font-body text-lg text-foreground-muted mb-10 leading-relaxed">
                Cuéntame sobre tu proyecto Fintech. Analizaré tu situación actual y 
                te propondré un plan de acción personalizado para mejorar tu visibilidad online.
              </p>

              {/* Contact methods */}
              <div className="space-y-6 mb-10">
                <a
                  href="mailto:hola@pilarbelena.com"
                  className="flex items-center gap-4 p-4 rounded-xl border border-border hover:border-primary/50 hover:bg-muted/50 transition-all group"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-body text-sm text-foreground-muted">Email</p>
                    <p className="font-body text-foreground group-hover:text-primary transition-colors">
                      hola@pilarbelena.com
                    </p>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-foreground-muted ml-auto group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </a>

                <a
                  href="https://linkedin.com/in/pilarbelena"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl border border-border hover:border-secondary/50 hover:bg-muted/50 transition-all group"
                >
                  <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center">
                    <Linkedin className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <p className="font-body text-sm text-foreground-muted">LinkedIn</p>
                    <p className="font-body text-foreground group-hover:text-secondary transition-colors">
                      /in/pilarbelena
                    </p>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-foreground-muted ml-auto group-hover:text-secondary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </a>
              </div>

              {/* Quote */}
              <div className="p-6 rounded-xl bg-background-secondary border-l-4 border-primary">
                <p className="font-display text-lg text-foreground italic mb-2">
                  "El SEO Fintech no es solo posicionamiento. Es construir confianza digital."
                </p>
                <p className="font-body text-sm text-foreground-muted">— Pilar Beleña</p>
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="bg-card rounded-2xl p-8 shadow-elegant border border-border">
              <h3 className="font-display text-2xl text-foreground mb-2">Escríbeme</h3>
              <p className="font-body text-foreground-muted mb-8">
                Respondo en menos de 24 horas laborables
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
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
                      required
                      className="bg-background"
                    />
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
                      required
                      className="bg-background"
                    />
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
                    placeholder="Nombre de tu empresa o proyecto"
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
                    required
                    className="bg-background resize-none"
                  />
                </div>

                <Button variant="hero" size="lg" className="w-full">
                  Enviar mensaje
                </Button>

                <p className="text-xs font-body text-foreground-muted text-center">
                  Al enviar, aceptas que contacte contigo para responder tu consulta.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
