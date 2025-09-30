import { Button } from "@/components/ui/button";
import { Settings, Headphones, DollarSign } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Dark Shapes */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-secondary h-80 rounded-lg" />
              <div className="bg-secondary h-80 rounded-lg mt-12" />
            </div>
            {/* Purple Badge */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-primary text-white px-6 py-3 rounded-md font-semibold text-sm">
              ABOUT
            </div>
          </div>

          {/* Right - Content */}
          <div>
            <div className="mb-4">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                About Our Company
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-dark-navy leading-tight">
              We're Partner of Your Innovations
            </h2>
            
            <p className="text-muted-foreground mb-8 leading-relaxed">
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
            </p>

            {/* Feature Boxes */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Settings className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-dark-navy mb-1">Expert Team Members</h3>
                  <p className="text-sm text-muted-foreground">Our team consists of highly skilled professionals</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Headphones className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-dark-navy mb-1">Fastest Customer Service</h3>
                  <p className="text-sm text-muted-foreground">We provide quick and efficient support to clients</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <DollarSign className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-dark-navy mb-1">Reasonable Pricing Plans</h3>
                  <p className="text-sm text-muted-foreground">Competitive pricing without compromising quality</p>
                </div>
              </div>
            </div>

            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 rounded-md">
              Learn More About
            </Button>
          </div>
        </div>

        {/* Three Cards Below */}
        <div className="grid md:grid-cols-3 gap-8 mt-20">
          {[1, 2, 3].map((item) => (
            <div key={item} className="bg-white rounded-lg shadow-card p-6 relative">
              <div className="bg-secondary h-48 rounded-lg mb-6" />
              <h3 className="font-bold text-lg text-dark-navy mb-2">Cloud Based Solution</h3>
              <p className="text-sm text-muted-foreground">
                There are many variations of passages of Lorem Ipsum available.
              </p>
              <div className="absolute -bottom-4 right-6 w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                <span className="text-white text-xl">→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
