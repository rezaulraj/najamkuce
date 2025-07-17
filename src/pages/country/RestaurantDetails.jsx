import React from "react";
import {
  FaUtensils,
  FaWineGlassAlt,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaStar,
} from "react-icons/fa";
import { GiChefToque, GiMeal, GiWineBottle, GiSpoon } from "react-icons/gi";
import { MdOutlineDining, MdOutlineLocalDining } from "react-icons/md";
import { motion } from "framer-motion";
import restaurant from "../../assets/place/restorant.jpg?url";
const RestaurantDetails = () => {
  const restaurantData = {
    id: 1,
    title: "Gourmet Dining in Croatia: Where Elegance Meets Local Flavor",
    slug: "gourmet-dining-croatia",
    summary:
      "From Michelin-starred restaurants to cliffside seafood feasts, Croatia offers a gourmet experience that blends Mediterranean freshness with traditional heart. Discover the top fine dining spots and food philosophies that define Croatia's upscale cuisine.",
    heroImage: {
      url: "https://images.unsplash.com/photo-1588154631024-128a0dfa9ab7?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Elegant dinner table in Croatia overlooking the sea",
    },
    tags: [
      "Gourmet",
      "Food & Drink",
      "Fine Dining",
      "Croatia",
      "Michelin",
      "Luxury",
      "Travel",
    ],
    content: [
      {
        sectionTitle: "The Rise of Croatia's Fine Dining Scene",
        text: "In the last decade, Croatia has emerged as a serious contender in the world of fine dining. With a growing number of Michelin-starred and Gault & Millau-rated restaurants, gourmet travel has become a key reason to visit. Chefs are embracing regional ingredients—olive oil from Istria, truffles from Motovun, oysters from Ston—and reinventing them with creative flair.",
        image: {
          url: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=1200&q=80",
          alt: "Gourmet plated meal in a fine restaurant",
        },
        icon: <GiChefToque className="text-3xl text-amber-500" />,
      },
      {
        sectionTitle: "Michelin Stars & Signature Restaurants",
        text: "Croatia's Michelin map is growing. Must-visit spots include:\n- Pelegrini (Šibenik) – Fine dining with heritage Dalmatian ingredients.\n- Noel (Zagreb) – Creative modern dishes with French technique.\n- 360 (Dubrovnik) – A panoramic experience inside ancient city walls.\n- Monte (Rovinj) – Istrian magic with local produce and artistic plating.",
        image: {
          url: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1200&q=80",
          alt: "Luxury restaurant in Rovinj",
        },
        icon: <FaStar className="text-3xl text-yellow-500" />,
      },
      {
        sectionTitle: "Local Ingredients with Global Techniques",
        text: "Croatia's upscale dining isn't about foreign imports. It's about elevating what's local. Think of Adriatic scampi brushed with lavender honey, Pag island lamb slow-cooked with herbs, or black truffle risotto infused with Pelješac wine. Techniques range from French sous-vide to Japanese minimalism—but the soul remains Croatian.",
        image: {
          url: "https://plus.unsplash.com/premium_photo-1663855531676-3fcab15776af?q=80&w=465&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Chef preparing a seafood dish in Croatia",
        },
        icon: <GiMeal className="text-3xl text-red-500" />,
      },
      {
        sectionTitle: "Pairing with Croatian Wines",
        text: "Every gourmet meal deserves the right wine, and Croatian vintners deliver. Expect sommeliers to recommend bold Plavac Mali, crisp Malvazija Istarska, or sparkling Međimurje Pušipel with tasting menus. Many upscale restaurants offer wine pairings per course, often including boutique Croatian labels rarely found abroad.",
        image: {
          url: "https://plus.unsplash.com/premium_photo-1679436985505-541f5ef856d1?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Wine served in a Croatian fine dining restaurant",
        },
        icon: <GiWineBottle className="text-3xl text-purple-500" />,
      },
      {
        sectionTitle: "Dine With a View",
        text: "Part of the gourmet experience in Croatia is the setting. Imagine dining on a cliffside terrace in Hvar at sunset, or enjoying a candlelit meal inside a 14th-century stone house in Split. Many high-end restaurants take full advantage of Croatia's stunning coastline and medieval towns, offering truly immersive culinary experiences.",
        image: {
          url: "https://plus.unsplash.com/premium_photo-1738016963206-288031d24f73?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Cliffside dining experience in Croatia",
        },
        icon: <MdOutlineDining className="text-3xl text-blue-500" />,
      },
      {
        sectionTitle: "Seasonal Tips for Food Lovers",
        text: "Spring (April–June): Truffle festivals, fresh asparagus, wild herbs.\nSummer (July–August): Seafood at its peak—tuna, squid, oysters.\nAutumn (September–October): Wine harvest menus, fig season, hearty stews.\nWinter (November–March): More limited menus, but Zagreb offers indoor gourmet dining and comfort classics.",
        image: {
          url: "https://plus.unsplash.com/premium_photo-1687870051820-1f84b0fb3eae?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Seasonal gourmet dish with herbs and figs",
        },
        icon: <FaCalendarAlt className="text-3xl text-green-500" />,
      },
      {
        sectionTitle: "Gourmet Dining Etiquette in Croatia",
        text: "Croatian fine dining is elegant yet warm. Don't be surprised if the chef visits your table. Tipping (10–15%) is appreciated. Reservations are essential in summer, especially at coastal restaurants. Dress smart casual—no flip-flops. If you're doing a tasting menu, expect to be there for 2–3 hours. It's not just a meal—it's a celebration.",
        image: {
          url: "https://plus.unsplash.com/premium_photo-1683140430674-106822e6062a?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Couple enjoying a fine dinner in Croatia",
        },
        icon: <GiSpoon className="text-3xl text-gray-600" />,
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
            src={restaurant}
            alt={restaurantData.heroImage.alt}
            className="w-full h-full object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-gray-900/70 flex items-end pb-16 md:pb-24">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="max-w-3xl mx-auto"
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                {restaurantData.title}
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8">
                {restaurantData.summary}
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {restaurantData.tags.map((tag, index) => (
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
          {restaurantData.content.map((section, index) => (
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

      {/* Featured Restaurants */}
      <div className="bg-gradient-to-br from-amber-50 to-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12 flex items-center justify-center">
            <FaStar className="mr-3 text-yellow-500" />
            Featured Gourmet Restaurants
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Pelegrini",
                location: "Šibenik",
                specialty: "Dalmatian Heritage Cuisine",
                image:
                  "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=600&q=80",
              },
              {
                name: "360°",
                location: "Dubrovnik",
                specialty: "Mediterranean with Panoramic Views",
                image:
                  "https://plus.unsplash.com/premium_photo-1726619960567-e2924d5658c9?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              },
              {
                name: "Monte",
                location: "Rovinj",
                specialty: "Istrian Modern Gastronomy",
                image:
                  "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=600&q=80",
              },
            ].map((restaurant, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg"
              >
                <img
                  src={restaurant.image}
                  alt={restaurant.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="font-bold text-xl mb-2">{restaurant.name}</h3>
                  <div className="flex items-center text-gray-600 mb-2">
                    <FaMapMarkerAlt className="mr-2" />
                    <span>{restaurant.location}</span>
                  </div>
                  <p className="text-gray-700">{restaurant.specialty}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantDetails;
