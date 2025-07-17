import React from "react";
import {
  FaBuilding,
  FaBullseye,
  FaEye,
  FaShieldAlt,
  FaHandshake,
  FaInfoCircle,
  FaHeart,
} from "react-icons/fa";
import { motion } from "framer-motion";
import aboutus from "../../assets/about.avif?url";
const AboutUs = () => {
  const aboutData = {
    id: 106,
    title: "Najamkuce Agency Croatia – Luxury Villas, Unmatched Service",
    slug: "about-najamkuce-agency-croatia",
    author: "Najamkuce Agency Team",
    publishedDate: "2025-07-17",
    heroImage: {
      url: "https://images.unsplash.com/photo-1590490360182-664d6d50cf61?auto=format&fit=crop&w=1200&q=80",
      alt: "Seaside luxury villa in Croatia",
    },
    summary:
      "Najamkuce Agency is your trusted gateway to Croatia's finest villas. We combine years of property expertise with modern digital convenience to deliver exceptional vacation experiences.",
    tags: [
      "About Us",
      "Croatia",
      "Luxury Villas",
      "Travel Services",
      "Mission",
      "Vision",
    ],
    sections: [
      {
        title: "Who We Are",
        content: [
          "Najamkuce Agency is an online booking agency dedicated to offering Croatia's most beautiful villas — from high-end luxury estates to charming, minimalist escapes. Whether you're dreaming of an island hideaway or a seaside villa with a pool, we make it easy, secure, and unforgettable.",
          "We are part of Najamkuce Agency, a trusted name in Croatian property and rental management since 2016. With over 65,000 m² under active supervision, we've grown into one of the largest and most reputable management firms in Split and all of Croatia.",
        ],
        image: {
          url: "https://images.unsplash.com/photo-1667816144806-a0c739e9196a?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Villa overview near Split, Croatia",
        },
        icon: <FaBuilding className="text-3xl text-blue-600" />,
      },
      {
        title: "Mission",
        content: [
          "Our mission is to connect travelers with the finest villa experiences in Croatia while providing property owners with worry-free, full-service rental management.",
          "We strive to create unforgettable holidays by combining local knowledge, trusted customer service, and world-class hospitality — one villa at a time.",
        ],
        image: {
          url: "https://images.unsplash.com/photo-1631356460874-c0bd8aa4e893?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Travel couple planning vacation",
        },
        icon: <FaBullseye className="text-3xl text-red-500" />,
      },
      {
        title: "Vision",
        content: [
          "We envision Najamkuce Agency as a leading platform for premium Croatian villa experiences — where luxury, authenticity, and simplicity come together.",
          "By 2030, we aim to be the top choice for international travelers seeking the perfect mix of comfort, safety, and local insight in Croatia.",
        ],
        image: {
          url: "https://plus.unsplash.com/premium_photo-1667851770027-96825fe47222?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Dreamy coastal sunrise over Croatia",
        },
        icon: <FaEye className="text-3xl text-purple-600" />,
      },
      {
        title: "Your Peace of Mind, Our Priority",
        content: [
          "At Najamkuce Agency, we prioritize your peace of mind throughout your entire holiday journey. Our platform ensures transparency, protection, and reliability by featuring only verified properties and professional hosts.",
          "Whether you're exploring options or settling into your villa, our dedicated team ensures every detail is taken care of — so you can focus entirely on relaxation and discovery.",
        ],
        image: {
          url: "https://plus.unsplash.com/premium_photo-1663099852348-b421de2b16ed?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "User-friendly travel platform ensuring trust and safety",
        },
        icon: "<FaShieldAlt className='text-3xl text-green-600' />",
      },
      {
        title: "Trusted by Owners, Loved by Guests",
        content: [
          "Our dual commitment to both villa owners and guests sets us apart. For owners, we handle everything — from cleaning and guest communication to pricing and promotion. For travelers, we ensure a seamless and satisfying experience.",
          "We believe hospitality means building trust. That's why we're available for every step of your journey — before, during, and after your stay.",
        ],
        image: {
          url: "https://images.unsplash.com/photo-1702536723299-af0e3efadc75?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Smiling villa guests relaxing",
        },
        icon: <FaHandshake className="text-3xl text-yellow-500" />,
      },
      {
        title: "Company Information",
        content: [
          "Address:  Vončinina ul. 14, 10000, Zagreb, Croatia",
          "0955880747",
          "Email: Contact@najamkuce.agency",
          "Founded in 2016, based in Zagreb, Croatia",
        ],
        image: {
          url: "/logo2.png",
          alt: "Office exterior in Split, Croatia",
        },
        icon: <FaInfoCircle className="text-3xl text-gray-600" />,
      },
      {
        title: "Why It All Matters",
        content: [
          "Najamkuce Agency is more than a booking platform — we're your partner in discovering the magic of Croatia. From Istria to Dubrovnik, we bring peace of mind, personal support, and luxurious comfort to your journey.",
          "Because your vacation doesn't start with a key — it starts with a feeling.",
        ],
        image: {
          url: "https://images.unsplash.com/photo-1563731643945-fb72d828757e?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Family enjoying holiday villa sunset",
        },
        icon: <FaHeart className="text-3xl text-pink-500" />,
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
            src={aboutus}
            alt={aboutData.heroImage.alt}
            className="w-full h-full object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 via-gray-800/40 to-gray-900/80 flex items-end pb-16 md:pb-24">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="max-w-3xl"
            >
              <div className="mb-4 flex items-center">
                <span className="bg-white/20 backdrop-blur-sm text-secondary px-4 py-1.5 rounded-full text-sm font-medium">
                  Our Story
                </span>
                <span className="ml-3 text-white/90">
                  {aboutData.publishedDate}
                </span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight ">
                {aboutData.title}
              </h1>
              <p className="text-lg md:text-xl text-white/90 mb-6">
                {aboutData.summary}
              </p>
              <div className="flex flex-wrap gap-2">
                {aboutData.tags.map((tag, index) => (
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
                <span className="text-sm">By {aboutData.author}</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* About Sections */}
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-6xl mx-auto space-y-24">
          {aboutData.sections.map((section, index) => (
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
                    {section.title}
                  </h2>
                </div>
                <div className="space-y-4">
                  {section.content.map((paragraph, pIndex) => (
                    <p key={pIndex} className="text-gray-600 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
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

      {/* Values Section */}
      <div className="bg-gradient-to-r from-blue-600 to-teal-600 py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Our Core Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              {[
                {
                  title: "Excellence",
                  description:
                    "We never compromise on quality in our villas or service",
                  icon: "⭐",
                },
                {
                  title: "Trust",
                  description:
                    "Transparent operations and honest communication",
                  icon: "🤝",
                },
                {
                  title: "Passion",
                  description:
                    "We love sharing Croatia's beauty with the world",
                  icon: "❤️",
                },
              ].map((value, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6"
                >
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {value.title}
                  </h3>
                  <p className="text-white/90">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              Ready to Experience Croatia with Najamkuce Agency?
            </h2>
            <p className="text-gray-600 mb-8 text-lg">
              Whether you're looking to book a luxury villa or need
              comprehensive property management services, our team is here to
              help.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <motion.a
                href="/villas"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-primary text-white rounded-lg font-medium shadow-md"
              >
                Browse Our Villas
              </motion.a>
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-white border border-secondary text-gray-800 rounded-lg font-medium"
              >
                Contact Our Team
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
