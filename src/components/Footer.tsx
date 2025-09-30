import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="gradient-dark text-background pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4 gradient-primary bg-clip-text text-transparent">
              INFETECH
            </h3>
            <p className="text-background/80 mb-6">
              Leading provider of innovative IT solutions and services, helping businesses thrive in the digital age.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-background/10 hover:bg-accent flex items-center justify-center transition-smooth">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-background/10 hover:bg-accent flex items-center justify-center transition-smooth">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-background/10 hover:bg-accent flex items-center justify-center transition-smooth">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-background/10 hover:bg-accent flex items-center justify-center transition-smooth">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-background/80 hover:text-accent transition-smooth">About Us</a></li>
              <li><a href="#services" className="text-background/80 hover:text-accent transition-smooth">Services</a></li>
              <li><a href="#projects" className="text-background/80 hover:text-accent transition-smooth">Projects</a></li>
              <li><a href="#team" className="text-background/80 hover:text-accent transition-smooth">Our Team</a></li>
              <li><a href="#contact" className="text-background/80 hover:text-accent transition-smooth">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-background/80 hover:text-accent transition-smooth">Cloud Solutions</a></li>
              <li><a href="#" className="text-background/80 hover:text-accent transition-smooth">Cyber Security</a></li>
              <li><a href="#" className="text-background/80 hover:text-accent transition-smooth">Software Development</a></li>
              <li><a href="#" className="text-background/80 hover:text-accent transition-smooth">Network Solutions</a></li>
              <li><a href="#" className="text-background/80 hover:text-accent transition-smooth">Data Management</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                <span className="text-background/80">123 Business Ave, Tech City, TC 12345</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                <a href="tel:+8898006802" className="text-background/80 hover:text-accent transition-smooth">
                  +88 (9800) 6802
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                <a href="mailto:needhelp@infetech.com" className="text-background/80 hover:text-accent transition-smooth">
                  needhelp@infetech.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-background/70">
            <p>© 2024 Infetech. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-accent transition-smooth">Privacy Policy</a>
              <a href="#" className="hover:text-accent transition-smooth">Terms of Service</a>
              <a href="#" className="hover:text-accent transition-smooth">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
