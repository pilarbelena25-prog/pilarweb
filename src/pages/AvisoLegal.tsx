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
              <div>
                <h2 className="font-display text-2xl md:text-3xl mb-4 text-foreground">
                  Identificación y Titularidad
                </h2>
                <p className="font-body text-foreground-muted leading-relaxed mb-4">
                  En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y Comercio Electrónico (LSSICE), se exponen a continuación los datos identificativos del titular del sitio web:
                </p>
                <div className="bg-soft-pink rounded-lg p-6">
                  <ul className="font-body text-foreground space-y-2">
                    <li><strong>Titular:</strong> María Pilar Beleña Gasent</li>
                    <li><strong>N.I.F/CIF:</strong> 52688654R</li>
                    <li><strong>Correo Electrónico:</strong>{" "}
                      <a href="mailto:pilarbelena25@gmail.com" className="text-primary hover:underline">
                        pilarbelena25@gmail.com
                      </a>
                    </li>
                    <li><strong>Sitio Web:</strong>{" "}
                      <a href="https://pilar-belena-seo-fintech-lab.netlify.app/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                        https://pilar-belena-seo-fintech-lab.netlify.app/
                      </a>
                      {" "}(www.pilarbelena.com redirige aquí)
                    </li>
                  </ul>
                </div>
              </div>

              <div>
                <h2 className="font-display text-2xl md:text-3xl mb-4 text-foreground">
                  Finalidad del Sitio Web
                </h2>
                <p className="font-body text-foreground-muted leading-relaxed">
                  El propósito de este sitio web es ofrecer Servicios Profesionales de Consultoría en SEO, IA y Growth Strategy para marcas Fintech y Digital Brands, así como programas personalizados de Posicionamiento SEO y Visibilidad online.
                </p>
              </div>

              <div>
                <h2 className="font-display text-2xl md:text-3xl mb-4 text-foreground">
                  Ley y Jurisdicción Aplicable
                </h2>
                <p className="font-body text-foreground-muted leading-relaxed">
                  El presente sitio web se rige conforme a la legislación española. Para la resolución de cualquier controversia que pudiera surgir con los usuarios en relación con las condiciones de uso, contenidos o servicios ofrecidos en el sitio web, se estará a lo dispuesto por los Jueces y Tribunales competentes de la ciudad de Valencia, de conformidad con la normativa vigente.
                </p>
              </div>

              <div>
                <h2 className="font-display text-2xl md:text-3xl mb-4 text-foreground">
                  Resolución de Litigios
                </h2>
                <p className="font-body text-foreground-muted leading-relaxed mb-4">
                  De conformidad con el Reglamento (UE) nº 524/2013 del Parlamento Europeo y del Consejo, se informa a los usuarios de que tienen derecho a resolver cualquier conflicto relacionado con los servicios contratados a través de la plataforma de resolución de litigios en línea de la Comisión Europea, disponible en el siguiente enlace:
                </p>
                <a
                  href="https://ec.europa.eu/consumers/odr/main/index.cfm?event=main.home2.show&lng=ES"
                  className="text-primary hover:underline font-body break-all"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://ec.europa.eu/consumers/odr/main/index.cfm?event=main.home2.show&lng=ES
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

export default AvisoLegal;
