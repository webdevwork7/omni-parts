
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import HeroForm from "@/components/HeroForm";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Car, 
  Wrench, 
  Shield, 
  Truck, 
  Star, 
  Clock, 
  CheckCircle,
  Settings,
  Zap,
  Award
} from "lucide-react";
import { brandConfig } from "@/config/brand";

const Index = () => {
  const featuredParts = [
    {
      id: 1,
      name: "Brake Pads Set",
      price: "$89.99",
      originalPrice: "$119.99",
      image: "/placeholder.svg",
      rating: 4.8,
      reviews: 156,
      category: "Brakes"
    },
    {
      id: 2,
      name: "Engine Oil Filter",
      price: "$24.99",
      originalPrice: "$32.99",
      image: "/placeholder.svg",
      rating: 4.9,
      reviews: 243,
      category: "Engine"
    },
    {
      id: 3,
      name: "Spark Plugs (4-Pack)",
      price: "$45.99",
      originalPrice: "$59.99",
      image: "/placeholder.svg",
      rating: 4.7,
      reviews: 98,
      category: "Engine"
    },
    {
      id: 4,
      name: "Air Filter",
      price: "$19.99",
      originalPrice: "$25.99",
      image: "/placeholder.svg",
      rating: 4.6,
      reviews: 187,
      category: "Filters"
    }
  ];

  const categories = [
    { name: "Engine Parts", icon: Settings, count: "250+" },
    { name: "Brake System", icon: Shield, count: "180+" },
    { name: "Electrical", icon: Zap, count: "320+" },
    { name: "Suspension", icon: Car, count: "160+" }
  ];

  const services = [
    {
      name: "Oil Change Service",
      description: "Professional oil change with quality filters",
      price: "Starting at $39.99",
      icon: Wrench
    },
    {
      name: "Brake Inspection",
      description: "Complete brake system inspection and maintenance",
      price: "Starting at $89.99",
      icon: Shield
    },
    {
      name: "Engine Diagnostics",
      description: "Advanced computer diagnostics for engine issues",
      price: "Starting at $119.99",
      icon: Settings
    }
  ];

  const testimonials = [
    {
      name: "Mike Johnson",
      location: "Detroit, MI",
      rating: 5,
      comment: "Excellent service! Found the exact part I needed for my 2018 Ford F-150. Fast shipping and great quality.",
      service: "Brake Parts"
    },
    {
      name: "Sarah Williams",
      location: "Chicago, IL",
      rating: 5,
      comment: "Professional team helped me with engine repair parts. Saved me hundreds compared to the dealership!",
      service: "Engine Parts"
    },
    {
      name: "David Chen",
      location: "Houston, TX",
      rating: 5,
      comment: "Quick turnaround on my suspension parts order. Everything fits perfectly. Highly recommend!",
      service: "Suspension Parts"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6">
                Premium Auto Parts & 
                <span className="text-red-400"> Professional Service</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Get quality auto parts and expert automotive services. Fast shipping, 
                competitive prices, and guaranteed satisfaction for all your vehicle needs.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                  <span>Quality Guaranteed</span>
                </div>
                <div className="flex items-center">
                  <Truck className="w-5 h-5 text-green-400 mr-2" />
                  <span>Fast Shipping</span>
                </div>
                <div className="flex items-center">
                  <Award className="w-5 h-5 text-green-400 mr-2" />
                  <span>Expert Service</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 text-lg">
                  Browse Parts Catalog
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 text-lg">
                  View Services
                </Button>
              </div>
            </div>

            <div>
              <HeroForm />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="bg-white py-8 border-b">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-8">
            <div className="flex items-center text-gray-600">
              <Shield className="w-6 h-6 text-green-600 mr-2" />
              <span className="font-semibold">Quality Guaranteed</span>
            </div>
            <div className="flex items-center text-gray-600">
              <Truck className="w-6 h-6 text-blue-600 mr-2" />
              <span className="font-semibold">Fast Shipping</span>
            </div>
            <div className="flex items-center text-gray-600">
              <Clock className="w-6 h-6 text-red-600 mr-2" />
              <span className="font-semibold">Same Day Processing</span>
            </div>
            <div className="flex items-center text-gray-600">
              <Award className="w-6 h-6 text-yellow-600 mr-2" />
              <span className="font-semibold">Expert Support</span>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Shop by Category</h2>
            <p className="text-lg text-gray-600">Find the right parts for your vehicle</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardContent className="p-6 text-center">
                    <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-red-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{category.name}</h3>
                    <p className="text-gray-600">{category.count} Products</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Parts */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Featured Parts</h2>
            <p className="text-lg text-gray-600">Best selling auto parts with great reviews</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredParts.map((part) => (
              <Card key={part.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <img 
                    src={part.image} 
                    alt={part.name} 
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <div className="p-4">
                    <Badge className="mb-2 bg-red-100 text-red-800">{part.category}</Badge>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">{part.name}</h3>
                    <div className="flex items-center mb-2">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="ml-1 text-sm text-gray-600">
                        {part.rating} ({part.reviews} reviews)
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-xl font-bold text-gray-800">{part.price}</span>
                        <span className="text-sm text-gray-500 line-through ml-2">{part.originalPrice}</span>
                      </div>
                      <Button size="sm" className="bg-red-600 hover:bg-red-700">
                        Add to Cart
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Professional Services</h2>
            <p className="text-lg text-gray-600">Expert automotive services by certified technicians</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-gray-700" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">{service.name}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <p className="text-lg font-semibold text-red-600 mb-4">{service.price}</p>
                    <Button className="w-full bg-gray-800 hover:bg-gray-900">
                      Book Service
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">What Our Customers Say</h2>
            <p className="text-lg text-gray-600">Real reviews from satisfied customers</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">"{testimonial.comment}"</p>
                  <div>
                    <p className="font-semibold text-gray-800">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.location}</p>
                    <Badge variant="secondary" className="mt-2">{testimonial.service}</Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
