
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Mail, Phone, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <div>
      {/* Header */}
      <section className="bg-brand-light/20 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-5xl font-bold text-brand-coffee mb-6">
            Contact & Wholesale
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Want to work with us? Whether you're a coffee enthusiast, roaster, or organization 
            looking to collaborate — we'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Details */}
            <div>
              <h2 className="font-serif text-3xl font-bold text-brand-coffee mb-8">
                Get In Touch
              </h2>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-brand-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-brand-coffee mb-1">Location</h3>
                    <p className="text-gray-600">
                      Western Kenya<br />
                      Bungoma, Trans Nzoia & Busia Counties
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-brand-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-brand-coffee mb-1">Email</h3>
                    <p className="text-gray-600">
                      info@sacredhandscoffee.com<br />
                      wholesale@sacredhandscoffee.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-brand-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-brand-coffee mb-1">Phone</h3>
                    <p className="text-gray-600">
                      +254 XXX XXX XXX<br />
                      WhatsApp Available
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="h-6 w-6 text-brand-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-brand-coffee mb-1">Response Time</h3>
                    <p className="text-gray-600">
                      We typically respond within 24-48 hours<br />
                      Monday - Friday, 8 AM - 6 PM EAT
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick Action Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Card className="border-brand-light hover:shadow-md transition-shadow">
                  <CardContent className="p-6 text-center">
                    <h3 className="font-semibold text-brand-coffee mb-2">Coffee Roasters</h3>
                    <p className="text-gray-600 text-sm mb-4">
                      Interested in our micro-lots for your roastery?
                    </p>
                    <Button 
                      size="sm"
                      className="bg-brand-primary hover:bg-brand-primary/90 w-full"
                    >
                      Wholesale Inquiry
                    </Button>
                  </CardContent>
                </Card>

                <Card className="border-brand-light hover:shadow-md transition-shadow">
                  <CardContent className="p-6 text-center">
                    <h3 className="font-semibold text-brand-coffee mb-2">Partnerships</h3>
                    <p className="text-gray-600 text-sm mb-4">
                      Looking to support our sustainability projects?
                    </p>
                    <Button 
                      size="sm"
                      variant="outline"
                      className="border-brand-coffee text-brand-coffee hover:bg-brand-coffee hover:text-white w-full"
                    >
                      Partner With Us
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="font-serif text-3xl font-bold text-brand-coffee mb-8">
                Send Us a Message
              </h2>
              
              {/* Embedded Google Form */}
              <div className="bg-gray-50 p-8 rounded-lg">
                <p className="text-gray-600 mb-6">
                  Please fill out our contact form below. We'll get back to you as soon as possible 
                  with information about our coffee offerings, partnership opportunities, or answers to your questions.
                </p>
                
                {/* Placeholder for Google Form - Replace with actual form URL */}
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                  <p className="text-gray-500 mb-4">
                    <strong>Google Form Integration</strong>
                  </p>
                  <p className="text-gray-500 text-sm mb-4">
                    Replace this section with your actual Google Form embed code.
                    The form should include fields for:
                  </p>
                  <ul className="text-gray-500 text-sm text-left max-w-sm mx-auto space-y-1">
                    <li>• Name & Organization</li>
                    <li>• Email & Phone</li>
                    <li>• Inquiry Type (Wholesale, Partnership, General)</li>
                    <li>• Message/Details</li>
                    <li>• Volume Requirements (for wholesale)</li>
                  </ul>
                  <Button 
                    className="bg-brand-primary hover:bg-brand-primary/90 mt-6"
                  >
                    Open Contact Form
                  </Button>
                </div>
                
                {/* Alternative: Direct iframe embed - uncomment and add your form URL */}
                {/*
                <iframe
                  src="YOUR_GOOGLE_FORM_URL_HERE"
                  width="100%"
                  height="600"
                  frameBorder="0"
                  marginHeight={0}
                  marginWidth={0}
                  className="rounded-lg"
                >
                  Loading...
                </iframe>
                */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wholesale Information */}
      <section className="py-16 bg-brand-light/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl font-bold text-brand-coffee mb-6">
              Wholesale Partners
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We work with coffee roasters, cafes, and distributors who share our commitment 
              to quality and sustainability. Join our network of wholesale partners.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-8 border-brand-light hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-brand-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">Q</span>
                </div>
                <h3 className="font-serif text-xl font-semibold mb-4 text-brand-coffee">
                  Quality Assurance
                </h3>
                <p className="text-gray-600">
                  Rigorous cupping protocols, traceability documentation, 
                  and consistent quality standards for every shipment.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 border-brand-light hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-brand-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">T</span>
                </div>
                <h3 className="font-serif text-xl font-semibold mb-4 text-brand-coffee">
                  Traceability
                </h3>
                <p className="text-gray-600">
                  Complete transparency from farm to roaster, including 
                  farmer profiles, processing methods, and harvest details.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 border-brand-light hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-brand-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">S</span>
                </div>
                <h3 className="font-serif text-xl font-semibold mb-4 text-brand-coffee">
                  Sustainability
                </h3>
                <p className="text-gray-600">
                  Every purchase supports our farmer education programs, 
                  tree planting initiatives, and community development projects.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <div className="bg-brand-coffee text-white p-8 rounded-lg max-w-4xl mx-auto">
              <h3 className="font-serif text-2xl font-bold mb-4">
                Wholesale Minimums
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-brand-primary mb-2">5 bags</div>
                  <div className="text-brand-light">Minimum Order</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-brand-primary mb-2">69kg</div>
                  <div className="text-brand-light">Per Bag</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-brand-primary mb-2">FOB</div>
                  <div className="text-brand-light">Mombasa Port</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold text-brand-coffee mb-6">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-6">
            <Card className="border-brand-light">
              <CardContent className="p-6">
                <h3 className="font-semibold text-brand-coffee mb-3">
                  What makes Sacred Hands Coffee different?
                </h3>
                <p className="text-gray-600">
                  We're a producer-led initiative that combines exceptional coffee quality with 
                  meaningful social and environmental impact. Every purchase directly supports 
                  farmer education, tree planting, and community development programs.
                </p>
              </CardContent>
            </Card>

            <Card className="border-brand-light">
              <CardContent className="p-6">
                <h3 className="font-semibold text-brand-coffee mb-3">
                  Do you offer sample packages for roasters?
                </h3>
                <p className="text-gray-600">
                  Yes! We provide 200g sample packages for serious wholesale inquiries. 
                  Contact us with your roasting profile and volume requirements to request samples.
                </p>
              </CardContent>
            </Card>

            <Card className="border-brand-light">
              <CardContent className="p-6">
                <h3 className="font-semibold text-brand-coffee mb-3">
                  What are your shipping and payment terms?
                </h3>
                <p className="text-gray-600">
                  We ship FOB Mombasa with standard coffee export documentation. 
                  Payment terms are negotiable based on order size and relationship. 
                  We accept wire transfers and Letters of Credit.
                </p>
              </CardContent>
            </Card>

            <Card className="border-brand-light">
              <CardContent className="p-6">
                <h3 className="font-semibold text-brand-coffee mb-3">
                  Can we visit your farms and facilities?
                </h3>
                <p className="text-gray-600">
                  Absolutely! We welcome visits from our wholesale partners and encourage 
                  direct relationships between roasters and farmers. Contact us to arrange 
                  a visit during harvest season (October-February).
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
