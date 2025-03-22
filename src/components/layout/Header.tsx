
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Search, User, Bell, LogIn } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Navigation items
  const navigationItems = [
    { name: 'Home', path: '/' },
    { 
      name: 'Real Estate', 
      path: '/real-estate',
      dropdown: [
        { name: 'Properties', path: '/properties' },
        { name: 'Featured Listings', path: '/real-estate' },
        { name: 'Schedule Viewing', path: '/contact' }
      ]
    },
    { 
      name: 'Research', 
      path: '/research',
      dropdown: [
        { name: 'Publications', path: '/research' },
        { name: 'Courses', path: '/research#courses' },
        { name: 'Resources', path: '/research#resources' }
      ]
    },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  // Check if the user has scrolled
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed w-full z-50 transition-all duration-300 ease-in-out',
        isScrolled
          ? 'bg-white/95 backdrop-blur-sm shadow-sm py-2'
          : 'bg-transparent py-4'
      )}
    >
      <div className="container-custom flex items-center justify-between">
        <Link 
          to="/" 
          className="flex items-center"
          aria-label="Festari logo"
        >
          <span className="text-xl md:text-2xl font-display font-bold text-festari-900">
            Festari
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navigationItems.map((item) => (
            item.dropdown ? (
              <DropdownMenu key={item.name}>
                <DropdownMenuTrigger asChild>
                  <button 
                    className={cn(
                      'nav-link flex items-center gap-1',
                      location.pathname === item.path && 'text-festari-accent font-medium'
                    )}
                  >
                    {item.name}
                    <ChevronDown size={16} />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="center" className="w-48">
                  {item.dropdown.map((dropdownItem) => (
                    <DropdownMenuItem key={dropdownItem.name} asChild>
                      <Link to={dropdownItem.path}>{dropdownItem.name}</Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link
                key={item.name}
                to={item.path}
                className={cn(
                  'nav-link',
                  location.pathname === item.path && 'text-festari-accent font-medium'
                )}
              >
                {item.name}
              </Link>
            )
          ))}
        </nav>

        {/* Action buttons */}
        <div className="hidden md:flex items-center space-x-3">
          <Button variant="outline" size="sm" asChild>
            <Link to="/properties">
              <Search size={16} className="mr-1" />
              Properties
            </Link>
          </Button>
          <Button className="bg-festari-accent hover:bg-festari-accent/90" size="sm" asChild>
            <Link to="/login">
              <LogIn size={16} className="mr-1" />
              Sign In
            </Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-festari-800"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          'md:hidden fixed inset-0 bg-white z-40 transform transition-transform duration-300 ease-in-out pt-16',
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <nav className="flex flex-col space-y-1 p-4">
          {navigationItems.map((item) => (
            <div key={item.name} className="py-2">
              {item.dropdown ? (
                <div className="space-y-2">
                  <div className="text-lg font-medium text-festari-900 px-4 py-2">
                    {item.name}
                  </div>
                  <div className="pl-4 space-y-1 border-l-2 border-gray-100">
                    {item.dropdown.map((dropdownItem) => (
                      <Link
                        key={dropdownItem.name}
                        to={dropdownItem.path}
                        className="block px-4 py-2 text-festari-600 hover:text-festari-accent"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {dropdownItem.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  to={item.path}
                  className={cn(
                    'block px-4 py-2 text-lg',
                    location.pathname === item.path
                      ? 'text-festari-accent font-medium'
                      : 'text-festari-800 hover:text-festari-accent'
                  )}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}
          
          <div className="pt-4 space-y-2 border-t border-gray-100 mt-4">
            <Link
              to="/properties"
              className="flex items-center gap-2 px-4 py-2 text-festari-800 hover:text-festari-accent"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Search size={18} />
              Search Properties
            </Link>
            
            <Link
              to="/login"
              className="flex items-center gap-2 px-4 py-2 text-festari-800 hover:text-festari-accent"
              onClick={() => setMobileMenuOpen(false)}
            >
              <User size={18} />
              Sign In / Register
            </Link>
          </div>
          
          <div className="mt-auto pt-6">
            <Button
              className="w-full bg-festari-accent hover:bg-festari-accent/90"
              onClick={() => setMobileMenuOpen(false)}
              asChild
            >
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
