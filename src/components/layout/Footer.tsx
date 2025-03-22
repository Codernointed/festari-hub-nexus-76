
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-festari-900 text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link to="/" className="inline-block">
              <span className="text-2xl font-display font-bold">Festari</span>
            </Link>
            <p className="text-festari-100 max-w-xs">
              A premier platform connecting real estate, education, and professional excellence.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-festari-300 hover:text-white transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-festari-300 hover:text-white transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-festari-300 hover:text-white transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-festari-300 hover:text-white transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-festari-300 hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/real-estate" className="text-festari-300 hover:text-white transition-colors">Real Estate</Link>
              </li>
              <li>
                <Link to="/research" className="text-festari-300 hover:text-white transition-colors">Research</Link>
              </li>
              <li>
                <Link to="/about" className="text-festari-300 hover:text-white transition-colors">About</Link>
              </li>
              <li>
                <Link to="/contact" className="text-festari-300 hover:text-white transition-colors">Contact</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/real-estate" className="text-festari-300 hover:text-white transition-colors">Property Listings</Link>
              </li>
              <li>
                <Link to="/research#courses" className="text-festari-300 hover:text-white transition-colors">Educational Courses</Link>
              </li>
              <li>
                <Link to="/research#publications" className="text-festari-300 hover:text-white transition-colors">Academic Publications</Link>
              </li>
              <li>
                <Link to="/contact" className="text-festari-300 hover:text-white transition-colors">Consultations</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3 text-festari-300">
              <p>123 Festari Way, Suite 100</p>
              <p>New York, NY 10001</p>
              <p>
                <a href="mailto:info@festari.com" className="hover:text-white transition-colors flex items-center gap-2">
                  <Mail size={16} />
                  info@festari.com
                </a>
              </p>
              <p>+1 (555) 123-4567</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-festari-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-festari-300 text-sm">
          <div>
            &copy; {currentYear} Festari. All rights reserved.
          </div>
          <div className="mt-4 md:mt-0 flex gap-6">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
