import React from "react";
import { useParams, Link } from "react-router-dom";
import {
  FaTree,
  FaWater,
  FaSwimmer,
  FaCamera,
  FaCar,
  FaBus,
  FaBicycle,
  FaClock,
  FaTicketAlt,
  FaMoneyBillWave,
  FaToilet,
  FaParking,
  FaWheelchair,
  FaArrowLeft,
  FaRoute,
  FaMap,
  FaMountain,
} from "react-icons/fa";
import {
  FaCalendarAlt,
  FaExclamationTriangle,
  FaInfoCircle,
} from "react-icons/fa";

import {
  GiCaveEntrance,
  GiPathDistance,
  GiForest,
  GiWoodenSign,
  GiHiking,
} from "react-icons/gi";
import { IoMdTime } from "react-icons/io";
import { RiFootprintFill } from "react-icons/ri";
import { MdAccountTree, MdDirectionsBoat, MdRestaurant } from "react-icons/md";

const NationalParkDetails = () => {
  const { slug } = useParams();
  const nationalParkBlogs = {
    nationalParks: [
      {
        title: "Plitvice Lakes National Park: Waterfall Wonderland",
        slug: "plitvice-lakes-national-park",
        location: "Lika-Senj County, Croatia",
        coordinates: "44.8808° N, 15.6169° E",
        established: "1949",
        size: "296.85 km²",
        summary:
          "A UNESCO World Heritage Site filled with cascading lakes, turquoise waters, and lush forest trails — Croatia's most iconic natural wonder.",
        description: [
          "Plitvice Lakes National Park is the oldest and largest national park in Croatia, famous for its 16 terraced lakes joined by waterfalls that extend into a limestone canyon. The lakes are renowned for their distinctive colors ranging from azure to green, grey or blue, changing constantly depending on mineral content and sunlight.",
          "The park offers 7 different routes and 4 hiking trails with wooden footbridges and pathways that wind around and across the water. Veliki Slap (Big Waterfall) at 78 meters high is Croatia's tallest waterfall, located at the end of the Lower Lakes.",
          "Plitvice's unique ecosystem includes over 1,400 plant species and diverse wildlife like brown bears, wolves, and rare bird species. The park operates electric boats and trains to help visitors navigate while preserving the environment.",
        ],
        hero_image:
          "https://images.unsplash.com/photo-1589312133722-eab40c686ebb?w=1200&auto=format&fit=crop",
        gallery: [
          {
            url: "https://images.unsplash.com/photo-1589312133722-eab40c686ebb?w=800&auto=format&fit=crop",
            alt: "Turquoise lakes and waterfalls at Plitvice",
          },
          {
            url: "https://images.unsplash.com/photo-1589312133722-eab40c686ebb?w=800&auto=format&fit=crop",
            alt: "Wooden walkways through the lakes",
          },
          {
            url: "https://images.unsplash.com/photo-1589312133722-eab40c686ebb?w=800&auto=format&fit=crop",
            alt: "Veliki Slap waterfall in autumn colors",
          },
        ],
        best_time_to_visit:
          "April–June and September–October (fewer crowds, great weather)",
        entrance_fees: {
          adult: "40 EUR (peak season)",
          child: "18 EUR (7-18 years)",
          student: "25 EUR (with valid ID)",
          family: "100 EUR (2 adults + 2 children)",
        },
        opening_hours: {
          summer: "7:00 AM - 8:00 PM",
          winter: "8:00 AM - 4:00 PM",
        },
        facilities: {
          visitor_centers: ["Entrance 1", "Entrance 2"],
          restaurants: 3,
          toilets: "Available at all major points",
          parking: "Paid parking at both entrances",
          accessibility: "Partial (some wheelchair accessible paths)",
        },
        activities: [
          {
            name: "Hiking",
            description: "7 marked trails from 2-8 hours",
            icon: "hiking",
          },
          {
            name: "Boat Rides",
            description: "Electric boats on Kozjak Lake",
            icon: "boat",
          },
          {
            name: "Photography",
            description: "Scenic viewpoints throughout",
            icon: "camera",
          },
          {
            name: "Educational Trails",
            description: "Flora and fauna information boards",
            icon: "nature",
          },
        ],
        travel_tips: [
          {
            tip: "Start early to avoid peak crowds and secure parking",
            icon: "clock",
            importance: "high",
          },
          {
            tip: "Bring waterproof shoes — some areas can be wet or slippery",
            icon: "footwear",
            importance: "medium",
          },
          {
            tip: "Choose Entrance 1 for best views of Veliki Slap (Big Waterfall)",
            icon: "viewpoint",
            importance: "high",
          },
          {
            tip: "Purchase tickets online in peak season to avoid queues",
            icon: "ticket",
            importance: "medium",
          },
        ],
        how_to_reach: [
          {
            method: "Car",
            details: "2h from Zagreb via A1 highway",
            icon: "car",
          },
          {
            method: "Bus",
            details: "Direct routes from Zagreb, Zadar, and Split",
            icon: "bus",
          },
          {
            method: "Organized Tour",
            details: "Day trips available from major cities",
            icon: "tour",
          },
        ],
        nearby_attractions: [
          "Rastoke Watermills (30km)",
          "Barać Caves (20km)",
          "Northern Velebit National Park (80km)",
        ],
        conservation_status: {
          unesco: true,
          iucn_category: "II (National Park)",
          protected_species: ["Lynx", "Brown Bear", "European Otter"],
        },
        tags: ["Nature", "UNESCO", "Waterfalls", "Hiking", "Lakes"],
        map_embed_url:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2918.827284251987!2d16.18061631547991!3d43.06141497914648!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13358e2e6d3e3e5f%3A0x4d1d0b0b0b0b0b0b!2sPlitvice%20Lakes!5e0!3m2!1sen!2shr!4v1620000000000!5m2!1sen!2shr",
      },
      {
        title: "Krka National Park: Swim Near Waterfalls",
        slug: "krka-national-park",
        location: "Šibenik-Knin County, Croatia",
        coordinates: "43.8020° N, 15.9728° E",
        established: "1985",
        size: "109 km²",
        summary:
          "Famous for Skradinski Buk waterfall and its swimming areas, Krka offers boat tours, historic monasteries, and natural beauty near the Adriatic coast.",
        description: [
          "Krka National Park protects the Krka River and its spectacular waterfalls, most notably Skradinski Buk - a massive natural pool with cascades that visitors can swim in during summer months. The park features travertine waterfalls formed by calcium carbonate deposits from the water.",
          "Beyond the waterfalls, the park includes historic sites like Visovac Island with its 15th-century Franciscan monastery, and the Krka Monastery built above ancient Roman catacombs. The park's diverse ecosystems support over 800 plant species and 200 bird species.",
          "Unique features include the remains of early hydroelectric plants (among the world's first) and traditional watermills that have been converted into ethnographic exhibits showcasing Dalmatian heritage.",
        ],
        hero_image:
          "https://images.unsplash.com/photo-1563302759-51579d211e26?w=1200&auto=format&fit=crop",
        gallery: [
          {
            url: "https://images.unsplash.com/photo-1563302759-51579d211e26?w=800&auto=format&fit=crop",
            alt: "Skradinski Buk waterfall with swimmers",
          },
          {
            url: "https://images.unsplash.com/photo-1563302759-51579d211e26?w=800&auto=format&fit=crop",
            alt: "Visovac Island monastery",
          },
          {
            url: "https://images.unsplash.com/photo-1563302759-51579d211e26?w=800&auto=format&fit=crop",
            alt: "Traditional watermills at Krka",
          },
        ],
        best_time_to_visit: "May to September",
        entrance_fees: {
          adult: "30 EUR (summer)",
          child: "18 EUR (7-18 years)",
          student: "20 EUR (with valid ID)",
          family: "75 EUR (2 adults + 2 children)",
        },
        opening_hours: {
          summer: "8:00 AM - 7:00 PM",
          winter: "9:00 AM - 4:00 PM",
        },
        facilities: {
          visitor_centers: ["Lozovac", "Skradin"],
          restaurants: 2,
          toilets: "Available at main sites",
          parking: "Paid parking at entrances",
          accessibility: "Limited (steep areas)",
        },
        activities: [
          {
            name: "Swimming",
            description: "At designated waterfall pools (summer only)",
            icon: "swimming",
          },
          {
            name: "Boat Tours",
            description: "To Visovac Island and Roski Slap",
            icon: "boat",
          },
          {
            name: "Ethnographic Museum",
            description: "Traditional watermills and workshops",
            icon: "museum",
          },
          {
            name: "Hiking",
            description: "Trails along the river canyon",
            icon: "hiking",
          },
        ],
        travel_tips: [
          {
            tip: "Swimming is only allowed in summer and at designated spots",
            icon: "swim",
            importance: "high",
          },
          {
            tip: "Take the boat tour from Skradin for the most scenic route",
            icon: "boat",
            importance: "high",
          },
          {
            tip: "Wear comfortable shoes – some trails include wooden stairs",
            icon: "footwear",
            importance: "medium",
          },
          {
            tip: "Visit early or late to avoid cruise ship crowds",
            icon: "clock",
            importance: "medium",
          },
        ],
        how_to_reach: [
          {
            method: "Car",
            details: "1h from Split, 30min from Šibenik",
            icon: "car",
          },
          {
            method: "Boat",
            details: "From Skradin town center",
            icon: "boat",
          },
          {
            method: "Bus",
            details: "From Šibenik or Split to Skradin",
            icon: "bus",
          },
        ],
        nearby_attractions: [
          "Šibenik Old Town (20km)",
          "Primošten Peninsula (40km)",
          "Knin Fortress (30km)",
        ],
        conservation_status: {
          unesco: false,
          iucn_category: "II (National Park)",
          protected_species: [
            "European Eel",
            "Dalmatian Barbel",
            "Griffon Vulture",
          ],
        },
        tags: ["Waterfalls", "Swimming", "Boat Tours", "Nature", "Dalmatia"],
        map_embed_url:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2918.827284251987!2d16.18061631547991!3d43.06141497914648!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13358e2e6d3e3e5f%3A0x4d1d0b0b0b0b0b0b!2sKrka%20National%20Park!5e0!3m2!1sen!2shr!4v1620000000000!5m2!1sen!2shr",
      },
      {
        title: "Paklenica National Park: Cliffs, Canyons & Climbing",
        slug: "paklenica-national-park",
        location: "Zadar County, Croatia",
        coordinates: "44.3500° N, 15.5000° E",
        established: "1949",
        size: "95 km²",
        summary:
          "A haven for hikers and climbers, Paklenica's dramatic canyons and mountain peaks are nestled in the Velebit range just minutes from the sea.",
        description: [
          "Paklenica National Park encompasses the most impressive sections of southern Velebit, featuring two spectacular canyons (Velika and Mala Paklenica) with vertical cliffs rising up to 400m. The park is Croatia's premier rock climbing destination with over 400 established routes.",
          "Beyond climbing, the park offers diverse hiking trails ranging from easy canyon walks to challenging mountain ascents. The highest peak is Vaganski vrh at 1,757m, offering panoramic views of the Adriatic islands. The park's forests include ancient black pine and beech trees, some over 500 years old.",
          "Unique features include several caves (some with prehistoric remains), the historic Lugarnica mountain lodge, and the abandoned communist-era underground tunnels that were built as a bunker for Yugoslav leader Tito.",
        ],
        hero_image:
          "https://images.unsplash.com/photo-1711851756938-7ce6938e8aad?w=1200&auto=format&fit=crop",
        gallery: [
          {
            url: "https://images.unsplash.com/photo-1711851756938-7ce6938e8aad?w=800&auto=format&fit=crop",
            alt: "Dramatic cliffs of Velika Paklenica",
          },
          {
            url: "https://images.unsplash.com/photo-1711851756938-7ce6938e8aad?w=800&auto=format&fit=crop",
            alt: "Rock climbers on canyon walls",
          },
          {
            url: "https://images.unsplash.com/photo-1711851756938-7ce6938e8aad?w=800&auto=format&fit=crop",
            alt: "Forest trails in Paklenica",
          },
        ],
        best_time_to_visit:
          "April to October (spring and fall for hiking, summer for climbing)",
        entrance_fees: {
          adult: "10 EUR",
          child: "5 EUR (7-18 years)",
          student: "7 EUR (with valid ID)",
          family: "25 EUR (2 adults + 2 children)",
        },
        opening_hours: {
          summer: "6:00 AM - 8:00 PM",
          winter: "8:00 AM - 3:00 PM",
        },
        facilities: {
          visitor_centers: ["Starigrad Paklenica"],
          restaurants: 1,
          toilets: "At main entrance",
          parking: "Paid parking at entrance",
          accessibility: "Limited (rugged terrain)",
        },
        activities: [
          {
            name: "Rock Climbing",
            description: "400+ routes of varying difficulty",
            icon: "climbing",
          },
          {
            name: "Hiking",
            description: "Trails from 1-8 hour durations",
            icon: "hiking",
          },
          {
            name: "Caving",
            description: "Guided tours to Manita Peć cave",
            icon: "cave",
          },
          {
            name: "Via Ferrata",
            description: "Protected climbing route",
            icon: "via-ferrata",
          },
        ],
        travel_tips: [
          {
            tip: "Bring sturdy hiking or climbing shoes — terrain is rocky and steep",
            icon: "footwear",
            importance: "high",
          },
          {
            tip: "Early morning is best for climbing, before the sun hits the cliffs",
            icon: "clock",
            importance: "high",
          },
          {
            tip: "Check weather before hiking – mountain conditions change quickly",
            icon: "weather",
            importance: "high",
          },
          {
            tip: "Carry plenty of water – limited sources in canyons",
            icon: "water",
            importance: "medium",
          },
        ],
        how_to_reach: [
          {
            method: "Car",
            details: "1h from Zadar, well-signed from Starigrad",
            icon: "car",
          },
          {
            method: "Bus",
            details: "From Zadar to Starigrad Paklenica",
            icon: "bus",
          },
          {
            method: "Bike",
            details: "Popular cycling route along coast",
            icon: "bike",
          },
        ],
        nearby_attractions: [
          "Starigrad Paklenica (5km) - Coastal town",
          "Zadar Old Town (45km)",
          "Velebit Botanical Garden (20km)",
        ],
        conservation_status: {
          unesco: false,
          iucn_category: "II (National Park)",
          protected_species: ["Lynx", "Chamois", "Golden Eagle"],
        },
        tags: ["Mountains", "Hiking", "Climbing", "Canyons", "Adventure"],
        map_embed_url:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2918.827284251987!2d16.18061631547991!3d43.06141497914648!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13358e2e6d3e3e5f%3A0x4d1d0b0b0b0b0b0b!2sKrka%20National%20Park!5e0!3m2!1sen!2shr!4v1620000000000!5m2!1sen!2shr",
      },
    ],
  };
  const park = nationalParkBlogs.nationalParks.find((p) => p.slug === slug);

  if (!park) return <div className="text-center py-20">Park not found</div>;

  const renderIcon = (iconName) => {
    switch (iconName) {
      case "hiking":
        return <GiHiking className="text-green-600" />;
      case "boat":
        return <MdDirectionsBoat className="text-blue-500" />;
      case "camera":
        return <FaCamera className="text-purple-500" />;
      case "nature":
        return <GiForest className="text-green-700" />;
      case "swimming":
        return <FaSwimmer className="text-blue-400" />;
      case "museum":
        return <GiWoodenSign className="text-yellow-600" />;
      case "climbing":
        return <FaMountain className="text-red-500" />;
      case "cave":
        return <GiCaveEntrance className="text-gray-700" />;
      case "via-ferrata":
        return <FaMountain className="text-orange-500" />;
      case "car":
        return <FaCar className="text-gray-600" />;
      case "bus":
        return <FaBus className="text-blue-600" />;
      case "bike":
        return <FaBicycle className="text-green-500" />;
      case "clock":
        return <FaClock className="text-yellow-500" />;
      case "ticket":
        return <FaTicketAlt className="text-purple-600" />;
      case "footwear":
        return <RiFootprintFill className="text-brown-500" />;
      case "viewpoint":
        return <MdAccountTree className="text-blue-400" />;
      case "weather":
        return <FaExclamationTriangle className="text-yellow-600" />;
      case "water":
        return <FaWater className="text-blue-300" />;
      case "tour":
        return <GiPathDistance className="text-green-500" />;
      default:
        return <FaInfoCircle className="text-blue-500" />;
    }
  };

  return (
    <div className="bg-gradient-to-b from-green-50 to-white">
      {/* Hero Section */}
      <div className="relative h-screen">
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-gray-900/70 z-10"></div>
        <img
          src={park.hero_image}
          alt={park.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 h-full flex flex-col justify-end pb-12 px-6 md:px-12">
          <div className="max-w-4xl mx-auto w-full">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-2 drop-shadow-lg">
              {park.title}
            </h1>
            <div className="flex items-center gap-3 text-white mb-4">
              <FaMap />
              <span className="text-lg">{park.location}</span>
            </div>
            <p className="text-lg text-white max-w-2xl drop-shadow-md">
              {park.summary}
            </p>
          </div>
        </div>
      </div>

      {/* Back button */}
      <div className="container mx-auto px-6 pt-6">
        <Link
          to="/national-parks"
          className="inline-flex items-center text-green-600 hover:text-green-800 transition-colors"
        >
          <FaArrowLeft className="mr-2" />
          Back to National Parks
        </Link>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-12 max-w-6xl">
        {/* Description Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 pb-2 border-b border-gray-200">
            About {park.title.split(":")[0]}
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              {park.description.map((para, index) => (
                <p
                  key={index}
                  className="text-lg leading-relaxed text-gray-700"
                >
                  {para}
                </p>
              ))}
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <FaInfoCircle className="text-green-500" />
                Quick Facts
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <FaCalendarAlt className="text-green-500 mt-1" />
                  <div>
                    <span className="font-medium">Established: </span>
                    <span>{park.established}</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <FaRoute className="text-green-500 mt-1" />
                  <div>
                    <span className="font-medium">Size: </span>
                    <span>{park.size}</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <FaCalendarAlt className="text-green-500 mt-1" />
                  <div>
                    <span className="font-medium">Best Time to Visit: </span>
                    <span>{park.best_time_to_visit}</span>
                  </div>
                </li>
                {park.conservation_status.unesco && (
                  <li className="flex items-start gap-3">
                    <FaTree className="text-green-500 mt-1" />
                    <div>
                      <span className="font-medium">UNESCO: </span>
                      <span>World Heritage Site</span>
                    </div>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 pb-2 border-b border-gray-200">
            Gallery
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {park.gallery.map((image, index) => (
              <div
                key={index}
                className="rounded-xl overflow-hidden shadow-lg h-48 md:h-64"
              >
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </section>

        {/* Key Info Sections */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Entrance Fees */}
          <section>
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <FaMoneyBillWave className="text-green-500" />
              Entrance Fees
            </h2>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
              <ul className="space-y-2">
                {Object.entries(park.entrance_fees).map(([type, price]) => (
                  <li
                    key={type}
                    className="flex justify-between py-2 border-b border-gray-100 last:border-0"
                  >
                    <span className="capitalize font-medium">{type}:</span>
                    <span>{price}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Opening Hours */}
          <section>
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <IoMdTime className="text-green-500" />
              Opening Hours
            </h2>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
              <ul className="space-y-2">
                {Object.entries(park.opening_hours).map(([season, hours]) => (
                  <li
                    key={season}
                    className="flex justify-between py-2 border-b border-gray-100 last:border-0"
                  >
                    <span className="capitalize font-medium">{season}:</span>
                    <span>{hours}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </div>

        {/* Activities Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 pb-2 border-b border-gray-200">
            Activities
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {park.activities.map((activity, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition"
              >
                <div className="flex items-center gap-3 mb-2">
                  {renderIcon(activity.icon)}
                  <h3 className="font-medium">{activity.name}</h3>
                </div>
                <p className="text-sm text-gray-600">{activity.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Travel Tips Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 pb-2 border-b border-gray-200">
            Travel Tips
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {park.travel_tips.map((tip, index) => (
              <div
                key={index}
                className={`p-4 rounded-lg border ${
                  tip.importance === "high"
                    ? "border-red-200 bg-red-50"
                    : "border-blue-200 bg-blue-50"
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-full bg-white">
                    {renderIcon(tip.icon)}
                  </div>
                  <p className="text-gray-700">{tip.tip}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* How to Reach Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 pb-2 border-b border-gray-200">
            How to Reach
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {park.how_to_reach.map((method, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition"
              >
                <div className="flex items-center gap-3 mb-2">
                  {renderIcon(method.icon)}
                  <h3 className="font-medium">{method.method}</h3>
                </div>
                <p className="text-sm text-gray-600">{method.details}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Facilities Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 pb-2 border-b border-gray-200">
            Facilities
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 text-center">
              <div className="flex justify-center mb-2">
                <MdRestaurant className="text-2xl text-green-500" />
              </div>
              <h3 className="font-medium">Restaurants</h3>
              <p className="text-sm text-gray-600">
                {park.facilities.restaurants}
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 text-center">
              <div className="flex justify-center mb-2">
                <FaToilet className="text-2xl text-green-500" />
              </div>
              <h3 className="font-medium">Toilets</h3>
              <p className="text-sm text-gray-600">{park.facilities.toilets}</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 text-center">
              <div className="flex justify-center mb-2">
                <FaParking className="text-2xl text-green-500" />
              </div>
              <h3 className="font-medium">Parking</h3>
              <p className="text-sm text-gray-600">{park.facilities.parking}</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 text-center">
              <div className="flex justify-center mb-2">
                <FaWheelchair className="text-2xl text-green-500" />
              </div>
              <h3 className="font-medium">Accessibility</h3>
              <p className="text-sm text-gray-600">
                {park.facilities.accessibility}
              </p>
            </div>
          </div>
        </section>

        {/* Conservation Status */}
        {park.conservation_status && (
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 pb-2 border-b border-gray-200">
              Conservation Status
            </h2>
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="flex justify-center mb-3">
                    <FaTree className="text-3xl text-green-600" />
                  </div>
                  <h3 className="font-bold mb-1">IUCN Category</h3>
                  <p className="text-gray-600">
                    {park.conservation_status.iucn_category}
                  </p>
                </div>
                {park.conservation_status.unesco && (
                  <div className="text-center">
                    <div className="flex justify-center mb-3">
                      <img
                        src="https://whc.unesco.org/img/logo.svg"
                        alt="UNESCO"
                        className="h-8"
                      />
                    </div>
                    <h3 className="font-bold mb-1">UNESCO</h3>
                    <p className="text-gray-600">World Heritage Site</p>
                  </div>
                )}
                <div className="text-center">
                  <div className="flex justify-center mb-3">
                    <GiForest className="text-3xl text-green-600" />
                  </div>
                  <h3 className="font-bold mb-1">Protected Species</h3>
                  <ul className="text-gray-600">
                    {park.conservation_status.protected_species
                      .slice(0, 3)
                      .map((species) => (
                        <li key={species}>{species}</li>
                      ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Map Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 pb-2 border-b border-gray-200">
            Location
          </h2>
          <div className="rounded-xl overflow-hidden shadow-xl h-96">
            <iframe
              title={`${park.title} Map`}
              width="100%"
              height="100%"
              frameBorder="0"
              style={{ border: 0 }}
              src={park.map_embed_url}
              allowFullScreen
            ></iframe>
          </div>
          <p className="mt-2 text-gray-600 text-center">
            Coordinates: {park.coordinates}
          </p>
        </section>

        {/* Nearby Attractions */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 pb-2 border-b border-gray-200">
            Nearby Attractions
          </h2>
          <ul className="space-y-2">
            {park.nearby_attractions.map((attraction, index) => (
              <li key={index} className="flex items-start gap-3">
                <FaMap className="text-green-500 mt-1" />
                <span className="text-gray-700">{attraction}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default NationalParkDetails;
