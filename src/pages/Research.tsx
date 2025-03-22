
import { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { GraduationCap, BookOpen, FileText, User, Clock, Calendar, ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';

// Sample courses data
const courses = [
  {
    id: 'course1',
    title: 'Real Estate Investment Fundamentals',
    image: 'https://images.unsplash.com/photo-1516156008625-3a9d6067fab5?auto=format&q=80',
    description: 'Learn the basics of real estate investment strategies, market analysis, and financial evaluation.',
    price: '$199',
    duration: '6 Weeks',
    level: 'Beginner',
    instructor: 'Dr. James Wilson',
    startDate: 'June 15, 2023',
    enrolled: 125,
    path: '/research/courses/investment-fundamentals',
  },
  {
    id: 'course2',
    title: 'Advanced Property Valuation',
    image: 'https://images.unsplash.com/photo-1580894912989-0bc892f4efd0?auto=format&q=80',
    description: 'Master the techniques for accurate property valuation, including comparative market analysis and income approach.',
    price: '$249',
    duration: '8 Weeks',
    level: 'Advanced',
    instructor: 'Prof. Sarah Johnson',
    startDate: 'July 10, 2023',
    enrolled: 94,
    path: '/research/courses/property-valuation',
  },
  {
    id: 'course3',
    title: 'Real Estate Law and Regulations',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&q=80',
    description: 'Understand the legal framework governing real estate transactions, contracts, and dispute resolution.',
    price: '$229',
    duration: '7 Weeks',
    level: 'Intermediate',
    instructor: 'Prof. Michael Chen',
    startDate: 'August 5, 2023',
    enrolled: 78,
    path: '/research/courses/real-estate-law',
  },
  {
    id: 'course4',
    title: 'Sustainable Development Practices',
    image: 'https://images.unsplash.com/photo-1489674267075-cee793167910?auto=format&q=80',
    description: 'Explore environmentally responsible approaches to property development and management.',
    price: '$179',
    duration: '5 Weeks',
    level: 'Intermediate',
    instructor: 'Dr. Emily Rodriguez',
    startDate: 'September 12, 2023',
    enrolled: 62,
    path: '/research/courses/sustainable-development',
  },
];

// Sample publications data
const publications = [
  {
    id: 'pub1',
    title: 'Urban Housing Affordability in Developing Economies',
    authors: 'Smith, J., Johnson, R., & Williams, M.',
    journal: 'Journal of Urban Economics',
    year: '2023',
    abstract: 'This paper examines the challenges of housing affordability in rapidly urbanizing cities across developing economies, proposing policy frameworks for sustainable solutions.',
    tags: ['Housing', 'Urban Policy', 'Development Economics'],
    url: 'https://example.com/journal1',
    openAccess: true,
  },
  {
    id: 'pub2',
    title: 'Property Valuation Models in Volatile Markets',
    authors: 'Anderson, K., Thompson, S., & Zhang, L.',
    journal: 'Real Estate Finance Journal',
    year: '2022',
    abstract: 'A comparative analysis of property valuation models and their effectiveness in accurately predicting market values during periods of high volatility.',
    tags: ['Valuation', 'Market Analysis', 'Risk Assessment'],
    url: 'https://example.com/journal2',
    openAccess: false,
  },
  {
    id: 'pub3',
    title: 'Impact of Climate Change on Coastal Real Estate Markets',
    authors: 'Rodriguez, E., Chen, M., & Patel, A.',
    journal: 'Environmental Economics Review',
    year: '2023',
    abstract: 'This research investigates how climate change projections and associated risks are being priced into coastal property markets across different regions.',
    tags: ['Climate Change', 'Coastal Properties', 'Risk Pricing'],
    url: 'https://example.com/journal3',
    openAccess: true,
  },
  {
    id: 'pub4',
    title: 'Technological Disruption in Commercial Real Estate',
    authors: 'Morgan, D., Wilson, J., & Yamamoto, H.',
    journal: 'Property Technology Review',
    year: '2022',
    abstract: 'An examination of how emerging technologies are transforming the commercial real estate sector, with case studies on proptech adoption and outcomes.',
    tags: ['PropTech', 'Commercial Real Estate', 'Digital Transformation'],
    url: 'https://example.com/journal4',
    openAccess: false,
  },
  {
    id: 'pub5',
    title: 'Rental Housing Market Dynamics Post-Pandemic',
    authors: 'Johnson, S., Barnes, T., & Li, W.',
    journal: 'Housing Studies Quarterly',
    year: '2023',
    abstract: 'Analysis of shifting demand patterns in urban rental markets following the COVID-19 pandemic and implications for property investors and urban planners.',
    tags: ['Rental Markets', 'Urban Planning', 'Post-Pandemic'],
    url: 'https://example.com/journal5',
    openAccess: true,
  },
];

const Research = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [courseLevel, setCourseLevel] = useState('All');
  const [publicationTag, setPublicationTag] = useState('All');
  
  // Filter courses
  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         course.instructor.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesLevel = courseLevel === 'All' || course.level === courseLevel;
    
    return matchesSearch && matchesLevel;
  });
  
  // Filter publications
  const filteredPublications = publications.filter(pub => {
    const matchesSearch = pub.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         pub.abstract.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         pub.authors.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesTag = publicationTag === 'All' || pub.tags.some(tag => tag === publicationTag);
    
    return matchesSearch && matchesTag;
  });
  
  // Get all unique tags for filter options
  const allTags = Array.from(new Set(publications.flatMap(pub => pub.tags)));

  return (
    <div>
      <Header />
      <main className="pt-20">
        {/* Hero section */}
        <section className="relative py-20 bg-festari-900 text-white">
          <div className="container-custom">
            <div className="max-w-2xl">
              <h1 className="text-3xl md:text-4xl font-display font-bold mb-4">Research & Education Hub</h1>
              <p className="text-festari-100 mb-6">Access cutting-edge research papers and educational courses in real estate and related fields.</p>
              
              {/* Search bar */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search courses and publications..."
                  className="w-full pl-4 pr-4 py-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-accent"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Tabs section */}
        <section className="section-padding bg-festari-50" id="research-content">
          <div className="container-custom">
            <Tabs defaultValue="courses" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="courses" className="flex items-center gap-2">
                  <GraduationCap size={18} />
                  <span className="font-medium">Courses</span>
                </TabsTrigger>
                <TabsTrigger value="publications" className="flex items-center gap-2">
                  <BookOpen size={18} />
                  <span className="font-medium">Publications</span>
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="courses" className="space-y-8" id="courses">
                {/* Course level filter */}
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <h2 className="text-2xl font-display font-bold text-festari-900">Educational Courses</h2>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-festari-600">Level:</span>
                    <select 
                      className="p-2 border border-festari-200 rounded-md focus:outline-none focus:ring-1 focus:ring-accent text-sm"
                      value={courseLevel}
                      onChange={(e) => setCourseLevel(e.target.value)}
                    >
                      <option value="All">All Levels</option>
                      <option value="Beginner">Beginner</option>
                      <option value="Intermediate">Intermediate</option>
                      <option value="Advanced">Advanced</option>
                    </select>
                  </div>
                </div>
                
                {/* Course cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {filteredCourses.map((course) => (
                    <div 
                      key={course.id}
                      className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col"
                    >
                      <div className="h-48 relative overflow-hidden">
                        <img 
                          src={course.image} 
                          alt={course.title} 
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-4 right-4 bg-accent text-white text-xs font-bold py-1 px-2 rounded">
                          {course.level}
                        </div>
                      </div>
                      <div className="p-6 flex-1 flex flex-col">
                        <h3 className="text-lg font-semibold text-festari-900 mb-2">
                          {course.title}
                        </h3>
                        <p className="text-sm text-festari-600 mb-4">
                          {course.description}
                        </p>
                        <div className="grid grid-cols-2 gap-3 mb-4">
                          <div className="flex items-center gap-2">
                            <User size={14} className="text-festari-500" />
                            <span className="text-sm text-festari-700">{course.instructor}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock size={14} className="text-festari-500" />
                            <span className="text-sm text-festari-700">{course.duration}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Calendar size={14} className="text-festari-500" />
                            <span className="text-sm text-festari-700">Starts: {course.startDate}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <GraduationCap size={14} className="text-festari-500" />
                            <span className="text-sm text-festari-700">{course.enrolled} enrolled</span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between mt-auto pt-4 border-t border-festari-100">
                          <span className="text-lg font-bold text-accent">{course.price}</span>
                          <button className="text-sm text-white bg-accent hover:bg-accent/90 px-4 py-2 rounded transition-colors">
                            Enroll Now
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Empty state for courses */}
                {filteredCourses.length === 0 && (
                  <div className="bg-white rounded-lg p-8 text-center">
                    <div className="flex justify-center mb-4">
                      <GraduationCap size={48} className="text-festari-300" />
                    </div>
                    <h3 className="text-xl font-semibold text-festari-800 mb-2">No courses found</h3>
                    <p className="text-festari-600 mb-4">Try adjusting your search criteria or filters</p>
                    <button 
                      className="btn-primary"
                      onClick={() => {
                        setSearchQuery('');
                        setCourseLevel('All');
                      }}
                    >
                      Reset Filters
                    </button>
                  </div>
                )}
              </TabsContent>
              
              <TabsContent value="publications" className="space-y-8" id="publications">
                {/* Publication tag filter */}
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <h2 className="text-2xl font-display font-bold text-festari-900">Research Publications</h2>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-festari-600">Topic:</span>
                    <select 
                      className="p-2 border border-festari-200 rounded-md focus:outline-none focus:ring-1 focus:ring-accent text-sm"
                      value={publicationTag}
                      onChange={(e) => setPublicationTag(e.target.value)}
                    >
                      <option value="All">All Topics</option>
                      {allTags.map((tag) => (
                        <option key={tag} value={tag}>{tag}</option>
                      ))}
                    </select>
                  </div>
                </div>
                
                {/* Publications list */}
                <div className="space-y-6">
                  {filteredPublications.map((publication) => (
                    <div 
                      key={publication.id}
                      className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300"
                    >
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="text-lg font-semibold text-festari-900 mb-2">
                            {publication.title}
                          </h3>
                          <p className="text-sm text-festari-700 mb-1">
                            {publication.authors}
                          </p>
                          <p className="text-sm text-festari-600 mb-3">
                            {publication.journal}, {publication.year}
                          </p>
                        </div>
                        <div className="bg-festari-100 text-festari-800 px-3 py-1 rounded-full text-xs font-medium">
                          {publication.openAccess ? 'Open Access' : 'Subscription'}
                        </div>
                      </div>
                      
                      <p className="text-sm text-festari-600 mb-4">
                        {publication.abstract}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {publication.tags.map((tag) => (
                          <span 
                            key={tag} 
                            className="bg-festari-100 text-festari-700 text-xs px-2 py-1 rounded"
                            onClick={() => setPublicationTag(tag)}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex justify-end">
                        <a 
                          href={publication.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm flex items-center gap-1 text-accent hover:underline"
                        >
                          View Publication <ExternalLink size={14} />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Empty state for publications */}
                {filteredPublications.length === 0 && (
                  <div className="bg-white rounded-lg p-8 text-center">
                    <div className="flex justify-center mb-4">
                      <FileText size={48} className="text-festari-300" />
                    </div>
                    <h3 className="text-xl font-semibold text-festari-800 mb-2">No publications found</h3>
                    <p className="text-festari-600 mb-4">Try adjusting your search criteria or filters</p>
                    <button 
                      className="btn-primary"
                      onClick={() => {
                        setSearchQuery('');
                        setPublicationTag('All');
                      }}
                    >
                      Reset Filters
                    </button>
                  </div>
                )}
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Research;
