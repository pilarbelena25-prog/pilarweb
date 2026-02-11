import { Linkedin, Mail, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-foreground text-primary-foreground py-16 relative">
      {/* Silver accent line at top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-accent/30" />

      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="font-display text-2xl mb-2">Pilar Beleña</h3>
            <p className="text-primary-foreground/60 font-body text-sm mb-4">
               SEO Fintech Lab
            </p>
            <p className="text-primary-foreground/70 font-body text-sm max-w-md leading-relaxed [&_strong]:font-normal">
              Fundadora y Partner Estratégica especializada en el sector{" "}
              <strong>Fintech</strong>. Ayudo a empresas de{" "}
              <strong>Banca Digital</strong>, <strong>Pagos</strong>,{" "}
              <strong>Insurtech</strong> y <strong>Cripto</strong> a dominar los
              buscadores con estrategias de <strong>SEO</strong>,{" "}
              <strong>IA</strong> y <strong>Growth</strong>.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg mb-4">Navegación</h4>
            <ul className="space-y-3">
              {[
                { href: "/#inicio", label: "Home" },
                { href: "/#quien-soy", label: "Equipo" },
                { href: "/#servicios", label: "Servicios" },
                { href: "/#guia-gpt", label: "Guía GPT" },
                { href: "/#contacto", label: "Contacto" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors font-body text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Contact */}
          <div>
            <h4 className="font-display text-lg mb-4">Conecta</h4>
            <div className="flex gap-3 mb-6">
              <a
                href="https://www.linkedin.com/in/mar%C3%ADa-pilar-bele%C3%B1a-gasent-178b145a/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:pilarbelena25@gmail.com"
                className="w-10 h-10 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/50 font-body text-sm">
            © {new Date().getFullYear()} Pilar Beleña. Todos los derechos reservados.
          </p>

          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-primary-foreground/50 hover:text-primary-foreground/80 font-body text-sm transition-colors"
            >
              Política de privacidad
            </a>
            <a
              href="#"
              className="text-primary-foreground/50 hover:text-primary-foreground/80 font-body text-sm transition-colors"
            >
              Aviso legal
            </a>
          </div>

          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors"
            aria-label="Volver arriba"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
