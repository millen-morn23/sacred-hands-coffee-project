
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Coffee, Users, TreePine } from 'lucide-react';

const Home = () => {
  const featuredProducts = [
    {
      name: "Kenyan AA Single Origin",
      description: "Bright acidity with notes of blackcurrant and wine",
      price: "$24.99",
      image: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=400&h=300&fit=crop"
    },
    {
      name: "Western Kenya Micro-lot",
      description: "Complex flavor profile with chocolate and citrus notes",
      price: "$28.99",
      image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400&h=300&fit=crop"
    },
    {
      name: "Farmers Choice Blend",
      description: "A balanced blend celebrating our farming community",
      price: "$22.99",
      image: "https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?w=400&h=300&fit=crop"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section 
        className="relative h-screen flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('https://images.unsplash.com/photo-1472396961693-142e6e269027?w=1920&h=1080&fit=crop')"
        }}
      >
        <div className="text-center text-white max-w-4xl px-4">
          <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Coffee With a Purpose
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-light animate-fade-in">
            From Sacred Hands to Yours
          </p>
          <p className="text-lg mb-8 max-w-2xl mx-auto animate-fade-in">
            Discover exceptional specialty coffee from Western Kenya, 
            where every cup supports smallholder farmers and sustainable practices.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Button 
              asChild 
              size="lg" 
              className="bg-brand-primary hover:bg-brand-primary/90 text-white px-8 py-3"
            >
              <Link to="/shop">Shop Now</Link>
            </Button>
            <Button 
              asChild 
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white hover:text-brand-coffee px-8 py-3"
            >
              <Link to="/story">Our Story</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Mission Snapshot */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-brand-coffee mb-6">
              Our Mission
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're transforming the coffee landscape in Western Kenya through 
              quality-focused cultivation, farmer education, and sustainable community development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-8 border-brand-light hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Coffee className="h-12 w-12 text-brand-primary mx-auto mb-4" />
                <h3 className="font-serif text-2xl font-semibold mb-4 text-brand-coffee">
                  Quality Coffee
                </h3>
                <p className="text-gray-600">
                  Premium micro-lots with complete traceability from farm to cup, 
                  ensuring exceptional quality and fair pricing for farmers.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 border-brand-light hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Users className="h-12 w-12 text-brand-primary mx-auto mb-4" />
                <h3 className="font-serif text-2xl font-semibold mb-4 text-brand-coffee">
                  Farmer Education
                </h3>
                <p className="text-gray-600">
                  Year-round Farmer Field School training programs focusing on 
                  quality cultivation, climate-smart practices, and community leadership.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 border-brand-light hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <TreePine className="h-12 w-12 text-brand-primary mx-auto mb-4" />
                <h3 className="font-serif text-2xl font-semibold mb-4 text-brand-coffee">
                  Sustainability
                </h3>
                <p className="text-gray-600">
                  Environmental stewardship through tree planting initiatives, 
                  indigenous species conservation, and climate adaptation strategies.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-brand-light/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-brand-coffee mb-6">
              Featured Coffee
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover our carefully selected micro-lots, each with its own unique story and flavor profile.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {featuredProducts.map((product, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-serif text-xl font-semibold mb-2 text-brand-coffee">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {product.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-brand-primary">
                      {product.price}
                    </span>
                    <Button 
                      size="sm"
                      className="bg-brand-coffee hover:bg-brand-coffee/90"
                    >
                      Add to Cart
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button 
              asChild 
              size="lg"
              className="bg-brand-primary hover:bg-brand-primary/90"
            >
              <Link to="/shop">
                View All Coffee
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Current Project Spotlight */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-4xl font-bold text-brand-coffee mb-6">
                Hands for Msitu
              </h2>
              <p className="text-xl text-gray-600 mb-6">
                Our tree planting initiative aims to restore indigenous forests 
                and create sustainable agroforestry systems that benefit both 
                coffee quality and environmental conservation.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <TreePine className="h-5 w-5 text-brand-primary mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">10,000 indigenous trees planted annually</span>
                </li>
                <li className="flex items-start">
                  <TreePine className="h-5 w-5 text-brand-primary mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Community nursery programs</span>
                </li>
                <li className="flex items-start">
                  <TreePine className="h-5 w-5 text-brand-primary mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Climate adaptation support for farmers</span>
                </li>
              </ul>
              <Button 
                asChild 
                size="lg"
                className="bg-brand-coffee hover:bg-brand-coffee/90"
              >
                <Link to="/projects">
                  Learn More About Our Projects
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=600&h=400&fit=crop"
                alt="Tree planting initiative"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Farmer Voices Preview */}
      <section className="py-20 bg-brand-light/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-brand-coffee mb-6">
              Farmer Voices
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Meet the dedicated farmers who make our exceptional coffee possible. 
              Their stories inspire our mission every day.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card className="p-8">
              <CardContent className="pt-0">
                <blockquote className="text-lg text-gray-700 mb-6 italic">
                  "Sacred Hands Coffee has transformed not just my farm, but my entire community. 
                  The training and fair prices have given us hope for the future."
                </blockquote>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-brand-primary rounded-full flex items-center justify-center text-white font-semibold mr-4">
                    M
                  </div>
                  <div>
                    <p className="font-semibold text-brand-coffee">Mary Wanjiku</p>
                    <p className="text-gray-600">Coffee Farmer, Bungoma County</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-8">
              <CardContent className="pt-0">
                <blockquote className="text-lg text-gray-700 mb-6 italic">
                  "The Farmer Field School taught me new techniques that doubled my harvest. 
                  Now I can send my children to university."
                </blockquote>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-brand-primary rounded-full flex items-center justify-center text-white font-semibold mr-4">
                    J
                  </div>
                  <div>
                    <p className="font-semibold text-brand-coffee">John Kiprotich</p>
                    <p className="text-gray-600">Coffee Farmer, Trans Nzoia County</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button 
              asChild 
              variant="outline"
              size="lg"
              className="border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white"
            >
              <Link to="/projects">
                Read More Stories
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
