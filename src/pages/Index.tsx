import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import GreetingSection from "@/components/sections/GreetingSection";
import ServicesSection from "@/components/sections/ServicesSection";
import RenewableEnergySection from "@/components/sections/RenewableEnergySection";
import OtherBusinessesSection from "@/components/sections/OtherBusinessesSection";
import AboutSection from "@/components/sections/AboutSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <GreetingSection />
        <ServicesSection />
        <RenewableEnergySection />
        <OtherBusinessesSection />
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
