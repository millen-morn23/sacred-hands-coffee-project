
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { TreePine, Users, BookOpen, Target, Calendar, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Projects = () => {
  const farmerStories = [
    {
      name: "Mary Wanjiku",
      location: "Bungoma County",
      story: "Through Sacred Hands training, I learned new processing techniques that improved my coffee quality and doubled my income.",
      image: "https://images.unsplash.com/photo-1494790108755-2616c90a009c?w=300&h=300&fit=crop"
    },
    {
      name: "John Kiprotich",
      location: "Trans Nzoia County",
      story: "The Farmer Field School taught me about climate-smart agriculture. Now my farm is more resilient to weather changes.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop"
    },
    {
      name: "Grace Nekesa",
      location: "Busia County",
      story: "As a Field Officer, I help other farmers implement sustainable practices. Together, we're transforming our community.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop"
    }
  ];

  const projectStats = [
    { number: "500+", label: "Farmers Trained", icon: Users },
    { number: "10,000+", label: "Trees Planted", icon: TreePine },
    { number: "50+", label: "Field Officers", icon: BookOpen },
    { number: "25+", label: "Communities", icon: MapPin }
  ];

  return (
    <div>
      {/* Header */}
      <section className="bg-brand-coffee text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-5xl font-bold mb-4">
            Our Projects
          </h1>
          <p className="text-xl text-brand-light max-w-3xl mx-auto">
            Transforming lives and landscapes through education, sustainability, and community empowerment. 
            Discover the initiatives that drive our mission forward.
          </p>
        </div>
      </section>

      {/* Project Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {projectStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-brand-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-brand-coffee mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Farmer Voices Project */}
      <section className="py-20 bg-brand-light/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-brand-primary mb-4">Featured Project</Badge>
            <h2 className="font-serif text-4xl font-bold text-brand-coffee mb-6">
              Farmer Voices
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our Farmer Voices project amplifies the stories, experiences, and wisdom of the 
              smallholder farmers who are the heart of our coffee community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {farmerStories.map((farmer, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={farmer.image} 
                    alt={farmer.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-brand-primary rounded-full flex items-center justify-center text-white font-semibold mr-4">
                      {farmer.name.charAt(0)}
                    </div>
                    <div>
                      <h3 className="font-semibold text-brand-coffee">{farmer.name}</h3>
                      <p className="text-gray-600 text-sm">{farmer.location}</p>
                    </div>
                  </div>
                  <blockquote className="text-gray-700 italic">
                    "{farmer.story}"
                  </blockquote>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button 
              asChild 
              size="lg"
              className="bg-brand-coffee hover:bg-brand-coffee/90"
            >
              <Link to="/journal">Read More Stories</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Hands for Msitu Project */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-brand-primary mb-4">Environmental Impact</Badge>
              <h2 className="font-serif text-4xl font-bold text-brand-coffee mb-6">
                Hands for Msitu
              </h2>
              <p className="text-xl text-gray-600 mb-6">
                Our tree planting initiative aims to restore indigenous forests and create 
                sustainable agroforestry systems that benefit both coffee quality and 
                environmental conservation.
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-start space-x-4">
                  <Target className="h-6 w-6 text-brand-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-brand-coffee mb-2">Project Goals</h3>
                    <p className="text-gray-600">
                      Plant 10,000 indigenous trees annually, establish community nurseries, 
                      and provide climate adaptation support for 500+ farming families.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <TreePine className="h-6 w-6 text-brand-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-brand-coffee mb-2">Nursery Program</h3>
                    <p className="text-gray-600">
                      Community-managed nurseries propagate indigenous tree species, 
                      providing seedlings for agroforestry and forest restoration.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Users className="h-6 w-6 text-brand-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-brand-coffee mb-2">Community Distribution</h3>
                    <p className="text-gray-600">
                      Free seedling distribution to farmers, schools, and community groups, 
                      with training on proper planting and care techniques.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg"
                  className="bg-brand-primary hover:bg-brand-primary/90"
                >
                  Donate to Tree Planting
                </Button>
                <Button 
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-brand-coffee text-brand-coffee hover:bg-brand-coffee hover:text-white"
                >
                  <Link to="/contact">Partner With Us</Link>
                </Button>
              </div>
            </div>

            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?w=600&h=400&fit=crop"
                alt="Tree planting initiative"
                className="rounded-lg shadow-lg mb-4"
              />
              <img 
                src="https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=600&h=300&fit=crop"
                alt="Forest restoration"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Farmer Field School */}
      <section className="py-20 bg-brand-light/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img 
                src="https://images.unsplash.com/photo-1472396961693-142e6e269027?w=600&h=400&fit=crop"
                alt="Farmer training session"
                className="rounded-lg shadow-lg"
              />
            </div>

            <div className="order-1 lg:order-2">
              <Badge className="bg-brand-primary mb-4">Education Program</Badge>
              <h2 className="font-serif text-4xl font-bold text-brand-coffee mb-6">
                Farmer Field School (FFS)
              </h2>
              <p className="text-xl text-gray-600 mb-6">
                Year-round training programs that empower farmers with knowledge, 
                skills, and leadership capabilities to transform their communities.
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-start space-x-4">
                  <Calendar className="h-6 w-6 text-brand-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-brand-coffee mb-2">Year-Round Training</h3>
                    <p className="text-gray-600">
                      Comprehensive curriculum covering coffee agronomy, post-harvest processing, 
                      financial literacy, and cooperative management.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Users className="h-6 w-6 text-brand-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-brand-coffee mb-2">Youth-Led Officer Program</h3>
                    <p className="text-gray-600">
                      Training young farmers as Field Officers who lead training sessions 
                      and support their communities with technical expertise.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <TreePine className="h-6 w-6 text-brand-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-brand-coffee mb-2">Climate-Smart Practices</h3>
                    <p className="text-gray-600">
                      Adaptation strategies for climate change including drought-resistant varieties, 
                      water conservation, and sustainable farming techniques.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-brand-coffee text-white p-6 rounded-lg">
                <h3 className="font-serif text-xl font-bold mb-3">
                  Program Impact
                </h3>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-brand-primary">95%</div>
                    <div className="text-sm text-brand-light">Quality Improvement</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-brand-primary">2x</div>
                    <div className="text-sm text-brand-light">Income Increase</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-brand-coffee text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl font-bold mb-6">
            Join Our Impact
          </h2>
          <p className="text-xl text-brand-light mb-8">
            Every cup of Sacred Hands Coffee directly supports these transformative projects. 
            Together, we're building a more sustainable and equitable coffee industry.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild 
              size="lg"
              className="bg-brand-primary hover:bg-brand-primary/90"
            >
              <Link to="/shop">Shop Coffee</Link>
            </Button>
            <Button 
              asChild
              variant="outline"
              size="lg"
              className="border-brand-light text-brand-light hover:bg-brand-light hover:text-brand-coffee"
            >
              <Link to="/contact">Partner With Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
