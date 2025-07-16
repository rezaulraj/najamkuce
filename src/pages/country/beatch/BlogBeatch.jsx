import React from "react";
import {
  FiMapPin,
  FiCalendar,
  FiSun,
  FiAlertTriangle,
  FiInfo,
} from "react-icons/fi";
import { FaUmbrellaBeach, FaSwimmer, FaCar, FaShip } from "react-icons/fa";
import { Link } from "react-router-dom";

const BlogBeatch = () => {
  const beachBlog = [
    {
      title: "Stiniva Beach: Hidden Cove of Vis Island",
      slug: "stiniva-beach-vis",
      location: "Vis Island, Croatia",
      summary:
        "A narrow entrance opens up to a spectacular, secluded cove surrounded by towering cliffs – perfect for adventurers and nature lovers.",

      best_time_to_visit: "Late May to early October",
      travel_tips: [
        "Arrive early if hiking down – the path gets hot and steep.",
        "Bring your own water and snacks – there are no facilities on-site.",
        "Boat tours from Split and Hvar often include Stiniva as a stop.",
      ],
      image_url:
        "https://images.unsplash.com/photo-1562294680-1211e5b8a8ef?q=80&w=845&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tags: ["Beach", "Hidden Gem", "Vis", "Adventure", "Nature"],
    },
    {
      title: "Zlatni Rat: Croatia’s Golden Horn",
      slug: "zlatni-rat-beach",
      location: "Bol, Brač Island, Croatia",
      summary:
        "A natural wonder that changes shape with the wind, Zlatni Rat is a long pebbled beach stretching out into the Adriatic Sea like a golden horn.",

      best_time_to_visit: "June to September",
      travel_tips: [
        "Arrive before 10 AM for best spots and calm water.",
        "Windsurf rentals and lessons are available nearby.",
        "Easy to reach by ferry from Split, then local transfer to Bol.",
      ],
      image_url:
        "https://images.unsplash.com/photo-1626025373214-89771a4a75e8?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tags: ["Beach", "Brač", "Golden Horn", "Watersports", "Family"],
    },
    {
      title: "Sakarun Beach: White Sands & Azure Waters",
      slug: "sakarun-beach-dugi-otok",
      location: "Dugi Otok, Croatia",
      summary:
        "A Caribbean-like escape with shallow waters and bright white sand on the peaceful island of Dugi Otok – perfect for kids and calm swims.",

      best_time_to_visit: "Mid-June to mid-September",
      travel_tips: [
        "Rent a car or scooter from Sali or Božava to reach the beach easily.",
        "Great for kids thanks to shallow waters and gentle waves.",
        "Pack sunglasses – the white beach reflects a lot of sun!",
      ],
      image_url:
        "https://images.unsplash.com/photo-1578691963959-435efd70eca3?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tags: ["Beach", "Dugi Otok", "Family", "Relaxation", "White Sand"],
    },
  ];

  const tipIcons = {
    "Arrive early": <FiSun className="text-yellow-500" />,
    "Bring your own": <FiAlertTriangle className="text-orange-500" />,
    "Boat tours": <FaShip className="text-blue-500" />,
    "Windsurf rentals": <FaSwimmer className="text-blue-400" />,
    "Easy to reach": <FaCar className="text-green-500" />,
    "Great for kids": <FiInfo className="text-purple-500" />,
    "Pack sunglasses": <FiSun className="text-yellow-500" />,
    "Rent a car": <FaCar className="text-green-500" />,
  };

  const getTipIcon = (tip) => {
    for (const [key, icon] of Object.entries(tipIcons)) {
      if (tip.includes(key)) return icon;
    }
    return <FiInfo className="text-blue-500" />;
  };

  return (
    <div className="py-16 px-4 sm:px-8 lg:px-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto space-y-20">
        {beachBlog.map((beach, index) => (
          <div
            key={beach.slug}
            className={`flex flex-col gap-8 md:gap-12 not-last:border-b border-primary py-4 ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >
            {/* Image Section */}
            <div className="md:w-1/2">
              <div className="overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <img
                  src={beach.image_url}
                  alt={beach.title}
                  className="w-full h-full object-cover aspect-video hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Text Section */}
            <div className="md:w-1/2 flex flex-col justify-center">
              <div className="space-y-6">
                <div className="flex items-center gap-4 text-blue-600">
                  <FaUmbrellaBeach className="text-xl" />
                  <span className="font-medium">{beach.location}</span>
                </div>
                <Link to={`/croatia/beaches/${beach.slug}`}>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 hover:text-primary">
                    {beach.title}
                  </h2>
                </Link>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {beach.summary}
                </p>

                <div className="flex items-center gap-3 text-sm text-blue-600 bg-blue-50 px-4 py-2 rounded-lg w-fit">
                  <FiCalendar />
                  <span>Best time: {beach.best_time_to_visit}</span>
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-800 flex items-center gap-2">
                    <FiInfo className="text-blue-500" />
                    Travel Tips:
                  </h4>
                  <ul className="space-y-2">
                    {beach.travel_tips.map((tip, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="mt-1">{getTipIcon(tip)}</span>
                        <span className="text-gray-700">{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  {beach.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-block px-3 py-1 text-xs font-medium text-blue-800 bg-blue-100 rounded-full"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                <Link
                  to={`/croatia/beaches/${beach.slug}`}
                  className="mt-4 px-6 py-2.5 bg-primary text-white font-medium rounded-lg hover:bg-secondary transition-colors duration-300 w-fit"
                >
                  Read More
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default BlogBeatch;
