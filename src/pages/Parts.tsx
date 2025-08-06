
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  Search, 
  Filter, 
  Star, 
  ShoppingCart,
  Grid,
  List,
  Settings,
  Shield,
  Zap,
  Car
} from "lucide-react";

const Parts = () => {
  const categories = [
    { name: "All Parts", count: 1250, active: true },
    { name: "Engine", count: 350, active: false },
    { name: "Brakes", count: 220, active: false },
    { name: "Electrical", count: 180, active: false },
    { name: "Suspension", count: 160, active: false },
    { name: "Filters", count: 120, active: false },
    { name: "Belts & Hoses", count: 95, active: false },
    { name: "Lighting", count: 85, active: false }
  ];

  const parts = [
    {
      id: 1,
      name: "Premium Brake Pad Set - Front",
      brand: "Wagner",
      price: 89.99,
      originalPrice: 119.99,
      image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=400&h=300&fit=crop",
      rating: 4.8,
      reviews: 156,
      category: "Brakes",
      inStock: true,
      partNumber: "WBP-001"
    },
    {
      id: 2,
      name: "High-Flow Oil Filter",
      brand: "Fram",
      price: 24.99,
      originalPrice: 32.99,
      image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=400&h=300&fit=crop",
      rating: 4.9,
      reviews: 243,
      category: "Filters",
      inStock: true,
      partNumber: "FRM-205"
    },
    {
      id: 3,
      name: "Iridium Spark Plugs (4-Pack)",
      brand: "NGK",
      price: 45.99,
      originalPrice: 59.99,
      image: "https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=400&h=300&fit=crop",
      rating: 4.7,
      reviews: 98,
      category: "Engine",
      inStock: true,
      partNumber: "NGK-IR45"
    },
    {
      id: 4,
      name: "Cabin Air Filter",
      brand: "Mann-Filter",
      price: 19.99,
      originalPrice: 25.99,
      image: "https://images.unsplash.com/photo-1558618644-fcd25c85cd64?w=400&h=300&fit=crop",
      rating: 4.6,
      reviews: 187,
      category: "Filters",
      inStock: true,
      partNumber: "MAN-CF1"
    },
    {
      id: 5,
      name: "LED Headlight Bulbs (Pair)",
      brand: "Philips",
      price: 129.99,
      originalPrice: 159.99,
      image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=400&h=300&fit=crop",
      rating: 4.9,
      reviews: 324,
      category: "Lighting",
      inStock: true,
      partNumber: "PHI-LED9"
    },
    {
      id: 6,
      name: "Shock Absorber - Rear",
      brand: "Monroe",
      price: 78.99,
      originalPrice: 95.99,
      image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=400&h=300&fit=crop",
      rating: 4.5,
      reviews: 142,
      category: "Suspension",
      inStock: false,
      partNumber: "MON-SH2"
    }
  ];

  const topCategories = [
    {
      name: "Engine Parts",
      icon: Settings,
      image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=400&h=250&fit=crop",
      count: "350+ parts"
    },
    {
      name: "Brake Components",
      icon: Shield,
      image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=400&h=250&fit=crop",
      count: "220+ parts"
    },
    {
      name: "Electrical Systems",
      icon: Zap,
      image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=400&h=250&fit=crop",
      count: "180+ parts"
    },
    {
      name: "Suspension Parts",
      icon: Car,
      image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=400&h=250&fit=crop",
      count: "160+ parts"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Auto Parts Catalog</h1>
          <p className="text-xl text-gray-300 mb-8">Find the right parts for your vehicle from our extensive inventory</p>
          
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-3.5 w-5 h-5 text-gray-400" />
              <Input
                placeholder="Search by part name, brand, or part number..."
                className="pl-12 pr-4 py-3 text-lg bg-white text-gray-900"
              />
              <Button className="absolute right-2 top-2 bg-red-600 hover:bg-red-700">
                Search
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Top Categories */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">Shop by Category</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {topCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 cursor-pointer overflow-hidden">
                  <CardContent className="p-0">
                    <div className="relative">
                      <img 
                        src={category.image} 
                        alt={category.name}
                        className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="eager"
                        onError={(e) => {
                          console.log(`Failed to load category image: ${category.image}`);
                          e.currentTarget.src = "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=400&h=250&fit=crop";
                        }}
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-20 transition-opacity"></div>
                      <div className="absolute top-3 right-3 bg-white p-2 rounded-full">
                        <IconComponent className="w-5 h-5 text-red-600" />
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-gray-800 mb-1">{category.name}</h3>
                      <p className="text-sm text-gray-600">{category.count}</p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <div className="lg:w-1/4">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Filter className="w-5 h-5 text-gray-600 mr-2" />
                  <h3 className="text-lg font-semibold text-gray-800">Filters</h3>
                </div>
                
                {/* Categories */}
                <div className="mb-6">
                  <h4 className="font-medium text-gray-800 mb-3">Categories</h4>
                  <div className="space-y-2">
                    {categories.map((category, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <label className="flex items-center cursor-pointer">
                          <input 
                            type="radio" 
                            name="category" 
                            className="mr-2"
                            defaultChecked={category.active}
                          />
                          <span className={`text-sm ${category.active ? 'text-red-600 font-medium' : 'text-gray-600'}`}>
                            {category.name}
                          </span>
                        </label>
                        <span className="text-xs text-gray-500">({category.count})</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Price Range */}
                <div className="mb-6">
                  <h4 className="font-medium text-gray-800 mb-3">Price Range</h4>
                  <div className="space-y-2">
                    <label className="flex items-center cursor-pointer">
                      <input type="checkbox" className="mr-2" />
                      <span className="text-sm text-gray-600">Under $25</span>
                    </label>
                    <label className="flex items-center cursor-pointer">
                      <input type="checkbox" className="mr-2" />
                      <span className="text-sm text-gray-600">$25 - $50</span>
                    </label>
                    <label className="flex items-center cursor-pointer">
                      <input type="checkbox" className="mr-2" />
                      <span className="text-sm text-gray-600">$50 - $100</span>
                    </label>
                    <label className="flex items-center cursor-pointer">
                      <input type="checkbox" className="mr-2" />
                      <span className="text-sm text-gray-600">Over $100</span>
                    </label>
                  </div>
                </div>

                {/* Brand */}
                <div>
                  <h4 className="font-medium text-gray-800 mb-3">Brand</h4>
                  <div className="space-y-2">
                    {['Wagner', 'Fram', 'NGK', 'Mann-Filter', 'Philips', 'Monroe'].map((brand) => (
                      <label key={brand} className="flex items-center cursor-pointer">
                        <input type="checkbox" className="mr-2" />
                        <span className="text-sm text-gray-600">{brand}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:w-3/4">
            {/* Toolbar */}
            <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
              <div className="flex items-center gap-4">
                <span className="text-gray-600">Showing 1-6 of 1,250 parts</span>
              </div>
              <div className="flex items-center gap-4">
                <select className="border border-gray-300 rounded-md px-3 py-2 text-sm">
                  <option>Sort by: Featured</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Customer Rating</option>
                  <option>Newest First</option>
                </select>
                <div className="flex border border-gray-300 rounded-md">
                  <button className="p-2 bg-gray-100 border-r">
                    <Grid className="w-4 h-4" />
                  </button>
                  <button className="p-2">
                    <List className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Parts Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {parts.map((part) => (
                <Card key={part.id} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <div className="relative">
                      <img 
                        src={part.image} 
                        alt={part.name} 
                        className="w-full h-48 object-cover rounded-t-lg"
                        loading="eager"
                        onError={(e) => {
                          console.log(`Failed to load part image: ${part.image}`);
                          e.currentTarget.src = "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=400&h=300&fit=crop";
                        }}
                      />
                      {!part.inStock && (
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-t-lg">
                          <Badge variant="destructive">Out of Stock</Badge>
                        </div>
                      )}
                      <Badge className="absolute top-3 left-3 bg-red-100 text-red-800">
                        {part.category}
                      </Badge>
                    </div>
                    
                    <div className="p-4">
                      <p className="text-sm text-gray-500 mb-1">{part.brand} • #{part.partNumber}</p>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">{part.name}</h3>
                      
                      <div className="flex items-center mb-3">
                        <div className="flex items-center mr-2">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="ml-1 text-sm text-gray-600">
                            {part.rating} ({part.reviews})
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between mb-3">
                        <div>
                          <span className="text-xl font-bold text-gray-800">${part.price}</span>
                          <span className="text-sm text-gray-500 line-through ml-2">${part.originalPrice}</span>
                        </div>
                      </div>

                      <Button 
                        className={`w-full ${part.inStock ? 'bg-red-600 hover:bg-red-700' : 'bg-gray-400 cursor-not-allowed'}`}
                        disabled={!part.inStock}
                      >
                        <ShoppingCart className="w-4 h-4 mr-2" />
                        {part.inStock ? 'Add to Cart' : 'Out of Stock'}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center items-center mt-12 space-x-2">
              <Button variant="outline" size="sm">Previous</Button>
              <Button size="sm" className="bg-red-600 text-white">1</Button>
              <Button variant="outline" size="sm">2</Button>
              <Button variant="outline" size="sm">3</Button>
              <span className="px-2">...</span>
              <Button variant="outline" size="sm">25</Button>
              <Button variant="outline" size="sm">Next</Button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Parts;
