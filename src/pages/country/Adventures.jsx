import React from "react";
import sports from "../../assets/place/advsports.jpeg?url";
import water from "../../assets/place/advwoter.jpg?url";
import cycling from "../../assets/place/advcycel.jpg?url";
import hiking from "../../assets/place/advhiking.jpg?url";
import adrenaline from "../../assets/place/advadrlin.jpg?url";
import { Link } from "react-router-dom";

const Adventures = () => {
  const adventures = [
    {
      id: 1,
      name: "Water Sports",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      ),
      description: "Kayaking, rafting, and sea adventures",
      image: water,
      link: "/adventures/water-sports",
    },
    {
      id: 2,
      name: "Cycling Trails",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
          />
        </svg>
      ),
      description: "Coastal routes and mountain biking",
      image: cycling,
      link: "/adventures/cycling",
    },
    {
      id: 3,
      name: "Hiking",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
          />
        </svg>
      ),
      description: "National parks and mountain trails",
      image: hiking,
      link: "/adventures/hiking",
    },
    {
      id: 4,
      name: "Extreme Sports",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
      description: "Rock climbing, zip-lining, and more",
      image: sports,
      link: "/adventures/extreme-sports",
    },
    {
      id: 5,
      name: "Adrenaline Rush",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
          />
        </svg>
      ),
      description: "Bungee jumping and parachuting",
      image: adrenaline,
      link: "/adventures/adrenaline",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white border-b border-primary">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Croatian Adventures
          </h2>
          <p className="text-xl text-blue-600 max-w-2xl mx-auto">
            Unforgettable adrenaline experiences in breathtaking landscapes
          </p>
        </div>

        {/* 5-Grid Adventures */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2">
          {adventures.map((adventure) => (
            <div
              key={adventure.id}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 h-80"
            >
              {/* Background Image with Overlay */}
              <div className="absolute inset-0">
                <img
                  src={adventure.image}
                  alt={adventure.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              </div>

              {/* Content */}
              <div className="relative h-full flex flex-col justify-end p-6">
                <div className="absolute top-6 right-6 bg-white bg-opacity-90 p-3 rounded-full text-blue-600">
                  {adventure.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1">
                    {adventure.name}
                  </h3>
                  {/* <p className="text-blue-100 mb-4">{adventure.description}</p> */}
                  <Link
                    to={adventure.link}
                    className="inline-flex items-center text-white font-medium hover:text-blue-300 transition-colors"
                  >
                    Explore activities
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 ml-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Adventures;
