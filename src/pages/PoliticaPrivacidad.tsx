import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const PoliticasPrivacidad = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="pt-32 pb-12 bg-gradient-hero">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              <h1 className="font-display text-4xl md:text-5xl leading-tight text-primary">
                Política de Privacidad
              </h1>
            </div>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto space-y-12">
              
              {/* 1. Información básica */}
              <div>
                <h2 className="font-display text-2xl md:text-3xl mb-4 text-foreground">
                  1. Información básica sobre Protección de Datos
                </h2>
                <p className="font-body text-foreground-muted leading-relaxed mb-6">
                  En cumplimiento de lo dispuesto en el Reglamento General de Protección de Datos (RGPD) y en la normativa española de protección de datos, se informa al usuario de que los datos personales que facilite a través de este sitio web serán tratados por:
                </p>
                <div className="bg-soft-pink rounded-lg p-6 space-y-3 font-body text-foreground">
                  <p><strong>Responsable:</strong> María Pilar Beleña Gasent</p>
                  <p><strong>Nombre comercial:</strong> Pilar Beleña Lab</p>
                  <p>
                    <strong>Correo electrónico:</strong>{" "}
                    <a href="mailto:pilarbelena25@gmail.com" className="text-primary hover:underline">
                      pilarbelena25@gmail.com
                    </a>
                  </p>
                  <p>
                    <strong>Sitio web:</strong>{" "}
                    <a href="https://pilar-belena-seo-fintech-lab.netlify.app/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline break-all">
                      https://pilar-belena-seo-fintech-lab.netlify.app/
                    </a>
                  </p>
                  <p><strong>Dirección Postal:</strong> Calle Trinidad, 6 Puerta 6 Cheste (VALENCIA)</p>
                  <p>
                    <strong>Newsletter:</strong>{" "}
                    <a href="https://www.linkedin.com/build-relation/newsletter-follow?entityUrn=7155269563230674944" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline break-all">
                      Suscripción a la Newsletter en LinkedIn
                    </a>
                  </p>
                </div>
              </div>

              {/* 2. Finalidad del Tratamiento */}
              <div>
                <h2 className="font-display text-2xl md:text-3xl mb-4 text-foreground">
                  2. Finalidad del Tratamiento
                </h2>
                <p className="font-body text-foreground-muted leading-relaxed mb-4">
                  Los datos personales facilitados a través de los formularios de contacto, correo electrónico o cualquier otro medio habilitado en la web se tratarán con las siguientes finalidades:
                </p>
                <ul className="font-body text-foreground-muted leading-relaxed space-y-3 list-disc pl-6">
                  <li>Atender consultas o solicitudes de información.</li>
                  <li>Gestionar comunicaciones profesionales.</li>
                  <li>Analizar posibles colaboraciones o prestación de servicios.</li>
                  <li>En su caso, gestionar el envío de información relacionada con los servicios del Lab, siempre que exista base legal para ello.</li>
                </ul>
              </div>

              {/* 3. Base legal para el Tratamiento */}
              <div>
                <h2 className="font-display text-2xl md:text-3xl mb-4 text-foreground">
                  3. Base legal para el Tratamiento
                </h2>
                <p className="font-body text-foreground-muted leading-relaxed mb-4">
                  La base legal para el tratamiento de los datos será, según el caso:
                </p>
                <ul className="font-body text-foreground-muted leading-relaxed space-y-3 list-disc pl-6">
                  <li>El consentimiento del usuario al enviar un formulario o contactar voluntariamente.</li>
                  <li>La ejecución de medidas precontractuales o contractuales.</li>
                  <li>El cumplimiento de obligaciones legales.</li>
                </ul>
              </div>

              {/* 4. Conservación de los Datos */}
              <div>
                <h2 className="font-display text-2xl md:text-3xl mb-4 text-foreground">
                  4. Conservación de los Datos
                </h2>
                <p className="font-body text-foreground-muted leading-relaxed">
                  Los datos se conservarán durante el tiempo necesario para atender la solicitud realizada y, en su caso, durante los plazos exigidos por la normativa aplicable para atender posibles responsabilidades legales. Cuando ya no sean necesarios, se suprimen con medidas de seguridad adecuadas.
                </p>
              </div>

              {/* 5. Comunicación de Datos a Terceros */}
              <div>
                <h2 className="font-display text-2xl md:text-3xl mb-4 text-foreground">
                  5. Comunicación de Datos a Terceros
                </h2>
                <p className="font-body text-foreground-muted leading-relaxed">
                  Con carácter general, no se ceden datos a terceros, salvo obligación legal o cuando sea necesario para la prestación de un servicio vinculado al funcionamiento técnico del sitio web, en cuyo caso se hará siempre con las garantías adecuadas.
                </p>
              </div>

              {/* 6. Derechos del Usuario */}
              <div>
                <h2 className="font-display text-2xl md:text-3xl mb-4 text-foreground">
                  6. Derechos del Usuario
                </h2>
                <p className="font-body text-foreground-muted leading-relaxed mb-4">
                  El usuario puede ejercer en cualquier momento sus derechos de:
                </p>
                <ul className="font-body text-foreground-muted leading-relaxed space-y-2 list-disc pl-6 mb-4">
                  <li>Acceso.</li>
                  <li>Rectificación.</li>
                  <li>Supresión.</li>
                  <li>Limitación del tratamiento.</li>
                  <li>Portabilidad.</li>
                  <li>Oposición.</li>
                </ul>
                <p className="font-body text-foreground-muted leading-relaxed">
                  Para ejercer estos derechos, puede enviar una solicitud al correo electrónico de contacto indicado en esta web (
                  <a href="mailto:pilarbelena25@gmail.com" className="text-primary hover:underline">
                    pilarbelena25@gmail.com
                  </a>
                  ), acompañando una copia de su documento de identidad o medio equivalente que permita verificar su identidad.
                </p>
              </div>

              {/* 7. Seguridad de la Información */}
              <div>
                <h2 className="font-display text-2xl md:text-3xl mb-4 text-foreground">
                  7. Seguridad de la Información
                </h2>
                <p className="font-body text-foreground-muted leading-relaxed">
                  Pilar Beleña Lab adopta las medidas técnicas y organizativas necesarias para proteger los datos personales y evitar su pérdida, alteración, acceso no autorizado o tratamiento indebido.
                </p>
              </div>

              {/* 8. Cookies y Tecnologías similares */}
              <div>
                <h2 className="font-display text-2xl md:text-3xl mb-4 text-foreground">
                  8. Cookies y Tecnologías similares
                </h2>
                <p className="font-body text-foreground-muted leading-relaxed">
                  Este sitio web puede utilizar cookies u otras tecnologías similares. Para más información sobre su uso, consulte la{" "}
                  <a href="/cookies" className="text-primary hover:underline">
                    Política de Cookies
                  </a>{" "}
                  correspondiente.
                </p>
              </div>

              {/* 9. Cambios en la Política */}
              <div>
                <h2 className="font-display text-2xl md:text-3xl mb-4 text-foreground">
                  9. Cambios en la Política
                </h2>
                <p className="font-body text-foreground-muted leading-relaxed">
                  Esta Política de Privacidad podrá actualizarse cuando sea necesario para adaptarla a cambios legales, técnicos o de funcionamiento de la web. La versión publicada en cada momento será la vigente.
                </p>
              </div>

              <p className="font-body text-foreground-muted text-sm pt-4">
                Fecha de última actualización: 01/06/2026
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PoliticasPrivacidad;
