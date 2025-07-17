import React from "react";
import {
  FaCalendarAlt,
  FaBus,
  FaMoneyBillWave,
  FaUtensils,
  FaWifi,
  FaSuitcase,
  FaLanguage,
  FaShieldAlt,
} from "react-icons/fa";
import { motion } from "framer-motion";
import tipsforguide from "../../assets/place/tipsguide.avif?url";
const TipsForGuide = () => {
  const forGuide = {
    id: 1,
    title: "Essential Travel Tips for Your Croatian Adventure",
    slug: "croatia-essential-travel-guide",
    publishedDate: "2025-07-17",
    author: "Visit Croatia Insights",
    heroImage: {
      url: "https://images.unsplash.com/photo-1603880985281-2f542bfc6ae5?auto=format&fit=crop&w=1200&q=80",
      alt: "Travelers exploring Croatia coastline",
    },
    summary:
      "From navigating islands to understanding local culture, here's your all-in-one travel tips guide for a smooth and unforgettable Croatian vacation.",
    tags: [
      "Croatia",
      "travel guide",
      "vacation tips",
      "seasonal advice",
      "cultural guide",
    ],
    tips: [
      {
        category: "Seasonal Advice",
        items: [
          "May to October is ideal for visiting coastal towns and islands.",
          "July–August offers festivals and nightlife, but it's the busiest and hottest.",
          "April–May and September–October are quieter, cooler, and great for hiking or exploring cities.",
        ],
        icon: <FaCalendarAlt className="text-2xl text-blue-600" />,
      },
      {
        category: "Transportation",
        items: [
          "Use buses for intercity travel — they're reliable and frequent.",
          "Renting a car is best for exploring remote beaches, national parks, and wine regions.",
          "For islands, ferries (e.g., Jadrolinija, Krilo) and catamarans are essential.",
        ],
        icon: <FaBus className="text-2xl text-green-600" />,
      },
      {
        category: "Money & Budgeting",
        items: [
          "Croatia uses the Euro (€). Most places accept cards, but carry cash for small shops and markets.",
          "ATMs are widely available, but avoid ones with high foreign transaction fees.",
          "Tipping is not required but appreciated — 5-10% at restaurants is common.",
        ],
        icon: <FaMoneyBillWave className="text-2xl text-yellow-500" />,
      },
      {
        category: "Food & Dining",
        items: [
          "Try local dishes like black risotto (crni rižot), Peka, and Pašticada.",
          "Seafood is fresh and excellent on the coast; inland you'll find hearty meat dishes.",
          "Vegetarians will find options, but may need to ask for adjustments in smaller towns.",
        ],
        icon: <FaUtensils className="text-2xl text-red-500" />,
      },
      {
        category: "Connectivity",
        items: [
          "Wi-Fi is fast in cities and most accommodations.",
          "Get a local SIM card from A1, Telemach, or Hrvatski Telekom for affordable data.",
          "Public charging stations are common in Zagreb, Split, and Dubrovnik.",
        ],
        icon: <FaWifi className="text-2xl text-blue-500" />,
      },
      {
        category: "Packing Tips",
        items: [
          "Bring swimwear, sunscreen, and water shoes for beach days.",
          "Pack light layers and a rain jacket for mountain hikes or spring/autumn travel.",
          "A reusable water bottle is handy — tap water is safe and clean.",
        ],
        icon: <FaSuitcase className="text-2xl text-gray-600" />,
      },
      {
        category: "Etiquette & Culture",
        items: [
          "Learn basic Croatian phrases: 'Dobar dan' (Good day), 'Hvala' (Thank you).",
          "Croatians are warm and proud — respect their traditions and history.",
          "Dress modestly when entering churches or rural villages.",
        ],
        icon: <FaLanguage className="text-2xl text-purple-600" />,
      },
      {
        category: "Safety & Emergencies",
        items: [
          "Croatia is safe; petty theft is rare but keep an eye on valuables in crowded areas.",
          "Emergency number is 112 — works for police, fire, and medical help.",
          "Pharmacies (Ljekarna) are marked with a green cross and staff often speak English.",
        ],
        icon: <FaShieldAlt className="text-2xl text-green-500" />,
      },
    ],
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="relative h-screen max-h-[700px] overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          <img
            src={tipsforguide}
            alt={forGuide.heroImage.alt}
            className="w-full h-full object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/30 via-gray-800/30 to-gray-900/60 flex items-end pb-12 md:pb-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="max-w-3xl"
            >
              <div className="mb-4 flex items-center">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                  Travel Guide
                </span>
                <span className="ml-3 text-white/90">
                  {forGuide.publishedDate}
                </span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
                {forGuide.title}
              </h1>
              <p className="text-lg md:text-xl text-white/90 mb-6">
                {forGuide.summary}
              </p>
              <div className="flex flex-wrap gap-2">
                {forGuide.tags.map((tag, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                    className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs"
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
              <div className="mt-6 text-white/80 flex items-center">
                <span className="text-sm">By {forGuide.author}</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Tips Sections */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {forGuide.tips.map((tip, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <motion.div
                      whileHover={{ rotate: 10, scale: 1.1 }}
                      className="p-2 bg-gray-100 rounded-lg mr-3"
                    >
                      {tip.icon}
                    </motion.div>
                    <h2 className="text-xl font-bold text-gray-800">
                      {tip.category}
                    </h2>
                  </div>
                  <ul className="space-y-3">
                    {tip.items.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="flex items-start text-gray-600"
                      >
                        <span className="inline-block w-1 h-1 mt-2 mr-2 bg-gray-400 rounded-full flex-shrink-0"></span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TipsForGuide;
