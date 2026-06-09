import Header from "@/components/layout/Header";
import HeroSection from "@/components/sections/HeroSection";
import OverviewSection from "@/components/sections/OverviewSection";
// import LeadMagnetSection from "@/components/sections/LeadMagnetSection";
import Footer from "@/components/layout/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
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
