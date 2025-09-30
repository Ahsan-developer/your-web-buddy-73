import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="gradient-primary rounded-3xl p-12 md:p-16 shadow-glow">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary-foreground">
              Ready to Transform Your Business?
            </h2>
            
            <p className="text-xl text-primary-foreground/90 mb-10">
              Let's discuss how our IT solutions can drive your business forward. Get started with a free consultation today.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-8 h-14 border-2 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 backdrop-blur-sm"
              >
                Get Started Now
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button 
                variant="secondary"
                size="lg" 
                className="text-lg px-8 h-14"
              >
                <Phone className="w-5 h-5" />
                Contact Sales
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
