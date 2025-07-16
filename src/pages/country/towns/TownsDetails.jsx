import React from "react";
import { useParams, Link } from "react-router-dom";
import {
  FiMapPin,
  FiCalendar,
  FiClock,
  FiPhone,
  FiMail,
  FiGlobe,
  FiArrowLeft,
  FiShare2,
  FiHeart,
  FiCompass,
  FiHome,
  FiAnchor,
  FiCamera,
  FiUmbrella,
} from "react-icons/fi";

const TownsDetails = () => {
  const { slug } = useParams();

  const townsData = {
    towns: [
      {
        title: "Discover Dubrovnik: Pearl of the Adriatic",
        slug: "discover-dubrovnik",
        location: "Dubrovnik, Croatia",
        date: "May 15, 2023",
        duration: "3-5 days",
        summary:
          "Step into the timeless beauty of Dubrovnik – from ancient city walls to crystal-clear beaches, this UNESCO World Heritage site offers unforgettable Adriatic experiences.",
        description: [
          "Dubrovnik, often called the 'Pearl of the Adriatic', is a stunning walled city on Croatia's Dalmatian coast. Its remarkably preserved medieval architecture and dramatic seaside setting have made it one of Europe's most coveted destinations. The 2km-long city walls, completed in the 16th century, offer breathtaking views of orange rooftops and the sparkling Adriatic.",
          "Beyond the walls, discover Baroque churches, Renaissance fountains, and the elegant Stradun promenade. The city gained modern fame as King's Landing in Game of Thrones, with locations like Lovrijenac Fortress and Jesuit Staircase becoming pilgrimage sites for fans.",
          "For the best experience, visit early morning or late afternoon to avoid crowds. Take the cable car to Mount Srđ at sunset for panoramic views, then enjoy fresh seafood at restaurants like Proto or Nautika overlooking the harbor.",
        ],
        hero_image:
          "https://plus.unsplash.com/premium_photo-1661962737489-ee4b5ee6c0e2?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        content_images: [
          {
            url: "https://plus.unsplash.com/premium_photo-1661962737489-ee4b5ee6c0e2?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            alt: "Dubrovnik City Walls at sunset",
          },
          {
            url: "https://plus.unsplash.com/premium_photo-1661962524827-7e775b965cf8?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            alt: "Dubrovnik Old Town streets",
          },
          {
            url: "https://plus.unsplash.com/premium_photo-1661962742176-22e8199966ff?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            alt: "Dubrovnik harbor view",
          },
        ],
        contact: {
          phone: "+385 20 312 011",
          email: "info@visitdubrovnik.hr",
          website: "visitdubrovnik.hr",
          address: "Ul. Varda 5, 20000 Dubrovnik",
          coordinates: "42.6507° N, 18.0944° E",
        },
        highlights: [
          {
            title: "City Walls Walk",
            description:
              "2km circuit with panoramic views (entrance fee required)",
            icon: "walk",
          },
          {
            title: "Lovrijenac Fortress",
            description:
              "Impressive 11th-century fortress on a cliff (Game of Thrones location)",
            icon: "castle",
          },
          {
            title: "Mount Srđ Cable Car",
            description: "4-minute ride to 412m summit with breathtaking views",
            icon: "cablecar",
          },
          {
            title: "Lokrum Island",
            description:
              "Nature reserve with botanical garden and swimming spots (15min by boat)",
            icon: "island",
          },
        ],
        tags: [
          "UNESCO",
          "Game of Thrones",
          "Medieval",
          "Adriatic",
          "Historic",
          "Beaches",
        ],
        best_time: "May-June or September-October",
        transport: {
          airport: "Dubrovnik Airport (DBV) - 20km from city",
          bus: "Frequent connections from Split and other cities",
          ferry: "Connections to nearby islands and Montenegro",
        },
      },
      {
        title: "Rovinj: Istria's Romantic Seaside Gem",
        slug: "rovinj-istria",
        location: "Rovinj, Istria, Croatia",
        date: "June 2, 2023",
        duration: "2-3 days",
        summary:
          "A picturesque fishing town with pastel-colored houses tumbling down to the Adriatic, offering art galleries, seafood, and stunning sunsets.",
        description: [
          "Rovinj is Istria's most photogenic town, with its cluster of pastel-colored houses rising dramatically from the sea and crowned by the towering steeple of St. Euphemia's Basilica. Originally an island, it was connected to the mainland in 1763, creating the charming peninsula you see today.",
          "The car-free old town is a maze of cobbled streets leading up to the hilltop church, where you'll be rewarded with panoramic views of the archipelago's 22 islands. Don't miss the Batana Eco-Museum, celebrating Rovinj's traditional fishing boats, or the lively morning fish market.",
          "Art lovers will appreciate Rovinj's many galleries, including the Rovinj Heritage Museum and numerous private studios. For the best sunset views, head to the pier near Hotel Lone or Zlatni Rt forest park.",
        ],
        hero_image:
          "https://images.unsplash.com/photo-1604696772766-0e73c63babf3?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        content_images: [
          {
            url: "https://plus.unsplash.com/premium_photo-1666529076104-e9d8f838a458?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            alt: "Rovinj colorful houses",
          },
          {
            url: "https://images.unsplash.com/photo-1604696772766-0e73c63babf3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
            alt: "Rovinj harbor boats",
          },
          {
            url: "https://plus.unsplash.com/premium_photo-1751906599181-335e47327144?q=80&w=875&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            alt: "Rovinj sunset view",
          },
        ],
        contact: {
          phone: "+385 52 811 566",
          email: "tzg-rovinj@ri.t-com.hr",
          website: "tzgrovinj.hr",
          address: "Pina Budicina 12, 52210 Rovinj",
          coordinates: "45.0812° N, 13.6386° E",
        },
        highlights: [
          {
            title: "St. Euphemia's Basilica",
            description:
              "Baroque church with 60m bell tower offering panoramic views",
            icon: "church",
          },
          {
            title: "Golden Cape Forest Park",
            description:
              "Protected woodland with beaches, trails, and outdoor art",
            icon: "forest",
          },
          {
            title: "Rovinj Archipelago",
            description: "Boat trips to Red Island and other nearby islands",
            icon: "boat",
          },
          {
            title: "Batana Eco-Museum",
            description:
              "Celebrating Rovinj's traditional wooden fishing boats",
            icon: "museum",
          },
        ],
        tags: ["Romantic", "Art", "Seafood", "Istria", "Sunset", "Archipelago"],
        best_time: "June or September",
        transport: {
          airport: "Pula Airport (PUY) - 40km away",
          bus: "Regular connections from Pula (40min) and Poreč (30min)",
          boat: "Excursions to nearby islands and coastal towns",
        },
      },
      {
        title: "Zagreb: Croatia's Vibrant Capital",
        slug: "zagreb-capital",
        location: "Zagreb, Croatia",
        date: "July 10, 2023",
        duration: "2-4 days",
        summary:
          "Where Central European charm meets Mediterranean flair - museums, cafes, and Austro-Hungarian architecture in Croatia's cultural heart.",
        description: [
          "Zagreb combines the grandeur of Austro-Hungarian architecture with the laid-back vibe of Mediterranean cafe culture. The city is divided into Upper Town (Gornji Grad), the medieval core with its red-roofed buildings and church spires, and Lower Town (Donji Grad), a 19th-century planned district of parks and imposing buildings.",
          "Must-sees include the quirky Museum of Broken Relationships, St. Mark's Church with its colorful tiled roof, and the Dolac open-air market where farmers sell produce under red umbrellas. Ride the world's shortest funicular (66m) between the upper and lower towns, and enjoy the cafe culture along Tkalčićeva Street.",
          "Zagreb shines in winter with its famous Advent festival (voted best in Europe multiple times), but summer brings open-air concerts and the lakeside beaches at Jarun recreation area. Don't miss Mirogoj Cemetery, considered one of Europe's most beautiful burial grounds.",
        ],
        hero_image:
          "https://plus.unsplash.com/premium_photo-1661963323725-4824c9b5341f?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        content_images: [
          {
            url: "https://plus.unsplash.com/premium_photo-1733306449881-75a9120b082d?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            alt: "Zagreb cathedral",
          },
          {
            url: "https://images.unsplash.com/photo-1669577236554-2f8f5e7f27bb?q=80&w=450&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            alt: "Zagreb Dolac market",
          },
          {
            url: "https://plus.unsplash.com/premium_photo-1661949656871-400070bd9747?q=80&w=361&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            alt: "Zagreb Tkalčićeva street",
          },
        ],
        contact: {
          phone: "+385 1 481 4051",
          email: "info@zagreb-touristinfo.hr",
          website: "infozagreb.hr",
          address: "Trg bana Jelačića 11, 10000 Zagreb",
          coordinates: "45.8150° N, 15.9819° E",
        },
        highlights: [
          {
            title: "Museum of Broken Relationships",
            description:
              "Unique collection of personal objects from failed relationships",
            icon: "museum",
          },
          {
            title: "Dolac Market",
            description:
              "Zagreb's colorful main market under red umbrellas (mornings best)",
            icon: "market",
          },
          {
            title: "Mirogoj Cemetery",
            description: "Architectural masterpiece with arcades and domes",
            icon: "cemetery",
          },
          {
            title: "Jarun Lake",
            description: "Recreation area with beaches, sports, and nightlife",
            icon: "lake",
          },
        ],
        tags: [
          "Capital",
          "Culture",
          "Museums",
          "Cafes",
          "Architecture",
          "Markets",
        ],
        best_time: "April-May or September-October",
        transport: {
          airport: "Zagreb Airport (ZAG) - 17km from center",
          tram: "Efficient network covering the city",
          train: "Connections to Vienna, Budapest, and coastal cities",
        },
      },
    ],
  };

  const town = townsData.towns.find((t) => t.slug === slug);

  if (!town) return <div className="text-center py-20">Town not found</div>;

  // Icon mapping for highlights
  const iconMap = {
    walk: <FiCompass className="text-blue-600" />,
    castle: <FiHome className="text-blue-600" />,
    cablecar: <FiAnchor className="text-blue-600" />,
    island: <FiMapPin className="text-blue-600" />,
    church: <FiHome className="text-blue-600" />,
    forest: <FiCompass className="text-blue-600" />,
    boat: <FiAnchor className="text-blue-600" />,
    museum: <FiCamera className="text-blue-600" />,
    market: <FiUmbrella className="text-blue-600" />,
    cemetery: <FiHome className="text-blue-600" />,
    lake: <FiAnchor className="text-blue-600" />,
  };

  return (
    <div className="text-gray-800 bg-white">
      {/* Hero Section with Full BG Image */}
      <div className="relative h-screen max-h-[90vh]">
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/20 to-gray-900/60 z-10"></div>
        <img
          src={town.hero_image}
          alt={town.title}
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="relative z-20 h-full flex flex-col justify-end pb-16 px-8 md:px-16">
          <div className="max-w-4xl mx-auto">
            <div className="p-6 space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                {town.title}
              </h1>
              <div className="flex flex-wrap gap-4 text-white mb-4">
                <div className="flex items-center gap-2 bg-primary px-3 py-1 rounded-full">
                  <FiMapPin />
                  <span>{town.location}</span>
                </div>
                <div className="flex items-center gap-2 bg-primary px-3 py-1 rounded-full">
                  <FiCalendar />
                  <span>{town.date}</span>
                </div>
                <div className="flex items-center gap-2 bg-primary px-3 py-1 rounded-full">
                  <FiClock />
                  <span>{town.duration}</span>
                </div>
              </div>
              <p className="text-lg text-white mb-6">{town.summary}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Back button */}
      <div className="container mx-auto px-6 pt-8">
        <Link
          to="/croatia/historic-towns/"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
        >
          <FiArrowLeft className="mr-2" />
          Back to Towns
        </Link>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-12 max-w-6xl">
        {/* Description Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8 pb-4 border-b border-gray-200">
            About {town.location.split(",")[0]}
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              {town.description.map((para, index) => (
                <p
                  key={index}
                  className="text-lg leading-relaxed text-gray-700"
                >
                  {para}
                </p>
              ))}
            </div>
            <div className="rounded-xl overflow-hidden shadow-xl h-full">
              <img
                src={town.content_images[0].url}
                alt={town.content_images[0].alt}
                className="w-full h-full max-h-[400px] object-cover"
              />
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8 pb-4 border-b border-gray-200">
            Gallery
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {town.content_images.map((image, index) => (
              <div
                key={index}
                className="rounded-xl overflow-hidden shadow-lg h-64"
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

        {/* Highlights Section */}
        <section className="mb-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold mb-8 pb-4 border-b border-gray-200">
                Must-See Highlights
              </h2>
              <ul className="space-y-6">
                {town.highlights.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-4 p-4 hover:bg-gray-50 rounded-lg transition"
                  >
                    <div className="bg-blue-100 p-3 rounded-full mt-1 flex-shrink-0">
                      {iconMap[item.icon] || (
                        <FiMapPin className="text-blue-600" />
                      )}
                    </div>
                    <div>
                      <h3 className="font-bold text-xl mb-1 text-gray-900">
                        {item.title}
                      </h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="order-2 md:order-1 rounded-xl overflow-hidden shadow-xl h-full">
              <img
                src={town.content_images[1].url}
                alt={town.content_images[1].alt}
                className="w-full h-full max-h-[500px] object-cover"
              />
            </div>
          </div>
        </section>

        {/* Practical Info Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8 pb-4 border-b border-gray-200">
            Practical Information
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Best Time to Visit */}
            <div className="bg-blue-50 rounded-xl p-6">
              <h3 className="font-bold text-xl mb-4 flex items-center gap-2 text-blue-800">
                <FiCalendar className="text-blue-600" />
                Best Time to Visit
              </h3>
              <p className="text-gray-700">{town.best_time}</p>
            </div>

            {/* Transport */}
            <div className="bg-green-50 rounded-xl p-6">
              <h3 className="font-bold text-xl mb-4 flex items-center gap-2 text-green-800">
                <FiCompass className="text-green-600" />
                Getting There
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="font-medium">Airport:</span>
                  <span>{town.transport.airport}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-medium">Bus:</span>
                  <span>{town.transport.bus}</span>
                </li>
                {town.transport.ferry && (
                  <li className="flex items-start gap-2">
                    <span className="font-medium">Ferry:</span>
                    <span>{town.transport.ferry}</span>
                  </li>
                )}
                {town.transport.tram && (
                  <li className="flex items-start gap-2">
                    <span className="font-medium">Tram:</span>
                    <span>{town.transport.tram}</span>
                  </li>
                )}
              </ul>
            </div>

            {/* Tags */}
            <div className="bg-purple-50 rounded-xl p-6">
              <h3 className="font-bold text-xl mb-4 flex items-center gap-2 text-purple-800">
                <FiMapPin className="text-purple-600" />
                Tags
              </h3>
              <div className="flex flex-wrap gap-2">
                {town.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-white text-purple-800 rounded-full text-sm shadow-sm"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-gray-50 rounded-2xl p-8 md:p-12 shadow-inner">
          <h2 className="text-3xl font-bold mb-8 pb-4 border-b border-gray-200">
            Contact Information
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">
                Visitor Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <FiPhone className="text-blue-600 text-xl" />
                  </div>
                  <div>
                    <h4 className="font-medium text-lg mb-1">Phone</h4>
                    <a
                      href={`tel:${town.contact.phone}`}
                      className="text-blue-600 hover:underline"
                    >
                      {town.contact.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <FiMail className="text-blue-600 text-xl" />
                  </div>
                  <div>
                    <h4 className="font-medium text-lg mb-1">Email</h4>
                    <a
                      href={`mailto:${town.contact.email}`}
                      className="text-blue-600 hover:underline"
                    >
                      {town.contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <FiGlobe className="text-blue-600 text-xl" />
                  </div>
                  <div>
                    <h4 className="font-medium text-lg mb-1">Website</h4>
                    <a
                      href={`https://${town.contact.website}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      {town.contact.website}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Location Details</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <FiMapPin className="text-blue-600 text-xl" />
                  </div>
                  <div>
                    <h4 className="font-medium text-lg mb-1">Address</h4>
                    <p className="text-gray-700">{town.contact.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <FiCompass className="text-blue-600 text-xl" />
                  </div>
                  <div>
                    <h4 className="font-medium text-lg mb-1">Coordinates</h4>
                    <p className="text-gray-700">{town.contact.coordinates}</p>
                  </div>
                </div>

                {/* Map Embed */}
                {/* <div className="mt-4 rounded-xl overflow-hidden h-48 bg-gray-200">
                  <iframe
                    title={`${town.location} Map`}
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    style={{ border: 0 }}
                    src={`https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=${town.contact.address}`}
                    allowFullScreen
                  ></iframe>
                </div> */}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default TownsDetails;
