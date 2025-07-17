import React from "react";
import {
  FaWineGlassAlt,
  FaCalendarAlt,
  FaMapMarkedAlt,
  FaWineBottle,
} from "react-icons/fa";
import { GiGrapes, GiCellarBarrels, GiVineLeaf } from "react-icons/gi";
import { MdOutlineWineBar } from "react-icons/md";
import { motion } from "framer-motion";
import alcohol from "../../assets/place/wines.avif?url";
const WineDetails = () => {
  const wineData = {
    id: 1,
    title: "Exploring Croatian Wines: A Journey Through Vineyards and Time",
    slug: "croatian-wines-guide",
    summary:
      "Croatia's wine heritage is one of the oldest and most diverse in Europe. From sun-drenched coastal vineyards to inland reds aged in oak, this guide takes you through the regions, flavors, and stories behind the bottle.",
    heroImage: {
      url: "https://images.unsplash.com/photo-1722776787815-bf50f398053e?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Croatian wine glass with vineyard view",
    },
    tags: [
      "Wines",
      "Croatia",
      "Vineyards",
      "Travel",
      "Food & Drink",
      "Culture",
      "Dalmatia",
      "Istria",
    ],
    content: [
      {
        sectionTitle: "A Wine Tradition Rooted in History",
        text: "Croatia has been producing wine for over 2,500 years, tracing back to the ancient Greeks on the island of Vis. Today, it boasts over 130 indigenous grape varieties, and while small in scale compared to other European wine giants, Croatian wine is rich in character, deeply regional, and increasingly popular among connoisseurs.",
        image: {
          url: "https://plus.unsplash.com/premium_photo-1675727576909-c4e2cb8112fb?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Croatian vineyards at sunset",
        },
        icon: <GiGrapes className="text-3xl text-purple-600" />,
      },
      {
        sectionTitle: "Regional Highlights: Where to Sip",
        text: "The country is divided into four major wine regions: Dalmatia, Istria and Kvarner, Slavonia and Danube, and the Uplands. Each offers its own flavor experience. Dalmatia is known for bold reds like Plavac Mali (a relative of Zinfandel), while Istria is home to crisp whites like Malvazija Istarska. For aromatic wines, Slavonia's Graševina leads the way.",
        image: {
          url: "https://plus.unsplash.com/premium_photo-1661320938536-7de988d67a09?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Wine tasting in Istria",
        },
        icon: <FaMapMarkedAlt className="text-3xl text-blue-500" />,
      },
      {
        sectionTitle: "Must-Try Croatian Wines",
        text: "If you're planning a wine-focused vacation, be sure to try:\n- Plavac Mali – Robust and spicy red from Dalmatia\n- Malvazija Istarska – Floral, mineral-rich white from Istria\n- Graševina – Versatile white found inland, perfect with cheese\n- Pošip – A full-bodied white from Korčula, ideal for seafood\n- Teran – Deep ruby-red with a punch, popular in Istria",
        image: {
          url: "https://images.unsplash.com/photo-1749235513773-5642ca1fb94c?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Wine glasses with Croatian labels",
        },
        icon: <FaWineBottle className="text-3xl text-red-500" />,
      },
      {
        sectionTitle: "Best Time to Visit the Wine Country",
        text: "May to October is ideal for vineyard tours and tastings. Harvest season in September is especially exciting, with wine festivals, grape-picking experiences, and seasonal menus. Spring and early summer offer fewer crowds and excellent weather across the Adriatic coast and countryside.",
        image: {
          url: "https://plus.unsplash.com/premium_photo-1663127459691-b49eae9c9048?q=80&w=872&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Wine harvest season in Croatia",
        },
        icon: <FaCalendarAlt className="text-3xl text-green-500" />,
      },
      {
        sectionTitle: "Wine Roads & Experiences",
        text: "Follow Croatia's Wine Roads — marked driving routes through vineyard-rich areas. Stop at boutique wineries for tastings, cellar tours, and traditional food pairings. In places like Pelješac and Motovun, you can sip wine while looking over olive groves, stone villages, and the sea. Many family-owned wineries offer affordable and intimate experiences.",
        image: {
          url: "https://plus.unsplash.com/premium_photo-1667939472139-05020af051b5?q=80&w=808&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Wine road through Istrian countryside",
        },
        icon: <GiVineLeaf className="text-3xl text-amber-500" />,
      },
      {
        sectionTitle: "Wine & Culture: More Than a Drink",
        text: "In Croatia, wine is tied to identity and community. It's part of religious ceremonies, Sunday lunches, and even poetry. Locals often make their own wine — don't be surprised if you're offered a glass of homemade prošek (a dessert wine) or rakija as a welcome drink.",
        image: {
          url: "https://plus.unsplash.com/premium_photo-1661506383340-4deb1242daa8?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Croatian wine cellar experience",
        },
        icon: <GiCellarBarrels className="text-3xl text-brown-500" />,
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
            src={alcohol}
            alt={wineData.heroImage.alt}
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
                {wineData.title}
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8">
                {wineData.summary}
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {wineData.tags.map((tag, index) => (
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
          {wineData.content.map((section, index) => (
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

      {/* Wine Varieties Gallery */}
      <div className="bg-gradient-to-br from-purple-50 to-blue-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12 flex items-center justify-center">
            <MdOutlineWineBar className="mr-3 text-purple-600" />
            Croatian Wine Varieties
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              {
                name: "Plavac Mali",
                type: "Red",
                region: "Dalmatia",
                image:
                  "https://plus.unsplash.com/premium_photo-1670426502343-e05d0ab7123e?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              },
              {
                name: "Malvazija",
                type: "White",
                region: "Istria",
                image:
                  "https://images.unsplash.com/photo-1681312913296-b656fa5ca865?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              },
              {
                name: "Graševina",
                type: "White",
                region: "Slavonia",
                image:
                  "https://plus.unsplash.com/premium_photo-1676590905367-12ff693f0afe?q=80&w=924&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              },
              {
                name: "Teran",
                type: "Red",
                region: "Istria",
                image:
                  "https://images.unsplash.com/photo-1611091115931-69347677e736?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              },
            ].map((wine, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg"
              >
                <img
                  src={wine.image}
                  alt={wine.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-bold text-lg">{wine.name}</h3>
                  <div className="flex justify-between text-sm text-gray-600 mt-2">
                    <span>{wine.type}</span>
                    <span>{wine.region}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-purple-700 to-blue-700 py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready for Your Croatian Wine Adventure?
            </h2>
            <p className="text-white/90 mb-8 text-lg">
              Book a curated wine tour or download our complete guide to
              Croatian vineyards and wineries.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-purple-700 hover:bg-gray-100 px-8 py-4 rounded-lg font-medium transition-colors flex items-center justify-center"
              >
                <FaWineGlassAlt className="mr-3" />
                Book Wine Tour
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-lg font-medium transition-colors flex items-center justify-center"
              >
                <GiGrapes className="mr-3" />
                Download Guide
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-2 text-lg">
            © {new Date().getFullYear()} Croatian Wine Guide
          </p>
          <p className="text-sm text-gray-400">
            All images from Unsplash. Icons from React Icons.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default WineDetails;
