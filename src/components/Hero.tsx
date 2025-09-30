import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="Technology Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/80" />
        <div className="absolute inset-0 gradient-hero" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-block mb-6">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider px-4 py-2 bg-accent/10 rounded-full border border-accent/20">
              Experience the Best IT Solutions
            </span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-background mb-6 leading-tight">
            IT Solutions & Services
          </h1>
          
          <p className="text-xl md:text-2xl text-background/90 mb-8 leading-relaxed">
            We're Partner of Your Innovations
          </p>
          
          <p className="text-lg text-background/80 mb-10 max-w-2xl">
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Button variant="hero" size="lg" className="text-lg px-8 h-14">
              Learn More
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 h-14 border-background/20 text-background hover:bg-background/10 hover:text-background backdrop-blur-sm"
            >
              <Play className="w-5 h-5" />
              Watch Video
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl font-bold text-accent mb-2">6800+</div>
              <div className="text-background/80">Satisfied Clients</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">850+</div>
              <div className="text-background/80">Projects Done</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">25+</div>
              <div className="text-background/80">Expert Team</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">15+</div>
              <div className="text-background/80">Years Experience</div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};

export default Hero;
