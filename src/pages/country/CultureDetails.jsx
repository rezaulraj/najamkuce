import React from "react";
import {
  FaUmbrellaBeach,
  FaWineGlassAlt,
  FaMusic,
  FaChurch,
  FaCalendarAlt,
} from "react-icons/fa";
import { GiVillage, GiMeal, GiGreekTemple } from "react-icons/gi";
import { MdOutlineFestival } from "react-icons/md";
import culture from "../../assets/place/curture.webp?url";
const CultureDetails = () => {
  const cultureBlog = {
    id: 1,
    title: "Croatian Culture for Curious Travelers: A Journey Through Heritage",
    slug: "croatian-culture-for-vacation",
    summary:
      "Planning a trip to Croatia? Discover the authentic soul of the country through its traditions, cuisine, music, and sacred history — perfect for a culture-filled vacation.",
    heroImage: {
      url: "https://images.unsplash.com/photo-1610465294024-b09df43cd266?auto=format&fit=crop&w=1600&q=80",
      alt: "Cultural street in Croatia",
    },
    tags: [
      "Culture",
      "Vacation",
      "Tradition",
      "Food",
      "Music",
      "Heritage",
      "Europe Travel",
    ],
    content: [
      {
        sectionTitle: "Traditional Roots: Where Past Meets Present",
        text: "Your Croatian vacation isn't complete without experiencing its deep-rooted traditions. In small villages and historic towns, you'll witness customs like the Sinjska Alka knight games, traditional weddings, and colorful folk costumes. Visit during summer festivals for open-air performances filled with history, dance, and storytelling — it's like time-travel with a seaside breeze.",
        image: {
          url: "https://images.unsplash.com/photo-1667386426758-1036cf655323?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Traditional Croatian dancers",
        },
        icon: <GiVillage className="text-3xl text-amber-500" />,
      },
      {
        sectionTitle: "Culinary Delights: Taste the Culture",
        text: "Croatian food is a flavorful adventure for every traveler. On the coast, enjoy fresh octopus salad, black risotto, and grilled fish paired with local white wines. Inland, taste rich stews like 'čobanac', hand-rolled pasta, and smoked meats. Be sure to stop at a family-run konoba (tavern) — where meals are slow, hearty, and made with love.",
        image: {
          url: "https://images.unsplash.com/photo-1651323018466-b36b7df1d2b1?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Croatian coastal seafood dish",
        },
        icon: <FaWineGlassAlt className="text-3xl text-red-500" />,
      },
      {
        sectionTitle: "Dance & Music: Rhythm of the Land",
        text: "Whether you're relaxing in a seaside town or hiking in the hills, Croatia's music is always close by. Hear klapa groups harmonizing in stone courtyards, or watch a spontaneous kolo circle dance erupt at a village fair. If you're traveling in July, the Šibenik and Dubrovnik festivals combine ancient melodies with stunning locations under the stars.",
        image: {
          url: "https://images.unsplash.com/photo-1504274066651-8d31a536b11a?auto=format&fit=crop&w=1200&q=80",
          alt: "Croatian klapa group singing",
        },
        icon: <FaMusic className="text-3xl text-purple-500" />,
      },
      {
        sectionTitle: "Sacred Stories: Peaceful Places to Reflect",
        text: "Croatia's spiritual landmarks offer tranquility and wonder. From the majestic St. Domnius Cathedral in Split to hidden monasteries on islands like Visovac, these sites invite you to pause. Many are active places of worship, where quiet prayer meets centuries-old architecture. It's a serene balance to the lively beaches and markets.",
        image: {
          url: "https://images.unsplash.com/photo-1719587612807-5a58ca8afcf1?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Croatian island monastery",
        },
        icon: <GiGreekTemple className="text-3xl text-blue-500" />,
      },
      {
        sectionTitle: "Best Time to Visit for Cultural Events",
        text: "If you're planning your vacation to align with cultural celebrations, the best months are June through September. Summer brings open-air theatre, traditional harvest festivals, and nightly folk performances in towns like Rovinj, Pula, and Trogir. Spring and fall also offer milder weather and fewer crowds for monastery visits or wine tours.",
        image: {
          url: "https://images.unsplash.com/photo-1683585940613-3f77b9147325?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Croatian summer festival",
        },
        icon: <MdOutlineFestival className="text-3xl text-yellow-500" />,
      },
    ],
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="relative h-screen overflow-hidden">
        <img
          src={
            "https://images.unsplash.com/photo-1683585940613-3f77b9147325?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          alt={"hero image"}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/40 to-gray-900/60 flex items-end pb-12 md:pb-20">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto">
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
                {cultureBlog.title}
              </h1>
              <p className="text-lg md:text-xl text-white/90 mb-6">
                {cultureBlog.summary}
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                {cultureBlog.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Sections */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="max-w-4xl mx-auto space-y-16">
          {cultureBlog.content.map((section, index) => (
            <section
              key={index}
              className={`flex flex-col ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } gap-8 md:gap-12 items-center`}
            >
              <div className="md:w-1/2">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-white rounded-full shadow-lg">
                    {section.icon}
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-800 ml-3">
                    {section.sectionTitle}
                  </h2>
                </div>
                <p className="text-gray-600 leading-relaxed">{section.text}</p>
              </div>
              <div className="md:w-1/2">
                <div className="rounded-xl overflow-hidden shadow-lg">
                  <img
                    src={section.image.url}
                    alt={section.image.alt}
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                  />
                </div>
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CultureDetails;
