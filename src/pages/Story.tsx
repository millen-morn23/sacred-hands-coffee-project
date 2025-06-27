
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Users, Coffee, TreePine, BookOpen } from 'lucide-react';

const Story = () => {
  return (
    <div>
      {/* Hero Section */}
      <section 
        className="relative h-96 flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1465379944081-7f47de8d74ac?w=1920&h=600&fit=crop')"
        }}
      >
        <div className="text-center text-white max-w-4xl px-4">
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-4">
            Our Story
          </h1>
          <p className="text-xl">
            Transforming lives and landscapes through coffee
          </p>
        </div>
      </section>

      {/* Main Story Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=600&h=400&fit=crop"
                  alt="Coffee farmers in Western Kenya"
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div>
                <h2 className="font-serif text-3xl font-bold text-brand-coffee mb-6">
                  The Sacred Hands Coffee Project
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  The <strong>SACRED HANDS COFFEE PROJECT</strong> is a producer-led initiative 
                  focused on transforming the coffee landscape in Western Kenya. Established by 
                  Hansel Iravonga in 2025, the project assists smallholder farmers in organizing 
                  and learning quality-focused coffee cultivation.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Our mission is to build a regional hub of innovation, sustainability, and impact 
                  through traceable micro-lots, education, and community development.
                </p>
              </div>
            </div>

            <div className="bg-brand-light/20 p-8 rounded-lg mb-16">
              <h3 className="font-serif text-2xl font-bold text-brand-coffee mb-6 text-center">
                What We Offer
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex items-start space-x-4">
                  <BookOpen className="h-8 w-8 text-brand-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-brand-coffee mb-2">
                      Year-round Farmer Field School training
                    </h4>
                    <p className="text-gray-600">
                      Comprehensive education programs covering quality cultivation, 
                      post-harvest processing, and climate-smart agriculture practices.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Coffee className="h-8 w-8 text-brand-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-brand-coffee mb-2">
                      Competitive cherry pricing and premiums
                    </h4>
                    <p className="text-gray-600">
                      Fair pricing structures that reward quality and provide 
                      sustainable income for farming families.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Users className="h-8 w-8 text-brand-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-brand-coffee mb-2">
                      Relationships between roasters and farmers
                    </h4>
                    <p className="text-gray-600">
                      Direct trade connections that create transparency and 
                      lasting partnerships throughout the supply chain.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <TreePine className="h-8 w-8 text-brand-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-brand-coffee mb-2">
                      Environmental sustainability programs
                    </h4>
                    <p className="text-gray-600">
                      Tree planting initiatives, soil conservation, and 
                      biodiversity preservation efforts.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center bg-brand-coffee text-white p-12 rounded-lg">
              <h3 className="font-serif text-3xl font-bold mb-6">
                Join Our Mission
              </h3>
              <p className="text-xl mb-8 text-brand-light">
                Buy from Sacred Hands Coffee and join our mission to transform lives and landscapes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  asChild 
                  size="lg"
                  className="bg-brand-primary hover:bg-brand-primary/90"
                >
                  <Link to="/shop">Shop Our Coffee</Link>
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
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-brand-light/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-brand-coffee mb-6">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything we do is guided by our commitment to quality, sustainability, and community empowerment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-brand-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Coffee className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-serif text-xl font-semibold mb-4 text-brand-coffee">
                  Quality Excellence
                </h3>
                <p className="text-gray-600">
                  From seed to cup, we maintain the highest standards of quality 
                  through careful cultivation, processing, and roasting practices.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-brand-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <TreePine className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-serif text-xl font-semibold mb-4 text-brand-coffee">
                  Environmental Stewardship
                </h3>
                <p className="text-gray-600">
                  We protect and restore the natural environment through 
                  sustainable farming practices and conservation initiatives.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-brand-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-serif text-xl font-semibold mb-4 text-brand-coffee">
                  Community Impact
                </h3>
                <p className="text-gray-600">
                  We empower farming communities through education, fair trade, 
                  and collaborative partnerships that create lasting change.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Story;
