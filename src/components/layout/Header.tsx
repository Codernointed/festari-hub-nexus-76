
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, User, ShoppingCart, BookOpen, Home, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
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
            <DropdownMenuContent align="end" className="bg-white/95 backdrop-blur-md">
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
        
        {/* Mobile Menu */}
        <div className="md:hidden flex items-center space-x-2">
          {/* Mobile User Menu */}
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
            <DropdownMenuContent align="end" className="bg-white/95 backdrop-blur-md z-50">
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
          
          {/* Mobile Navigation Sheet */}
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className={`rounded-full ${
                  isScrolled || location.pathname !== '/' ? 'text-festari-900' : 'text-white'
                }`}
                aria-label="Toggle menu"
              >
                <Menu size={24} />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-white/95 backdrop-blur-md pt-16 w-[300px]">
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
              
              <div className="flex flex-col space-y-3 pt-6 mt-6 border-t border-festari-100">
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
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
