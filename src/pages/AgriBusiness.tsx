import { useState, useEffect } from 'react';
import { Leaf } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ProductCard from '@/components/agriculture/ProductCard';
import ProductFilters from '@/components/agriculture/ProductFilters';
import InquiryModal from '@/components/agriculture/InquiryModal';
import { agricultureProducts } from '@/data/agricultureProducts';
import { AgricultureProduct } from '@/types/agriculture';
import { useNavigate } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Sprout, ClipboardList, Wrench, BarChart, CheckCircle } from 'lucide-react';

const serviceCategories = [
  {
    title: "Core Farming",
    icon: <Sprout size={24} />,
    items: [
      "Crop Farming",
      "Livestock Farming",
      "Organic Farming",
      "Greenhouse and Hydroponic Farming",
      "Sustainable Agriculture"
    ]
  },
  {
    title: "Advisory & Support",
    icon: <ClipboardList size={24} />,
    items: [
      "Agribusiness Consulting",
      "Farm Management Services",
      "Agricultural Research",
      "Farm Education and Training",
      "Rural Development"
    ]
  },
  {
    title: "Equipment & Analysis",
    icon: <Wrench size={24} />,
    items: [
      "Agricultural Equipment Sales and Rental",
      "Crop and Soil Analysis",
      "Pest and Disease Control",
      "Sale of Agrochemicals"
    ]
  },
  {
    title: "Business & Marketing",
    icon: <BarChart size={24} />,
    items: [
      "Agricultural Marketing",
      "Farm-to-Table Sales",
      "Agribusiness Investment",
      "Agricultural Supply Chain Management",
      "Agro-processing"
    ]
  }
];

const AgriBusiness = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortOrder, setSortOrder] = useState('newest');
  const [showAdvancedFilters, setShowAdvancedFilters] = useState(false);
  const [savedProducts, setSavedProducts] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(6);
  const [inquiryProduct, setInquiryProduct] = useState<AgricultureProduct | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 3000]);
  const { toast } = useToast();
  const navigate = useNavigate();
  
  const maxPrice = Math.max(...agricultureProducts.map(product => 
    product.priceNumeric || 0
  ));
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);
  
  useEffect(() => {
    const saved = localStorage.getItem('savedAgricultureProducts');
    if (saved) {
      setSavedProducts(JSON.parse(saved));
    }
    
    setPriceRange([0, maxPrice]);
  }, [maxPrice]);
  
  const toggleSaveProduct = (productId: string) => {
    let newSavedProducts;
    
    if (savedProducts.includes(productId)) {
      newSavedProducts = savedProducts.filter(id => id !== productId);
      toast({
        title: "Product removed",
        description: "The product has been removed from your saved items.",
      });
    } else {
      newSavedProducts = [...savedProducts, productId];
      toast({
        title: "Product saved",
        description: "The product has been added to your saved items.",
        variant: "default",
      });
    }
    
    setSavedProducts(newSavedProducts);
    localStorage.setItem('savedAgricultureProducts', JSON.stringify(newSavedProducts));
  };
  
  const handleInquiry = (productId: string) => {
    const product = agricultureProducts.find(p => p.id === productId);
    if (product) {
      setInquiryProduct(product);
      setIsModalOpen(true);
    }
  };
  
  const handleInquirySubmit = (formData: any) => {
    toast({
      title: "Inquiry Sent",
      description: "Your inquiry has been sent. We'll contact you shortly.",
      variant: "default",
    });
    setIsModalOpen(false);
  };
  
  const resetFilters = () => {
    setSearchTerm('');
    setSelectedCategory('All');
    setSortOrder('newest');
    setPriceRange([0, maxPrice]);
  };
  
  const getFilteredProducts = () => {
    let filtered = agricultureProducts.filter(product => {
      const matchesSearch = 
        product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.location.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
      
      const priceValue = product.priceNumeric || 0;
      const matchesPrice = priceValue >= priceRange[0] && priceValue <= priceRange[1];
      
      return matchesSearch && matchesCategory && matchesPrice;
    });
    
    switch (sortOrder) {
      case 'price-asc':
        filtered.sort((a, b) => (a.priceNumeric || 0) - (b.priceNumeric || 0));
        break;
      case 'price-desc':
        filtered.sort((a, b) => (b.priceNumeric || 0) - (a.priceNumeric || 0));
        break;
      case 'name-asc':
        filtered.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case 'name-desc':
        filtered.sort((a, b) => b.title.localeCompare(a.title));
        break;
      case 'newest':
      default:
        filtered.sort((a, b) => {
          if (a.dateAdded && b.dateAdded) {
            return new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime();
          }
          return 0;
        });
    }
    
    return filtered;
  };
  
  const filteredProducts = getFilteredProducts();
  
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
  
  return (
    <div className={`transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <Header />
      <main className="pt-20">
        <section className="relative py-20 bg-festari-900 text-white">
          <div className="container-custom">
            <div className="max-w-2xl">
              <h1 className="text-3xl md:text-4xl font-display font-bold mb-4">Agriculture Marketplace</h1>
              <p className="text-festari-100 mb-8">Browse our selection of agricultural products from trusted farmers and suppliers.</p>
              
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for agricultural products..."
                  className="w-full pl-12 pr-4 py-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-accent"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <Leaf className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/60" size={18} />
              </div>
            </div>
          </div>
        </section>
        
        <section className="section-padding bg-festari-50">
          <div className="container-custom">
            <ProductFilters 
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              sortOrder={sortOrder}
              setSortOrder={setSortOrder}
              priceRange={priceRange}
              setPriceRange={setPriceRange}
              showAdvancedFilters={showAdvancedFilters}
              setShowAdvancedFilters={setShowAdvancedFilters}
              resetFilters={resetFilters}
              maxPrice={maxPrice}
            />
            
            <div className="mb-6">
              <h2 className="text-xl font-display font-bold text-festari-900">
                {filteredProducts.length} Products Found
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentProducts.map((product) => (
                <ProductCard 
                  key={product.id}
                  product={product}
                  onInquiry={handleInquiry}
                  onSave={toggleSaveProduct}
                  isSaved={savedProducts.includes(product.id)}
                />
              ))}
            </div>
            
            {filteredProducts.length === 0 && (
              <div className="bg-white rounded-lg p-8 text-center">
                <div className="flex justify-center mb-4">
                  <Leaf size={48} className="text-festari-300" />
                </div>
                <h3 className="text-xl font-semibold text-festari-800 mb-2">No products found</h3>
                <p className="text-festari-600 mb-4">Try adjusting your search criteria or filters</p>
                <Button onClick={resetFilters}>
                  Reset Filters
                </Button>
              </div>
            )}
            
            {filteredProducts.length > 0 && (
              <div className="mt-12 flex justify-center">
                <div className="flex flex-wrap justify-center gap-2">
                  <Button
                    variant="outline"
                    onClick={() => paginate(Math.max(1, currentPage - 1))}
                    disabled={currentPage === 1}
                  >
                    Previous
                  </Button>
                  
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
                    <Button
                      key={number}
                      variant={currentPage === number ? "default" : "outline"}
                      onClick={() => paginate(number)}
                    >
                      {number}
                    </Button>
                  ))}
                  
                  <Button
                    variant="outline"
                    onClick={() => paginate(Math.min(totalPages, currentPage + 1))}
                    disabled={currentPage === totalPages}
                  >
                    Next
                  </Button>
                </div>
              </div>
            )}
          </div>
        </section>

        <section className="py-12 bg-gray-50">
          <div className="container-custom">
            <h2 className="text-2xl font-display font-bold mb-8">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
            </div>
          </div>
        </section>

        <InquiryModal
          product={inquiryProduct}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSubmit={handleInquirySubmit}
        />
      </main>
      <Footer />
    </div>
  );
};

export default AgriBusiness;
