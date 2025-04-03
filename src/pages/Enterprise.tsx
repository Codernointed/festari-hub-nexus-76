
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  BarChart3, 
  Briefcase, 
  CheckCircle, 
  Store, 
  User, 
  Search, 
  ShoppingCart, 
  Globe, 
  Locate, 
  Package, 
  UserCheck, 
  LineChart, 
  TrendingUp, 
  Truck, 
  DollarSign, 
  FileSpreadsheet, 
  Clipboard, 
  PackageCheck, 
  Tag, 
  UsersRound, 
  Buildings, 
  Truck as TruckDelivery, 
  Trash2, 
  UtensilsCrossed, 
  Scissors, 
  Home, 
  Calendar, 
  Car, 
  ShoppingBag, 
  Paw, 
  LayoutDashboard, 
  Heart, 
  Hotel, 
  Download,
  MessageSquare
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import Logo from '@/components/common/Logo';
import ServiceGrid from '@/components/common/ServiceGrid';
import ServiceCard from '@/components/common/ServiceCard';
import ServiceCategory from '@/components/common/ServiceCategory';
import ConsultationRequestForm from '@/components/common/ConsultationRequestForm';

// Updated service categories with icons
const tradingServiceCategories = [
  {
    title: "Trading & Distribution",
    icon: Store,
    description: "Comprehensive retail, wholesale, and distribution services",
    items: [
      { title: "Retail Sales", icon: ShoppingCart, description: "Direct-to-consumer sales operations" },
      { title: "Wholesale Distribution", icon: Package, description: "Business-to-business product distribution" },
      { title: "Import and Export", icon: Globe, description: "International trade and customs services" },
      { title: "Product Sourcing", icon: Locate, description: "Strategic procurement and vendor selection" },
      { title: "E-commerce Operations", icon: ShoppingCart, description: "Online retail platforms and management" },
      { title: "General Trading and Merchandise", icon: Tag, description: "Diverse product trading services" },
      { title: "Trade Shows and Exhibitions", icon: Buildings, description: "Exhibition coordination and participation" }
    ]
  },
  {
    title: "Business Operations",
    icon: BarChart3,
    description: "Strategic business management and operational services",
    items: [
      { title: "Inventory Management", icon: Clipboard, description: "Efficient stock control systems" },
      { title: "Supply Chain Management", icon: Truck, description: "End-to-end supply chain optimization" },
      { title: "Marketing and Promotion", icon: TrendingUp, description: "Strategic marketing campaigns and brand building" },
      { title: "Customer Service", icon: UserCheck, description: "Superior customer support solutions" },
      { title: "Product Quality Control", icon: PackageCheck, description: "Rigorous quality assurance processes" },
      { title: "Vendor Relationships", icon: UserCheck, description: "Strategic supplier management" },
      { title: "Market Research", icon: Search, description: "Comprehensive market analysis and insights" },
      { title: "Logistics and Distribution", icon: Truck, description: "Efficient product movement and delivery" },
      { title: "Inventory Forecasting", icon: LineChart, description: "Predictive inventory management" },
      { title: "Product Development", icon: Package, description: "New product creation and improvement" },
      { title: "Business Expansion", icon: TrendingUp, description: "Strategic growth planning and execution" }
    ]
  },
  {
    title: "Personal Services",
    icon: User,
    description: "Diverse personal and household service solutions",
    items: [
      { title: "Delivery Services", icon: TruckDelivery, description: "Reliable package and food delivery" },
      { title: "Waste Management Services", icon: Trash2, description: "Residential and commercial waste solutions" },
      { title: "Catering Services", icon: UtensilsCrossed, description: "Professional food preparation and service" },
      { title: "Barbering Services", icon: Scissors, description: "Professional hair cutting and styling" },
      { title: "Hairdressing and Salon", icon: Scissors, description: "Complete hair care and beauty services" },
      { title: "Clothing and Boutique", icon: ShoppingBag, description: "Fashion retail and styling services" },
      { title: "House Cleaning Services", icon: Home, description: "Thorough residential cleaning" },
      { title: "Event Planning and Hosting", icon: Calendar, description: "Comprehensive event management" },
      { title: "Home Repair and Maintenance", icon: Home, description: "Reliable home improvement services" },
      { title: "Lawn Care and Landscaping", icon: Home, description: "Professional outdoor maintenance" },
      { title: "Transportation Services", icon: Car, description: "Reliable personal transport solutions" },
      { title: "Personal Shopping and Errand Services", icon: ShoppingBag, description: "Convenient personal assistance" },
      { title: "Pet Care Services", icon: Paw, description: "Professional animal care and services" }
    ]
  },
  {
    title: "Professional Services",
    icon: Briefcase,
    description: "Specialized business and professional support services",
    items: [
      { title: "Digital Marketing Services", icon: LayoutDashboard, description: "Strategic online marketing solutions" },
      { title: "Health and Wellness Services", icon: Heart, description: "Holistic health and wellness programs" },
      { title: "Hospitality Services", icon: Hotel, description: "Professional accommodation management" },
      { title: "Home Renovation and Remodeling", icon: Home, description: "Complete home transformation services" },
      { title: "Mobile Money Services", icon: DollarSign, description: "Convenient digital payment solutions" },
      { title: "Credit Transfer Services", icon: DollarSign, description: "Reliable financial transfer services" }
    ]
  }
];

const Enterprise = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredServices, setFilteredServices] = useState<any[]>([]);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  // Handle service search
  const handleSearch = (query: string) => {
    setSearchTerm(query);
    
    if (!query.trim()) {
      setFilteredServices([]);
      return;
    }
    
    const results = tradingServiceCategories.flatMap(category => 
      category.items.filter(item => 
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        (item.description && item.description.toLowerCase().includes(query.toLowerCase()))
      ).map(item => ({
        ...item,
        category: category.title
      }))
    );
    
    setFilteredServices(results);
  };

  return (
    <div className={`min-h-screen flex flex-col transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <Header />
      <main className="flex-grow">
        {/* Hero section */}
        <section className="relative py-16 bg-gradient-to-r from-chili to-chili/80 text-white overflow-hidden">
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 opacity-5">
            <Logo variant="icon" theme="light" size="lg" className="w-96" />
          </div>
          <div className="container-custom">
            <div className="max-w-2xl">
              <Badge className="bg-white/20 text-white hover:bg-white/30 mb-4">Trading & Services</Badge>
              <h1 className="text-3xl md:text-4xl font-display font-bold mb-4">
                Festari Enterprise
              </h1>
              <p className="text-lg text-white/80 max-w-2xl mb-8">
                Comprehensive business solutions and services for your diverse personal and professional needs
              </p>
              <div className="max-w-xl relative">
                <Input
                  type="search"
                  placeholder="Search services..."
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60 pl-10"
                  value={searchTerm}
                  onChange={(e) => handleSearch(e.target.value)}
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60" size={18} />
              </div>
              
              {filteredServices.length > 0 && (
                <div className="mt-4 bg-white text-festari-900 rounded-lg shadow-lg p-4 max-h-60 overflow-y-auto absolute z-10 w-full max-w-xl">
                  <p className="text-sm font-medium text-festari-600 mb-2">
                    {filteredServices.length} service{filteredServices.length !== 1 ? 's' : ''} found
                  </p>
                  <div className="space-y-2">
                    {filteredServices.map((service, idx) => (
                      <Link 
                        key={idx} 
                        to={`/consultation?service=${encodeURIComponent(service.title)}&category=${encodeURIComponent(service.category)}`}
                        className="flex items-start p-2 hover:bg-festari-50 rounded group"
                      >
                        <div className="bg-chili/10 text-chili p-1 rounded mr-3 flex-shrink-0">
                          {service.icon && <service.icon size={18} />}
                        </div>
                        <div>
                          <p className="font-medium group-hover:text-chili transition-colors">{service.title}</p>
                          <p className="text-xs text-festari-600">{service.category}</p>
                          {service.description && <p className="text-xs text-festari-500 mt-1">{service.description}</p>}
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Main content */}
        <section className="py-12 bg-festari-50">
          <div className="container-custom">
            <Tabs defaultValue="all" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="all" className="flex items-center gap-2">
                  <Store size={16} />
                  <span>All Services</span>
                </TabsTrigger>
                <TabsTrigger value="business" className="flex items-center gap-2">
                  <Briefcase size={16} />
                  <span>Business Services</span>
                </TabsTrigger>
                <TabsTrigger value="consultation" className="flex items-center gap-2">
                  <MessageSquare size={16} />
                  <span>Consultation</span>
                </TabsTrigger>
              </TabsList>

              <TabsContent value="all" className="space-y-12">
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-display font-bold mb-3">Our Enterprise Services</h2>
                  <p className="text-festari-600 max-w-2xl mx-auto">
                    Comprehensive solutions for trading, business operations, personal services, and professional needs
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
                  {tradingServiceCategories.map((category, idx) => (
                    <Button 
                      key={idx}
                      variant={activeCategory === category.title ? "default" : "outline"}
                      className="flex items-center gap-2 justify-start"
                      onClick={() => setActiveCategory(activeCategory === category.title ? null : category.title)}
                    >
                      <category.icon size={18} />
                      <span>{category.title}</span>
                    </Button>
                  ))}
                  {activeCategory && (
                    <Button 
                      variant="ghost" 
                      className="text-festari-500"
                      onClick={() => setActiveCategory(null)}
                    >
                      Clear Filter
                    </Button>
                  )}
                </div>
                
                <div className="space-y-12">
                  {tradingServiceCategories
                    .filter(category => !activeCategory || category.title === activeCategory)
                    .map((category, idx) => (
                      <div key={idx} className="space-y-6">
                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded-lg bg-chili/10 text-chili">
                            <category.icon size={24} />
                          </div>
                          <div>
                            <h3 className="text-xl font-semibold">{category.title}</h3>
                            <p className="text-festari-600 text-sm">{category.description}</p>
                          </div>
                        </div>
                        
                        <ServiceGrid columns={3}>
                          {category.items.map((service, serviceIdx) => (
                            <ServiceCard
                              key={serviceIdx}
                              title={service.title}
                              description={service.description}
                              icon={service.icon || category.icon}
                              color="bg-chili/5 text-chili"
                              link={`/consultation?service=${encodeURIComponent(service.title)}&category=${encodeURIComponent(category.title)}`}
                            />
                          ))}
                        </ServiceGrid>
                      </div>
                    ))}
                </div>
              </TabsContent>

              <TabsContent value="business" className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {tradingServiceCategories
                    .filter(category => category.title === "Trading & Distribution" || category.title === "Business Operations")
                    .flatMap(category => category.items)
                    .map((service, idx) => (
                      <Card key={idx} className="hover:shadow-md transition-shadow">
                        <CardContent className="p-6">
                          <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-lg bg-chili/10 text-chili">
                              {service.icon && <service.icon size={20} />}
                            </div>
                            <h3 className="text-lg font-semibold">{service.title}</h3>
                          </div>
                          <p className="text-sm text-festari-600 mb-4">{service.description}</p>
                          <Button asChild variant="outline" className="w-full">
                            <Link to={`/consultation?service=${encodeURIComponent(service.title)}`}>Request Service</Link>
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                </div>
              </TabsContent>

              <TabsContent value="consultation">
                <div className="max-w-3xl mx-auto">
                  <ConsultationRequestForm 
                    serviceCategories={[
                      {
                        title: "Enterprise",
                        path: "/enterprise",
                        description: "Comprehensive business and service solutions",
                        activities: tradingServiceCategories.flatMap(category => 
                          category.items.map(item => ({ 
                            title: item.title,
                            description: item.description
                          }))
                        )
                      }
                    ]}
                    title="Enterprise Services Consultation"
                    description="Our team is ready to assist with your business and personal service needs. Let us know how we can help."
                  />
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
        
        {/* Benefits section */}
        <section className="py-16 bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-2xl font-display font-bold mb-3">Why Choose Festari Enterprise</h2>
              <p className="text-festari-600 max-w-2xl mx-auto">
                We combine exceptional service quality with business expertise to deliver solutions that exceed expectations
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="bg-festari-50 p-8 rounded-lg text-center">
                <div className="p-3 rounded-full bg-chili/10 text-chili inline-block mb-4">
                  <CheckCircle size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Quality Assurance</h3>
                <p className="text-festari-600">
                  Rigorous quality control processes ensure exceptional service delivery.
                </p>
              </div>
              
              <div className="bg-festari-50 p-8 rounded-lg text-center">
                <div className="p-3 rounded-full bg-chili/10 text-chili inline-block mb-4">
                  <UserCheck size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Expert Team</h3>
                <p className="text-festari-600">
                  Highly skilled professionals with extensive industry experience.
                </p>
              </div>
              
              <div className="bg-festari-50 p-8 rounded-lg text-center">
                <div className="p-3 rounded-full bg-chili/10 text-chili inline-block mb-4">
                  <Globe size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Global Reach</h3>
                <p className="text-festari-600">
                  International connections for import, export, and distribution.
                </p>
              </div>
              
              <div className="bg-festari-50 p-8 rounded-lg text-center">
                <div className="p-3 rounded-full bg-chili/10 text-chili inline-block mb-4">
                  <TrendingUp size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Growth Focus</h3>
                <p className="text-festari-600">
                  Strategic solutions designed to accelerate your business growth.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-chili text-white">
          <div className="container-custom text-center">
            <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">
              Ready to Elevate Your Business?
            </h2>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto">
              Whether you need trading solutions, operational support, or personal services, our team is ready to help you succeed.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-white text-chili hover:bg-white/90">
                <Link to="/consultation">Request Enterprise Consultation</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
                <Link to="/contact">Contact Our Team</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Enterprise;
