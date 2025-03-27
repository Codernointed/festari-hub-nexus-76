
import { useRef, useState, useEffect } from 'react';
import { Activity, BarChart, BookText, Building2, GraduationCap, HeartHandshake, Leaf, Search } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const Feature = ({ icon, title, description, delay }: FeatureProps) => {
  return (
    <div className={cn(
      "p-6 rounded-xl transition-all duration-700 ease-out hover:shadow-md hover:-translate-y-1 bg-white group",
      `animate-delay-${delay}`
    )}>
      <div className="mb-4 bg-accent/10 p-3 rounded-full w-14 h-14 flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-colors">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-festari-900 mb-2 group-hover:text-accent transition-colors">{title}</h3>
      <p className="text-festari-600">{description}</p>
    </div>
  );
};

const Features = () => {
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

  const features = [
    {
      icon: <Search className="text-accent" />,
      title: "Smart Property Search",
      description: "Find your ideal property with our advanced search filters and personalized recommendations.",
      delay: 0,
    },
    {
      icon: <BarChart className="text-accent" />,
      title: "Market Analysis",
      description: "Access comprehensive market data and trends to make informed investment decisions.",
      delay: 100,
    },
    {
      icon: <GraduationCap className="text-accent" />,
      title: "Expert Courses",
      description: "Learn from industry professionals with our curated educational courses and workshops.",
      delay: 200,
    },
    {
      icon: <Building2 className="text-accent" />,
      title: "Property Management",
      description: "Streamline your property management with our comprehensive suite of tools and services.",
      delay: 300,
    },
    {
      icon: <BookText className="text-accent" />,
      title: "Research Resources",
      description: "Access our library of publications, white papers, and research on real estate topics.",
      delay: 400,
    },
    {
      icon: <Leaf className="text-accent" />,
      title: "Agricultural Innovation",
      description: "Explore sustainable farming solutions and cutting-edge agricultural technologies.",
      delay: 500,
    },
    {
      icon: <HeartHandshake className="text-accent" />,
      title: "Community Engagement",
      description: "Connect with a network of like-minded individuals and industry professionals.",
      delay: 600,
    },
    {
      icon: <Activity className="text-accent" />,
      title: "Live Market Updates",
      description: "Stay informed with real-time updates on property prices and market conditions.",
      delay: 700,
    },
  ];

  return (
    <section ref={containerRef} className="section-padding bg-festari-50/50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            Our Features
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-festari-900 mb-4">
            Everything You Need in One Place
          </h2>
          <p className="text-festari-600">
            Festari Group combines powerful tools and services to provide a seamless experience
            for all your real estate, research, and agricultural needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={cn(
                "transform transition-all",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
                isVisible && `transition-all duration-700 ease-out delay-${feature.delay}ms`
              )}
            >
              <Feature {...feature} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
