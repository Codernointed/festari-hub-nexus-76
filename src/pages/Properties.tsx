import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, MapPin, Bed, Bath, Home, Square, Star, Heart, ArrowUpRight } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { useToast } from '@/hooks/use-toast';

const MOCK_PROPERTIES = [
  {
    id: 1,
    title: "Luxury Downtown Apartment",
    description: "Modern luxury apartment in the heart of downtown with stunning city views",
    price: 2500,
    type: "Apartment",
    bedrooms: 2,
    bathrooms: 2,
    area: 1200,
    location: "123 Main St, Downtown",
    image: "https://source.unsplash.com/random/600x400/?apartment",
    featured: true
  },
  {
    id: 2,
    title: "Cozy Studio near University",
    description: "Perfect for students or young professionals, walking distance to campus",
    price: 1200,
    type: "Studio",
    bedrooms: 1,
    bathrooms: 1,
    area: 550,
    location: "456 College Ave, University District",
    image: "https://source.unsplash.com/random/600x400/?studio"
  },
  {
    id: 3,
    title: "Spacious Family Home",
    description: "Beautiful family home with a large backyard in a quiet neighborhood",
    price: 3800,
    type: "House",
    bedrooms: 4,
    bathrooms: 3,
    area: 2500,
    location: "789 Oak St, Suburb",
    image: "https://source.unsplash.com/random/600x400/?house"
  },
  {
    id: 4,
    title: "Modern Loft in Arts District",
    description: "Industrial-style loft with high ceilings and an open floor plan",
    price: 2800,
    type: "Loft",
    bedrooms: 1,
    bathrooms: 1,
    area: 950,
    location: "101 Gallery Way, Arts District",
    image: "https://source.unsplash.com/random/600x400/?loft"
  },
  {
    id: 5,
    title: "Penthouse with Rooftop Terrace",
    description: "Luxury penthouse with a private rooftop terrace and panoramic views",
    price: 5500,
    type: "Penthouse",
    bedrooms: 3,
    bathrooms: 3,
    area: 2200,
    location: "202 Skyline Ave, Downtown",
    image: "https://source.unsplash.com/random/600x400/?penthouse",
    featured: true
  },
  {
    id: 6,
    title: "Townhouse with Garage",
    description: "Three-story townhouse with a private garage and modern amenities",
    price: 3200,
    type: "Townhouse",
    bedrooms: 3,
    bathrooms: 2.5,
    area: 1800,
    location: "303 Urban Lane, Midtown",
    image: "https://source.unsplash.com/random/600x400/?townhouse"
  }
];

const Properties = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [propertyType, setPropertyType] = useState('all');
  const [bedrooms, setBedrooms] = useState('any');
  const [priceRange, setPriceRange] = useState<number[]>([500, 6000]);
  const [areaRange, setAreaRange] = useState<number[]>([500, 3000]);
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'
  const { toast } = useToast();
  
  const filteredProperties = MOCK_PROPERTIES.filter(property => {
    const matchesSearch = 
      property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      property.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      property.description.toLowerCase().includes(searchTerm.toLowerCase());
      
    const matchesType = propertyType === 'all' || property.type === propertyType;
    const matchesBedrooms = bedrooms === 'any' || 
      (bedrooms === '4+' ? property.bedrooms >= 4 : property.bedrooms === parseInt(bedrooms));
    const matchesPrice = property.price >= priceRange[0] && property.price <= priceRange[1];
    const matchesArea = property.area >= areaRange[0] && property.area <= areaRange[1];
    
    return matchesSearch && matchesType && matchesBedrooms && matchesPrice && matchesArea;
  });
  
  const saveProperty = (id: number) => {
    toast({
      title: "Property Saved",
      description: "This property has been added to your favorites.",
    });
  };
  
  const scheduleViewing = (id: number) => {
    toast({
      title: "Request Sent",
      description: "Your viewing request has been submitted. We'll contact you shortly.",
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="bg-gradient-to-r from-festari-900 to-purple-900 text-white py-16">
          <div className="container-custom text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
              Find Your Perfect Space
            </h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto mb-8">
              Explore our curated selection of premium properties available for rent and purchase
            </p>
            
            <div className="max-w-3xl mx-auto relative">
              <div className="flex">
                <div className="relative flex-grow">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <Input
                    type="text"
                    placeholder="Search by location, property name, or features..."
                    className="w-full pl-10 pr-4 py-6 text-black rounded-l-lg border-0"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <Button 
                  className="rounded-l-none bg-festari-accent hover:bg-festari-accent/90 px-6"
                >
                  Search
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-12 bg-gray-50">
          <div className="container-custom">
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="lg:w-1/4">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-6">
                      <h2 className="text-xl font-semibold flex items-center">
                        <Filter size={20} className="mr-2" /> Filters
                      </h2>
                      <Button variant="ghost" size="sm" className="text-sm">
                        Reset
                      </Button>
                    </div>
                    
                    <div className="space-y-6">
                      <div>
                        <label className="text-sm font-medium mb-2 block">Property Type</label>
                        <Select value={propertyType} onValueChange={setPropertyType}>
                          <SelectTrigger>
                            <SelectValue placeholder="All Types" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="all">All Types</SelectItem>
                            <SelectItem value="Apartment">Apartment</SelectItem>
                            <SelectItem value="House">House</SelectItem>
                            <SelectItem value="Studio">Studio</SelectItem>
                            <SelectItem value="Loft">Loft</SelectItem>
                            <SelectItem value="Penthouse">Penthouse</SelectItem>
                            <SelectItem value="Townhouse">Townhouse</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div>
                        <label className="text-sm font-medium mb-2 block">Bedrooms</label>
                        <Select value={bedrooms} onValueChange={setBedrooms}>
                          <SelectTrigger>
                            <SelectValue placeholder="Any" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="any">Any</SelectItem>
                            <SelectItem value="1">1</SelectItem>
                            <SelectItem value="2">2</SelectItem>
                            <SelectItem value="3">3</SelectItem>
                            <SelectItem value="4+">4+</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div>
                        <div className="flex justify-between mb-2">
                          <label className="text-sm font-medium">Price Range</label>
                          <span className="text-sm text-gray-500">
                            ${priceRange[0]} - ${priceRange[1]}
                          </span>
                        </div>
                        <Slider
                          defaultValue={[500, 6000]}
                          max={10000}
                          min={0}
                          step={100}
                          value={priceRange}
                          onValueChange={setPriceRange}
                          className="my-6"
                        />
                      </div>
                      
                      <div>
                        <div className="flex justify-between mb-2">
                          <label className="text-sm font-medium">Area (sq ft)</label>
                          <span className="text-sm text-gray-500">
                            {areaRange[0]} - {areaRange[1]}
                          </span>
                        </div>
                        <Slider
                          defaultValue={[500, 3000]}
                          max={5000}
                          min={0}
                          step={100}
                          value={areaRange}
                          onValueChange={setAreaRange}
                          className="my-6"
                        />
                      </div>
                      
                      <Separator className="my-4" />
                      
                      <Button className="w-full">Apply Filters</Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <div className="lg:w-3/4">
                <div className="flex justify-between items-center mb-6">
                  <p className="text-gray-600">
                    Showing <span className="font-medium">{filteredProperties.length}</span> properties
                  </p>
                  <div className="flex items-center gap-3">
                    <Select defaultValue="featured">
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Sort by" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="featured">Featured</SelectItem>
                        <SelectItem value="price-low">Price: Low to High</SelectItem>
                        <SelectItem value="price-high">Price: High to Low</SelectItem>
                        <SelectItem value="newest">Newest</SelectItem>
                      </SelectContent>
                    </Select>
                    
                    <div className="flex border rounded-md">
                      <button 
                        className={`px-3 py-2 ${viewMode === 'grid' ? 'bg-gray-100' : ''}`}
                        onClick={() => setViewMode('grid')}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
                      </button>
                      <button 
                        className={`px-3 py-2 ${viewMode === 'list' ? 'bg-gray-100' : ''}`}
                        onClick={() => setViewMode('list')}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line></svg>
                      </button>
                    </div>
                  </div>
                </div>
                
                {filteredProperties.length === 0 ? (
                  <div className="bg-white rounded-lg p-8 text-center">
                    <Home size={48} className="mx-auto mb-4 text-gray-400" />
                    <h3 className="text-xl font-semibold mb-2">No properties found</h3>
                    <p className="text-gray-500 mb-4">
                      Try adjusting your search criteria to find more options.
                    </p>
                    <Button 
                      variant="outline" 
                      onClick={() => {
                        setSearchTerm('');
                        setPropertyType('');
                        setBedrooms('');
                        setPriceRange([500, 6000]);
                        setAreaRange([500, 3000]);
                      }}
                    >
                      Reset Filters
                    </Button>
                  </div>
                ) : (
                  <div className={viewMode === 'grid' 
                    ? "grid grid-cols-1 md:grid-cols-2 gap-6" 
                    : "space-y-6"
                  }>
                    {filteredProperties.map(property => (
                      <div 
                        key={property.id} 
                        className={`bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow ${
                          viewMode === 'list' ? 'flex flex-col md:flex-row' : ''
                        }`}
                      >
                        <div className={viewMode === 'list' ? 'md:w-2/5 relative' : 'relative'}>
                          <Link to={`/property/${property.id}`}>
                            <img 
                              src={property.image} 
                              alt={property.title}
                              className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                            />
                          </Link>
                          {property.featured && (
                            <Badge className="absolute top-2 left-2 bg-festari-accent">
                              Featured
                            </Badge>
                          )}
                          <button 
                            className="absolute top-2 right-2 p-1.5 bg-white rounded-full shadow-sm hover:bg-gray-100"
                            onClick={() => saveProperty(property.id)}
                          >
                            <Heart size={18} className="text-gray-500 hover:text-red-500" />
                          </button>
                        </div>
                        
                        <div className={`p-5 ${viewMode === 'list' ? 'md:w-3/5' : ''}`}>
                          <div className="flex justify-between items-start">
                            <Link to={`/property/${property.id}`} className="hover:text-festari-accent transition-colors">
                              <h3 className="text-lg font-semibold mb-1">{property.title}</h3>
                            </Link>
                            <p className="text-festari-accent font-bold">${property.price}/mo</p>
                          </div>
                          <div className="flex items-center text-gray-500 mb-3">
                            <MapPin size={16} className="mr-1" />
                            <span className="text-sm">{property.location}</span>
                          </div>
                          
                          <p className="text-gray-600 text-sm mb-4">{property.description}</p>
                          
                          <div className="flex flex-wrap gap-4 mb-4">
                            <div className="flex items-center text-gray-700">
                              <Bed size={16} className="mr-1" />
                              <span className="text-sm">{property.bedrooms} Beds</span>
                            </div>
                            <div className="flex items-center text-gray-700">
                              <Bath size={16} className="mr-1" />
                              <span className="text-sm">{property.bathrooms} Baths</span>
                            </div>
                            <div className="flex items-center text-gray-700">
                              <Square size={16} className="mr-1" />
                              <span className="text-sm">{property.area} sq ft</span>
                            </div>
                          </div>
                          
                          <div className="flex justify-between">
                            <Button 
                              variant="outline" 
                              size="sm"
                              onClick={() => scheduleViewing(property.id)}
                            >
                              Schedule Viewing
                            </Button>
                            <Link to={`/property/${property.id}`}>
                              <Button size="sm">
                                View Details
                                <ArrowUpRight size={16} className="ml-1" />
                              </Button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Properties;
