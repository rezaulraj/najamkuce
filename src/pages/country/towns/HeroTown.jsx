import React from "react";
import { motion } from "framer-motion";
import heroTowns from "../../../assets/place/town.jpg?url";

const HeroTown = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.4,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.1, 0.8, 0.3, 1],
      },
    },
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background image with zoom effect */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <img
          src={heroTowns}
          alt="Beautiful Croatian Towns"
          className="w-full h-full object-cover"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/30 to-gray-900/60"></div>
      </motion.div>

      {/* Content */}
      <motion.div
        className="relative z-10 flex flex-col items-start justify-end h-full pb-20 px-8 md:px-16 lg:px-24"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="text-white text-lg mb-4 flex gap-2"
          variants={itemVariants}
        >
          <a href="/" className="opacity-80">
            Home
          </a>
          <span>{">"}</span>
          <a href="/place-in-croatia-blogs" className="opacity-80">
            Places In Croatia
          </a>
          <span>{">"}</span>
          <span className="font-medium">Towns</span>
        </motion.div>

        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight"
          variants={itemVariants}
        >
          Discover Croatia's <br className="hidden md:block" /> Most Beautiful
          Towns
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-white max-w-2xl mb-8"
          variants={itemVariants}
        >
          Explore charming coastal villages and historic cities that define
          Croatia's unique character.
        </motion.p>

        <motion.div variants={itemVariants}>
          <button className="px-8 py-3 bg-white text-black font-medium rounded-full hover:bg-opacity-90 transition-all duration-300">
            Explore Towns
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HeroTown;
