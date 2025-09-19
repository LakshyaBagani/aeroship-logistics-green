import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import logisticsHero from "@/assets/logistics-hero.jpg";
import { useInView } from "@/hooks/use-in-view";

export default function HeroSection() {
  const heroContent = useInView<HTMLDivElement>({ threshold: 0.25 });
  return (
    <section className="relative min-h-screen flex items-end justify-center overflow-hidden pb-32">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={logisticsHero}
          alt="Global logistics with ships and airplanes"
          className="w-full h-full object-cover brightness-50"
        />
      </div>

      {/* Content */}
      <div ref={heroContent.ref} className={`relative z-10 container mx-auto px-4 text-center text-white reveal-up ${heroContent.isInView ? 'reveal-in' : ''}`}>
        <div className="max-w-4xl mx-auto">
          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-white drop-shadow-2xl">
            Logistically{" "}
            <span className="bg-gradient-to-r from-success-light to-success bg-clip-text text-transparent drop-shadow-2xl">
              Yours
            </span>
          </h1>
          
          <div className="text-xl md:text-2xl font-semibold mb-4 text-white drop-shadow-xl">
            Aeroship Logistics Pvt. Ltd.
          </div>

          {/* Subtext */}
          <p className="text-lg md:text-xl mb-3 text-white max-w-3xl mx-auto drop-shadow-lg">
            Delivering excellence in Air, Sea, Road, and Rail freight management worldwide.
          </p>

          {/* Supporting Line */}
          <p className="text-base md:text-lg mb-8 text-white max-w-2xl mx-auto drop-shadow-lg">
            Your trusted global logistics partner connecting businesses worldwide with seamless freight solutions.
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
              className="border-white text-white bg-white/10 hover:bg-white hover:text-gray-900 backdrop-blur-sm shadow-lg"
            >
              Get Quote
            </Button>
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