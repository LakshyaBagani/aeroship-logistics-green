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
import { useNavigate, useLocation } from "react-router-dom";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services", scrollTo: "services" },
  { name: "Renewable Energy", href: "/renewable-energy", scrollTo: "renewable-energy" },
  { name: "About Us", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const services = [
  { name: "Air Freight", href: "/#services" },
  { name: "Sea Freight", href: "/#services" },
  { name: "Road Transport", href: "/#services" },
  { name: "Rail Freight", href: "/#services" },
  { name: "Custom Clearance", href: "/#services" },
];

export default function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (item: any) => {
    if (item.scrollTo) {
      // For Services and Renewable Energy
      if (location.pathname === "/") {
        // If we're on the home page, scroll to the section with offset
        const element = document.getElementById(item.scrollTo);
        if (element) {
          const navbarHeight = 80; // Approximate navbar height
          const elementPosition = element.offsetTop - navbarHeight;
          window.scrollTo({ top: elementPosition, behavior: 'smooth' });
          return;
        }
      } else {
        // If we're on another page, navigate to home first, then scroll
        navigate("/");
        // Wait for navigation to complete, then scroll
        setTimeout(() => {
          const element = document.getElementById(item.scrollTo);
          if (element) {
            const navbarHeight = 80; // Approximate navbar height
            const elementPosition = element.offsetTop - navbarHeight;
            window.scrollTo({ top: elementPosition, behavior: 'smooth' });
          }
        }, 100);
        return;
      }
    }
    
    // For other pages (About Us, Contact), navigate and scroll to top
    navigate(item.href);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-green-600">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">A</span>
              </div>
              <div>
                <div className="font-bold text-xl text-white">Aeroship</div>
                <div className="text-sm text-white/90">Logistics Pvt. Ltd.</div>
              </div>
            </div>
            
            <p className="text-white mb-6 leading-relaxed">
              Your trusted global logistics partner with 6500+ overseas partners in 186 countries. 
              Specializing in Air, Sea, Road, and Rail freight management worldwide.
            </p>

            <div className="space-y-2 text-sm">
              <div className="text-white font-semibold">ISO 9001:2015 Certified</div>
              <div className="text-white font-semibold">WCA & JCTRANS Member</div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button 
                    onClick={() => handleNavigation(link)}
                    className="text-white hover:text-white transition-smooth hover:underline text-left font-medium"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-white">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <button 
                    onClick={() => handleNavigation({ href: "/", scrollTo: "services" })}
                    className="text-white hover:text-white transition-smooth hover:underline text-left font-medium"
                  >
                    {service.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-white">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-white flex-shrink-0 mt-1" />
                <div>
                  <div className="text-white font-bold">Mr. Vishal Saxena</div>
                  <div className="text-white text-sm font-medium">+91 98100-37127</div>
                  <div className="text-white text-sm font-medium">011-28061366, 28061266</div>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-white flex-shrink-0 mt-1" />
                <div className="text-sm">
                  <div className="text-white font-medium">vishal.saxena@aeroshipgroup.com</div>
                  <div className="text-white font-medium">sales1@aeroshipgroup.com</div>
                  <div className="text-white font-medium">pricing@aeroshipgroup.com</div>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Globe className="w-5 h-5 text-white flex-shrink-0 mt-1" />
                <a 
                  href="https://www.aeroshipgroup.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white hover:text-white transition-smooth font-medium"
                >
                  www.aeroshipgroup.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Office Locations */}
      <div className="border-t border-white/20">
        <div className="container mx-auto px-4 py-12">
          <h3 className="font-bold text-lg mb-6 text-white text-center">Our Offices</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
            {/* Delhi HQ */}
            <div className="text-center">
              <div className="flex justify-center mb-3">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
              </div>
              <h4 className="font-bold text-white mb-2">Delhi (Corporate Office)</h4>
              <p className="text-white leading-relaxed font-medium">
                New Delhi
              </p>
            </div>

            {/* Gandhidham */}
            <div className="text-center">
              <div className="flex justify-center mb-3">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
              </div>
              <h4 className="font-bold text-white mb-2">Gandhidham</h4>
              <p className="text-white leading-relaxed font-medium">
                Gandhidham, Gujarat
              </p>
            </div>

            {/* Bangalore */}
            <div className="text-center">
              <div className="flex justify-center mb-3">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
              </div>
              <h4 className="font-bold text-white mb-2">Bangalore</h4>
              <p className="text-white leading-relaxed font-medium">
                Bangalore, Karnataka
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/20">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-white text-sm mb-4 md:mb-0 font-medium">
              © 2024 Aeroship Logistics Pvt. Ltd. All rights reserved.
            </div>
            
            {/* Social Media Icons */}
            <div className="flex items-center space-x-4">
              <span className="text-white text-sm mr-2 font-medium">Follow Us:</span>
              <Button variant="ghost" size="sm" className="text-white hover:text-white hover:bg-white/20">
                <Facebook className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-white hover:text-white hover:bg-white/20">
                <Twitter className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-white hover:text-white hover:bg-white/20">
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-white hover:text-white hover:bg-white/20">
                <Instagram className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-white hover:text-white hover:bg-white/20">
                <MessageCircle className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}