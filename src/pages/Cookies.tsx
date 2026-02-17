import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const Cookies = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="pt-32 pb-12 bg-gradient-hero">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              <h1 className="font-display text-4xl md:text-5xl leading-tight text-primary">
                Política de Cookies
              </h1>
              <p className="font-body text-foreground-muted mt-4 text-lg">
                SEO Fintech Lab
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto space-y-12">
              <p className="font-body text-foreground-muted leading-relaxed">
                Información sobre cookies conforme al Artículo 22 LSSICE y RGPD 2016/679.
              </p>

              <div>
                <h2 className="font-display text-2xl md:text-3xl mb-4 text-foreground">
                  ¿Qué son las cookies?
                </h2>
                <p className="font-body text-foreground-muted leading-relaxed">
                  Pequeños archivos que se descargan en tu dispositivo al acceder a este sitio web. Permiten almacenar y recuperar información sobre hábitos de navegación para mejorar la experiencia.
                </p>
              </div>

              <div>
                <h2 className="font-display text-2xl md:text-3xl mb-6 text-foreground">
                  Cookies utilizadas en SEO Fintech Lab
                </h2>

                <div className="space-y-6">
                  <div className="bg-soft-pink rounded-lg p-6">
                    <h3 className="font-display text-xl mb-3 text-foreground">
                      1. Cookies técnicas (propias, esenciales)
                    </h3>
                    <ul className="font-body text-foreground-muted leading-relaxed space-y-2">
                      <li><strong>Finalidad:</strong> Funcionamiento básico (navegación, formularios de contacto, sesión).</li>
                      <li><strong>Duración:</strong> Sesión (se eliminan al cerrar navegador).</li>
                      <li><strong>Ejemplo:</strong> <code className="bg-background px-2 py-0.5 rounded text-sm">_session</code>, <code className="bg-background px-2 py-0.5 rounded text-sm">csrf_token</code>.</li>
                    </ul>
                  </div>

                  <div className="bg-soft-pink rounded-lg p-6">
                    <h3 className="font-display text-xl mb-3 text-foreground">
                      2. Cookies de análisis (terceros)
                    </h3>
                    <ul className="font-body text-foreground-muted leading-relaxed space-y-2">
                      <li><strong>Proveedor:</strong> Google Analytics (google-analytics.com)</li>
                      <li><strong>Finalidad:</strong> Análisis anónimo de tráfico, comportamiento usuario, mejora contenidos.</li>
                      <li><strong>Datos:</strong> IP anonimizada, páginas visitadas, tiempo en sitio.</li>
                      <li><strong>Duración:</strong> 2 años máximo (<code className="bg-background px-2 py-0.5 rounded text-sm">_ga</code>, <code className="bg-background px-2 py-0.5 rounded text-sm">_gid</code>, <code className="bg-background px-2 py-0.5 rounded text-sm">_gat</code>).</li>
                    </ul>
                  </div>

                  <div className="bg-soft-pink rounded-lg p-6">
                    <h3 className="font-display text-xl mb-3 text-foreground">
                      3. Cookies publicitarias
                    </h3>
                    <p className="font-body text-foreground-muted leading-relaxed">
                      NO se utilizan actualmente.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="font-display text-2xl md:text-3xl mb-4 text-foreground">
                  Gestión de cookies
                </h2>
                <ul className="font-body text-foreground-muted leading-relaxed space-y-3 list-disc pl-6">
                  <li>Banner de consentimiento en primera visita: Aceptar / Rechazar / Configurar.</li>
                  <li>Rechazar análisis = navegación sin cookies de terceros.</li>
                  <li>Puedes configurar las cookies desde tu navegador.</li>
                </ul>
              </div>

              <div>
                <h2 className="font-display text-2xl md:text-3xl mb-4 text-foreground">
                  Cómo deshabilitar cookies por navegador
                </h2>
                <div className="bg-soft-pink rounded-lg p-6">
                  <ul className="font-body text-foreground-muted leading-relaxed space-y-3">
                    <li>
                      <strong>Google Chrome:</strong>{" "}
                      <code className="bg-background px-2 py-0.5 rounded text-sm">chrome://settings/cookies</code>
                    </li>
                    <li>
                      <strong>Mozilla Firefox:</strong>{" "}
                      <code className="bg-background px-2 py-0.5 rounded text-sm">about:preferences#privacy</code>
                    </li>
                    <li>
                      <strong>Safari:</strong> Preferencias &gt; Privacidad
                    </li>
                    <li>
                      <strong>Microsoft Edge:</strong>{" "}
                      <code className="bg-background px-2 py-0.5 rounded text-sm">edge://settings/content/cookies</code>
                    </li>
                    <li>
                      <strong>Móviles:</strong> Ajustes &gt; Privacidad &gt; Cookies
                    </li>
                  </ul>
                </div>
              </div>

              <div>
                <h2 className="font-display text-2xl md:text-3xl mb-4 text-foreground">
                  Google Analytics Opt-out
                </h2>
                <p className="font-body text-foreground-muted leading-relaxed">
                  Puedes desactivar Google Analytics instalando el complemento de inhabilitación disponible en:{" "}
                  <a
                    href="https://tools.google.com/dlpage/gaoptout"
                    className="text-primary hover:underline break-all"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://tools.google.com/dlpage/gaoptout
                  </a>
                </p>
              </div>

              <div>
                <h2 className="font-display text-2xl md:text-3xl mb-4 text-foreground">
                  Hosting
                </h2>
                <p className="font-body text-foreground-muted leading-relaxed">
                  Netlify (no WordPress), cookies técnicas limitadas a navegación esencial.
                </p>
              </div>

              <div>
                <h2 className="font-display text-2xl md:text-3xl mb-4 text-foreground">
                  Actualizaciones
                </h2>
                <p className="font-body text-foreground-muted leading-relaxed">
                  Esta política puede modificarse. Notificación vía banner o aviso en web.
                </p>
              </div>

              <div className="border-t border-silver pt-6 space-y-2">
                <p className="font-body text-foreground-muted text-sm">
                  Fecha de última actualización: 17/02/2026
                </p>
                <p className="font-body text-foreground-muted text-sm">
                  Contacto:{" "}
                  <a href="mailto:pilarbelena25@gmail.com" className="text-primary hover:underline">
                    pilarbelena25@gmail.com
                  </a>
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

export default Cookies;
