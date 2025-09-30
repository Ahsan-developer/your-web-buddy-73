import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechCorp",
    content: "Infetech transformed our IT infrastructure completely. Their expertise and professionalism are unmatched. Highly recommend!",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "CTO, DataFlow Inc",
    content: "The cloud migration was seamless. Their team's dedication and technical knowledge exceeded our expectations.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Director, SecureBank",
    content: "Outstanding security solutions. We feel confident knowing our systems are protected by the best in the industry.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 gradient-dark">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block mb-4">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              Testimonials
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-background">
            What Our Clients Say
          </h2>
          
          <p className="text-lg text-background/80">
            Don't just take our word for it - hear from our satisfied clients.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card/10 backdrop-blur-sm border-background/20">
              <CardContent className="p-6">
                <div className="mb-4">
                  <Quote className="w-10 h-10 text-accent" />
                </div>
                
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>
                
                <p className="text-background/90 mb-6 text-lg leading-relaxed">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center font-bold text-background">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <div className="font-semibold text-background">{testimonial.name}</div>
                    <div className="text-sm text-background/70">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
