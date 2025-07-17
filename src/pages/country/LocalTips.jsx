import React from "react";
import {
  FaShoppingBasket,
  FaUtensils,
  FaSun,
  FaSwimmer,
  FaTaxi,
  FaGlassCheers,
  FaCalendarAlt,
  FaCamera,
} from "react-icons/fa";
import { motion } from "framer-motion";
import tipsforowner from "../../assets/place/owner.png?url";

const LocalTips = () => {
  const localTips = {
    id: 104,
    title: "Local Tips for Visiting Croatia Like a Native",
    slug: "croatia-local-travel-tips",
    author: "Insider Croatia",
    publishedDate: "2025-07-17",
    heroImage: {
      url: "https://plus.unsplash.com/premium_photo-1719066378181-0d5f2a8eefbb?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Croatian street cafe scene with locals",
    },
    summary:
      "Forget the tourist traps. Here are the insider travel tips locals wish you knew before visiting Croatia.",
    tags: [
      "Croatia",
      "local tips",
      "travel guide",
      "authentic experience",
      "vacation hacks",
    ],
    sections: [
      {
        title: "Shop & Eat Like a Local",
        content: [
          "Skip large supermarkets. Visit morning open-air markets ('pijaca') for fresh produce, cheese, and local honey.",
          "Croatians eat dinner later than some travelers expect — locals dine around 8–9 PM.",
          "Konobas (family-run taverns) often serve the most authentic, homemade meals at reasonable prices.",
        ],
        icon: <FaShoppingBasket className="text-2xl text-green-600" />,
      },
      {
        title: "Discover Hidden Gems",
        content: [
          "Instead of only visiting Dubrovnik, explore Šibenik, Ston, and Motovun for stunning views without the crowds.",
          "Locals often swim at lesser-known rocky beaches just outside of the main tourist towns — ask your host!",
          "Sunset at Zadar's Sea Organ is a tradition, not a tourist trap — bring a drink and enjoy the sounds.",
        ],
        icon: <FaSun className="text-2xl text-yellow-500" />,
      },
      {
        title: "Avoid Tourist Pitfalls",
        content: [
          "Avoid eating at restaurants with English-only menus and pushy hosts on the street — these often have inflated prices.",
          "Taxis in tourist areas may not use meters — use Bolt or Uber where available for fair pricing.",
          "Tap water is 100% drinkable — skip buying bottled water constantly.",
        ],
        icon: <FaTaxi className="text-2xl text-red-500" />,
      },
      {
        title: "Blend Into the Culture",
        content: [
          "When entering a shop or cafe, greet people with 'Dobar dan' (Good day) — it's a small gesture, but appreciated.",
          "Locals value personal space — try not to speak too loudly in restaurants or on transport.",
          "Coffee culture is big — people sit and sip for hours, so take your time and enjoy the moment.",
        ],
        icon: <FaGlassCheers className="text-2xl text-blue-500" />,
      },
      {
        title: "Seasonal Insider Tips",
        content: [
          "Spring (April–May) and Fall (September–October) are locals' favorite times — mild weather, no crowds.",
          "In summer, start sightseeing early (before 10 AM) to avoid heat and cruise ship waves.",
          "Ferries and buses fill fast in July–August — book tickets in advance if traveling to islands.",
        ],
        icon: <FaCalendarAlt className="text-2xl text-purple-600" />,
      },
      {
        title: "Unwritten Rules",
        content: [
          "Don't walk shirtless in city centers or while sightseeing — it's considered disrespectful.",
          "Sunday is rest day — many local businesses (outside tourist zones) are closed or have shorter hours.",
          "Ask permission before taking photos of locals, especially in rural areas or during cultural ceremonies.",
        ],
        icon: <FaCamera className="text-2xl text-gray-600" />,
      },
    ],
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="relative h-screen overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          <img
            src={localTips.heroImage.url}
            alt={localTips.heroImage.alt}
            className="w-full h-full object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/30 via-gray-800/30 to-gray-900/70 flex items-end pb-12 md:pb-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="max-w-3xl"
            >
              <div className="mb-4 flex items-center">
                <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
                  Insider Guide
                </span>
                <span className="ml-3 text-white/90">
                  {localTips.publishedDate}
                </span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
                {localTips.title}
              </h1>
              <p className="text-lg md:text-xl text-white/90 mb-6">
                {localTips.summary}
              </p>
              <div className="flex flex-wrap gap-2">
                {localTips.tags.map((tag, index) => (
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
                <span className="text-sm">By {localTips.author}</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Local Tips Sections */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {localTips.sections.map((section, index) => (
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
                      {section.icon}
                    </motion.div>
                    <h2 className="text-xl font-bold text-gray-800">
                      {section.title}
                    </h2>
                  </div>
                  <ul className="space-y-3">
                    {section.content.map((item, itemIndex) => (
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

      {/* Local Insight Section */}
      <div className="bg-gradient-to-br from-yellow-50 to-orange-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="md:w-1/3"
            >
              <img
                src={tipsforowner}
                alt="Local Croatian host"
                className="rounded-xl shadow-xl w-full max-w-xs mx-auto"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="md:w-2/3"
            >
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Want Even More Local Insight?
              </h2>
              <p className="text-gray-600 mb-6">
                Connect with local hosts who can share personalized
                recommendations and hidden gems you won't find in guidebooks.
                Many Croatians love sharing their culture with respectful
                visitors.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="bg-orange-100 text-orange-800 rounded-full p-2 mr-3">
                    <FaUtensils className="text-lg" />
                  </span>
                  <p className="text-gray-700">
                    <strong>Food tip:</strong> Ask about "marenda" — the
                    Croatian mid-morning snack tradition along the coast.
                  </p>
                </div>
                <div className="flex items-start">
                  <span className="bg-orange-100 text-orange-800 rounded-full p-2 mr-3">
                    <FaSwimmer className="text-lg" />
                  </span>
                  <p className="text-gray-700">
                    <strong>Swimming tip:</strong> Locals often swim before
                    breakfast when the sea is calmest and beaches are empty.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocalTips;
