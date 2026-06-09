import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Header from "@/components/layout/Header";
import HeroSection from "@/components/sections/HeroSection";
import OverviewSection from "@/components/sections/OverviewSection";
// import LeadMagnetSection from "@/components/sections/LeadMagnetSection";
import Footer from "@/components/layout/Footer";

const Index = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Pilar Beleña | SEO Fintech Lab - Consultoría SEO y IA Financiera</title>
        <meta
          name="description"
          content="Consultoría SEO estratégica y auditorías SEO express con Inteligencia Artificial para Fintechs, Banca Digital e Inversión Inmobiliaria en España. Capta leads orgánicos."
        />
        <meta
          name="keywords"
          content="SEO Fintech, Consultoría SEO, SEO IA, Auditoría SEO express, banca digital, inversión inmobiliaria, Real Estate SEO, Pilar Beleña"
        />
        <link rel="canonical" href="https://pilar-belena-seo-fintech-lab.netlify.app/" />
        <meta property="og:title" content="Pilar Beleña | SEO Fintech Lab" />
        <meta
          property="og:description"
          content="Consultoría SEO estratégica y auditorías SEO express con Inteligencia Artificial para Fintechs y marcas financieras."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://pilar-belena-seo-fintech-lab.netlify.app/" />
        <meta property="og:site_name" content="Pilar Beleña - SEO Fintech Lab" />
      </Helmet>

      <Header />
      <main>
        <HeroSection />
        <OverviewSection />
        {/* <LeadMagnetSection /> */}
      </main>
      <Footer />
    </div>
  );
};

export default Index;

