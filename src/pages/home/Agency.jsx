import React from "react";
import { FiDollarSign, FiShield, FiAward } from "react-icons/fi";
import agency1 from "../../assets/home/ag1.svg";
import agency2 from "../../assets/home/ag2.svg";
import agency3 from "../../assets/home/ag3.svg";

const Agency = () => {
  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 border-t border-b border-primary">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            <span className="text-[#25A69A]">From luxury to simplicity</span>
          </h2>
          <h3 className="text-2xl text-gray-700 mb-6">Home Rent Agency</h3>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto">
            From luxury to simplicity. On this site you can find everything you
            need to book your perfect holidays in Croatia. Home Rent is a part
            of Heros plus d.o.o. and since 2016 we provide the best quality
            services to our guests.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <p className="text-gray-700">
              With us, your booking and vacation in Croatia are safe and easy.
              We ensure you have the best price for booking holiday homes in
              Croatia. For us, it is very important that you have safe and
              perfect holidays in Croatia.
            </p>
            <p className="text-gray-700">
              Book our villa and let your dream vacation in Croatia begin with
              HomeRent.
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Best Price Card */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="p-6">
                <div className="flex justify-center mb-4">
                  <div className="bg-[#25A69A]/10 p-4 rounded-full">
                    <FiDollarSign className="text-3xl text-[#25A69A]" />
                  </div>
                </div>
                <img
                  src={agency1}
                  alt="Best Price"
                  className="h-16 mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold text-center text-gray-900 mb-2">
                  Best Price
                </h3>
                <p className="text-gray-600 text-center text-sm">
                  Guaranteed lowest prices for all our properties
                </p>
              </div>
            </div>

            {/* Safe Booking Card */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="p-6">
                <div className="flex justify-center mb-4">
                  <div className="bg-[#25A69A]/10 p-4 rounded-full">
                    <FiShield className="text-3xl text-[#25A69A]" />
                  </div>
                </div>
                <img
                  src={agency2}
                  alt="Safe Booking"
                  className="h-16 mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold text-center text-gray-900 mb-2">
                  Safe Booking
                </h3>
                <p className="text-gray-600 text-center text-sm">
                  Secure transactions and verified properties
                </p>
              </div>
            </div>

            {/* Quality Guarantee Card */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="p-6">
                <div className="flex justify-center mb-4">
                  <div className="bg-[#25A69A]/10 p-4 rounded-full">
                    <FiAward className="text-3xl text-[#25A69A]" />
                  </div>
                </div>
                <img
                  src={agency3}
                  alt="Quality Guarantee"
                  className="h-16 mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold text-center text-gray-900 mb-2">
                  Quality Guarantee
                </h3>
                <p className="text-gray-600 text-center text-sm">
                  Premium properties with verified quality standards
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Agency;
