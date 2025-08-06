
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { brandConfig } from "@/config/brand";

const Returns = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <section className="bg-white py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-800 mb-8">Returns & Refund Policy</h1>

          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">30-Day Return Policy</h2>
              <p className="text-gray-600">
                We offer a 30-day return policy for most auto parts. Items must be in original condition, 
                unused, and in original packaging with all accessories and documentation.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Return Conditions</h2>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Items must be returned within 30 days of purchase</li>
                <li>Parts must be in original, unused condition</li>
                <li>Original packaging and labels must be included</li>
                <li>Return authorization number required (contact us first)</li>
                <li>Customer responsible for return shipping costs</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Non-Returnable Items</h2>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Electrical parts that have been installed</li>
                <li>Fluids and chemicals</li>
                <li>Custom-ordered parts</li>
                <li>Parts damaged by installation attempts</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Refund Process</h2>
              <p className="text-gray-600">
                Once we receive and inspect your return, we'll process your refund within 5-7 business days. 
                Refunds will be issued to the original payment method.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact for Returns</h2>
              <p className="text-gray-600">
                To initiate a return, contact us at {brandConfig.email} or {brandConfig.phone} 
                to receive your return authorization number and instructions.
              </p>
            </section>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Returns;
