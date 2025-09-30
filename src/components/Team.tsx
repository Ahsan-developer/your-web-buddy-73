import { Share2 } from "lucide-react";

const teamMembers = [
  {
    name: "Christine Eve",
    role: "Developer",
  },
  {
    name: "Mike Hardson",
    role: "Developer",
  },
  {
    name: "Jessica Brown",
    role: "Developer",
  },
];

const Team = () => {
  return (
    <section id="team" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-8">
          <div className="max-w-lg">
            <div className="mb-4">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider flex items-center gap-2">
                <span className="w-8 h-0.5 bg-primary"></span>
                Our Expert People
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-dark-navy leading-tight">
              Meet Our Professional Team Members
            </h2>
          </div>
          
          <p className="text-muted-foreground max-w-md">
            There are many variations of passages of available but majority have suffered alteration in some form, by humour or randomised words.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="group relative">
              {/* Small purple dot decoration */}
              <div className="absolute -top-2 -right-2 w-3 h-3 bg-primary rounded-sm z-10" />
              <div className="absolute -top-2 right-2 w-3 h-3 bg-primary/60 rounded-sm z-10" />
              
              <div className="bg-secondary h-96 rounded-xl mb-6 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-white/10 text-6xl font-bold">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                
                {/* Social hover overlay */}
                <div className="absolute right-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="bg-white rounded-lg shadow-lg p-3 flex flex-col gap-3">
                    <a href="#" className="text-dark-navy hover:text-primary transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path></svg>
                    </a>
                    <a href="#" className="text-dark-navy hover:text-primary transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path></svg>
                    </a>
                    <a href="#" className="text-dark-navy hover:text-primary transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M21 2H3a1 1 0 00-1 1v18a1 1 0 001 1h18a1 1 0 001-1V3a1 1 0 00-1-1zM8.5 19H5.5v-9H8.5zM7 8.5A1.5 1.5 0 118.5 7 1.5 1.5 0 017 8.5zM19 19h-3v-4.5c0-1.1-.9-2-2-2s-2 .9-2 2V19h-3v-9h3v1.3c.7-.9 1.8-1.5 3-1.5 2.2 0 4 1.8 4 4V19z"/></svg>
                    </a>
                    <a href="#" className="text-dark-navy hover:text-primary transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z"/></svg>
                    </a>
                  </div>
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
                  <Share2 className="w-5 h-5 text-white" />
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
