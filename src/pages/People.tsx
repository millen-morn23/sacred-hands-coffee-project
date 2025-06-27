
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Mail, MapPin, Award } from 'lucide-react';

const People = () => {
  const teamMembers = [
    {
      name: "Hansel Iravonga",
      role: "Founder & Director",
      bio: "Hansel established Sacred Hands Coffee in 2025 with a vision to transform the coffee landscape in Western Kenya. With extensive experience in agricultural development and community organizing, he leads our mission to empower smallholder farmers through quality-focused cultivation and sustainable practices.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
      location: "Western Kenya",
      specialties: ["Agricultural Development", "Community Organizing", "Sustainable Agriculture"]
    },
    {
      name: "Grace Nekesa",
      role: "Lead Extension Officer",
      bio: "Grace coordinates our Farmer Field School programs and leads training initiatives across Western Kenya. Her expertise in coffee agronomy and post-harvest processing has helped hundreds of farmers improve their coffee quality and increase their incomes.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
      location: "Busia County",
      specialties: ["Coffee Agronomy", "Farmer Training", "Post-Harvest Processing"]
    },
    {
      name: "David Kiprop",
      role: "Sustainability Coordinator",
      bio: "David manages our Hands for Msitu tree planting initiative and environmental conservation programs. His background in forestry and climate adaptation helps farmers build resilience against climate change while protecting natural ecosystems.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      location: "Trans Nzoia County",
      specialties: ["Forestry", "Climate Adaptation", "Environmental Conservation"]
    },
    {
      name: "Mary Wanjiku",
      role: "Quality Control Manager",
      bio: "Mary oversees our quality assurance processes from cherry to cup. Her meticulous attention to detail and deep understanding of coffee processing ensures that every batch meets our high standards for specialty coffee.",
      image: "https://images.unsplash.com/photo-1494790108755-2616c90a009c?w=400&h=400&fit=crop",
      location: "Bungoma County",
      specialties: ["Quality Control", "Cupping", "Processing Standards"]
    },
    {
      name: "Samuel Wekesa",
      role: "Community Liaison",
      bio: "Samuel builds and maintains relationships with farming communities, cooperatives, and local organizations. His deep community connections and communication skills help ensure our programs are culturally appropriate and effective.",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop",
      location: "Kakamega County",
      specialties: ["Community Relations", "Cooperative Development", "Cultural Mediation"]
    },
    {
      name: "Rose Chepkemoi",
      role: "Youth Program Director",
      bio: "Rose leads our youth-focused initiatives, training the next generation of Field Officers and agricultural leaders. Her passion for education and youth development is creating lasting change in farming communities.",
      image: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=400&h=400&fit=crop",
      location: "Mount Elgon Region",
      specialties: ["Youth Development", "Leadership Training", "Educational Programs"]
    }
  ];

  return (
    <div>
      {/* Header */}
      <section className="bg-brand-light/20 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-5xl font-bold text-brand-coffee mb-6">
            Our People
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            We work with dedicated farmers, roasters, field officers, and agronomists to uplift lives 
            through the power of coffee. Meet the passionate individuals who drive our mission forward.
          </p>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold text-brand-coffee mb-6">
              Our Philosophy
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              At Sacred Hands Coffee, we believe that great coffee comes from great people. 
              Our team combines deep local knowledge with innovative approaches to create 
              lasting positive impact in coffee communities. We prioritize collaboration, 
              respect, and shared prosperity in everything we do.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-6 border-brand-light">
              <CardContent className="pt-4">
                <div className="w-12 h-12 bg-brand-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-serif text-xl font-semibold mb-3 text-brand-coffee">
                  Expertise
                </h3>
                <p className="text-gray-600">
                  Deep knowledge in coffee cultivation, processing, and sustainable agriculture practices.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 border-brand-light">
              <CardContent className="pt-4">
                <div className="w-12 h-12 bg-brand-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-serif text-xl font-semibold mb-3 text-brand-coffee">
                  Local Connection
                </h3>
                <p className="text-gray-600">
                  Strong community ties and cultural understanding that enables effective collaboration.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 border-brand-light">
              <CardContent className="pt-4">
                <div className="w-12 h-12 bg-brand-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-serif text-xl font-semibold mb-3 text-brand-coffee">
                  Communication
                </h3>
                <p className="text-gray-600">
                  Clear, respectful communication that bridges different perspectives and builds trust.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-20 bg-brand-light/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-brand-coffee mb-6">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The dedicated professionals who make our mission possible, from the founder 
              to field officers working directly with farming communities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="mb-4">
                    <h3 className="font-serif text-xl font-semibold text-brand-coffee mb-1">
                      {member.name}
                    </h3>
                    <Badge className="bg-brand-primary text-white mb-2">
                      {member.role}
                    </Badge>
                    <div className="flex items-center text-gray-600 text-sm mb-3">
                      <MapPin className="h-4 w-4 mr-1" />
                      {member.location}
                    </div>
                  </div>

                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {member.bio}
                  </p>

                  <div className="mb-4">
                    <h4 className="font-semibold text-brand-coffee text-sm mb-2">Specialties:</h4>
                    <div className="flex flex-wrap gap-1">
                      {member.specialties.map((specialty, idx) => (
                        <Badge 
                          key={idx} 
                          variant="outline" 
                          className="text-xs border-brand-light text-brand-coffee"
                        >
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team */}
      <section className="py-16 bg-brand-coffee text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl font-bold mb-6">
            Join Our Mission
          </h2>
          <p className="text-xl text-brand-light mb-8">
            Are you passionate about coffee, community development, and sustainable agriculture? 
            We're always looking for dedicated individuals to join our growing team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild 
              size="lg"
              className="bg-brand-primary hover:bg-brand-primary/90"
            >
              <Link to="/contact">Get In Touch</Link>
            </Button>
            <Button 
              asChild
              variant="outline"
              size="lg"
              className="border-brand-light text-brand-light hover:bg-brand-light hover:text-brand-coffee"
            >
              <Link to="/projects">Learn About Our Work</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <blockquote className="text-2xl text-gray-700 italic mb-8 font-serif">
            "Our strength comes from the diversity of our team and the unity of our purpose. 
            Together, we're not just growing coffee – we're cultivating hope, opportunity, 
            and sustainable prosperity for entire communities."
          </blockquote>
          <div className="flex items-center justify-center">
            <div className="w-16 h-16 bg-brand-primary rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
              H
            </div>
            <div className="text-left">
              <p className="font-semibold text-brand-coffee">Hansel Iravonga</p>
              <p className="text-gray-600">Founder & Director</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default People;
