import React from "react";
import food from "../../assets/place/food.avif?url";
import alcohol from "../../assets/place/wines.avif?url";
import restaurant from "../../assets/place/restorant.jpg?url";

const Gastronomy = () => {
  const culinaryExperiences = [
    {
      id: 1,
      title: "Dalmatian Cuisine",
      description: "Fresh seafood, peka dishes, and truffle specialties",
      image: food,
      link: "/gastronomy/traditional-food",
      badge: "Must Try",
    },
    {
      id: 2,
      title: "Croatian Wines",
      description: "World-class Plavac Mali, Pošip, and Teran wines",
      image: alcohol,
      link: "/gastronomy/wine-tasting",
      badge: "Vineyards",
    },
    {
      id: 3,
      title: "Gourmet Dining",
      description: "Michelin-starred restaurants and hidden local gems",
      image: restaurant,
      link: "/gastronomy/fine-dining",
      badge: "Luxury",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 to-white border-b border-primary">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-amber-100 text-amber-800 rounded-full text-sm font-semibold mb-4">
            Culinary Journey
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
            Croatian Gastronomy
          </h2>
          <p className="text-xl text-amber-600 max-w-2xl mx-auto">
            Discover the best food, wine, and restaurants Croatia has to offer
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {culinaryExperiences.map((item) => (
            <div
              key={item.id}
              className="group relative h-96 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6 w-full">
                {item.badge && (
                  <span className="inline-block px-3 py-1 bg-primary text-white text-xs font-bold rounded-full mb-2">
                    {item.badge}
                  </span>
                )}
                <h3 className="text-2xl font-bold text-white mb-1">
                  {item.title}
                </h3>
                <p className="text-amber-100 mb-4">{item.description}</p>
                <a
                  href={item.link}
                  className="inline-flex items-center text-primary hover:text-white font-medium transition-colors"
                >
                  Discover more
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
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Content */}
        <div className="bg-white rounded-2xl shadow-md overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2 p-10 md:p-12 bg-amber-50">
              <h3 className="text-2xl font-serif font-bold text-gray-800 mb-4">
                Taste the Mediterranean
              </h3>
              <p className="text-gray-600 mb-6">
                Croatian cuisine blends Mediterranean flavors with Central
                European traditions. From Istrian truffles to Dalmatian seafood,
                each region offers unique specialties paired with excellent
                local wines.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-primary mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-700">
                    Olive oils awarded at international competitions
                  </span>
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-primary mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-700">
                    Authentic farm-to-table dining experiences
                  </span>
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-primary mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-700">
                    Centuries-old winemaking traditions
                  </span>
                </li>
              </ul>
              <a
                href="/gastronomy/traditional-food"
                className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-amber-400 transition-colors"
              >
                Get the Foodie Guide
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
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </a>
            </div>
            <div
              className="md:w-1/2 bg-cover bg-center hidden md:block"
              style={{ backgroundImage: `url(${food})` }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gastronomy;
