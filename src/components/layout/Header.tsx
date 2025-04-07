
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, User, ShoppingCart, BookOpen, Home, MapPin, LogIn, Briefcase } from 'lucide-react';
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
import Logo from '@/components/common/Logo';
import { cn } from '@/lib/utils';

// Define navigation items consistently
const navigation = [
  { name: "Estate Agency", href: "/estates", icon: <Home size={18} /> },
  { name: "Research & Consultation", href: "/research", icon: <BookOpen size={18} /> },
  { name: "Agribusiness", href: "/agriculture", icon: <ShoppingCart size={18} /> },
  { name: "Enterprise", href: "/enterprise", icon: <Briefcase size={18} /> },
  { name: "About", href: "/about", icon: <User size={18} /> },
  { name: "Founder", href: "/founder", icon: <User size={18} /> },
  { name: "Contact", href: "/contact", icon: <MapPin size={18} /> },
];

const Header = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const isMobile = useIsMobile();
  
  const isHomePage = location.pathname === '/';

  // Watch for scroll position to add background to the header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        {
          // Fully transparent on home page when not scrolled
          "bg-transparent border-b border-white/10": isHomePage && !isScrolled,
          // White with blur on scroll or other pages
          "bg-white/95 backdrop-blur-md border-b border-festari-100": isScrolled || !isHomePage,
        }
      )}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo section */}
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <Logo 
              variant="icon" 
              theme={(isHomePage && !isScrolled) ? "light" : "dark"} 
              size="sm"
              showOnLight={false}
            />
            <Logo 
              variant="text" 
              theme={(isHomePage && !isScrolled) ? "light" : "dark"}
              className="hidden md:block" 
              showOnLight={true}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 justify-end overflow-x-auto">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "text-sm transition-colors whitespace-nowrap px-1",
                  (isHomePage && !isScrolled)
                    ? "text-white/90 hover:text-white"
                    : "text-festari-700 hover:text-accent",
                  location.pathname === item.href && "font-medium" // Highlight active link
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>
          
          {/* Login/Register Buttons */}
          <div className="hidden md:flex items-center space-x-3 shrink-0">
            <Link to="/login">
              <Button 
                variant={(isHomePage && !isScrolled) ? "ghost-light" : "highlight"}
                className="flex items-center gap-2 px-4 border-2 border-transparent"
                size="sm"
              >
                <LogIn size={16} />
                Login
              </Button>
            </Link>
            <Link to="/register">
              <Button 
                variant={(isHomePage && !isScrolled) ? "mikado" : "accent"}
                size="sm"
                className="text-festari-900 px-4 border-2 border-transparent shadow"
              >
                Register
              </Button>
            </Link>

            {/* User menu (when logged in) */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className={cn(
                    "rounded-full",
                    (isHomePage && !isScrolled) ? "text-white" : "text-festari-900"
                  )}
                >
                  <User size={18} />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-white shadow-lg border border-festari-100">
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
                  className={cn(
                    "rounded-full",
                    (isHomePage && !isScrolled) ? "text-white" : "text-festari-900"
                  )}
                >
                  <User size={18} />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-white shadow-lg border border-festari-100 w-56">
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
                  className={cn(
                    "rounded-full",
                    (isHomePage && !isScrolled) ? "text-white" : "text-festari-900"
                  )}
                  aria-label="Toggle menu"
                >
                  <Menu size={24} />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-white pt-16 w-[300px]">
                <nav className="flex flex-col space-y-4">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={`flex items-center text-festari-900 text-lg ${
                        location.pathname === item.href ? 'font-medium text-accent' : ''
                      }`}
                    >
                      {item.icon && <span className="mr-2">{item.icon}</span>}
                      {item.name}
                    </Link>
                  ))}
                </nav>
                
                <div className="flex flex-col space-y-3 pt-6 mt-6 border-t border-festari-100">
                  <Link to="/login" className="w-full">
                    <Button variant="highlight" className="w-full flex items-center justify-center">
                      <LogIn className="mr-2" size={18} />
                      Login
                    </Button>
                  </Link>
                  <Link to="/register" className="w-full">
                    <Button className="w-full" variant="accent">
                      Register
                    </Button>
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
