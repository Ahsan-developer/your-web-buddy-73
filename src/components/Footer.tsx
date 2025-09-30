import { Facebook, Twitter, Youtube, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-[hsl(250,30%,12%)] text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-6 gradient-primary bg-clip-text text-transparent">
              INFETECH
            </h3>
            <p className="text-white/70 mb-6 leading-relaxed">
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 bg-white/5 hover:bg-primary rounded-lg flex items-center justify-center transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 hover:bg-primary rounded-lg flex items-center justify-center transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 hover:bg-primary rounded-lg flex items-center justify-center transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 hover:bg-primary rounded-lg flex items-center justify-center transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Links</h4>
            <ul className="space-y-3">
              <li><a href="#about" className="text-white/70 hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#services" className="text-white/70 hover:text-primary transition-colors">Our Services</a></li>
              <li><a href="#projects" className="text-white/70 hover:text-primary transition-colors">Portfolio</a></li>
              <li><a href="#team" className="text-white/70 hover:text-primary transition-colors">Our Team</a></li>
              <li><a href="#contact" className="text-white/70 hover:text-primary transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6">Services</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-white/70 hover:text-primary transition-colors">Cloud Solutions</a></li>
              <li><a href="#" className="text-white/70 hover:text-primary transition-colors">Cyber Security</a></li>
              <li><a href="#" className="text-white/70 hover:text-primary transition-colors">IT Consultancy</a></li>
              <li><a href="#" className="text-white/70 hover:text-primary transition-colors">App Development</a></li>
              <li><a href="#" className="text-white/70 hover:text-primary transition-colors">IT Management</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-bold mb-6">Newsletter</h4>
            <p className="text-white/70 mb-6">
              Subscribe to our newsletter to get our latest updates & news.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Email Address"
                className="flex-1 px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-primary text-sm"
              />
              <Button className="bg-primary hover:bg-primary/90 px-4 rounded-lg">
                <Mail className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-white/60 text-sm">
            &copy; 2024 Infetech. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
