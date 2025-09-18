import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Calendar, 
  Award, 
  Globe, 
  Users, 
  CheckCircle,
  Target,
  Heart,
  Zap
} from "lucide-react";

export default function AboutSection() {
  return (
    <section className="py-16 bg-background-alt">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            About Aeroship Logistics
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A trusted name in global logistics and renewable energy solutions since 2011
          </p>
        </div>

        {/* Main Story Card */}
        <Card className="glass shadow-elegant mb-12">
          <CardContent className="p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <Calendar className="w-6 h-6 text-primary mr-3" />
                  <span className="text-xl font-semibold text-foreground">Established 2011</span>
                </div>
                
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Our Journey of Excellence
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Founded in 2011, Aeroship Logistics Pvt. Ltd. has grown from a vision to become 
                  a leading global logistics service provider. We are proud members of WCA & JCTRANS, 
                  with a strong presence spanning 186 countries and partnerships with over 6500 overseas agents.
                </p>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Our dual expertise in <strong className="text-foreground">Global Logistics</strong> and 
                  <strong className="text-success"> Renewable Energy Imports</strong> sets us apart in the industry, 
                  allowing us to serve diverse sectors from traditional freight forwarding to cutting-edge 
                  clean energy solutions.
                </p>

                <Button className="gradient-primary">
                  Discover Our Story
                </Button>
              </div>

              <div className="space-y-6">
                {/* Key Achievements */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 glass rounded-xl">
                    <Globe className="w-8 h-8 mx-auto mb-2 text-primary" />
                    <div className="text-2xl font-bold text-foreground">186</div>
                    <div className="text-sm text-muted-foreground">Countries</div>
                  </div>
                  <div className="text-center p-4 glass rounded-xl">
                    <Users className="w-8 h-8 mx-auto mb-2 text-success" />
                    <div className="text-2xl font-bold text-foreground">6500+</div>
                    <div className="text-sm text-muted-foreground">Partners</div>
                  </div>
                </div>

                {/* Certifications */}
                <div className="glass rounded-xl p-6">
                  <h4 className="font-semibold text-foreground mb-4 flex items-center">
                    <Award className="w-5 h-5 mr-2 text-success" />
                    Certifications & Memberships
                  </h4>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 mr-2 text-success" />
                      ISO 9001:2015 Certified Company
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 mr-2 text-success" />
                      WCA (World Cargo Alliance) Member
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 mr-2 text-success" />
                      JCTRANS Network Partner
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Our Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="glass text-center hover:shadow-elegant transition-smooth hover:-translate-y-2">
            <CardContent className="p-8">
              <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Excellence</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Committed to delivering superior logistics solutions that exceed client expectations 
                through innovative approaches and meticulous attention to detail.
              </p>
            </CardContent>
          </Card>

          <Card className="glass text-center hover:shadow-elegant transition-smooth hover:-translate-y-2">
            <CardContent className="p-8">
              <div className="w-16 h-16 gradient-eco rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-success-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Trust</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Building lasting partnerships through transparency, reliability, and consistent 
                delivery on our promises to clients worldwide.
              </p>
            </CardContent>
          </Card>

          <Card className="glass text-center hover:shadow-elegant transition-smooth hover:-translate-y-2">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Innovation</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Leading the future of logistics through sustainable practices and cutting-edge 
                renewable energy solutions for a greener tomorrow.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Global Offices */}
        <Card className="glass mt-12">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
              Our Global Presence
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-lg font-semibold text-foreground mb-2">Delhi (HQ)</div>
                <p className="text-sm text-muted-foreground">
                  Corporate headquarters managing global operations and strategic partnerships
                </p>
              </div>
              <div>
                <div className="text-lg font-semibold text-foreground mb-2">Gandhidham</div>
                <p className="text-sm text-muted-foreground">
                  Port operations and customs clearance hub for western India logistics
                </p>
              </div>
              <div>
                <div className="text-lg font-semibold text-foreground mb-2">Bangalore</div>
                <p className="text-sm text-muted-foreground">
                  Technology and renewable energy solutions center for southern operations
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}