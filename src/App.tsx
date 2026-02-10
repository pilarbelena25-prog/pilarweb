import { useEffect } from "react";
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
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
