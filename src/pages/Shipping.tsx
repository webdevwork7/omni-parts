
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Truck, Clock, MapPin, Package } from "lucide-react";

const Shipping = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <section className="bg-white py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-800 mb-8">Shipping & Delivery</h1>

          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <div className="flex items-center mb-4">
                <Truck className="w-6 h-6 text-red-600 mr-3" />
                <h2 className="text-2xl font-semibold text-gray-800">Shipping Methods</h2>
              </div>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li><strong>Standard Shipping:</strong> 3-5 business days - $9.99</li>
                <li><strong>Express Shipping:</strong> 1-2 business days - $19.99</li>
                <li><strong>Overnight Shipping:</strong> Next business day - $39.99</li>
                <li><strong>Local Pickup:</strong> Same day pickup available - Free</li>
              </ul>
            </section>

            <section>
              <div className="flex items-center mb-4">
                <Clock className="w-6 h-6 text-red-600 mr-3" />
                <h2 className="text-2xl font-semibold text-gray-800">Processing Time</h2>
              </div>
              <p className="text-gray-600">
                Orders placed before 2 PM EST on business days are processed and shipped the same day. 
                Orders placed after 2 PM or on weekends will be processed the next business day.
              </p>
            </section>

            <section>
              <div className="flex items-center mb-4">
                <MapPin className="w-6 h-6 text-red-600 mr-3" />
                <h2 className="text-2xl font-semibold text-gray-800">Shipping Coverage</h2>
              </div>
              <p className="text-gray-600">
                We ship to all 50 U.S. states. Additional shipping charges may apply for Alaska, Hawaii, 
                and U.S. territories. International shipping is currently not available.
              </p>
            </section>

            <section>
              <div className="flex items-center mb-4">
                <Package className="w-6 h-6 text-red-600 mr-3" />
                <h2 className="text-2xl font-semibold text-gray-800">Free Shipping</h2>
              </div>
              <p className="text-gray-600">
                Free standard shipping on orders over $99. Free shipping applies to standard ground 
                shipping within the continental United States only.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Tracking Your Order</h2>
              <p className="text-gray-600">
                Once your order ships, you'll receive a confirmation email with tracking information. 
                You can track your package through our shipping partners: UPS, FedEx, and USPS.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Delivery Issues</h2>
              <p className="text-gray-600">
                If you experience any delivery issues or your package is damaged, please contact us 
                immediately. We work with all carriers to resolve delivery problems quickly.
              </p>
            </section>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Shipping;
