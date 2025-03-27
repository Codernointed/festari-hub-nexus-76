
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from "@/components/ui/button";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-festari-900/90 to-festari-800/80 z-10"></div>
        <img
          src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?q=80&w=2073&auto=format&fit=crop"
          alt="Festari"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Content */}
      <div className="container-custom relative z-20 pt-20">
        <div className="max-w-3xl">
          <span 
            className={cn(
              "inline-block py-1 px-3 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6 transform transition-all duration-500 ease-out",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
          >
            Welcome to Festari Group
          </span>
          
          <h1 
            className={cn(
              "text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 transform transition-all duration-700 delay-100 ease-out",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
          >
            Where Real Estate Meets <span className="text-accent">Innovation</span> & Education
          </h1>
          
          <p 
            className={cn(
              "text-lg md:text-xl text-festari-100 mb-8 max-w-2xl transform transition-all duration-700 delay-200 ease-out",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
          >
            Discover premier properties, access cutting-edge research, and connect with industry expertise—all led by Dr. Festus Kunkyin-Saadaari's vision of sustainable development.
          </p>
          
          <div 
            className={cn(
              "flex flex-col sm:flex-row gap-4 transform transition-all duration-700 delay-300 ease-out",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
          >
            <Button 
              asChild
              className="bg-accent hover:bg-accent/90 px-6 py-6 text-base"
              size="lg"
            >
              <Link to="/real-estate">
                Explore Properties
              </Link>
            </Button>
            <Button 
              asChild
              variant="outline"
              className="text-white border border-white/30 hover:bg-white/10 px-6 py-6 text-base flex items-center"
              size="lg"
            >
              <Link to="/research">
                Research Hub <ChevronRight size={16} className="ml-1" />
              </Link>
            </Button>
          </div>

          <div 
            className={cn(
              "flex items-center gap-2 mt-10 text-white/70 transform transition-all duration-700 delay-400 ease-out",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
          >
            <Link to="/about" className="flex items-center gap-1 hover:text-accent transition-colors">
              Our Story <ArrowRight size={14} />
            </Link>
            <span className="text-white/30">•</span>
            <Link to="/founder" className="flex items-center gap-1 hover:text-accent transition-colors">
              Meet Our Founder <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>

      {/* Statistics Bar */}
      <div 
        className={cn(
          "absolute bottom-0 left-0 right-0 bg-white/10 backdrop-blur-md border-t border-white/10 py-6 z-20 transform transition-all duration-1000 delay-500",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}
      >
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white">10+</div>
              <div className="text-sm text-white/70 mt-1">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white">250+</div>
              <div className="text-sm text-white/70 mt-1">Properties</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white">50+</div>
              <div className="text-sm text-white/70 mt-1">Research Papers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white">1000+</div>
              <div className="text-sm text-white/70 mt-1">Satisfied Clients</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
