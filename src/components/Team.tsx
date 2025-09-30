import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Linkedin } from "lucide-react";

const teamMembers = [
  {
    name: "Rosalina D. William",
    role: "Founder",
    image: null,
  },
  {
    name: "Kelian Anderson",
    role: "Digital Marketer",
    image: null,
  },
  {
    name: "Silviia Garden",
    role: "Developer",
    image: null,
  },
];

const Team = () => {
  return (
    <section id="team" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block mb-4">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Team Members
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Meet Our Professional Team Members
          </h2>
          
          <p className="text-lg text-muted-foreground">
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <Card 
              key={index}
              className="group hover:shadow-glow transition-all duration-300 border-2 hover:border-primary/50 overflow-hidden"
            >
              <CardContent className="p-0">
                <div className="relative h-80 bg-secondary">
                  <div className="absolute inset-0 flex items-center justify-center text-background/20 text-6xl font-bold">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                </div>
                
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold mb-1 text-foreground">
                    {member.name}
                  </h3>
                  <p className="text-muted-foreground mb-4">{member.role}</p>
                  
                  <Button 
                    variant="outline" 
                    size="icon"
                    className="rounded-full border-primary/20 hover:bg-primary hover:text-primary-foreground"
                  >
                    <Linkedin className="w-5 h-5" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
