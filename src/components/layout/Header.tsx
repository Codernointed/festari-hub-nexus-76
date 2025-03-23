import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, User, ShoppingCart, BookOpen, Home, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  
  // Define navigation items
  const navItems = [
    { name: 'Home', path: '/' },
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
  
  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header 
      className={`fixed top-0 left-0 w-full py-4 z-40 transition-all duration-300 ${
        isScrolled || mobileMenuOpen ? 'bg-white/90 backdrop-blur-md shadow-sm' : 
        location.pathname === '/' ? 'bg-transparent' : 'bg-white'
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <span className={`text-2xl font-display font-bold ${
            isScrolled || mobileMenuOpen || location.pathname !== '/' ? 'text-festari-900' : 'text-white'
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
            <Button variant="outline" className={`${
              isScrolled || location.pathname !== '/' ? 'border-festari-200 text-festari-900' : 'border-white/20 text-white hover:text-white'
            }`}>
              Login
            </Button>
          </Link>
          <Link to="/register">
            <Button className="bg-festari-accent hover:bg-festari-accent/90 text-white">
              Register
            </Button>
          </Link>

          {/* User menu (when logged in) */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className={`rounded-full ${
                  isScrolled || location.pathname !== '/' ? 'text-festari-900' : 'text-white'
                }`}
              >
                <User size={18} />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link to="/dashboard" className="w-full cursor-pointer">Dashboard</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/properties" className="w-full cursor-pointer">Saved Properties</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/research" className="w-full cursor-pointer">My Courses</Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileMenuOpen ? (
            <X size={24} className="text-festari-900" />
          ) : (
            <Menu size={24} className={isScrolled || location.pathname !== '/' ? 'text-festari-900' : 'text-white'} />
          )}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[68px] bg-white/95 backdrop-blur-md z-30 overflow-y-auto">
          <div className="container-custom py-8 flex flex-col space-y-8">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`flex items-center text-festari-900 text-lg ${
                    location.pathname === item.path ? 'font-medium' : ''
                  }`}
                >
                  {item.icon && <span className="mr-2">{item.icon}</span>}
                  {item.name}
                </Link>
              ))}
            </nav>
            
            <div className="flex flex-col space-y-3 pt-4 border-t border-festari-100">
              <Link to="/login" className="w-full">
                <Button variant="outline" className="w-full">
                  Login
                </Button>
              </Link>
              <Link to="/register" className="w-full">
                <Button className="w-full bg-festari-accent hover:bg-festari-accent/90 text-white">
                  Register
                </Button>
              </Link>
              <Link to="/dashboard" className="w-full">
                <Button variant="ghost" className="w-full justify-start">
                  <User size={18} className="mr-2" />
                  Dashboard
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
