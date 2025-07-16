import React from "react";
import { useParams, Link } from "react-router-dom";
import {
  FiMapPin,
  FiCalendar,
  FiSun,
  FiAlertTriangle,
  FiInfo,
  FiDroplet,
  FiAnchor,
  FiWind,
  FiUmbrella,
  FiCoffee,
  FiShoppingBag,
  FiWifi,
  FiArrowLeft,
} from "react-icons/fi";
import {
  FaUmbrellaBeach,
  FaSwimmer,
  FaCar,
  FaShip,
  FaHiking,
  FaBaby,
  FaParking,
  FaTree,
  FaCamera,
} from "react-icons/fa";
import { MdRestaurant, MdDirectionsBoat } from "react-icons/md";

const BeachDetails = () => {
  const { slug } = useParams();

  const beachBlog = [
    {
      title: "Stiniva Beach: Hidden Cove of Vis Island",
      slug: "stiniva-beach-vis",
      location: "Vis Island, Croatia",
      coordinates: "43.0614° N, 16.1828° E",
      summary:
        "A narrow entrance opens up to a spectacular, secluded cove surrounded by towering cliffs – perfect for adventurers and nature lovers.",
      description: [
        "Stiniva Beach is arguably Croatia's most dramatic beach, hidden away in a spectacular cove on Vis Island. The beach is only accessible through a narrow opening between towering cliffs, creating a secluded paradise that feels worlds away from civilization.",
        "The beach itself is covered in smooth white pebbles, and the water is an incredible shade of turquoise. The cliffs surrounding the beach provide natural shade in the afternoon, making it comfortable even on hot summer days.",
        "Stiniva was voted the best beach in Europe in 2016, and while it's gained popularity since then, it still maintains its wild, untouched charm. The beach is part of a protected nature reserve, helping preserve its pristine condition.",
      ],
      hero_image:
        "https://images.unsplash.com/photo-1562294680-1211e5b8a8ef?w=1200&auto=format&fit=crop",
      gallery: [
        {
          url: "https://images.unsplash.com/photo-1635550047656-03f7b494c9c9?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Aerial view of Stiniva Beach",
        },
        {
          url: "https://images.unsplash.com/photo-1625134386005-9ca3ce1d61a7?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Cliffside path to Stiniva",
        },
        {
          url: "https://plus.unsplash.com/premium_photo-1744984306609-57cf00aa7e50?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Crystal clear waters at Stiniva",
        },
      ],
      best_time_to_visit: "Late May to early October",
      water_temperature: {
        summer: "22-26°C",
        spring_autumn: "18-21°C",
      },
      facilities: {
        sunbeds: false,
        umbrellas: false,
        restaurants: false,
        parking: "Limited parking above beach",
        accessibility: "Challenging (steep hike)",
      },
      activities: [
        "Swimming in crystal clear waters",
        "Snorkeling around rocky outcrops",
        "Cliff jumping (for experienced swimmers)",
        "Photography of dramatic scenery",
      ],
      travel_tips: [
        "Arrive early if hiking down – the path gets hot and steep (about 20 min walk)",
        "Bring your own water and snacks – there are no facilities on-site",
        "Wear sturdy shoes for the hike down",
        "Boat tours from Split and Hvar often include Stiniva as a stop",
        "Consider visiting in shoulder season (June or September) to avoid crowds",
      ],
      how_to_reach: [
        {
          method: "Hike",
          details: "20-30 minute steep hike from the nearest parking",
          icon: <FaHiking className="text-green-600" />,
        },
        {
          method: "Boat",
          details: "Tour boats from Vis Town, Split, or Hvar",
          icon: <MdDirectionsBoat className="text-blue-600" />,
        },
        {
          method: "Kayak",
          details: "Rentals available in nearby Komiža",
          icon: <FiAnchor className="text-blue-400" />,
        },
      ],
      nearby_attractions: [
        "Vis Town (15km) - Charming fishing port",
        "Komiža (8km) - Picturesque coastal town",
        "Blue Cave (Biševo Island) - Famous sea cave",
      ],
      tags: ["Beach", "Hidden Gem", "Vis", "Adventure", "Nature", "Cliffs"],
      map_embed_url:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2918.827284251987!2d16.18061631547991!3d43.06141497914648!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13358e2e6d3e3e5f%3A0x4d1d0b0b0b0b0b0b!2sStiniva%20Beach!5e0!3m2!1sen!2shr!4v1620000000000!5m2!1sen!2shr",
    },
    {
      title: "Zlatni Rat: Croatia's Iconic Golden Horn",
      slug: "zlatni-rat-beach",
      location: "Bol, Brač Island, Croatia",
      coordinates: "43.2620° N, 16.6550° E",
      summary:
        "A dynamic natural wonder that shifts with the winds and currents, this pebble peninsula stretches elegantly into the Adriatic with crystal-clear waters on both sides.",
      description: [
        "Zlatni Rat (Golden Horn) is Croatia's most photographed beach, famous for its unique shape that changes with the wind and currents. The 634m-long pebble spit extends into the Hvar Channel, with pine trees at its base giving way to pure white pebbles at the tip.",
        "The beach offers exceptional conditions for watersports, with consistent afternoon winds (maestral) perfect for windsurfing. The eastern side typically has calmer waters ideal for swimming, while the western side attracts surfers. Underwater currents keep the water exceptionally clear and free of seaweed.",
        "What makes Zlatni Rat truly special is its ever-changing form - the tip can shift up to 20 degrees depending on conditions. The beach has been scientifically studied as a rare example of a living geomorphological phenomenon.",
      ],
      hero_image:
        "https://images.unsplash.com/photo-1626025373214-89771a4a75e8?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      gallery: [
        {
          url: "https://images.unsplash.com/photo-1626025373214-89771a4a75e8?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Aerial view of the golden horn shape",
        },
        {
          url: "https://plus.unsplash.com/premium_photo-1712685912269-9c29796c6117?q=80&w=875&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Turquoise waters along the pebble shore",
        },
        {
          url: "https://images.unsplash.com/photo-1630162018164-454cadccc40d?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Windsurfers catching afternoon winds",
        },
      ],
      best_time_to_visit: "June to September",
      water_temperature: {
        summer: "24-26°C",
        spring_autumn: "19-23°C",
      },
      facilities: {
        sunbeds: true,
        umbrellas: true,
        restaurants: "Multiple beach bars and restaurants",
        parking: "Large paid lot near beach (5min walk)",
        accessibility: "Easy (paved path)",
      },
      activities: [
        "Windsurfing and paddleboarding",
        "Jet ski and banana boat rides",
        "Snorkeling around rocky edges",
        "Beach volleyball tournaments",
        "Parasailing with views of Hvar",
      ],
      travel_tips: [
        "Morning visits offer glassy calm waters before winds pick up",
        "Rent equipment from Big Blue Sport center for best rates",
        "Walk to the tip for stunning 360° views of the Adriatic",
        "Visit Vidova Gora viewpoint for breathtaking panoramas",
        "Try the local Bol cake (pogača) from beachside bakeries",
      ],
      how_to_reach: [
        {
          method: "Ferry",
          details: "From Split to Supetar (Brač), then 40min drive to Bol",
          icon: "ferry",
        },
        {
          method: "Catamaran",
          details: "Direct seasonal service from Split to Bol harbor",
          icon: "catamaran",
        },
        {
          method: "Excursion Boat",
          details: "Day trips from Hvar, Makarska, or Split",
          icon: "boat-tour",
        },
      ],
      nearby_attractions: [
        "Vidova Gora (778m) - Highest Adriatic island peak",
        "Bol Town - Charming seaside promenade",
        "Dragon's Cave - Medieval relief carvings",
      ],
      tags: [
        "Iconic",
        "Windsurfing",
        "Brač",
        "Pebble Beach",
        "Family",
        "Adventure",
      ],
      map_embed_url:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2918.827284251987!2d16.18061631547991!3d43.06141497914648!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13358e2e6d3e3e5f%3A0x4d1d0b0b0b0b0b0b!2sZlatni%20Rat!5e0!3m2!1sen!2shr!4v1620000000000!5m2!1sen!2shr",
    },
    {
      title: "Sakarun Beach: Dugi Otok's Caribbean Escape",
      slug: "sakarun-beach-dugi-otok",
      location: "Dugi Otok, Croatia",
      coordinates: "44.1015° N, 14.9208° E",
      summary:
        "A 800m stretch of powdery white sand with unbelievably turquoise waters, hidden on Croatia's longest island in the Zadar archipelago.",
      description: [
        "Sakarun Beach is a rare Adriatic treasure - a genuine white sand beach with Caribbean-like hues. The sand consists of finely ground shells that create a bright, reflective surface, while the shallow shelf results in stunning turquoise waters that stay warm all day.",
        "The beach faces northwest, making it ideal for sunset viewing. A dense pine forest borders the shore, providing natural shade and releasing therapeutic aromas. The bay's unique orientation protects it from strong winds, maintaining calm conditions perfect for floating and paddleboarding.",
        "What makes Sakarun magical is its untouched quality - no large developments crowd the shoreline, just a single beach bar blending into the landscape. The water's exceptional clarity reveals starfish and sea urchins just meters from shore.",
      ],
      hero_image:
        "https://images.unsplash.com/photo-1578691963959-435efd70eca3?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      gallery: [
        {
          url: "https://images.unsplash.com/photo-1694170531932-fb1fd256a85a?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "White sand meeting turquoise waters",
        },
        {
          url: "https://images.unsplash.com/photo-1578691963959-435efd70eca3?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Pine trees lining the shore",
        },
        {
          url: "https://images.unsplash.com/photo-1705764414849-674202dd2c79?q=80&w=773&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Children playing in shallow waters",
        },
      ],
      best_time_to_visit: "Mid-June to mid-September",
      water_temperature: {
        summer: "25-28°C",
        spring_autumn: "20-24°C",
      },
      facilities: {
        sunbeds: true,
        umbrellas: true,
        restaurants: "One rustic beach bar",
        parking: "Dirt lot (10min walk through pines)",
        accessibility: "Moderate (sandy path)",
      },
      activities: [
        "Floating in the buoyant saline waters",
        "Paddleboarding across calm surface",
        "Beachcombing for unique shells",
        "Snorkeling in protected coves",
        "Sunset picnics on the sand",
      ],
      travel_tips: [
        "Water shoes recommended - sand gets extremely hot",
        "Morning light creates amazing photo conditions",
        "Bring inflatables for maximum relaxation",
        "Pack a cooler - limited food options",
        "Stay for bioluminescent plankton displays (late summer)",
      ],
      how_to_reach: [
        {
          method: "Car Ferry",
          details: "From Zadar to Brbinj (Dugi Otok), then 30min drive",
          icon: "ferry",
        },
        {
          method: "Passenger Ferry",
          details: "From Zadar to Sali (closest village)",
          icon: "passenger-ferry",
        },
        {
          method: "Excursion Boat",
          details: "Day trips from Zadar or nearby islands",
          icon: "boat-tour",
        },
      ],
      nearby_attractions: [
        "Telašćica Nature Park - Dramatic cliffs and salt lake",
        "Veli Rat Lighthouse - Croatia's tallest lighthouse",
        "Kornati Islands National Park - Nearby archipelago",
      ],
      tags: [
        "White Sand",
        "Family",
        "Dugi Otok",
        "Sunset",
        "Relaxation",
        "Shallow Waters",
      ],
      map_embed_url:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2918.827284251987!2d16.18061631547991!3d43.06141497914648!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13358e2e6d3e3e5f%3A0x4d1d0b0b0b0b0b0b!2sSakarun%20Beach!5e0!3m2!1sen!2shr!4v1620000000000!5m2!1sen!2shr",
    },
  ];

  const beach = beachBlog.find((b) => b.slug === slug);

  if (!beach) return <div className="text-center py-20">Beach not found</div>;

  return (
    <div className="bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <div className="relative h-96 md:h-screen max-h-[80vh]">
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-gray-900/70 z-10"></div>
        <img
          src={beach.hero_image}
          alt={beach.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 h-full flex flex-col justify-end pb-12 px-6 md:px-12">
          <div className="max-w-4xl mx-auto w-full">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-2 drop-shadow-lg">
              {beach.title}
            </h1>
            <div className="flex items-center gap-3 text-white mb-4">
              <FiMapPin />
              <span className="text-lg">{beach.location}</span>
            </div>
            <p className="text-lg text-white max-w-2xl drop-shadow-md">
              {beach.summary}
            </p>
          </div>
        </div>
      </div>

      {/* Back button */}
      <div className="container mx-auto px-6 pt-6">
        <Link
          to="/croatia/beaches/"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
        >
          <FiArrowLeft className="mr-2" />
          Back to Beaches
        </Link>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-12 max-w-6xl">
        {/* Description Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 pb-2 border-b border-gray-200">
            About {beach.title.split(":")[0]}
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              {beach.description.map((para, index) => (
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
                <FiInfo className="text-blue-500" />
                Quick Facts
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <FiCalendar className="text-blue-500 mt-1" />
                  <div>
                    <span className="font-medium">Best Time to Visit: </span>
                    <span>{beach.best_time_to_visit}</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <FiDroplet className="text-blue-500 mt-1" />
                  <div>
                    <span className="font-medium">Water Temp (Summer): </span>
                    <span>{beach.water_temperature.summer}</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <FaUmbrellaBeach className="text-blue-500 mt-1" />
                  <div>
                    <span className="font-medium">Facilities: </span>
                    <span>
                      {beach.facilities.sunbeds
                        ? "Sunbeds available"
                        : "No sunbeds"}{" "}
                      •
                      {beach.facilities.restaurants
                        ? " Restaurants nearby"
                        : " Bring your own food"}
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <FiWind className="text-blue-500 mt-1" />
                  <div>
                    <span className="font-medium">Accessibility: </span>
                    <span>{beach.facilities.accessibility}</span>
                  </div>
                </li>
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
            {beach.gallery.map((image, index) => (
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

        {/* Travel Tips Section */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6 pb-2 border-b border-gray-200">
                Travel Tips
              </h2>
              <ul className="space-y-4">
                {beach.travel_tips.map((tip, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 p-3 hover:bg-blue-50 rounded-lg transition"
                  >
                    <div className="bg-blue-100 p-2 rounded-full mt-1">
                      {tip.includes("Arrive") ? (
                        <FiSun className="text-yellow-500" />
                      ) : tip.includes("Bring") ? (
                        <FiAlertTriangle className="text-orange-500" />
                      ) : tip.includes("Boat") ? (
                        <FaShip className="text-blue-500" />
                      ) : (
                        <FiInfo className="text-blue-500" />
                      )}
                    </div>
                    <span className="text-gray-700">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* How to Reach Section */}
            <div>
              <h2 className="text-3xl font-bold mb-6 pb-2 border-b border-gray-200">
                How to Reach
              </h2>
              <ul className="space-y-4">
                {beach.how_to_reach.map((method, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 p-3 hover:bg-blue-50 rounded-lg transition"
                  >
                    <div className="bg-blue-100 p-2 rounded-full mt-1">
                      {method.icon}
                    </div>
                    <div>
                      <h3 className="font-medium text-lg">{method.method}</h3>
                      <p className="text-gray-600">{method.details}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Activities Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 pb-2 border-b border-gray-200">
            Activities
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {beach.activities.map((activity, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition"
              >
                <div className="flex items-center gap-3">
                  {activity.includes("Swimming") ? (
                    <FaSwimmer className="text-blue-500" />
                  ) : activity.includes("Snorkeling") ? (
                    <FiDroplet className="text-blue-400" />
                  ) : activity.includes("Cliff") ? (
                    <FaHiking className="text-green-500" />
                  ) : (
                    <FaCamera className="text-purple-500" />
                  )}
                  <span className="font-medium">{activity}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Map Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 pb-2 border-b border-gray-200">
            Location
          </h2>
          <div className="rounded-xl overflow-hidden shadow-xl h-96">
            <iframe
              title={`${beach.title} Map`}
              width="100%"
              height="100%"
              frameBorder="0"
              style={{ border: 0 }}
              src={beach.map_embed_url}
              allowFullScreen
            ></iframe>
          </div>
          <p className="mt-2 text-gray-600 text-center">
            Coordinates: {beach.coordinates}
          </p>
        </section>

        {/* Nearby Attractions */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 pb-2 border-b border-gray-200">
            Nearby Attractions
          </h2>
          <ul className="space-y-2">
            {beach.nearby_attractions.map((attraction, index) => (
              <li key={index} className="flex items-start gap-3">
                <FiMapPin className="text-blue-500 mt-1" />
                <span className="text-gray-700">{attraction}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {beach.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BeachDetails;
