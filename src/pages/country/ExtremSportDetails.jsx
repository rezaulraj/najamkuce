import React from "react";
import {
  FaRunning,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaMountain,
  FaSkull,
  FaMedal,
  FaSuitcase,
} from "react-icons/fa";
import { GiJumpAcross } from "react-icons/gi";
import { MdOutlineSportsScore, MdOutlineLandscape } from "react-icons/md";
import { motion } from "framer-motion";
import sports from "../../assets/place/advsports.jpeg?url";
const ExtremSportDetails = () => {
  const extremData = {
    id: 1,
    title: "Push Your Limits: Extreme Sports & Running Adventures in Croatia",
    slug: "extreme-sports-running-croatia",
    summary:
      "From mountain marathons to rock climbing and zip-lining over gorges, Croatia offers a thrill-seeker's paradise. Discover top locations and seasonal tips for running and adrenaline-filled sports on your vacation.",
    heroImage: {
      url: "https://plus.unsplash.com/premium_photo-1664300093125-92bc8a26d3fa?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Runner jumping between rocks in Croatian mountains",
    },
    tags: [
      "Extreme Sports",
      "Running",
      "Croatia",
      "Adventure Travel",
      "Adrenaline",
      "Vacation",
    ],
    content: [
      {
        sectionTitle: "Why Choose Croatia for Extreme Sports?",
        text: "Croatia's rugged mountains, crystal-clear rivers, and vast coastlines offer the perfect natural setting for heart-racing adventures. Whether you're a trail runner, climber, or just love fast-paced action, Croatia delivers unforgettable thrills.",
        image: {
          url: "https://images.unsplash.com/photo-1560803302-334de7aa49bb?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Trail runner climbing rocky path",
        },
        icon: <FaRunning className="text-3xl text-red-600" />,
      },
      {
        sectionTitle: "Best Locations for Running & Extreme Sports",
        text: "1. Velebit Ultra Trail: One of the most intense trail races through UNESCO-protected biosphere reserves.\n\n2. Marjan Forest Park (Split): Urban trails with steep climbs and sea views.\n\n3. Paklenica & Biokovo: Ideal for rock climbing, sky-running, and ultra races.\n\n4. Cetina Canyon: Zip-lining, canyoning, rafting all in one place.\n\n5. Plitvice Trail Marathon: A scenic race that blends running with waterfalls and forest serenity.",
        image: {
          url: "https://images.unsplash.com/photo-1621650784637-eb439621916c?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Runners in a mountain race in Croatia",
        },
        icon: <FaMapMarkerAlt className="text-3xl text-blue-500" />,
      },
      {
        sectionTitle: "Adrenaline-Packed Activities",
        text: "- Bungee Jumping: Off Maslenica Bridge (56 m high!)\n- Skydiving: Over islands near Zadar and Hvar\n- Ziplining: 120 km/h over the Cetina River near Omiš\n- Wingsuit & Paragliding: From Biokovo summit\n- Rock Climbing: 400+ routes in Paklenica Canyon\n- Trail Races: From 10k to 100+ km ultra-marathons",
        image: {
          url: "https://images.unsplash.com/photo-1746519095106-e8b9a56a5715?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Adventurer ziplining across Croatian canyon",
        },
        icon: <GiJumpAcross className="text-3xl text-purple-600" />,
      },
      {
        sectionTitle: "Best Time to Go",
        text: "Spring (April–June): Best for long runs, races, and outdoor climbs — mild temperatures.\n\nSummer (July–August): Perfect for ziplining and rafting, but run early or late due to heat.\n\nAutumn (September–October): Ideal weather for trail marathons, climbs, and clearer skies.\n\nWinter (Nov–Mar): Some sports pause, but indoor climbing gyms and snow runs (Biokovo) are open.",
        image: {
          url: "https://images.unsplash.com/photo-1671361242749-c675805e981b?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Trail runner in autumn in Croatia",
        },
        icon: <FaCalendarAlt className="text-3xl text-amber-500" />,
      },
      {
        sectionTitle: "Popular Running Events",
        text: "- Dubrovnik Half Marathon (April)\n- Plitvice Marathon (June)\n- Dalmacija Ultra Trail (October)\n- Istria 100 by UTMB (Spring) – World-class trail event\n- Marjan Trail (Winter edition)\n\nAll events welcome tourists and often include guided tours, local cuisine, and cultural extras.",
        image: {
          url: "https://images.unsplash.com/photo-1646743934995-0decea46bd84?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Runner with number bib at a Croatian race",
        },
        icon: <MdOutlineSportsScore className="text-3xl text-green-600" />,
      },
      {
        sectionTitle: "What to Pack",
        text: "- Lightweight trail running shoes\n- Breathable clothes + rain gear\n- Energy gels or snacks\n- GoPro for recording your ride/jump!\n- Rehydration salts (for summer heat)\n- Helmet & gloves for climbing/canyoning",
        image: {
          url: "https://images.unsplash.com/photo-1684086875755-4b0fed787c86?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Backpack and gear for adventure sports",
        },
        icon: <FaSuitcase className="text-3xl text-gray-600" />,
      },
      {
        sectionTitle: "Beyond the Sports",
        text: "After a thrilling day, relax with Croatian wine, fresh seafood, or a beach sunset. Most race or activity locations are near charming villages or UNESCO sites, making it a perfect blend of adrenaline and culture.",
        image: {
          url: "https://images.unsplash.com/photo-1603728723396-e479b37fc5a7?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Adventurers enjoying sunset on Croatian coast",
        },
        icon: <MdOutlineLandscape className="text-3xl text-yellow-500" />,
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
            src={sports}
            alt={extremData.heroImage.alt}
            className="w-full h-full object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/30 via-gray-800/30 to-gray-900/60 flex items-end pb-16 md:pb-24">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="max-w-3xl mx-auto"
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                {extremData.title}
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8">
                {extremData.summary}
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {extremData.tags.map((tag, index) => (
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
          {extremData.content.map((section, index) => (
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

      {/* Popular Activities */}
      <div className="bg-gradient-to-br from-red-50 to-orange-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12 flex items-center justify-center">
            <FaSkull className="mr-3 text-red-600" />
            Top Extreme Activities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Velebit Ultra Trail",
                type: "Trail Running",
                difficulty: "Extreme",
                image:
                  "https://images.unsplash.com/photo-1541625602330-2277a4c46182?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              },
              {
                name: "Paklenica Rock Climbing",
                type: "Climbing",
                difficulty: "Moderate to Extreme",
                image:
                  "https://images.unsplash.com/photo-1575119449147-ff1d840b2779?q=80&w=1031&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              },
              {
                name: "Cetina Canyon Zipline",
                type: "Ziplining",
                difficulty: "Thrilling",
                image:
                  "https://images.unsplash.com/photo-1583347262616-d1f7810b83b6?q=80&w=327&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
                <div className="p-6">
                  <h3 className="font-bold text-xl mb-2">{activity.name}</h3>
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>Type: {activity.type}</span>
                    <span>Level: {activity.difficulty}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExtremSportDetails;
