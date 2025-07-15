import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { FiStar, FiHome, FiHeadphones, FiCheckCircle } from "react-icons/fi";
import heroimage from "../../assets/home/herohome.jpg?url";

import { FaArrowRight } from "react-icons/fa";

const HeroHome = () => {
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
    <div className="relative min-h-screen overflow-hidden py-28">
      {/* Background Image with Zoom Effect */}
      <motion.div
        className="absolute inset-0 bg-gray-900"
        initial={{ scale: 1 }}
        animate={controls}
      >
        <img
          src={heroimage}
          alt="Croatian coastal villa"
          className="w-full h-full object-cover opacity-80"
          onLoad={() => setIsLoaded(true)}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col lg:flex-row items-center justify-between px-4 sm:px-6 lg:px-12">
        {/* Left Side - Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="w-full lg:w-1/2 text-left lg:py-0"
        >
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              <span className="text-[#25A69A]">Discover</span> Your Perfect
              Holiday Home in Croatia
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Experience luxury villas with stunning sea views, private pools,
              and authentic Croatian charm.
            </p>
            <button className="bg-transparent border-2 backdrop-blur-lg hover:bg-[#1E8C82]/30 hover:scale-105 transition-transform cursor-pointer text-white font-bold py-3 px-8 rounded-lg duration-300 hidden md:flex items-center gap-2">
              Explore Properties
              <FaArrowRight className="animate-pulse" />
            </button>
          </div>
        </motion.div>

        {/* Right Side - Features */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="w-full lg:w-1/2 flex justify-center lg:justify-end"
        >
          <div className="grid grid-cols-2 gap-4 max-w-md">
            {/* Feature 1 */}
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-[#25A69A]/50 transition-all duration-300"
            >
              <div className="flex items-center mb-3">
                <FiHome className="text-2xl text-[#25A69A] mr-3" />
                <h3 className="text-xl font-semibold text-white">
                  500+ Villas
                </h3>
              </div>
              <p className="text-gray-300 text-sm">
                Luxury properties with premium amenities
              </p>
            </motion.div>

            {/* Feature 2 */}
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-[#25A69A]/50 transition-all duration-300"
            >
              <div className="flex items-center mb-3">
                <FiStar className="text-2xl text-[#25A69A] mr-3" />
                <h3 className="text-xl font-semibold text-white">5★ Ratings</h3>
              </div>
              <p className="text-gray-300 text-sm">
                Exceptional guest experiences
              </p>
            </motion.div>

            {/* Feature 3 */}
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-[#25A69A]/50 transition-all duration-300"
            >
              <div className="flex items-center mb-3">
                <FiHeadphones className="text-2xl text-[#25A69A] mr-3" />
                <h3 className="text-xl font-semibold text-white">
                  24/7 Support
                </h3>
              </div>
              <p className="text-gray-300 text-sm">
                Dedicated customer service
              </p>
            </motion.div>

            {/* Feature 4 */}
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-[#25A69A]/50 transition-all duration-300"
            >
              <div className="flex items-center mb-3">
                <FiCheckCircle className="text-2xl text-[#25A69A] mr-3" />
                <h3 className="text-xl font-semibold text-white">Verified</h3>
              </div>
              <p className="text-gray-300 text-sm">
                100% authentic property listings
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <div className="absolute bottom-10 left-10 w-24 h-24 rounded-full bg-[#25A69A]/10 blur-xl animate-float"></div>
      <div className="absolute top-10 right-10 w-32 h-32 rounded-full bg-[#25A69A]/10 blur-xl animate-float-delay"></div>

      {/* Animation styles */}
      <style jsx global>{`
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

export default HeroHome;
