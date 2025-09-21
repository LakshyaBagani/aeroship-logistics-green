import { useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Globe, Clock, Send, ShieldCheck, MessageSquare } from "lucide-react";
import { useInView } from "@/hooks/use-in-view";

const Contact = () => {
  const headerRef = useInView<HTMLDivElement>({ threshold: 0.2 });
  const gridRef = useInView<HTMLDivElement>({ threshold: 0.15 });
  const officesRef = useInView<HTMLDivElement>({ threshold: 0.15 });

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden" style={{
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

      <Navbar />
      <main className="pt-16 relative z-10">
        {/* Premium Header */}
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full mb-8 shadow-lg" style={{
              background: 'rgba(16, 185, 129, 0.15)',
              border: '1px solid rgba(16, 185, 129, 0.3)',
              backdropFilter: 'blur(10px)',
              boxShadow: '0 8px 25px rgba(16, 185, 129, 0.2)'
            }}>
              <MessageSquare className="w-5 h-5" style={{ color: '#10b981' }} />
              <span className="text-sm font-semibold" style={{ color: '#10b981' }}>
                Get in Touch
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight" style={{
              color: '#2d3748',
              textShadow: '0 6px 12px rgba(0,0,0,0.15)',
              fontWeight: 900,
              letterSpacing: '-0.025em'
            }}>
              Contact{" "}
              <span style={{
                background: 'linear-gradient(135deg, #10b981 0%, #059669 50%, #047857 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                Logigreen Global Logistics
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed" style={{
              textShadow: '0 2px 4px rgba(0,0,0,0.05)'
            }}>
              Get in touch with our logistics experts for freight forwarding and renewable energy imports.
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">

          <div ref={gridRef.ref} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 reveal-up ${gridRef.isInView ? 'reveal-in' : ''}`}>
            {/* Contact Information */}
            <div className="space-y-8">
              {[{
                title: 'Call Us',
                icon: Phone,
                content: (
                  <div className="space-y-3">
                    <div className="text-foreground font-semibold text-lg">Mr. Vishal Saxena</div>
                    <div className="text-muted-foreground text-base">+91 98100-37127</div>
                    <div className="text-muted-foreground text-base">011-28061366, 28061266</div>
                  </div>
                )
              },{
                title: 'Email Us',
                icon: Mail,
                content: (
                  <div className="space-y-3">
                    <div className="text-muted-foreground text-base">vishal.saxena@aeroshipgroup.com</div>
                    <div className="text-muted-foreground text-base">sales1@aeroshipgroup.com</div>
                    <div className="text-muted-foreground text-base">pricing@aeroshipgroup.com</div>
                  </div>
                )
              },{
                title: 'Business Hours',
                icon: Clock,
                content: (
                  <div className="space-y-2 text-muted-foreground text-base">
                    <div>Monday - Friday: 9:00 AM - 6:00 PM</div>
                    <div>Saturday: 9:00 AM - 1:00 PM</div>
                    <div>Sunday: Closed</div>
                  </div>
                )
              }].map((card, idx) => (
                <div key={idx} className="group relative rounded-3xl p-8 transition-all duration-700 hover:scale-[1.03] hover:-translate-y-2" style={{
                  background: 'rgba(255, 255, 255, 0.7)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255, 255, 255, 0.4)',
                  boxShadow: '0 15px 40px rgba(0, 0, 0, 0.1), 0 5px 15px rgba(0, 0, 0, 0.05)'
                }}>
                  {/* Animated background overlay */}
                  <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" style={{
                    background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(5, 150, 105, 0.05) 100%)'
                  }}></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 rounded-2xl flex items-center justify-center mr-4 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6" style={{
                        background: 'linear-gradient(135deg, #10b981, #059669)',
                        boxShadow: '0 8px 25px rgba(16, 185, 129, 0.3)'
                      }}>
                        <card.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-foreground group-hover:text-emerald-600 transition-colors duration-500">{card.title}</h3>
                    </div>
                    {card.content}
                  </div>
                </div>
              ))}
            </div>

            {/* Contact Form */}
            <div className="group relative rounded-3xl overflow-hidden transition-all duration-700 hover:scale-[1.02] hover:-translate-y-1" style={{
              background: 'rgba(255, 255, 255, 0.8)',
              backdropFilter: 'blur(25px)',
              border: '1px solid rgba(255, 255, 255, 0.5)',
              boxShadow: '0 25px 80px rgba(0, 0, 0, 0.15), 0 10px 30px rgba(0, 0, 0, 0.1)',
              minHeight: '650px'
            }}>
              {/* Animated background overlay */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700" style={{
                background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(5, 150, 105, 0.05) 100%)'
              }}></div>
              
              <div className="relative z-10 p-10 h-full flex flex-col">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-foreground mb-3 group-hover:text-emerald-600 transition-colors duration-500">Send Us a Message</h2>
                  <p className="text-muted-foreground">We'll get back to you within 24 hours</p>
                </div>
                
                <form className="space-y-6 flex-grow flex flex-col">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Input 
                        placeholder="Your Name" 
                        className="h-14 text-base rounded-2xl border-2 border-gray-200 focus:border-emerald-500 focus:ring-emerald-500/20 transition-all duration-300 hover:border-emerald-400" 
                      />
                    </div>
                    <div className="space-y-2">
                      <Input 
                        placeholder="Company Name" 
                        className="h-14 text-base rounded-2xl border-2 border-gray-200 focus:border-emerald-500 focus:ring-emerald-500/20 transition-all duration-300 hover:border-emerald-400" 
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Input 
                        type="email" 
                        placeholder="Email Address" 
                        className="h-14 text-base rounded-2xl border-2 border-gray-200 focus:border-emerald-500 focus:ring-emerald-500/20 transition-all duration-300 hover:border-emerald-400" 
                      />
                    </div>
                    <div className="space-y-2">
                      <Input 
                        type="tel" 
                        placeholder="Phone Number" 
                        className="h-14 text-base rounded-2xl border-2 border-gray-200 focus:border-emerald-500 focus:ring-emerald-500/20 transition-all duration-300 hover:border-emerald-400" 
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Input 
                      placeholder="Subject" 
                      className="h-14 text-base rounded-2xl border-2 border-gray-200 focus:border-emerald-500 focus:ring-emerald-500/20 transition-all duration-300 hover:border-emerald-400" 
                    />
                  </div>
                  <div className="space-y-2 flex-grow">
                    <Textarea 
                      placeholder="Tell us about your logistics requirements..." 
                      className="min-h-40 text-base rounded-2xl border-2 border-gray-200 focus:border-emerald-500 focus:ring-emerald-500/20 transition-all duration-300 hover:border-emerald-400 resize-none"
                    />
                  </div>
                  <div className="mt-auto space-y-6">
                    <Button className="w-full h-16 text-lg font-bold rounded-2xl transition-all duration-500 hover:scale-105 hover:shadow-2xl" style={{
                      background: 'linear-gradient(135deg, #10b981, #059669)',
                      boxShadow: '0 12px 35px rgba(16, 185, 129, 0.4)'
                    }}
                    >
                      <Send className="w-5 h-5 mr-3" />
                      Send Message
                    </Button>
                    <div className="flex items-center justify-center gap-3 text-sm text-muted-foreground">
                      <ShieldCheck className="w-5 h-5 text-emerald-500" />
                      Your information is securely encrypted
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>

          {/* Office Locations */}
          <div ref={officesRef.ref} className={`mt-16 reveal-up ${officesRef.isInView ? 'reveal-in' : ''}`}>
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6" style={{
                background: 'rgba(16, 185, 129, 0.1)',
                border: '1px solid rgba(16, 185, 129, 0.2)'
              }}>
                <MapPin className="w-4 h-4" style={{ color: '#10b981' }} />
                <span className="text-sm font-medium" style={{ color: '#10b981' }}>
                  Office Locations
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">Our Office Locations</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[{
                city: 'Delhi (HQ)',
                color: '#3b82f6',
                address: 'New Delhi'
              },{
                city: 'Gandhidham',
                color: '#10b981',
                address: 'Gandhidham, Gujarat'
              },{
                city: 'Bangalore',
                color: '#6366f1',
                address: 'Bangalore, Karnataka'
              }].map((o, idx) => (
                <div key={idx} className="relative rounded-2xl p-6 text-center transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02]" style={{
                  background: 'rgba(255, 255, 255, 0.4)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  boxShadow: '0 8px 25px rgba(0, 0, 0, 0.1)'
                }}>
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4" style={{
                    background: `linear-gradient(135deg, ${o.color}, #0ea5e9)`,
                    boxShadow: '0 6px 18px rgba(0,0,0,0.15)'
                  }}>
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{o.city}</h3>
                  <p className="text-sm text-muted-foreground">{o.address}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;

/* Inline animations for this page */
// eslint-disable-next-line @next/next/no-css-tags
// Using a style tag is acceptable here to scope custom animations to this page
// Tailwind classes are used elsewhere for consistency
// Note: JSX style tag is supported in Vite/React when not using Next.js as well
// If your setup doesn't support it, move these to a global CSS file.
// These match patterns used elsewhere in the project.
// @ts-ignore
<style jsx>{`
  @keyframes float {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(-10px) rotate(1deg); }
  }
  @keyframes pulse {
    0%, 100% { opacity: 0.3; }
    50% { opacity: 0.6; }
  }
  .reveal-up {
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }
  .reveal-up.reveal-in {
    opacity: 1;
    transform: translateY(0);
  }
`}</style>