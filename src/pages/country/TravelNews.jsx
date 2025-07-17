import React from "react";
import {
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaPenAlt,
  FaWifi,
  FaFileAlt,
  FaLightbulb,
} from "react-icons/fa";
import { motion } from "framer-motion";
import LocalNews from "../../assets/place/news.webp?url";
const TravelNews = () => {
  const travelNews = {
    id: 1,
    title: "Croatia Introduces New Digital Nomad Visa Extension",
    slug: "croatia-digital-nomad-visa-extension",
    author: "Travel Croatia Team",
    publishedDate: "2025-07-15",
    heroImage: {
      url: "https://images.unsplash.com/photo-1621514855948-784b28c6db91?auto=format&fit=crop&w=1200&q=80",
      alt: "Remote worker by the sea in Croatia",
    },
    summary:
      "Remote workers, rejoice! Croatia has announced a major update to its digital nomad visa program, allowing extended stays up to 18 months without needing to leave the country.",
    tags: ["digital nomads", "visa", "remote work", "Croatia", "travel news"],
    content: [
      {
        sectionTitle: "What's New?",
        text: "The Croatian Ministry of the Interior has confirmed that digital nomads can now renew their one-year visa for an additional six months directly from within the country. This eliminates the need to exit and reapply, making long-term stays much easier.",
        icon: <FaPenAlt className="text-3xl text-blue-600" />,
      },
      {
        sectionTitle: "Why Croatia?",
        text: "From the cobblestone streets of Dubrovnik to the tech-friendly cities like Split and Zagreb, Croatia offers the perfect mix of history, coastline, and fast Wi-Fi. Its affordability, mild climate, and EU location make it a top choice for digital workers.",
        icon: <FaMapMarkerAlt className="text-3xl text-green-600" />,
      },
      {
        sectionTitle: "How to Apply",
        text: "Nomads can apply through the official Croatian eVisa platform. Required documents include proof of income (minimum €2,300/month), valid health insurance, accommodation confirmation, and a clean criminal record.",
        icon: <FaFileAlt className="text-3xl text-purple-600" />,
      },
      {
        sectionTitle: "Key Dates & Info",
        text: "Applications for extensions begin August 1, 2025. The original visa remains valid for 12 months, and the new extension grants an extra 6 months, for a total of 18.",
        icon: <FaCalendarAlt className="text-3xl text-amber-500" />,
      },
      {
        sectionTitle: "Travel Tip",
        text: "Consider basing yourself in Zadar or Rijeka for a quieter and more affordable remote work experience compared to hotspots like Dubrovnik.",
        icon: <FaLightbulb className="text-3xl text-yellow-500" />,
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
            src={LocalNews}
            alt={travelNews.heroImage.alt}
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
                  Breaking News
                </span>
                <span className="ml-3 text-white/90">
                  {travelNews.publishedDate}
                </span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
                {travelNews.title}
              </h1>
              <p className="text-lg md:text-xl text-white/90 mb-6">
                {travelNews.summary}
              </p>
              <div className="flex flex-wrap gap-2">
                {travelNews.tags.map((tag, index) => (
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
                <span className="text-sm">By {travelNews.author}</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Content Sections */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="p-8 md:p-12 space-y-12">
            {travelNews.content.map((section, index) => (
              <motion.section
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="flex gap-6"
              >
                <div className="flex-shrink-0">
                  <motion.div
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    className="p-3 bg-gray-100 rounded-lg"
                  >
                    {section.icon}
                  </motion.div>
                </div>
                <div>
                  <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
                    {section.sectionTitle}
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    {section.text}
                  </p>
                </div>
              </motion.section>
            ))}
          </div>
        </div>
      </div>

      {/* Related Info */}
      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-12 flex items-center justify-center">
            <FaWifi className="mr-3 text-blue-600" />
            Digital Nomad Hotspots in Croatia
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                city: "Zagreb",
                description: "Capital city with thriving coworking spaces",
                image:
                  "https://images.unsplash.com/photo-1597047084897-51e81819a499?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              },
              {
                city: "Split",
                description: "Coastal city with ancient Roman architecture",
                image:
                  "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              },
              {
                city: "Zadar",
                description: "Quieter alternative with stunning sunsets",
                image:
                  "https://images.unsplash.com/photo-1593696954577-ab3d39317b97?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              },
            ].map((location, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl overflow-hidden shadow-md"
              >
                <img
                  src={location.image}
                  alt={location.city}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="font-bold text-xl mb-2">{location.city}</h3>
                  <p className="text-gray-600">{location.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TravelNews;
