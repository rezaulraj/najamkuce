import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import herocontact from "../../assets/contact/hero.jpeg?url";

const HeroContact = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

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
    <div className="relative w-full h-[70vh] overflow-hidden">
      {/* Background image with overlay  */}
      <motion.div
        className="absolute inset-0 "
        initial={{ scale: 1 }}
        animate={controls}
      >
        <motion.img
          src={herocontact}
          alt="Contact Us"
          className="w-full h-full object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          onLoad={() => setIsLoaded(true)}
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </motion.div>

      {/* Content */}
      <motion.div
        className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-4xl md:text-6xl font-bold text-white mb-4"
          variants={itemVariants}
        >
          Contact Us
        </motion.h1>

        <motion.div className="text-white text-lg" variants={itemVariants}>
          <a href="/" className="opacity-80">
            Home
          </a>
          <span className="mx-2">{">"}</span>
          <span className="font-medium">Contact Us</span>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HeroContact;
