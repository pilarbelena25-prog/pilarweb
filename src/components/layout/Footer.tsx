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
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-12">
          {/* Brand Column */}
          <div className="md:col-span-5">
            <h3 className="font-display text-2xl mb-4 font-normal text-white">
              Pilar Beleña <span className="text-primary">Lab</span>
            </h3>
            <p className="text-primary-foreground/75 font-body text-sm leading-relaxed max-w-md">
              Fundadora y Estratega Digital Especializada en SEO Fintech e Inversión Inmobiliaria. Trabajo con PROYECTOS que quieren CRECER con Criterio, MEJORAR su Visibilidad y CONSTRUIR Autoridad Digital en Mercados Competitivos.
            </p>
          </div>

          {/* Páginas Column */}
          <div className="md:col-span-2">
            <h4 className="font-display text-xs font-semibold uppercase tracking-wider text-primary mb-4">
              Páginas
            </h4>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Home" },
                { href: "/lab", label: "Lab" },
                { href: "/servicios", label: "Servicios" },
                { href: "/blog", label: "Blog" },
                { href: "/contacto", label: "Contacto" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-white transition-colors duration-200 font-body text-sm block hover:translate-x-0.5 transform transition-transform"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Páginas Agregadas Column */}
          <div className="md:col-span-3">
            <h4 className="font-display text-xs font-semibold uppercase tracking-wider text-primary mb-4">
              Páginas Agregadas
            </h4>
            <ul className="space-y-3">
              {[
                { href: "/auditoria-express-seo-fintech", label: "Auditoría SEO Express" },
                { href: "/blog?categoria=consultor-seo-fintech", label: "SEO para Fintech" },
                { href: "/blog?categoria=seo-startups-fintech", label: "Fintech" },
                { href: "/lab#oportunidades", label: "Inversión Inmobiliaria" },
                { href: "/lab#enfoque", label: "Inmobiliaria" },
                { href: "/contacto", label: "Obra nueva" },
                { href: "/contacto", label: "Segunda mano" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-white transition-colors duration-200 font-body text-sm block hover:translate-x-0.5 transform transition-transform"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Conecta Column */}
          <div className="md:col-span-2">
            <h4 className="font-display text-xs font-semibold uppercase tracking-wider text-primary mb-4">
              Conecta
            </h4>
            <ul className="space-y-3 mb-6">
              <li>
                <a
                  href="https://www.linkedin.com/in/mar%C3%ADa-pilar-bele%C3%B1a-gasent-178b145a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-primary-foreground/70 hover:text-white transition-colors duration-200 font-body text-sm"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:pilarbelena25@gmail.com"
                  className="flex items-center gap-2 text-primary-foreground/70 hover:text-white transition-colors duration-200 font-body text-sm"
                >
                  <Mail className="w-4 h-4" />
                  <span>Email</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-primary-foreground/50 font-body text-sm order-3 md:order-1">
            © {new Date().getFullYear()} Pilar Beleña Lab. Todos los derechos reservados.
          </p>

          {/* Legal Links */}
          <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2 order-1 md:order-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-primary font-display hidden sm:inline mr-2">
              Legal:
            </span>
            <a
              href="/politica-privacidad"
              className="text-primary-foreground/50 hover:text-white font-body text-sm transition-colors duration-200"
            >
              Política de Privacidad
            </a>
            <a
              href="/aviso-legal"
              className="text-primary-foreground/50 hover:text-white font-body text-sm transition-colors duration-200"
            >
              Aviso Legal
            </a>
            <a
              href="/cookies"
              className="text-primary-foreground/50 hover:text-white font-body text-sm transition-colors duration-200"
            >
              Política de Cookies
            </a>
          </div>

          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-lg bg-primary-foreground/10 hover:bg-primary/20 flex items-center justify-center transition-all hover:scale-105 duration-200 order-2 md:order-3"
            aria-label="Volver arriba"
          >
            <ArrowUp className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
