import { Sun, Wind, Zap, Car, Leaf, Globe, Award, Battery, Lightbulb, TreePine, Recycle } from "lucide-react";
import { useInView } from "@/hooks/use-in-view";
import EnergySolutionCard from "@/components/energy/EnergySolutionCard";
import SolutionShowcase from "@/components/sections/SolutionShowcase";
import solarImg from "@/assets/solar.png";
import windImg from "@/assets/renewable-hero.jpg";
import hydroImg from "@/assets/hydro.png";
import evImg from "@/assets/evs.png";
import solarBuildingImg from "@/assets/solarBuildeing.png";
import windMillImg from "@/assets/windMill.png";
import windEnergyImg from "@/assets/windEnergy.png";
import hydroElectricityImg from "@/assets/hydroElectricity.png";
import SectionBadge from "@/components/ui/SectionBadge";
import StatBadge from "@/components/ui/StatBadge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";

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
  const benefitsRef = useInView<HTMLDivElement>({ threshold: 0.15 });
  const ctaRef = useInView<HTMLDivElement>({ threshold: 0.15 });

  return (
    <section className="relative py-24 overflow-hidden bg-background">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(circle at 15% 15%, rgba(16, 185, 129, 0.1) 2px, transparent 2px),
            radial-gradient(circle at 85% 85%, rgba(59, 130, 246, 0.08) 2px, transparent 2px),
            radial-gradient(circle at 50% 50%, rgba(34, 197, 94, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px, 150px 150px, 80px 80px',
        }}></div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-green-400/10 to-emerald-500/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute top-40 right-20 w-32 h-32 bg-gradient-to-br from-blue-400/10 to-cyan-500/10 rounded-full blur-xl animate-pulse delay-1000"></div>
      <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-gradient-to-br from-yellow-400/10 to-orange-500/10 rounded-full blur-xl animate-pulse delay-2000"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Enhanced Section Header */}
        <div 
          ref={headerRef.ref}
          className="text-center mb-20"
        >
          <SectionBadge icon={<Leaf className="w-4 h-4" style={{ color: '#10b981' }} />}>Renewable Energy Solutions</SectionBadge>
          
          <h2 
            className="text-5xl md:text-7xl font-bold mb-8 leading-tight"
            style={{
              color: '#1e293b',
              textShadow: '0 4px 8px rgba(0,0,0,0.1)',
              fontWeight: '900',
              letterSpacing: '-0.025em'
            }}
          >
            Powering the{" "}
            <span style={{
              background: 'linear-gradient(135deg, #10b981 0%, #059669 50%, #047857 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              Future
            </span>{" "}
            with{" "}
            <span style={{
              background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 50%, #1e40af 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              Clean Energy
            </span>
          </h2>
          
          <p 
            className="text-xl md:text-2xl max-w-5xl mx-auto leading-relaxed mb-8"
            style={{
              color: '#475569',
              textShadow: '0 2px 4px rgba(0,0,0,0.05)'
            }}
          >
            Leading the global transition to renewable energy through innovative technology, 
            sustainable solutions, and expert logistics. We're building a cleaner, greener tomorrow.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="flex items-center gap-2 px-4 py-2 bg-green-100 rounded-full">
              <CheckCircle className="w-4 h-4 text-green-600" />
              <span className="text-sm font-medium text-green-800">Zero Emissions</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full">
              <CheckCircle className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-medium text-blue-800">Cost Effective</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-emerald-100 rounded-full">
              <CheckCircle className="w-4 h-4 text-emerald-600" />
              <span className="text-sm font-medium text-emerald-800">Future Ready</span>
            </div>
          </div>
        </div>

        {/* Enhanced Solution Showcases with More Images */}
        <div className="space-y-16 md:space-y-20 mb-20">
          <SolutionShowcase
            title="Solar Energy Solutions"
            Icon={Sun}
            imageSrc={solarBuildingImg}
            imageAlt="Solar panels on building"
            summary="Revolutionary solar technology that transforms sunlight into clean, reliable power. Our high-efficiency photovoltaic systems deliver maximum energy output with minimal environmental impact, reducing electricity costs by up to 80% while contributing to a sustainable future."
            points={[
              "Advanced monocrystalline & polycrystalline panels",
              "Smart battery storage & energy management systems", 
              "25-year performance warranty with monitoring",
              "Rooftop, ground-mount & floating installations",
              "Grid-tie & off-grid solutions available"
            ]}
            route="/solar-energy"
            imageLeft
            accentBg="bg-gradient-to-r from-yellow-400 to-orange-500"
          />
          
          <SolutionShowcase
            title="Wind Power Generation"
            Icon={Wind}
            imageSrc={windMillImg}
            imageAlt="Wind turbines"
            summary="Harness the power of wind with our cutting-edge turbine technology. From small-scale residential systems to large-scale commercial wind farms, we provide comprehensive wind energy solutions that deliver consistent, clean power generation with exceptional efficiency."
            points={[
              "Onshore & offshore wind farm development",
              "Small wind turbines for residential use",
              "Advanced turbine technology & maintenance",
              "Wind resource assessment & site optimization",
              "Grid integration & energy storage solutions"
            ]}
            route="/wind-power"
            accentBg="bg-gradient-to-r from-blue-500 to-cyan-500"
          />
          
          <SolutionShowcase
            title="Hydroelectric Power"
            Icon={Zap}
            imageSrc={hydroElectricityImg}
            imageAlt="Hydroelectric dam"
            summary="Clean, reliable energy from flowing water. Our hydroelectric solutions provide consistent power generation with minimal environmental impact, supporting grid stability and offering long-term sustainable energy production for communities and industries."
            points={[
              "Large-scale hydroelectric dam projects",
              "Small & micro hydro systems",
              "Run-of-river power generation",
              "Pumped storage hydroelectricity",
              "Environmental impact mitigation"
            ]}
            route="/hydro-power"
            imageLeft
            accentBg="bg-gradient-to-r from-indigo-500 to-purple-600"
          />
          
          <SolutionShowcase
            title="Electric Vehicle Infrastructure"
            Icon={Car}
            imageSrc={evImg}
            imageAlt="EV charging station"
            summary="Accelerating the electric vehicle revolution with comprehensive charging infrastructure and fleet electrification services. We provide end-to-end EV solutions that reduce emissions, lower operating costs, and support the transition to sustainable transportation."
            points={[
              "Fast & ultra-fast charging stations",
              "Fleet electrification programs",
              "Smart charging & load management",
              "Battery storage integration",
              "EV infrastructure planning & installation"
            ]}
            route="/ev-solutions"
            accentBg="bg-gradient-to-r from-emerald-500 to-green-600"
          />
        </div>

        {/* Natural Benefits Section */}
        <div 
          ref={benefitsRef.ref}
          className="mb-20"
        >
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Why Choose{" "}
              <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
                Renewable Energy?
              </span>
            </h3>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Four key advantages that make renewable energy the smart choice for your future
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="group overflow-hidden rounded-xl border bg-card shadow-md hover:-translate-y-2 hover:shadow-xl transition-smooth">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Recycle className="w-8 h-8 text-primary-foreground" />
                </div>
                <h4 className="text-xl font-bold text-foreground mb-4">Environmental Impact</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Reduce carbon footprint by up to 90% and contribute to global climate change mitigation efforts.
                </p>
              </CardContent>
            </Card>

            <Card className="group overflow-hidden rounded-xl border bg-card shadow-md hover:-translate-y-2 hover:shadow-xl transition-smooth">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 gradient-eco rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Battery className="w-8 h-8 text-success-foreground" />
                </div>
                <h4 className="text-xl font-bold text-foreground mb-4">Cost Savings</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Save up to 80% on electricity bills with long-term energy independence and predictable costs.
                </p>
              </CardContent>
            </Card>

            <Card className="group overflow-hidden rounded-xl border bg-card shadow-md hover:-translate-y-2 hover:shadow-xl transition-smooth">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Lightbulb className="w-8 h-8 text-primary-foreground" />
                </div>
                <h4 className="text-xl font-bold text-foreground mb-4">Energy Independence</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Reduce dependence on fossil fuels and volatile energy markets with reliable renewable sources.
                </p>
              </CardContent>
            </Card>

            <Card className="group overflow-hidden rounded-xl border bg-card shadow-md hover:-translate-y-2 hover:shadow-xl transition-smooth">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 gradient-eco rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <TreePine className="w-8 h-8 text-success-foreground" />
                </div>
                <h4 className="text-xl font-bold text-foreground mb-4">Future Ready</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Stay ahead with cutting-edge technology and prepare for the sustainable energy future.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Natural Statistics Section */}
        <div ref={statsRef.ref} className="mb-20">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Our{" "}
              <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
                Impact
              </span>{" "}
              in Numbers
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Measurable results from our commitment to renewable energy excellence
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="group overflow-hidden rounded-xl border bg-card shadow-md hover:-translate-y-2 hover:shadow-xl transition-smooth">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Award className="w-8 h-8 text-primary-foreground" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">750+</div>
                <div className="text-lg font-semibold text-foreground mb-2">Renewable Projects</div>
                <div className="text-sm text-muted-foreground">Successfully completed worldwide</div>
              </CardContent>
            </Card>

            <Card className="group overflow-hidden rounded-xl border bg-card shadow-md hover:-translate-y-2 hover:shadow-xl transition-smooth">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 gradient-eco rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Globe className="w-8 h-8 text-success-foreground" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">150MW+</div>
                <div className="text-lg font-semibold text-foreground mb-2">Clean Energy Generated</div>
                <div className="text-sm text-muted-foreground">Total renewable capacity installed</div>
              </CardContent>
            </Card>

            <Card className="group overflow-hidden rounded-xl border bg-card shadow-md hover:-translate-y-2 hover:shadow-xl transition-smooth">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Leaf className="w-8 h-8 text-primary-foreground" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">25,000+</div>
                <div className="text-lg font-semibold text-foreground mb-2">Tons CO₂ Saved</div>
                <div className="text-sm text-muted-foreground">Annual carbon emissions prevented</div>
              </CardContent>
            </Card>

            <Card className="group overflow-hidden rounded-xl border bg-card shadow-md hover:-translate-y-2 hover:shadow-xl transition-smooth">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 gradient-eco rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Battery className="w-8 h-8 text-success-foreground" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">98%</div>
                <div className="text-lg font-semibold text-foreground mb-2">Client Satisfaction</div>
                <div className="text-sm text-muted-foreground">Customer satisfaction rate</div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to Action Section */}
        <div 
          ref={ctaRef.ref}
          className="text-center"
        >
          <Card className="p-12 bg-gradient-to-br from-green-50 via-blue-50 to-emerald-50 border-0 shadow-2xl">
            <CardContent className="p-0">
              <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Ready to Make the{" "}
                <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                  Switch?
                </span>
              </h3>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join thousands of businesses and homeowners who have already made the transition to clean, 
                renewable energy. Let's build a sustainable future together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="gradient-eco text-success-foreground hover:scale-105 transition-smooth shadow-lg">
                  Get Free Consultation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth"
                >
                  View Our Projects
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}