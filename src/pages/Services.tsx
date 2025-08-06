
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Wrench, Shield, Settings, Zap, Car, Award } from "lucide-react";

const Services = () => {
  const services = [
    {
      name: "Oil Change Service",
      description: "Complete oil change with premium oil and filters. Includes multi-point inspection.",
      price: "Starting at $39.99",
      duration: "30 minutes",
      icon: Wrench,
      features: ["Premium oil", "New oil filter", "Fluid check", "Visual inspection"]
    },
    {
      name: "Brake Service",
      description: "Comprehensive brake inspection, pad replacement, and system maintenance.",
      price: "Starting at $89.99", 
      duration: "1-2 hours",
      icon: Shield,
      features: ["Brake inspection", "Pad replacement", "Rotor service", "Fluid replacement"]
    },
    {
      name: "Engine Diagnostics",
      description: "Advanced computer diagnostics to identify and resolve engine issues.",
      price: "Starting at $119.99",
      duration: "1 hour",
      icon: Settings,
      features: ["Computer scan", "Error code analysis", "Performance test", "Repair recommendations"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Professional Services</h1>
          <p className="text-xl text-gray-300">Expert automotive services by certified technicians</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="w-8 h-8 text-red-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3 text-center">{service.name}</h3>
                  <p className="text-gray-600 mb-4 text-center">{service.description}</p>
                  <div className="text-center mb-4">
                    <p className="text-lg font-bold text-red-600">{service.price}</p>
                    <p className="text-sm text-gray-500">Duration: {service.duration}</p>
                  </div>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-sm text-gray-600">
                        <Award className="w-4 h-4 text-green-600 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-gray-800 hover:bg-gray-900">
                    Book Service
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Services;
