import React from "react";
import {
  FaWater,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaLifeRing,
  FaSun,
} from "react-icons/fa";
import { GiSailboat, GiKite, GiIsland, GiSpeedBoat } from "react-icons/gi";
import { MdOutlineKayaking, MdOutlineScubaDiving } from "react-icons/md";
import { motion } from "framer-motion";

const WaterDetails = () => {
  const waterData = {
    id: 1,
    title: "Dive into Adventure: Water Sports in Croatia",
    slug: "water-sports-croatia",
    summary:
      "Croatia's stunning coastline and crystal-clear waters make it a water sports paradise. Whether you're looking for adrenaline-fueled fun or relaxing aquatic experiences, there's something for every traveler.",
    heroImage: {
      url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80",
      alt: "Kayaker paddling along the Croatian coast",
    },
    tags: [
      "Water Sports",
      "Adventure",
      "Croatia",
      "Sea Activities",
      "Travel",
      "Summer",
      "Vacation",
    ],
    content: [
      {
        sectionTitle: "Why Choose Croatia for Water Sports?",
        text: "With over 1,000 islands, calm bays, strong winds in some regions, and transparent Adriatic waters, Croatia is one of Europe's top destinations for water sports. From beginners to pros, its aquatic offerings cater to all skill levels and preferences.",
        image: {
          url: "https://plus.unsplash.com/premium_photo-1740444982754-8ee38d28d0b4?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Scuba diver exploring the Adriatic Sea",
        },
        icon: <FaWater className="text-3xl text-blue-500" />,
      },
      {
        sectionTitle: "Top Water Sports Activities",
        text: "1. Kayaking & Sea Canoeing: Paddle through sea caves, around ancient cities like Dubrovnik, or between remote islands.\n\n2. Windsurfing & Kitesurfing: Especially popular in Bol (Brač Island) and Viganj (Pelješac) thanks to consistent summer winds.\n\n3. Scuba Diving & Snorkeling: Explore underwater caves, coral reefs, and historic shipwrecks.\n\n4. Jet Skiing: Zoom along the coastlines from Split, Makarska, or Hvar with high-powered fun.\n\n5. Sailing & Yachting: Croatia is a world-renowned sailing destination, perfect for charter adventures or catamaran trips.",
        image: {
          url: "https://plus.unsplash.com/premium_photo-1684870015170-0f43df61ec9b?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Windsurfer on the Adriatic coast",
        },
        icon: <GiSailboat className="text-3xl text-blue-400" />,
      },
      {
        sectionTitle: "Best Regions for Water Sports",
        text: "Dalmatian Coast: Great for diving, kayaking, and jet skiing.\nIstria: Known for family-friendly beaches and calm sea.\nKvarner Gulf: Excellent for snorkeling and stand-up paddleboarding.\nPelješac & Brač: Top picks for windsurfing and kitesurfing.\nVis Island: Remote beauty, ideal for diving excursions.",
        image: {
          url: "https://images.unsplash.com/photo-1653982969661-b6065d7e1db4?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Aerial view of a paddleboarder near Croatian island",
        },
        icon: <FaMapMarkerAlt className="text-3xl text-green-500" />,
      },
      {
        sectionTitle: "Seasonal Travel Guide",
        text: "Spring (April–June): Ideal weather, fewer crowds, and great conditions for kayaking, sailing, and diving.\n\nSummer (July–August): Peak season with warm water, perfect for all activities, but book early!\n\nAutumn (September–October): Quieter coasts, still-warm sea, and excellent sailing and windsurfing.\n\nWinter (November–March): Too cold for most, though scuba diving and sailing schools may still operate in southern regions.",
        image: {
          url: "https://plus.unsplash.com/premium_photo-1663036907878-8d46f4f93421?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Boat anchored in a calm Adriatic bay",
        },
        icon: <FaCalendarAlt className="text-3xl text-amber-500" />,
      },
      {
        sectionTitle: "Tips for Water Sports Travelers",
        text: "- Always check local regulations for jet skiing and diving.\n- Book guided tours for safety and deeper experience.\n- Wear proper gear—sun protection, life jackets, water shoes.\n- Respect marine life and no-wake zones.\n- Consider travel insurance that covers water activities.",
        image: {
          url: "https://images.unsplash.com/photo-1669630708533-b61680458bbb?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Jet skier riding off Croatian coast",
        },
        icon: <FaLifeRing className="text-3xl text-red-500" />,
      },
      {
        sectionTitle: "Must-Try Experiences",
        text: "- Night kayaking under the stars near Dubrovnik\n- Sailing a catamaran from Split to Korčula\n- Snorkeling in the Blue Lagoon near Trogir\n- Kitesurfing at Zlatni Rat beach\n- Wreck diving around Vis Island",
        image: {
          url: "https://images.unsplash.com/photo-1533140246-be4787db56cf?q=80&w=775&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Sailing adventure on the Adriatic",
        },
        icon: <FaSun className="text-3xl text-yellow-400" />,
      },
    ],
  };

  return (
    <div className="bg-blue-50 min-h-screen">
      {/* Hero Section */}
      <div className="relative h-screen overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          <img
            src={waterData.heroImage.url}
            alt={waterData.heroImage.alt}
            className="w-full h-full object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-blue-800/40 to-gray-900/60 flex items-end pb-16 md:pb-24">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="max-w-3xl mx-auto"
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                {waterData.title}
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8">
                {waterData.summary}
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {waterData.tags.map((tag, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                    className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm"
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Content Sections */}
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto space-y-24">
          {waterData.content.map((section, index) => (
            <motion.section
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className={`flex flex-col ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } gap-8 md:gap-12 items-center`}
            >
              <div className="md:w-1/2">
                <div className="flex items-center mb-6">
                  <motion.div
                    whileHover={{ rotate: 15, scale: 1.1 }}
                    className="p-3 bg-white rounded-full shadow-lg"
                  >
                    {section.icon}
                  </motion.div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-800 ml-4">
                    {section.sectionTitle}
                  </h2>
                </div>
                <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                  {section.text}
                </p>
              </div>
              <div className="md:w-1/2">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="rounded-xl overflow-hidden shadow-xl"
                >
                  <img
                    src={section.image.url}
                    alt={section.image.alt}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </div>
            </motion.section>
          ))}
        </div>
      </div>

      {/* Activities Gallery */}
      <div className="bg-gradient-to-br from-blue-100 to-blue-200 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12 flex items-center justify-center">
            <FaWater className="mr-3 text-blue-600" />
            Water Sports Activities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Kayaking",
                icon: <MdOutlineKayaking className="text-4xl text-blue-600" />,
                image:
                  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80",
                description: "Explore hidden coves and sea caves",
              },
              {
                name: "Scuba Diving",
                icon: (
                  <MdOutlineScubaDiving className="text-4xl text-blue-500" />
                ),
                image:
                  "https://images.unsplash.com/photo-1682686580849-3e7f67df4015?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                description: "Discover underwater wonders",
              },
              {
                name: "Kitesurfing",
                icon: <GiKite className="text-4xl text-blue-400" />,
                image:
                  "https://images.unsplash.com/photo-1662240705285-2f986daa5836?q=80&w=1059&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                description: "Ride the Adriatic winds",
              },
            ].map((activity, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg"
              >
                <img
                  src={activity.image}
                  alt={activity.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    {activity.icon}
                  </div>
                  <h3 className="font-bold text-xl mb-2">{activity.name}</h3>
                  <p className="text-gray-700">{activity.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WaterDetails;
