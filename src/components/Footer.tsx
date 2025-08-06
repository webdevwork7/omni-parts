
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, Facebook, Twitter, Instagram } from "lucide-react";
import { brandConfig } from "@/config/brand";

const Footer = () => {
  const quickLinks = [
    { name: "About Us", href: "/about" },
    { name: "Parts Catalog", href: "/parts" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" }
  ];

  const policies = [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Returns & Refunds", href: "/returns" },
    { name: "Shipping & Delivery", href: "/shipping" },
    { name: "Terms & Conditions", href: "/terms" },
    { name: "Disclaimer", href: "/disclaimer" },
    { name: "Warranty", href: "/warranty" }
  ];

  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-red-600 text-white p-2 rounded-lg font-bold text-xl">
                O
              </div>
              <div>
                <h3 className="text-xl font-bold">{brandConfig.name}</h3>
                <p className="text-sm text-gray-300">{brandConfig.tagline}</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              Your trusted partner for quality auto parts and professional automotive services.
            </p>
            <div className="flex space-x-4">
              <a href={brandConfig.social.facebook} className="text-gray-300 hover:text-white">
                <Facebook className="w-5 h-5" />
              </a>
              <a href={brandConfig.social.twitter} className="text-gray-300 hover:text-white">
                <Twitter className="w-5 h-5" />
              </a>
              <a href={brandConfig.social.instagram} className="text-gray-300 hover:text-white">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href} 
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Policies</h4>
            <ul className="space-y-2">
              {policies.map((policy) => (
                <li key={policy.name}>
                  <Link 
                    to={policy.href} 
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {policy.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-red-400" />
                <span className="text-gray-300">{brandConfig.phone}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-red-400" />
                <span className="text-gray-300">{brandConfig.email}</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-red-400 mt-1" />
                <span className="text-gray-300">{brandConfig.address}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-red-400" />
                <span className="text-gray-300">{brandConfig.hours}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © 2024 {brandConfig.name}. All rights reserved. | Designed for automotive excellence.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
