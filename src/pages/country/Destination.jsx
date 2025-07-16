import React from "react";
import towns from "../../assets/place/town.jpg?url";
import beach from "../../assets/place/beatch.jpg?url";
import nationalpark from "../../assets/place/nationalpark.jpg?url";
import { Link } from "react-router-dom";

const Destination = () => {
  const destinations = [
    {
      id: 1,
      name: "Historic Towns",
      description: "Explore Dubrovnik, Split, and other medieval marvels",
      image: towns,
      link: "/croatia/historic-towns",
    },
    {
      id: 2,
      name: "Adriatic Beaches",
      description: "Crystal-clear waters and hidden coastal gems",
      image: beach,
      link: "/croatia/beaches",
    },
    {
      id: 3,
      name: "National Parks",
      description: "Plitvice Lakes and other natural wonders",
      image: nationalpark,
      link: "/croatia/national-parks",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-blue-50 to-white border-b border-primary">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Croatian Destinations
          </h2>
          <p className="text-xl text-blue-600 max-w-2xl mx-auto">
            Discover the highlights of Croatia's stunning landscapes and rich
            heritage
          </p>
        </div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination) => (
            <div
              key={destination.id}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              {/* Background Image with Overlay */}
              <div className="relative h-80">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 p-6 w-full">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {destination.name}
                </h3>
                <p className="text-blue-100 mb-4">{destination.description}</p>
                <Link
                  href={destination.link}
                  className="inline-flex items-center px-5 py-2 bg-white text-blue-600 rounded-full font-medium hover:bg-blue-50 transition-colors"
                >
                  Explore
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
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        {/* <div className="text-center mt-16">
          <a
            href="/croatia/all-destinations"
            className="inline-block px-8 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
          >
            View All Croatian Destinations
          </a>
        </div> */}
      </div>
    </section>
  );
};

export default Destination;
