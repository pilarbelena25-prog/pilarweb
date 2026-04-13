export const BASE_URL = 'https://pilar-belena-seo-fintech-lab.netlify.app';

export const routesMeta = [
  {
    route: '/',
    title: 'Pilar Beleña - SEO Fintech Lab | Estrategia SEO para Fintech',
    description:
      'Fundadora SEO Fintech Lab | Auditoría SEO Express que convierte Webs Fintech Estancadas en 10-15 Leads/Mes Orgánicos | Sin depender de Portales ni ADS.',
    canonical: `${BASE_URL}/`,
    ogType: 'website',
    imageSource: 'src/assets/Home_Auditoría Express Lab.webp',
    jsonLd: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Person',
          '@id': `${BASE_URL}/#pilar-belena`,
          name: 'Pilar Beleña',
          jobTitle: 'Fundadora y Partner Estratégica SEO Fintech',
          url: `${BASE_URL}/`,
          sameAs: [
            'https://www.linkedin.com/in/mar%C3%ADa-pilar-bele%C3%B1a-gasent-178b145a/',
          ],
          worksFor: { '@id': `${BASE_URL}/#organization` },
          knowsAbout: [
            'SEO',
            'SEO Fintech',
            'Fintech',
            'Banca Digital',
            'Pagos Digitales',
            'Insurtech',
            'Cripto y Web3',
            'Growth Marketing',
            'Estrategia Digital',
            'Inteligencia Artificial aplicada al SEO',
          ],
          description:
            'Fundadora SEO Fintech Lab | Auditoría SEO Express que convierte Webs Fintech Estancadas en 10-15 Leads/Mes Orgánicos | Sin depender de Portales ni ADS.',
        },
        {
          '@type': 'Organization',
          '@id': `${BASE_URL}/#organization`,
          name: 'SEO Fintech Lab',
          url: `${BASE_URL}/`,
          founder: { '@id': `${BASE_URL}/#pilar-belena` },
          description:
            'Consultoría SEO especializada en el sector Fintech y marcas financieras digitales.',
          sameAs: [
            'https://www.linkedin.com/in/mar%C3%ADa-pilar-bele%C3%B1a-gasent-178b145a/',
          ],
        },
      ],
    },
  },
  {
    route: '/blog',
    title: 'Blog SEO Fintech | Pilar Beleña SEO Fintech Lab',
    description:
      'Estrategias SEO, marketing Fintech e inteligencia artificial aplicada al posicionamiento digital. Artículos para Consultores, Startups y Empresas Financieras.',
    canonical: `${BASE_URL}/blog`,
    ogType: 'website',
  },
  {
    route: '/blog/seo-e-ia',
    title:
      'SEO e IA: Por qué la Estrategia importa más que el volumen en SEO Fintech 2026 | Pilar Beleña SEO Fintech Lab',
    description:
      'Con la IA Generativa, cualquier Fintech puede publicar miles de artículos diarios. Pero el volumen masivo no es ventaja competitiva: es un riesgo directo para tu autoridad de marca.',
    canonical: `${BASE_URL}/blog/seo-e-ia`,
    ogType: 'article',
    imageSource: 'src/assets/blog/articulo-1/1A.webp',
    datePublished: '2025-12-28',
    category: 'Consultor SEO Fintech',
  },
  {
    route: '/blog/hoja-de-ruta-seo-fintech-lab',
    title:
      "De 'Encontrable' a IRREMPLAZABLE en FINTECH: Hoja de ruta desde el SEO Fintech Lab | Pilar Beleña SEO Fintech Lab",
    description:
      'Estar en Google ya no es suficiente. En 2026, el verdadero reto del SEO Fintech es volverse irremplazable: que tu marca sea la referencia que los algoritmos eligen citar.',
    canonical: `${BASE_URL}/blog/hoja-de-ruta-seo-fintech-lab`,
    ogType: 'article',
    imageSource: 'src/assets/blog/articulo-2/2.webp',
    datePublished: '2025-12-30',
    category: 'Consultor SEO Fintech',
  },
  {
    route: '/blog/sge-y-el-nuevo-orden-de-busqueda',
    title:
      'SGE y el nuevo orden de búsqueda FINTECH: Cómo proteger el tráfico de tu marca financiera este año | Pilar Beleña SEO Fintech Lab',
    description:
      'La SGE convierte la página de resultados en un panel de respuestas. Para las marcas financieras, el riesgo no es solo perder posiciones: es que la IA se quede con la visibilidad que antes era tuya.',
    canonical: `${BASE_URL}/blog/sge-y-el-nuevo-orden-de-busqueda`,
    ogType: 'article',
    imageSource: 'src/assets/blog/articulo-3/3A.webp',
    datePublished: '2026-01-19',
    category: 'SEO para Empresas Financieras',
  },
  {
    route: '/blog/muerte-palabra-clave-transaccional-fintech',
    title:
      'La muerte de la palabra clave transaccional FINTECH: SEO de intención en la era de los LLM | Pilar Beleña SEO Fintech Lab',
    description:
      'Las palabras clave transaccionales mueren con LLM y SGE. Aprende SEO de intención para Fintech: protege conversiones ante la nueva búsqueda IA.',
    canonical: `${BASE_URL}/blog/muerte-palabra-clave-transaccional-fintech`,
    ogType: 'article',
    imageSource: 'src/assets/blog/articulo-4/4A.webp',
    datePublished: '2026-01-27',
    category: 'Consultor SEO Fintech',
  },
  {
    route: '/blog/auditorias-ia-fintech-eficiencia-embudo',
    title:
      'Auditorías de IA FINTECH: Cómo detectar qué partes de tu embudo financiero están perdiendo eficiencia | Pilar Beleña SEO Fintech Lab',
    description:
      'Tu embudo financiero pierde entre un 20-40% de eficiencia por problemas invisibles que la IA detecta al instante. Auditorías inteligentes para encontrar dónde se escapa tu conversión orgánica sin violar el cumplimiento.',
    canonical: `${BASE_URL}/blog/auditorias-ia-fintech-eficiencia-embudo`,
    ogType: 'article',
    imageSource: 'src/assets/blog/articulo-5/5A.webp',
    datePublished: '2026-02-08',
    category: 'SEO para Startups Fintech',
  },
  {
    route: '/blog/seo-entornos-regulados-fintech',
    title:
      "SEO FINTECH en Entornos Regulados: Cómo innovar sin romper el 'compliance' desde el Lab | Pilar Beleña SEO Fintech Lab",
    description:
      'Aprende cómo las Fintech pueden innovar en SEO sin incumplir la regulación. Estrategias prácticas, ejemplos y herramientas para crecer de forma segura.',
    canonical: `${BASE_URL}/blog/seo-entornos-regulados-fintech`,
    ogType: 'article',
    imageSource: 'src/assets/blog/articulo-6/6A.webp',
    datePublished: '2026-02-26',
    category: 'SEO para Empresas Financieras',
  },
  {
    route: '/blog/contenido-masivo-fintech-mito',
    title:
      'El Mito del Contenido Masivo FINTECH: Por qué 10 Artículos Estratégicos baten a 100 generados por bots | Pilar Beleña SEO Fintech Lab',
    description:
      'Saturar tu blog Fintech con posts generados por IA no genera autoridad: genera rebote. Descubre por qué 10 artículos estratégicos con datos B2B reales superan en leads a 100 artículos de bots.',
    canonical: `${BASE_URL}/blog/contenido-masivo-fintech-mito`,
    ogType: 'article',
    imageSource: 'src/assets/blog/articulo-7/7A.webp',
    datePublished: '2026-03-17',
    category: 'Consultor SEO Fintech',
  },
  {
    route: '/blog/datos-estructurados-entidades-fintech',
    title:
      'Datos Estructurados y Entidades Fintech: La verdadera forma en que la IA entiende tu Marca Financiera | Pilar Beleña SEO Fintech Lab',
    description:
      'Cuando la IA no tiene claro quién es tu Fintech, mezcla tu marca con otras similares. Los datos estructurados y entidades son la solución para que Google y los LLM te identifiquen correctamente.',
    canonical: `${BASE_URL}/blog/datos-estructurados-entidades-fintech`,
    ogType: 'article',
    imageSource: 'src/assets/blog/articulo-8/8A.webp',
    datePublished: '2026-03-27',
    category: 'SEO para Empresas Financieras',
  },
  {
    route: '/blog/escalar-sin-perder-el-alma-fintech',
    title:
      'Escalar sin perder el alma FINTECH: Cómo entrenar a tu IA con el tono de voz de tu Empresa Financiera | Pilar Beleña SEO Fintech Lab',
    description:
      "El 78% de las Startups Fintech pierde conversión por sonar 'Genérico-IA'. Aprende la metodología del Lab para entrenar tu IA con tu tono financiero real: datos, compliance y autoridad sectorial.",
    canonical: `${BASE_URL}/blog/escalar-sin-perder-el-alma-fintech`,
    ogType: 'article',
    imageSource: 'src/assets/blog/articulo-9/9A.webp',
    datePublished: '2026-04-06',
    category: 'SEO para Startups Fintech',
  },
  {
    route: '/auditoria-express-seo-fintech',
    title:
      'Auditoría Express SEO Fintech | Diagnóstico en 48h para tu Fintech | Pilar Beleña',
    description:
      'Descubre en 48h qué está frenando la visibilidad de tu Fintech. Diagnóstico rápido, técnico y accionable para saber exactamente qué corregir primero. 290€.',
    canonical: `${BASE_URL}/auditoria-express-seo-fintech`,
    ogType: 'website',
    imageSource: 'src/assets/Auditoria Express SEO Fintech Lab.webp',
  },
  {
    route: '/aviso-legal',
    title: 'Aviso Legal | Pilar Beleña SEO Fintech Lab',
    description:
      'Aviso legal de SEO Fintech Lab. Información legal sobre el titular del sitio web, condiciones de uso y responsabilidad.',
    canonical: `${BASE_URL}/aviso-legal`,
    ogType: 'website',
    robots: 'noindex, nofollow',
  },
  {
    route: '/cookies',
    title: 'Política de Cookies | Pilar Beleña SEO Fintech Lab',
    description:
      'Política de cookies de SEO Fintech Lab. Información sobre los tipos de cookies utilizadas y cómo gestionarlas.',
    canonical: `${BASE_URL}/cookies`,
    ogType: 'website',
    robots: 'noindex, nofollow',
  },
  {
    route: '/politica-privacidad',
    title: 'Política de Privacidad | Pilar Beleña SEO Fintech Lab',
    description:
      'Política de privacidad de SEO Fintech Lab. Información sobre el tratamiento de datos personales conforme al RGPD.',
    canonical: `${BASE_URL}/politica-privacidad`,
    ogType: 'website',
    robots: 'noindex, nofollow',
  },
];
