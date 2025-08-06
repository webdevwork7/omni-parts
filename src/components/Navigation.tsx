
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Phone, Mail } from "lucide-react";
import { brandConfig } from "@/config/brand";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Parts Catalog", href: "/parts" },
    { name: "Services", href: "/services" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" }
  ];

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      {/* Top bar */}
      <div className="bg-gray-800 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <span className="flex items-center">
              <Mail className="w-4 h-4 mr-2" />
              {brandConfig.email}
            </span>
            <span className="hidden md:flex items-center">
              <Phone className="w-4 h-4 mr-2" />
              {brandConfig.phone}
            </span>
          </div>
          <div className="text-sm">
            {brandConfig.hours}
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-red-600 text-white p-2 rounded-lg font-bold text-xl">
              O
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-800">{brandConfig.name}</h1>
              <p className="text-sm text-gray-600">{brandConfig.tagline}</p>
            </div>
          </Link>

          {/* Desktop navigation */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-gray-700 hover:text-red-600 font-medium transition-colors duration-200"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Call button */}
          <Button className="hidden md:flex bg-red-600 hover:bg-red-700 text-white px-6 py-2">
            <Phone className="w-4 h-4 mr-2" />
            Call Now
          </Button>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden border-t py-4 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="block text-gray-700 hover:text-red-600 font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Button className="w-full bg-red-600 hover:bg-red-700 text-white">
              <Phone className="w-4 h-4 mr-2" />
              {brandConfig.phone}
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
