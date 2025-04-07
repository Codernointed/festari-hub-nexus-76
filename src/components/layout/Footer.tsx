import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import Logo from '@/components/common/Logo';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-festari-900 text-white py-16">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-1">
            <Link to="/" className="inline-block">
              <Logo variant="white-text" theme="light" size="lg" className="mb-6" />
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
              <p className="flex items-start gap-2">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span>
                  Festari Group Limited<br />
                  Estate Hills, Tamso - Tarkwa<br />
                  P. O. Box 657<br />
                  Tarkwa, Ghana
                </span>
              </p>
              <p>
                <a href="mailto:fksaadaari@festarigroup.com" className="hover:text-white transition-colors flex items-center gap-2">
                  <Mail size={16} />
                  fksaadaari@festarigroup.com
                </a>
              </p>
              <p>
                <a href="tel:+233541603237" className="hover:text-white transition-colors flex items-center gap-2">
                  <Phone size={16} />
                  +233 (0)54 160 3237
                </a>
              </p>
              <p>
                <a href="https://www.linkedin.com/in/festus-kunkyin-saadaari-98462267/" 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   className="hover:text-white transition-colors flex items-center gap-2">
                  <Linkedin size={16} />
                  Connect on LinkedIn
                </a>
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/10 flex items-center justify-between">
          <Logo variant="icon" theme="light" size="sm" />
          <div className="text-festari-300 text-sm">
            &copy; {currentYear} Festari. All rights reserved.
          </div>
          <div className="flex gap-6">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
