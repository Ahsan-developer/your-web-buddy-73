import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Mike Holder",
    role: "CEO & Founder",
    content: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even.",
    rating: 5,
  },
  {
    name: "Jessica Brown",
    role: "Manager",
    content: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="mb-4">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Testimonials
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-dark-navy">
            What They're Talking?
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl shadow-card p-8">
              <div className="flex items-start gap-6 mb-6">
                <div className="w-20 h-20 bg-secondary rounded-full flex-shrink-0 flex items-center justify-center border-4 border-white shadow-lg">
                  <span className="text-white font-bold text-xl">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                
                <div className="flex-1">
                  <h3 className="font-bold text-dark-navy text-lg mb-1">{testimonial.name}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{testimonial.role}</p>
                  
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>
              
              <p className="text-muted-foreground leading-relaxed">
                {testimonial.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
