import React from "react";
import {
  FaBicycle,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaSun,
  FaRoad,
} from "react-icons/fa";
import { GiPathDistance, GiMountainRoad, GiIsland } from "react-icons/gi";
import { MdOutlineDirectionsBike, MdOutlineLandscape } from "react-icons/md";
import { motion } from "framer-motion";
import cycling from "../../assets/place/advcycel.jpg?url";
const CyclingDetails = () => {
  const cyclingData = {
    id: 5,
    title: "Pedal Through Paradise: Cycling Adventures in Croatia",
    slug: "cycling-adventure-croatia",
    summary:
      "Explore Croatia's natural beauty and historical charm on two wheels. From coastal rides to rugged inland trails, Croatia is a cyclist's dream.",
    heroImage: {
      url: "https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=1600&q=80",
      alt: "Cyclist overlooking the Adriatic Sea",
    },
    tags: [
      "Cycling",
      "Adventure",
      "Croatia",
      "Nature",
      "Bike Tours",
      "Vacation",
    ],
    content: [
      {
        sectionTitle: "Why Cycle in Croatia?",
        text: "Croatia offers diverse terrain, stunning coastal roads, quiet countryside, and scenic national parks. Whether you're a seasoned cyclist or just want to explore at a slower pace, there's a route for you.",
        image: {
          url: "https://images.unsplash.com/photo-1547903355-3db4cddfbe45?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Cyclists riding through Croatian hills",
        },
        icon: <FaBicycle className="text-3xl text-green-500" />,
      },
      {
        sectionTitle: "Top Cycling Routes",
        text: "1. Istrian Peninsula: Vineyards, hilltop towns, and the Parenzana Trail.\n\n2. Dalmatian Coast: Ride from Split to Dubrovnik for coastal beauty.\n\n3. Plitvice Lakes National Park: A UNESCO site surrounded by lush forest trails.\n\n4. Krka National Park: Combine cycling with waterfalls and river views.\n\n5. Island Cycling: Brač, Hvar, and Korčula offer hilly terrain and seaside villages.",
        image: {
          url: "https://images.unsplash.com/photo-1598288032243-aa818ce05b57?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Cycling trail through vineyards",
        },
        icon: <FaRoad className="text-3xl text-blue-500" />,
      },
      {
        sectionTitle: "Seasonal Cycling Guide",
        text: "Spring (March–May): Ideal temperatures and blooming landscapes. Best time for central and inland rides.\n\nSummer (June–August): Coastal cycling is scenic but hot. Ride early mornings or evenings.\n\nAutumn (September–October): Crisp air, grape harvest views, and quiet roads.\n\nWinter (November–February): Limited routes available due to snow in inland regions, but southern coastal routes may still be open.",
        image: {
          url: "https://images.unsplash.com/photo-1598694456580-51086194ef0f?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Cyclist on a trail surrounded by autumn leaves",
        },
        icon: <FaCalendarAlt className="text-3xl text-amber-500" />,
      },
      {
        sectionTitle: "Must-See Stops",
        text: "- Motovun: Medieval hilltop town in Istria\n- Ston: Salt flats and ancient city walls\n- Omiš: Where mountains meet the sea\n- Vis Island: Off-the-beaten-path cycling\n- Mljet National Park: Forest roads and lake views",
        image: {
          url: "https://images.unsplash.com/photo-1718767301263-aeab8d4efde0?q=80&w=1029&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Cyclist taking in scenic views",
        },
        icon: <FaMapMarkerAlt className="text-3xl text-red-500" />,
      },
      {
        sectionTitle: "Tours and Rentals",
        text: "Bike rental shops are available in most tourist hubs. Choose from guided multi-day tours, electric bike options, or self-guided adventures. Popular providers offer customizable routes, luggage transfer, and local support.",
        image: {
          url: "https://images.unsplash.com/photo-1651399152352-4769826c0814?q=80&w=1034&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Cycling gear and bikes ready for rental",
        },
        icon: <MdOutlineDirectionsBike className="text-3xl text-purple-500" />,
      },
      {
        sectionTitle: "Travel Tips for Cyclists",
        text: "- Hydrate and use sun protection during summer rides.\n- Bring or rent a quality bike with good suspension for mixed terrain.\n- Always wear a helmet.\n- Download offline maps in remote areas.\n- Respect hiking and wildlife areas.\n- Avoid midday rides in peak summer heat.",
        image: {
          url: "https://images.unsplash.com/photo-1643596625593-f0c25c25fbaa?q=80&w=872&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Cyclist preparing gear near the Adriatic",
        },
        icon: <GiPathDistance className="text-3xl text-gray-600" />,
      },
      {
        sectionTitle: "Unforgettable Experience",
        text: "Imagine riding through a quiet olive grove, descending onto a coastal road with the Adriatic sparkling beside you. The scent of lavender, the sound of cicadas, and the warmth of the Mediterranean sun make Croatian cycling truly unforgettable.",
        image: {
          url: "https://images.unsplash.com/photo-1644391617054-4db7f697bfe8?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Coastal cycling trail in Croatia",
        },
        icon: <MdOutlineLandscape className="text-3xl text-yellow-500" />,
      },
    ],
  };

  return (
    <div className="bg-green-50 min-h-screen">
      {/* Hero Section */}
      <div className="relative h-screen max-h-[800px] overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          <img
            src={cycling}
            alt={cyclingData.heroImage.alt}
            className="w-full h-full object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-gray-900/60 flex items-end pb-16 md:pb-24">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="max-w-3xl mx-auto"
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                {cyclingData.title}
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8">
                {cyclingData.summary}
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {cyclingData.tags.map((tag, index) => (
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
          {cyclingData.content.map((section, index) => (
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

      {/* Popular Routes */}
      <div className="bg-gradient-to-br from-green-100 to-blue-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12 flex items-center justify-center">
            <GiMountainRoad className="mr-3 text-green-600" />
            Popular Cycling Routes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Istrian Peninsula",
                difficulty: "Moderate",
                distance: "200km",
                image:
                  "https://images.unsplash.com/photo-1618476419812-2aedcbf227bc?q=80&w=876&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              },
              {
                name: "Dalmatian Coast",
                difficulty: "Challenging",
                distance: "300km",
                image:
                  "https://images.unsplash.com/photo-1654690678114-bddeaf4b7b70?q=80&w=386&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              },
              {
                name: "Plitvice Lakes",
                difficulty: "Easy",
                distance: "50km",
                image:
                  "https://images.unsplash.com/photo-1579547638456-76db5ffd5231?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              },
            ].map((route, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg"
              >
                <img
                  src={route.image}
                  alt={route.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="font-bold text-xl mb-2">{route.name}</h3>
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>Difficulty: {route.difficulty}</span>
                    <span>Distance: {route.distance}</span>
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

export default CyclingDetails;
