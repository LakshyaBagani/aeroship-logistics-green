import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Plane, 
  Ship, 
  Truck, 
  Train, 
  Shield, 
  FileText, 
  Warehouse, 
  MonitorPlay 
} from "lucide-react";

const services = [
  {
    icon: Ship,
    title: "Direct Vessels Port-to-Port",
    description: "Live vessel tracking on daily basis with real-time updates and monitoring",
    color: "text-blue-600"
  },
  {
    icon: Shield,
    title: "Cargo Marine Policy",
    description: "Comprehensive insurance coverage for your valuable shipments worldwide",
    color: "text-green-600"
  },
  {
    icon: FileText,
    title: "Custom Clearance Services",
    description: "Door to Door customs clearance with expert documentation handling",
    color: "text-purple-600"
  },
  {
    icon: Train,
    title: "Urgent Railment Facility",
    description: "Fast rail transport from ports to ICDs with dedicated railway connections",
    color: "text-red-600"
  },
  {
    icon: Warehouse,
    title: "Warehousing & Transportation",
    description: "Smart monitoring systems for storage and distribution management",
    color: "text-orange-600"
  },
  {
    icon: MonitorPlay,
    title: "Multi-Modal Freight Management",
    description: "Air, Sea, Road, and Rail freight solutions with integrated tracking",
    color: "text-indigo-600"
  }
];

export default function ServicesSection() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Logistics Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive freight solutions designed to meet your global shipping needs
            with efficiency, reliability, and advanced tracking technology.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-elegant transition-smooth hover:-translate-y-2 border-0 glass"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div className="w-1 h-8 bg-gradient-to-b from-primary to-success rounded-full"></div>
                  </div>
                  <CardTitle className="text-xl text-foreground group-hover:text-primary transition-smooth">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                  
                  {/* Service Features */}
                  <div className="mt-4 flex items-center space-x-2">
                    <div className="flex space-x-1">
                      {[1, 2, 3].map((dot) => (
                        <div 
                          key={dot} 
                          className="w-2 h-2 rounded-full bg-success opacity-60"
                        ></div>
                      ))}
                    </div>
                    <span className="text-xs text-muted-foreground">24/7 Support</span>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Additional Service Features */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center">
            <Plane className="w-8 h-8 mx-auto mb-3 text-primary" />
            <h4 className="font-semibold text-foreground mb-2">Air Freight</h4>
            <p className="text-sm text-muted-foreground">Express air cargo services</p>
          </div>
          <div className="text-center">
            <Ship className="w-8 h-8 mx-auto mb-3 text-primary" />
            <h4 className="font-semibold text-foreground mb-2">Sea Freight</h4>
            <p className="text-sm text-muted-foreground">Ocean freight solutions</p>
          </div>
          <div className="text-center">
            <Truck className="w-8 h-8 mx-auto mb-3 text-primary" />
            <h4 className="font-semibold text-foreground mb-2">Road Transport</h4>
            <p className="text-sm text-muted-foreground">Land transportation network</p>
          </div>
          <div className="text-center">
            <Train className="w-8 h-8 mx-auto mb-3 text-primary" />
            <h4 className="font-semibold text-foreground mb-2">Rail Freight</h4>
            <p className="text-sm text-muted-foreground">Railway cargo services</p>
          </div>
        </div>
      </div>
    </section>
  );
}