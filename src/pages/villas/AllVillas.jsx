import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FiArrowLeft,
  FiArrowRight,
  FiStar,
  FiMapPin,
  FiUsers,
  FiHome,
  FiLayers,
} from "react-icons/fi";
import { motion } from "framer-motion";
import place1i1 from "../../assets/home/place1i1.avif?url";
import place1i2 from "../../assets/home/place1i2.avif?url";
import place1i3 from "../../assets/home/place1i3.avif?url";
import place1i4 from "../../assets/home/place1i4.webp?url";
import place1i5 from "../../assets/home/place1i5.avif?url";
import place1i6 from "../../assets/home/place1i6.webp?url";
import place1i7 from "../../assets/home/place1i7.avif?url";
import place1i8 from "../../assets/home/place1i8.avif?url";

import place2i1 from "../../assets/home/place2i1.avif?url";
import place2i2 from "../../assets/home/place2i2.avif?url";
import place2i3 from "../../assets/home/place2i3.avif?url";
import place2i4 from "../../assets/home/place2i4.avif?url";
import place2i5 from "../../assets/home/place2i5.avif?url";
import place2i6 from "../../assets/home/place2i6.avif?url";
import place2i7 from "../../assets/home/place2i7.avif?url";
import place2i8 from "../../assets/home/place2i8.avif?url";

import place3i1 from "../../assets/home/place3i1.avif?url";
import place3i2 from "../../assets/home/place3i2.avif?url";
import place3i3 from "../../assets/home/place3i3.avif?url";
import place3i4 from "../../assets/home/place3i4.avif?url";
import place3i5 from "../../assets/home/place3i5.avif?url";
import place3i6 from "../../assets/home/place3i6.jpeg?url";
import place3i7 from "../../assets/home/place3i7.avif?url";
import place3i8 from "../../assets/home/place3i8.avif?url";

import place4i1 from "../../assets/home/place4i1.avif?url";
import place4i2 from "../../assets/home/place4i2.avif?url";
import place4i3 from "../../assets/home/place4i3.avif?url";
import place4i4 from "../../assets/home/place4i4.avif?url";
import place4i5 from "../../assets/home/place4i5.avif?url";
import place4i6 from "../../assets/home/place4i6.avif?url";
import place4i7 from "../../assets/home/place4i7.avif?url";
import place4i8 from "../../assets/home/place4i8.avif?url";

import place5i1 from "../../assets/home/place5i1.avif?url";
import place5i2 from "../../assets/home/place5i2.avif?url";
import place5i3 from "../../assets/home/place5i3.avif?url";
import place5i4 from "../../assets/home/place5i4.avif?url";
import place5i5 from "../../assets/home/place5i5.webp?url";
import place5i6 from "../../assets/home/place5i6.avif?url";
import place5i7 from "../../assets/home/place5i7.avif?url";
import place5i8 from "../../assets/home/place5i8.avif?url";

import place6i1 from "../../assets/home/place6i1.avif?url";
import place6i2 from "../../assets/home/place6i2.avif?url";
import place6i3 from "../../assets/home/place6i3.jpg?url";
import place6i4 from "../../assets/home/place6i4.avif?url";
import place6i5 from "../../assets/home/place6i5.avif?url";
import place6i6 from "../../assets/home/place6i6.avif?url";
import place6i7 from "../../assets/home/place6i7.avif?url";
import place6i8 from "../../assets/home/place6i8.avif?url";

import place7i1 from "../../assets/home/place7i1.avif?url";
import place7i2 from "../../assets/home/place7i2.avif?url";
import place7i3 from "../../assets/home/place7i3.avif?url";
import place7i4 from "../../assets/home/place7i4.avif?url";
import place7i5 from "../../assets/home/place7i5.avif?url";
import place7i6 from "../../assets/home/place7i6.avif?url";
import place7i7 from "../../assets/home/place7i7.avif?url";
import place7i8 from "../../assets/home/place7i8.avif?url";

import place8i1 from "../../assets/home/place8i1.avif?url";
import place8i2 from "../../assets/home/place8i2.avif?url";
import place8i3 from "../../assets/home/place8i3.avif?url";
import place8i4 from "../../assets/home/place8i4.jpg?url";
import place8i5 from "../../assets/home/place8i5.avif?url";
import place8i6 from "../../assets/home/place8i6.webp?url";
import place8i7 from "../../assets/home/place8i7.avif?url";

import place9i1 from "../../assets/home/place9i1.avif?url";
import place9i2 from "../../assets/home/place9i2.avif?url";
import place9i3 from "../../assets/home/place9i3.avif?url";
import place9i4 from "../../assets/home/place9i4.avif?url";
import place9i5 from "../../assets/home/place9i5.avif?url";
import place9i6 from "../../assets/home/place9i6.avif?url";
import place9i7 from "../../assets/home/place9i7.avif?url";
import place9i8 from "../../assets/home/place9i8.avif?url";

import place10i1 from "../../assets/home/place10i1.webp?url";
import place10i2 from "../../assets/home/place10i2.avif?url";
import place10i3 from "../../assets/home/place10i3.avif?url";
import place10i4 from "../../assets/home/place10i4.avif?url";
import place10i5 from "../../assets/home/place10i5.avif?url";
import place10i6 from "../../assets/home/place10i6.avif?url";
import place10i7 from "../../assets/home/place10i7.avif?url";
import place10i8 from "../../assets/home/place10i8.avif?url";
const AllVillas = () => {
  const navigate = useNavigate();
  const [currentImageIndices, setCurrentImageIndices] = useState({});

  const [hoveredCard, setHoveredCard] = useState(null);

  const places = [
    {
      placeTitle: "Dubrovnik Seaside Villa",
      location: "Dubrovnik, Croatia",
      rating: 4.9,
      numberOfGuest: 6,
      numberOfBedroom: 3,
      numberOfWashroom: 2,
      price: "$350/night",
      images: [
        place1i1,
        place1i2,
        place1i3,
        place1i4,
        place1i5,
        place1i6,
        place1i7,
        place1i8,
      ],
      features: [
        "Private Pool",
        "Sea View",
        "Beach Access",
        "Free WiFi",
        "Air Conditioning",
        "Parking",
      ],
    },
    {
      placeTitle: "Hvar Island Retreat",
      location: "Hvar, Croatia",
      rating: 4.8,
      numberOfGuest: 8,
      numberOfBedroom: 4,
      numberOfWashroom: 3,
      price: "$420/night",
      images: [
        place2i1,
        place2i2,
        place2i3,
        place2i4,
        place2i5,
        place2i6,
        place2i7,
        place2i8,
      ],
      features: [
        "Infinity Pool",
        "Sunset Views",
        "Garden",
        "BBQ Area",
        "Smart TV",
        "Dishwasher",
      ],
    },
    {
      placeTitle: "Split Luxury Penthouse",
      location: "Split, Croatia",
      rating: 4.7,
      numberOfGuest: 4,
      numberOfBedroom: 2,
      numberOfWashroom: 2,
      price: "$290/night",
      images: [
        place3i1,
        place3i2,
        place3i3,
        place3i4,
        place3i5,
        place3i6,
        place3i7,
        place3i8,
      ],
      features: [
        "Rooftop Terrace",
        "City & Sea Views",
        "Modern Design",
        "Walk to Beach",
        "Elevator",
        "Coffee Machine",
      ],
    },
    {
      placeTitle: "Zadar Coastal Villa",
      location: "Zadar, Croatia",
      rating: 4.9,
      numberOfGuest: 10,
      numberOfBedroom: 5,
      numberOfWashroom: 4,
      price: "$520/night",
      images: [
        place4i1,
        place4i2,
        place4i3,
        place4i4,
        place4i5,
        place4i6,
        place4i7,
        place4i8,
      ],
      features: [
        "Private Beach",
        "Hot Tub",
        "Boat Dock",
        "Chef's Kitchen",
        "Wine Cellar",
        "Game Room",
      ],
    },
    {
      placeTitle: "Rovinj Romantic Cottage",
      location: "Rovinj, Croatia",
      rating: 4.8,
      numberOfGuest: 2,
      numberOfBedroom: 1,
      numberOfWashroom: 1,
      price: "$230/night",
      images: [
        place5i1,
        place5i2,
        place5i3,
        place5i4,
        place5i5,
        place5i6,
        place5i7,
        place5i8,
      ],
      features: [
        "Secluded Location",
        "Stone Architecture",
        "Fireplace",
        "Breakfast Included",
        "Bicycle Rental",
        "Pet Friendly",
      ],
    },
    {
      placeTitle: "Makarska Beachfront Villa",
      location: "Makarska, Croatia",
      rating: 4.9,
      numberOfGuest: 12,
      numberOfBedroom: 6,
      numberOfWashroom: 5,
      price: "$680/night",
      images: [
        place6i1,
        place6i2,
        place6i3,
        place6i4,
        place6i5,
        place6i6,
        place6i7,
        place6i8,
      ],
      features: [
        "Direct Beach Access",
        "Two Pools",
        "Home Theater",
        "Fitness Room",
        "Chef Available",
        "Daily Cleaning",
      ],
    },
    {
      placeTitle: "Pula Historic Residence",
      location: "Pula, Croatia",
      rating: 4.7,
      numberOfGuest: 5,
      numberOfBedroom: 3,
      numberOfWashroom: 2,
      price: "$310/night",
      images: [
        place7i1,
        place7i2,
        place7i3,
        place7i4,
        place7i5,
        place7i6,
        place7i7,
        place7i8,
      ],
      features: [
        "Roman Architecture",
        "Central Location",
        "Antique Furnishings",
        "Courtyard",
        "Walk to Amphitheater",
        "Library",
      ],
    },
    {
      placeTitle: "Bol Cliffside Villa",
      location: "Bol, Brac Island",
      rating: 4.9,
      numberOfGuest: 6,
      numberOfBedroom: 3,
      numberOfWashroom: 3,
      price: "$450/night",
      images: [
        place8i1,
        place8i2,
        place8i3,
        place8i4,
        place8i5,
        place8i6,
        place8i7,
      ],
      features: [
        "Cliffside Location",
        "Zlatni Rat View",
        "Infinity Pool",
        "Outdoor Shower",
        "Solar Heated",
        "Yoga Deck",
      ],
    },
    {
      placeTitle: "Korcula Stone House",
      location: "Korcula Island",
      rating: 4.8,
      numberOfGuest: 4,
      numberOfBedroom: 2,
      numberOfWashroom: 2,
      price: "$380/night",
      images: [
        place9i1,
        place9i2,
        place9i3,
        place9i4,
        place9i5,
        place9i6,
        place9i7,
        place9i8,
      ],
      features: [
        "Old Town Location",
        "Terrace with Sea View",
        "Historical Property",
        "Wine Tasting",
        "Marco Polo House Nearby",
        "Kayak Rental",
      ],
    },
    {
      placeTitle: "Vis Island Hideaway",
      location: "Vis Island",
      rating: 4.9,
      numberOfGuest: 4,
      numberOfBedroom: 2,
      numberOfWashroom: 2,
      price: "$410/night",
      images: [
        place10i1,
        place10i2,
        place10i3,
        place10i4,
        place10i5,
        place10i6,
        place10i7,
        place10i8,
      ],
      features: [
        "Secluded Cove",
        "Private Boat Access",
        "Organic Garden",
        "Solar Powered",
        "Snorkeling Gear",
        "Local Wine Provided",
      ],
    },
  ];
  const handlePrevImage = (placeIndex) => {
    setCurrentImageIndices((prev) => {
      const currentIndex = prev[placeIndex] ?? 0;
      const newIndex =
        (currentIndex - 1 + places[placeIndex].images.length) %
        places[placeIndex].images.length;
      return { ...prev, [placeIndex]: newIndex };
    });
  };

  const handleNextImage = (placeIndex) => {
    setCurrentImageIndices((prev) => {
      const currentIndex = prev[placeIndex] ?? 0;
      const newIndex = (currentIndex + 1) % places[placeIndex].images.length;
      return { ...prev, [placeIndex]: newIndex };
    });
  };
  const createSlug = (title) => {
    return title.toLowerCase().replace(/\s+/g, "-");
  };
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            <span className="text-primary">Villas For Rent</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Luxury villas in Croatia's most beautiful beach areas. Each property
            is handpicked for its unique charm and premium amenities.
          </p>
        </div>

        {/* Villas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {places.map((place, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              whileHover={{ y: -5 }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              onClick={() =>
                navigate(`/villas/${createSlug(place.placeTitle)}`)
              }
            >
              {/* Image with Navigation */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={place.images[currentImageIndices[index] ?? 0]}
                  alt={place.placeTitle}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />

                {/* Navigation Arrows (shown on hover) */}
                {hoveredCard === index && (
                  <>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handlePrevImage(index);
                      }}
                      className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md transition-all duration-200"
                    >
                      <FiArrowLeft className="text-gray-800" />
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleNextImage(index);
                      }}
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md transition-all duration-200"
                    >
                      <FiArrowRight className="text-gray-800" />
                    </button>
                  </>
                )}

                {/* Rating Badge */}
                <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 rounded-full flex items-center shadow-sm">
                  <FiStar className="text-yellow-500 mr-1" />
                  <span className="font-medium text-gray-800">
                    {place.rating}
                  </span>
                </div>

                {/* Price Tag */}
                <div className="absolute bottom-4 right-4 bg-gray-800 text-white px-3 py-1 rounded-lg font-semibold shadow-lg">
                  {place.price}
                </div>
              </div>

              {/* Property Details */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-gray-900">
                    {place.placeTitle}
                  </h3>
                </div>

                <div className="flex items-center text-gray-600 mb-4">
                  <FiMapPin className="mr-2 text-primary" />
                  <span>{place.location}</span>
                </div>

                {/* Features Icons */}
                <div className="flex items-center space-x-4 mb-4 text-gray-600">
                  <div className="flex items-center">
                    <FiUsers className="mr-1" />
                    <span>{place.numberOfGuest} guests</span>
                  </div>
                  <div className="flex items-center">
                    <FiHome className="mr-1" />
                    <span>{place.numberOfBedroom} beds</span>
                  </div>
                  <div className="flex items-center">
                    <FiLayers className="mr-1" />
                    <span>{place.numberOfWashroom} baths</span>
                  </div>
                </div>

                {/* Features Tags */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {place.features.map((feature, i) => (
                    <span
                      key={i}
                      className="bg-gray-100 text-gray-800 text-xs px-3 py-1 rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* View Button */}
                <button className="mt-6 w-full bg-primary hover:bg-primary text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300">
                  View Details
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllVillas;
