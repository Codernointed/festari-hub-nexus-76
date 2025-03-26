
import { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Building, BookOpen, User, ArrowRight } from 'lucide-react';

/**
 * JavaScript version of the NavigationCards component
 */
const NavigationCardsJS = () => {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const navigationCards = [
    {
      title: 'Real Estate',
      description: 'Discover premier properties available for sale and rent in top locations.',
      icon: Building,
      path: '/real-estate',
      color: 'bg-gradient-to-br from-blue-500 to-blue-700',
    },
    {
      title: 'Research & Education',
      description: 'Access cutting-edge research papers and educational courses.',
      icon: BookOpen,
      path: '/research',
      color: 'bg-gradient-to-br from-purple-500 to-purple-700',
    },
    {
      title: 'About the Founder',
      description: 'Learn about the visionary behind Festari and their journey.',
      icon: User,
      path: '/about',
      color: 'bg-gradient-to-br from-emerald-500 to-emerald-700',
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={containerRef} className="section-padding">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-festari-900 mb-4">
            Explore Our Core Offerings
          </h2>
          <p className="text-festari-600">
            Festari brings together a unique blend of real estate opportunities, educational resources, 
            and professional expertise in one seamless platform.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {navigationCards.map((card, index) => {
            const animationDelay = isVisible ? `delay-${index * 100}` : '';
            
            return (
              <Link
                key={card.title}
                to={card.path}
                className={`group relative overflow-hidden rounded-xl transition-all duration-300 hover:shadow-lg ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                } ${isVisible ? `transition-all duration-500 ease-out ${animationDelay}` : ''}`}
              >
                <div className={`p-8 h-full text-white ${card.color}`}>
                  <div className="flex items-center justify-between mb-6">
                    <card.icon size={28} className="text-white/80" />
                    <ArrowRight 
                      size={20} 
                      className="transform translate-x-0 opacity-0 group-hover:translate-x-1 group-hover:opacity-100 transition-all duration-300" 
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{card.title}</h3>
                  <p className="text-white/80 text-sm">{card.description}</p>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default NavigationCardsJS;
