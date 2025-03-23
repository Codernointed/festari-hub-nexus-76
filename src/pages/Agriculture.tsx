
import { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Search, Filter, ChevronDown, ShoppingCart, Leaf, Tractor, Bird } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';

// Dummy agriculture product data
const agricultureProducts = [
  {
    id: 'agri1',
    title: 'Organic Red Apples',
    image: 'https://images.unsplash.com/photo-1579613832125-5d34a13ffe2a?auto=format&q=80',
    price: '$25/box',
    category: 'Crops',
    location: 'Central Farm',
    quantity: '10 kg box',
    description: 'Freshly harvested organic red apples. Perfect for direct consumption or cooking. Pesticide-free and grown using sustainable farming methods.',
    path: '/agriculture/organic-apples',
  },
  {
    id: 'agri2',
    title: 'Hampshire Piglets',
    image: 'https://images.unsplash.com/photo-1604848698030-c434ba08ece1?auto=format&q=80',
    price: '$120/each',
    category: 'Livestock',
    location: 'Southern Ranch',
    quantity: '5 available',
    description: 'Hampshire piglets, 8 weeks old, well-fed and healthy. Great for breeding or raising for meat. Veterinary checks completed and documentation available.',
    path: '/agriculture/hampshire-piglets',
  },
  {
    id: 'agri3',
    title: 'Tractor Farming Equipment',
    image: 'https://images.unsplash.com/photo-1530267981375-f0de937f5f13?auto=format&q=80',
    price: '$8,500',
    category: 'Machinery',
    location: 'Eastern District',
    quantity: '1 unit',
    description: 'Used but well-maintained tractor with attachments for plowing and harvesting. Low mileage and recently serviced. Perfect for small to medium farms.',
    path: '/agriculture/tractor-equipment',
  },
  {
    id: 'agri4',
    title: 'Organic Vegetable Seeds',
    image: 'https://images.unsplash.com/photo-1471193945509-9ad0617afabf?auto=format&q=80',
    price: '$15/pack',
    category: 'Seeds',
    location: 'Northwest Gardens',
    quantity: '50 packs',
    description: 'Collection of organic vegetable seeds including tomatoes, carrots, lettuce, and bell peppers. Non-GMO and certified organic seeds for your home garden.',
    path: '/agriculture/vegetable-seeds',
  },
  {
    id: 'agri5',
    title: 'Free-Range Chickens',
    image: 'https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?auto=format&q=80',
    price: '$18/each',
    category: 'Livestock',
    location: 'Hillside Poultry',
    quantity: '25 available',
    description: 'Free-range chickens raised on organic feed. Excellent for eggs or meat production. Healthy birds with no hormones or antibiotics.',
    path: '/agriculture/free-range-chickens',
  },
  {
    id: 'agri6',
    title: 'Premium Organic Fertilizer',
    image: 'https://images.unsplash.com/photo-1622383563227-04401ab4e5ea?auto=format&q=80',
    price: '$30/bag',
    category: 'Supplies',
    location: 'Green Earth Suppliers',
    quantity: '20 kg bag',
    description: 'Premium organic fertilizer made from composted plant materials and animal manure. Perfect for all types of crops and garden plants. Enhances soil health and boosts yields.',
    path: '/agriculture/organic-fertilizer',
  },
];

const Agriculture = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const { toast } = useToast();
  
  // Filter products based on search term and filters
  const filteredProducts = agricultureProducts.filter(product => {
    const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          product.location.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const handleInquiry = (productId: string) => {
    toast({
      title: "Inquiry Sent",
      description: "Your inquiry has been sent to the admin. They will contact you shortly.",
    });
  };

  const getCategoryIcon = (category: string) => {
    switch(category) {
      case 'Crops':
        return <Leaf size={16} />;
      case 'Livestock':
        return <Bird size={16} />;
      case 'Machinery':
        return <Tractor size={16} />;
      default:
        return <Leaf size={16} />;
    }
  };

  return (
    <div>
      <Header />
      <main className="pt-20">
        {/* Hero section */}
        <section className="relative py-20 bg-festari-900 text-white">
          <div className="container-custom">
            <div className="max-w-2xl">
              <h1 className="text-3xl md:text-4xl font-display font-bold mb-4">Agriculture Marketplace</h1>
              <p className="text-festari-100 mb-8">Browse our selection of agricultural products from trusted farmers and suppliers.</p>
              
              {/* Search bar */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for agricultural products..."
                  className="w-full pl-12 pr-4 py-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-accent"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/60" size={18} />
              </div>
            </div>
          </div>
        </section>
        
        {/* Agriculture product listings */}
        <section className="section-padding bg-festari-50">
          <div className="container-custom">
            {/* Filters */}
            <div className="flex flex-col md:flex-row gap-4 mb-10 p-6 bg-white rounded-lg shadow-sm">
              <div className="flex flex-col md:flex-row gap-4 w-full">
                <div className="w-full md:w-1/3">
                  <label className="text-sm text-festari-600 mb-1 block">Product Category</label>
                  <div className="relative">
                    <select
                      className="w-full p-2 border border-festari-200 rounded-md appearance-none bg-white pr-10 focus:outline-none focus:ring-1 focus:ring-accent"
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                    >
                      <option value="All">All Categories</option>
                      <option value="Crops">Crops</option>
                      <option value="Livestock">Livestock</option>
                      <option value="Machinery">Machinery</option>
                      <option value="Seeds">Seeds</option>
                      <option value="Supplies">Supplies</option>
                    </select>
                    <ChevronDown size={16} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-festari-500" />
                  </div>
                </div>
                
                <div className="w-full md:w-1/3">
                  <label className="text-sm text-festari-600 mb-1 block">Sort By</label>
                  <div className="relative">
                    <select
                      className="w-full p-2 border border-festari-200 rounded-md appearance-none bg-white pr-10 focus:outline-none focus:ring-1 focus:ring-accent"
                    >
                      <option value="newest">Newest First</option>
                      <option value="price-asc">Price (Low to High)</option>
                      <option value="price-desc">Price (High to Low)</option>
                    </select>
                    <ChevronDown size={16} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-festari-500" />
                  </div>
                </div>
              </div>
              
              <button className="bg-festari-100 text-festari-800 hover:bg-festari-200 px-4 py-2 rounded flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent md:self-end">
                <Filter size={16} />
                <span>More Filters</span>
              </button>
            </div>
            
            {/* Results count */}
            <div className="mb-6">
              <h2 className="text-xl font-display font-bold text-festari-900">
                {filteredProducts.length} Products Found
              </h2>
            </div>
            
            {/* Product grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
                <Card 
                  key={product.id}
                  className="overflow-hidden hover:shadow-md transition-all duration-300 group"
                >
                  <div className="relative h-60 overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.title} 
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4 flex gap-1">
                      <Badge className="bg-festari-accent text-white">
                        <span className="flex items-center gap-1">
                          {getCategoryIcon(product.category)}
                          {product.category}
                        </span>
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-semibold text-festari-900 group-hover:text-accent transition-colors">
                        {product.title}
                      </h3>
                    </div>
                    <p className="text-festari-600 mb-2">
                      <span className="flex items-center gap-1">
                        Location: {product.location}
                      </span>
                    </p>
                    <p className="text-sm text-festari-500 mb-3">
                      Quantity: {product.quantity}
                    </p>
                    <p className="text-sm text-festari-600 mb-4 line-clamp-2">
                      {product.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold text-accent">{product.price}</span>
                      <Button 
                        onClick={() => handleInquiry(product.id)}
                        className="bg-festari-accent text-white hover:bg-festari-accent/90 flex items-center gap-1"
                      >
                        <ShoppingCart size={16} />
                        Inquire
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            {/* Empty state */}
            {filteredProducts.length === 0 && (
              <div className="bg-white rounded-lg p-8 text-center">
                <div className="flex justify-center mb-4">
                  <Leaf size={48} className="text-festari-300" />
                </div>
                <h3 className="text-xl font-semibold text-festari-800 mb-2">No products found</h3>
                <p className="text-festari-600 mb-4">Try adjusting your search criteria or filters</p>
                <Button 
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('All');
                  }}
                >
                  Reset Filters
                </Button>
              </div>
            )}
            
            {/* Pagination (simplified) */}
            {filteredProducts.length > 0 && (
              <div className="mt-12 flex justify-center">
                <div className="flex space-x-1">
                  <button className="px-4 py-2 border border-festari-300 rounded-md text-festari-800 bg-white hover:bg-festari-50">
                    Previous
                  </button>
                  <button className="px-4 py-2 bg-accent text-white rounded-md hover:bg-accent/90">
                    1
                  </button>
                  <button className="px-4 py-2 border border-festari-300 rounded-md text-festari-800 bg-white hover:bg-festari-50">
                    2
                  </button>
                  <button className="px-4 py-2 border border-festari-300 rounded-md text-festari-800 bg-white hover:bg-festari-50">
                    Next
                  </button>
                </div>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Agriculture;
