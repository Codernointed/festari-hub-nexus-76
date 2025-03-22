
import { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Home, GraduationCap, DollarSign, User } from 'lucide-react';
import { cn } from '@/lib/utils';

const featuredProperties = [
  {
    id: 'prop1',
    title: 'Luxury Apartment with City View',
    image: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&q=80',
    price: '$2,500/mo',
    location: 'Downtown',
    type: 'Rental',
    features: '2 Bed • 2 Bath • 1,200 sqft',
    path: '/real-estate/luxury-apartment',
  },
  {
    id: 'prop2',
    title: 'Modern Villa with Pool',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&q=80',
    price: '$850,000',
    location: 'Suburban',
    type: 'Sale',
    features: '4 Bed • 3 Bath • 2,800 sqft',
    path: '/real-estate/modern-villa',
  },
  {
    id: 'prop3',
    title: 'Office Space in Business District',
    image: 'https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&q=80',
    price: '$3,200/mo',
    location: 'Financial District',
    type: 'Rental',
    features: 'Open Floor • 1,800 sqft • 5th Floor',
    path: '/real-estate/office-space',
  },
];

const featuredCourses = [
  {
    id: 'course1',
    title: 'Real Estate Investment Fundamentals',
    image: 'https://images.unsplash.com/photo-1516156008625-3a9d6067fab5?auto=format&q=80',
    price: '$199',
    duration: '6 Weeks',
    level: 'Beginner',
    instructor: 'Dr. James Wilson',
    path: '/research/courses/investment-fundamentals',
  },
  {
    id: 'course2',
    title: 'Advanced Property Valuation',
    image: 'https://images.unsplash.com/photo-1580894912989-0bc892f4efd0?auto=format&q=80',
    price: '$249',
    duration: '8 Weeks',
    level: 'Advanced',
    instructor: 'Prof. Sarah Johnson',
    path: '/research/courses/property-valuation',
  },
];

const FeaturedProperties = () => {
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
    <section ref={containerRef} className="section-padding bg-festari-50">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Home size={18} className="text-accent" />
              <h2 className="text-sm font-medium uppercase tracking-wider text-accent">Featured Properties</h2>
            </div>
            <h3 className="text-2xl md:text-3xl font-display font-bold text-festari-900">Exceptional Real Estate</h3>
          </div>
          <Link to="/real-estate" className="flex items-center gap-1 text-accent hover:underline mt-4 md:mt-0">
            View all properties <ArrowRight size={16} />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProperties.map((property, index) => (
            <Link 
              key={property.id} 
              to={property.path}
              className={cn(
                "bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
                isVisible && `transition-all duration-500 ease-out delay-${index * 100}`
              )}
            >
              <div className="relative h-60 overflow-hidden">
                <img 
                  src={property.image} 
                  alt={property.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-accent text-white text-xs font-bold uppercase py-1 px-2 rounded">
                  {property.type}
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-lg font-semibold text-festari-900 group-hover:text-accent transition-colors">
                    {property.title}
                  </h4>
                </div>
                <p className="text-festari-600 mb-2">
                  {property.location}
                </p>
                <p className="text-sm text-festari-500 mb-4">
                  {property.features}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-accent">{property.price}</span>
                  <span className="text-sm text-festari-500 group-hover:text-accent transition-colors">View Details</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-20 flex flex-col md:flex-row justify-between items-start md:items-end mb-10">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <GraduationCap size={18} className="text-accent" />
              <h2 className="text-sm font-medium uppercase tracking-wider text-accent">Featured Courses</h2>
            </div>
            <h3 className="text-2xl md:text-3xl font-display font-bold text-festari-900">Educational Opportunities</h3>
          </div>
          <Link to="/research" className="flex items-center gap-1 text-accent hover:underline mt-4 md:mt-0">
            View all courses <ArrowRight size={16} />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredCourses.map((course, index) => (
            <Link 
              key={course.id} 
              to={course.path}
              className={cn(
                "bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group flex flex-col md:flex-row",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
                isVisible && `transition-all duration-500 ease-out delay-${(index + 3) * 100}`
              )}
            >
              <div className="md:w-1/3 h-48 md:h-auto relative overflow-hidden">
                <img 
                  src={course.image} 
                  alt={course.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="md:w-2/3 p-6">
                <h4 className="text-lg font-semibold text-festari-900 group-hover:text-accent transition-colors mb-2">
                  {course.title}
                </h4>
                <div className="flex items-center gap-2 mb-3">
                  <User size={14} className="text-festari-500" />
                  <span className="text-sm text-festari-600">{course.instructor}</span>
                </div>
                <div className="flex flex-wrap gap-3 mb-4">
                  <span className="bg-festari-100 text-festari-700 text-xs px-2 py-1 rounded">
                    {course.duration}
                  </span>
                  <span className="bg-festari-100 text-festari-700 text-xs px-2 py-1 rounded">
                    {course.level}
                  </span>
                </div>
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-lg font-bold text-accent">{course.price}</span>
                  <span className="text-sm text-festari-500 group-hover:text-accent transition-colors">Enroll Now</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;
