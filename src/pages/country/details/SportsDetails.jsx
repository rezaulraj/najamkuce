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
} from "react-icons/fa";
import { GiTennisBall } from "react-icons/gi";
const SportsDetails = () => {
  const sportsData = {
    sports: [
      {
        id: 1,
        title: "Adriatic Water Sports Paradise",
        slug: "water-sports",
        category: "Marine Activities",
        description:
          "Croatia's crystal-clear Adriatic waters offer some of Europe's most spectacular water sports opportunities. With over 1,200 islands and 5,800 km of coastline, the Dalmatian Coast transforms into a giant aquatic playground each summer. The calm bays are perfect for beginners, while open sea areas challenge experienced enthusiasts.",
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
            url: "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1050&q=80",
            alt: "Group paddleboarding at sunset along Dalmatian coast",
          },
        ],
        locations: [
          {
            name: "Hvar",
            description:
              "Upscale island with luxury marinas and professional water sport centers",
          },
          {
            name: "Dubrovnik",
            description:
              "Historic walls provide stunning backdrop for sea kayaking adventures",
          },
        ],
      },
      {
        id: 2,
        title: "Croatian Tennis Experiences",
        slug: "tennis",
        category: "Racket Sports",
        description:
          "Croatia's tennis tradition boasts world champions like Goran Ivanišević and Marin Čilić. The country offers both competitive tournaments and recreational play with stunning coastal backdrops. The mild Mediterranean climate allows for extended playing seasons at seaside clay courts.",
        detailed_description: [
          "The ATP Croatia Open in Umag (mid-July) is the highlight of the tennis calendar, where you can watch world-class players on intimate courts just meters from the sea. Numerous resorts like the Falkensteiner Punta Skala feature professional tennis academies with programs for all ages and skill levels.",
          "Spring (April-May) and autumn (September-October) offer ideal playing conditions with temperatures of 18-24°C (64-75°F). Summer months can be hot for extended play, though early morning and evening sessions remain popular. Many historic clubs in Opatija date back to the Austro-Hungarian era, offering unique heritage playing experiences.",
        ],
        seasonal_guide: {
          spring:
            "Perfect conditions for training camps before peak heat (18-22°C)",
          summer:
            "Tournament season with evening matches to avoid daytime heat",
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
        ],
      },
      {
        id: 3,
        title: "Adventure Sports in Croatia's Wilderness",
        slug: "adventure-sports",
        category: "Outdoor Activities",
        description:
          "Croatia's diverse landscapes - from alpine mountains to karst canyons - create an adventure sports paradise. The country's eight national parks and eleven nature parks provide breathtaking backdrops for adrenaline-pumping activities year-round.",
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
      },
      {
        id: 4,
        title: "Croatian Football Culture",
        slug: "football",
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
      },
    ],
  };

  const { slug } = useParams();
  const sport = sportsData.sports.find((sport) => sport.slug === slug);

  if (!sport) {
    return <div className="text-center py-20">Sport not found</div>;
  }

  // Get the appropriate icon based on category
  const getCategoryIcon = () => {
    switch (sport.category) {
      case "Marine Activities":
        return <FaWater className="text-blue-500" />;
      case "Racket Sports":
        return <GiTennisBall className="text-green-500" />;
      case "Outdoor Activities":
        return <FaMountain className="text-brown-500" />;
      case "Spectator Sports":
        return <FaFutbol className="text-red-500" />;
      default:
        return <FaWater className="text-blue-500" />;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Hero Section with Background Image */}
      <div
        className="relative h-96 rounded-xl overflow-hidden mb-12"
        style={{
          backgroundImage: `url(${sport.images[0].url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <div className="inline-flex items-center justify-center mb-4">
              {getCategoryIcon()}
              <span className="ml-2 text-lg font-medium bg-white bg-opacity-20 px-3 py-1 rounded-full">
                {sport.category}
              </span>
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
          <h2 className="text-2xl font-bold mb-6">About {sport.title}</h2>
          <div className="space-y-6">
            {sport.detailed_description.map((paragraph, index) => (
              <p key={index} className="text-gray-700 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Vacation Tips */}
          {sport.vacation_tips && (
            <div className="mt-12">
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <FaLightbulb className="text-yellow-500 mr-2" />
                Vacation Tips
              </h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {sport.vacation_tips.map((tip, index) => (
                  <li
                    key={index}
                    className="bg-blue-50 p-4 rounded-lg flex items-start"
                  >
                    <span className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 shrink-0">
                      {index + 1}
                    </span>
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Locations */}
          {sport.locations && (
            <div className="mt-12">
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <FaMapMarkerAlt className="text-red-500 mr-2" />
                Top Locations
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {sport.locations.map((location, index) => (
                  <div
                    key={index}
                    className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="p-5">
                      <h3 className="font-bold text-lg mb-2">
                        {location.name}
                      </h3>
                      <p className="text-gray-600">{location.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Right Column - Seasonal Guide */}
        <div>
          <div className="bg-gray-50 p-6 rounded-xl sticky top-6">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <FaCalendarAlt className="text-purple-500 mr-2" />
              Seasonal Guide
            </h2>
            <div className="space-y-6">
              {sport.seasonal_guide && (
                <>
                  <div className="flex items-start">
                    <div className="bg-green-100 text-green-800 rounded-full w-10 h-10 flex items-center justify-center mr-4 shrink-0">
                      <FaLeaf />
                    </div>
                    <div>
                      <h3 className="font-bold">Spring</h3>
                      <p className="text-gray-600">
                        {sport.seasonal_guide.spring}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-yellow-100 text-yellow-800 rounded-full w-10 h-10 flex items-center justify-center mr-4 shrink-0">
                      <FaSun />
                    </div>
                    <div>
                      <h3 className="font-bold">Summer</h3>
                      <p className="text-gray-600">
                        {sport.seasonal_guide.summer}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-orange-100 text-orange-800 rounded-full w-10 h-10 flex items-center justify-center mr-4 shrink-0">
                      <FaUmbrellaBeach />
                    </div>
                    <div>
                      <h3 className="font-bold">Autumn</h3>
                      <p className="text-gray-600">
                        {sport.seasonal_guide.autumn}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-blue-100 text-blue-800 rounded-full w-10 h-10 flex items-center justify-center mr-4 shrink-0">
                      <FaSnowflake />
                    </div>
                    <div>
                      <h3 className="font-bold">Winter</h3>
                      <p className="text-gray-600">
                        {sport.seasonal_guide.winter}
                      </p>
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Gallery */}
            {sport.images && sport.images.length > 1 && (
              <div className="mt-12">
                <h2 className="text-2xl font-bold mb-6">Gallery</h2>
                <div className="grid grid-cols-2 gap-4">
                  {sport.images.slice(1).map((image, index) => (
                    <div key={index} className="rounded-lg overflow-hidden">
                      <img
                        src={image.url}
                        alt={image.alt}
                        className="w-full h-32 object-cover hover:scale-105 transition-transform"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SportsDetails;
