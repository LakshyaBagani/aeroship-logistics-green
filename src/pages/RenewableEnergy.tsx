import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import RenewableEnergySection from "@/components/sections/RenewableEnergySection";

const RenewableEnergy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-center text-foreground mb-8">
            Renewable & Green Energy Solutions
          </h1>
        </div>
        <RenewableEnergySection />
      </main>
      <Footer />
    </div>
  );
};

export default RenewableEnergy;