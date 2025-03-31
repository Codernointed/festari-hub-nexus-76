import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BarChart3, Briefcase, CheckCircle, Store, User } from 'lucide-react';
import Logo from '@/components/common/Logo';

const serviceCategories = [
  {
    title: "Trading & Distribution",
    icon: <Store size={24} />,
    items: [
      "Retail Sales",
      "Wholesale Distribution",
      "Import and Export",
      "Product Sourcing",
      "E-commerce Operations",
      "General Trading and Merchandise",
      "Trade Shows and Exhibitions"
    ]
  },
  {
    title: "Business Operations",
    icon: <BarChart3 size={24} />,
    items: [
      "Inventory Management",
      "Supply Chain Management",
      "Marketing and Promotion",
      "Customer Service",
      "Product Quality Control",
      "Vendor Relationships",
      "Market Research",
      "Logistics and Distribution",
      "Inventory Forecasting",
      "Product Development",
      "Business Expansion"
    ]
  },
  {
    title: "Personal Services",
    icon: <User size={24} />,
    items: [
      "Delivery Services",
      "Waste Management Services",
      "Catering Services",
      "Barbering Services",
      "Hairdressing and Salon",
      "Clothing and Boutique",
      "House Cleaning Services",
      "Event Planning and Hosting",
      "Home Repair and Maintenance",
      "Lawn Care and Landscaping",
      "Transportation Services",
      "Personal Shopping and Errand Services",
      "Pet Care Services"
    ]
  },
  {
    title: "Professional Services",
    icon: <Briefcase size={24} />,
    items: [
      "Digital Marketing Services",
      "Health and Wellness Services",
      "Hospitality Services",
      "Home Renovation and Remodeling",
      "Mobile Money Services",
      "Credit Transfer Services"
    ]
  }
];

const Enterprise = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const filteredServices = serviceCategories.filter(category =>
    category.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    category.items.some(item => 
      item.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const tradingServices = serviceCategories.find(cat => cat.title === "Trading Services")?.items || [];
  const personalServices = serviceCategories.find(cat => cat.title === "Personal Services")?.items || [];

  return (
    <div className={`min-h-screen flex flex-col transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <Header />
      <main className="flex-grow">
        <section className="relative py-16 bg-gradient-to-r from-festari-900 to-festari-800 text-white overflow-hidden">
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 opacity-5">
            <Logo variant="icon" theme="light" size="lg" className="w-96" />
          </div>
          <div className="container-custom">
            <h1 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Festari Enterprise
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mb-8">
              Comprehensive business solutions and services for your diverse needs
            </p>
            <div className="max-w-xl">
              <Input
                type="search"
                placeholder="Search services..."
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container-custom">
            <Tabs defaultValue="all" className="w-full">
              <TabsList className="mb-8">
                <TabsTrigger value="all">All Services</TabsTrigger>
                <TabsTrigger value="trading">Trading Services</TabsTrigger>
                <TabsTrigger value="personal">Personal Services</TabsTrigger>
              </TabsList>

              <TabsContent value="all" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {serviceCategories.map((category, idx) => (
                  <Card key={idx} className="hover:shadow-md transition-shadow">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-accent/10 text-accent">
                          {category.icon}
                        </div>
                        <CardTitle className="text-lg">{category.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {category.items.map((item, i) => (
                          <li key={i} className="flex items-center gap-2 group">
                            <CheckCircle className="h-4 w-4 text-accent" />
                            <Link 
                              to="/consultation"
                              className="text-sm text-festari-700 hover:text-accent transition-colors"
                            >
                              {item}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>

              <TabsContent value="trading" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {tradingServices.map((service) => (
                  <Card key={service} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold mb-2">{service}</h3>
                      <Button asChild variant="outline" className="w-full">
                        <Link to="/consultation">Request Service</Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>

              <TabsContent value="personal" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {personalServices.map((service) => (
                  <Card key={service} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold mb-2">{service}</h3>
                      <Button asChild variant="outline" className="w-full">
                        <Link to="/consultation">Request Service</Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Enterprise;
