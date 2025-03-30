
import { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ChevronRight, 
  BookOpen, 
  Building, 
  Leaf, 
  ShoppingCart, 
  Briefcase 
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

interface DivisionProps {
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
  bgImage: string;
  color: string;
  link: string;
  delay: number;
  keyServices: string[];
}

const divisions: DivisionProps[] = [
  {
    title: "Research & Consultancy",
    subtitle: "Festari Research & Consultancy Institute Ltd",
    description: "Expert mining and geotechnical consulting, academic research, and professional training and certification programs.",
    icon: <BookOpen size={28} />,
    bgImage: "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&q=80",
    color: "chili",
    link: "/research",
    delay: 0,
    keyServices: [
      "Geotechnical Engineering",
      "Mineral Exploration",
      "Environmental Impact Assessments",
      "Professional and Technical Writing",
      "Mining Education and Training"
    ]
  },
  {
    title: "Estates Agency",
    subtitle: "Festari Estates Agency",
    description: "Comprehensive real estate services including property sales, rentals, and management for residential and commercial clients.",
    icon: <Building size={28} />,
    bgImage: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&q=80",
    color: "mikado",
    link: "/real-estate",
    delay: 150,
    keyServices: [
      "Property Listings",
      "Real Estate Consultation",
      "Property Management",
      "Hostel Rentals",
      "Property Appraisals"
    ]
  },
  {
    title: "AgriBusiness",
    subtitle: "Festari Farms & AgriBusiness",
    description: "Sustainable farming operations, agricultural products, and expert consulting for modern agricultural practices.",
    icon: <Leaf size={28} />,
    bgImage: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&q=80",
    color: "indigo",
    link: "/agriculture",
    delay: 300,
    keyServices: [
      "Crop and Livestock Farming",
      "Agribusiness Consulting",
      "Agricultural Equipment",
      "Farm Education and Training",
      "Farm-to-Table Sales"
    ]
  },
  {
    title: "Enterprise",
    subtitle: "Festari Enterprise",
    description: "Comprehensive retail, wholesale, and distribution services with global import and export capabilities.",
    icon: <ShoppingCart size={28} />,
    bgImage: "https://images.unsplash.com/photo-1624435815447-21b7f6028202?auto=format&q=80",
    color: "chili",
    link: "/enterprise",
    delay: 450,
    keyServices: [
      "Retail and Wholesale",
      "Import and Export",
      "E-commerce Operations",
      "Supply Chain Management",
      "Mobile Money Services"
    ]
  },
  {
    title: "Services",
    subtitle: "Festari Services",
    description: "Wide range of professional services from logistics and delivery to event planning and personal care.",
    icon: <Briefcase size={28} />,
    bgImage: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?auto=format&q=80",
    color: "mikado",
    link: "/services",
    delay: 600,
    keyServices: [
      "Delivery Services",
      "Event Planning",
      "Home Services",
      "Personal Care",
      "Digital Marketing"
    ]
  }
];

const DivisionCard = ({ division }: { division: DivisionProps }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

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

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={cardRef}
      className={cn(
        "relative overflow-hidden rounded-xl shadow-lg transition-all duration-700 ease-out",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12",
        isVisible && `delay-[${division.delay}ms]`
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className={`absolute inset-0 bg-${division.color}/80 mix-blend-multiply z-10 transition-opacity duration-300 ${isHovered ? 'opacity-90' : 'opacity-75'}`}></div>
        <img 
          src={division.bgImage} 
          alt={division.title} 
          className={`w-full h-full object-cover transition-transform duration-500 ${isHovered ? 'scale-110' : 'scale-100'}`} 
        />
      </div>
      
      {/* Content */}
      <div className="relative z-10 p-6 md:p-8 text-white h-full flex flex-col min-h-[320px]">
        <div className={`p-3 rounded-full bg-white/20 w-fit mb-4 transform transition-all duration-300 ${isHovered ? 'scale-110 bg-white/30' : ''}`}>
          {division.icon}
        </div>
        
        <h3 className="text-xl md:text-2xl font-bold mb-1">{division.title}</h3>
        <p className="text-sm text-white/80 mb-3">{division.subtitle}</p>
        <p className="text-white/90 mb-4 flex-grow">{division.description}</p>
        
        <div className={`overflow-hidden transition-all duration-500 ${isHovered ? 'max-h-32 opacity-100 mb-4' : 'max-h-0 opacity-0'}`}>
          <p className="font-semibold mb-2">Key Services:</p>
          <ul className="text-sm grid grid-cols-1 gap-1">
            {division.keyServices.map((service, idx) => (
              <li key={idx} className="flex items-center">
                <span className="w-1.5 h-1.5 bg-white rounded-full mr-2"></span>
                {service}
              </li>
            ))}
          </ul>
        </div>
        
        <Button 
          asChild 
          variant="outline" 
          className="bg-white/10 hover:bg-white/20 text-white border-white/40 mt-auto w-fit"
        >
          <Link to={division.link} className="flex items-center">
            Learn More <ChevronRight size={16} className="ml-1" />
          </Link>
        </Button>
      </div>
    </div>
  );
};

const BusinessDivisions = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

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
    <section ref={containerRef} className="py-24 bg-white">
      <div className="container-custom">
        <div className={cn(
          "text-center max-w-3xl mx-auto mb-16 transition-all duration-500",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          <span className="inline-block py-1 px-3 rounded-full bg-indigo/10 text-indigo text-sm font-medium mb-4">
            Our Business Divisions
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-festari-900 mb-4">
            Comprehensive Solutions Across Industries
          </h2>
          <p className="text-festari-600">
            Festari Group offers specialized expertise across five key business divisions, 
            delivering integrated solutions tailored to meet diverse client needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {divisions.map((division, index) => (
            <DivisionCard key={index} division={division} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessDivisions;
