import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Mail } from "lucide-react";
import logoImage from "@/assets/logo.png";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services", scrollTo: "services" },
  { name: "Renewable Energy", href: "/renewable-energy", scrollTo: "renewable-energy" },
  { name: "About Us", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

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
          setIsMenuOpen(false);
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
        setIsMenuOpen(false);
        return;
      }
    }
    
    // For other pages (About Us, Contact), navigate and scroll to top
    navigate(item.href);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50 shadow-elegant">
      {/* Top Contact Bar */}
      <div className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 py-2">
          <div className="flex justify-between items-center text-sm">
            <div className="hidden md:flex items-center space-x-6">
              <div className="flex items-center space-x-1">
                <Phone className="w-3 h-3" />
                <span>+91 98100-37127</span>
              </div>
              <div className="flex items-center space-x-1">
                <Mail className="w-3 h-3" />
                <span>sales1@aeroshipgroup.com</span>
              </div>
            </div>
            <div className="text-xs">
              ISO 9001:2015 Certified Company | WCA & JCTRANS Member
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src={logoImage}
              alt="Aeroship Logistics"
              className="h-12 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavigation(item)}
                className={`text-sm font-medium transition-smooth hover:text-primary ${
                  location.pathname === item.href
                    ? "text-primary border-b-2 border-primary pb-1"
                    : "text-foreground"
                }`}
              >
                {item.name}
              </button>
            ))}
            <Button variant="default" size="sm" className="gradient-primary">
              Get Quote
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-3 pt-4 border-t border-border">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavigation(item)}
                  className={`text-sm font-medium py-2 px-3 rounded-md transition-smooth text-left ${
                    location.pathname === item.href
                      ? "bg-primary text-primary-foreground"
                      : "text-foreground hover:bg-muted"
                  }`}
                >
                  {item.name}
                </button>
              ))}
              <Button variant="default" size="sm" className="gradient-primary w-fit">
                Get Quote
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}