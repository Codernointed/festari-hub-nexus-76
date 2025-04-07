
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, ExternalLink, ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { motion } from 'framer-motion';

interface CarouselSlide {
  image: string;
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
  animation?: string; // URL to animation file (gif/video)
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
      buttonLink: "/estates",
      animation: "https://assets.website-files.com/5e1c60372c08a9762030430e/5e3eaa18f938d8481a6a5307_home-slide-01.gif"
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
      buttonLink: "/agriculture",
      animation: "https://cdn.dribbble.com/users/1162077/screenshots/5427805/farmer.gif"
    },
    {
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&q=80",
      title: "Enterprise Development",
      subtitle: "Building scalable business frameworks for success and growth.",
      buttonText: "Enterprise Solutions",
      buttonLink: "/enterprise"
    },
    {
      image: "https://images.unsplash.com/photo-1578574577315-3fbeb0cecdc2?auto=format&q=80",
      title: "Consultation & Advisory",
      subtitle: "Expert guidance for your business needs and strategic growth.",
      buttonText: "Contact Us",
      buttonLink: "/contact"
    }
  ];
  
  return (
    <section className="relative min-h-screen flex items-center pt-20">
      <Carousel className="w-full" autoplay autoplayInterval={7000}>
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
                <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 items-center">
                  <div className="md:col-span-3 text-left">
                    <motion.span 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.7, delay: 0.2 }}
                      className="inline-block py-1 px-3 rounded-full bg-mikado/20 text-mikado text-sm font-medium mb-6"
                    >
                      Welcome to Festari Group Limited
                    </motion.span>
                    
                    <motion.h1
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.7, delay: 0.3 }}
                      className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
                    >
                      {slide.title}
                    </motion.h1>
                    
                    <motion.p
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.7, delay: 0.4 }}
                      className="text-lg md:text-xl text-festari-100 mb-8"
                    >
                      {slide.subtitle}
                    </motion.p>
                    
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.7, delay: 0.5 }}
                      className="flex flex-col sm:flex-row gap-4 sm:items-center"
                    >
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
                    </motion.div>
                  </div>

                  {/* Animation/GIF column */}
                  {slide.animation && (
                    <motion.div 
                      className="md:col-span-2 hidden md:block"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.7, delay: 0.6 }}
                    >
                      <div className="rounded-lg overflow-hidden border-4 border-white/10 shadow-xl bg-white/10 backdrop-blur-sm">
                        <img 
                          src={slide.animation} 
                          alt="Animation" 
                          className="w-full h-auto"
                        />
                      </div>
                    </motion.div>
                  )}
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
