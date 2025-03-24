
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, User, ShoppingCart, BookOpen, Home, MapPin, LogIn } from 'lucide-react';
import ButtonJS from '@/components/ui/ButtonJS';
import { useIsMobile } from '@/hooks/use-mobile';

/**
 * Header component that replaces the shadcn Header with a pure Tailwind CSS implementation
 */
const HeaderJS = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  
  // Define navigation items
  const navItems = [
    { name: 'Home', path: '/', icon: <Home size={18} /> },
    { name: 'Real Estate', path: '/real-estate', icon: <Home size={18} /> },
    { name: 'Research', path: '/research', icon: <BookOpen size={18} /> },
    { name: 'Agriculture', path: '/agriculture', icon: <ShoppingCart size={18} /> },
    { name: 'About', path: '/about' },
    { name: 'Founder', path: '/founder', icon: <User size={18} /> },
    { name: 'Contact', path: '/contact', icon: <MapPin size={18} /> },
  ];

  // Watch for scroll position to add background to header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Toggle user menu
  const toggleUserMenu = () => {
    setIsUserMenuOpen(!isUserMenuOpen);
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full py-4 z-40 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 
        location.pathname === '/' ? 'bg-transparent' : 'bg-white'
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <span className={`text-2xl font-display font-bold ${
            isScrolled || location.pathname !== '/' ? 'text-festari-900' : 'text-white'
          }`}>
            Festari
          </span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`text-sm hover:text-accent ${
                isScrolled || location.pathname !== '/' ? 'text-festari-700' : 'text-white'
              } ${location.pathname === item.path ? 'font-medium' : ''}`}
            >
              {item.name}
            </Link>
          ))}
        </nav>
        
        {/* Login/Register Buttons */}
        <div className="hidden md:flex items-center space-x-3">
          <Link to="/login">
            <ButtonJS 
              variant="highlight" 
              className="flex items-center gap-2 px-5"
            >
              <LogIn size={18} />
              Login
            </ButtonJS>
          </Link>
          <Link to="/register">
            <ButtonJS className="bg-festari-accent hover:bg-festari-accent/90 text-white">
              Register
            </ButtonJS>
          </Link>

          {/* User menu (when logged in) */}
          <div className="relative">
            <button
              onClick={toggleUserMenu}
              className={`rounded-full p-2 hover:bg-gray-100 ${
                isScrolled || location.pathname !== '/' ? 'text-festari-900' : 'text-white'
              }`}
            >
              <User size={18} />
            </button>

            {/* User dropdown menu */}
            {isUserMenuOpen && (
              <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white/95 backdrop-blur-md ring-1 ring-black ring-opacity-5 z-50">
                <div className="py-1 border-b border-gray-100">
                  <p className="block px-4 py-2 text-sm font-medium text-gray-700">My Account</p>
                </div>
                <div className="py-1">
                  <Link to="/dashboard" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Dashboard
                  </Link>
                  <Link to="/properties" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Saved Properties
                  </Link>
                  <Link to="/research" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    My Courses
                  </Link>
                </div>
                <div className="py-1 border-t border-gray-100">
                  <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Logout
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
        
        {/* Mobile Menu */}
        <div className="md:hidden flex items-center space-x-2">
          {/* Mobile User Menu */}
          <div className="relative">
            <button
              onClick={toggleUserMenu}
              className={`rounded-full p-2 hover:bg-gray-100 ${
                isScrolled || location.pathname !== '/' ? 'text-festari-900' : 'text-white'
              }`}
            >
              <User size={18} />
            </button>

            {/* Mobile User dropdown menu */}
            {isUserMenuOpen && (
              <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white/95 backdrop-blur-md ring-1 ring-black ring-opacity-5 z-50">
                <div className="py-1 border-b border-gray-100">
                  <p className="block px-4 py-2 text-sm font-medium text-gray-700">My Account</p>
                </div>
                <div className="py-1">
                  <Link to="/dashboard" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Dashboard
                  </Link>
                  <Link to="/properties" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Saved Properties
                  </Link>
                  <Link to="/research" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    My Courses
                  </Link>
                </div>
                <div className="py-1 border-t border-gray-100">
                  <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Logout
                  </button>
                </div>
              </div>
            )}
          </div>
          
          {/* Mobile Menu Trigger */}
          <button
            onClick={toggleMobileMenu}
            className={`rounded-full p-2 hover:bg-gray-100 ${
              isScrolled || location.pathname !== '/' ? 'text-festari-900' : 'text-white'
            }`}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Panel */}
        {isMobileMenuOpen && (
          <div className="md:hidden fixed inset-0 top-16 bg-white/95 backdrop-blur-md pt-4 z-30">
            <div className="container mx-auto px-4">
              <nav className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`flex items-center text-festari-900 text-lg ${
                      location.pathname === item.path ? 'font-medium' : ''
                    }`}
                    onClick={toggleMobileMenu}
                  >
                    {item.icon && <span className="mr-2">{item.icon}</span>}
                    {item.name}
                  </Link>
                ))}
              </nav>
              
              <div className="flex flex-col space-y-3 pt-6 mt-6 border-t border-festari-100">
                <Link to="/login" className="w-full" onClick={toggleMobileMenu}>
                  <ButtonJS variant="highlight" className="w-full flex items-center justify-center">
                    <LogIn className="mr-2" size={18} />
                    Login
                  </ButtonJS>
                </Link>
                <Link to="/register" className="w-full" onClick={toggleMobileMenu}>
                  <ButtonJS className="w-full bg-festari-accent hover:bg-festari-accent/90 text-white">
                    Register
                  </ButtonJS>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default HeaderJS;
