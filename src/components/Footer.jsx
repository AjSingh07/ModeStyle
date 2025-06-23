import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-[#1a2456] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">MODESTYLE</h3>
            <p className="text-[#e6d2b5] mb-4">
              Your one-stop destination for the latest fashion trends and timeless classics.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-[#e6d2b5] hover:text-white">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-[#e6d2b5] hover:text-white">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-[#e6d2b5] hover:text-white">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-[#e6d2b5] hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/women" className="text-[#e6d2b5] hover:text-white">
                  Women
                </Link>
              </li>
              <li>
                <Link to="/men" className="text-[#e6d2b5] hover:text-white">
                  Men
                </Link>
              </li>
              <li>
                <Link to="/accessories" className="text-[#e6d2b5] hover:text-white">
                  Accessories
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-xl font-bold mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/contact" className="text-[#e6d2b5] hover:text-white">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-[#e6d2b5] hover:text-white">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/shipping" className="text-[#e6d2b5] hover:text-white">
                  Shipping & Returns
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-[#e6d2b5] hover:text-white">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="text-[#e6d2b5] mt-1 mr-3" size={20} />
                <span className="text-[#e6d2b5]">
                  123 Fashion Street, Style City, SC 12345
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="text-[#e6d2b5] mr-3" size={20} />
                <span className="text-[#e6d2b5]">(123) 456-7890</span>
              </li>
              <li className="flex items-center">
                <Mail className="text-[#e6d2b5] mr-3" size={20} />
                <span className="text-[#e6d2b5]">info@modestyle.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-[#2a3566] mt-12 pt-8 text-center text-[#e6d2b5]">
          <p>&copy; {new Date().getFullYear()} MODESTYLE. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}; 