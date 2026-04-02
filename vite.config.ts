import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  ssgOptions: {
    script: "async",
    formatting: "minify",
    includedRoutes: [
      "/",
      "/blog",
      "/blog/seo-e-ia",
      "/blog/hoja-de-ruta-seo-fintech-lab",
      "/blog/sge-y-el-nuevo-orden-de-busqueda",
      "/blog/muerte-palabra-clave-transaccional-fintech",
      "/blog/auditorias-ia-fintech-eficiencia-embudo",
      "/blog/seo-entornos-regulados-fintech",
      "/blog/contenido-masivo-fintech-mito",
      "/blog/datos-estructurados-entidades-fintech",
      "/auditoria-seo-fintech",
      "/posicionamiento-seo-fintech",
      "/consultoria-seo-estrategica-para-fintechs",
      "/integracion-ia-seo",
      "/cookies",
      "/politica-privacidad",
      "/aviso-legal",
    ],
  },
}));
