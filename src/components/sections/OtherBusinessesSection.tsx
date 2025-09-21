import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Factory,
  Car,
  ShoppingCart,
  Lightbulb,
  Heart,
  Shirt,
  Sofa,
  Baby
} from "lucide-react";

const businesses = [
  {
    icon: Factory,
    title: "Industrial & Power Plant Projects",
    description: "Heavy machinery, industrial equipment, and power generation systems",
    color: "from-gray-600 to-slate-700"
  },
  {
    icon: Car,
    title: "Automotive Industry", 
    description: "Auto parts, vehicles, and automotive manufacturing equipment",
    color: "from-red-500 to-rose-600"
  },
  {
    icon: ShoppingCart,
    title: "FMCG Products",
    description: "Fast-moving consumer goods and retail product imports",
    color: "from-blue-500 to-indigo-600"
  },
  {
    icon: Lightbulb,
    title: "Electronics & Lighting",
    description: "Electronic devices, LED lighting, and technology products",
    color: "from-yellow-500 to-amber-600"
  },
  {
    icon: Heart,
    title: "Medicines & Medical Equipment",
    description: "Pharmaceutical products and healthcare equipment imports",
    color: "from-emerald-500 to-teal-600"
  },
  {
    icon: Shirt,
    title: "Garments & Footwear",
    description: "Textile products, clothing, and footwear manufacturing",
    color: "from-purple-500 to-violet-600"
  },
  {
    icon: Sofa,
    title: "Furniture & Laminates",
    description: "Home furniture, office furniture, and decorative laminates",
    color: "from-orange-500 to-red-500"
  },
  {
    icon: Baby,
    title: "Baby Products & Toys",
    description: "Children's products, toys, and baby care essentials",
    color: "from-pink-500 to-rose-500"
  }
];

export default function OtherBusinessesSection() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Industries We Serve
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            Logigreen is a logistics service provider to importers and exporters worldwide 
            with a vital resource for global supply chains.
          </p>
          
          {/* Quote Card */}
          <Card className="glass max-w-4xl mx-auto border-l-4 border-l-primary">
            <CardContent className="p-6">
              <blockquote className="text-lg text-foreground italic">
                "Logigreen is a logistics service provider to importers and exporters worldwide 
                with a vital resource for global supply chains."
              </blockquote>
            </CardContent>
          </Card>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {businesses.map((business, index) => {
            const IconComponent = business.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-elegant transition-smooth hover:-translate-y-2 border-0 glass overflow-hidden"
              >
                <CardHeader className="pb-4">
                  <div className={`w-14 h-14 bg-gradient-to-br ${business.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-smooth mx-auto`}>
                    <IconComponent className="w-7 h-7 text-white" />
                  </div>
                  <CardTitle className="text-lg text-center text-foreground group-hover:text-primary transition-smooth">
                    {business.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-sm text-muted-foreground text-center leading-relaxed">
                    {business.description}
                  </p>
                  
                  {/* Industry Indicator */}
                  <div className="mt-4 flex justify-center">
                    <div className="flex space-x-1">
                      {[1, 2, 3].map((dot) => (
                        <div 
                          key={dot} 
                          className={`w-2 h-2 rounded-full bg-gradient-to-r ${business.color} opacity-60`}
                        ></div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Additional Services */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="glass text-center">
            <CardContent className="p-8">
              <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Factory className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Project Cargo</h3>
              <p className="text-sm text-muted-foreground">
                Specialized handling of oversized and heavy-lift cargo for industrial projects
              </p>
            </CardContent>
          </Card>

          <Card className="glass text-center">
            <CardContent className="p-8">
              <div className="w-16 h-16 gradient-eco rounded-2xl flex items-center justify-center mx-auto mb-4">
                <ShoppingCart className="w-8 h-8 text-success-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Supply Chain</h3>
              <p className="text-sm text-muted-foreground">
                End-to-end supply chain management for diverse industry verticals
              </p>
            </CardContent>
          </Card>

          <Card className="glass text-center">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Custom Solutions</h3>
              <p className="text-sm text-muted-foreground">
                Tailored logistics solutions designed for your specific industry needs
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}