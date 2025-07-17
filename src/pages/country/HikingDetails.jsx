import React from "react";
import {
  FaHiking,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaSun,
  FaWater,
} from "react-icons/fa";
import {
  GiMountainClimbing,
  GiForest,
  GiIsland,
  GiPathDistance,
} from "react-icons/gi";
import { MdOutlineHiking, MdOutlineLandscape } from "react-icons/md";
import { motion } from "framer-motion";
import hiking from "../../assets/place/advhiking.jpg?url";
const HikingDetails = () => {
  const hikingData = {
    id: 1,
    title: "Explore Croatia on Foot: Ultimate Hiking Adventures",
    slug: "hiking-adventure-croatia",
    summary:
      "Croatia's diverse landscapes, from coastal cliffs to lush forests and dramatic peaks, make it a paradise for hikers. Discover the best trails and when to visit for unforgettable trekking experiences.",
    heroImage: {
      url: "https://images.unsplash.com/photo-1502920917128-1aa500764b9e?auto=format&fit=crop&w=1600&q=80",
      alt: "Hiker on a cliff overlooking the Croatian coastline",
    },
    tags: [
      "Hiking",
      "Adventure",
      "Croatia",
      "National Parks",
      "Nature Trails",
      "Vacation",
    ],
    content: [
      {
        sectionTitle: "Why Hike in Croatia?",
        text: "Croatia offers a unique blend of coastal paths, rugged mountain trails, and tranquil forest hikes. From beginner-friendly walks to challenging alpine ascents, hikers of all skill levels can find their ideal trail in Croatia.",
        image: {
          url: "https://plus.unsplash.com/premium_photo-1683850225058-7acf0b69de2c?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Hikers walking through forest in Croatia",
        },
        icon: <FaHiking className="text-3xl text-green-600" />,
      },
      {
        sectionTitle: "Top Hiking Locations",
        text: "1. Paklenica National Park: Home to the Velebit Mountains, this park offers steep gorges, dense forests, and climbing routes.\n\n2. Plitvice Lakes National Park: Wooden boardwalks over turquoise lakes and waterfalls.\n\n3. Biokovo Mountain: Hike to the Skywalk for panoramic views of the Adriatic.\n\n4. Učka Nature Park: A mix of coastal and inland flora, plus stunning sea views from Vojak Peak.\n\n5. Mljet Island: A peaceful island hike through pine forests and saltwater lakes.",
        image: {
          url: "https://images.unsplash.com/photo-1576694579276-3eee483b82d6?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Hiker standing on a rocky mountain summit",
        },
        icon: <GiMountainClimbing className="text-3xl text-gray-600" />,
      },
      {
        sectionTitle: "Seasonal Hiking Tips",
        text: "Spring (April–June): Ideal for waterfalls, blooming wildflowers, and cooler temperatures.\n\nSummer (July–August): Early morning hikes are best; inland trails can get very hot. Coastal paths are breezier.\n\nAutumn (September–October): Crisp air, colorful forests, and fewer tourists.\n\nWinter (November–March): Snow hikes possible in Velebit and Biokovo mountains with proper gear.",
        image: {
          url: "https://images.unsplash.com/photo-1633873721305-42c0eb5d98e2?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Forest hiking trail in autumn colors",
        },
        icon: <FaCalendarAlt className="text-3xl text-amber-500" />,
      },
      {
        sectionTitle: "Must-See Trails",
        text: "- Premužić Trail: A well-maintained stone trail through the Velebit mountains.\n- Zrmanja Canyon: A dramatic hike with river views and occasional swimming spots.\n- Dubrovnik to Srđ Hill: Quick city escape with great views.\n- Vis Island Trails: Coastal loops with old WWII tunnels.\n- Northern Velebit Trails: Remote and pristine nature for experienced hikers.",
        image: {
          url: "https://plus.unsplash.com/premium_photo-1677002262593-e0bc9e03b38b?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Stone hiking trail through Croatian highlands",
        },
        icon: <FaMapMarkerAlt className="text-3xl text-red-500" />,
      },
      {
        sectionTitle: "Guided vs. Solo Hiking",
        text: "Solo hiking is safe on marked trails, but guided tours offer deeper insights into Croatia's flora, fauna, and history. Guided multi-day hikes include transfers, meals, and expert support. Perfect for remote or high-altitude trails.",
        image: {
          url: "https://plus.unsplash.com/premium_photo-1661945269130-ebd80ac84b54?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Hiking group with guide on a Croatian trail",
        },
        icon: <MdOutlineHiking className="text-3xl text-blue-500" />,
      },
      {
        sectionTitle: "Hiking Essentials",
        text: "- Sturdy footwear (some trails are rocky or steep)\n- Water (many trails lack refill points)\n- Sun hat and sunscreen\n- Offline trail map (Komoot or Maps.me)\n- Snacks or picnic supplies\n- Camera for epic views!",
        image: {
          url: "https://images.unsplash.com/photo-1747030975140-ba581aaa74df?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Backpack with hiking gear in the forest",
        },
        icon: <GiPathDistance className="text-3xl text-brown-500" />,
      },
      {
        sectionTitle: "The Hiking Experience",
        text: "Every trail in Croatia offers something unique — the peaceful rustling of forest leaves, echoing calls of birds, and breathtaking views from rocky summits. You'll find solitude, inspiration, and a deep connection with nature.",
        image: {
          url: "https://plus.unsplash.com/premium_photo-1661898281093-72c9fcff173e?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Hiker standing with arms open on Croatian cliff",
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
            src={hiking}
            alt={hikingData.heroImage.alt}
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
                {hikingData.title}
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8">
                {hikingData.summary}
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {hikingData.tags.map((tag, index) => (
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
          {hikingData.content.map((section, index) => (
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

      {/* Popular Trails */}
      <div className="bg-gradient-to-br from-green-50 to-blue-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12 flex items-center justify-center">
            <GiForest className="mr-3 text-green-600" />
            Popular Hiking Trails
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Paklenica National Park",
                difficulty: "Moderate to Difficult",
                distance: "Various trails",
                image:
                  "https://plus.unsplash.com/premium_photo-1726837268811-4bf23787b15d?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              },
              {
                name: "Plitvice Lakes",
                difficulty: "Easy to Moderate",
                distance: "8-18km loops",
                image:
                  "https://images.unsplash.com/photo-1655189268451-34832ada97ab?q=80&w=876&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              },
              {
                name: "Biokovo Mountain",
                difficulty: "Challenging",
                distance: "13km (summit trail)",
                image:
                  "https://images.unsplash.com/photo-1726350321049-562ba783de7f?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              },
            ].map((trail, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg"
              >
                <img
                  src={trail.image}
                  alt={trail.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="font-bold text-xl mb-2">{trail.name}</h3>
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>Difficulty: {trail.difficulty}</span>
                    <span>Distance: {trail.distance}</span>
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

export default HikingDetails;
