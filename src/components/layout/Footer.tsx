import { Button } from "@/components/ui/button";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Globe, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram,
  MessageCircle
} from "lucide-react";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Renewable Energy", href: "/renewable-energy" },
  { name: "About Us", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const services = [
  { name: "Air Freight", href: "/services/air-freight" },
  { name: "Sea Freight", href: "/services/sea-freight" },
  { name: "Road Transport", href: "/services/road-transport" },
  { name: "Rail Freight", href: "/services/rail-freight" },
  { name: "Custom Clearance", href: "/services/customs" },
];

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-primary-light rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">A</span>
              </div>
              <div>
                <div className="font-bold text-xl text-primary-foreground">Aeroship</div>
                <div className="text-sm text-primary-foreground/80 -mt-1">Logistics Pvt. Ltd.</div>
              </div>
            </div>
            
            <p className="text-primary-foreground/80 mb-6 leading-relaxed">
              Your trusted global logistics partner with 6500+ overseas partners in 186 countries. 
              Specializing in Air, Sea, Road, and Rail freight management worldwide.
            </p>

            <div className="space-y-2 text-sm">
              <div className="text-primary-foreground font-semibold">ISO 9001:2015 Certified</div>
              <div className="text-primary-foreground/80">WCA & JCTRANS Member</div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-primary-foreground">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth hover:underline"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-primary-foreground">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <a 
                    href={service.href}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth hover:underline"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-primary-foreground">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-success-light flex-shrink-0 mt-1" />
                <div>
                  <div className="text-primary-foreground font-semibold">Mr. Vishal Saxena</div>
                  <div className="text-primary-foreground/80 text-sm">+91 98100-37127</div>
                  <div className="text-primary-foreground/80 text-sm">011-28061366, 28061266</div>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-success-light flex-shrink-0 mt-1" />
                <div className="text-sm">
                  <div className="text-primary-foreground/80">vishal.saxena@aeroshipgroup.com</div>
                  <div className="text-primary-foreground/80">sales1@aeroshipgroup.com</div>
                  <div className="text-primary-foreground/80">pricing@aeroshipgroup.com</div>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Globe className="w-5 h-5 text-success-light flex-shrink-0 mt-1" />
                <a 
                  href="https://www.aeroshipgroup.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth"
                >
                  www.aeroshipgroup.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Office Locations */}
      <div className="border-t border-primary-light/20">
        <div className="container mx-auto px-4 py-8">
          <h3 className="font-bold text-lg mb-6 text-primary-foreground text-center">Our Offices</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
            {/* Delhi HQ */}
            <div className="text-center">
              <div className="flex justify-center mb-3">
                <div className="w-12 h-12 bg-primary-light rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
              </div>
              <h4 className="font-semibold text-primary-foreground mb-2">Delhi (Corporate Office)</h4>
              <p className="text-primary-foreground/80 leading-relaxed">
                Khasra No. 346, First Floor, At Extend Lal Dora Main Road, 
                Opp. Palam Appartment, Above HDFC Bank Bijwasan New Delhi - 110061
              </p>
            </div>

            {/* Gandhidham */}
            <div className="text-center">
              <div className="flex justify-center mb-3">
                <div className="w-12 h-12 bg-success rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
              </div>
              <h4 className="font-semibold text-primary-foreground mb-2">Gandhidham</h4>
              <p className="text-primary-foreground/80 leading-relaxed">
                BBZ S57, First Floor, Zanda Chok, 
                Gandhidham, Kutch Gujarat 370201
              </p>
            </div>

            {/* Bangalore */}
            <div className="text-center">
              <div className="flex justify-center mb-3">
                <div className="w-12 h-12 bg-primary-light rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
              </div>
              <h4 className="font-semibold text-primary-foreground mb-2">Bangalore</h4>
              <p className="text-primary-foreground/80 leading-relaxed">
                Building No, Third Floor, L-4, Jeevan Bima Nagar Main Rd, 
                above Mannapuram Finance Limited, LIC Colony, HAL 3rd Stage, 
                Sector 12, Jeevan Bima Nagar, Bengaluru, Karnataka - 560075
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-primary-light/20">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-primary-foreground/80 text-sm mb-4 md:mb-0">
              © 2024 Aeroship Logistics Pvt. Ltd. All rights reserved.
            </div>
            
            {/* Social Media Icons */}
            <div className="flex items-center space-x-4">
              <span className="text-primary-foreground/80 text-sm mr-2">Follow Us:</span>
              <Button variant="ghost" size="sm" className="text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-light/20">
                <Facebook className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-light/20">
                <Twitter className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-light/20">
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-light/20">
                <Instagram className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-light/20">
                <MessageCircle className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}