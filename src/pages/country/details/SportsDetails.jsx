import React from "react";
import { useParams } from "react-router-dom";
import {
  FaWater,
  FaCalendarAlt,
  FaSun,
  FaSnowflake,
  FaLeaf,
  FaUmbrellaBeach,
  FaMapMarkerAlt,
  FaLightbulb,
  FaFutbol,
  FaMountain,
  FaSwimmer,
  FaTrophy,
  FaTree,
  FaAnchor,
} from "react-icons/fa";
import { GiTennisBall, GiMountainClimbing, GiSoccerBall } from "react-icons/gi";
import { MdDirectionsBike, MdKitesurfing } from "react-icons/md";
import { RiBasketballLine } from "react-icons/ri";

const SportsDetails = () => {
  const sportsData = [
    {
      id: 1,
      slug: "adriatic-water-sports",
      title: "Adriatic Water Sports Paradise",
      category: "Marine Activities",
      description:
        "Croatia's crystal-clear Adriatic waters offer some of Europe's most spectacular water sports opportunities. With over 1,200 islands and 5,800 km of coastline, the Dalmatian Coast transforms into a giant aquatic playground each summer.",
      detailed_description: [
        "From May through September, the Adriatic Sea reaches comfortable temperatures between 22-28°C (72-82°F), ideal for extended water activities. The peak season (July-August) offers the warmest waters but also the most crowds. For a more peaceful experience, visit in June or September when the sea remains warm but tourist numbers drop significantly.",
        "Top locations include the Pakleni Islands near Hvar for jet skiing, the Zrmanja River for kayaking through canyons, and the Blue Cave on Biševo Island for unforgettable snorkeling. Many resorts offer complete equipment rentals and instructors for all skill levels.",
      ],
      seasonal_guide: {
        spring:
          "May brings pleasant 20°C waters - perfect for beginners to learn without summer crowds",
        summer:
          "July-August offers 26-28°C waters and full tourist infrastructure but higher prices",
        autumn:
          "September-October sees fewer tourists while maintaining 22-24°C water temperatures",
        winter:
          "Most operators close November-April, though some diving centers remain open",
      },
      vacation_tips: [
        "Stay in Split or Zadar for easy access to multiple marine activity centers",
        "Book combo packages that include equipment, instruction, and island hopping",
        "Morning sessions typically have calmer waters before afternoon winds pick up",
        "Many operators offer photography packages to capture your aquatic adventures",
      ],
      images: [
        {
          url: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?ixlib=rb-4.0.3&auto=format&fit=crop&w=1680&q=80",
          alt: "Jet skis cruising through turquoise waters near Hvar Island",
        },
        {
          url: "https://images.unsplash.com/photo-1641324561589-01a4cebc0339?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Group paddleboarding at sunset along Dalmatian coast",
        },
        {
          url: "https://images.unsplash.com/photo-1530549387789-4c1017266635?ixlib=rb-4.0.3&auto=format&fit=crop&w=1050&q=80",
          alt: "Kayaking near Dubrovnik city walls",
        },
      ],
      locations: [
        {
          name: "Hvar",
          description:
            "Upscale island with luxury marinas and professional water sport centers",
          icon: <FaAnchor className="text-blue-500" />,
        },
        {
          name: "Dubrovnik",
          description:
            "Historic walls provide stunning backdrop for sea kayaking adventures",
          icon: <FaSwimmer className="text-blue-400" />,
        },
      ],
      activities: [
        {
          name: "Jet Skiing",
          icon: <MdKitesurfing className="text-blue-600" />,
        },
        { name: "Snorkeling", icon: <FaWater className="text-blue-300" /> },
        {
          name: "Paddleboarding",
          icon: <MdDirectionsBike className="text-blue-500" />,
        },
      ],
    },
    {
      id: 2,
      slug: "croatian-tennis",
      title: "Croatian Tennis Experiences",
      category: "Racket Sports",
      description:
        "Croatia's tennis tradition boasts world champions like Goran Ivanišević and Marin Čilić. The country offers both competitive tournaments and recreational play with stunning coastal backdrops.",
      detailed_description: [
        "The ATP Croatia Open in Umag (mid-July) is the highlight of the tennis calendar, where you can watch world-class players on intimate courts just meters from the sea. Numerous resorts like the Falkensteiner Punta Skala feature professional tennis academies with programs for all ages and skill levels.",
        "Spring (April-May) and autumn (September-October) offer ideal playing conditions with temperatures of 18-24°C (64-75°F). Summer months can be hot for extended play, though early morning and evening sessions remain popular. Many historic clubs in Opatija date back to the Austro-Hungarian era, offering unique heritage playing experiences.",
      ],
      seasonal_guide: {
        spring:
          "Perfect conditions for training camps before peak heat (18-22°C)",
        summer: "Tournament season with evening matches to avoid daytime heat",
        autumn:
          "Ideal for recreational players with warm but not exhausting temperatures",
        winter: "Some indoor facilities available along the coast",
      },
      vacation_tips: [
        "Combine tennis with spa treatments at Opatija's historic resorts",
        "Book 'Play & Stay' packages at tournament venues during off-weeks",
        "Local coaches offer affordable private lessons compared to other Mediterranean destinations",
        "Racket rentals widely available - no need to bring your own equipment",
      ],
      images: [
        {
          url: "https://images.unsplash.com/photo-1547347298-4074fc3086f0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1680&q=80",
          alt: "Professional tennis match at Umag's Stadion Goran with sea view",
        },
        {
          url: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?ixlib=rb-4.0.3&auto=format&fit=crop&w=1050&q=80",
          alt: "Tennis court with coastal view in Croatia",
        },
      ],
      locations: [
        {
          name: "Umag",
          description:
            "Host of the ATP Croatia Open tournament with seaside courts",
          icon: <FaTrophy className="text-yellow-500" />,
        },
        {
          name: "Opatija",
          description: "Historic tennis clubs with Austro-Hungarian heritage",
          icon: <GiTennisBall className="text-secondary" />,
        },
      ],
      activities: [
        { name: "Tournaments", icon: <FaTrophy className="text-yellow-600" /> },
        { name: "Lessons", icon: <GiTennisBall className="text-green-400" /> },
        {
          name: "Court Rental",
          icon: <FaCalendarAlt className="text-blue-400" />,
        },
      ],
    },
    {
      id: 3,
      slug: "adventure-sports",
      title: "Adventure Sports in Croatia's Wilderness",
      category: "Outdoor Activities",
      description:
        "Croatia's diverse landscapes - from alpine mountains to karst canyons - create an adventure sports paradise. The country's eight national parks provide breathtaking backdrops for adrenaline-pumping activities year-round.",
      detailed_description: [
        "The Cetina River Canyon near Omiš offers some of Europe's best white-water rafting from April through October, with difficulty levels ranging from family-friendly (Class II) to expert (Class IV). Rock climbing enthusiasts flock to Paklenica National Park, where over 400 marked routes ascend limestone cliffs with Adriatic views.",
        "Spring (April-May) brings wildflowers and powerful waterfalls ideal for canyoning. Summer permits high-altitude activities like paragliding from Vidova Gora (Brač Island). Autumn colors make September-October perfect for via ferrata climbing, while winter transforms northern Croatia into a snowshoeing and cross-country skiing destination.",
      ],
      seasonal_guide: {
        spring: "Best for water-based adventures with strong river flows",
        summer: "Ideal for early morning climbing before heat sets in",
        autumn: "Perfect hiking weather with stunning foliage colors",
        winter:
          "Northern mountains offer snow sports while coastal areas remain mild",
      },
      vacation_tips: [
        "Base yourself in Zadar for access to both mountain and sea adventures",
        "Multi-day adventure packages combine rafting, climbing and cycling",
        "Local guides provide all necessary safety equipment",
        "Many operators offer GoPro rentals to document your adventures",
      ],
      images: [
        {
          url: "https://plus.unsplash.com/premium_photo-1661881928850-e54903daa025?q=80&w=901&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Rock climbing in Paklenica National Park",
        },
        {
          url: "https://images.unsplash.com/photo-1522163182402-834f871fd851?ixlib=rb-4.0.3&auto=format&fit=crop&w=1050&q=80",
          alt: "Rafting on Cetina River",
        },
      ],
      locations: [
        {
          name: "Paklenica",
          description:
            "Famous national park with exceptional rock climbing routes",
          icon: <GiMountainClimbing className="text-red-500" />,
        },
        {
          name: "Cetina River",
          description: "Perfect for rafting and canyoning adventures",
          icon: <FaWater className="text-blue-400" />,
        },
      ],
      activities: [
        {
          name: "Rock Climbing",
          icon: <GiMountainClimbing className="text-red-600" />,
        },
        { name: "Rafting", icon: <FaWater className="text-blue-600" /> },
        { name: "Hiking", icon: <FaMountain className="text-green-600" /> },
      ],
    },
    {
      id: 4,
      slug: "football-culture",
      title: "Croatian Football Culture",
      category: "Spectator Sports",
      description:
        "Football represents Croatia's most passionate sport, with the national team's 2018 World Cup final run cementing its place in the nation's heart. Experiencing a match in Croatia offers more than just sport - it's a window into local culture and identity.",
      detailed_description: [
        "The Eternal Derby between Dinamo Zagreb and Hajduk Split represents one of Europe's most intense rivalries. Matches at Zagreb's Maksimir Stadium (capacity 35,000) or Split's Poljud Stadium (35,000) feature incredible atmospheres with passionate fan groups known as 'Bad Blue Boys' (Zagreb) and 'Torcida' (Split).",
        "The season runs from July through May, with peak excitement during autumn derbies and spring championship decisions. Summer offers international club friendlies, while winter break (December-February) sees limited activity. The Croatian national team typically plays qualifiers in Zagreb during spring and autumn.",
      ],
      seasonal_guide: {
        spring: "Crucial league matches and European competitions",
        summer: "Pre-season friendlies and tournament qualifiers",
        autumn: "Derby matches and Champions League group stages",
        winter: "Limited matches during December-February break",
      },
      vacation_tips: [
        "Purchase tickets through official club websites 2-3 weeks in advance",
        "Stay near the stadiums for easy access but expect lively nightlife",
        "Combine matches with stadium tours offered on non-game days",
        "Local fan pubs show matches with authentic atmosphere",
      ],
      images: [
        {
          url: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?ixlib=rb-4.0.3&auto=format&fit=crop&w=1050&q=80",
          alt: "Football stadium in Croatia filled with fans",
        },
        {
          url: "https://images.unsplash.com/photo-1715276917500-905c34813527?q=80&w=781&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Croatian national football team playing",
        },
        {
          url: "https://images.unsplash.com/photo-1592336563179-5a95288563c9?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Croatian national football Stadium",
        },
      ],
      locations: [
        {
          name: "Zagreb",
          description:
            "Home to Dinamo Zagreb and the national team's primary stadium",
          icon: <GiSoccerBall className="text-blue-500" />,
        },
        {
          name: "Split",
          description:
            "Passionate football culture centered around Hajduk Split",
          icon: <RiBasketballLine className="text-red-500" />,
        },
      ],
      activities: [
        {
          name: "Stadium Tours",
          icon: <FaMapMarkerAlt className="text-green-600" />,
        },
        { name: "Match Tickets", icon: <FaFutbol className="text-black" /> },
        { name: "Fan Shops", icon: <FaTrophy className="text-yellow-500" /> },
      ],
    },
  ];

  const { slug } = useParams();
  const sport = sportsData.find((s) => s.slug === slug);

  if (!sport) {
    return <div className="text-center py-20 text-2xl">Sport not found</div>;
  }

  console.log("images", sport.images);

  // Get the appropriate icon based on category
  const getCategoryIcon = () => {
    switch (sport.category) {
      case "Marine Activities":
        return <FaWater className="text-blue-900 text-3xl" />;
      case "Racket Sports":
        return <GiTennisBall className="text-green-800 text-3xl" />;
      case "Outdoor Activities":
        return <FaMountain className="text-brown-500 text-3xl" />;
      case "Spectator Sports":
        return <FaFutbol className="text-red-500 text-3xl" />;
      default:
        return <FaWater className="text-blue-500 text-3xl" />;
    }
  };

  return (
    <div className="">
      {/* Hero Section with Background Image */}
      <div
        className="relative h-screen overflow-hidden shadow-xl"
        style={{
          backgroundImage: `url(${sport.images[0].url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/60 to-gray-900/70 opacity-90"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <div className="inline-flex items-center justify-center mb-6 bg-white/30 bg-opacity-20 backdrop-blur-sm px-4 py-2 rounded-full">
              {getCategoryIcon()}
              <span className="ml-3 text-lg font-medium">{sport.category}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {sport.title}
            </h1>
            <p className="text-xl max-w-2xl mx-auto">{sport.description}</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        {/* Left Column - Detailed Description */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
            <h2 className="text-2xl font-bold mb-6 flex items-center border-b pb-4">
              <span className="bg-blue-100 text-blue-800 p-2 rounded-lg mr-3">
                {getCategoryIcon()}
              </span>
              About {sport.title}
            </h2>
            <div className="space-y-6">
              {sport.detailed_description.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-gray-700 leading-relaxed text-lg"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
          {sport.images && sport.images.length > 0 && (
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h2 className="text-2xl font-bold mb-6 flex items-center border-b pb-4">
                <span className="bg-pink-100 text-pink-800 p-2 rounded-lg mr-3">
                  <FaTree className="text-2xl" />
                </span>
                Photo Gallery
              </h2>

              {/* Dynamic grid with varying image heights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {sport.images.map((image, index) => {
                  // Calculate dynamic height based on index for variation
                  const heightClass = [
                    "h-96", // 192px
                    "h-96", // 256px
                    "h-96", // 320px
                    "h-96", // 384px
                  ][index % 4]; // Cycle through height options

                  return (
                    <div
                      key={index}
                      className={`group rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 ${
                        index % 2 === 0 ? "sm:mt-0" : "sm:mt-8"
                      }`} // Staggered layout
                    >
                      <div className="relative w-full h-full">
                        <img
                          src={image.url}
                          alt={image.alt || `Gallery image ${index + 1}`}
                          className={`w-full object-cover rounded-lg transition-all duration-500 group-hover:scale-105 ${heightClass}`}
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src =
                              "https://via.placeholder.com/300x200?text=Image+Not+Available";
                          }}
                        />
                        {/* Optional image caption overlay */}
                        {image.alt && (
                          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <p className="text-white text-sm">{image.alt}</p>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
          {/* Activities */}
          {sport.activities && (
            <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center border-b pb-4">
                <span className="bg-green-100 text-green-800 p-2 rounded-lg mr-3">
                  <MdDirectionsBike className="text-2xl" />
                </span>
                Popular Activities
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {sport.activities.map((activity, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 p-4 rounded-lg flex items-center hover:bg-gray-100 transition-colors"
                  >
                    <span className="text-2xl mr-3">{activity.icon}</span>
                    <span className="font-medium">{activity.name}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Vacation Tips */}
          {sport.vacation_tips && (
            <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center border-b pb-4">
                <span className="bg-yellow-100 text-yellow-800 p-2 rounded-lg mr-3">
                  <FaLightbulb className="text-2xl" />
                </span>
                Vacation Tips
              </h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {sport.vacation_tips.map((tip, index) => (
                  <li
                    key={index}
                    className="bg-blue-50 p-4 rounded-lg flex items-start hover:shadow-md transition-shadow"
                  >
                    <span className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 shrink-0">
                      {index + 1}
                    </span>
                    <span className="text-gray-700">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Locations */}
          {sport.locations && (
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-2xl font-bold mb-6 flex items-center border-b pb-4">
                <span className="bg-red-100 text-red-800 p-2 rounded-lg mr-3">
                  <FaMapMarkerAlt className="text-2xl" />
                </span>
                Top Locations
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {sport.locations.map((location, index) => (
                  <div
                    key={index}
                    className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="p-5 flex items-start">
                      <span className="text-2xl mr-4 mt-1">
                        {location.icon}
                      </span>
                      <div>
                        <h3 className="font-bold text-lg mb-2">
                          {location.name}
                        </h3>
                        <p className="text-gray-600">{location.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Right Column - Seasonal Guide */}
        <div>
          <div className="bg-white p-6 rounded-xl shadow-sm sticky top-6 mb-8">
            <h2 className="text-2xl font-bold mb-6 flex items-center border-b pb-4">
              <span className="bg-purple-100 text-purple-800 p-2 rounded-lg mr-3">
                <FaCalendarAlt className="text-2xl" />
              </span>
              Seasonal Guide
            </h2>
            <div className="space-y-6">
              {sport.seasonal_guide && (
                <>
                  <div className="flex items-start bg-green-50 p-4 rounded-lg">
                    <div className="bg-green-100 text-green-800 rounded-full w-10 h-10 flex items-center justify-center mr-4 shrink-0">
                      <FaLeaf className="text-xl" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Spring</h3>
                      <p className="text-gray-600">
                        {sport.seasonal_guide.spring}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start bg-yellow-50 p-4 rounded-lg">
                    <div className="bg-yellow-100 text-yellow-800 rounded-full w-10 h-10 flex items-center justify-center mr-4 shrink-0">
                      <FaSun className="text-xl" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Summer</h3>
                      <p className="text-gray-600">
                        {sport.seasonal_guide.summer}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start bg-orange-50 p-4 rounded-lg">
                    <div className="bg-orange-100 text-orange-800 rounded-full w-10 h-10 flex items-center justify-center mr-4 shrink-0">
                      <FaUmbrellaBeach className="text-xl" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Autumn</h3>
                      <p className="text-gray-600">
                        {sport.seasonal_guide.autumn}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start bg-blue-50 p-4 rounded-lg">
                    <div className="bg-blue-100 text-blue-800 rounded-full w-10 h-10 flex items-center justify-center mr-4 shrink-0">
                      <FaSnowflake className="text-xl" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Winter</h3>
                      <p className="text-gray-600">
                        {sport.seasonal_guide.winter}
                      </p>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Gallery */}
        </div>
      </div>
    </div>
  );
};

export default SportsDetails;
