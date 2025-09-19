import { Sun, Wind, Zap, Car, Leaf, Globe, Award } from "lucide-react";
import { useInView } from "@/hooks/use-in-view";
import EnergySolutionCard from "@/components/energy/EnergySolutionCard";
import SolutionShowcase from "@/components/sections/SolutionShowcase";
import solarImg from "@/assets/solar.png";
import windImg from "@/assets/renewable-hero.jpg";
import hydroImg from "@/assets/hydro.png";
import evImg from "@/assets/evs.png";
import SectionBadge from "@/components/ui/SectionBadge";
import StatBadge from "@/components/ui/StatBadge";

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
  const headerRef = useInView<HTMLDivElement>({ threshold: 0.2 });
  const gridRef = useInView<HTMLDivElement>({ threshold: 0.15 });
  const statsRef = useInView<HTMLDivElement>({ threshold: 0.15 });

  return (
    <section className="relative py-20 overflow-hidden" style={{
      background: 'linear-gradient(135deg, #fefefe 0%, #f8faf9 25%, #f1f5f3 50%, #f8faf9 75%, #fefefe 100%)'
    }}>
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(circle at 20% 20%, rgba(134, 162, 139, 0.15) 1px, transparent 1px),
            radial-gradient(circle at 80% 80%, rgba(107, 142, 115, 0.12) 1px, transparent 1px),
            radial-gradient(circle at 40% 60%, rgba(156, 175, 136, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px, 120px 120px, 100px 100px',
        }}></div>
      </div>
      
      {/* Subtle stripe pattern overlay */}
      <div className="absolute inset-0 opacity-3">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 2px,
            rgba(134, 162, 139, 0.08) 2px,
            rgba(134, 162, 139, 0.08) 4px
          )`,
        }}></div>
      </div>
      
      {/* Semi-transparent overlay */}
      <div className="absolute inset-0 bg-white/20"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Premium Section Header */}
        <div 
          ref={headerRef.ref}
          className="text-center mb-16"
        >
          <SectionBadge icon={<Leaf className="w-4 h-4" style={{ color: '#10b981' }} />}>Renewable Energy Solutions</SectionBadge>
          
          <h2 
            className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
            style={{
              color: '#2d3748',
              textShadow: '0 4px 8px rgba(0,0,0,0.1)',
              fontWeight: '800',
              letterSpacing: '-0.025em'
            }}
          >
            Clean Energy{" "}
            <span style={{
              background: 'linear-gradient(135deg, #10b981 0%, #059669 50%, #047857 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              Transformation
            </span>
          </h2>
          
          <p 
            className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed"
            style={{
              color: '#4a5568',
              textShadow: '0 2px 4px rgba(0,0,0,0.05)'
            }}
          >
            Powering the future with sustainable solutions. Leading the global transition to renewable energy 
            through innovative technology and expert logistics.
          </p>
        </div>

        {/* Four dedicated solution showcases */}
        <div className="space-y-10 md:space-y-12 mb-16">
          <SolutionShowcase
            title="Solar Energy"
            Icon={Sun}
            imageSrc={solarImg}
            imageAlt="Solar panels"
            summary="High‑efficiency PV systems engineered for clean, reliable power—reducing bills and carbon for homes, businesses, and industry."
            points={["Battery storage & smart monitoring ready","Fast ROI with low maintenance","Rooftop and ground‑mount options"]}
            route="/solar-energy"
            imageLeft
            accentBg="bg-yellow-400/90"
          />
          <SolutionShowcase
            title="Wind Power"
            Icon={Wind}
            imageSrc={windImg}
            imageAlt="Wind farm"
            summary="Utility‑grade generation from onshore/offshore turbines with strong sustainability impact and low OPEX."
            points={["Optimal AEP site studies","Turnkey delivery through O&M","Onshore & offshore ready"]}
            route="/wind-power"
            accentBg="bg-blue-500/90"
          />
          <SolutionShowcase
            title="Hydro Power"
            Icon={Zap}
            imageSrc={hydroImg}
            imageAlt="Hydroelectric plant"
            summary="Predictable, long‑life energy from flowing water with grid stability and storage integration."
            points={["Run‑of‑river and small hydro","Grid services & storage support","High reliability"]}
            route="/hydro-power"
            imageLeft
            accentBg="bg-indigo-500/90"
          />
          <SolutionShowcase
            title="EV Solutions"
            Icon={Car}
            imageSrc={evImg}
            imageAlt="EV charging"
            summary="Smart charging and fleet electrification to lower fuel costs, emissions, and downtime with dependable hardware and software."
            points={["Single‑site to multi‑depot rollouts","Demand management & billing","Fleet electrification programs"]}
            route="/ev-solutions"
            accentBg="bg-emerald-600/90"
            imageFit='cover'
          />
        </div>

        {/* Premium Company Statistics */}
        <div ref={statsRef.ref} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <StatBadge icon={<Award className="w-8 h-8 text-white" />} value="500+" label="Projects Completed" gradient="from-blue-500 to-indigo-600" />
          <StatBadge icon={<Globe className="w-8 h-8 text-white" />} value="50MW+" label="Energy Generated" gradient="from-emerald-500 to-green-600" />
          <StatBadge icon={<Leaf className="w-8 h-8 text-white" />} value="15+" label="Years Experience" gradient="from-teal-500 to-cyan-600" />
        </div>
      </div>
    </section>
  );
}