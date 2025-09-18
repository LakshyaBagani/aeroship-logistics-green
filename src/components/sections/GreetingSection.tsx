import { Card, CardContent } from "@/components/ui/card";
import { Handshake, Calendar, MapPin } from "lucide-react";

export default function GreetingSection() {
  return (
    <section className="py-16 bg-background-alt">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Greeting Header */}
          <div className="flex items-center justify-center mb-8">
            <Handshake className="w-8 h-8 text-primary mr-3" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Greetings from the Aeroship Group
            </h2>
          </div>

          {/* Main Greeting Card */}
          <Card className="glass shadow-elegant mb-8">
            <CardContent className="p-8 md:p-12">
              <div className="flex items-center justify-center mb-6">
                <Calendar className="w-6 h-6 text-success mr-2" />
                <span className="text-lg font-semibold text-success">
                  Serving global trade and renewable energy logistics since 2011
                </span>
              </div>
              
              <p className="text-lg md:text-xl text-foreground mb-6 leading-relaxed">
                We specialize in handling{" "}
                <span className="font-semibold text-primary">
                  FOB/EXW/CIF/DDP/DDU/CFR
                </span>{" "}
                shipments around the globe by Air and Sea.
              </p>

              {/* Expertise Highlights */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-success rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Global Logistics</h4>
                    <p className="text-sm text-muted-foreground">
                      Comprehensive freight forwarding services across all continents
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-success rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Renewable Energy</h4>
                    <p className="text-sm text-muted-foreground">
                      Specialized in solar, wind, and clean energy project imports
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-success rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">WCA & JCTRANS Member</h4>
                    <p className="text-sm text-muted-foreground">
                      Trusted network partnerships for reliable global coverage
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-success rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Multi-Modal Transport</h4>
                    <p className="text-sm text-muted-foreground">
                      Air, Sea, Road, and Rail freight solutions under one roof
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Global Presence Indicator */}
          <div className="flex items-center justify-center text-muted-foreground">
            <MapPin className="w-5 h-5 mr-2" />
            <span className="text-sm">
              Operating across South East Asia, Europe, USA, Africa, Gulf, Middle East & Far East
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}