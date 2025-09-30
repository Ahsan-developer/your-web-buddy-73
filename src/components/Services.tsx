import { Cloud, Shield, Code, Network, Database } from "lucide-react";

const services = [
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "There are many variations of passages of Lorem Ipsum available, but the majority.",
  },
  {
    icon: Shield,
    title: "Cyber Security",
    description: "There are many variations of passages of Lorem Ipsum available, but the majority.",
  },
  {
    icon: Code,
    title: "IT Consultancy",
    description: "There are many variations of passages of Lorem Ipsum available, but the majority.",
  },
  {
    icon: Network,
    title: "App Development",
    description: "There are many variations of passages of Lorem Ipsum available, but the majority.",
  },
  {
    icon: Database,
    title: "IT Management",
    description: "There are many variations of passages of Lorem Ipsum available, but the majority.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-dark-navy relative overflow-hidden">
      {/* Decorative circle */}
      <div className="absolute top-20 right-20 w-32 h-32 border-2 border-white/5 rounded-full" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="mb-16">
          <div className="mb-4">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Our Services
            </span>
          </div>
          
          <div className="flex justify-between items-end">
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight max-w-md">
              Dealing in all Professional IT Services
            </h2>
            
            <p className="text-white/70 max-w-md hidden lg:block">
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.
            </p>
          </div>
        </div>

        {/* Services Grid - Staggered Layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isHighlighted = index === 1; // Middle card is white/highlighted
            
            return (
              <div
                key={index}
                className={`rounded-xl p-8 ${
                  isHighlighted
                    ? 'bg-white'
                    : 'bg-white/5 backdrop-blur-sm'
                } ${index === 1 ? 'lg:mt-12' : ''} ${index === 3 ? 'lg:mt-12' : ''} transition-all hover:scale-105`}
              >
                <div className={`w-16 h-16 ${isHighlighted ? 'bg-primary' : 'bg-primary/20'} rounded-xl flex items-center justify-center mb-6`}>
                  <Icon className={`w-8 h-8 ${isHighlighted ? 'text-white' : 'text-primary'}`} />
                </div>
                
                <h3 className={`text-xl font-bold mb-3 ${isHighlighted ? 'text-dark-navy' : 'text-white'}`}>
                  {service.title}
                </h3>
                
                <p className={`text-sm leading-relaxed ${isHighlighted ? 'text-muted-foreground' : 'text-white/70'}`}>
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
