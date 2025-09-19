import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import GreetingSection from "@/components/sections/GreetingSection";
import ServicesSection from "@/components/sections/ServicesSection";
import RenewableEnergySection from "@/components/sections/RenewableEnergySection";
import SustainabilitySection from "@/components/sections/SustainabilitySection";
const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        {/* <GreetingSection /> */}
        <div id="renewable-energy">
          <RenewableEnergySection />
        </div>
        <div id="sustainability">
          <SustainabilitySection />
        </div>
        <div id="services">
          <ServicesSection />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
