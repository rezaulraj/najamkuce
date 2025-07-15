import React from "react";
import {
  FiHome,
  FiStar,
  FiMapPin,
  FiHeart,
  FiUmbrella,
  FiAnchor,
  FiUsers,
  FiCoffee,
  FiArrowRight,
} from "react-icons/fi";
import {
  FaSwimmingPool,
  FaMountain,
  FaTree,
  FaWineGlassAlt,
} from "react-icons/fa";
import { GiIsland, GiStonePath, GiModernCity } from "react-icons/gi";

const VillasInCroatia = () => {
  const villaTypes = [
    {
      title: "Luxury Villas",
      icon: <FiStar className="text-3xl" />,
      description:
        "Discover the perfect blend of elegance and comfort with our luxury villas in Croatia, designed to make your holiday truly unforgettable. Booking your dream Croatia villa is easier than ever! Our handpicked luxury villas feature private swimming pools, modern interior design, beautifully landscaped gardens, and exclusive amenities for a one-of-a-kind experience.",
      cta: "Book your perfect luxury villa today and experience the best that Croatia has to offer!",
    },
    {
      title: "Affordable Villas",
      icon: <FiHome className="text-3xl" />,
      description:
        "Enjoy a memorable holiday in one of our affordable villas in Croatia, perfect for a relaxing getaway. We offer a wide selection of modern, beautifully designed villas that provide excellent value for your money. While not categorized as luxury villas, these holiday villas in Croatia feature stylish interiors, private swimming pools, landscaped gardens, and additional amenities to enhance your stay.",
      cta: "Start your stress-free vacation today – Book your affordable Croatian villa now with HomeRent!",
    },
    {
      title: "Traditional Villas",
      icon: <GiStonePath className="text-3xl" />,
      description:
        "If you appreciate tradition, Croatia is the perfect destination. Imagine staying in a charming stone holiday villa in Croatia, surrounded by olive trees, vineyards, and gardens filled with Mediterranean plants. These traditional villas, blending stone and wood architecture, offer a unique and authentic experience.",
      cta: "Reserve your villa now and step into the heart of Croatia's rich heritage!",
    },
    {
      title: "Beachfront Villas",
      icon: <FiAnchor className="text-3xl" />,
      description:
        "Discover the perfect combination of luxury, comfort, and natural beauty with beachfront villas in Croatia. Wake up to the soothing sound of the waves and breathtaking views of the Adriatic Sea. These villas offer direct access to Croatia's pristine beaches, allowing you to enjoy the sun, sea, and sand just steps from your door.",
      cta: "Book your beachfront villa in Croatia with HomeRent and start your dream seaside escape!",
    },
    {
      title: "Family Villas",
      icon: <FiUsers className="text-3xl" />,
      description:
        "Create lasting memories with your loved ones by staying in one of family-friendly villas in Croatia. Designed to provide comfort, space, and fun for all ages, these family villas are located in some of the most beautiful parts of Croatia, including the Dalmatian coast, Istria, and the Adriatic islands.",
      cta: "Book your family villa in Croatia today and start planning your dream family getaway!",
    },
    {
      title: "Villas with Pool",
      icon: <FaSwimmingPool className="text-3xl" />,
      description:
        "Enjoy the ultimate holiday experience with HomeRent's villas in Croatia with private pools. Imagine spending your days swimming in a crystal-clear pool, lounging on a sun-soaked terrace, and enjoying stunning views of the Adriatic Sea or lush countryside.",
      cta: "Book your villa with a pool in Croatia today with HomeRent for the ultimate summer escape!",
    },
  ];

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            <span className="text-primary">Villas in Croatia</span> for Rent
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
            Secure your dream holiday today by booking villas in Croatia with
            safe reservations, privacy protection, and guaranteed best prices.
          </p>
          <button className="bg-primary hover:bg-primary text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors duration-300">
            Explore Villas
          </button>
        </div>

        {/* Villa Types Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {villaTypes.map((villa, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full flex flex-col"
            >
              <div className="p-8 flex-grow">
                <div className="bg-[#25A69A]/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6 text-primary">
                  {villa.icon}
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {villa.title}
                </h2>
                <p className="text-gray-600 mb-6">{villa.description}</p>
              </div>
              <div className="px-8 pb-8">
                <button className="text-gray-950 font-medium hover:text-black transition-colors flex items-center">
                  {villa.cta}
                  <FiArrowRight className="ml-2" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Premium Luxury Section */}
        <div className="bg-gradient-to-r from-[#25A69A]/10 to-blue-50 rounded-2xl p-12 mb-16">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-8 lg:mb-0 lg:pr-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Premium <span className="text-primary">Luxury Villas</span> in
                Croatia
              </h2>
              <p className="text-gray-600 mb-6">
                If you are a fan of modern design and the luxury lifestyle, then
                choosing the perfect luxury villa in Croatia for your vacation
                might be a challenge—each year, more stunning villas are built
                across the country. Today, you can find luxury villas in prime
                coastal locations, on islands, in historic towns, and even in
                the countryside.
              </p>
              <p className="text-gray-600 mb-6">
                Private Luxury in Croatia extends beyond beautiful architecture
                and interiors. These villas often offer premium services such as
                daily housekeeping, private chefs, personal transfers,
                excursions, and wellness experiences like massages.
              </p>
              <button className="bg-primary hover:bg-primary text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300">
                View Luxury Villas
              </button>
            </div>
            <div className="lg:w-1/2 grid grid-cols-2 gap-4">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="bg-[#25A69A]/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4 text-primary">
                  <FaSwimmingPool className="text-xl" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Infinity Pools
                </h3>
                <p className="text-gray-600 text-sm">
                  Stunning pools with breathtaking views
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="bg-[#25A69A]/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4 text-primary">
                  <FaWineGlassAlt className="text-xl" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Wine Cellars
                </h3>
                <p className="text-gray-600 text-sm">
                  Premium Croatian wines at your fingertips
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="bg-[#25A69A]/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4 text-primary">
                  <GiModernCity className="text-xl" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Prime Locations
                </h3>
                <p className="text-gray-600 text-sm">
                  Best spots along the Adriatic coast
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="bg-[#25A69A]/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4 text-primary">
                  <FiUmbrella className="text-xl" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Premium Services
                </h3>
                <p className="text-gray-600 text-sm">
                  Private chefs, transfers, and more
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* How to Choose Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            How to Choose the Perfect{" "}
            <span className="text-primary">Villa in Croatia</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-[#25A69A]/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4 text-primary">
                <FiHome className="text-xl" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Budget & Type
              </h3>
              <p className="text-gray-600 text-sm">
                Consider your budget and preferred villa type, from luxury to
                affordable options.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-[#25A69A]/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4 text-primary">
                <FiUsers className="text-xl" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Group Size
              </h3>
              <p className="text-gray-600 text-sm">
                Choose a villa that comfortably accommodates your travel party.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-[#25A69A]/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4 text-[#25A69A]">
                <FiMapPin className="text-xl" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Location</h3>
              <p className="text-gray-600 text-sm">
                Select based on preferred setting - beachfront, countryside, or
                historic areas.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-[#25A69A]/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4 text-[#25A69A]">
                <FiStar className="text-xl" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Amenities
              </h3>
              <p className="text-gray-600 text-sm">
                Prioritize must-have features like pools, kitchens, or
                pet-friendly options.
              </p>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center bg-[#25A69A] rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready for Your <span className="text-white">Croatian Villa</span>{" "}
            Experience?
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Book your dream villa today and create unforgettable memories in one
            of Europe's most beautiful destinations.
          </p>
          <button className="bg-white hover:bg-gray-100 text-[#25A69A] font-bold py-3 px-8 rounded-lg transition-colors duration-300">
            Browse All Villas
          </button>
        </div>
      </div>
    </div>
  );
};

export default VillasInCroatia;
