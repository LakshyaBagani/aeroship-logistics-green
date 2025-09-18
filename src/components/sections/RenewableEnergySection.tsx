import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sun, Wind, Zap, Car } from "lucide-react";
import renewableHero from "@/assets/renewable-hero.jpg";

const energySolutions = [
  {
    icon: Sun,
    title: "Solar Energy",
    description: "Solar panels, inverters, and complete photovoltaic systems",
    gradient: "from-yellow-400 to-orange-500"
  },
  {
    icon: Wind,
    title: "Wind Power",
    description: "Wind turbines and renewable wind energy solutions",
    gradient: "from-blue-400 to-cyan-500"
  },
  {
    icon: Zap,
    title: "Hydro Power",
    description: "Hydroelectric equipment and water energy systems",
    gradient: "from-blue-500 to-indigo-600"
  },
  {
    icon: Car,
    title: "EV Solutions",
    description: "Electric vehicles and charging infrastructure",
    gradient: "from-green-400 to-emerald-600"
  }
];

const quotes = [
  "Driving the future of clean energy with Solar, Wind, Hydro, and EV imports.",
  "Our expertise in renewable energy projects imports from China, USA, and Europe by Air & Sea.",
  "Green, Clean, and Smart Solutions – powering industries, SMEs, and residential spaces.",
  "Quit piece by piece. Go solar at peace."
];

export default function RenewableEnergySection() {
  return (
    <section className="py-16 bg-background-alt relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <img 
          src={renewableHero} 
          alt="Renewable energy background" 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <div className="w-12 h-12 gradient-eco rounded-xl flex items-center justify-center mr-3">
              <Sun className="w-6 h-6 text-success-foreground" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Renewable & Green Energy
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Leading the transformation to sustainable energy with specialized logistics 
            for solar, wind, hydro, and electric vehicle imports.
          </p>
        </div>

        {/* Energy Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {energySolutions.map((solution, index) => {
            const IconComponent = solution.icon;
            return (
              <Card key={index} className="group hover:shadow-glow transition-smooth hover:-translate-y-3 border-0 glass">
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 bg-gradient-to-br ${solution.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-smooth`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {solution.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {solution.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Inspirational Quotes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {quotes.map((quote, index) => (
            <Card key={index} className="glass border-l-4 border-l-success">
              <CardContent className="p-6">
                <blockquote className="text-foreground italic leading-relaxed">
                  "{quote}"
                </blockquote>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Expertise Section */}
        <Card className="glass shadow-elegant">
          <CardContent className="p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Global Renewable Energy Imports
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-success rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-foreground">Import Expertise</h4>
                      <p className="text-muted-foreground text-sm">
                        Specialized in renewable energy equipment from China, USA, and Europe
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-success rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-foreground">Multi-Modal Logistics</h4>
                      <p className="text-muted-foreground text-sm">
                        Air-Chartering, Sea-FCL, LCL, and Break-bulk transportation
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-success rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-foreground">Industry Coverage</h4>
                      <p className="text-muted-foreground text-sm">
                        Serving industries, SMEs, and residential renewable projects
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <div className="gradient-eco rounded-2xl p-8 text-success-foreground">
                  <h4 className="text-3xl font-bold mb-2">Go Green</h4>
                  <p className="text-lg mb-6">Join the sustainable energy revolution</p>
                  <Button variant="secondary" size="lg" className="bg-white/20 hover:bg-white/30 border-white/30">
                    Learn More About Green Solutions
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}