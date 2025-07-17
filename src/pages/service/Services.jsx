import React from "react";
import {
  FaHome,
  FaStar,
  FaRoute,
  FaCar,
  FaKey,
  FaUmbrellaBeach,
} from "react-icons/fa";
import { motion } from "framer-motion";

const Services = () => {
  const serviceData = {
    id: 105,
    title: "Exclusive Travel Services in Croatia by HomeRent",
    slug: "travel-services-croatia-homerent",
    author: "HomeRent Croatia",
    publishedDate: "2025-07-17",
    heroImage: {
      url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
      alt: "Luxury villa by the sea in Croatia",
    },
    summary:
      "Discover how HomeRent elevates your Croatian vacation with premium rental, trip planning, property management, and VIP services — all tailored to your peace of mind.",
    tags: [
      "Croatia",
      "vacation services",
      "luxury villas",
      "property management",
      "private travel",
    ],
    sections: [
      {
        title: "Rental Management in Croatia",
        content: [
          "HomeRent offers tailored rental management services for luxury villas and holiday homes across Croatia. With years of experience as a trusted travel agency, we specialize in seamless booking and guest communication.",
          "We ensure secure payments, optimal pricing, and high-standard maintenance services for holiday homes, creating satisfaction for both guests and property owners.",
        ],
        image: {
          url: "https://images.unsplash.com/photo-1615472711514-223c6cc68874?auto=format&fit=crop&w=1000&q=80",
          alt: "Holiday villa with pool in Croatia",
        },
        icon: <FaHome className="text-3xl text-blue-600" />,
      },
      {
        title: "Booking Luxury Villas in Croatia",
        content: [
          "Experience Croatia in style. HomeRent lists and manages luxury villas through global platforms and our exclusive network, streamlining the entire booking process with complete security.",
          "We understand that trust and comfort are key. That's why we collaborate closely with villa owners to ensure world-class service that delivers dream vacations.",
        ],
        image: {
          url: "https://images.unsplash.com/photo-1590490360182-664d6d50cf61?auto=format&fit=crop&w=1000&q=80",
          alt: "Luxury villa interior with ocean view",
        },
        icon: <FaStar className="text-3xl text-yellow-500" />,
      },
      {
        title: "Private Trip Planning to Croatia",
        content: [
          "Our VIP travel service offers personalized vacation planning in Croatia — the Mediterranean's rising star. From arrival to departure, we curate every aspect of your trip: accommodation, transport, and on-site coordination.",
          "This service is perfect for guests seeking complete peace of mind with zero compromises on comfort and privacy.",
        ],
        image: {
          url: "https://images.unsplash.com/photo-1575908522061-bb6165f7e688?auto=format&fit=crop&w=1000&q=80",
          alt: "Private jet flying over the Adriatic coast",
        },
        icon: <FaRoute className="text-3xl text-purple-600" />,
      },
      {
        title: "Private Transfers & Excursions",
        content: [
          "Need airport pickup, island transfers, or private boat tours? HomeRent partners with trusted providers to offer high-quality private transfers and memorable excursions throughout Croatia.",
          "Your villa host or our concierge team will coordinate all your needs, including last-minute activities, so you can focus on enjoyment.",
        ],
        image: {
          url: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=1000&q=80",
          alt: "Private boat excursion in Croatia",
        },
        icon: <FaCar className="text-3xl text-green-600" />,
      },
      {
        title: "Property Management in Croatia",
        content: [
          "Our full-service property management includes key holding, regular inspections, pool and garden maintenance, cleaning, and check-in/out services.",
          "This ensures that villas remain spotless, safe, and guest-ready at all times. We are proud to provide one of the most meticulous and reliable property services in Croatia.",
        ],
        image: {
          url: "https://images.unsplash.com/photo-1505691723518-36a9f79ad6d2?auto=format&fit=crop&w=1000&q=80",
          alt: "Professional villa cleaning team at work",
        },
        icon: <FaKey className="text-3xl text-red-500" />,
      },
      {
        title: "Your Perfect Vacation Starts Here",
        content: [
          "At HomeRent, your vacation doesn't just begin with a reservation — it ends with a feeling. Whether you're a guest or villa owner, our mission is to deliver excellence at every touchpoint.",
          "From world-class rentals to VIP services, we ensure your time in Croatia is not just a visit, but a cherished memory.",
        ],
        image: {
          url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1000&q=80",
          alt: "Relaxed guests enjoying sunset at Croatian villa",
        },
        icon: <FaUmbrellaBeach className="text-3xl text-teal-500" />,
      },
    ],
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="relative h-screen max-h-[800px] overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          <img
            src={serviceData.heroImage.url}
            alt={serviceData.heroImage.alt}
            className="w-full h-full object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 via-gray-800/30 to-gray-900/70 flex items-end pb-16 md:pb-24">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="max-w-3xl"
            >
              <div className="mb-4 flex items-center">
                <span className="bg-blue-100 text-blue-800 px-4 py-1.5 rounded-full text-sm font-medium">
                  Premium Services
                </span>
                <span className="ml-3 text-white/90">
                  {serviceData.publishedDate}
                </span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
                {serviceData.title}
              </h1>
              <p className="text-lg md:text-xl text-white/90 mb-6">
                {serviceData.summary}
              </p>
              <div className="flex flex-wrap gap-2">
                {serviceData.tags.map((tag, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                    className="bg-white/20 backdrop-blur-sm text-white px-4 py-1.5 rounded-full text-xs"
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
              <div className="mt-6 text-white/80 flex items-center">
                <span className="text-sm">By {serviceData.author}</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Services Sections */}
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceData.sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <motion.img
                    whileHover={{ scale: 1.05 }}
                    src={section.image.url}
                    alt={section.image.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <motion.div
                      whileHover={{ rotate: 12, scale: 1.1 }}
                      className="p-3 bg-gray-100 rounded-lg mr-4"
                    >
                      {section.icon}
                    </motion.div>
                    <h2 className="text-xl font-bold text-gray-800">
                      {section.title}
                    </h2>
                  </div>
                  <div className="space-y-3">
                    {section.content.map((paragraph, pIndex) => (
                      <p key={pIndex} className="text-gray-600">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-teal-600 py-16">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Ready to Experience Croatia the HomeRent Way?
            </h2>
            <p className="text-white/90 mb-8 text-lg">
              Whether you're looking to book a luxury villa or need
              comprehensive property management services, our team is here to
              make your Croatian experience unforgettable.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-white text-blue-600 rounded-lg font-medium shadow-md"
              >
                Book Your Villa Now
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-transparent border-2 border-white text-white rounded-lg font-medium"
              >
                Contact Our Team
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Services;
