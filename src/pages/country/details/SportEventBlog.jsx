import React from "react";
import {
  FiMapPin,
  FiCalendar,
  FiActivity,
  FiStar,
  FiPlayCircle,
} from "react-icons/fi";
import { FaFutbol, FaBasketballBall, FaWater } from "react-icons/fa";
import { GiMountainClimbing, GiTennisRacket } from "react-icons/gi";
import { FaTrophy } from "react-icons/fa";
import { GiWaterPolo } from "react-icons/gi";
import { useNavigate } from "react-router-dom";

const SportEvent = () => {
  const navigate = useNavigate();
  const sportBlog = {
    country: "Croatia",
    theme: "Sports-Based Vacation Planning",
    sports: [
      {
        name: "Water Sports",
        type: "Play",
        slug: "adriatic-water-sports",
        description:
          "Dive into thrilling water sports along Croatia's Adriatic coast. From jet skiing and paddleboarding to snorkeling and scuba diving, these activities are perfect for adventure lovers during the hot summer months.",
        locations: ["Hvar", "Split", "Dubrovnik", "Zadar"],
        bestSeason: "Summer",
        image:
          "https://plus.unsplash.com/premium_photo-1733317225499-d66a488b8352?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        name: "Tennis",
        type: "Play",
        slug: "croatian-tennis",
        description:
          "Croatia boasts beautiful coastal tennis resorts. Play a match on clay courts or attend professional tournaments like the ATP Croatia Open in Umag.",
        locations: ["Umag", "Zadar", "Dubrovnik", "Poreč"],
        bestSeason: "Spring and Summer",
        image:
          "https://plus.unsplash.com/premium_photo-1666913667082-c1fecc45275d?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        name: "Adventure Sports",
        type: "Play",
        slug: "adventure-sports",
        description:
          "Experience Croatia’s wild side with rock climbing, white-water rafting, paragliding, and hiking. Ideal for active travelers seeking natural beauty in moderate weather.",
        locations: [
          "Paklenica",
          "Omiš",
          "Plitvice Lakes",
          "Cetina River",
          "Krka",
        ],
        bestSeason: "Spring and Autumn",
        image:
          "https://plus.unsplash.com/premium_photo-1661812984751-41bdee4dd5cc?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        name: "Football",
        type: "Watch",
        slug: "football-culture",
        description:
          "Watch passionate football matches in Croatia’s top stadiums. Home to famous clubs like Dinamo Zagreb and Hajduk Split, the local football scene is intense and exciting.",
        locations: ["Zagreb", "Split", "Rijeka", "Osijek"],
        bestSeason: "Autumn and Winter",
        image:
          "https://images.unsplash.com/photo-1623793478409-50c0c0478d26?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
    ],
  };

  // Icons mapped by sport name
  const sportIcons = {
    "Water Sports": <GiWaterPolo className="text-blue-500" size={28} />,
    Tennis: <GiTennisRacket className="text-green-600" size={28} />,
    "Adventure Sports": (
      <GiMountainClimbing className="text-orange-600" size={28} />
    ),
    Football: <FaFutbol className="text-red-600" size={28} />,
    Basketball: <FaBasketballBall className="text-yellow-600" size={28} />,
  };

  // Icon for type Play / Watch
  const typeIcons = {
    Play: <FiPlayCircle className="text-green-500" size={20} />,
    Watch: <FaTrophy className="text-purple-600" size={20} />,
  };
  const handleCardClick = (slug) => {
    navigate(`/croatia/events/${slug}`);
  };

  return (
    <div className="bg-gradient-to-b from-blue-50 to-white py-16 px-6 max-w-7xl mx-auto space-y-16">
      <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
        {sportBlog.theme} in {sportBlog.country}
      </h1>

      {sportBlog.sports.map((sport) => (
        <div
          key={sport.name}
          onClick={() => handleCardClick(sport.slug)}
          className="flex flex-col md:flex-row gap-8 items-center bg-white  p-6"
        >
          {/* Image */}
          <div className="md:w-1/2 rounded-xl overflow-hidden shadow-md">
            <img
              src={sport.image}
              alt={sport.name}
              className="w-full h-64 object-cover transform hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Text Content */}
          <div className="md:w-1/2 flex flex-col justify-center space-y-4">
            <div className="flex items-center gap-3">
              <div>{sportIcons[sport.name]}</div>
              <h2 className="text-3xl font-semibold text-gray-900">
                {sport.name}
              </h2>
              <span className="ml-auto flex items-center gap-1 text-sm font-medium text-gray-600">
                {typeIcons[sport.type]} {sport.type}
              </span>
            </div>

            <p className="text-gray-700">{sport.description}</p>

            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 bg-blue-100 px-3 py-1 rounded-full text-blue-700 font-medium">
                <FiMapPin />
                <span>Locations:</span>
                <ul className="flex flex-wrap gap-2 ml-1">
                  {sport.locations.map((loc) => (
                    <li
                      key={loc}
                      className="bg-blue-200 text-blue-800 rounded-full px-2 py-0.5"
                    >
                      {loc}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center gap-2 bg-yellow-100 px-3 py-1 rounded-full text-yellow-700 font-medium">
                <FiCalendar />
                <span>Best Season:</span> {sport.bestSeason}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SportEvent;
