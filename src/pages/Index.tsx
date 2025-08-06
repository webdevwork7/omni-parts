
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
  Award,
  Users,
  MapPin,
  Phone,
  Gauge,
  Cog,
  Battery,
  Thermometer
} from "lucide-react";
import { brandConfig } from "@/config/brand";

const Index = () => {
  const featuredParts = [
    {
      id: 1,
      name: "Brake Pads Set",
      price: "$89.99",
      originalPrice: "$119.99",
      image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=400&h=300&fit=crop",
      rating: 4.8,
      reviews: 156,
      category: "Brakes"
    },
    {
      id: 2,
      name: "Engine Oil Filter",
      price: "$24.99",
      originalPrice: "$32.99",
      image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=400&h=300&fit=crop",
      rating: 4.9,
      reviews: 243,
      category: "Engine"
    },
    {
      id: 3,
      name: "Spark Plugs (4-Pack)",
      price: "$45.99",
      originalPrice: "$59.99",
      image: "https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=400&h=300&fit=crop",
      rating: 4.7,
      reviews: 98,
      category: "Engine"
    },
    {
      id: 4,
      name: "Air Filter",
      price: "$19.99",
      originalPrice: "$25.99",
      image: "https://images.unsplash.com/photo-1558618644-fcd25c85cd64?w=400&h=300&fit=crop",
      rating: 4.6,
      reviews: 187,
      category: "Filters"
    }
  ];

  const categories = [
    { 
      name: "Engine Parts", 
      icon: Settings, 
      count: "250+",
      image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=400&h=250&fit=crop",
      description: "High-performance engine components"
    },
    { 
      name: "Brake System", 
      icon: Shield, 
      count: "180+",
      image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=400&h=250&fit=crop",
      description: "Complete brake solutions for safety"
    },
    { 
      name: "Electrical", 
      icon: Zap, 
      count: "320+",
      image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=400&h=250&fit=crop",
      description: "Wiring, batteries & electrical parts"
    },
    { 
      name: "Suspension", 
      icon: Car, 
      count: "160+",
      image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=400&h=250&fit=crop",
      description: "Smooth ride suspension components"
    }
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
      service: "Brake Parts",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face"
    },
    {
      name: "Sarah Williams",
      location: "Chicago, IL",
      rating: 5,
      comment: "Professional team helped me with engine repair parts. Saved me hundreds compared to the dealership!",
      service: "Engine Parts",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b77c?w=60&h=60&fit=crop&crop=face"
    },
    {
      name: "David Chen",
      location: "Houston, TX",
      rating: 5,
      comment: "Quick turnaround on my suspension parts order. Everything fits perfectly. Highly recommend!",
      service: "Suspension Parts",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face"
    }
  ];

  const whyChooseUs = [
    {
      icon: Award,
      title: "Quality Guaranteed",
      description: "All parts come with manufacturer warranty and quality assurance"
    },
    {
      icon: Truck,
      title: "Fast Shipping",
      description: "Same day processing with 2-day delivery available nationwide"
    },
    {
      icon: Users,
      title: "Expert Support",
      description: "Our certified technicians provide professional guidance"
    },
    {
      icon: Shield,
      title: "Secure Shopping",
      description: "SSL encrypted checkout with multiple payment options"
    }
  ];

  const brands = [
    { 
      name: "Toyota", 
      logo: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=200&h=100&fit=crop",
      description: "Reliable automotive excellence since 1937"
    },
    { 
      name: "Ford", 
      logo: "https://images.unsplash.com/photo-1612544409025-0daa7aa2e9a5?w=200&h=100&fit=crop",
      description: "Built Ford Tough - American innovation"
    },
    { 
      name: "Honda", 
      logo: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=200&h=100&fit=crop",
      description: "The power of dreams in motion"
    },
    { 
      name: "BMW", 
      logo: "https://images.unsplash.com/photo-1617654112368-307921291f42?w=200&h=100&fit=crop",
      description: "The ultimate driving machine"
    },
    { 
      name: "Mercedes-Benz", 
      logo: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=200&h=100&fit=crop",
      description: "The best or nothing"
    },
    { 
      name: "Chevrolet", 
      logo: "https://images.unsplash.com/photo-1617654112471-da48d2363cb1?w=200&h=100&fit=crop",
      description: "Find new roads with Chevy"
    }
  ];

  const emergencyServices = [
    {
      icon: Phone,
      title: "24/7 Emergency Support",
      description: "Round-the-clock assistance for urgent automotive needs"
    },
    {
      icon: MapPin,
      title: "Mobile Service",
      description: "We come to you for on-site repairs and diagnostics"
    },
    {
      icon: Clock,
      title: "Express Parts Delivery",
      description: "Emergency parts delivery within 2 hours in metro areas"
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
                <Button variant="outline" className="border-white text-black bg-white hover:bg-gray-100 px-8 py-3 text-lg">
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

      {/* Categories Section - Redesigned */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Shop by Category</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our comprehensive range of automotive parts organized by category. 
              Each section features premium quality components from trusted manufacturers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden">
                      <img 
                        src={category.image} 
                        alt={category.name}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                        loading="eager"
                        onError={(e) => {
                          console.log(`Failed to load image: ${category.image}`);
                          e.currentTarget.src = "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=400&h=250&fit=crop";
                        }}
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-20 transition-opacity duration-300"></div>
                      <div className="absolute top-4 right-4 bg-white p-3 rounded-full shadow-lg">
                        <IconComponent className="w-6 h-6 text-red-600" />
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-800 mb-2">{category.name}</h3>
                      <p className="text-gray-600 mb-3">{category.description}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-red-600 font-semibold">{category.count} Products</span>
                        <Button variant="outline" size="sm" className="group-hover:bg-red-600 group-hover:text-white transition-colors">
                          Browse
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Choose OmniParts?</h2>
            <p className="text-lg text-gray-600">Experience the difference with our premium service and quality parts</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow p-6">
                  <CardContent className="p-0">
                    <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-red-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Parts */}
      <section className="py-16 bg-white">
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
                    loading="eager"
                    onError={(e) => {
                      console.log(`Failed to load image: ${part.image}`);
                      e.currentTarget.src = "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=400&h=300&fit=crop";
                    }}
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

      {/* Trusted Brands Section - Completely Redesigned */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=1920&h=1080&fit=crop')] bg-cover bg-center opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-red-600 rounded-full mb-6">
              <Award className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Trusted by <span className="text-red-400">Leading Brands</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              We're proud partners with the world's most trusted automotive manufacturers, 
              ensuring you get genuine, high-quality parts for your vehicle.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {brands.map((brand, index) => (
              <Card key={index} className="group bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                <CardContent className="p-8 text-center">
                  <div className="relative mb-6 overflow-hidden rounded-xl">
                    <img 
                      src={brand.logo} 
                      alt={brand.name}
                      className="w-full h-24 object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                      loading="eager"
                      onError={(e) => {
                        console.log(`Failed to load brand image: ${brand.logo}`);
                        e.currentTarget.src = "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=200&h=100&fit=crop";
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-red-400 transition-colors">
                    {brand.name}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {brand.description}
                  </p>
                  <div className="mt-6 pt-4 border-t border-white/20">
                    <div className="flex items-center justify-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                      <span className="ml-2 text-sm text-gray-300">Premium Partner</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16">
            <div className="inline-flex items-center space-x-8 bg-white/10 backdrop-blur-sm rounded-full px-8 py-4">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="text-sm font-medium">Authorized Dealer</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="w-5 h-5 text-blue-400" />
                <span className="text-sm font-medium">Genuine Parts</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="w-5 h-5 text-yellow-400" />
                <span className="text-sm font-medium">Warranty Included</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Services Section */}
      <section className="py-16 bg-red-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Emergency Services Available</h2>
            <p className="text-lg text-gray-600">When you need parts or service urgently, we're here to help</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {emergencyServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow bg-white">
                  <CardContent className="p-6">
                    <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-red-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="text-center mt-8">
            <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 text-lg">
              <Phone className="w-5 h-5 mr-2" />
              Call Emergency Line: {brandConfig.phone}
            </Button>
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
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-4"
                      onError={(e) => {
                        console.log(`Failed to load testimonial image: ${testimonial.image}`);
                        e.currentTarget.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face";
                      }}
                    />
                    <div>
                      <p className="font-semibold text-gray-800">{testimonial.name}</p>
                      <p className="text-sm text-gray-600">{testimonial.location}</p>
                    </div>
                  </div>
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">"{testimonial.comment}"</p>
                  <Badge variant="secondary" className="mt-2">{testimonial.service}</Badge>
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
