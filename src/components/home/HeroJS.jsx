
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

/**
 * JavaScript version of the Hero component
 */
const HeroJS = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const getAnimationClasses = (delay = 0) => {
    const baseClasses = "transform transition-all duration-700 ease-out";
    const visibilityClasses = isVisible 
      ? "opacity-100 translate-y-0" 
      : "opacity-0 translate-y-4";
    const delayClass = delay ? `delay-${delay}` : '';
    
    return `${baseClasses} ${visibilityClasses} ${delayClass}`;
  };

  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-festari-900/90 to-festari-800/80 z-10"></div>
        <img
          src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&q=80"
          alt="Festari"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Content */}
      <div className="container-custom relative z-20 pt-20">
        <div className="max-w-3xl">
          <span className={`inline-block py-1 px-3 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6 ${getAnimationClasses()}`}>
            Welcome to Festari
          </span>
          
          <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 ${getAnimationClasses(100)}`}>
            Where Real Estate Meets <span className="text-accent">Innovation</span> & Education
          </h1>
          
          <p className={`text-lg md:text-xl text-festari-100 mb-8 max-w-2xl ${getAnimationClasses(200)}`}>
            Discover premier properties, access cutting-edge research, and connect with industry expertise—all in one sophisticated platform.
          </p>
          
          <div className={`flex flex-col sm:flex-row gap-4 ${getAnimationClasses(300)}`}>
            <Link 
              to="/real-estate" 
              className="btn-primary bg-accent hover:bg-accent/90 px-6 py-3 text-base"
            >
              Explore Properties
            </Link>
            <Link 
              to="/research" 
              className="btn-ghost text-white border border-white/30 hover:bg-white/10 px-6 py-3 text-base flex items-center"
            >
              Research Hub <ChevronRight size={16} className="ml-1" />
            </Link>
          </div>
        </div>
      </div>

      {/* Decorative element */}
      <div className="absolute bottom-10 left-0 right-0 flex justify-center z-20">
        <div className={`w-10 h-10 rounded-full border-2 border-white/30 flex items-center justify-center transform transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="w-1.5 h-1.5 bg-white rounded-full animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroJS;
