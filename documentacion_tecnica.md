# 🛠️ Documentación de Arquitectura y Decisiones Técnicas

Este documento detalla la estructura, las tecnologías empleadas y las decisiones arquitectónicas tomadas para el desarrollo de la plataforma web de **SEO Fintech Lab / Pilar Beleña**.

---

## 🏛️ 1. Arquitectura de Directorios

La estructura de carpetas sigue un patrón modular y escalable orientado a Componentes de Interfaz de Usuario y Páginas de Negocio:

```text
src/
├── assets/             # Recursos estáticos optimizados (WebP/SVG/Imágenes)
├── components/         # Componentes React reutilizables
│   ├── layout/         # Elementos de estructura global (Header, Footer, Navigation)
│   ├── sections/       # Bloques semánticos modulares de las páginas (Hero, Services, Contact, etc.)
│   └── ui/             # Componentes base atómicos (Shadcn-ui, botones, inputs, inputs optimizados)
├── hooks/              # Hooks personalizados globales (use-toast, adaptabilidad móvil)
├── lib/                # Utilidades y ayudantes globales (ej. merge de clases de Tailwind con clsx y tailwind-merge)
├── pages/              # Páginas y vistas principales asociadas al enrutador
│   └── blog/           # Artículos y recursos optimizados individualmente para posicionamiento orgánico
├── App.tsx             # Enrutamiento de la aplicación y proveedores de contexto globales
├── main.tsx            # Punto de entrada de la aplicación
└── index.css           # Estilos base, fuentes tipográficas y configuración del sistema de diseño
```

### Razón de esta estructura:
* **Separación de Intereses (Separation of Concerns):** Los componentes de UI atómicos (`components/ui`) están completamente desacoplados de la lógica de negocio. Las secciones de las páginas (`components/sections`) componen la interfaz, mientras que las páginas (`pages/`) manejan la carga del enrutador y metadatos SEO.
* **Escalabilidad del Blog:** Al estructurar la subcarpeta `pages/blog` con archivos TypeScript de React específicos para cada artículo, se logra un control absoluto sobre el HTML generado en cada artículo y la inyección exacta de datos estructurados (JSON-LD), algo crucial para el posicionamiento en Google.

---

## ⚙️ 2. Justificación del Stack Tecnológico y Dependencias

### Vite + React 18
* **Vite:** Elegido en lugar de Create React App (CRA) por su extrema velocidad en desarrollo basada en ESM nativo y una compilación de producción sumamente optimizada con Rollup (reduciendo drásticamente el peso de los bundles).
* **React 18:** Utiliza capacidades de renderizado concurrente y carga perezosa (`Suspense`, `lazy`) para agilizar el despliegue visual de la página.

### Tailwind CSS v3 + Shadcn UI + Radix UI
* **Tailwind CSS:** Minimiza el tamaño de la hoja de estilos en producción purgando clases no utilizadas. Acelera el desarrollo mediante el uso de clases utilitarias integradas en el flujo de trabajo sin generar CSS redundante.
* **Shadcn UI (basado en Radix UI):** Se eligió porque **no es una biblioteca de componentes tradicional** (como MUI o Bootstrap) que añade peso innecesario. Shadcn escribe el código directamente en nuestro proyecto. Esto nos da control del 100% sobre el HTML y el comportamiento del componente, permitiendo personalizar el rendimiento y la accesibilidad (a través de Radix primitives).

### React Router v6
* Permite una navegación fluida como una Single Page Application (SPA).
* **Scroll a Hashes:** Se ha implementado un componente personalizado (`ScrollToHash`) en [App.tsx](file:///c:/Users/Javavivi/Desktop/FIntechLab/pilarweb/src/App.tsx) para asegurar que, al navegar con marcadores o cambiar de página, el navegador se posicione automáticamente al inicio o en la sección idónea sin provocar saltos bruscos.

### React Query (`@tanstack/react-query` v5)
* Utilizado para la sincronización del estado del servidor. Permite mantener caché de consultas, reintentos silenciosos y evitar peticiones duplicadas a servicios externos, garantizando una excelente experiencia de usuario y reduciendo la carga de red.

### React Helmet Async
* Esencial para la estrategia SEO. Permite modificar dinámicamente etiquetas `<title>`, `<meta name="description">`, `<link rel="canonical">` y etiquetas OpenGraph desde dentro de los componentes React de forma segura y sin colisiones durante renderizados asíncronos.

### React Hook Form + Zod
* **React Hook Form:** Optimiza el rendimiento de los formularios (como el de contacto y la auditoría) al evitar re-renderizados innecesarios del componente padre cada vez que el usuario teclea un carácter (gracias al registro de inputs no controlados).
* **Zod:** Proporciona un esquema de validación robusto con tipado fuerte en TypeScript en tiempo de compilación y ejecución.

### @emailjs/browser
* Permite el envío directo de leads a la bandeja de correo de Pilar desde el cliente frontend de forma segura sin requerir el mantenimiento, coste y despliegue de un servidor backend dedicado para el envío de e-mails.

---

## 🎯 3. Decisiones Estratégicas para SEO y Rendimiento

1. **Idiomas en el Código:**
   * **Inglés para arquitectura técnica:** Los componentes de interfaz (`Button`, `Header`), hooks (`useMobile`) y utilidades se escriben en inglés siguiendo estándares globales del desarrollo de software.
   * **Español para rutas y contenido:** Los nombres de los archivos de páginas y artículos (`AuditoriaExpressSeoFintech.tsx`, `Cookies.tsx`, `pages/blog/*.tsx`) coinciden exactamente con la URL de producción. Esto facilita una correlación directa y coherente en sistemas de enrutamiento y posicionamiento orgánico en el mercado de habla hispana.
2. **Carga Optimizada de Imágenes (`LazyImage`):**
   * Previene el retraso en el First Contentful Paint (FCP) y mejora el Largest Contentful Paint (LCP) al no bloquear la carga inicial de la página con recursos de imagen secundarios situados por debajo del primer scroll.
3. **Métricas de Core Web Vitals:**
   * La combinación de Tailwind (mínimo CSS), Vite (separación de bundles pequeños) y React Helmet asegura que la página cargue y responda de forma casi instantánea, obteniendo puntuaciones sobresalientes indispensables para el algoritmo de posicionamiento de Google.
