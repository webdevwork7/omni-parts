
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { brandConfig } from "@/config/brand";

const Disclaimer = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <section className="bg-white py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-800 mb-8">Disclaimer</h1>

          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">General Information</h2>
              <p className="text-gray-600">
                The information on this website is provided on an "as is" basis. To the fullest extent 
                permitted by law, {brandConfig.name} excludes all representations, warranties, obligations, 
                and liabilities arising out of or in connection with the information provided.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Professional Installation</h2>
              <p className="text-gray-600">
                Auto parts should be installed by qualified professionals. Improper installation can 
                result in vehicle damage or safety hazards. {brandConfig.name} is not responsible for 
                installation-related issues or damages.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Compatibility</h2>
              <p className="text-gray-600">
                While we strive to provide accurate compatibility information, customers are responsible 
                for verifying that parts are suitable for their specific vehicle before purchase and 
                installation.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Limitation of Liability</h2>
              <p className="text-gray-600">
                {brandConfig.name} will not be liable for any direct, indirect, special, incidental, 
                or consequential damages arising from the use of our products or services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Us</h2>
              <p className="text-gray-600">
                If you have questions about this disclaimer, please contact us at {brandConfig.email}.
              </p>
            </section>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Disclaimer;
