import React, { useEffect, useState } from "react";
import { FiMapPin, FiStar, FiHome, FiUsers, FiHeart } from "react-icons/fi";
import herovillas from "../../assets/villas/herovillas.jpg";
import { motion, useAnimation } from "framer-motion";
const HeroVillas = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isLoaded) {
      controls.start({
        scale: 1.1,
        transition: {
          duration: 20,
          ease: "linear",
          repeat: Infinity,
          repeatType: "reverse",
        },
      });
    }
  }, [isLoaded, controls]);
  return (
    <div className="relative min-h-screen py-28 overflow-hidden">
      {/* Background Image */}
      <motion.div
        className="absolute inset-0 bg-gray-900"
        initial={{ scale: 1 }}
        animate={controls}
      >
        <img
          src={herovillas}
          alt="Luxury Croatian Villas"
          className="w-full h-full object-cover opacity-90"
          onLoad={() => setIsLoaded(true)}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/20"></div>
      </motion.div>

      {/* Content Container */}
      <div className="relative z-10 h-full flex items-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Text Content */}
            <div className="text-white">
              <motion.h1
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
              >
                <span className="text-[#25A69A]">Premium Villas</span> in
                Croatia's Most Beautiful Locations
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl text-gray-300 mb-8 max-w-lg"
              >
                Discover handpicked luxury villas with private pools, stunning
                sea views, and authentic Croatian charm.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <button className="bg-[#25A69A] hover:bg-[#1E8C82] text-white font-bold py-3 px-8 rounded-lg text-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center">
                  <FiHeart className="mr-2" />
                  Explore Our Collection
                </button>
              </motion.div>
            </div>

            {/* Right Side - Feature Cards */}
            <div className="grid grid-cols-2 gap-4">
              {/* Feature 1 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-[#25A69A]/50 transition-all duration-300"
              >
                <div className="flex items-center mb-3">
                  <FiMapPin className="text-2xl text-[#25A69A] mr-3" />
                  <h3 className="text-xl text-white font-semibold">
                    Prime Locations
                  </h3>
                </div>
                <p className="text-gray-300 text-sm">
                  Best beachfront spots along the Adriatic coast
                </p>
              </motion.div>

              {/* Feature 2 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-[#25A69A]/50 transition-all duration-300"
              >
                <div className="flex items-center mb-3">
                  <FiStar className="text-2xl text-[#25A69A] mr-3" />
                  <h3 className="text-xl text-white font-semibold">
                    4.9+ Ratings
                  </h3>
                </div>
                <p className="text-gray-300 text-sm">
                  Verified guest reviews from happy visitors
                </p>
              </motion.div>

              {/* Feature 3 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-[#25A69A]/50 transition-all duration-300"
              >
                <div className="flex items-center mb-3">
                  <FiHome className="text-2xl text-[#25A69A] mr-3" />
                  <h3 className="text-xl text-white font-semibold">
                    Luxury Amenities
                  </h3>
                </div>
                <p className="text-gray-300 text-sm">
                  Private pools, sea views, and premium comforts
                </p>
              </motion.div>

              {/* Feature 4 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-[#25A69A]/50 transition-all duration-300"
              >
                <div className="flex items-center mb-3">
                  <FiUsers className="text-2xl text-[#25A69A] mr-3" />
                  <h3 className="text-xl text-white font-semibold">
                    24/7 Support
                  </h3>
                </div>
                <p className="text-gray-300 text-sm">
                  Dedicated concierge service for your stay
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute bottom-20 left-10 w-24 h-24 rounded-full bg-[#25A69A]/10 blur-xl animate-float"></div>
      <div className="absolute top-20 right-10 w-32 h-32 rounded-full bg-[#25A69A]/10 blur-xl animate-float-delay"></div>

      {/* Animation styles */}
      <style jsx={true} global={true}>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0) translateX(0);
          }
          25% {
            transform: translateY(-20px) translateX(10px);
          }
          50% {
            transform: translateY(0) translateX(20px);
          }
          75% {
            transform: translateY(20px) translateX(10px);
          }
        }
        @keyframes float-delay {
          0%,
          100% {
            transform: translateY(0) translateX(0);
          }
          25% {
            transform: translateY(10px) translateX(-20px);
          }
          50% {
            transform: translateY(20px) translateX(0);
          }
          75% {
            transform: translateY(10px) translateX(20px);
          }
        }
        .animate-float {
          animation: float 15s ease-in-out infinite;
        }
        .animate-float-delay {
          animation: float-delay 18s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default HeroVillas;
