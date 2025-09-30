import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin } from "lucide-react";

const CTA = () => {
  return (
    <>
      {/* First CTA - Purple with Circle */}
      <section className="py-20 bg-primary relative overflow-hidden">
        {/* Large decorative circle */}
        <div className="absolute left-20 top-1/2 -translate-y-1/2 w-64 h-64 bg-white/10 rounded-full blur-2xl" />
        <div className="absolute left-32 top-1/2 -translate-y-1/2 w-48 h-48 border-4 border-white/20 rounded-full" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                We Are Ready Develop Your Site!
              </h2>
              <ul className="space-y-3 text-white/90">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-white rounded-full" />
                  <span>There are many variations of passages of Lorem Ipsum available.</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-white rounded-full" />
                  <span>Contrary to popular belief, Lorem Ipsum is not simply random text.</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-white rounded-full" />
                  <span>It has roots in a piece of classical Latin literature from 45 BC.</span>
                </li>
              </ul>
            </div>
            
            <div className="flex justify-end">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 px-8 rounded-md">
                Get In Touch
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Second CTA - Dark with Pricing Cards */}
      <section className="py-20 bg-dark-navy relative overflow-hidden">
        {/* Diagonal purple shape */}
        <div className="absolute -left-20 top-0 bottom-0 w-[800px]">
          <div className="absolute inset-0 bg-primary/20 transform -skew-x-12" />
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/30 rounded-full blur-xl" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                Save Time and Money with a Top IT Solution Agency
              </h2>
            </div>
            
            <div className="flex gap-6 justify-end">
              {/* Pricing Cards */}
              <div className="bg-primary rounded-xl p-6 w-40 text-center">
                <div className="text-5xl font-bold text-white mb-2">$980</div>
                <div className="text-white/80 text-sm">Starting from</div>
              </div>
              <div className="bg-primary rounded-xl p-6 w-40 text-center">
                <div className="text-5xl font-bold text-white mb-2">$450</div>
                <div className="text-white/80 text-sm">Starting from</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-white/90 mb-3">Subscribe Our Newsletter</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              Looking for the Best IT Business Solutions?
            </h2>
            
            <div className="flex gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Email Address"
                className="flex-1 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-white"
              />
              <Button className="bg-white text-primary hover:bg-white/90 px-8 rounded-md">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CTA;
