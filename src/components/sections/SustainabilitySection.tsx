import { Leaf, Globe, Recycle, TreePine, Droplets, Wind, Sun, Zap } from "lucide-react";
import { useInView } from "@/hooks/use-in-view";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";

export default function SustainabilitySection() {
  const headerRef = useInView<HTMLDivElement>({ threshold: 0.2 });
  const gridRef = useInView<HTMLDivElement>({ threshold: 0.15 });
  const impactRef = useInView<HTMLDivElement>({ threshold: 0.15 });

  const sustainabilityGoals = [
    {
      icon: Globe,
      title: "Carbon Neutrality",
      description: "Achieving net-zero carbon emissions through comprehensive renewable energy solutions and sustainable practices.",
      color: "from-green-500 to-emerald-600",
      bgColor: "from-green-50 to-emerald-50"
    },
    {
      icon: Recycle,
      title: "Circular Economy",
      description: "Promoting resource efficiency and waste reduction through innovative recycling and reuse programs.",
      color: "from-blue-500 to-cyan-600",
      bgColor: "from-blue-50 to-cyan-50"
    },
    {
      icon: TreePine,
      title: "Biodiversity Protection",
      description: "Supporting ecosystem conservation and environmental restoration through responsible energy development.",
      color: "from-emerald-500 to-green-600",
      bgColor: "from-emerald-50 to-green-50"
    },
    {
      icon: Droplets,
      title: "Water Conservation",
      description: "Implementing water-efficient technologies and protecting aquatic ecosystems in all our projects.",
      color: "from-cyan-500 to-blue-600",
      bgColor: "from-cyan-50 to-blue-50"
    }
  ];

  const impactMetrics = [
    {
      icon: Sun,
      value: "2.5M+",
      label: "Solar Panels Installed",
      description: "High-efficiency panels generating clean energy worldwide",
      color: "from-yellow-500 to-orange-600"
    },
    {
      icon: Wind,
      value: "500+",
      label: "Wind Turbines Deployed",
      description: "Advanced turbines harnessing wind power efficiently",
      color: "from-blue-500 to-cyan-600"
    },
    {
      icon: Zap,
      value: "1.2GW",
      label: "Total Capacity Installed",
      description: "Combined renewable energy generation capacity",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: Leaf,
      value: "50K+",
      label: "Tons CO₂ Prevented",
      description: "Annual carbon emissions avoided through our projects",
      color: "from-emerald-500 to-teal-600"
    }
  ];

  return (
    <section className="relative py-24 overflow-hidden bg-background">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-3">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(circle at 25% 25%, rgba(16, 185, 129, 0.1) 2px, transparent 2px),
            radial-gradient(circle at 75% 75%, rgba(34, 197, 94, 0.08) 2px, transparent 2px),
            radial-gradient(circle at 50% 10%, rgba(6, 182, 212, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: '120px 120px, 80px 80px, 60px 60px',
        }}></div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-32 left-16 w-24 h-24 bg-gradient-to-br from-green-400/10 to-emerald-500/10 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute bottom-32 right-16 w-32 h-32 bg-gradient-to-br from-teal-400/10 to-cyan-500/10 rounded-full blur-2xl animate-pulse delay-1000"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div 
          ref={headerRef.ref}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 bg-green-100 border border-green-200">
            <Leaf className="w-4 h-4 text-green-600" />
            <span className="text-sm font-medium text-green-800">Sustainability & Impact</span>
          </div>
          
          <h2 
            className="text-4xl md:text-6xl font-bold mb-8 leading-tight"
            style={{
              color: '#1e293b',
              textShadow: '0 4px 8px rgba(0,0,0,0.1)',
              fontWeight: '900',
              letterSpacing: '-0.025em'
            }}
          >
            Building a{" "}
            <span style={{
              background: 'linear-gradient(135deg, #10b981 0%, #059669 50%, #047857 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              Sustainable
            </span>{" "}
            Future
          </h2>
          
          <p 
            className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed mb-8"
            style={{
              color: '#475569',
              textShadow: '0 2px 4px rgba(0,0,0,0.05)'
            }}
          >
            Our commitment to environmental stewardship drives every project we undertake. 
            We're not just providing renewable energy solutions – we're creating a legacy of 
            sustainability for future generations.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="flex items-center gap-2 px-4 py-2 bg-green-100 rounded-full">
              <CheckCircle className="w-4 h-4 text-green-600" />
              <span className="text-sm font-medium text-green-800">UN SDG Aligned</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full">
              <CheckCircle className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-medium text-blue-800">Carbon Negative</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-emerald-100 rounded-full">
              <CheckCircle className="w-4 h-4 text-emerald-600" />
              <span className="text-sm font-medium text-emerald-800">Eco-Certified</span>
            </div>
          </div>
        </div>

        {/* Natural Sustainability Goals */}
        <div 
          ref={gridRef.ref}
          className="mb-20"
        >
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Our{" "}
              <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
                Sustainability
              </span>{" "}
              Goals
            </h3>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Four pillars of environmental responsibility that guide our mission and operations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {sustainabilityGoals.map((goal, index) => (
              <Card 
                key={index}
                className="group overflow-hidden rounded-xl border bg-card shadow-md hover:-translate-y-2 hover:shadow-xl transition-smooth"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center flex-shrink-0">
                      <goal.icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-foreground mb-3">{goal.title}</h4>
                      <p className="text-muted-foreground leading-relaxed">
                        {goal.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Natural Impact Metrics */}
        <div 
          ref={impactRef.ref}
          className="mb-20"
        >
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Measurable{" "}
              <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
                Impact
              </span>
            </h3>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Real numbers that demonstrate our commitment to environmental transformation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {impactMetrics.map((metric, index) => (
              <Card 
                key={index}
                className="group overflow-hidden rounded-xl border bg-card shadow-md hover:-translate-y-2 hover:shadow-xl transition-smooth"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 gradient-eco rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <metric.icon className="w-8 h-8 text-success-foreground" />
                  </div>
                  <div className="text-3xl font-bold text-foreground mb-2">{metric.value}</div>
                  <div className="text-lg font-semibold text-foreground mb-2">{metric.label}</div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {metric.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Natural Call to Action */}
        <div className="text-center">
          <Card className="p-12 border bg-card shadow-lg max-w-4xl mx-auto">
            <CardContent className="p-0">
              <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Join the{" "}
                <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
                  Green Revolution
                </span>
              </h3>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Be part of the solution. Together, we can create a sustainable future powered by 
                clean, renewable energy that benefits both people and the planet.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="gradient-eco text-success-foreground hover:scale-105 transition-smooth shadow-lg">
                  Start Your Green Journey
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth"
                >
                  Download Sustainability Report
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
