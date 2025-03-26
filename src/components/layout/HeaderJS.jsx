
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utilsJS';
import ButtonJS from '@/components/ui/ButtonJS';
import { useIsMobileJS } from '@/hooks/use-mobile-js';

const HeaderJS = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isMobile = useIsMobileJS();
  
  // Navigation items
  const navItems = [
    { 
      label: 'Real Estate', 
      href: '/real-estate',
      subItems: [
        { label: 'Properties', href: '/properties' },
        { label: 'Agriculture', href: '/agriculture' }
      ]
    },
    { 
      label: 'Research', 
      href: '/research',
      subItems: []
    },
    { 
      label: 'About', 
      href: '/about',
      subItems: [
        { label: 'Our Founder', href: '/founder' }
      ]
    },
    { 
      label: 'Contact', 
      href: '/contact',
      subItems: []
    },
  ];
  
  // Dropdown state management
  const [openDropdown, setOpenDropdown] = useState(null);
  
  // Handle scroll events to change header appearance
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
    setOpenDropdown(null);
  }, [location.pathname]);
  
  // Toggle dropdown menu for desktop nav
  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };
  
  // Classes for the header based on scroll position
  const headerClasses = cn(
    "fixed top-0 w-full z-50 transition-all duration-300",
    isScrolled 
      ? "bg-white shadow-md py-2" 
      : "bg-transparent py-4"
  );
  
  // Classes for nav links based on scroll position
  const linkClasses = (isActive) => cn(
    "px-4 py-2 rounded-md font-medium transition-colors relative",
    isActive 
      ? "text-festari-accent" 
      : isScrolled 
        ? "text-festari-900 hover:text-festari-accent" 
        : "text-white hover:text-festari-accent"
  );
  
  // Generate nav items with dropdowns for desktop
  const renderDesktopNavItems = () => {
    return navItems.map((item, index) => {
      const isActive = location.pathname === item.href || 
                      (item.subItems?.some(subItem => location.pathname === subItem.href));
      
      if (item.subItems && item.subItems.length > 0) {
        return (
          <div key={index} className="relative group">
            <button 
              className={`${linkClasses(isActive)} flex items-center gap-1`}
              onClick={() => toggleDropdown(index)}
              aria-expanded={openDropdown === index}
            >
              {item.label}
              <ChevronDown 
                size={16} 
                className={`transition-transform ${openDropdown === index ? 'rotate-180' : ''}`} 
              />
            </button>
            
            {openDropdown === index && (
              <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                {item.subItems.map((subItem, subIndex) => (
                  <Link
                    key={subIndex}
                    to={subItem.href}
                    className="block px-4 py-2 text-sm text-festari-800 hover:bg-festari-50 hover:text-festari-accent"
                  >
                    {subItem.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        );
      }
      
      return (
        <Link 
          key={index} 
          to={item.href} 
          className={linkClasses(location.pathname === item.href)}
        >
          {item.label}
        </Link>
      );
    });
  };
  
  // Generate nav items for mobile
  const renderMobileNavItems = () => {
    return (
      <div className="space-y-4 py-6 px-4">
        {navItems.map((item, index) => (
          <div key={index} className="space-y-2">
            {item.subItems && item.subItems.length > 0 ? (
              <>
                <div 
                  className="flex items-center justify-between text-lg font-medium py-2"
                  onClick={() => toggleDropdown(index)}
                >
                  <span>{item.label}</span>
                  <ChevronDown 
                    size={20} 
                    className={`transition-transform ${openDropdown === index ? 'rotate-180' : ''}`} 
                  />
                </div>
                
                {openDropdown === index && (
                  <div className="ml-4 space-y-2 border-l-2 border-festari-100 pl-4">
                    {item.subItems.map((subItem, subIndex) => (
                      <Link
                        key={subIndex}
                        to={subItem.href}
                        className={`block py-2 ${location.pathname === subItem.href ? 'text-festari-accent' : 'text-festari-600'}`}
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </>
            ) : (
              <Link 
                to={item.href} 
                className={`block py-2 text-lg font-medium ${location.pathname === item.href ? 'text-festari-accent' : 'text-festari-600'}`}
              >
                {item.label}
              </Link>
            )}
          </div>
        ))}
      </div>
    );
  };
  
  return (
    <header className={headerClasses}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <span className={`text-2xl font-bold font-display ${isScrolled ? 'text-festari-900' : 'text-white'}`}>
            Festari
          </span>
        </Link>
        
        {/* Desktop Navigation */}
        {!isMobile && (
          <nav className="hidden md:flex items-center space-x-1">
            {renderDesktopNavItems()}
          </nav>
        )}
        
        {/* Authentication Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <Link to="/login">
            <ButtonJS 
              variant={isScrolled ? "outline" : "ghost"} 
              className={isScrolled ? "" : "text-white border-white/30 hover:bg-white/10"}
            >
              Log in
            </ButtonJS>
          </Link>
          <Link to="/register">
            <ButtonJS variant="accent">
              Register
            </ButtonJS>
          </Link>
        </div>
        
        {/* Mobile Menu Button */}
        {isMobile && (
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`p-2 rounded-md ${isScrolled ? 'text-festari-900' : 'text-white'}`}
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        )}
      </div>
      
      {/* Mobile Menu */}
      {isMobile && isMenuOpen && (
        <div className="md:hidden bg-white border-t border-festari-100 shadow-xl">
          {renderMobileNavItems()}
          
          <div className="flex items-center justify-center space-x-4 py-6 border-t border-festari-100">
            <Link to="/login" className="w-1/2">
              <ButtonJS variant="outline" className="w-full">
                Log in
              </ButtonJS>
            </Link>
            <Link to="/register" className="w-1/2">
              <ButtonJS variant="accent" className="w-full">
                Register
              </ButtonJS>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default HeaderJS;
