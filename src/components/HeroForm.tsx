
import { useState } from "react";
import { Phone, User, Car, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { brandConfig } from "@/config/brand";
import { toast } from "sonner";
import { sendEmail } from "@/utils/emailService";

const HeroForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    vehicleMakeModel: "",
    requiredPartService: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      console.log("Sending email with data:", formData);
      
      const success = await sendEmail(formData);
      
      if (success) {
        toast.success("Thank you! Your request has been sent successfully.");
        setFormData({ fullName: "", phoneNumber: "", vehicleMakeModel: "", requiredPartService: "" });
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      console.error("Error sending email:", error);
      toast.error("Sorry, there was an error sending your request. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCallNow = () => {
    window.location.href = `tel:${brandConfig.phone}`;
  };

  return (
    <div className="bg-white rounded-lg shadow-xl p-6 border border-gray-200">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-gray-800 mb-2">Submit Request</h3>
        <p className="text-gray-600">Fill out the form and we'll get back to you quickly</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="relative">
          <User className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
          <Input
            name="fullName"
            type="text"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleInputChange}
            className="pl-10 text-black placeholder:text-gray-500"
            required
          />
        </div>

        <div className="relative">
          <Phone className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
          <Input
            name="phoneNumber"
            type="tel"
            placeholder="Phone Number"
            value={formData.phoneNumber}
            onChange={handleInputChange}
            className="pl-10 text-black placeholder:text-gray-500"
            required
          />
        </div>

        <div className="relative">
          <Car className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
          <Input
            name="vehicleMakeModel"
            type="text"
            placeholder="Vehicle Make & Model (e.g., 2020 Toyota Camry)"
            value={formData.vehicleMakeModel}
            onChange={handleInputChange}
            className="pl-10 text-black placeholder:text-gray-500"
            required
          />
        </div>

        <div className="relative">
          <Wrench className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
          <Textarea
            name="requiredPartService"
            placeholder="Required Part or Service (e.g., Brake pads, Oil change, Engine repair)"
            value={formData.requiredPartService}
            onChange={handleInputChange}
            className="pl-10 min-h-[100px] text-black placeholder:text-gray-500"
            required
          />
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <Button 
            type="submit" 
            disabled={isSubmitting}
            className="flex-1 bg-red-600 hover:bg-red-700 text-white disabled:opacity-50"
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </Button>
          <Button 
            type="button" 
            onClick={handleCallNow}
            className="flex-1 bg-gray-800 hover:bg-gray-900 text-white"
          >
            <Phone className="w-4 h-4 mr-2" />
            Call Now
          </Button>
        </div>
      </form>

      <div className="mt-4 text-center">
        <p className="text-lg font-semibold text-gray-800">
          Call us directly: <span className="text-red-600">{brandConfig.phone}</span>
        </p>
        <p className="text-sm text-gray-600 mt-1">Available {brandConfig.hours}</p>
      </div>
    </div>
  );
};

export default HeroForm;
