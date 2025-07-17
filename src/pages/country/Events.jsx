import React from "react";
import { useNavigate } from "react-router-dom";
import sports from "../../assets/place/sport.avif?url";
import music from "../../assets/place/music.webp?url";
import culture from "../../assets/place/curture.webp?url";
import {
  FaArrowRight,
  FaRunning,
  FaMusic,
  FaGlobeAmericas,
} from "react-icons/fa";

const Events = () => {
  const navigate = useNavigate();

  const events = [
    {
      id: 1,
      title: "Sports Events",
      slug: "water-sports",
      description:
        "Experience thrilling sports competitions and join the excitement of live games with fellow enthusiasts.",
      image: sports,
      category: "Sports",
      icon: <FaRunning className="text-blue-500" />,
    },
    {
      id: 2,
      title: "Music Concerts",
      slug: "music-concerts",
      description:
        "Immerse yourself in the rhythm of live performances from your favorite artists and bands.",
      image: music,
      category: "Music",
      icon: <FaMusic className="text-purple-500" />,
    },
    {
      id: 3,
      title: "Cultural Festivals",
      slug: "cultural-festivals",
      description:
        "Celebrate diversity with traditional performances, art exhibitions, and cultural showcases.",
      image: culture,
      category: "Culture",
      icon: <FaGlobeAmericas className="text-green-500" />,
    },
  ];

  const handleCardClick = (slug) => {
    navigate(`/croatia/events/${slug}`); // Keep this consistent with your router
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Upcoming Events
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600 sm:mt-6">
            Discover exciting events happening near you
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {events.map((event) => (
            <div
              key={event.id}
              onClick={() => handleCardClick(event.slug)}
              className="group bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 cursor-pointer"
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute top-4 right-4 flex items-center gap-2 bg-white/90 backdrop-blur-sm text-gray-800 text-xs font-bold px-3 py-2 rounded-full">
                  {event.icon}
                  <span>{event.category}</span>
                </div>
                <div className="absolute bottom-0 left-0 p-6 w-full">
                  <h3 className="text-2xl font-bold text-white mb-3 drop-shadow-lg">
                    {event.title}
                  </h3>
                  <p className="text-gray-200 mb-4 line-clamp-2">
                    {event.description}
                  </p>
                  <div className="flex items-center gap-2 text-sm font-semibold text-white group-hover:text-blue-300 transition-colors">
                    <span>Explore events</span>
                    <FaArrowRight className="transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button
            onClick={() => navigate("/events")}
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-300"
          >
            View All Events
            <FaArrowRight className="ml-3 -mr-1 h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Events;
