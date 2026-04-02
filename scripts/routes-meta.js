export const BASE_URL = 'https://pilar-belena-seo-fintech-lab.netlify.app';

export const routesMeta = [
  {
    route: '/',
    title: 'Pilar Beleña - SEO Fintech Lab | Estrategia SEO para Fintech',
    description:
      'Fundadora y Partner Estratégica Especializada en SEO, IA y Growth Strategy para marcas Fintech y Digital Brands. Ayudo a empresas de Banca Digital, Pagos, Insurtech y Cripto a ganar Visibilidad y Autoridad en buscadores, convirtiéndose en la respuesta que Google y los LLMs citan.',
    canonical: `${BASE_URL}/`,
    ogType: 'website',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: 'Pilar Beleña',
      jobTitle: 'Fundadora y Partner Estratégica SEO Fintech',
      url: `${BASE_URL}/`,
      sameAs: ['https://linkedin.com/in/pilarbelena'],
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
        'Fundadora y Partner Estratégica Especializada en SEO, IA y Growth Strategy para marcas Fintech y Digital Brands. Ayudo a empresas de Banca Digital, Pagos, Insurtech y Cripto a ganar Visibilidad y Autoridad en buscadores, convirtiéndose en la respuesta que Google y los LLMs citan.',
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
];
