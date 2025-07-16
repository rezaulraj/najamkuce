import React from "react";
import { motion } from "framer-motion";
import beachHero from "../../../assets/place/beatchhero.avif?url";

const HeroBeach = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background image with overlay */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <img
          src={beachHero}
          alt="Beautiful Beach Destination"
          className="w-full h-full object-cover"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-gray-900/70"></div>
      </motion.div>

      {/* Content */}
      <motion.div
        className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        <motion.h1
          className="text-4xl md:text-6xl font-bold text-white mb-6"
          whileHover={{ scale: 1.05 }}
        >
          Discover Paradise Beaches
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-white max-w-2xl mb-8"
          whileHover={{ scale: 1.02 }}
        >
          Crystal clear waters, white sandy shores, and unforgettable sunsets
        </motion.p>

        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <button className="px-8 py-3 bg-white text-blue-600 font-medium rounded-full hover:bg-opacity-90 transition-all duration-300 shadow-lg">
            Explore Beaches
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HeroBeach;
