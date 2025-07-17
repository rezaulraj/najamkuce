import React from "react";
import {
  FaSkull,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaLifeRing,
  FaLightbulb,
  FaFlagCheckered,
} from "react-icons/fa";
import { GiJumpAcross, GiParachute } from "react-icons/gi";
import { MdOutlineSafetyDivider } from "react-icons/md";
import { motion } from "framer-motion";
import adrenaline from "../../assets/place/advadrlin.jpg?url";
const AdrenalineDetails = () => {
  const dataAdrenaline = {
    id: 8,
    title: "Adrenaline Adventures in Croatia: The Ultimate Rush",
    slug: "adrenaline-adventures-croatia",
    summary:
      "Craving a thrill? Croatia is your adventure playground. From zip-lining across gorges to skydiving over islands, here's the best of extreme sports and adrenaline-fueled fun for your next vacation.",
    heroImage: {
      url: "https://images.unsplash.com/photo-1520975869019-96f9c672f582?auto=format&fit=crop&w=1200&q=80",
      alt: "Zipliner flying over canyon in Croatia",
    },
    tags: [
      "Adrenaline",
      "Extreme Sports",
      "Outdoor",
      "Vacation",
      "Croatia",
      "Adventure Travel",
    ],
    content: [
      {
        sectionTitle: "What Makes Croatia an Adrenaline Paradise?",
        text: "Croatia isn't just beaches and old towns — it's full of rugged canyons, wild rivers, and high cliffs that beg to be explored by daredevils. If your ideal vacation includes heart-pounding moments, Croatia delivers with full force.",
        image: {
          url: "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&w=1200&q=80",
          alt: "Extreme sports enthusiast standing on cliff",
        },
        icon: <FaSkull className="text-3xl text-red-600" />,
      },
      {
        sectionTitle: "Top 6 Adrenaline Activities to Try",
        text: "1. Bungee Jumping - Maslenica Bridge: Jump 56 meters above the turquoise Zrmanja River.\n\n2. Zip-lining in Omiš: Soar 150 meters above Cetina Canyon at 70 km/h.\n\n3. Canyoning in Cetina: Slide, jump, and swim through gorges and waterfalls.\n\n4. Skydiving Zadar: Freefall over islands and the Adriatic Sea.\n\n5. Rock Climbing Paklenica: Home to Croatia's most iconic climbing routes.\n\n6. Sea Kayaking: Paddle past sea caves, arches, and cliffs — especially around Dubrovnik and Hvar.",
        image: {
          url: "https://images.unsplash.com/photo-1617643652913-2a45e6430be3?auto=format&fit=crop&w=1200&q=80",
          alt: "Skydiver over Croatian coast",
        },
        icon: <GiJumpAcross className="text-3xl text-purple-600" />,
      },
      {
        sectionTitle: "Must-Visit Adrenaline Locations",
        text: "- Omiš: Zip-lining and canyoning capital.\n- Paklenica National Park: Ideal for climbing and hiking.\n- Maslenica Bridge: Croatia's highest bungee point.\n- Zrmanja River: Perfect for rafting and kayaking.\n- Zadar & Hvar: Skydiving and sailing base.",
        image: {
          url: "https://images.unsplash.com/photo-1582820158340-508964d92bd9?auto=format&fit=crop&w=1200&q=80",
          alt: "Adventure team rafting in wild Croatian river",
        },
        icon: <FaMapMarkerAlt className="text-3xl text-blue-500" />,
      },
      {
        sectionTitle: "Best Seasons for Thrill Seekers",
        text: "Spring (April–June): Ideal for canyoning, hiking, and moderate climbing.\n\nSummer (July–August): Go big on skydiving, sea kayaking, zip-lining.\n\nAutumn (Sept–Oct): Cooler weather perfect for bungee, trail races, and climbs.\n\nWinter (Nov–Mar): Some activities pause, but indoor adventure parks and snow sports are open inland.",
        image: {
          url: "https://images.unsplash.com/photo-1608506531758-c79e3b539fb7?auto=format&fit=crop&w=1200&q=80",
          alt: "Adrenaline seekers preparing on cliff",
        },
        icon: <FaCalendarAlt className="text-3xl text-amber-500" />,
      },
      {
        sectionTitle: "Safety First!",
        text: "- Book with certified local adventure operators.\n- Always wear provided safety gear.\n- Check weather conditions before booking.\n- Follow guide instructions — no shortcuts!\n- Make sure your insurance covers extreme sports.",
        image: {
          url: "https://images.unsplash.com/photo-1537884551209-5e963b31f5b9?auto=format&fit=crop&w=1200&q=80",
          alt: "Climber securing ropes on mountain wall",
        },
        icon: <MdOutlineSafetyDivider className="text-3xl text-green-600" />,
      },
      {
        sectionTitle: "Bonus Tips",
        text: "- GoPro rentals available in most adventure hubs.\n- Most activities can be done solo or as group tours.\n- Combine adrenaline tours with wine tasting or spa after for recovery.\n- Book early in summer — slots fill up fast!",
        image: {
          url: "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?auto=format&fit=crop&w=1200&q=80",
          alt: "Group of friends enjoying successful adventure",
        },
        icon: <FaLightbulb className="text-3xl text-yellow-500" />,
      },
      {
        sectionTitle: "Wrap-Up: Adventure Awaits",
        text: "If adrenaline is your vacation fuel, Croatia is your launchpad. Combine natural beauty with thrill-seeking for a vacation that makes your heart race and your soul soar.",
        image: {
          url: "https://images.unsplash.com/photo-1581291518857-4b67e8f04b95?auto=format&fit=crop&w=1200&q=80",
          alt: "Adrenaline junkie celebrating at peak",
        },
        icon: <FaFlagCheckered className="text-3xl text-black" />,
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
            src={adrenaline}
            alt={dataAdrenaline.heroImage.alt}
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
                {dataAdrenaline.title}
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8">
                {dataAdrenaline.summary}
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {dataAdrenaline.tags.map((tag, index) => (
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
          {dataAdrenaline.content.map((section, index) => (
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
            <GiParachute className="mr-3 text-red-600" />
            Extreme Activities to Try
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Cetina Canyon Zipline",
                type: "Ziplining",
                level: "Thrilling",
                image:
                  "https://images.unsplash.com/photo-1520975869019-96f9c672f582?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              },
              {
                name: "Paklenica Rock Climbing",
                type: "Climbing",
                level: "Challenging",
                image:
                  "https://images.unsplash.com/photo-1510251197876-8a57daf8a3e8?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              },
              {
                name: "Zrmanja River Rafting",
                type: "Whitewater",
                level: "Wild Ride",
                image:
                  "https://images.unsplash.com/photo-1582820158340-508964d92bd9?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
                    <span>Level: {activity.level}</span>
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

export default AdrenalineDetails;
