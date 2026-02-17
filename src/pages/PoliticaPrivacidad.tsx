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
              <div>
                <p className="font-body text-foreground-muted leading-relaxed">
                  En cumplimiento del Reglamento General de Protección de Datos (RGPD) 2016/679, de 27 de abril de 2016, y de la Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y Garantía de los Derechos Digitales (LOPDGDD), te informo que los datos que nos facilites a través de este sitio web serán tratados por María Pilar Beleña Gasent, con D.N.I. 52688654R y domicilio en Calle Trinidad, 6 Puerta 6, 46380 - Cheste (Valencia), en adelante "Pilar Beleña - SEO Fintech Lab"; con la finalidad exclusiva de prestar los servicios solicitados y mantener una comunicación efectiva contigo.
                </p>
              </div>

              <div>
                <h2 className="font-display text-2xl md:text-3xl mb-4 text-foreground">
                  Finalidad del tratamiento
                </h2>
                <p className="font-body text-foreground-muted leading-relaxed mb-4">
                  Los datos personales recogidos en este sitio web mediante formularios o comunicaciones electrónicas serán tratados únicamente para los siguientes fines:
                </p>
                <ul className="font-body text-foreground-muted leading-relaxed space-y-3 list-disc pl-6">
                  <li>Gestionar las solicitudes de información o de servicios de Auditoría SEO Fintech, Posicionamiento SEO y Consultoría Estratégica.</li>
                  <li>Enviar comunicaciones informativas sobre SEO Fintech, IA aplicada a Growth Strategy, guías y ofertas de servicios, siempre con tu consentimiento explícito.</li>
                  <li>Gestionar tu suscripción a la Newsletter o el acceso a Contenidos descargables (Lead Magnets).</li>
                  <li>Mejorar la experiencia del usuario en nuestro sitio web a través de Análisis de datos anónimos.</li>
                </ul>
              </div>

              <div>
                <h2 className="font-display text-2xl md:text-3xl mb-4 text-foreground">
                  Base legal
                </h2>
                <div className="bg-soft-pink rounded-lg p-6 space-y-4">
                  <p className="font-body text-foreground leading-relaxed">
                    <strong>Legitimación:</strong> Consentimiento del interesado y ejecución de servicios precontractuales.
                  </p>
                  <p className="font-body text-foreground leading-relaxed">
                    <strong>Plazo de conservación:</strong> Mientras se mantenga la relación con el usuario y/o no se solicite su supresión, y en todo caso, durante los plazos legalmente establecidos para el cumplimiento de obligaciones legales.
                  </p>
                  <p className="font-body text-foreground leading-relaxed">
                    <strong>Destinatarios:</strong> No se ceden datos a terceros salvo proveedores técnicos (hosting Netlify, plataformas de email marketing, herramientas de analítica web) bajo acuerdos de encargo de tratamiento conforme al artículo 28 RGPD.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="font-display text-2xl md:text-3xl mb-4 text-foreground">
                  Derechos de los interesados
                </h2>
                <p className="font-body text-foreground-muted leading-relaxed mb-4">
                  Como usuario, tienes derecho a:
                </p>
                <ul className="font-body text-foreground-muted leading-relaxed space-y-3 list-disc pl-6">
                  <li>Acceso a tus datos personales</li>
                  <li>Rectificación de datos inexactos</li>
                  <li>Supresión ("derecho al olvido") cuando ya no sean necesarios</li>
                  <li>Oposición al tratamiento de tus datos</li>
                  <li>Limitación del tratamiento en ciertos casos</li>
                  <li>Portabilidad de tus datos a otro responsable del tratamiento</li>
                </ul>
                <p className="font-body text-foreground-muted leading-relaxed mt-4">
                  Para ejercer tus derechos, puedes enviar un correo electrónico a:{" "}
                  <a href="mailto:pilarbelena25@gmail.com" className="text-primary hover:underline">
                    pilarbelena25@gmail.com
                  </a>
                  ; incluyendo tu nombre, apellidos y copia de tu documento de identidad.
                </p>
              </div>

              <div>
                <h2 className="font-display text-2xl md:text-3xl mb-4 text-foreground">
                  Medidas de seguridad
                </h2>
                <p className="font-body text-foreground-muted leading-relaxed">
                  Trato tus datos de manera confidencial, implementando medidas técnicas y organizativas para protegerlos contra accesos no autorizados, pérdida, alteración o destrucción. Estas medidas se adaptarán según el estado de la tecnología y la naturaleza de los datos tratados.
                </p>
              </div>

              <div>
                <h2 className="font-display text-2xl md:text-3xl mb-4 text-foreground">
                  Cookies
                </h2>
                <p className="font-body text-foreground-muted leading-relaxed">
                  Este sitio web utiliza cookies técnicas esenciales y de análisis anónimas. Consulta nuestra{" "}
                  <a href="/cookies" className="text-primary hover:underline">
                    Política de Cookies
                  </a>{" "}
                  específica.
                </p>
              </div>

              <div>
                <h2 className="font-display text-2xl md:text-3xl mb-4 text-foreground">
                  Enlaces externos
                </h2>
                <p className="font-body text-foreground-muted leading-relaxed">
                  Este sitio web puede contener enlaces a páginas externas. Pilar Beleña - SEO Fintech Lab no se hace responsable del tratamiento de datos que puedan realizar dichas páginas. Recomendamos revisar sus políticas de privacidad antes de proporcionar cualquier información personal.
                </p>
              </div>

              <div>
                <h2 className="font-display text-2xl md:text-3xl mb-4 text-foreground">
                  Actualizaciones
                </h2>
                <p className="font-body text-foreground-muted leading-relaxed">
                  Pilar Beleña se reserva el derecho de actualizar esta política para reflejar cambios legales o en nuestras prácticas. Las modificaciones serán notificadas mediante avisos en el sitio web.
                </p>
              </div>

              <p className="font-body text-foreground-muted text-sm">
                Fecha de última actualización: 17/02/2026
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
