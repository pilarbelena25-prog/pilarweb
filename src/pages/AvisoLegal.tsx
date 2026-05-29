import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const AvisoLegal = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="pt-32 pb-12 bg-gradient-hero">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              <h1 className="font-display text-4xl md:text-5xl leading-tight text-primary">
                Aviso Legal
              </h1>
            </div>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto space-y-12">
              
              {/* 1. Identificación y Titularidad */}
              <div>
                <h2 className="font-display text-2xl md:text-3xl mb-4 text-foreground">
                  1. Identificación y Titularidad
                </h2>
                <p className="font-body text-foreground-muted leading-relaxed mb-4">
                  En cumplimiento de lo dispuesto en el artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico, se informa de que este sitio web es titularidad de:
                </p>
                <div className="bg-soft-pink rounded-lg p-6">
                  <ul className="font-body text-foreground space-y-2">
                    <li><strong>Titular:</strong> María Pilar Beleña Gasent</li>
                    <li><strong>Nombre comercial:</strong> Pilar Beleña Lab</li>
                    <li><strong>Actividad:</strong> Consultoría SEO, Estrategia Digital, Contenido e IA aplicada a Fintech e Inversión Inmobiliaria</li>
                    <li><strong>Correo electrónico:</strong>{" "}
                      <a href="mailto:pilarbelena25@gmail.com" className="text-primary hover:underline">
                        pilarbelena25@gmail.com
                      </a>
                    </li>
                    <li><strong>Sitio web:</strong>{" "}
                      <a href="https://pilar-belena-seo-fintech-lab.netlify.app/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                        https://pilar-belena-seo-fintech-lab.netlify.app/
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              {/* 2. Objeto */}
              <div>
                <h2 className="font-display text-2xl md:text-3xl mb-4 text-foreground">
                  2. Objeto
                </h2>
                <p className="font-body text-foreground-muted leading-relaxed">
                  El presente sitio web tiene por objeto ofrecer información sobre los servicios profesionales de Pilar Beleña Lab, así como compartir contenidos, recursos, análisis y artículos relacionados con SEO, Fintech, Inversión Inmobiliaria, Real Estate, Contenido Estratégico e Inteligencia Artificial aplicada al Posicionamiento digital.
                </p>
              </div>

              {/* 3. Condiciones de uso */}
              <div>
                <h2 className="font-display text-2xl md:text-3xl mb-4 text-foreground">
                  3. Condiciones de uso
                </h2>
                <p className="font-body text-foreground-muted leading-relaxed mb-4">
                  El acceso y uso de este sitio web atribuye la condición de usuario e implica la aceptación plena de las condiciones recogidas en este Aviso Legal. El usuario se compromete a hacer un uso adecuado de los contenidos y servicios que Pilar Beleña Lab ofrece a través de la web y, con carácter enunciativo pero no limitativo, a no emplearlos para:
                </p>
                <ul className="font-body text-foreground-muted leading-relaxed space-y-3 list-disc pl-6">
                  <li>Realizar actividades ilícitas o contrarias a la buena fe y al orden público.</li>
                  <li>Difundir contenidos ofensivos, difamatorios, discriminatorios o que vulneren derechos de terceros.</li>
                  <li>Provocar daños en los sistemas físicos y lógicos del sitio web, de sus proveedores o de terceras personas.</li>
                  <li>Intentar acceder o utilizar cuentas, datos o áreas restringidas sin autorización.</li>
                </ul>
              </div>

              {/* 4. Propiedad intelectual e industrial */}
              <div>
                <h2 className="font-display text-2xl md:text-3xl mb-4 text-foreground">
                  4. Propiedad intelectual e industrial
                </h2>
                <p className="font-body text-foreground-muted leading-relaxed">
                  Todos los contenidos del sitio web, incluyendo textos, imágenes, diseño, estructura, logotipos, marcas, código fuente y demás elementos, están protegidos por la normativa de propiedad intelectual e industrial. Salvo autorización expresa, queda prohibida su reproducción, distribución, comunicación pública, transformación o cualquier otro uso no autorizado.
                </p>
              </div>

              {/* 5. Responsabilidad */}
              <div>
                <h2 className="font-display text-2xl md:text-3xl mb-4 text-foreground">
                  5. Responsabilidad
                </h2>
                <p className="font-body text-foreground-muted leading-relaxed mb-4">
                  Pilar Beleña Lab no se hace responsable de los errores u omisiones en los contenidos del sitio web, ni de los daños derivados de su uso, ni de cualquier actuación realizada en base a la información aquí publicada.
                </p>
                <p className="font-body text-foreground-muted leading-relaxed">
                  Tampoco se garantiza la ausencia de interrupciones técnicas, virus o cualquier otro elemento que pudiera producir alteraciones en el sistema informático del usuario. No obstante, se adoptarán las medidas necesarias para mantener el sitio web en correcto funcionamiento.
                </p>
              </div>

              {/* 6. Enlaces externos */}
              <div>
                <h2 className="font-display text-2xl md:text-3xl mb-4 text-foreground">
                  6. Enlaces externos
                </h2>
                <p className="font-body text-foreground-muted leading-relaxed">
                  Este sitio web puede contener enlaces a páginas de terceros. Pilar Beleña Lab no se responsabiliza del contenido, informaciones o servicios que pudieran aparecer en dichos sitios, ni de cualquier daño derivado de su uso.
                </p>
              </div>

              {/* 7. Modificaciones */}
              <div>
                <h2 className="font-display text-2xl md:text-3xl mb-4 text-foreground">
                  7. Modificaciones
                </h2>
                <p className="font-body text-foreground-muted leading-relaxed">
                  Pilar Beleña Lab se reserva el derecho de modificar, actualizar o eliminar en cualquier momento y sin previo aviso los contenidos del sitio web, así como el presente Aviso Legal, en función de cambios legales, técnicos o de la propia actividad del proyecto.
                </p>
              </div>

              {/* 8. Legislación aplicable y jurisdicción */}
              <div>
                <h2 className="font-display text-2xl md:text-3xl mb-4 text-foreground">
                  8. Legislación aplicable y jurisdicción
                </h2>
                <p className="font-body text-foreground-muted leading-relaxed">
                  La relación entre Pilar Beleña Lab y el usuario se regirá por la normativa española vigente. Para la resolución de cualquier controversia que pudiera surgir con relación al acceso o uso de este sitio web, las partes se someterán a los juzgados y tribunales que correspondan conforme a la legislación aplicable.
                </p>
              </div>

            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AvisoLegal;
