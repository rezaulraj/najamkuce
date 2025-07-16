import React from "react";
import { motion } from "framer-motion";
import heronation from "../../../assets/place/heronation.avif?url";

const HeroNationalPark = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background image with gradient overlay */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <img
          src={heronation}
          alt="Croatian National Park Landscape"
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
          className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg"
          whileHover={{ scale: 1.05 }}
        >
          Croatia's Wild Wonders
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-white max-w-2xl mb-8 leading-relaxed"
          whileHover={{ scale: 1.02 }}
        >
          Explore pristine national parks where mountains meet the sea
        </motion.p>

        <motion.div
          className="flex gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-white text-green-700 font-medium rounded-full hover:bg-opacity-90 transition-all duration-300 shadow-lg"
          >
            Discover Parks
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HeroNationalPark;
