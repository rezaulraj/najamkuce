import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiArrowLeft,
  FiArrowRight,
  FiX,
  FiStar,
  FiMapPin,
  FiUsers,
  FiHome,
  FiLayers,
  FiClock,
  FiWifi,
  FiDroplet,
  FiWind,
  FiAnchor,
  FiCoffee,
  FiTv,
  FiUmbrella,
  FiSun,
  FiCalendar,
  FiHeart,
  FiChevronRight,
} from "react-icons/fi";
import { useParams, useNavigate } from "react-router-dom";
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
// import { useParams } from "react-router-dom";
const VillasDetails = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [relatedVillas, setRelatedVillas] = useState([]);
  const villasData = {
    villas: [
      {
        title: "Dubrovnik Seaside Villa",
        location: "Dubrovnik, Croatia",
        guests: 6,
        bedrooms: 3,
        bathrooms: 2,
        size: "350 m²",
        seaDistance: "150 m",
        yearBuilt: 2020,
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
        pool: {
          type: "Private infinity pool",
          dimensions: "8.0 x 4.0 m",
        },
        amenities: [
          "Private Pool",
          "Sea View",
          "Beach Access",
          "Free WiFi",
          "Air Conditioning",
          "Parking",
        ],
        description:
          "Perched above the Adriatic with breathtaking views of Dubrovnik's historic walls, this luxury villa combines modern comfort with timeless elegance. The infinity pool appears to merge with the sea, while the spacious terraces offer perfect vantage points to enjoy Dubrovnik's famous sunsets. Just minutes from the Old Town, yet offering complete privacy.",
        highlights: [
          "Panoramic views of Dubrovnik's city walls and Lokrum Island",
          "Three levels of outdoor living spaces",
          "Infinity pool with submerged seating area",
          "Walking distance to Banje Beach",
          "Smart home system controlling lighting and climate",
        ],
        rooms: [
          {
            name: "Master Suite",
            bed: "1 King bed",
            features: ["Walk-in closet", "Sea-view balcony", "Marble bathroom"],
          },
          {
            name: "Guest Room 1",
            bed: "1 Queen bed",
          },
          {
            name: "Guest Room 2",
            bed: "2 Single beds",
          },
        ],
        checkInOut: {
          checkIn: "15:00",
          checkOut: "10:00",
        },
        policies: {
          pets: "not allowed",
          smoking: "outdoor only",
          largeGatherings: "not allowed",
          securityDeposit: "€600 (refundable)",
        },
        distances: {
          airport: "22.0 km",
          sea: "150.0 m",
          supermarket: "800.0 m",
          cityCenter: "1.5 km",
          beach: "200.0 m",
          pharmacy: "1.2 km",
          restaurant: "300.0 m",
          bar: "300.0 m",
        },
      },
      {
        title: "Hvar Island Retreat",
        location: "Hvar, Croatia",
        guests: 8,
        bedrooms: 4,
        bathrooms: 3,
        size: "450 m²",
        seaDistance: "100 m",
        yearBuilt: 2021,
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
        pool: {
          type: "Infinity pool with jacuzzi",
          dimensions: "10.0 x 5.0 m",
        },
        amenities: [
          "Infinity Pool",
          "Sunset Views",
          "Garden",
          "BBQ Area",
          "Smart TV",
          "Dishwasher",
        ],
        description:
          "This contemporary villa on Hvar Island offers front-row seats to Croatia's most spectacular sunsets. Designed by a renowned architect, the property features clean lines, natural materials, and seamless indoor-outdoor living. The infinity pool with built-in jacuzzi overlooks the Pakleni Islands, while the lavender-scented gardens provide Mediterranean charm.",
        highlights: [
          "Uninterrupted sea views from all main rooms",
          "Rooftop cocktail bar with 360° panorama",
          "Private path to secluded beach cove",
          "Outdoor cinema with retractable screen",
          "Smart home automation system",
        ],
        rooms: [
          {
            name: "Sunset Suite",
            bed: "1 King bed",
          },
          {
            name: "Garden Room",
            bed: "1 Queen bed",
          },
          {
            name: "Guest Room 1",
            bed: "2 Single beds",
          },
          {
            name: "Guest Room 2",
            bed: "2 Single beds",
          },
        ],
        checkInOut: {
          checkIn: "16:00",
          checkOut: "11:00",
        },
        policies: {
          pets: "on request",
          smoking: "outdoor only",
          largeGatherings: "approved events only",
          securityDeposit: "€800 (refundable)",
        },
        distances: {
          airport: "15.0 km",
          sea: "100.0 m",
          supermarket: "1.5 km",
          cityCenter: "2.0 km",
          beach: "Private access",
          pharmacy: "2.5 km",
          restaurant: "400.0 m",
          bar: "400.0 m",
        },
      },
      {
        title: "Split Luxury Penthouse",
        location: "Split, Croatia",
        guests: 4,
        bedrooms: 2,
        bathrooms: 2,
        size: "280 m²",
        seaDistance: "50 m",
        yearBuilt: 2022,
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
        pool: {
          type: "Rooftop plunge pool",
          dimensions: "6.0 x 3.0 m",
        },
        amenities: [
          "Rooftop Terrace",
          "City & Sea Views",
          "Modern Design",
          "Walk to Beach",
          "Elevator",
          "Coffee Machine",
        ],
        description:
          "Occupying the top floors of a meticulously restored palace in Split's historic center, this penthouse offers luxury living amidst ancient Roman ruins. The rooftop terrace features a plunge pool with panoramic views of Diocletian's Palace and the Adriatic, while the interior blends contemporary design with preserved heritage elements.",
        highlights: [
          "Private elevator accessing all floors",
          "Original Roman walls incorporated into design",
          "Walkable to all Split attractions",
          "Professional espresso machine with local beans",
          "Soundproofed luxury in the city center",
        ],
        rooms: [
          {
            name: "Master Suite",
            bed: "1 King bed",
          },
          {
            name: "Guest Room",
            bed: "1 Queen bed",
          },
        ],
        checkInOut: {
          checkIn: "14:00",
          checkOut: "10:00",
        },
        policies: {
          pets: "not allowed",
          smoking: "not allowed",
          largeGatherings: "not allowed",
          securityDeposit: "€500 (refundable)",
        },
        distances: {
          airport: "10.0 km",
          sea: "50.0 m",
          supermarket: "300.0 m",
          cityCenter: "In historic center",
          beach: "150.0 m",
          pharmacy: "200.0 m",
          restaurant: "100.0 m",
          bar: "50.0 m",
        },
      },
      {
        title: "Zadar Coastal Villa",
        location: "Zadar, Croatia",
        guests: 10,
        bedrooms: 5,
        bathrooms: 4,
        size: "550 m²",
        seaDistance: "Private beach",
        yearBuilt: 2019,
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
        pool: {
          type: "Lagoon-style pool",
          dimensions: "12.0 x 6.0 m",
        },
        amenities: [
          "Private Beach",
          "Hot Tub",
          "Boat Dock",
          "Chef's Kitchen",
          "Wine Cellar",
          "Game Room",
        ],
        description:
          "This spectacular waterfront estate near Zadar offers 100 meters of private coastline with a secluded beach. The lagoon-style pool appears to flow into the sea, while the property's design takes inspiration from traditional Dalmatian fishing villages. The villa includes a private dock suitable for yachts up to 18 meters.",
        highlights: [
          "Direct access to private pebble beach",
          "Boat dock with water sports equipment",
          "Outdoor kitchen with wood-fired pizza oven",
          "Underground wine cellar with local vintages",
          "Home theater with Dolby Atmos",
        ],
        rooms: [
          {
            name: "Master Wing",
            bed: "1 Emperor bed",
          },
          {
            name: "Guest Suite 1",
            bed: "1 King bed",
          },
          {
            name: "Guest Suite 2",
            bed: "1 Queen bed",
          },
          {
            name: "Bunk Room",
            bed: "4 Single beds",
          },
          {
            name: "Staff Room",
            bed: "1 Double bed",
          },
        ],
        checkInOut: {
          checkIn: "15:00",
          checkOut: "11:00",
        },
        policies: {
          pets: "allowed",
          smoking: "outdoor only",
          largeGatherings: "approved events only",
          securityDeposit: "€1200 (refundable)",
        },
        distances: {
          airport: "12.0 km",
          sea: "Private beach",
          supermarket: "2.0 km",
          cityCenter: "8.0 km",
          beach: "Private beach",
          pharmacy: "2.5 km",
          restaurant: "1.5 km",
          bar: "1.5 km",
        },
      },
      {
        title: "Rovinj Romantic Cottage",
        location: "Rovinj, Croatia",
        guests: 2,
        bedrooms: 1,
        bathrooms: 1,
        size: "120 m²",
        seaDistance: "300 m",
        yearBuilt: 2018,
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
        pool: {
          type: "Private plunge pool",
          dimensions: "4.0 x 3.0 m",
        },
        amenities: [
          "Secluded Location",
          "Stone Architecture",
          "Fireplace",
          "Breakfast Included",
          "Bicycle Rental",
          "Pet Friendly",
        ],
        description:
          "Nestled in a quiet olive grove just outside romantic Rovinj, this stone cottage offers intimate luxury for couples. The property features traditional Istrian architecture with modern comforts, including a private plunge pool surrounded by lavender bushes. Each morning, a basket of fresh local produce is delivered to your door.",
        highlights: [
          "Private outdoor shower under olive trees",
          "Wood-burning fireplace for cool evenings",
          "Complimentary bicycles for exploring",
          "Daily breakfast with local specialties",
          "Pet-friendly with dog bed and bowls provided",
        ],
        rooms: [
          {
            name: "Master Suite",
            bed: "1 King bed",
          },
        ],
        checkInOut: {
          checkIn: "16:00",
          checkOut: "11:00",
        },
        policies: {
          pets: "allowed",
          smoking: "outdoor only",
          largeGatherings: "not allowed",
          securityDeposit: "€300 (refundable)",
        },
        distances: {
          airport: "35.0 km",
          sea: "300.0 m",
          supermarket: "1.5 km",
          cityCenter: "2.0 km",
          beach: "350.0 m",
          pharmacy: "2.0 km",
          restaurant: "400.0 m",
          bar: "400.0 m",
        },
      },
      {
        title: "Makarska Beachfront Villa",
        location: "Makarska, Croatia",
        guests: 12,
        bedrooms: 6,
        bathrooms: 5,
        size: "650 m²",
        seaDistance: "Direct access",
        yearBuilt: 2023,
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
        pool: {
          type: "Two-level infinity pool",
          dimensions: "15.0 x 6.0 m",
        },
        amenities: [
          "Direct Beach Access",
          "Two Pools",
          "Home Theater",
          "Fitness Room",
          "Chef Available",
          "Daily Cleaning",
        ],
        description:
          "This spectacular modern villa redefines beachfront luxury on Makarska's famous riviera. With direct access to a private stretch of pebble beach and two infinity pools cascading toward the sea, the property offers unparalleled views of Biokovo mountain and the Adriatic. The interior features museum-quality contemporary art and designer furniture throughout.",
        highlights: [
          "Private beach area with sun loungers and cabanas",
          "Upper pool with swim-up bar and underwater music",
          "Lower pool with children's section",
          "Professional home theater with 120 screen",
          "Personal trainer and massage therapist available",
        ],
        rooms: [
          {
            name: "Master Retreat",
            bed: "1 Emperor bed",
          },
          {
            name: "Guest Suite 1",
            bed: "1 King bed",
          },
          {
            name: "Guest Suite 2",
            bed: "1 Queen bed",
          },
          {
            name: "Family Room",
            bed: "2 Queen beds",
          },
          {
            name: "Bunk Room",
            bed: "4 Single beds",
          },
          {
            name: "Staff Room",
            bed: "1 Double bed",
          },
        ],
        checkInOut: {
          checkIn: "14:00",
          checkOut: "10:00",
        },
        policies: {
          pets: "on request",
          smoking: "designated areas only",
          largeGatherings: "approved events only",
          securityDeposit: "€1500 (refundable)",
        },
        distances: {
          airport: "60.0 km",
          sea: "Direct access",
          supermarket: "1.0 km",
          cityCenter: "500.0 m",
          beach: "Private beach",
          pharmacy: "800.0 m",
          restaurant: "200.0 m",
          bar: "200.0 m",
        },
      },
      {
        title: "Pula Historic Residence",
        location: "Pula, Croatia",
        guests: 5,
        bedrooms: 3,
        bathrooms: 2,
        size: "320 m²",
        seaDistance: "400 m",
        yearBuilt: 2016,
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
        pool: {
          type: "Roman-style pool",
          dimensions: "7.0 x 4.0 m",
        },
        amenities: [
          "Roman Architecture",
          "Central Location",
          "Antique Furnishings",
          "Courtyard",
          "Walk to Amphitheater",
          "Library",
        ],
        description:
          "This meticulously restored 19th-century villa near Pula's Roman amphitheater blends imperial grandeur with modern luxury. The property features original stone walls, antique furnishings, and a stunning courtyard with a Roman-inspired pool. The library houses rare books about Istrian history, while modern comforts are seamlessly integrated throughout.",
        highlights: [
          "Walking distance to Pula Arena (Roman amphitheater)",
          "Original frescoes and stone arches preserved",
          "Courtyard with citrus trees and fountain",
          "Wine cellar featuring Istrian Malvasia",
          "Underground garage with charging station",
        ],
        rooms: [
          {
            name: "Imperial Suite",
            bed: "1 King bed",
          },
          {
            name: "Garden Room",
            bed: "1 Queen bed",
          },
          {
            name: "Tower Room",
            bed: "1 Double bed",
          },
        ],
        checkInOut: {
          checkIn: "15:00",
          checkOut: "11:00",
        },
        policies: {
          pets: "allowed",
          smoking: "not allowed",
          largeGatherings: "not allowed",
          securityDeposit: "€700 (refundable)",
        },
        distances: {
          airport: "8.0 km",
          sea: "400.0 m",
          supermarket: "500.0 m",
          cityCenter: "300.0 m",
          beach: "500.0 m",
          pharmacy: "400.0 m",
          restaurant: "200.0 m",
          bar: "200.0 m",
        },
      },
      {
        title: "Bol Cliffside Villa",
        location: "Bol, Brač Island",
        guests: 6,
        bedrooms: 3,
        bathrooms: 3,
        size: "380 m²",
        seaDistance: "Cliffside",
        yearBuilt: 2021,
        images: [
          place8i1,
          place8i2,
          place8i3,
          place8i4,
          place8i5,
          place8i6,
          place8i7,
        ],
        pool: {
          type: "Cliff-edge infinity pool",
          dimensions: "10.0 x 4.0 m",
        },
        amenities: [
          "Cliffside Location",
          "Zlatni Rat View",
          "Infinity Pool",
          "Outdoor Shower",
          "Solar Heated",
          "Yoga Deck",
        ],
        description:
          "Dramatically positioned on the cliffs above Zlatni Rat beach, this architectural masterpiece offers heart-stopping views of Croatia's most famous beach. The infinity pool appears to spill over the cliff edge, while floor-to-ceiling glass walls ensure the stunning panorama is visible from every room. Designed by an award-winning architect to harmonize with the rocky landscape.",
        highlights: [
          "Unparalleled views of Zlatni Rat's changing shape",
          "Morning yoga platform over the sea",
          "Private funicular to beach access",
          "Solar-heated pool with massage jets",
          "Outdoor rain shower with sea view",
        ],
        rooms: [
          {
            name: "Horizon Suite",
            bed: "1 King bed",
            features: [
              "Private balcony",
              "Glass floor section",
              "Ocean-view bathtub",
            ],
          },
          {
            name: "Sunset Room",
            bed: "1 Queen bed",
          },
          {
            name: "Cliff Room",
            bed: "2 Single beds",
          },
        ],
        checkInOut: {
          checkIn: "16:00",
          checkOut: "10:00",
        },
        policies: {
          pets: "allowed",
          smoking: "not allowed",
          largeGatherings: "not allowed",
          securityDeposit: "€900 (refundable)",
        },
        distances: {
          airport: "15.0 km",
          sea: "Cliffside location",
          supermarket: "1.2 km",
          cityCenter: "500.0 m",
          beach: "Private path 300m",
          pharmacy: "800.0 m",
          restaurant: "200.0 m",
          bar: "200.0 m",
        },
        reviews: {
          rating: 4.9,
          count: 12,
          comments: [
            {
              author: "Elena Vasquez",
              date: "05/09/2024",
              text: "The views took our breath away every morning! The villa's design is both dramatic and comfortable. The private funicular to the beach made accessing Zlatni Rat incredibly easy.",
              scores: {
                accuracy: 5,
                cleanliness: 5,
                location: 5,
                comfort: 5,
                facilities: 5,
                value: 4,
              },
            },
          ],
        },
      },
      {
        title: "Korčula Stone House",
        location: "Korčula Island",
        guests: 4,
        bedrooms: 2,
        bathrooms: 2,
        size: "250 m²",
        seaDistance: "200 m",
        yearBuilt: 2017,
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
        pool: {
          type: "Stone-walled pool",
          dimensions: "7.0 x 3.5 m",
        },
        amenities: [
          "Old Town Location",
          "Terrace with Sea View",
          "Historical Property",
          "Wine Tasting",
          "Marco Polo House Nearby",
          "Kayak Rental",
        ],
        description:
          "This meticulously restored 15th-century stone house sits within Korčula's medieval walls, offering an authentic Dalmatian experience with modern luxury. The property features traditional stone architecture, wooden beam ceilings, and a secluded courtyard with a stone-walled pool. Just steps from Marco Polo's alleged birthplace and the sparkling Adriatic.",
        highlights: [
          "Within Korčula's UNESCO-listed Old Town walls",
          "Private rooftop terrace with 360° island views",
          "Complimentary wine tasting of local Pošip and Grk varieties",
          "Two kayaks provided for exploring nearby coves",
          "Original Gothic-Renaissance architectural details",
        ],
        rooms: [
          {
            name: "Marco Polo Suite",
            bed: "1 King bed",
            features: [
              "Four-poster bed",
              "Antique stone fireplace",
              "Old Town views",
            ],
          },
          {
            name: "Sea Breeze Room",
            bed: "1 Queen bed",
          },
        ],
        checkInOut: {
          checkIn: "15:00",
          checkOut: "10:00",
        },
        policies: {
          pets: "not allowed",
          smoking: "not allowed",
          largeGatherings: "not allowed",
          securityDeposit: "€500 (refundable)",
        },
        distances: {
          airport: "20.0 km",
          sea: "200.0 m",
          supermarket: "300.0 m",
          cityCenter: "Within Old Town",
          beach: "250.0 m",
          pharmacy: "400.0 m",
          restaurant: "100.0 m",
          bar: "50.0 m",
        },
      },
      {
        title: "Vis Island Hideaway",
        location: "Vis Island",
        guests: 4,
        bedrooms: 2,
        bathrooms: 2,
        size: "280 m²",
        seaDistance: "Private cove",
        yearBuilt: 2020,
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
        pool: {
          type: "Natural rock pool",
          dimensions: "8.0 x 4.0 m",
        },
        amenities: [
          "Secluded Cove",
          "Private Boat Access",
          "Organic Garden",
          "Solar Powered",
          "Snorkeling Gear",
          "Local Wine Provided",
        ],
        description:
          "Hidden away on Croatia's most remote island, this eco-luxury retreat offers complete privacy in a protected cove. The villa blends into the landscape with stone walls and green roofs, while offering cutting-edge sustainable technology. Your stay includes a private boat for exploring Vis' secret beaches and military tunnels.",
        highlights: [
          "Direct access to private pebble beach",
          "Fully solar-powered with zero carbon footprint",
          "Organic vegetable garden for guest use",
          "Complimentary bottle of local Viški Plavac wine",
          "Military history tour included (former Yugoslav army base)",
        ],
        rooms: [
          {
            name: "Captain's Quarters",
            bed: "1 King bed",
            features: [
              "Sea-view balcony",
              "Outdoor shower",
              "Binoculars for dolphin watching",
            ],
          },
          {
            name: "Garden Room",
            bed: "1 Queen bed",
          },
        ],
        checkInOut: {
          checkIn: "14:00",
          checkOut: "11:00",
        },
        policies: {
          pets: "allowed",
          smoking: "outdoor only",
          largeGatherings: "not allowed",
          securityDeposit: "€600 (refundable)",
        },
        distances: {
          airport: "5.0 km",
          sea: "Private cove",
          supermarket: "2.5 km",
          cityCenter: "3.0 km",
          beach: "Private beach",
          pharmacy: "3.5 km",
          restaurant: "1.5 km",
          bar: "1.5 km",
        },
        reviews: {
          rating: 4.9,
          count: 8,
          comments: [
            {
              author: "Thomas Bergman",
              date: "22/08/2024",
              text: "Absolute paradise! The privacy and natural beauty were unmatched. We loved taking the boat to Stiniva beach each morning. The villa's eco-features were impressive without sacrificing comfort.",
              scores: {
                accuracy: 5,
                cleanliness: 5,
                location: 5,
                comfort: 5,
                facilities: 4,
                value: 5,
              },
            },
          ],
        },
      },
    ],
  };
  const currentVilla = villasData.villas.find(
    (villa) => villa.title.toLowerCase().replace(/\s+/g, "-") === slug
  );

  // Set related villas (excluding current villa)
  useEffect(() => {
    if (currentVilla) {
      const related = villasData.villas
        .filter((villa) => villa.title !== currentVilla.title)
        .slice(0, 3);
      setRelatedVillas(related);
    }
  }, [currentVilla]);

  if (!currentVilla) {
    return <div className="py-16 text-center">Villa not found</div>;
  }

  const openImagePopup = (index) => {
    setSelectedImageIndex(index);
    setCurrentImageIndex(index);
    document.body.style.overflow = "hidden";
  };

  const closeImagePopup = () => {
    setSelectedImageIndex(null);
    document.body.style.overflow = "auto";
  };

  const navigateImage = (direction) => {
    if (direction === "prev") {
      setCurrentImageIndex((prev) =>
        prev === 0 ? currentVilla.images.length - 1 : prev - 1
      );
    } else {
      setCurrentImageIndex((prev) =>
        prev === currentVilla.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Escape") {
      closeImagePopup();
    } else if (e.key === "ArrowLeft") {
      navigateImage("prev");
    } else if (e.key === "ArrowRight") {
      navigateImage("next");
    }
  };

  useEffect(() => {
    if (selectedImageIndex !== null) {
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        window.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [selectedImageIndex]);

  // Icon mapping for amenities
  const amenityIcons = {
    "Private Pool": <FiDroplet className="text-primary" />,
    "Sea View": <FiSun className="text-primary" />,
    "Beach Access": <FiAnchor className="text-primary" />,
    "Free WiFi": <FiWifi className="text-primary" />,
    "Air Conditioning": <FiWind className="text-primary" />,
    Parking: <FiHome className="text-primary" />,
    "Infinity Pool": <FiDroplet className="text-primary" />,
    "Sunset Views": <FiSun className="text-primary" />,
    Garden: <FiHome className="text-primary" />,
    "BBQ Area": <FiHome className="text-primary" />,
    "Smart TV": <FiTv className="text-primary" />,
    Dishwasher: <FiCoffee className="text-primary" />,
    "Rooftop Terrace": <FiSun className="text-primary" />,
    "City & Sea Views": <FiSun className="text-primary" />,
    "Modern Design": <FiHome className="text-primary" />,
    "Walk to Beach": <FiAnchor className="text-primary" />,
    Elevator: <FiHome className="text-primary" />,
    "Coffee Machine": <FiCoffee className="text-primary" />,
    "Private Beach": <FiAnchor className="text-primary" />,
    "Hot Tub": <FiDroplet className="text-primary" />,
    "Boat Dock": <FiAnchor className="text-primary" />,
    "Chef's Kitchen": <FiCoffee className="text-primary" />,
    "Wine Cellar": <FiCoffee className="text-primary" />,
    "Game Room": <FiTv className="text-primary" />,
    "Secluded Location": <FiHome className="text-primary" />,
    "Stone Architecture": <FiHome className="text-primary" />,
    Fireplace: <FiSun className="text-primary" />,
    "Breakfast Included": <FiCoffee className="text-primary" />,
    "Bicycle Rental": <FiHome className="text-primary" />,
    "Pet Friendly": <FiHome className="text-primary" />,
    "Direct Beach Access": <FiAnchor className="text-primary" />,
    "Two Pools": <FiDroplet className="text-primary" />,
    "Home Theater": <FiTv className="text-primary" />,
    "Fitness Room": <FiHome className="text-primary" />,
    "Chef Available": <FiCoffee className="text-primary" />,
    "Daily Cleaning": <FiHome className="text-primary" />,
    "Roman Architecture": <FiHome className="text-primary" />,
    "Central Location": <FiMapPin className="text-primary" />,
    "Antique Furnishings": <FiHome className="text-primary" />,
    Courtyard: <FiHome className="text-primary" />,
    "Walk to Amphitheater": <FiHome className="text-primary" />,
    Library: <FiHome className="text-primary" />,
    "Cliffside Location": <FiHome className="text-primary" />,
    "Zlatni Rat View": <FiSun className="text-primary" />,
    "Outdoor Shower": <FiDroplet className="text-primary" />,
    "Solar Heated": <FiSun className="text-primary" />,
    "Yoga Deck": <FiSun className="text-primary" />,
    "Old Town Location": <FiMapPin className="text-primary" />,
    "Terrace with Sea View": <FiSun className="text-primary" />,
    "Historical Property": <FiHome className="text-primary" />,
    "Wine Tasting": <FiCoffee className="text-primary" />,
    "Marco Polo House Nearby": <FiHome className="text-primary" />,
    "Kayak Rental": <FiAnchor className="text-primary" />,
    "Secluded Cove": <FiAnchor className="text-primary" />,
    "Private Boat Access": <FiAnchor className="text-primary" />,
    "Organic Garden": <FiHome className="text-primary" />,
    "Solar Powered": <FiSun className="text-primary" />,
    "Snorkeling Gear": <FiAnchor className="text-primary" />,
    "Local Wine Provided": <FiCoffee className="text-primary" />,
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28">
        {/* Breadcrumb */}
        <div className="flex items-center text-sm text-gray-500 mb-6">
          <a className="hover:text-primary cursor-pointer" href="/">
            Home
          </a>
          <FiChevronRight className="mx-2" />
          <a className="hover:text-primary cursor-pointer" href="/villas">
            Villas
          </a>
          <FiChevronRight className="mx-2" />
          <span className="text-gray-700 font-medium">
            {currentVilla.title}
          </span>
        </div>

        {/* Villa Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            {currentVilla.title}
          </h1>
          <div className="flex items-center text-gray-600">
            <FiMapPin className="mr-2 text-primary" />
            <span>{currentVilla.location}</span>
            <span className="mx-2">•</span>
            <FiStar className="text-yellow-500 mr-1" />
            <span>4.9</span>
            <span className="mx-2">•</span>
            <span className="text-primary font-medium">Superhost</span>
          </div>
        </div>

        {/* Image Gallery */}
        <div className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-3 rounded-xl overflow-hidden">
            {/* Main Image */}
            <div
              className="md:col-span-2 row-span-2 h-96 cursor-pointer relative group"
              onClick={() => openImagePopup(0)}
            >
              <motion.img
                src={currentVilla.images[0]}
                alt={currentVilla.title}
                className="w-full h-full object-cover rounded-tl-xl rounded-bl-xl group-hover:opacity-90 transition-opacity duration-300"
                whileHover={{ scale: 1.01 }}
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-all duration-300 rounded-tl-xl rounded-bl-xl"></div>
            </div>

            {/* Secondary Images */}
            {currentVilla.images.slice(1, 5).map((image, index) => (
              <div
                key={index}
                className="h-48 cursor-pointer relative group"
                onClick={() => openImagePopup(index + 1)}
              >
                <motion.img
                  src={image}
                  alt={currentVilla.title}
                  className="w-full h-full object-cover group-hover:opacity-90 transition-opacity duration-300"
                  whileHover={{ scale: 1.01 }}
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-all duration-300"></div>
                {index === 3 && currentVilla.images.length > 5 && (
                  <div
                    className="absolute inset-0 bg-black/40 flex items-center justify-center text-white font-bold text-xl hover:bg-black/50 transition-all duration-300"
                    onClick={() => openImagePopup(4)}
                  >
                    +{currentVilla.images.length - 5} more
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Villa Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Left Column */}
          <div className="lg:col-span-2">
            {/* Property Highlights */}
            <div className="bg-white rounded-xl shadow-sm p-6 mb-8 border border-gray-100">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="flex items-center">
                  <div className="bg-primary/10 p-3 rounded-full mr-3">
                    <FiUsers className="text-primary text-lg" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Guests</p>
                    <p className="font-medium">{currentVilla.guests}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="bg-primary/10 p-3 rounded-full mr-3">
                    <FiHome className="text-primary text-lg" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Bedrooms</p>
                    <p className="font-medium">{currentVilla.bedrooms}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="bg-primary/10 p-3 rounded-full mr-3">
                    <FiDroplet className="text-primary text-lg" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Bathrooms</p>
                    <p className="font-medium">{currentVilla.bathrooms}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="bg-primary/10 p-3 rounded-full mr-3">
                    <FiLayers className="text-primary text-lg" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Size</p>
                    <p className="font-medium">{currentVilla.size}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="bg-white rounded-xl shadow-sm p-6 mb-8 border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                About this villa
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {currentVilla.description}
              </p>

              <div className="border-t pt-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Highlights
                </h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {currentVilla.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start">
                      <div className="bg-primary/10 p-1 rounded-full mt-0.5 mr-3">
                        <FiStar className="text-primary text-sm" />
                      </div>
                      <span className="text-gray-600">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Amenities */}
            <div className="bg-white rounded-xl shadow-sm p-6 mb-8 border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Amenities
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {currentVilla.amenities.map((amenity, index) => (
                  <div key={index} className="flex items-center">
                    <div className="bg-primary/10 p-2 rounded-lg mr-3">
                      {amenityIcons[amenity] || (
                        <FiHome className="text-primary" />
                      )}
                    </div>
                    <span className="text-gray-600">{amenity}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Rooms */}
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Rooms</h2>
              <div className="space-y-6">
                {currentVilla.rooms.map((room, index) => (
                  <div
                    key={index}
                    className="border-b border-gray-100 pb-6 last:border-b-0 last:pb-0"
                  >
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {room.name}
                    </h3>
                    <div className="flex items-center text-gray-600 mb-2">
                      <div className="bg-primary/10 p-1.5 rounded-full mr-3">
                        <FiHome className="text-primary text-sm" />
                      </div>
                      <span>{room.bed}</span>
                    </div>
                    {room.features && (
                      <ul className="mt-3 space-y-2">
                        {room.features.map((feature, i) => (
                          <li
                            key={i}
                            className="flex items-start text-gray-600"
                          >
                            <div className="bg-primary/10 p-1 rounded-full mt-0.5 mr-3">
                              <FiStar className="text-primary text-xs" />
                            </div>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Booking Card */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-6 border border-gray-100">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <span className="text-2xl font-bold text-gray-900">$350</span>
                  <span className="text-gray-600"> / night</span>
                </div>
                <div className="flex items-center bg-primary/10 px-2 py-1 rounded-full">
                  <FiStar className="text-yellow-500 mr-1" />
                  <span className="text-sm font-medium">4.9 (24 reviews)</span>
                </div>
              </div>

              {/* Check-in/out */}
              <div className="border border-gray-200 rounded-lg p-4 mb-6 bg-gray-50">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Check-in
                    </label>
                    <div className="flex items-center text-gray-600">
                      <div className="bg-primary/10 p-1.5 rounded-full mr-2">
                        <FiCalendar className="text-primary text-sm" />
                      </div>
                      <span>{currentVilla.checkInOut.checkIn}</span>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Check-out
                    </label>
                    <div className="flex items-center text-gray-600">
                      <div className="bg-primary/10 p-1.5 rounded-full mr-2">
                        <FiCalendar className="text-primary text-sm" />
                      </div>
                      <span>{currentVilla.checkInOut.checkOut}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Booking Button */}
              <button className="w-full bg-gradient-to-r from-primary to-primary-dark hover:from-primary-dark hover:to-primary text-white font-medium py-3 px-4 rounded-lg transition-all duration-300 flex items-center justify-center shadow-md hover:shadow-lg mb-6">
                <FiHeart className="mr-2" />
                Book Now
              </button>

              {/* Policies */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Policies
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <div className="bg-primary/10 p-1 rounded-full mt-0.5 mr-3">
                      <FiStar className="text-primary text-xs" />
                    </div>
                    <span>Pets: {currentVilla.policies.pets}</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-primary/10 p-1 rounded-full mt-0.5 mr-3">
                      <FiStar className="text-primary text-xs" />
                    </div>
                    <span>Smoking: {currentVilla.policies.smoking}</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-primary/10 p-1 rounded-full mt-0.5 mr-3">
                      <FiStar className="text-primary text-xs" />
                    </div>
                    <span>Events: {currentVilla.policies.largeGatherings}</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-primary/10 p-1 rounded-full mt-0.5 mr-3">
                      <FiStar className="text-primary text-xs" />
                    </div>
                    <span>
                      Security deposit: {currentVilla.policies.securityDeposit}
                    </span>
                  </li>
                </ul>
              </div>

              {/* Distances */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Nearby Locations
                </h3>
                <div className="grid grid-cols-1 gap-3 text-gray-600">
                  <div className="flex items-center">
                    <div className="bg-primary/10 p-1.5 rounded-full mr-3">
                      <FiMapPin className="text-primary text-sm" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Airport</p>
                      <p className="font-medium">
                        {currentVilla.distances.airport}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-primary/10 p-1.5 rounded-full mr-3">
                      <FiAnchor className="text-primary text-sm" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Sea</p>
                      <p className="font-medium">
                        {currentVilla.distances.sea}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-primary/10 p-1.5 rounded-full mr-3">
                      <FiHome className="text-primary text-sm" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Supermarket</p>
                      <p className="font-medium">
                        {currentVilla.distances.supermarket}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-primary/10 p-1.5 rounded-full mr-3">
                      <FiMapPin className="text-primary text-sm" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">City center</p>
                      <p className="font-medium">
                        {currentVilla.distances.cityCenter}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center text-sm text-gray-500 mt-4">
                <p>
                  Need help?{" "}
                  <span className="text-primary cursor-pointer">
                    Contact us
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Related Villas */}
        {relatedVillas.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              You may also like
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedVillas.map((villa, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 cursor-pointer hover:shadow-md transition-shadow duration-300"
                  whileHover={{ y: -5 }}
                  onClick={() =>
                    navigate(
                      `/villas/${villa.title
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`
                    )
                  }
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={villa.images[0]}
                      alt={villa.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-bold text-gray-900">{villa.title}</h3>
                      <div className="flex items-center">
                        <FiStar className="text-yellow-500 mr-1" />
                        <span>4.9</span>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm mb-3">
                      {villa.location}
                    </p>
                    <div className="flex items-center text-gray-500 text-sm">
                      <FiUsers className="mr-1" />
                      <span className="mr-3">{villa.guests} guests</span>
                      <FiHome className="mr-1" />
                      <span>{villa.bedrooms} bedrooms</span>
                    </div>
                    <div className="mt-3 flex justify-between items-center">
                      <span className="text-gray-900 font-medium">
                        From ${Math.floor(Math.random() * 200) + 200}/night
                      </span>
                      <button className="text-primary hover:text-primary-dark">
                        <FiHeart />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>
      {/* Image Popup Modal */}
      <AnimatePresence>
        {selectedImageIndex !== null && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Close Button */}
            <button
              className="absolute top-6 right-6 text-white hover:text-gray-300 transition-colors z-10"
              onClick={closeImagePopup}
            >
              <FiX size={28} />
            </button>

            {/* Main Image Container */}
            <div className="relative w-full max-w-6xl h-full max-h-[90vh] flex items-center justify-center p-4">
              {/* Navigation Arrows */}
              <button
                className="absolute left-6 md:left-12 bg-white/20 hover:bg-white/30 backdrop-blur-sm p-3 rounded-full text-white z-10 transition-all"
                onClick={() => navigateImage("prev")}
              >
                <FiArrowLeft size={24} />
              </button>

              <button
                className="absolute right-6 md:right-12 bg-white/20 hover:bg-white/30 backdrop-blur-sm p-3 rounded-full text-white z-10 transition-all"
                onClick={() => navigateImage("next")}
              >
                <FiArrowRight size={24} />
              </button>

              {/* Current Image */}
              <motion.img
                key={currentImageIndex}
                src={currentVilla.images[currentImageIndex]}
                alt={`${currentVilla.title} - Image ${currentImageIndex + 1}`}
                className="max-w-full max-h-full object-contain"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
              />

              {/* Image Counter */}
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-full text-sm">
                {currentImageIndex + 1} / {currentVilla.images.length}
              </div>
            </div>

            {/* Thumbnail Strip */}
            <div className="absolute bottom-4 left-0 right-0 overflow-x-auto py-2 px-4 flex justify-center">
              <div className="flex space-x-2">
                {currentVilla.images.map((image, index) => (
                  <motion.div
                    key={index}
                    className={`w-16 h-16 rounded-md overflow-hidden cursor-pointer border-2 ${
                      currentImageIndex === index
                        ? "border-primary"
                        : "border-transparent"
                    }`}
                    onClick={() => setCurrentImageIndex(index)}
                    whileHover={{ scale: 1.05 }}
                  >
                    <img
                      src={image}
                      alt={`Thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default VillasDetails;
