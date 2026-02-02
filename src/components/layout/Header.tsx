import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logoPB from "@/assets/logo-pb.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/#inicio", label: "Inicio" },
    { href: "/#quien-soy", label: "Quién soy" },
    { href: "/#servicios", label: "Servicios" },
    { href: "/#guia-gpt", label: "Guía GPT" },
    { href: "/#contacto", label: "Contacto" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-elegant border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3 group">
            <img 
              src={logoPB} 
              alt="Pilar Beleña Logo" 
              className="h-10 w-10 rounded-lg object-cover"
            />
            <span className="font-display text-3xl font-normal text-foreground group-hover:text-primary transition-colors">
              Pilar Beleña
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-foreground-muted hover:text-primary transition-colors duration-200 text-sm font-medium font-body relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full"
              >
                {link.label}
              </a>
            ))}
            <Button variant="hero" size="sm" asChild>
              <a href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ0cCX8JU1YZ1H7eBKT199JlRVDK3S4VteS7Wf6ca0ljZ-coZRqYSOqMO6nt9Qb5kDnW6hGK367q" target="_blank" rel="noopener noreferrer">
                Hablemos
              </a>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden py-6 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-foreground-muted hover:text-primary transition-colors duration-200 text-base font-medium font-body py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <Button variant="hero" className="mt-4" asChild>
                <a href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ0cCX8JU1YZ1H7eBKT199JlRVDK3S4VteS7Wf6ca0ljZ-coZRqYSOqMO6nt9Qb5kDnW6hGK367q" target="_blank" rel="noopener noreferrer">
                  Hablemos
                </a>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
