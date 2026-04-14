import { ReactNode } from "react";
import pilarPhoto from "@/assets/pilar.jpeg";
import grilloPhoto from "@/assets/grillo.jpeg";
import { LazyImage } from "@/components/ui/LazyImage";

interface TeamMember {
  photo: string;
  alt: string;
  name: string;
  role: string;
  bio: ReactNode;
  tags: string[];
}

const team: TeamMember[] = [
  {
    photo: pilarPhoto,
    alt: "Pilar Beleña - Fundadora SEO Fintech Lab | Consultora SEO Fintech España",
    name: "Pilar Beleña",
    role: "Fundadora & Consultora SEO Fintech",
    bio: "Especializada en posicionamiento SEO para el sector financiero digital en España. Transformo la complejidad Fintech en estrategias SEO medibles, integrando Inteligencia Artificial para acelerar resultados.",
    tags: ["SEO Fintech", "IA Aplicada", "+5 años", "España"],
  },
  {
    photo: grilloPhoto,
    alt: "Manuel De León - Socio Técnico SEO Fintech Lab | Desarrollador Web SEO Técnico",
    name: "Manuel De León",
    role: "Socio Técnico & Desarrollador Web",
    bio: (
      <>
        Ingeniero de Sonido reconvertido en{" "}
        <a
          href="https://elgrillo.dev"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary font-medium hover:underline underline-offset-4"
        >
          desarrollador web con especialización en SEO Técnico
        </a>{" "}
        desde 2020. Responsable de la parte técnica del laboratorio: rendimiento, arquitectura e indexabilidad.
      </>
    ),
    tags: ["SEO Técnico", "Desarrollo Web", "LATAM + España"],
  },
];

const AboutSection = () => {
  return (
    <section id="equipo" className="py-16 bg-background-secondary relative">
      {/* Decorative top accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-px bg-gradient-to-r from-transparent via-accent to-transparent" />

      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl text-foreground mb-3">
            Nuestro Equipo
          </h2>
          <p className="font-body text-foreground-muted text-base max-w-xl mx-auto">
            Las personas detrás de SEO Fintech Lab, combinando estrategia, tecnología y especialización financiera.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {team.map((member) => (
            <article
              key={member.name}
              className="bg-background rounded-2xl border border-border shadow-elegant p-8 text-center group hover:-translate-y-1 transition-all duration-300 flex flex-col items-center"
            >
              {/* Circular photo */}
              <div className="w-32 h-32 mb-6 flex-shrink-0">
                <LazyImage
                  src={member.photo}
                  alt={member.alt}
                  className="w-full h-full rounded-full object-cover object-top ring-4 ring-primary/20 group-hover:ring-primary/40 transition-all duration-300 shadow-elegant"
                />
              </div>

              {/* Name */}
              <h3 className="font-display text-2xl text-foreground mb-1">
                {member.name}
              </h3>

              {/* Role */}
              <span className="font-body text-xs text-secondary uppercase tracking-widest mb-4 block">
                {member.role}
              </span>

              {/* Separator */}
              <div className="w-12 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent mb-4" />

              {/* Bio */}
              <p className="font-body text-sm text-foreground-muted leading-relaxed mb-6">
                {member.bio}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 justify-center">
                {member.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-soft-pink text-primary text-xs font-body px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
