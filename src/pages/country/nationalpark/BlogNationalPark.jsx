import React from "react";
import {
  FiMapPin,
  FiCalendar,
  FiAlertCircle,
  FiCompass,
  FiDroplet,
  FiAnchor,
  FiSun,
} from "react-icons/fi";
import {
  FaTree,
  FaSwimmingPool,
  FaMountain,
  FaWater,
  FaUmbrellaBeach,
} from "react-icons/fa";
import { GiHiking } from "react-icons/gi";
import { Link } from "react-router-dom";

const BlogNationalPark = () => {
  const nationalParkBlog = [
    {
      title: "Plitvice Lakes National Park: Waterfall Wonderland",
      slug: "plitvice-lakes-national-park",
      location: "Lika-Senj County, Croatia",
      summary:
        "A UNESCO World Heritage Site filled with cascading lakes, turquoise waters, and lush forest trails — Croatia’s most iconic natural wonder.",

      best_time_to_visit:
        "April–June and September–October (fewer crowds, great weather)",
      travel_tips: [
        "Start early to avoid peak crowds and secure parking.",
        "Bring waterproof shoes — some areas can be wet or slippery.",
        "Choose Entrance 1 for best views of Veliki Slap (Big Waterfall).",
      ],
      image_url:
        "https://images.unsplash.com/photo-1589312133722-eab40c686ebb?q=80&w=759&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tags: ["Nature", "UNESCO", "Waterfalls", "Hiking", "Lakes"],
    },
    {
      title: "Krka National Park: Swim Near Waterfalls",
      slug: "krka-national-park",
      location: "Šibenik-Knin County, Croatia",
      summary:
        "Famous for Skradinski Buk waterfall and its swimming areas, Krka offers boat tours, historic monasteries, and natural beauty near the Adriatic coast.",

      best_time_to_visit: "May to September",
      travel_tips: [
        "Swimming is only allowed in summer and at designated spots.",
        "Take the boat tour from Skradin for the most scenic route.",
        "Wear comfortable shoes – some trails include wooden stairs.",
      ],
      image_url:
        "https://images.unsplash.com/photo-1563302759-51579d211e26?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tags: ["Waterfalls", "Swimming", "Boat Tours", "Nature", "Dalmatia"],
    },
    {
      title: "Paklenica National Park: Cliffs, Canyons & Climbing",
      slug: "paklenica-national-park",
      location: "Zadar County, Croatia",
      summary:
        "A haven for hikers and climbers, Paklenica’s dramatic canyons and mountain peaks are nestled in the Velebit range just minutes from the sea.",

      best_time_to_visit:
        "April to October (spring and fall for hiking, summer for climbing)",
      travel_tips: [
        "Bring sturdy hiking or climbing shoes — terrain is rocky and steep.",
        "Early morning is best for climbing, before the sun hits the cliffs.",
        "Check weather before hiking – mountain conditions change quickly.",
      ],
      image_url:
        "https://images.unsplash.com/photo-1711851756938-7ce6938e8aad?q=80&w=1031&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tags: ["Mountains", "Hiking", "Climbing", "Canyons", "Adventure"],
    },
  ];

  const tagIcons = {
    Nature: <FaTree className="text-green-500" />,
    UNESCO: <FiCompass className="text-blue-500" />,
    Waterfalls: <FaWater className="text-blue-400" />,
    Hiking: <GiHiking className="text-brown-500" />,
    Lakes: <FiDroplet className="text-blue-300" />,
    Swimming: <FaSwimmingPool className="text-teal-500" />,
    "Boat Tours": <FiAnchor className="text-navy-500" />,
    Mountains: <FaMountain className="text-gray-600" />,
    Climbing: <GiHiking className="text-red-500" />,
    Adventure: <FiCompass className="text-orange-500" />,
    Dalmatia: <FaUmbrellaBeach className="text-yellow-500" />,
  };

  return (
    <div className="py-16 px-4 sm:px-8 lg:px-16 bg-gradient-to-b from-green-50 to-white">
      <div className="max-w-7xl mx-auto space-y-20">
        {nationalParkBlog.map((park, index) => (
          <div
            key={park.slug}
            className={`flex flex-col gap-8 md:gap-12 not-last:border-b border-primary py-4 ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >
            {/* Image Section */}
            <div className="md:w-1/2">
              <div className="overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <img
                  src={park.image_url}
                  alt={park.title}
                  className="w-full h-full object-cover aspect-video hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Text Section */}
            <div className="md:w-1/2 flex flex-col justify-center">
              <div className="space-y-6">
                <div className="flex items-center gap-3 text-secondary">
                  <FiMapPin className="text-lg" />
                  <span className="font-medium">{park.location}</span>
                </div>
                <Link to={`/croatia/national-parks/${park.slug}`}>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 hover:text-primary">
                    {park.title}
                  </h2>
                </Link>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {park.summary}
                </p>

                <div className="flex items-center gap-3 text-sm text-secondary bg-green-50 px-4 py-2 rounded-lg w-fit">
                  <FiCalendar />
                  <span>Best time: {park.best_time_to_visit}</span>
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-800 flex items-center gap-2">
                    <FiAlertCircle className="text-secondary" />
                    Travel Tips:
                  </h4>
                  <ul className="space-y-3">
                    {park.travel_tips.map((tip, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 p-3 hover:bg-green-50 rounded-lg transition"
                      >
                        <div className="bg-green-100 p-2 rounded-full mt-1">
                          {tip.includes("Start early") ? (
                            <FiSun className="text-yellow-500" />
                          ) : tip.includes("Swimming") ? (
                            <FaSwimmingPool className="text-yellow-500" />
                          ) : tip.includes("Bring") ? (
                            <GiHiking className="text-yellow-500" />
                          ) : (
                            <FiCompass className="text-yellow-500" />
                          )}
                        </div>
                        <span className="text-gray-700">{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  {park.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1 px-3 py-1 text-xs font-medium text-green-800 bg-green-100 rounded-full"
                    >
                      {tagIcons[tag] || <FaTree className="text-green-500" />}
                      {tag}
                    </span>
                  ))}
                </div>

                <Link
                  to={`/croatia/national-parks/${park.slug}`}
                  className="mt-4 px-6 py-2.5 bg-primary text-white font-medium rounded-lg hover:bg-secondary transition-colors duration-300 w-fit flex items-center gap-2"
                >
                  Explore Park
                  <FiCompass className="text-white" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogNationalPark;
