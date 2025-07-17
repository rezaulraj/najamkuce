import React from "react";
import {
  FaMusic,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaTicketAlt,
  FaCampground,
  FaShip,
  FaBus,
  FaHotel,
  FaSuitcase,
} from "react-icons/fa";
import { GiIsland, GiAncientColumns, GiWaterfall } from "react-icons/gi";
import { MdDirectionsBoat, MdLocalAirport } from "react-icons/md";
import music from "../../assets/place/music.webp?url";
const MusicConcert = () => {
  const musicBlog = {
    country: "Croatia",
    description:
      "Croatia is a top European destination for music festivals, combining world-class events with stunning coastal landscapes, historic cities, and vibrant nightlife.",
    music_festivals: [
      {
        name: "Ultra Europe",
        location: "Split",
        venue: "Park Mladeži",
        dates: "2025-07-11 to 2025-07-13",
        genre: ["EDM", "Techno", "House"],
        headliners: ["Martin Garrix", "Armin van Buuren", "Hardwell"],
        capacity: 100000,
        ticket_price_range: {
          early_bird: 150,
          general: 200,
          VIP: 400,
        },
        highlights: [
          "Massive main stage with pyrotechnics",
          "Official afterparties on Hvar Island",
          "Beachside venue with Adriatic Sea views",
        ],
        website: "https://ultraeurope.com",
        image_url:
          "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      },
      {
        name: "INmusic Festival",
        location: "Zagreb",
        venue: "Lake Jarun",
        dates: "2025-06-23 to 2025-06-25",
        genre: ["Rock", "Indie", "Alternative"],
        headliners: [
          "The Killers",
          "Florence + The Machine",
          "Queens of the Stone Age",
        ],
        capacity: 50000,
        ticket_price_range: {
          early_bird: 80,
          general: 120,
          VIP: 250,
        },
        highlights: [
          "Lakeside camping available",
          "Eco-friendly initiatives",
          "Free city shuttle buses",
        ],
        website: "https://inmusicfestival.com",
        image_url:
          "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      },
      {
        name: "Dimensions Festival",
        location: "Pula",
        venue: "Fort Punta Christo",
        dates: "2025-08-28 to 2025-09-01",
        genre: ["Techno", "House", "Dub"],
        headliners: ["Aphex Twin", "Four Tet", "Nina Kraviz"],
        capacity: 20000,
        ticket_price_range: {
          early_bird: 180,
          general: 220,
          VIP: 350,
        },
        highlights: [
          "Historic 19th-century fort venue",
          "Underground boat parties",
          "Sunrise sets at the Beach Stage",
        ],
        website: "https://dimensionsfestival.com",
        image_url:
          "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      },
    ],
    top_vacation_destinations: [
      {
        name: "Split",
        type: "Coastal City",
        highlights: [
          "Diocletian's Palace (UNESCO)",
          "Marjan Hill viewpoints",
          "Day trips to Brač and Hvar islands",
        ],
        best_time_to_visit: "May to September",
        image_url:
          "https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
        icon: <GiIsland className="text-3xl text-blue-500" />,
      },
      {
        name: "Dubrovnik",
        type: "Historic City",
        highlights: [
          "Old Town Walls (Game of Thrones filming location)",
          "Lokrum Island",
          "Cable car to Mount Srđ",
        ],
        best_time_to_visit: "June to October",
        image_url:
          "https://images.unsplash.com/photo-1527631746610-bca00a040d60?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
        icon: <GiAncientColumns className="text-3xl text-amber-500" />,
      },
      {
        name: "Plitvice Lakes",
        type: "National Park",
        highlights: [
          "16 terraced lakes with waterfalls",
          "Wooden hiking trails",
          "Wildlife spotting (bears, wolves)",
        ],
        best_time_to_visit: "April to October",
        image_url:
          "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
        icon: <GiWaterfall className="text-3xl text-emerald-500" />,
      },
    ],
    travel_tips: {
      transportation: [
        {
          type: "Bus",
          recommended: "FlixBus",
          routes: ["Zagreb-Split", "Split-Dubrovnik"],
          icon: <FaBus className="text-2xl text-blue-600" />,
        },
        {
          type: "Ferry",
          recommended: "Jadrolinija",
          routes: ["Split-Hvar", "Dubrovnik-Mljet"],
          icon: <MdDirectionsBoat className="text-2xl text-blue-400" />,
        },
      ],
      accommodation: [
        {
          type: "Hostel",
          recommended: ["Hostel 60° in Zagreb", "Split Backpackers"],
          avg_price_per_night: 25,
          icon: <FaHotel className="text-2xl text-yellow-600" />,
        },
        {
          type: "Beach Resort",
          recommended: [
            "Amfora Hvar Grand Beach Resort",
            "Hotel Dubrovnik Palace",
          ],
          avg_price_per_night: 150,
          icon: <FaHotel className="text-2xl text-blue-400" />,
        },
      ],
      packing_list: [
        {
          item: "Swimwear",
          icon: <FaSuitcase className="text-xl text-blue-400" />,
        },
        {
          item: "Comfortable shoes for festivals",
          icon: <FaSuitcase className="text-xl text-gray-600" />,
        },
        {
          item: "Sunscreen (SPF 50+)",
          icon: <FaSuitcase className="text-xl text-yellow-400" />,
        },
        {
          item: "RFID wristband (for cashless payments)",
          icon: <FaSuitcase className="text-xl text-purple-500" />,
        },
        {
          item: "Portable charger",
          icon: <FaSuitcase className="text-xl text-red-500" />,
        },
      ],
    },
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="relative h-screen overflow-hidden">
        <img
          src={music}
          alt="Croatian sunset"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Croatia Music Festivals
            </h1>
            <p className="text-xl text-white max-w-2xl mx-auto">
              Where world-class beats meet breathtaking Adriatic landscapes
            </p>
          </div>
        </div>
      </div>

      {/* Introduction */}
      <section className="py-12 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Discover Croatia's Vibrant Music Scene
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {musicBlog.description}
          </p>
        </div>

        {/* Festivals Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center flex items-center justify-center">
            <FaMusic className="mr-2 text-purple-500" />
            Top Music Festivals
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {musicBlog.music_festivals.map((festival, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105"
              >
                <img
                  src={festival.image_url}
                  alt={festival.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-gray-800">
                      {festival.name}
                    </h3>
                    <span className="bg-purple-100 text-primary text-xs px-2 py-1 rounded-full">
                      {festival.capacity.toLocaleString()} capacity
                    </span>
                  </div>
                  <div className="flex items-center text-gray-600 mb-2">
                    <FaMapMarkerAlt className="mr-1" />
                    <span>
                      {festival.location} • {festival.venue}
                    </span>
                  </div>
                  {/* <div className="flex items-center text-gray-600 mb-4">
                    <FaCalendarAlt className="mr-1" />
                    <span>{festival.dates}</span>
                  </div> */}

                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {festival.genre.map((g, i) => (
                        <span
                          key={i}
                          className="bg-gray-100 px-2 py-1 text-xs rounded-full"
                        >
                          {g}
                        </span>
                      ))}
                    </div>
                    <div className="text-sm text-gray-700">
                      <span className="font-semibold">Headliners:</span>{" "}
                      {festival.headliners.join(", ")}
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-800 mb-2">
                      Highlights:
                    </h4>
                    <ul className="space-y-1">
                      {festival.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-purple-500 mr-2">•</span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="border-t pt-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <span className="text-sm text-gray-600">
                          Tickets from:
                        </span>
                        <div className="font-bold text-secondary">
                          €{festival.ticket_price_range.early_bird}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Destinations Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">
            Must-Visit Destinations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {musicBlog.top_vacation_destinations.map((destination, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <img
                  src={destination.image_url}
                  alt={destination.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center mb-2">
                    {destination.icon}
                    <h3 className="text-xl font-bold text-gray-800 ml-2">
                      {destination.name}
                    </h3>
                  </div>
                  <div className="text-sm text-gray-600 mb-4">
                    {destination.type} • Best time:{" "}
                    {destination.best_time_to_visit}
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-2">
                    Highlights:
                  </h4>
                  <ul className="space-y-2">
                    {destination.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Travel Tips Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">
            Travel Tips & Essentials
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Transportation */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <FaBus className="mr-2 text-blue-600" />
                Transportation
              </h3>
              <div className="space-y-4">
                {musicBlog.travel_tips.transportation.map((transport, i) => (
                  <div
                    key={i}
                    className="border-b pb-4 last:border-b-0 last:pb-0"
                  >
                    <div className="flex items-center mb-2">
                      {transport.icon}
                      <span className="ml-2 font-medium">{transport.type}</span>
                    </div>
                    <div className="text-sm text-gray-600">
                      <div>Recommended: {transport.recommended}</div>
                      <div>Routes: {transport.routes.join(", ")}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Accommodation */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <FaHotel className="mr-2 text-yellow-600" />
                Accommodation
              </h3>
              <div className="space-y-4">
                {musicBlog.travel_tips.accommodation.map((stay, i) => (
                  <div
                    key={i}
                    className="border-b pb-4 last:border-b-0 last:pb-0"
                  >
                    <div className="flex items-center mb-2">
                      {stay.icon}
                      <span className="ml-2 font-medium">{stay.type}</span>
                    </div>
                    <div className="text-sm text-gray-600">
                      <div>Recommended: {stay.recommended.join(", ")}</div>
                      <div>Avg price: €{stay.avg_price_per_night}/night</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Packing List */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
              <FaSuitcase className="mr-2 text-gray-600" />
              Packing List
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {musicBlog.travel_tips.packing_list.map((item, i) => (
                <div key={i} className="flex items-center">
                  {item.icon}
                  <span className="ml-2 text-sm">{item.item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default MusicConcert;
