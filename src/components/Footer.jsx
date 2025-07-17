import React from "react";
import {
  FiFacebook,
  FiTwitter,
  FiInstagram,
  FiLinkedin,
  FiMail,
  FiPhone,
  FiMapPin,
  FiClock,
} from "react-icons/fi";
import { FaAirbnb, FaTripadvisor } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* About Column */}
          <div>
            <a href="/">
              <img src="/logo2.png" alt="" className="h-32" />
            </a>
            <p className="text-gray-400 mb-6">
              Croatia's premier vacation rental agency offering luxury villas
              with the highest standards of quality and service.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                <FiFacebook className="text-xl" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                <FiInstagram className="text-xl" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                <FiTwitter className="text-xl" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                <FiLinkedin className="text-xl" />
              </a>
              {/* <a
                href="#"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                <FaAirbnb className="text-xl" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                <FaTripadvisor className="text-xl" />
              </a> */}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="/about-us"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/villas"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  Villas
                </a>
              </li>
              <li>
                <a
                  href="/place-in-croatia-blogs"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  Places In Croatia
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  Our Services
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  Contact Us - guests
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  Contact Us - owners
                </a>
              </li>
              {/* <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  Contact
                </a>
              </li> */}
            </ul>
          </div>

          {/* Destinations */}
          <div>
            <h3 className="text-xl font-bold mb-6">Customer Helps</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="/croatia/historic-towns"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  Historic Towns
                </a>
              </li>
              <li>
                <a
                  href="/croatia/beaches"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  Adriatic Beaches
                </a>
              </li>
              <li>
                <a
                  href="/croatia/national-parks"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  National Parks
                </a>
              </li>
              <li>
                <a
                  href="/gastronomy/fine-dining"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  Gourmet Dining
                </a>
              </li>
              <li>
                <a
                  href="/adventures/adrenaline"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  Adrenaline Rush
                </a>
              </li>
              <li>
                <a
                  href="/adventures/extreme-sports"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  Extreme Sports
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <FiMapPin className="text-primary mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-400">
                  Vončinina ul. 14, 10000, Zagreb, Croatia
                </span>
              </li>
              <li className="flex items-center">
                <FiPhone className="text-primary mr-3" />
                <span className="text-gray-400">0955880747</span>
              </li>
              <li className="flex items-center">
                <FiMail className="text-primary mr-3" />
                <span className="text-gray-400">Contact@najamkuce.agency</span>
              </li>
              <li className="flex items-center">
                <FiClock className="text-primary mr-3" />
                <span className="text-gray-400">Mon-Fri: 9AM - 6PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        {/* <div className="bg-[#1a1a1a] rounded-lg p-8 mb-12">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-2">
              Subscribe to Our Newsletter
            </h3>
            <p className="text-gray-400 mb-6">
              Get the latest deals and travel inspiration straight to your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-primary focus:outline-none"
              />
              <button className="bg-primary hover:bg-primary text-white font-medium py-3 px-6 rounded-lg transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div> */}

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-500 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Najamkuce Agency. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <a
              href="#"
              className="text-gray-500 hover:text-primary text-sm transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-primary text-sm transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-primary text-sm transition-colors"
            >
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
