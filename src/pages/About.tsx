
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Users, 
  Award, 
  Clock, 
  MapPin, 
  Phone,
  Wrench,
  Shield,
  Star
} from "lucide-react";
import { brandConfig } from "@/config/brand";

const About = () => {
  const stats = [
    { number: "15+", label: "Years in Business" },
    { number: "50,000+", label: "Happy Customers" },
    { number: "100,000+", label: "Parts in Stock" },
    { number: "24/7", label: "Customer Support" }
  ];

  const team = [
    {
      name: "John Martinez",
      role: "Master Technician",
      experience: "20+ years",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "Sarah Johnson",
      role: "Parts Specialist",
      experience: "15+ years",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b77c?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "Mike Chen",
      role: "Service Manager",
      experience: "18+ years",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face"
    }
  ];

  const values = [
    {
      icon: Shield,
      title: "Quality First",
      description: "We only stock parts from reputable manufacturers with proven track records."
    },
    {
      icon: Users,
      title: "Customer Focused",
      description: "Your satisfaction is our priority. We go above and beyond to meet your needs."
    },
    {
      icon: Award,
      title: "Expert Knowledge",
      description: "Our certified technicians bring decades of automotive experience."
    },
    {
      icon: Clock,
      title: "Fast Service",
      description: "Quick turnaround times without compromising on quality or safety."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">About OmniParts</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Your trusted automotive partner for over 15 years, providing quality parts and expert service to keep you moving forward.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-red-600 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Founded in 2008 in Detroit, Michigan, OmniParts started as a small family-owned business with a simple mission: 
                to provide high-quality automotive parts and exceptional service to our local community.
              </p>
              <p className="text-gray-600 mb-4">
                Over the years, we've grown from a single location to serving customers nationwide, but our core values remain unchanged. 
                We believe in treating every customer like family and ensuring they get the right parts at the right price.
              </p>
              <p className="text-gray-600 mb-6">
                Today, we're proud to be one of the most trusted names in automotive parts, with over 50,000 satisfied customers 
                and a commitment to excellence that drives everything we do.
              </p>
              <Button className="bg-red-600 hover:bg-red-700 text-white">
                <Phone className="w-4 h-4 mr-2" />
                Contact Us Today
              </Button>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=600&h=400&fit=crop&crop=center"
                alt="Auto repair shop"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Values</h2>
            <p className="text-lg text-gray-600">The principles that guide everything we do</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-red-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Meet Our Team</h2>
            <p className="text-lg text-gray-600">Experienced professionals dedicated to your automotive needs</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <img 
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{member.name}</h3>
                  <p className="text-red-600 font-medium mb-2">{member.role}</p>
                  <p className="text-gray-600">{member.experience}</p>
                  <div className="flex justify-center mt-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Facility Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=600&h=400&fit=crop&crop=center"
                alt="Auto parts warehouse"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">State-of-the-Art Facility</h2>
              <p className="text-gray-600 mb-4">
                Our 50,000 square foot facility houses an extensive inventory of automotive parts, 
                from common maintenance items to hard-to-find specialty components.
              </p>
              <p className="text-gray-600 mb-6">
                Equipped with modern diagnostic tools and staffed by certified technicians, 
                we're able to quickly identify the exact parts you need and ensure they're 
                the right fit for your vehicle.
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-red-600 mr-3" />
                  <span className="text-gray-700">{brandConfig.address}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-5 h-5 text-red-600 mr-3" />
                  <span className="text-gray-700">{brandConfig.hours}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
