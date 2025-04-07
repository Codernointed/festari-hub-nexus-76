
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface CarouselSlide {
  image: string;
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
}

const HeroCarousel = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const slides: CarouselSlide[] = [
    {
      image: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?q=80&w=2073&auto=format&fit=cover",
      title: "Premiere Business Solutions Under One Umbrella",
      subtitle: "Discover a world of opportunities through our diverse business divisions.",
      buttonText: "Explore Properties",
      buttonLink: "/estates"
    },
    {
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&q=80",
      title: "Research & Consultancy Excellence",
      subtitle: "Access world-class research and consultancy services tailored to your needs.",
      buttonText: "Research Hub",
      buttonLink: "/research"
    },
    {
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&q=80",
      title: "Agribusiness Solutions",
      subtitle: "Innovative agricultural products and services for sustainable farming.",
      buttonText: "Explore Agriculture",
      buttonLink: "/agriculture"
    }
  ];
  
  return (
    <section className="relative min-h-screen flex items-center pt-20">
      <Carousel className="w-full" autoplay>
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem key={index} className="min-h-screen relative">
              {/* Background */}
              <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-r from-festari-900/90 to-festari-800/80 z-10"></div>
                <img 
                  src={slide.image}
                  alt={`Festari - ${slide.title}`}
                  className="w-full h-full object-cover object-center"
                />
              </div>

              {/* Content */}
              <div className="container-custom relative z-20 text-center flex items-center justify-center min-h-screen">
                <div className="max-w-3xl mx-auto">
                  <span className={cn(
                    "inline-block py-1 px-3 rounded-full bg-mikado/20 text-mikado text-sm font-medium mb-6 transform transition-all duration-500 ease-out",
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  )}>
                    Welcome to Festari Group Limited
                  </span>
                  
                  <h1 className={cn(
                    "text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 transform transition-all duration-700 delay-100 ease-out",
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  )}>
                    {slide.title}
                  </h1>
                  
                  <p className={cn(
                    "text-lg md:text-xl text-festari-100 mb-8 transform transition-all duration-700 delay-200 ease-out",
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  )}>
                    {slide.subtitle}
                  </p>
                  
                  <div className={cn(
                    "flex flex-col sm:flex-row gap-4 justify-center transform transition-all duration-700 delay-300 ease-out",
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  )}>
                    <Button 
                      asChild 
                      variant="chili"
                      size="lg"
                    >
                      <Link to={slide.buttonLink}>
                        {slide.buttonText}
                      </Link>
                    </Button>
                    <Button 
                      asChild 
                      variant="outline" 
                      className="bg-transparent text-white border-2 border-white hover:bg-white/10 px-6 py-6 text-base flex items-center" 
                      size="lg"
                    >
                      <Link to="/contact">
                        Contact Us <ChevronRight size={16} className="ml-1" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="absolute bottom-8 left-0 right-0 z-30 flex justify-center gap-4">
          <CarouselPrevious className="relative inset-0 h-10 w-10 transform-none bg-white/20 hover:bg-white/40 text-white" />
          <CarouselNext className="relative inset-0 h-10 w-10 transform-none bg-white/20 hover:bg-white/40 text-white" />
        </div>
      </Carousel>
    </section>
  );
};

export default HeroCarousel;
