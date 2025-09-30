import { ArrowRight } from "lucide-react";

const projects = [
  {
    title: "Tech Solutions",
    category: "DESIGN / IDEAS",
  },
  {
    title: "Smart Visions",
    category: "DESIGN / IDEAS",
    highlighted: true,
  },
  {
    title: "Platform Integration",
    category: "DESIGN / IDEAS",
  },
  {
    title: "Web Development",
    category: "DESIGN / IDEAS",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-8">
          <div className="max-w-lg">
            <div className="mb-4">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider flex items-center gap-2">
                <span className="w-8 h-0.5 bg-primary"></span>
                Our Completed Projects
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-dark-navy leading-tight">
              Improve & Enhance Our Tech Projects
            </h2>
          </div>
          
          <p className="text-muted-foreground max-w-md">
            There are many variations of passages of available but majority have suffered alteration in some form, by humour or randomised words which don't look even slightly believable.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group relative h-96 rounded-xl overflow-hidden cursor-pointer ${
                project.highlighted ? 'bg-gradient-to-b from-primary to-primary/80' : 'bg-secondary'
              }`}
            >
              {/* Gradient Overlay for non-highlighted */}
              {!project.highlighted && (
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              )}
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="text-xs font-semibold mb-3 tracking-wider">{project.category}</div>
                <h3 className="text-2xl font-bold mb-12">{project.title}</h3>
                
                {/* Arrow Button */}
                <div className="absolute bottom-6 right-6 w-12 h-12 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <ArrowRight className="w-5 h-5 text-primary" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2">
          <div className="w-3 h-3 rounded-full bg-primary"></div>
          <div className="w-3 h-3 rounded-full bg-gray-300"></div>
          <div className="w-3 h-3 rounded-full bg-gray-300"></div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
