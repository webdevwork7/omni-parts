
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Wrench, 
  Shield, 
  Settings, 
  Zap, 
  Car, 
  Award,
  Clock,
  Phone,
  CheckCircle,
  Star,
  Users,
  Calendar
} from "lucide-react";

const Services = () => {
  const services = [
    {
      name: "Complete Oil Change",
      description: "Premium oil change service with comprehensive vehicle inspection and fluid top-offs.",
      price: "Starting at $39.99",
      duration: "30 minutes",
      icon: Wrench,
      image: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=400&h=250&fit=crop&crop=center",
      features: ["Premium synthetic oil", "New oil filter", "Fluid level check", "Battery test", "Visual inspection", "Service reminder sticker"],
      popular: false
    },
    {
      name: "Brake System Service",
      description: "Complete brake inspection, maintenance, and repair services for optimal safety and performance.",
      price: "Starting at $89.99", 
      duration: "1-2 hours",
      icon: Shield,
      image: "https://images.unsplash.com/photo-1558618644-fcd25c85cd64?w=400&h=250&fit=crop&crop=center",
      features: ["Comprehensive brake inspection", "Brake pad replacement", "Rotor resurfacing/replacement", "Brake fluid replacement", "Caliper service", "Road test"],
      popular: true
    },
    {
      name: "Engine Diagnostics",
      description: "Advanced computer diagnostics and comprehensive engine analysis to identify and resolve issues.",
      price: "Starting at $119.99",
      duration: "1 hour",
      icon: Settings,
      image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=400&h=250&fit=crop&crop=center",
      features: ["OBD-II computer scan", "Error code analysis", "Engine performance test", "Emission system check", "Repair recommendations", "Written diagnostic report"],
      popular: false
    },
    {
      name: "Electrical System",
      description: "Complete electrical system diagnosis and repair including battery, alternator, and starter service.",
      price: "Starting at $79.99",
      duration: "45 minutes",
      icon: Zap,
      image: "https://images.unsplash.com/photo-1625047509013-64ab3f4ca812?w=400&h=250&fit=crop&crop=center",
      features: ["Battery load test", "Alternator testing", "Starter inspection", "Wiring diagnostics", "Fuse replacement", "Electrical component check"],
      popular: false
    },
    {
      name: "Suspension & Alignment",
      description: "Professional wheel alignment and suspension system service for smooth, safe driving.",
      price: "Starting at $149.99",
      duration: "2 hours",
      icon: Car,
      image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=400&h=250&fit=crop&crop=center",
      features: ["4-wheel alignment", "Suspension inspection", "Shock/strut evaluation", "Tire wear analysis", "Steering system check", "Road test"],
      popular: false
    },
    {
      name: "Preventive Maintenance",
      description: "Comprehensive maintenance package to keep your vehicle running at peak performance.",
      price: "Starting at $199.99",
      duration: "2-3 hours",
      icon: Award,
      image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=400&h=250&fit=crop&crop=center",
      features: ["Multi-point inspection", "Filter replacements", "Fluid changes", "Belt/hose inspection", "Tire rotation", "Extended warranty"],
      popular: true
    }
  ];

  const testimonials = [
    {
      name: "Robert Kim",
      service: "Brake Service",
      rating: 5,
      comment: "Excellent brake service! They explained everything clearly and the work was completed quickly.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face"
    },
    {
      name: "Lisa Anderson",
      service: "Oil Change",
      rating: 5,
      comment: "Fast, professional service. They even checked my other fluids for free!",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b77c?w=60&h=60&fit=crop&crop=face"
    }
  ];

  const whyChooseUs = [
    {
      icon: Users,
      title: "Certified Technicians",
      description: "ASE-certified professionals with years of experience"
    },
    {
      icon: Clock,
      title: "Fast Turnaround",
      description: "Most services completed while you wait"
    },
    {
      icon: Shield,
      title: "Quality Guarantee",
      description: "All work backed by comprehensive warranty"
    },
    {
      icon: Award,
      title: "Fair Pricing",
      description: "Transparent, competitive pricing with no hidden fees"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=1200&h=600&fit=crop&crop=center')"
          }}
        ></div>
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl font-bold mb-6">Professional Automotive Services</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Expert automotive services by ASE-certified technicians using state-of-the-art equipment and genuine parts
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 text-lg">
              <Calendar className="w-5 h-5 mr-2" />
              Schedule Service
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 text-lg">
              <Phone className="w-5 h-5 mr-2" />
              Call Now
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Choose Our Services?</h2>
            <p className="text-lg text-gray-600">Professional automotive care you can trust</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {whyChooseUs.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-red-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Services</h2>
            <p className="text-lg text-gray-600">Comprehensive automotive solutions for all your vehicle needs</p>
          </div>

          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                  <CardContent className="p-0">
                    <div className="relative">
                      {service.popular && (
                        <Badge className="absolute top-4 right-4 bg-red-600 text-white z-10">
                          Most Popular
                        </Badge>
                      )}
                      <img 
                        src={service.image}
                        alt={service.name}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute bottom-4 left-4 bg-white p-3 rounded-full shadow-lg">
                        <IconComponent className="w-6 h-6 text-red-600" />
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-gray-800 mb-3">{service.name}</h3>
                      <p className="text-gray-600 mb-4">{service.description}</p>
                      
                      <div className="flex justify-between items-center mb-4">
                        <div>
                          <p className="text-lg font-bold text-red-600">{service.price}</p>
                          <p className="text-sm text-gray-500 flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            {service.duration}
                          </p>
                        </div>
                      </div>

                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-800 mb-2">Includes:</h4>
                        <ul className="space-y-1">
                          {service.features.slice(0, 3).map((feature, i) => (
                            <li key={i} className="flex items-center text-sm text-gray-600">
                              <CheckCircle className="w-4 h-4 text-green-600 mr-2 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                          {service.features.length > 3 && (
                            <li className="text-sm text-gray-500">
                              +{service.features.length - 3} more services
                            </li>
                          )}
                        </ul>
                      </div>

                      <Button className="w-full bg-gray-800 hover:bg-gray-900">
                        <Calendar className="w-4 h-4 mr-2" />
                        Book This Service
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">What Our Customers Say</h2>
            <p className="text-lg text-gray-600">Real feedback from satisfied customers</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <p className="font-semibold text-gray-800">{testimonial.name}</p>
                      <p className="text-sm text-red-600">{testimonial.service}</p>
                    </div>
                  </div>
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 italic">"{testimonial.comment}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Schedule Your Service?</h2>
          <p className="text-xl mb-8 text-red-100">
            Get professional automotive service from certified technicians you can trust
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="bg-white text-red-600 hover:bg-gray-100 px-8 py-3 text-lg">
              <Calendar className="w-5 h-5 mr-2" />
              Schedule Online
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-red-600 px-8 py-3 text-lg">
              <Phone className="w-5 h-5 mr-2" />
              Call (800) 123-4567
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
