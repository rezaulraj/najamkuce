import React from "react";
import {
  FaNewspaper,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaInfoCircle,
  FaArrowRight,
} from "react-icons/fa";
import LocalNews from "../../assets/place/news.webp?url";
import tipsforowner from "../../assets/place/owner.png?url";
import tipsforguide from "../../assets/place/tipsguide.avif?url";
import { Link } from "react-router-dom";

const NewsAndTips = () => {
  const items = [
    {
      id: 1,
      name: "Travel News",
      icon: <FaNewspaper className="h-6 w-6" />,
      description: "Latest regulations and entry requirements",
      image: LocalNews,
      link: "/news/travel-updates",
    },
    {
      id: 2,
      name: "Events Calendar",
      icon: <FaCalendarAlt className="h-6 w-6" />,
      description: "Festivals and cultural happenings",
      image: tipsforguide,
      link: "/news/events",
    },
    {
      id: 3,
      name: "Local Tips",
      icon: <FaMapMarkerAlt className="h-6 w-6" />,
      description: "Insider knowledge from residents",
      image: tipsforowner,
      link: "/news/local-tips",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Croatia News & Tips
          </h2>
          <p className="text-xl text-blue-600 max-w-2xl mx-auto">
            Local news and useful information for your trip
          </p>
        </div>

        {/* 3-Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 h-80"
            >
              {/* Background Image with Overlay */}
              <div className="absolute inset-0">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              </div>

              {/* Content */}
              <div className="relative h-full flex flex-col justify-end p-6">
                <div className="absolute top-6 right-6 bg-white bg-opacity-90 p-3 rounded-full text-blue-600">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1">
                    {item.name}
                  </h3>
                  <Link
                    to={item.link}
                    className="inline-flex items-center text-white font-medium hover:text-blue-300 transition-colors"
                  >
                    Read more
                    <FaArrowRight className="h-4 w-4 ml-2" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tips Categories */}
        <div className="mt-16 bg-white rounded-xl shadow-lg p-8 max-w-4xl mx-auto">
          <div className="flex items-center mb-6">
            <FaInfoCircle className="text-blue-600 text-3xl mr-4" />
            <h3 className="text-2xl font-bold text-gray-800">
              Essential Travel Tips
            </h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["Transportation", "Accommodation", "Dining", "Safety"].map(
              (category) => (
                <div
                  key={category}
                  className="bg-gray-50 p-4 rounded-lg hover:bg-blue-50 transition-colors"
                >
                  <h4 className="font-semibold text-gray-800">{category}</h4>
                  <p className="text-sm text-gray-600 mt-1">
                    View {category.toLowerCase()} tips
                  </p>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsAndTips;
