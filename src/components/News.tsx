import { Calendar, User } from "lucide-react";

const articles = [
  {
    title: "Let's Check How to Get Quality Back Link This Year",
    date: "March 25, 2024",
    author: "Admin",
    category: "Business",
  },
  {
    title: "Improving Your Business With AI Technology Solutions",
    date: "March 24, 2024",
    author: "Admin",
    category: "Technology",
  },
  {
    title: "Best Practices for Cloud Infrastructure Security",
    date: "March 23, 2024",
    author: "Admin",
    category: "Security",
  },
];

const News = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="mb-4">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              News & Articles
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-dark-navy">
            Latest News & Articles Directly from Blog
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <div 
              key={index}
              className="group cursor-pointer"
            >
              <div className="bg-secondary h-64 rounded-xl mb-6 relative overflow-hidden">
                <div className="absolute top-6 left-6">
                  <span className="bg-primary text-white px-4 py-1.5 rounded text-xs font-semibold uppercase">
                    {article.category}
                  </span>
                </div>
              </div>
              
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>{article.date}</span>
                </div>
                <div className="flex items-center gap-1">
                  <User className="w-4 h-4" />
                  <span>By {article.author}</span>
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-dark-navy mb-4 group-hover:text-primary transition-colors">
                {article.title}
              </h3>
              
              <button className="text-primary font-semibold text-sm hover:gap-2 inline-flex items-center gap-1 transition-all">
                Read More
                <span>→</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;
