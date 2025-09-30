import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Enterprise Cloud Migration",
    category: "Cloud Solutions",
    description: "Successfully migrated 500+ servers to cloud infrastructure with zero downtime.",
  },
  {
    title: "Banking Security System",
    category: "Cyber Security",
    description: "Implemented advanced security protocols for major financial institution.",
  },
  {
    title: "E-Commerce Platform",
    category: "Web Development",
    description: "Built scalable platform handling 1M+ daily transactions.",
  },
  {
    title: "IoT Smart City",
    category: "Network Solutions",
    description: "Deployed city-wide IoT infrastructure for improved urban management.",
  },
  {
    title: "Healthcare Data System",
    category: "Data Management",
    description: "Secure patient data management system for healthcare network.",
  },
  {
    title: "Mobile Banking App",
    category: "Mobile Solutions",
    description: "Award-winning mobile banking application with 4.8-star rating.",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block mb-4">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Our Projects
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Perfect Solutions That Business Demands
          </h2>
          
          <p className="text-lg text-muted-foreground">
            Explore our portfolio of successful projects across various industries.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="group hover:shadow-glow transition-all duration-300 cursor-pointer border-2 hover:border-primary/50"
            >
              <CardContent className="p-6">
                <div className="mb-4">
                  <span className="text-xs font-semibold text-accent uppercase tracking-wider">
                    {project.category}
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-smooth">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground mb-6">
                  {project.description}
                </p>
                
                <Button variant="outline" className="w-full group-hover:border-primary">
                  View Details
                  <ExternalLink className="w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="hero" size="lg">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
