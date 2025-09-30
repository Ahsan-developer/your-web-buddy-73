import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight } from "lucide-react";

const articles = [
  {
    title: "Let's Check How to Get Quality Back Link This Year",
    date: "March 25, 2024",
    author: "Admin",
    category: "Business",
    excerpt: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
  },
  {
    title: "Improving Your Business With AI Technology Solutions",
    date: "March 24, 2024",
    author: "Admin",
    category: "Technology",
    excerpt: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
  },
  {
    title: "Best Practices for Cloud Infrastructure Security",
    date: "March 23, 2024",
    author: "Admin",
    category: "Security",
    excerpt: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
  },
];

const News = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block mb-4">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              News & Articles
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Latest News & Articles Directly from Blog
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <Card 
              key={index}
              className="group hover:shadow-glow transition-all duration-300 cursor-pointer border-2 hover:border-primary/50 overflow-hidden"
            >
              <CardContent className="p-0">
                <div className="relative h-56 bg-secondary">
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-primary-foreground px-3 py-1 rounded text-xs font-semibold uppercase">
                      {article.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{article.date}</span>
                    </div>
                    <span>By {article.author}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-smooth">
                    {article.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4">
                    {article.excerpt}
                  </p>
                  
                  <Button variant="link" className="p-0 h-auto group-hover:gap-2 transition-all">
                    Read More
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
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

export default News;
