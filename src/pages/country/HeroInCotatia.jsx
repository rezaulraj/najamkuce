import React, { useEffect, useState } from "react";
import heroPlace from "../../assets/place/heroplace.jpg?url";
import { motion, useAnimation } from "framer-motion";

const HeroInCroatia = () => {
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
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background image with overlay */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ scale: 1 }}
        animate={controls}
      >
        <img
          src={heroPlace}
          alt="Beautiful place in Croatia"
          className="w-full h-full object-cover"
          onLoad={() => setIsLoaded(true)}
        />
        <div className="absolute inset-0 bg-black/20"></div>
      </motion.div>

      {/* Content with transparent text effect */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
        <div className="bg-white/20 backdrop-blur-sm p-8">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-wide">
            Croatia
          </h1>
          <p className="text-xl md:text-2xl text-white font-light mb-6">
            Discover the Adriatic Gem
          </p>
        </div>

        <div className="mt-8 bg-black bg-opacity-40 px-6 py-3 rounded-full">
          <p className="text-white text-sm md:text-base uppercase tracking-widest">
            Travel Blog & Guides
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroInCroatia;
