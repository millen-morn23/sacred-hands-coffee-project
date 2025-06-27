
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight, Clock } from 'lucide-react';

const Journal = () => {
  const featuredArticle = {
    title: "The Story Behind Sacred Hands Coffee",
    excerpt: "Discover how a vision to transform coffee farming in Western Kenya became a reality, creating lasting impact for hundreds of farming families.",
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=800&h=400&fit=crop",
    author: "Hansel Iravonga",
    date: "December 15, 2024",
    readTime: "8 min read",
    category: "Our Story"
  };

  const articles = [
    {
      title: "Voices from the Field: Meet Mary Wanjiku",
      excerpt: "Coffee farmer Mary Wanjiku shares how Sacred Hands training transformed her farm and her family's future.",
      image: "https://images.unsplash.com/photo-1494790108755-2616c90a009c?w=400&h=250&fit=crop",
      author: "Grace Nekesa",
      date: "December 10, 2024",
      readTime: "5 min read",
      category: "Farmer Stories"
    },
    {
      title: "Why Indigenous Trees Matter for Coffee's Future",
      excerpt: "Exploring the critical role of native tree species in creating sustainable coffee agroforestry systems.",
      image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=400&h=250&fit=crop",
      author: "David Kiprop",
      date: "December 5, 2024",
      readTime: "6 min read",
      category: "Sustainability"
    },
    {
      title: "Building Climate Resilience in Coffee Farming",
      excerpt: "How our Farmer Field School programs help farmers adapt to changing weather patterns and extreme climate events.",
      image: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?w=400&h=250&fit=crop",
      author: "Samuel Wekesa",
      date: "November 28, 2024",
      readTime: "7 min read",
      category: "Education"
    },
    {
      title: "The Art of Coffee Cupping: Quality Assessment",
      excerpt: "Learn about our rigorous quality control processes and what makes Sacred Hands coffee truly exceptional.",
      image: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=400&h=250&fit=crop",
      author: "Mary Wanjiku",
      date: "November 20, 2024",
      readTime: "4 min read",
      category: "Coffee Culture"
    },
    {
      title: "Youth Leadership in Agricultural Innovation",
      excerpt: "How young Field Officers are driving change and inspiring the next generation of coffee farmers.",
      image: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=400&h=250&fit=crop",
      author: "Rose Chepkemoi",
      date: "November 15, 2024",
      readTime: "6 min read",
      category: "Youth Programs"
    },
    {
      title: "Processing Excellence: From Cherry to Cup",
      excerpt: "An inside look at our post-harvest processing methods that preserve the unique characteristics of each coffee lot.",
      image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400&h=250&fit=crop",
      author: "Grace Nekesa",
      date: "November 8, 2024",
      readTime: "5 min read",
      category: "Processing"
    }
  ];

  const categories = [
    "All Articles",
    "Our Story", 
    "Farmer Stories", 
    "Sustainability", 
    "Education", 
    "Coffee Culture", 
    "Youth Programs",
    "Processing"
  ];

  return (
    <div>
      {/* Header */}
      <section className="bg-brand-light/20 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-5xl font-bold text-brand-coffee mb-6">
            Journal
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stories from the field, insights into our projects, and deep dives into the world of 
            specialty coffee. Follow our journey as we transform lives and landscapes in Western Kenya.
          </p>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Badge className="bg-brand-primary text-white">Featured Story</Badge>
          </div>
          
          <Card className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="aspect-video lg:aspect-square overflow-hidden">
                <img 
                  src={featuredArticle.image} 
                  alt={featuredArticle.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-8 lg:p-12 flex flex-col justify-center">
                <Badge className="bg-brand-light text-brand-coffee w-fit mb-4">
                  {featuredArticle.category}
                </Badge>
                <h2 className="font-serif text-3xl font-bold text-brand-coffee mb-4">
                  {featuredArticle.title}
                </h2>
                <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                  {featuredArticle.excerpt}
                </p>
                <div className="flex items-center text-gray-500 text-sm mb-6">
                  <User className="h-4 w-4 mr-2" />
                  <span className="mr-4">{featuredArticle.author}</span>
                  <Calendar className="h-4 w-4 mr-2" />
                  <span className="mr-4">{featuredArticle.date}</span>
                  <Clock className="h-4 w-4 mr-2" />
                  <span>{featuredArticle.readTime}</span>
                </div>
                <Button 
                  size="lg"
                  className="bg-brand-coffee hover:bg-brand-coffee/90 w-fit"
                >
                  Read Full Story
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </div>
          </Card>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 bg-brand-light/10 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={index === 0 ? "default" : "outline"}
                size="sm"
                className={index === 0 ? 
                  "bg-brand-primary hover:bg-brand-primary/90" : 
                  "border-brand-light text-brand-coffee hover:bg-brand-light"
                }
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <Badge 
                    variant="outline" 
                    className="border-brand-light text-brand-coffee mb-3"
                  >
                    {article.category}
                  </Badge>
                  <h3 className="font-serif text-xl font-semibold text-brand-coffee mb-3 leading-tight">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center text-gray-500 text-xs mb-4">
                    <User className="h-3 w-3 mr-1" />
                    <span className="mr-3">{article.author}</span>
                    <Calendar className="h-3 w-3 mr-1" />
                    <span className="mr-3">{article.date}</span>
                    <Clock className="h-3 w-3 mr-1" />
                    <span>{article.readTime}</span>
                  </div>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="border-brand-coffee text-brand-coffee hover:bg-brand-coffee hover:text-white w-full"
                  >
                    Read Article
                    <ArrowRight className="ml-2 h-3 w-3" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button 
              size="lg"
              variant="outline"
              className="border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white"
            >
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-brand-coffee text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl font-bold mb-6">
            Stay Updated
          </h2>
          <p className="text-xl text-brand-light mb-8">
            Subscribe to our newsletter for the latest stories, project updates, 
            and insights from the world of Sacred Hands Coffee.
          </p>
          <div className="max-w-md mx-auto">
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 bg-white/10 border border-brand-light rounded-l-md text-white placeholder-brand-light focus:outline-none focus:ring-2 focus:ring-brand-primary"
              />
              <Button 
                className="px-6 py-3 bg-brand-primary hover:bg-brand-primary/90 rounded-r-md"
              >
                Subscribe
              </Button>
            </div>
            <p className="text-brand-light text-sm mt-3">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Journal;
