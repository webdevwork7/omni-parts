
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { brandConfig } from "@/config/brand";

const Terms = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <section className="bg-white py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-800 mb-8">Terms & Conditions</h1>
          <p className="text-gray-600 mb-8">Last updated: January 2024</p>

          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Acceptance of Terms</h2>
              <p className="text-gray-600">
                By accessing and using {brandConfig.name}'s website and services, you accept and agree 
                to be bound by the terms and provision of this agreement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Use License</h2>
              <p className="text-gray-600">
                Permission is granted to temporarily download one copy of the materials on {brandConfig.name}'s 
                website for personal, non-commercial transitory viewing only.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Product Information</h2>
              <p className="text-gray-600">
                We strive to provide accurate product information, but we do not warrant that product 
                descriptions or other content is accurate, complete, reliable, current, or error-free.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Pricing and Availability</h2>
              <p className="text-gray-600">
                All prices are subject to change without notice. We reserve the right to refuse or 
                cancel any orders placed for products listed at an incorrect price.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Information</h2>
              <p className="text-gray-600">
                Questions about these Terms & Conditions should be sent to us at {brandConfig.email}.
              </p>
            </section>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Terms;
