import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Globe, Clock, Send } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Contact Aeroship Logistics
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get in touch with our logistics experts for your freight forwarding 
              and renewable energy import needs.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="glass shadow-elegant">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-foreground mb-6">Send Us a Message</h2>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input placeholder="Your Name" />
                    <Input placeholder="Company Name" />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input type="email" placeholder="Email Address" />
                    <Input type="tel" placeholder="Phone Number" />
                  </div>
                  <Input placeholder="Subject" />
                  <Textarea 
                    placeholder="Tell us about your logistics requirements..." 
                    className="min-h-32"
                  />
                  <Button className="w-full gradient-primary">
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-6">
              <Card className="glass">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Phone className="w-6 h-6 text-primary mr-3" />
                    <h3 className="text-xl font-semibold text-foreground">Call Us</h3>
                  </div>
                  <div className="space-y-2">
                    <div className="text-foreground font-medium">Mr. Vishal Saxena</div>
                    <div className="text-muted-foreground">+91 98100-37127</div>
                    <div className="text-muted-foreground">011-28061366, 28061266</div>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Mail className="w-6 h-6 text-primary mr-3" />
                    <h3 className="text-xl font-semibold text-foreground">Email Us</h3>
                  </div>
                  <div className="space-y-2">
                    <div className="text-muted-foreground">vishal.saxena@aeroshipgroup.com</div>
                    <div className="text-muted-foreground">sales1@aeroshipgroup.com</div>
                    <div className="text-muted-foreground">pricing@aeroshipgroup.com</div>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Globe className="w-6 h-6 text-primary mr-3" />
                    <h3 className="text-xl font-semibold text-foreground">Website</h3>
                  </div>
                  <a 
                    href="https://www.aeroshipgroup.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    www.aeroshipgroup.com
                  </a>
                </CardContent>
              </Card>

              <Card className="glass">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Clock className="w-6 h-6 text-primary mr-3" />
                    <h3 className="text-xl font-semibold text-foreground">Business Hours</h3>
                  </div>
                  <div className="space-y-1 text-muted-foreground">
                    <div>Monday - Friday: 9:00 AM - 6:00 PM</div>
                    <div>Saturday: 9:00 AM - 1:00 PM</div>
                    <div>Sunday: Closed</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Office Locations */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-center text-foreground mb-8">
              Our Office Locations
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="glass">
                <CardContent className="p-6 text-center">
                  <MapPin className="w-8 h-8 mx-auto mb-4 text-primary" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">Delhi (HQ)</h3>
                  <p className="text-sm text-muted-foreground">
                    Khasra No. 346, First Floor, At Extend Lal Dora Main Road, 
                    Opp. Palam Appartment, Above HDFC Bank Bijwasan New Delhi - 110061
                  </p>
                </CardContent>
              </Card>

              <Card className="glass">
                <CardContent className="p-6 text-center">
                  <MapPin className="w-8 h-8 mx-auto mb-4 text-success" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">Gandhidham</h3>
                  <p className="text-sm text-muted-foreground">
                    BBZ S57, First Floor, Zanda Chok, 
                    Gandhidham, Kutch Gujarat 370201
                  </p>
                </CardContent>
              </Card>

              <Card className="glass">
                <CardContent className="p-6 text-center">
                  <MapPin className="w-8 h-8 mx-auto mb-4 text-primary" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">Bangalore</h3>
                  <p className="text-sm text-muted-foreground">
                    Building No, Third Floor, L-4, Jeevan Bima Nagar Main Rd, 
                    above Mannapuram Finance Limited, LIC Colony, HAL 3rd Stage, 
                    Sector 12, Jeevan Bima Nagar, Bengaluru, Karnataka - 560075
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;