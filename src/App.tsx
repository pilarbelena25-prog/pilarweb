import { useEffect } from "react";
import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Index from "./pages/Index";
import AuditoriaSeoFintech from "./pages/AuditoriaSeoFintech";
import PosicionamientoSeoFintech from "./pages/PosicionamientoSeoFintech";
import ConsultoriaSeoEstrategica from "./pages/ConsultoriaSeoEstrategica";
import IntegracionIaSeo from "./pages/IntegracionIaSeo";
import Cookies from "./pages/Cookies";
import AvisoLegal from "./pages/AvisoLegal";
import PoliticaPrivacidad from "./pages/PoliticaPrivacidad";
import Blog from "./pages/Blog";
import SeoEIa from "./pages/blog/SeoEIa";
import HojaDeRutaSeoFintechLab from "./pages/blog/HojaDeRutaSeoFintechLab";
import SgeYElNuevoOrdenDeBusqueda from "./pages/blog/SgeYElNuevoOrdenDeBusqueda";
import MuertePalabraClaveTransaccionalFintech from "./pages/blog/MuertePalabraClaveTransaccionalFintech";
import AuditoriasIaFintechEficienciaEmbudo from "./pages/blog/AuditoriasIaFintechEficienciaEmbudo";
import SeoEntornosReguladosFintech from "./pages/blog/SeoEntornosReguladosFintech";
import ContenidoMasivoFintechMito from "./pages/blog/ContenidoMasivoFintechMito";
import DatosEstructuradosEntidadesFintech from "./pages/blog/DatosEstructuradosEntidadesFintech";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Component to handle scroll to hash
const ScrollToHash = () => {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (hash) {
      // Small delay to ensure the page has rendered
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      // Scroll to top when navigating to any page without hash
      window.scrollTo({ top: 0, behavior: "instant" });
    }
  }, [hash, pathname]);

  return null;
};

const App = () => (
  <HelmetProvider>
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToHash />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/auditoria-seo-fintech" element={<AuditoriaSeoFintech />} />
          <Route path="/posicionamiento-seo-fintech" element={<PosicionamientoSeoFintech />} />
          <Route path="/consultoria-seo-estrategica-para-fintechs" element={<ConsultoriaSeoEstrategica />} />
          <Route path="/integracion-ia-seo" element={<IntegracionIaSeo />} />
          <Route path="/cookies" element={<Cookies />} />
          <Route path="/politica-privacidad" element={<PoliticaPrivacidad />} />
          <Route path="/aviso-legal" element={<AvisoLegal />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/seo-e-ia" element={<SeoEIa />} />
          <Route path="/blog/hoja-de-ruta-seo-fintech-lab" element={<HojaDeRutaSeoFintechLab />} />
          <Route path="/blog/sge-y-el-nuevo-orden-de-busqueda" element={<SgeYElNuevoOrdenDeBusqueda />} />
          <Route path="/blog/muerte-palabra-clave-transaccional-fintech" element={<MuertePalabraClaveTransaccionalFintech />} />
          <Route path="/blog/auditorias-ia-fintech-eficiencia-embudo" element={<AuditoriasIaFintechEficienciaEmbudo />} />
          <Route path="/blog/seo-entornos-regulados-fintech" element={<SeoEntornosReguladosFintech />} />
          <Route path="/blog/contenido-masivo-fintech-mito" element={<ContenidoMasivoFintechMito />} />
          <Route path="/blog/datos-estructurados-entidades-fintech" element={<DatosEstructuradosEntidadesFintech />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
  </HelmetProvider>
);

export default App;
