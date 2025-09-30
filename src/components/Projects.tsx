import { ArrowRight } from "lucide-react";

const projects = [
  {
    title: "Data Solutions",
    category: "Technology",
  },
  {
    title: "Smart Vision",
    category: "Ideas",
  },
  {
    title: "Platform Integration",
    category: "Software",
  },
  {
    title: "Web Development",
    category: "Marketing",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="mb-4">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Latest Projects
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-dark-navy leading-tight">
            Improve & Enhance Our Tech Projects
          </h2>
          
          <p className="text-muted-foreground">
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative h-96 bg-secondary rounded-xl overflow-hidden cursor-pointer"
            >
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="text-sm font-semibold mb-2">{project.category}</div>
                <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                
                {/* Arrow Button */}
                <div className="absolute bottom-6 right-6 w-12 h-12 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <ArrowRight className="w-5 h-5 text-primary" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
