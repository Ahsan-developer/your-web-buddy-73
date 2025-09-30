import { Linkedin } from "lucide-react";

const teamMembers = [
  {
    name: "Rosalina D. William",
    role: "Founder",
  },
  {
    name: "Kelian Anderson",
    role: "Digital Marketer",
  },
  {
    name: "Silviia Garden",
    role: "Developer",
  },
];

const Team = () => {
  return (
    <section id="team" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-start mb-16">
          <div>
            <div className="mb-4">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                Team Members
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-dark-navy leading-tight max-w-md">
              Meet Our Professional Team Members
            </h2>
          </div>
          
          <p className="text-muted-foreground max-w-md hidden lg:block">
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              className="group"
            >
              <div className="bg-secondary h-96 rounded-xl mb-6 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-white/10 text-6xl font-bold">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold text-dark-navy mb-1">
                    {member.name}
                  </h3>
                  <p className="text-muted-foreground">{member.role}</p>
                </div>
                
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                  <Linkedin className="w-5 h-5 text-white" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
