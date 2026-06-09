import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  FlaskConical,
  Compass,
  Coins,
  Building2,
  BookOpen,
  Send,
  ArrowRight,
  CheckCircle,
  Activity,
  Target,
  Sparkles,
  ChevronRight,
} from "lucide-react";

const OverviewSection = () => {
  return (
    <div id="descubre-el-lab">

      {/* ── 01. LAB ── */}
      <section className="py-24 bg-background relative overflow-hidden border-t border-border/50">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-12 items-center">

            {/* Text */}
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-block font-body text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 px-4 py-1.5 rounded-full">
                01 · El Laboratorio
              </span>
              <h2 className="font-display text-3xl md:text-5xl text-foreground font-semibold leading-tight">
                Pilar Beleña <span className="text-gradient-primary">Lab</span>
              </h2>
              <p className="font-body text-lg text-foreground-muted leading-relaxed">
                Un espacio donde la Estrategia Digital, el SEO Técnico, la Inteligencia Artificial y la Inversión Inmobiliaria se encuentran para generar valor real, autoridad en Google y visibilidad premium.
              </p>

              {/* 3 pilares */}
              <ul className="grid sm:grid-cols-3 gap-4">
                {[
                  { n: "01", title: "Diagnóstico preciso", desc: "Detectar bloqueos técnicos y de contenido antes de invertir.", color: "text-primary" },
                  { n: "02", title: "Acciones priorizadas", desc: "Enfocarse en lo que genera mayor impacto a corto plazo.", color: "text-secondary" },
                  { n: "03", title: "Estrategia clara", desc: "Avanzar con foco y consistencia semántica sin rodeos.", color: "text-tertiary" },
                ].map((p) => (
                  <li key={p.n} className="bg-card border border-border p-4 rounded-xl shadow-elegant font-body text-xs text-foreground-muted">
                    <span className={`font-display text-lg font-bold ${p.color} block mb-1`}>{p.n}</span>
                    <strong className="text-foreground block mb-1">{p.title}</strong>
                    {p.desc}
                  </li>
                ))}
              </ul>

              <Button variant="hero" asChild className="group">
                <Link to="/lab">
                  Ver historia y método del Lab
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>

            {/* Card decorativa */}
            <div className="lg:col-span-5">
              <div className="bg-gradient-to-br from-primary/10 to-secondary/5 border border-border rounded-2xl p-8 shadow-elegant flex flex-col items-center text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 rounded-full blur-xl pointer-events-none" />
                <FlaskConical className="w-16 h-16 text-primary mb-6 animate-pulse-soft" />
                <h4 className="font-display text-lg font-bold text-foreground mb-2">¿Qué hacemos hoy?</h4>
                <p className="font-body text-sm text-foreground-muted max-w-sm">
                  Unimos SEO de alto impacto e inversión inmobiliaria internacional para proyectos que quieren crecer con criterio.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 02. SERVICIOS ── */}
      <section className="py-24 bg-soft-pink/20 relative overflow-hidden border-t border-border/50">
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-12 items-center">

            {/* Cards resumen (izquierda) */}
            <div className="lg:col-span-5 space-y-4 order-last lg:order-first">
              {[
                { icon: Activity, title: "Auditoría SEO Express", desc: "Diagnóstico técnico y semántico rápido para detectar bloqueos críticos." },
                { icon: Target, title: "Consultoría 1 a 1", desc: "Sesiones estratégicas directas orientadas 100 % a negocio." },
                { icon: Compass, title: "Estrategia de Contenidos", desc: "Piezas estructuradas que resuelven intenciones de búsqueda reales." },
              ].map((s) => (
                <div key={s.title} className="bg-card border border-border p-6 rounded-2xl shadow-elegant flex gap-4 hover:border-primary/50 transition-colors">
                  <s.icon className="w-8 h-8 text-primary flex-shrink-0" />
                  <div>
                    <h4 className="font-display text-base font-bold text-foreground mb-1">{s.title}</h4>
                    <p className="font-body text-xs text-foreground-muted">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Texto (derecha) */}
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-block font-body text-xs font-semibold uppercase tracking-wider text-secondary bg-secondary/10 px-4 py-1.5 rounded-full">
                02 · Soluciones SEO
              </span>
              <h2 className="font-display text-3xl md:text-5xl text-foreground font-semibold leading-tight">
                Nuestros <span className="text-gradient-primary">Servicios</span>
              </h2>
              <p className="font-body text-lg text-foreground-muted leading-relaxed">
                Soluciones directas, técnicas y estratégicas para marcas Fintech y proyectos de Real Estate que quieren liderar el canal orgánico con criterio. Convertimos la complejidad en planes claros de acción.
              </p>
              <Button variant="hero" asChild className="group">
                <Link to="/servicios">
                  Explorar todos los servicios
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ── 03. SEO FINTECH ── */}
      <section className="py-24 bg-background relative overflow-hidden border-t border-border/50">
        <div className="absolute top-1/3 right-10 w-72 h-72 bg-tertiary/5 rounded-full blur-3xl pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-12 items-center">

            {/* Texto */}
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-block font-body text-xs font-semibold uppercase tracking-wider text-tertiary bg-tertiary/10 px-4 py-1.5 rounded-full">
                03 · Alta Competitividad
              </span>
              <h2 className="font-display text-3xl md:text-5xl text-foreground font-semibold leading-tight">
                SEO <span className="text-gradient-primary">Fintech</span>
              </h2>
              <p className="font-body text-lg text-foreground-muted leading-relaxed">
                En entornos YMYL altamente regulados, el posicionamiento orgánico exige cumplir directrices de confianza severas. Te ayudamos a estructurar una web confiable que capte clientes de alto valor sin depender de ADS.
              </p>

              <ul className="grid grid-cols-2 gap-2 font-body text-xs text-foreground-muted">
                {["Banca digital", "Pagos online", "Insurtech & Seguros", "Startups & Criptoactivos"].map((s) => (
                  <li key={s} className="flex items-center gap-2 bg-card border border-border/50 px-3 py-2 rounded-lg">
                    <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                    {s}
                  </li>
                ))}
              </ul>

              <Button variant="hero" asChild className="group">
                <Link to="/seo-fintech">
                  Ver soluciones SEO Fintech
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>

            {/* Card decorativa */}
            <div className="lg:col-span-5">
              <div className="bg-gradient-to-br from-tertiary/10 to-accent/5 border border-border rounded-2xl p-8 shadow-elegant flex flex-col items-center text-center relative overflow-hidden">
                <div className="absolute top-0 left-0 w-20 h-20 bg-tertiary/10 rounded-full blur-lg pointer-events-none" />
                <Coins className="w-16 h-16 text-secondary mb-6 animate-pulse-soft" />
                <h4 className="font-display text-lg font-bold text-foreground mb-2">Autoridad y EEAT</h4>
                <p className="font-body text-sm text-foreground-muted max-w-xs">
                  Alineamos tus contenidos técnicos con las expectativas semánticas de Google y los LLM para impulsar tu visibilidad.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 04. INMOBILIARIA ── */}
      <section className="py-24 bg-soft-pink/20 relative overflow-hidden border-t border-border/50">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-12 items-center">

            {/* Card portfolio (izquierda) */}
            <div className="lg:col-span-5 order-last lg:order-first">
              <div className="bg-card border border-border rounded-2xl p-8 shadow-elegant relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#710426]/5 rounded-full blur-xl pointer-events-none" />
                <Building2 className="w-12 h-12 text-[#710426] mb-6" />
                <h4 className="font-display text-lg font-bold text-foreground mb-4">Portfolio Internacional</h4>
                <ul className="space-y-2 font-body text-xs text-foreground-muted">
                  <li className="flex items-center justify-between border-b border-border/60 pb-2">
                    <strong>Punta Cana · Bayahibe</strong>
                    <span>Premium Obra Nueva</span>
                  </li>
                  <li className="flex items-center justify-between border-b border-border/60 pb-2">
                    <strong>Bali · Indonesia</strong>
                    <span>Villas alta rentabilidad</span>
                  </li>
                  <li className="flex items-center justify-between pb-1">
                    <strong>Dubái · EAU</strong>
                    <span>Seguridad jurídica y retorno</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Texto (derecha) */}
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-block font-body text-xs font-semibold uppercase tracking-wider text-[#710426] bg-[#710426]/10 px-4 py-1.5 rounded-full">
                04 · Real Estate & Inversión
              </span>
              <h2 className="font-display text-3xl md:text-5xl text-foreground font-semibold leading-tight">
                SEO <span className="text-gradient-primary">Inmobiliario</span>
              </h2>
              <p className="font-body text-lg text-foreground-muted leading-relaxed">
                Construimos bases digitales definitivas para proyectos inmobiliarios. Atraemos compradores e inversores cualificados de obra nueva y segunda mano sin depender de portales tradicionales.
              </p>
              <ul className="space-y-2 font-body text-sm text-foreground-muted">
                <li className="flex items-start gap-2.5">
                  <ChevronRight className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span><strong>Obra Nueva:</strong> Embudos semánticos por promoción y zona geográfica.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <ChevronRight className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span><strong>Inversión:</strong> Transmitir rentabilidad y retorno con claridad digital.</span>
                </li>
              </ul>
              <Button variant="hero" asChild className="group">
                <Link to="/inmobiliaria">
                  Explorar estrategia inmobiliaria
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ── 05. BLOG ── */}
      <section className="py-24 bg-background relative overflow-hidden border-t border-border/50">
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-12 items-center">

            {/* Texto */}
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-block font-body text-xs font-semibold uppercase tracking-wider text-[#5d349d] bg-[#5d349d]/10 px-4 py-1.5 rounded-full">
                05 · Conocimiento Especializado
              </span>
              <h2 className="font-display text-3xl md:text-5xl text-foreground font-semibold leading-tight">
                Blog & <span className="text-gradient-primary">Recursos</span>
              </h2>
              <p className="font-body text-lg text-foreground-muted leading-relaxed">
                Artículos de fondo sobre SEO técnico, Inteligencia Artificial, el cambio algorítmico con SGE y la atribución de leads mediante Dark Social en finanzas y Real Estate.
              </p>
              <div className="border-l-2 border-primary pl-4 py-1 space-y-2 font-body text-sm text-foreground-muted">
                <p>• <strong>Estrategia sobre volumen masivo:</strong> Por qué 10 artículos dirigidos superan a 100 generados por bots.</p>
                <p>• <strong>Directrices SGE:</strong> Preparar tu marca para que la IA de Google la seleccione y la cite.</p>
              </div>
              <Button variant="hero" asChild className="group">
                <Link to="/blog">
                  Leer artículos del Blog
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>

            {/* Card decorativa */}
            <div className="lg:col-span-5">
              <div className="bg-gradient-to-br from-[#5d349d]/10 to-accent/5 border border-border rounded-2xl p-8 shadow-elegant flex flex-col items-center text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#5d349d]/10 rounded-full blur-xl pointer-events-none" />
                <BookOpen className="w-16 h-16 text-[#5d349d] mb-6 animate-pulse-soft" />
                <h4 className="font-display text-lg font-bold text-foreground mb-2">Contenido de Valor</h4>
                <p className="font-body text-sm text-foreground-muted max-w-xs">
                  Guías estratégicas sin tecnicismos innecesarios para SEO en nichos complejos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 06. CONTACTO ── */}
      <section className="py-24 bg-[#710426]/5 relative overflow-hidden border-t border-border/50">
        <div className="absolute top-1/4 left-10 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <span className="inline-block font-body text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 px-4 py-1.5 rounded-full">
              06 · Plan de Acción
            </span>
            <h2 className="font-display text-3xl md:text-5xl text-primary font-semibold leading-tight">
              ¿Hablamos con criterio?
            </h2>
            <p className="font-body text-lg sm:text-xl text-foreground-muted leading-relaxed max-w-2xl mx-auto">
              Cuéntame tu proyecto y diseñemos juntas una estrategia digital sólida, sin rodeos y adaptada a tus objetivos de negocio para captar oportunidades orgánicas reales.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm font-body text-foreground-muted pt-2">
              <span className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-primary" />
                Respuesta en menos de 24 h
              </span>
              <span className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-secondary" />
                Diagnóstico de bloqueos inicial
              </span>
            </div>
            <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button variant="hero" size="lg" asChild className="group w-full sm:w-auto">
                <Link to="/contacto">
                  Iniciar análisis estratégico
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button variant="heroOutline" size="lg" asChild className="w-full sm:w-auto">
                <a href="mailto:pilarbelena25@gmail.com?subject=AN%C3%81LISIS%20ESTRAT%C3%89GICO">
                  Escribir correo directo
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default OverviewSection;
