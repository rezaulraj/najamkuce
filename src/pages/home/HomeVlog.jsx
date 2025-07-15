import React from "react";
import { FiArrowRight } from "react-icons/fi";
import destination from "../../assets/corotia/blogc1.jpg";
import event from "../../assets/corotia/blogc2.jpeg";
import gastronomy from "../../assets/corotia/blogc3.jpg";
import advanchare from "../../assets/corotia/blogc4.jpg";
import newandtips from "../../assets/corotia/blogc5.webp";

const HomeVlog = () => {
  const blogCategories = [
    {
      title: "Destinations",
      description: "Explore Croatia's most beautiful locations",
      image: destination,
      color: "from-blue-500/80 to-blue-700/80",
    },
    {
      title: "Events",
      description: "Cultural events and festivals",
      image: event,
      color: "from-purple-500/80 to-purple-700/80",
    },
    {
      title: "Gastronomy",
      description: "Taste authentic Croatian cuisine",
      image: gastronomy,
      color: "from-amber-500/80 to-amber-700/80",
    },
    {
      title: "Adventure",
      description: "Outdoor activities and experiences",
      image: advanchare,
      color: "from-emerald-500/80 to-emerald-700/80",
    },
    {
      title: "Tips & News",
      description: "Latest travel updates and advice",
      image: newandtips,
      color: "from-rose-500/80 to-rose-700/80",
    },
  ];

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
      {/* Header */}
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold font-lobster leading-tight tracking-widest text-white mb-4">
          <span className="text-[#25A69A]">Croatia</span> in Style
        </h2>
        <h3 className="text-2xl text-gray-300">Croatia Travel Blog</h3>
      </div>

      {/* Image Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Main Featured Card */}
        <div className="md:col-span-2 lg:col-span-2 row-span-2 relative group overflow-hidden rounded-2xl">
          <img
            src={blogCategories[0].image}
            alt={blogCategories[0].title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div
            className={`absolute inset-0 bg-gradient-to-t ${blogCategories[0].color} via-transparent to-transparent`}
          ></div>
          <div className="absolute bottom-0 left-0 p-6 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-2">
              {blogCategories[0].title}
            </h3>
            <p className="text-lg mb-4">{blogCategories[0].description}</p>
            <button className="flex items-center text-white font-medium group">
              Read More
              <FiArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>

        {/* Other Cards */}
        {blogCategories.slice(1).map((category, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-2xl h-64"
          >
            <img
              src={category.image}
              alt={category.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div
              className={`absolute inset-0 bg-gradient-to-t ${category.color} via-transparent to-transparent`}
            ></div>
            <div className="absolute bottom-0 left-0 p-6 text-white">
              <h3 className="text-xl font-bold mb-1">{category.title}</h3>
              <p className="text-sm mb-3">{category.description}</p>
              <button className="flex items-center text-white text-sm font-medium group">
                Read More
                <FiArrowRight className="ml-1 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* View All Button */}
      <div className="text-center mt-12">
        <button className="border-2 border-[#25A69A] text-[#25A69A] hover:bg-[#25A69A] hover:text-white font-medium py-3 px-8 rounded-lg transition-all duration-300">
          View More
        </button>
      </div>
    </div>
  );
};

export default HomeVlog;
