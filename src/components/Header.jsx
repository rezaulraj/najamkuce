import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiHome,
  FiMapPin,
  FiMail,
  FiMenu,
  FiX,
  FiGlobe,
  FiChevronDown,
} from "react-icons/fi";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPinterestP,
} from "react-icons/fa";
import CountryFlag from "react-country-flag";
import logo from "/logo1.png";
import logoblack from "/logo2.png";
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState("GB");

  const navList = [
    {
      label: "Home",
      path: "/",
      icon: <FiHome className="mr-2" />,
    },
    {
      label: "Villas",
      path: "/villas",
      icon: <FiHome className="mr-2" />,
    },
    {
      label: "Places In Croatia",
      path: "/place-in-croatia-blogs",
      icon: <FiMapPin className="mr-2" />,
    },
    {
      label: "Contact",
      path: "/contact",
      icon: <FiMail className="mr-2" />,
    },
  ];

  const languages = [
    { code: "GB", name: "English" },
    { code: "HR", name: "Croatian" },
    { code: "DE", name: "German" },
    { code: "FR", name: "French" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleLanguageMenu = () => {
    setLanguageOpen(!languageOpen);
  };

  const selectLanguage = (code) => {
    setCurrentLanguage(code);
    setLanguageOpen(false);
  };

  return (
    <header
      className={`fixed w-full z-50 transition-colors duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 ">
        <div className="flex items-center justify-between h-20 ">
          {/* Left Side - Logo and Social Links */}
          <div className="flex items-center space-x-6">
            {/* Logo */}
            <a href="/" className="flex-shrink-0">
              {isScrolled ? (
                <img
                  src={logoblack}
                  alt="Logo"
                  className="h-26 transition-all duration-300 hover:scale-105 brightness-300 invert"
                />
              ) : (
                <img
                  src={logoblack}
                  alt="Logo"
                  className="h-26 transition-all duration-300 hover:scale-105"
                />
              )}
            </a>

            {/* Social Links - Hidden on mobile */}
            <div className="hidden md:flex items-center space-x-4">
              <a
                href="#"
                className={`${
                  isScrolled
                    ? "text-gray-800 hover:text-gray-900"
                    : "text-primary hover:text-primary"
                } transition-transform hover:translate-y-2 duration-300 border rounded-full p-1 `}
              >
                <FaFacebookF size={16} />
              </a>
              <a
                href="#"
                className={`${
                  isScrolled
                    ? "text-gray-800 hover:text-gray-900"
                    : "text-primary hover:text-primary"
                } transition-transform hover:translate-y-2 duration-300 border rounded-full p-1 `}
              >
                <FaTwitter size={16} />
              </a>
              <a
                href="#"
                className={`${
                  isScrolled
                    ? "text-gray-800 hover:text-gray-900"
                    : "text-primary hover:text-primary"
                } transition-transform hover:translate-y-2 duration-300 border rounded-full p-1 `}
              >
                <FaInstagram size={16} />
              </a>
              <a
                href="#"
                className={`${
                  isScrolled
                    ? "text-gray-800 hover:text-gray-900"
                    : "text-primary hover:text-primary"
                } transition-transform hover:translate-y-2 duration-300 border rounded-full p-1 `}
              >
                <FaPinterestP size={16} />
              </a>
            </div>
          </div>

          {/* Right Side - Navigation and Language Selector */}
          <div className="flex items-center space-x-6">
            {/* Desktop Navigation - Hidden on mobile */}
            <nav className="hidden md:flex items-center space-x-1 lg:space-x-6">
              {navList.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.path}
                  className={`px-3 py-2 rounded-md text-sm lg:text-base font-medium flex items-center ${
                    isScrolled ? "text-gray-800" : "text-white"
                  } hover:text-primary transition-colors`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.icon}
                  {item.label}
                </motion.a>
              ))}
            </nav>

            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={toggleLanguageMenu}
                className={`flex items-center px-3 py-2 rounded-md ${
                  isScrolled ? "text-gray-800" : "text-white"
                } hover:bg-gray-100 hover:bg-opacity-20 transition-colors`}
              >
                <CountryFlag
                  countryCode={currentLanguage}
                  svg
                  className="mr-2 text-xl"
                />
                <FiChevronDown
                  className={`transition-transform ${
                    languageOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {languageOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg z-50"
                  >
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => selectLanguage(lang.code)}
                        className={`flex items-center w-full px-4 py-2 text-left text-sm ${
                          currentLanguage === lang.code
                            ? "bg-gray-100 text-primary"
                            : "text-gray-700 hover:bg-gray-50"
                        }`}
                      >
                        <CountryFlag
                          countryCode={lang.code}
                          svg
                          className="mr-3"
                        />
                        {lang.name}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`md:hidden p-2 ${
                isScrolled ? "text-gray-800" : "text-white"
              } rounded-full focus:outline-none`}
            >
              {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white shadow-lg"
          >
            <div className="container mx-auto px-4 py-4">
              <div className="flex flex-col space-y-4">
                {navList.map((item, index) => (
                  <motion.a
                    key={index}
                    href={item.path}
                    className="flex items-center px-4 py-3 text-gray-800 hover:bg-gray-50 rounded-lg"
                    whileHover={{ x: 5 }}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.icon}
                    <span className="ml-3">{item.label}</span>
                  </motion.a>
                ))}

                <div className="flex items-center space-x-4 px-4 py-3">
                  <a href="#" className="text-gray-600 hover:text-primary">
                    <FaFacebookF size={18} />
                  </a>
                  <a href="#" className="text-gray-600 hover:text-primary">
                    <FaTwitter size={18} />
                  </a>
                  <a href="#" className="text-gray-600 hover:text-primary">
                    <FaInstagram size={18} />
                  </a>
                  <a href="#" className="text-gray-600 hover:text-primary">
                    <FaPinterestP size={18} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
