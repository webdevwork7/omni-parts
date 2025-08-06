
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Filter, Star, ShoppingCart } from "lucide-react";

const Parts = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [priceRange, setPriceRange] = useState("all");

  const parts = [
    {
      id: 1,
      name: "Premium Brake Pads Set",
      price: "$89.99",
      originalPrice: "$119.99",
      image: "/placeholder.svg",
      rating: 4.8,
      reviews: 156,
      category: "Brakes",
      brand: "Wagner",
      inStock: true
    },
    {
      id: 2,
      name: "High-Flow Air Filter",
      price: "$29.99",
      originalPrice: "$39.99",
      image: "/placeholder.svg",
      rating: 4.7,
      reviews: 89,
      category: "Filters",
      brand: "K&N",
      inStock: true
    },
    {
      id: 3,
      name: "Spark Plug Set (4-Pack)",
      price: "$45.99",
      originalPrice: "$59.99",
      image: "/placeholder.svg",
      rating: 4.9,
      reviews: 243,
      category: "Engine",
      brand: "NGK",
      inStock: false
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Header */}
      <section className="bg-white py-8 border-b">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Auto Parts Catalog</h1>
          <p className="text-lg text-gray-600">Find the right parts for your vehicle</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar Filters */}
          <div className="lg:col-span-1">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Filters</h3>
                
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Search</label>
                    <div className="relative">
                      <Search className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                      <Input
                        placeholder="Search parts..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                    <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Categories</SelectItem>
                        <SelectItem value="brakes">Brakes</SelectItem>
                        <SelectItem value="engine">Engine</SelectItem>
                        <SelectItem value="filters">Filters</SelectItem>
                        <SelectItem value="suspension">Suspension</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Price Range</label>
                    <Select value={priceRange} onValueChange={setPriceRange}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Prices</SelectItem>
                        <SelectItem value="under-50">Under $50</SelectItem>
                        <SelectItem value="50-100">$50 - $100</SelectItem>
                        <SelectItem value="over-100">Over $100</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Parts Grid */}
          <div className="lg:col-span-3">
            <div className="flex justify-between items-center mb-6">
              <p className="text-gray-600">Showing {parts.length} results</p>
              <Select defaultValue="popular">
                <SelectTrigger className="w-48">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="popular">Most Popular</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
              {parts.map((part) => (
                <Card key={part.id} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <img 
                      src={part.image} 
                      alt={part.name} 
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <div className="p-4">
                      <div className="flex justify-between items-start mb-2">
                        <Badge className="bg-red-100 text-red-800">{part.category}</Badge>
                        {part.inStock ? (
                          <Badge className="bg-green-100 text-green-800">In Stock</Badge>
                        ) : (
                          <Badge variant="secondary">Out of Stock</Badge>
                        )}
                      </div>
                      
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">{part.name}</h3>
                      <p className="text-sm text-gray-600 mb-2">Brand: {part.brand}</p>
                      
                      <div className="flex items-center mb-3">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="ml-1 text-sm text-gray-600">
                          {part.rating} ({part.reviews} reviews)
                        </span>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-xl font-bold text-gray-800">{part.price}</span>
                          {part.originalPrice && (
                            <span className="text-sm text-gray-500 line-through ml-2">{part.originalPrice}</span>
                          )}
                        </div>
                        <Button 
                          size="sm" 
                          className="bg-red-600 hover:bg-red-700"
                          disabled={!part.inStock}
                        >
                          <ShoppingCart className="w-4 h-4 mr-2" />
                          {part.inStock ? "Add to Cart" : "Notify Me"}
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Parts;
