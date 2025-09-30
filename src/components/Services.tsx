import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Cloud, Shield, Code, Network, Database, Smartphone, ArrowRight } from "lucide-react";
import serviceCloud from "@/assets/service-cloud.jpg";
import serviceSecurity from "@/assets/service-security.jpg";
import serviceDev from "@/assets/service-dev.jpg";

const services = [
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and migration services to modernize your business operations.",
    image: serviceCloud,
  },
  {
    icon: Shield,
    title: "Cyber Security",
    description: "Comprehensive security solutions to protect your business from evolving digital threats.",
    image: serviceSecurity,
  },
  {
    icon: Code,
    title: "Software Development",
    description: "Custom software solutions tailored to meet your unique business requirements.",
    image: serviceDev,
  },
  {
    icon: Network,
    title: "Network Solutions",
    description: "Robust networking infrastructure for seamless connectivity and performance.",
    image: null,
  },
  {
    icon: Database,
    title: "Data Management",
    description: "Efficient data storage, backup, and recovery solutions for business continuity.",
    image: null,
  },
  {
    icon: Smartphone,
    title: "Mobile Solutions",
    description: "Innovative mobile applications for iOS and Android platforms.",
    image: null,
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block mb-4">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Our Services
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            IT Solutions & Services
          </h2>
          
          <p className="text-lg text-muted-foreground">
            We provide comprehensive IT solutions to help businesses thrive in the digital age.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-glow transition-all duration-300 cursor-pointer border-2 hover:border-primary/50 overflow-hidden"
              >
                {service.image && (
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                  </div>
                )}
                <CardContent className="p-6">
                  <div className="w-16 h-16 gradient-primary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-smooth">
                    {service.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4">
                    {service.description}
                  </p>
                  
                  <Button variant="link" className="p-0 h-auto group-hover:gap-2 transition-all">
                    Learn More
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
