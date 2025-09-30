import { Button } from "@/components/ui/button";
import { Code2, Network, CheckCircle } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left - Shapes */}
          <div className="relative">
            <div className="relative w-full max-w-md mx-auto">
              {/* Main dark box */}
              <div className="bg-secondary h-96 rounded-lg" />
              
              {/* Circular badge overlay */}
              <div className="absolute -right-8 top-1/2 -translate-y-1/2 w-48 h-48 bg-white rounded-full border-8 border-white shadow-lg flex flex-col items-center justify-center">
                <div className="text-center">
                  <div className="text-xs text-primary font-semibold uppercase tracking-wider mb-2" style={{ writingMode: 'horizontal-tb' }}>
                    IT Solution
                  </div>
                  <div className="w-12 h-12 mx-auto my-2">
                    <svg viewBox="0 0 50 50" className="text-primary">
                      <circle cx="25" cy="25" r="20" fill="none" stroke="currentColor" strokeWidth="2" />
                      <path d="M15 25 L23 33 L35 18" stroke="currentColor" strokeWidth="2" fill="none" />
                    </svg>
                  </div>
                  <div className="text-xs text-primary font-semibold uppercase tracking-wider">
                    Business Dev
                  </div>
                </div>
              </div>
              
              {/* Stats badge */}
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-primary text-white px-8 py-4 rounded-lg shadow-lg text-center">
                <div className="text-3xl font-bold">6800<sup className="text-lg">+</sup></div>
                <div className="text-xs uppercase tracking-wide">Satisfied Clients</div>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div>
            <div className="mb-4">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider flex items-center gap-2">
                <span className="w-8 h-0.5 bg-primary"></span>
                About Our Company
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-dark-navy leading-tight">
              We're Partner of Your Innovations
            </h2>
            
            <p className="text-muted-foreground mb-8 leading-relaxed">
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even.
            </p>

            {/* Feature Icons */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Code2 className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-dark-navy text-sm">Website</h3>
                  <p className="text-sm font-bold text-dark-navy">Development</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Network className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-dark-navy text-sm">Internal</h3>
                  <p className="text-sm font-bold text-dark-navy">Networking</p>
                </div>
              </div>
            </div>

            {/* Checkmarks */}
            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <p className="text-sm text-muted-foreground">Exploring version oflorem veritatis proin</p>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <p className="text-sm text-muted-foreground">Auctor aliquet aenean simply free text veritatis quis</p>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <p className="text-sm text-muted-foreground">Consequat ipsum nec lorem sagittis sem nibh.</p>
              </div>
            </div>

            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 rounded uppercase tracking-wide font-semibold">
              Learn More
            </Button>
          </div>
        </div>

        {/* Three Cards Below */}
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: "🌩️", title: "Perfect solutions that", subtitle: "business demands" },
            { icon: "🔄", title: "Perfect solutions that", subtitle: "business demands" },
            { icon: "🚀", title: "Perfect solutions that", subtitle: "business demands" }
          ].map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-card overflow-hidden group hover:shadow-lg transition-all">
              <div className="bg-secondary h-56 relative">
                <div className="absolute bottom-6 right-6 w-14 h-14 bg-primary rounded-lg flex items-center justify-center text-2xl">
                  {item.icon}
                </div>
              </div>
              <div className="p-6 text-center">
                <h3 className="font-bold text-lg text-dark-navy">{item.title}</h3>
                <p className="font-bold text-lg text-dark-navy">{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
