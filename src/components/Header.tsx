import { useState } from "react";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Top Bar */}
      <div className="bg-secondary text-white py-3 px-4">
        <div className="container mx-auto flex flex-wrap justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a href="mailto:needhelp@infetech.com" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Mail className="w-4 h-4" />
              <span className="hidden sm:inline">needhelp@infetech.com</span>
            </a>
            <span className="hidden md:inline text-white/70">Mon - Sat: 8.00 am - 7.00 pm</span>
          </div>
          <a href="tel:+8898006802" className="flex items-center gap-2 font-semibold hover:text-primary transition-colors">
            <Phone className="w-4 h-4" />
            <span>Call Anytime +88 (9800) 6802</span>
          </a>
        </div>
      </div>

      {/* Main Navigation */}
      <header className="bg-white border-b sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="/" className="text-2xl font-bold gradient-primary bg-clip-text text-transparent">
              INFETECH
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              <a href="#home" className="font-medium text-dark-navy hover:text-primary transition-colors">Home</a>
              <a href="#about" className="font-medium text-dark-navy hover:text-primary transition-colors">About</a>
              <a href="#services" className="font-medium text-dark-navy hover:text-primary transition-colors">Services</a>
              <a href="#projects" className="font-medium text-dark-navy hover:text-primary transition-colors">Projects</a>
              <a href="#team" className="font-medium text-dark-navy hover:text-primary transition-colors">Team</a>
              <a href="#contact" className="font-medium text-dark-navy hover:text-primary transition-colors">Contact</a>
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Button className="bg-primary hover:bg-primary/90 text-white px-6 rounded-md">
                Get Started
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="lg:hidden pb-6 flex flex-col gap-4">
              <a href="#home" className="font-medium hover:text-primary transition-colors py-2">Home</a>
              <a href="#about" className="font-medium hover:text-primary transition-colors py-2">About</a>
              <a href="#services" className="font-medium hover:text-primary transition-colors py-2">Services</a>
              <a href="#projects" className="font-medium hover:text-primary transition-colors py-2">Projects</a>
              <a href="#team" className="font-medium hover:text-primary transition-colors py-2">Team</a>
              <a href="#contact" className="font-medium hover:text-primary transition-colors py-2">Contact</a>
              <Button className="bg-primary hover:bg-primary/90 text-white w-full rounded-md">
                Get Started
              </Button>
            </nav>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
