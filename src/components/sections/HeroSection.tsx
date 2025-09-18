import { Button } from "@/components/ui/button";
import { ArrowRight, Globe, Users, Award } from "lucide-react";
import logisticsHero from "@/assets/logistics-hero.jpg";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={logisticsHero}
          alt="Global logistics with ships and airplanes"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 gradient-hero"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Logistically{" "}
            <span className="bg-gradient-to-r from-success-light to-success bg-clip-text text-transparent">
              Yours
            </span>
          </h1>
          
          <div className="text-xl md:text-2xl font-semibold mb-4">
            Aeroship Logistics Pvt. Ltd.
          </div>

          {/* Subtext */}
          <p className="text-lg md:text-xl mb-6 text-white/90 max-w-3xl mx-auto">
            Delivering excellence in Air, Sea, Road, and Rail freight management worldwide.
          </p>

          {/* Supporting Line */}
          <p className="text-base md:text-lg mb-8 text-white/80 max-w-2xl mx-auto">
            Your trusted global logistics partner with 6500+ overseas partners in 186 countries.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="gradient-eco text-success-foreground hover:scale-105 transition-smooth">
              Explore Our Services
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm"
            >
              Get Quote
            </Button>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="glass rounded-xl p-6 text-center">
              <Globe className="w-8 h-8 mx-auto mb-3 text-success-light" />
              <div className="text-2xl font-bold text-white">186</div>
              <div className="text-sm text-white/80">Countries Served</div>
            </div>
            <div className="glass rounded-xl p-6 text-center">
              <Users className="w-8 h-8 mx-auto mb-3 text-success-light" />
              <div className="text-2xl font-bold text-white">6500+</div>
              <div className="text-sm text-white/80">Overseas Partners</div>
            </div>
            <div className="glass rounded-xl p-6 text-center">
              <Award className="w-8 h-8 mx-auto mb-3 text-success-light" />
              <div className="text-2xl font-bold text-white">2011</div>
              <div className="text-sm text-white/80">Years of Excellence</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}