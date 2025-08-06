
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Shield, Award, CheckCircle } from "lucide-react";
import { brandConfig } from "@/config/brand";

const Warranty = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Warranty Information</h1>
          <p className="text-xl text-gray-300">Quality guaranteed with comprehensive warranty coverage</p>
        </div>
      </section>

      <section className="bg-white py-12">
        <div className="max-w-4xl mx-auto px-4">
          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <div className="flex items-center mb-4">
                <Shield className="w-6 h-6 text-red-600 mr-3" />
                <h2 className="text-2xl font-semibold text-gray-800">Our Warranty Promise</h2>
              </div>
              <p className="text-gray-600">
                At {brandConfig.name}, we stand behind the quality of our products. All parts come with 
                manufacturer warranties, and we provide additional protection through our comprehensive 
                warranty program.
              </p>
            </section>

            <section>
              <div className="flex items-center mb-4">
                <Award className="w-6 h-6 text-red-600 mr-3" />
                <h2 className="text-2xl font-semibold text-gray-800">Warranty Coverage</h2>
              </div>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li><strong>Engine Parts:</strong> 12-36 months depending on manufacturer</li>
                <li><strong>Brake Components:</strong> 12-24 months or 12,000-24,000 miles</li>
                <li><strong>Electrical Parts:</strong> 12 months from installation</li>
                <li><strong>Filters:</strong> 12 months or until next service interval</li>
                <li><strong>Suspension Parts:</strong> 12-36 months depending on type</li>
              </ul>
            </section>

            <section>
              <div className="flex items-center mb-4">
                <CheckCircle className="w-6 h-6 text-red-600 mr-3" />
                <h2 className="text-2xl font-semibold text-gray-800">What's Covered</h2>
              </div>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Manufacturing defects</li>
                <li>Material failures under normal use</li>
                <li>Premature wear beyond normal expectations</li>
                <li>Functional failures when properly installed</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">What's Not Covered</h2>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Normal wear and tear</li>
                <li>Damage from improper installation</li>
                <li>Damage from accidents or misuse</li>
                <li>Damage from modifications</li>
                <li>Consequential damages</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Warranty Claims</h2>
              <p className="text-gray-600">
                To file a warranty claim, contact us at {brandConfig.email} or {brandConfig.phone}. 
                Please have your order number and installation details ready. We may require the part 
                to be returned for inspection.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Installation Requirements</h2>
              <p className="text-gray-600">
                For warranty coverage, parts must be installed by a qualified technician according to 
                manufacturer specifications. Improper installation may void the warranty.
              </p>
            </section>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Warranty;
