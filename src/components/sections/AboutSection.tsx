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
  Zap,
  MapPin,
  Building2,
  TrendingUp
} from "lucide-react";
import { useInView } from "@/hooks/use-in-view";

export default function AboutSection() {
  const headerRef = useInView<HTMLDivElement>({ threshold: 0.2 });
  const storyRef = useInView<HTMLDivElement>({ threshold: 0.15 });
  const valuesRef = useInView<HTMLDivElement>({ threshold: 0.15 });
  const officesRef = useInView<HTMLDivElement>({ threshold: 0.15 });
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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6" style={{
            background: 'rgba(16, 185, 129, 0.1)',
            border: '1px solid rgba(16, 185, 129, 0.2)'
          }}>
            <Building2 className="w-4 h-4" style={{ color: '#10b981' }} />
            <span className="text-sm font-medium" style={{ color: '#10b981' }}>
              About Our Company
            </span>
          </div>
          
          <h2 
            className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
            style={{
              color: '#2d3748',
              textShadow: '0 4px 8px rgba(0,0,0,0.1)',
              fontWeight: '800',
              letterSpacing: '-0.025em'
            }}
          >
            About{" "}
            <span style={{
              background: 'linear-gradient(135deg, #10b981 0%, #059669 50%, #047857 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              Aeroship 
            </span>
          </h2>
          
          <p 
            className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed"
            style={{
              color: '#4a5568',
              textShadow: '0 2px 4px rgba(0,0,0,0.05)'
            }}
          >
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

        {/* Premium Global Presence */}
        <div 
          ref={officesRef.ref}
          className="mt-16"
        >
          <div 
            className="relative rounded-3xl p-8 md:p-12 overflow-hidden"
            style={{
              background: 'rgba(255, 255, 255, 0.9)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.1), 0 8px 20px rgba(0, 0, 0, 0.05)'
            }}
          >
            {/* Animated background gradient */}
            <div className="absolute inset-0 opacity-20" style={{
              background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(5, 150, 105, 0.05) 100%)',
            }}></div>
            
            <div className="relative z-10">
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6" style={{
                  background: 'rgba(16, 185, 129, 0.1)',
                  border: '1px solid rgba(16, 185, 129, 0.2)'
                }}>
                  <MapPin className="w-4 h-4" style={{ color: '#10b981' }} />
                  <span className="text-sm font-medium" style={{ color: '#10b981' }}>
                    Global Presence
                  </span>
                </div>
                
                <h3 
                  className="text-3xl md:text-4xl font-bold mb-4"
                  style={{
                    color: '#2d3748',
                    textShadow: '0 4px 8px rgba(0,0,0,0.1)',
                    fontWeight: '800'
                  }}
                >
                  Our Global{" "}
                  <span style={{
                    background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}>
                    Presence
                  </span>
                </h3>
                <p 
                  className="text-lg text-muted-foreground max-w-3xl mx-auto"
                  style={{
                    textShadow: '0 2px 4px rgba(0,0,0,0.05)'
                  }}
                >
                  Strategically located offices across India to serve our global clientele with excellence
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[{
                  city: "Delhi (HQ)",
                  description: "Corporate headquarters managing global operations and strategic partnerships",
                  icon: Building2,
                  gradient: "from-blue-500 to-indigo-600",
                  delay: "0ms"
                },{
                  city: "Gandhidham",
                  description: "Port operations and customs clearance hub for western India logistics",
                  icon: MapPin,
                  gradient: "from-emerald-500 to-green-600",
                  delay: "150ms"
                },{
                  city: "Bangalore",
                  description: "Technology and renewable energy solutions center for southern operations",
                  icon: TrendingUp,
                  gradient: "from-purple-500 to-indigo-600",
                  delay: "300ms"
                }].map((office, index) => (
                  <div
                    key={index}
                    className="group text-center p-6 rounded-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 overflow-hidden"
                    style={{ 
                      transitionDelay: office.delay,
                      background: 'rgba(255, 255, 255, 0.9)',
                      border: '1px solid rgba(255, 255, 255, 0.3)',
                      boxShadow: '0 8px 25px rgba(0, 0, 0, 0.1)'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.boxShadow = '0 15px 40px rgba(0, 0, 0, 0.15)';
                      e.currentTarget.style.borderColor = 'rgba(16, 185, 129, 0.4)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.1)';
                      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                    }}
                  >
                    <div 
                      className={`w-16 h-16 bg-gradient-to-br ${office.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                      style={{
                        boxShadow: '0 8px 25px rgba(0, 0, 0, 0.2)'
                      }}
                    >
                      <office.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <div 
                      className="text-xl font-bold mb-3 group-hover:text-emerald-600 transition-colors duration-300"
                      style={{
                        color: '#2d3748',
                        textShadow: '0 2px 4px rgba(0,0,0,0.1)'
                      }}
                    >
                      {office.city}
                    </div>
                    
                    <p 
                      className="text-sm leading-relaxed font-medium"
                      style={{
                        color: '#4a5568',
                        textShadow: '0 1px 2px rgba(0,0,0,0.05)'
                      }}
                    >
                      {office.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}