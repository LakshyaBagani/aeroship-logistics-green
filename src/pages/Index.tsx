import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import GreetingSection from "@/components/sections/GreetingSection";
import ServicesSection from "@/components/sections/ServicesSection";
import RenewableEnergySection from "@/components/sections/RenewableEnergySection";
const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <GreetingSection />
        <RenewableEnergySection />
        <ServicesSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
