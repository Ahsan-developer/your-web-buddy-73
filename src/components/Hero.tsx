import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[600px] flex items-center overflow-hidden gradient-hero">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute top-20 right-20 w-32 h-32 border-4 border-white/10 rounded-full" />
      <div className="absolute bottom-20 right-40 w-16 h-16 border-2 border-white/20 rounded-full" />
      <div className="absolute top-1/2 right-60 w-2 h-20 bg-white/10 transform -rotate-45" />
      
      {/* Diagonal Purple Shape - Top Left */}
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-primary/30 transform rotate-45 blur-sm" />
      
      {/* Diagonal Purple Shape - Top Right */}
      <div className="absolute -top-32 right-0 w-[600px] h-[600px] overflow-hidden">
        <div className="absolute -top-20 -right-20 w-full h-full bg-primary/20 transform rotate-45" />
        <div className="absolute top-0 right-0 w-3/4 h-3/4 border-r-4 border-b-4 border-white/5 transform rotate-45" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 py-20">
        <div className="max-w-2xl">
          <div className="mb-6">
            <span className="text-white/90 text-sm uppercase tracking-widest">
              Experience the Best IT Solutions
            </span>
          </div>
          
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-8 leading-tight tracking-tight">
            IT SOLUTIONS &<br />SERVICES
          </h1>
          
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-base rounded-md">
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
