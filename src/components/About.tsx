import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <div className="inline-block mb-4">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                About Our Company
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              We're Partner of Your Innovations
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-1">Expert Team Members</h3>
                  <p className="text-muted-foreground">Our team consists of highly skilled professionals with years of experience.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-1">Fastest Customer Service</h3>
                  <p className="text-muted-foreground">We pride ourselves on providing quick and efficient support to all our clients.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-1">Reasonable Pricing Plans</h3>
                  <p className="text-muted-foreground">Competitive pricing without compromising on quality and service excellence.</p>
                </div>
              </div>
            </div>

            <Button variant="hero" size="lg">
              Learn More About Us
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>

          {/* Image/Stats Side */}
          <div className="relative">
            <div className="gradient-hero rounded-2xl p-12 shadow-card">
              <div className="grid grid-cols-2 gap-8">
                <div className="bg-card rounded-xl p-6 shadow-card text-center">
                  <div className="text-5xl font-bold gradient-primary bg-clip-text text-transparent mb-2">
                    99%
                  </div>
                  <div className="text-muted-foreground">Success Rate</div>
                </div>
                
                <div className="bg-card rounded-xl p-6 shadow-card text-center">
                  <div className="text-5xl font-bold gradient-primary bg-clip-text text-transparent mb-2">
                    24/7
                  </div>
                  <div className="text-muted-foreground">Support</div>
                </div>
                
                <div className="bg-card rounded-xl p-6 shadow-card text-center">
                  <div className="text-5xl font-bold gradient-primary bg-clip-text text-transparent mb-2">
                    100+
                  </div>
                  <div className="text-muted-foreground">Countries</div>
                </div>
                
                <div className="bg-card rounded-xl p-6 shadow-card text-center">
                  <div className="text-5xl font-bold gradient-primary bg-clip-text text-transparent mb-2">
                    A+
                  </div>
                  <div className="text-muted-foreground">Rating</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
