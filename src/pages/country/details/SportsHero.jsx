import React from "react";
import { motion } from "framer-motion";
import heroiamge from "../../../assets/place/sport.avif?url";

const SportsHero = () => {
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
          src={heroiamge}
          alt="Croatian Sports Adventures"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-gray-800/70"></div>
      </motion.div>

      {/* Content */}
      <motion.div
        className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4"
        initial={{ y: 60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.9 }}
      >
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold text-white mb-6"
          whileHover={{ scale: 1.04 }}
        >
          Sports Adventures in Croatia
        </motion.h1>

        <motion.p
          className="text-lg md:text-2xl text-white max-w-2xl mb-8"
          whileHover={{ scale: 1.02 }}
        >
          From thrilling water sports to iconic football matches—experience it
          all under the Mediterranean sun.
        </motion.p>

        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <button className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-full hover:bg-opacity-90 transition-all duration-300 shadow-lg">
            Explore Sports
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default SportsHero;
