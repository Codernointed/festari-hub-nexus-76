import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BarChart3, Briefcase, CheckCircle, Store, User } from 'lucide-react';
// import { CheckCircle } from 'react-icons/fi';
// import { Store } from 'react-icons/md';
// import { BarChart3 } from 'react-icons/bi';
// import { User } from 'react-icons/fa';
// import { Briefcase } from 'react-icons/hi';

const serviceCategories = [
  {
    title: "Trading Services",
    icon: <Store size={24} />,
    items: [
      "Retail Sales",
      "Wholesale Distribution",
      "Import and Export",
      "Product Sourcing",
      "E-commerce Operations"
    ]
  },
  {
    title: "Business Operations",
    icon: <BarChart3 size={24} />,
    items: [
      "Inventory Management",
      "Supply Chain Management",
      "Market Research",
      "Business Expansion",
      "Product Development"
    ]
  },
  {
    title: "Personal Services",
    icon: <User size={24} />,
    items: [
      "Personal Care Services",
      "Event Planning",
      "Home Services",
      "Transportation Services",
      "Pet Care Services"
    ]
  },
  {
    title: "Professional Services",
    icon: <Briefcase size={24} />,
    items: [
      "Digital Marketing",
      "Health and Wellness",
      "Hospitality Services",
      "Cleaning Services",
      "Mobile Money Services"
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
        <section className="bg-gradient-to-r from-festari-900 to-festari-800 py-16 text-white">
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
