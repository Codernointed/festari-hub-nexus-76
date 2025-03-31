import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { serviceCategories } from '@/data/services';

const Enterprise = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const enterpriseServices = serviceCategories.find(cat => cat.title === "enterprise")?.activities || [];
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const filteredServices = enterpriseServices.filter(service =>
    service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    service.description?.toLowerCase().includes(searchTerm.toLowerCase())
  );

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

              <TabsContent value="all" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredServices.map((service) => (
                  <Card key={service.title} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                      <p className="text-gray-600 mb-4">{service.description}</p>
                      <Button asChild variant="outline" className="w-full">
                        <Link to="/consultation">Request Service</Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>

              <TabsContent value="trading" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredServices.slice(0, 18).map((service) => (
                  <Card key={service.title} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                      <p className="text-gray-600 mb-4">{service.description}</p>
                      <Button asChild variant="outline" className="w-full">
                        <Link to="/consultation">Request Service</Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>

              <TabsContent value="personal" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredServices.slice(18).map((service) => (
                  <Card key={service.title} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                      <p className="text-gray-600 mb-4">{service.description}</p>
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
