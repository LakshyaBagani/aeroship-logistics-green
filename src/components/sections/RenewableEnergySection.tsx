import { Sun, Wind, Zap, Car } from "lucide-react";
import { useInView } from "@/hooks/use-in-view";
import EnergySolutionCard from "@/components/energy/EnergySolutionCard";

const energySolutions = [
  {
    icon: Sun,
    title: "Solar Energy",
    tagline: "Power your future with clean, renewable sunlight",
    features: [
      "Cut electricity bills by up to 80%",
      "25-year warranty on premium panels",
      "Zero emissions, maximum savings"
    ],
    gradient: "from-yellow-400 to-orange-500",
    route: "/solar-energy"
  },
  {
    icon: Wind,
    title: "Wind Power",
    tagline: "Harness nature's force for sustainable energy",
    features: [
      "Reliable 24/7 power generation",
      "Low maintenance, high efficiency",
      "Perfect for onshore & offshore"
    ],
    gradient: "from-blue-400 to-cyan-500",
    route: "/wind-power"
  },
  {
    icon: Zap,
    title: "Hydro Power",
    tagline: "Clean energy from flowing water",
    features: [
      "Consistent, predictable output",
      "Long-term sustainable solution",
      "Supports water management"
    ],
    gradient: "from-blue-500 to-indigo-600",
    route: "/hydro-power"
  },
  {
    icon: Car,
    title: "EV Solutions",
    tagline: "Drive the future of transportation",
    features: [
      "Zero emissions, lower costs",
      "Smart charging infrastructure",
      "Complete fleet electrification"
    ],
    gradient: "from-green-400 to-emerald-600",
    route: "/ev-solutions"
  }
];

export default function RenewableEnergySection() {
  const header = useInView<HTMLDivElement>({ threshold: 0.2 });
  const grid = useInView<HTMLDivElement>({ threshold: 0.15 });
  const statsRef = useInView<HTMLDivElement>({ threshold: 0.15 });

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-green-50 to-emerald-50">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #10b981 2px, transparent 2px),
                           radial-gradient(circle at 75% 75%, #059669 2px, transparent 2px)`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Hero Content */}
        <div
          ref={header.ref}
          className={`text-center mb-16 reveal-up ${header.isInView ? "reveal-in" : ""}`}
        >
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Clean Energy{" "}
            <span className="bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 bg-clip-text text-transparent relative">
              Transformation
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 bg-clip-text text-transparent animate-pulse opacity-50"></div>
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
            Powering the future with sustainable solutions. Leading the global transition to renewable energy 
            through innovative technology and expert logistics.
          </p>
        </div>

        {/* Energy Solution Cards */}
        <div
          ref={grid.ref}
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16 reveal-stagger ${grid.isInView ? "reveal-in" : ""}`}
        >
          {energySolutions.map((solution, index) => (
            <EnergySolutionCard
              key={index}
              title={solution.title}
              tagline={solution.tagline}
              features={solution.features}
              icon={solution.icon}
              gradient={solution.gradient}
              route={solution.route}
              index={index}
              isLandingPage={true}
            />
          ))}
        </div>

        {/* Company Statistics */}
        <div
          ref={statsRef.ref}
          className={`grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 reveal-up ${statsRef.isInView ? "reveal-in" : ""}`}
        >
          <div className="group relative bg-white/90 backdrop-blur-sm rounded-3xl p-8 text-center border border-gray-200 hover:border-emerald-400 transition-all duration-700 hover:-translate-y-2 hover:shadow-xl hover:shadow-emerald-500/25 reveal-item overflow-hidden" style={{ transitionDelay: '0ms' }}>
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-100/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <div className="relative z-10">
              <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors duration-300">500+</div>
              <div className="text-gray-600 text-lg group-hover:text-gray-800 transition-colors duration-300">Projects Completed</div>
            </div>
          </div>
          <div className="group relative bg-white/90 backdrop-blur-sm rounded-3xl p-8 text-center border border-gray-200 hover:border-green-400 transition-all duration-700 hover:-translate-y-2 hover:shadow-xl hover:shadow-green-500/25 reveal-item overflow-hidden" style={{ transitionDelay: '150ms' }}>
            <div className="absolute inset-0 bg-gradient-to-br from-green-100/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <div className="relative z-10">
              <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors duration-300">50MW+</div>
              <div className="text-gray-600 text-lg group-hover:text-gray-800 transition-colors duration-300">Energy Generated</div>
            </div>
          </div>
          <div className="group relative bg-white/90 backdrop-blur-sm rounded-3xl p-8 text-center border border-gray-200 hover:border-teal-400 transition-all duration-700 hover:-translate-y-2 hover:shadow-xl hover:shadow-teal-500/25 reveal-item overflow-hidden" style={{ transitionDelay: '300ms' }}>
            <div className="absolute inset-0 bg-gradient-to-br from-teal-100/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <div className="relative z-10">
              <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2 group-hover:text-teal-600 transition-colors duration-300">15+</div>
              <div className="text-gray-600 text-lg group-hover:text-gray-800 transition-colors duration-300">Years Experience</div>
            </div>
          </div>
        </div>


      </div>
    </section>
  );
}