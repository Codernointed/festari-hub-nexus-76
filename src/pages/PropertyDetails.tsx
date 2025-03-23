import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, MapPin, Bed, Bath, Square, Heart, Share2, Calendar, CheckCircle2 } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { useToast } from '@/hooks/use-toast';
import BookingForm from '@/components/property/BookingForm';

const MOCK_PROPERTIES = [
  {
    id: 1,
    title: "Luxury Downtown Apartment",
    description: "Modern luxury apartment in the heart of downtown with stunning city views. This beautifully designed space features high-end finishes, open concept living areas, and floor-to-ceiling windows that flood the apartment with natural light. The gourmet kitchen comes equipped with stainless steel appliances, quartz countertops, and custom cabinetry.",
    price: 2500,
    type: "Apartment",
    bedrooms: 2,
    bathrooms: 2,
    area: 1200,
    location: "123 Main St, Downtown",
    image: "https://source.unsplash.com/random/600x400/?apartment",
    amenities: ["In-unit Laundry", "Fitness Center", "Rooftop Terrace", "24/7 Concierge", "Underground Parking"],
    yearBuilt: 2018,
    nearbyPlaces: ["Public Transit (0.2 miles)", "Shopping Mall (0.5 miles)", "Restaurants (0.3 miles)"],
    featured: true,
    images: [
      "https://source.unsplash.com/random/800x600/?apartment,living",
      "https://source.unsplash.com/random/800x600/?apartment,kitchen",
      "https://source.unsplash.com/random/800x600/?apartment,bedroom",
      "https://source.unsplash.com/random/800x600/?apartment,bathroom"
    ]
  },
  {
    id: 2,
    title: "Cozy Studio near University",
    description: "Perfect for students or young professionals, walking distance to campus. This efficient studio offers modern amenities in a convenient location. With smart storage solutions and a functional layout, this cozy apartment maximizes every square foot.",
    price: 1200,
    type: "Studio",
    bedrooms: 1,
    bathrooms: 1,
    area: 550,
    location: "456 College Ave, University District",
    image: "https://source.unsplash.com/random/600x400/?studio",
    amenities: ["Laundry Facilities", "High-Speed Internet", "Secure Entry", "Bike Storage"],
    yearBuilt: 2015,
    nearbyPlaces: ["University (0.3 miles)", "Coffee Shops (0.1 miles)", "Grocery Store (0.4 miles)"],
    images: [
      "https://source.unsplash.com/random/800x600/?studio,living",
      "https://source.unsplash.com/random/800x600/?studio,kitchen",
      "https://source.unsplash.com/random/800x600/?studio,bed"
    ]
  }
];

const PropertyDetails = () => {
  const { id } = useParams();
  const [property, setProperty] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [activeImage, setActiveImage] = useState(0);
  const { toast } = useToast();

  useEffect(() => {
    setLoading(true);
    
    const foundProperty = MOCK_PROPERTIES.find(p => p.id === Number(id));
    
    setTimeout(() => {
      setProperty(foundProperty || null);
      setLoading(false);
    }, 500);
  }, [id]);

  const handleSaveProperty = () => {
    toast({
      title: "Property Saved",
      description: "This property has been added to your favorites.",
    });
  };
  
  const handleShareProperty = () => {
    toast({
      title: "Share Options",
      description: "Link copied to clipboard. Share with friends and family!",
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow flex items-center justify-center py-12">
          <div className="animate-pulse flex flex-col items-center space-y-4">
            <div className="rounded-full bg-gray-200 h-12 w-12"></div>
            <div className="h-4 bg-gray-200 rounded w-48"></div>
            <div className="h-4 bg-gray-200 rounded w-32"></div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!property) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow flex items-center justify-center py-12">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Property Not Found</h1>
            <p className="mb-6">The property you're looking for doesn't exist or has been removed.</p>
            <Link to="/properties">
              <Button>Browse Available Properties</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="container-custom py-4">
          <Link to="/properties" className="inline-flex items-center text-festari-900 hover:text-festari-accent transition-colors">
            <ArrowLeft size={18} className="mr-2" />
            Back to listings
          </Link>
        </div>
        
        <section className="bg-gray-50 py-6">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              <div className="lg:col-span-2 h-[400px] rounded-lg overflow-hidden">
                <img 
                  src={property.images[activeImage]} 
                  alt={property.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="flex flex-row lg:flex-col gap-3 h-full">
                {property.images.slice(0, 3).map((image, index) => (
                  <div 
                    key={index} 
                    className={`relative rounded-lg overflow-hidden h-[120px] cursor-pointer ${index === activeImage ? 'ring-2 ring-festari-accent' : ''}`}
                    onClick={() => setActiveImage(index)}
                  >
                    <img 
                      src={image} 
                      alt={`${property.title} view ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
                
                {property.images.length > 3 && (
                  <div 
                    className="relative rounded-lg overflow-hidden h-[120px] cursor-pointer"
                    onClick={() => setActiveImage(3)}
                  >
                    <img 
                      src={property.images[3]} 
                      alt={`${property.title} view 4`}
                      className="w-full h-full object-cover brightness-50"
                    />
                    <div className="absolute inset-0 flex items-center justify-center text-white font-medium">
                      +{property.images.length - 3} more
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-8">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="flex justify-between items-start mb-3">
                  <Badge className="bg-festari-accent mb-2">{property.type}</Badge>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="icon" onClick={handleSaveProperty}>
                      <Heart size={18} />
                    </Button>
                    <Button variant="outline" size="icon" onClick={handleShareProperty}>
                      <Share2 size={18} />
                    </Button>
                  </div>
                </div>
                
                <h1 className="text-2xl md:text-3xl font-bold mb-2">{property.title}</h1>
                
                <div className="flex items-center text-gray-500 mb-4">
                  <MapPin size={18} className="mr-1" />
                  <span>{property.location}</span>
                </div>
                
                <div className="flex flex-wrap gap-6 mb-6">
                  <div className="flex items-center text-gray-700">
                    <Bed size={20} className="mr-2" />
                    <div>
                      <p className="font-medium">{property.bedrooms}</p>
                      <p className="text-xs">Bedrooms</p>
                    </div>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <Bath size={20} className="mr-2" />
                    <div>
                      <p className="font-medium">{property.bathrooms}</p>
                      <p className="text-xs">Bathrooms</p>
                    </div>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <Square size={20} className="mr-2" />
                    <div>
                      <p className="font-medium">{property.area}</p>
                      <p className="text-xs">Sq Ft</p>
                    </div>
                  </div>
                </div>
                
                <Tabs defaultValue="description" className="w-full">
                  <TabsList className="mb-6">
                    <TabsTrigger value="description">Description</TabsTrigger>
                    <TabsTrigger value="amenities">Amenities</TabsTrigger>
                    <TabsTrigger value="details">Details</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="description">
                    <Card>
                      <CardContent className="pt-6">
                        <p className="text-gray-700 leading-relaxed">
                          {property.description}
                        </p>
                      </CardContent>
                    </Card>
                  </TabsContent>
                  
                  <TabsContent value="amenities">
                    <Card>
                      <CardContent className="pt-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3">
                          {property.amenities.map((amenity, index) => (
                            <div key={index} className="flex items-center">
                              <CheckCircle2 size={16} className="mr-2 text-festari-accent" />
                              <span>{amenity}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                  
                  <TabsContent value="details">
                    <Card>
                      <CardContent className="pt-6">
                        <div className="space-y-4">
                          <div>
                            <h3 className="text-sm font-medium text-gray-500 mb-1">Property Type</h3>
                            <p>{property.type}</p>
                          </div>
                          <div>
                            <h3 className="text-sm font-medium text-gray-500 mb-1">Year Built</h3>
                            <p>{property.yearBuilt}</p>
                          </div>
                          <Separator />
                          <div>
                            <h3 className="text-sm font-medium text-gray-500 mb-2">Nearby Places</h3>
                            <ul className="space-y-2">
                              {property.nearbyPlaces.map((place, index) => (
                                <li key={index} className="flex items-start">
                                  <MapPin size={16} className="mr-2 mt-0.5 text-festari-400" />
                                  <span>{place}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                </Tabs>
              </div>
              
              <div>
                <Card className="mb-6 sticky top-4">
                  <CardContent className="pt-6">
                    <div className="text-center mb-4">
                      <p className="text-sm text-gray-500">Monthly Rent</p>
                      <p className="text-3xl font-bold text-festari-accent">${property.price}</p>
                    </div>
                    
                    <Tabs defaultValue="booking">
                      <TabsList className="grid grid-cols-2 w-full mb-4">
                        <TabsTrigger value="booking">
                          <Calendar size={16} className="mr-2" />
                          Book Viewing
                        </TabsTrigger>
                        <TabsTrigger value="contact">Contact Agent</TabsTrigger>
                      </TabsList>
                      
                      <TabsContent value="booking">
                        <BookingForm propertyId={property.id} propertyTitle={property.title} />
                      </TabsContent>
                      
                      <TabsContent value="contact">
                        <div className="text-center py-4">
                          <p className="text-sm text-muted-foreground mb-4">
                            Contact our team for more information about this property
                          </p>
                          <Button variant="outline" className="w-full mb-2">
                            Email Agent
                          </Button>
                          <Button variant="outline" className="w-full">
                            Call Agent
                          </Button>
                        </div>
                      </TabsContent>
                    </Tabs>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="font-medium mb-4">Similar Properties</h3>
                    <div className="space-y-4">
                      {MOCK_PROPERTIES.filter(p => p.id !== property.id).map(similarProperty => (
                        <Link to={`/property/${similarProperty.id}`} key={similarProperty.id}>
                          <div className="flex space-x-3 hover:bg-gray-50 p-2 rounded">
                            <div className="w-16 h-16 rounded overflow-hidden flex-shrink-0">
                              <img 
                                src={similarProperty.image} 
                                alt={similarProperty.title}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div>
                              <h4 className="text-sm font-medium line-clamp-1">{similarProperty.title}</h4>
                              <p className="text-xs text-gray-500">{similarProperty.location}</p>
                              <p className="text-sm font-medium text-festari-accent">${similarProperty.price}/mo</p>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PropertyDetails;
