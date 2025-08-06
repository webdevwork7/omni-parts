
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  Award, 
  Clock, 
  Shield, 
  Target, 
  Heart,
  CheckCircle 
} from "lucide-react";
import { brandConfig } from "@/config/brand";

const About = () => {
  const stats = [
    { number: "15+", label: "Years in Business", icon: Clock },
    { number: "50,000+", label: "Happy Customers", icon: Users },
    { number: "100,000+", label: "Parts in Stock", icon: Shield },
    { number: "24/7", label: "Customer Support", icon: Award }
  ];

  const values = [
    {
      title: "Quality First",
      description: "We source only the highest quality auto parts from trusted manufacturers.",
      icon: Shield
    },
    {
      title: "Customer Focus",
      description: "Your satisfaction is our priority. We're here to help with expert advice and support.",
      icon: Heart
    },
    {
      title: "Fast Service",
      description: "Quick processing, fast shipping, and efficient service to get you back on the road.",
      icon: Target
    }
  ];

  const certifications = [
    "ASE Certified Technicians",
    "BBB Accredited Business",
    "ISO 9001 Quality Management",
    "EPA Compliant Recycling"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">About {brandConfig.name}</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Your trusted automotive partner since 2009, providing quality parts and 
            professional services to keep your vehicle running at its best.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-red-600" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-800 mb-2">{stat.number}</h3>
                  <p className="text-gray-600">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Founded in 2009 by automotive enthusiasts, {brandConfig.name} began as a small 
                  local auto parts store with a simple mission: provide quality parts and honest 
                  service to fellow car owners.
                </p>
                <p>
                  Over the years, we've grown into a trusted automotive partner, serving thousands 
                  of customers across the region. Our team of certified technicians and parts 
                  specialists brings decades of combined experience to every interaction.
                </p>
                <p>
                  Today, we maintain our founding principles while embracing modern technology and 
                  expanded inventory to serve you better. Whether you're a DIY enthusiast or a 
                  professional mechanic, we're here to support your automotive needs.
                </p>
              </div>
            </div>
            <div>
              <img 
                src="/placeholder.svg" 
                alt="OmniParts Team" 
                className="w-full h-96 object-cover rounded-lg shadow-lg"
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

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-gray-700" />
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

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h3>
                <p className="text-gray-600">
                  To provide automotive professionals and enthusiasts with quality parts, 
                  expert service, and reliable support that keeps vehicles safe and 
                  running efficiently while building lasting relationships through 
                  trust and exceptional service.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Vision</h3>
                <p className="text-gray-600">
                  To be the most trusted automotive parts and service provider in the region, 
                  known for our expertise, quality products, and commitment to customer 
                  satisfaction while fostering a sustainable automotive community.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Certifications & Credentials</h2>
            <p className="text-lg text-gray-600">Trusted by industry standards and customer satisfaction</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="flex items-center justify-center p-4 bg-gray-50 rounded-lg">
                <CheckCircle className="w-6 h-6 text-green-600 mr-3" />
                <span className="font-medium text-gray-800">{cert}</span>
              </div>
            ))}
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
            {[
              { name: "Mike Rodriguez", role: "Master Technician", experience: "20+ Years" },
              { name: "Sarah Johnson", role: "Parts Specialist", experience: "15+ Years" },
              { name: "David Chen", role: "Service Manager", experience: "18+ Years" }
            ].map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <img 
                    src="/placeholder.svg" 
                    alt={member.name} 
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{member.name}</h3>
                  <p className="text-gray-600 mb-2">{member.role}</p>
                  <Badge variant="secondary">{member.experience}</Badge>
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

export default About;
