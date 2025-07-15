import React from "react";
import {
  FiHome,
  FiShield,
  FiMapPin,
  FiHeart,
  FiStar,
  FiUmbrella,
  FiAnchor,
  FiCoffee,
} from "react-icons/fi";

const Support = () => {
  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            <span className="text-primary">Vacation in Croatia</span> with Home
            Rent
          </h1>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-600 mb-8">
              Treat yourself with a perfect vacation in Croatia and book a
              luxury villa with HomeRent. Choose the best luxury villas and
              enjoy beautiful Croatia, whether you are in a luxury villa by the
              sea, on the coast, or in the hinterland.
            </p>
          </div>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Left Column */}
          <div>
            <div className="flex items-start mb-8">
              <div className="bg-[#25A69A]/10 p-3 rounded-full mr-4">
                <FiHome className="text-2xl text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Luxury Villas
                </h3>
                <p className="text-gray-600">
                  Croatia is beautiful in its diversity and offers everyone the
                  opportunity for a perfect dream vacation. On Home Rent
                  website, Croatian holiday homes offer you everything you might
                  want, such as a swimming pool, gym, sauna, jacuzzi, luxury
                  equipment, and much more.
                </p>
              </div>
            </div>

            <div className="flex items-start mb-8">
              <div className="bg-[#25A69A]/10 p-3 rounded-full mr-4">
                <FiShield className="text-2xl text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Safe & Easy Booking
                </h3>
                <p className="text-gray-600">
                  Booking a luxury villa has never been easier and safer with
                  Home Rent. Guaranteed quality of service and security of
                  payment when booking our holiday homes.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-[#25A69A]/10 p-3 rounded-full mr-4">
                <FiStar className="text-2xl text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Premium Services
                </h3>
                <p className="text-gray-600">
                  Enjoy the luxury and privacy of our unique holiday homes in
                  Croatia with additional services provided by our property
                  partners, such as daily cleaning services, cooking,
                  excursions, private transfers, and more.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Image Card */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden h-full">
            <div className="p-8 h-full flex flex-col">
              <div className="flex items-center mb-6">
                <div className="bg-[#25A69A]/10 p-2 rounded-full mr-3">
                  <FiHeart className="text-xl text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">
                  Home Rent - best vacation rental website
                </h2>
              </div>
              <p className="text-gray-600 mb-6">
                Home Rent is one of the best vacation rental websites for
                booking holiday homes. It is very important for us to provide
                you with all the information related to your vacation in
                Croatia, safe reservations and affordable prices for booking
                Holiday home in Croatia. Discover Croatia with HomeRent.
              </p>
              <div className="mt-auto bg-gray-100/50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                  <FiMapPin className="text-primary mr-2" />
                  Holiday homes in Croatia
                </h3>
                <p className="text-gray-600 text-sm">
                  Holiday homes for everyone's choice. Destination Croatia. Book
                  a holiday home in Croatia with Home Rent Agency. Crystal clear
                  Adriatic sea, beautiful beaches, historic cities, kind people,
                  Mediterranean food, excellent wines and beautiful holiday
                  homes Croatia are all you need for a perfect holiday.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="bg-[#25A69A]/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <FiUmbrella className="text-xl text-primary" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              Beachfront Locations
            </h3>
            <p className="text-gray-600 text-sm">
              Stunning villas with direct access to Croatia's beautiful beaches
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="bg-[#25A69A]/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <FiAnchor className="text-xl text-primary" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              Private Marinas
            </h3>
            <p className="text-gray-600 text-sm">
              Many properties offer private docks for your boat
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="bg-[#25A69A]/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <FiCoffee className="text-xl text-primary" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              Local Experiences
            </h3>
            <p className="text-gray-600 text-sm">
              Authentic Croatian dining and cultural experiences
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="bg-[#25A69A]/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <FiStar className="text-xl text-primary" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              Verified Quality
            </h3>
            <p className="text-gray-600 text-sm">
              All properties personally inspected for quality assurance
            </p>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center bg-gradient-to-r from-[#25A69A]/10 to-blue-50 p-8 rounded-2xl">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Holidays in Croatia with{" "}
            <span className="text-primary">HomeRent</span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto mb-6">
            Croatia is one of the most beautiful European countries, and the
            Home Rent agency invites you to discover this magnificent country.
            Natural beauty, beautiful beaches, friendly hosts and amazing sea.
            Croatia has it all. Book HomeRent vacation homes and enjoy a perfect
            vacation.
          </p>
          <button className="bg-primary hover:bg-primary text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300">
            Book Your Dream Villa Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Support;
