
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-brand-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <div className="font-serif font-bold text-2xl text-brand-primary mb-4">
              Sacred Hands Coffee
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Coffee with a purpose. From sacred hands to yours. 
              Transforming the coffee landscape in Western Kenya through 
              quality, sustainability, and community impact.
            </p>
            <div className="text-sm text-gray-400">
              <p>Western Kenya</p>
              <p>Email: info@sacredhandscoffee.com</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4 text-brand-primary">Quick Links</h3>
            <ul className="space-y-2 text-gray-300">
              <li><Link to="/story" className="hover:text-brand-primary transition-colors">Our Story</Link></li>
              <li><Link to="/shop" className="hover:text-brand-primary transition-colors">Shop Coffee</Link></li>
              <li><Link to="/projects" className="hover:text-brand-primary transition-colors">Our Projects</Link></li>
              <li><Link to="/people" className="hover:text-brand-primary transition-colors">Our People</Link></li>
            </ul>
          </div>

          {/* Projects */}
          <div>
            <h3 className="font-semibold mb-4 text-brand-primary">Projects</h3>
            <ul className="space-y-2 text-gray-300">
              <li><Link to="/projects" className="hover:text-brand-primary transition-colors">Farmer Voices</Link></li>
              <li><Link to="/projects" className="hover:text-brand-primary transition-colors">Hands for Msitu</Link></li>
              <li><Link to="/projects" className="hover:text-brand-primary transition-colors">Farmer Field School</Link></li>
              <li><Link to="/contact" className="hover:text-brand-primary transition-colors">Partner With Us</Link></li>
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-8 pt-8 border-t border-gray-700">
          <div className="max-w-md">
            <h3 className="font-semibold mb-2 text-brand-primary">Stay Connected</h3>
            <p className="text-gray-300 mb-4 text-sm">
              Get updates on our latest coffee lots, farmer stories, and sustainability projects.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-white/10 border border-gray-600 rounded-l-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-primary"
              />
              <button className="px-6 py-2 bg-brand-primary text-white rounded-r-md hover:bg-brand-primary/90 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400 text-sm">
          <p>&copy; 2025 Sacred Hands Coffee Project. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
