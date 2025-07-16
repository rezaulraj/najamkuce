import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FiMapPin,
  FiCalendar,
  FiArrowRight,
  FiHeart,
  FiShare2,
} from "react-icons/fi";

const TownsBlog = () => {
  const townsBlogs = [
    {
      title: "Discover Dubrovnik: Pearl of the Adriatic",
      slug: "discover-dubrovnik",
      location: "Dubrovnik, Croatia",
      date: "May 15, 2023",
      summary:
        "Step into the timeless beauty of Dubrovnik – from ancient city walls to crystal-clear beaches, this city offers unforgettable travel and stay experiences.",
      image_url:
        "https://plus.unsplash.com/premium_photo-1661962737489-ee4b5ee6c0e2?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tags: ["Travel", "Rent", "Dubrovnik", "Croatia", "Beach", "History"],
    },
    {
      title: "Relax in Rovinj: A Romantic Istrian Escape",
      slug: "rovinj-istria",
      location: "Rovinj, Istria, Croatia",
      date: "June 2, 2023",
      summary:
        "Charming, colorful, and calm — Rovinj is the perfect coastal retreat for couples, artists, and digital nomads alike.",
      image_url:
        "https://images.unsplash.com/photo-1604696772766-0e73c63babf3?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tags: ["Rovinj", "Istria", "Croatia", "Seaside", "Romantic", "Rentals"],
    },
    {
      title: "Zagreb on a Budget: Urban Living Meets Historic Charm",
      slug: "zagreb-capital",
      location: "Zagreb, Croatia",
      date: "July 10, 2023",
      summary:
        "Experience Croatia's capital city like a local — from city parks to cultural museums, Zagreb is ideal for affordable urban travel and short-term stays.",
      image_url:
        "https://plus.unsplash.com/premium_photo-1661963323725-4824c9b5341f?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tags: ["Zagreb", "Croatia", "City Travel", "Budget", "Rent", "Culture"],
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };
  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: town.title,
          text: town.summary,
          url: window.location.href,
        })
        .then(() => console.log("Shared successfully"))
        .catch((err) => console.error("Share failed:", err));
    } else {
      alert("Sharing not supported on this browser.");
    }
  };
  return (
    <div className="py-20 px-4 sm:px-8 lg:px-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="space-y-28"
        >
          {townsBlogs.map((town, index) => (
            <motion.div
              key={town.slug}
              variants={itemVariants}
              className={`group relative flex flex-col gap-8 md:gap-12  border-primary py-4 not-last:border-b ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Decorative element */}
              <div className="absolute hidden md:block -z-10 w-32 h-32 rounded-full bg-blue-100 opacity-30 top-1/4 -left-16 group-even:left-auto group-even:-right-16"></div>

              {/* Image Section */}
              <div className="md:w-1/2">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.4 }}
                  className="overflow-hidden rounded-2xl shadow-xl relative"
                >
                  <img
                    src={`${town.image_url}?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80`}
                    alt={town.title}
                    className="w-full h-full object-cover aspect-video"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent"></div>
                  <div className="absolute top-4 right-4 flex gap-2">
                    <button className="p-2 bg-white/90 rounded-full text-gray-800 hover:text-red-500 transition-colors">
                      <FiHeart className="w-5 h-5" />
                    </button>
                    <button
                      onClick={handleShare}
                      className="p-2 bg-white/90 rounded-full text-gray-800 hover:text-blue-500 transition-colors"
                    >
                      <FiShare2 className="w-5 h-5" />
                    </button>
                  </div>
                </motion.div>
              </div>

              {/* Text Section */}
              <div className="md:w-1/2 flex flex-col justify-center">
                <div className="space-y-5">
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <FiMapPin className="w-4 h-4" />
                      <span>{town.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <FiCalendar className="w-4 h-4" />
                      <span>{town.date}</span>
                    </div>
                  </div>

                  <Link to={`/croatia/historic-towns/${town.slug}`}>
                    <motion.h2
                      whileHover={{ color: "#cca041" }}
                      className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight"
                    >
                      {town.title}
                    </motion.h2>
                  </Link>

                  <p className="text-lg text-gray-600 leading-relaxed">
                    {town.summary}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {town.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-block px-3 py-1 text-xs font-medium text-gray-700 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <Link
                    to={`/croatia/historic-towns/${town.slug}`}
                    className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-secondary transition-colors duration-300 group"
                  >
                    Read More
                    <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default TownsBlog;
