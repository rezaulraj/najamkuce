import React, { useState } from "react";
import {
  FaUser,
  FaHome,
  FaPhone,
  FaEnvelope,
  FaClock,
  FaPaperPlane,
} from "react-icons/fa";

const ContactForm = () => {
  const [activeTab, setActiveTab] = useState("guests");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    serviceDate: "",
    guests: 1,
    budget: "",
    groupComposition: "",
    otherWishes: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="md:flex">
            {/* Left Side - Form */}
            <div className="md:w-1/2 p-8 md:p-12">
              <div className="flex border-b border-gray-200 mb-8">
                <button
                  className={`py-3 px-6 font-medium text-lg flex items-center ${
                    activeTab === "guests"
                      ? "text-primary border-b-2 border-primary"
                      : "text-gray-500"
                  }`}
                  onClick={() => setActiveTab("guests")}
                >
                  <FaUser className="mr-2" />
                  Guests
                </button>
                <button
                  className={`py-3 px-6 font-medium text-lg flex items-center ${
                    activeTab === "owners"
                      ? "text-primary border-b-2 border-primary"
                      : "text-gray-500"
                  }`}
                  onClick={() => setActiveTab("owners")}
                >
                  <FaHome className="mr-2" />
                  Owners
                </button>
              </div>

              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Send us a Message
              </h2>

              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-gray-700 mb-2">
                      Your first name
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="First name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">
                      Your last name
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Last name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-gray-700 mb-2">
                      Your Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">
                      Your Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Phone"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-gray-700 mb-2">
                    Date for Service
                  </label>
                  <input
                    type="date"
                    name="serviceDate"
                    value={formData.serviceDate}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                {activeTab === "guests" && (
                  <>
                    <div className="mb-6">
                      <label className="block text-gray-700 mb-2">Guests</label>
                      <select
                        name="guests"
                        value={formData.guests}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      >
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                          <option key={num} value={num}>
                            {num} guest{num !== 1 ? "s" : ""}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="mb-6">
                      <label className="block text-gray-700 mb-2">
                        Tell us a bit more about your travel plans...
                      </label>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-gray-600 text-sm mb-1">
                            Accommodation budget
                          </label>
                          <input
                            type="text"
                            name="budget"
                            value={formData.budget}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                          />
                        </div>
                        <div>
                          <label className="block text-gray-600 text-sm mb-1">
                            Group composition (adults+children, ages of
                            children)
                          </label>
                          <input
                            type="text"
                            name="groupComposition"
                            value={formData.groupComposition}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                          />
                        </div>
                        <div>
                          <label className="block text-gray-600 text-sm mb-1">
                            Other wishes
                          </label>
                          <input
                            type="text"
                            name="otherWishes"
                            value={formData.otherWishes}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                          />
                        </div>
                      </div>
                    </div>
                  </>
                )}

                <div className="mb-6">
                  <label className="block text-gray-700 mb-2">
                    Your message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary text-white font-bold py-3 px-4 rounded-lg transition duration-300 flex items-center justify-center"
                >
                  <FaPaperPlane className="mr-2" />
                  {activeTab === "guests" ? "Send Inquiry" : "Contact Us"}
                </button>
              </form>
            </div>

            {/* Right Side - Contact Info */}
            <div className="md:w-1/2 bg-blue-50 p-8 md:p-12">
              <div className="space-y-10">
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                    <FaUser className="text-primary mr-2" />
                    Guest Service
                  </h3>
                  <p className="text-gray-600 mb-2">Inquiries & bookings</p>
                  <p className="text-gray-600 mb-4 flex items-center">
                    <FaClock className="mr-2 text-primary" />
                    Mon-Sat 8-20 (CET)
                  </p>
                  <p className="text-gray-800 font-medium flex items-center">
                    <FaPhone className="mr-2 text-primary" />
                    +385 (0) 95 816 9064
                  </p>
                  <p className="text-gray-800 font-medium flex items-center">
                    <FaEnvelope className="mr-2 text-primary" />
                    info@homerent.agency
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                    <FaPhone className="text-primary mr-2" />
                    Traveler Assistance
                  </h3>
                  <p className="text-gray-600 mb-2">For guests on the villas</p>
                  <p className="text-gray-600 mb-4 flex items-center">
                    <FaClock className="mr-2 text-primary" />
                    Open 24/7
                  </p>
                  <p className="text-gray-800 font-medium flex items-center">
                    <FaPhone className="mr-2 text-primary" />
                    +385 (0) 95 816 9064
                  </p>
                  <p className="text-gray-800 font-medium flex items-center">
                    <FaEnvelope className="mr-2 text-primary" />
                    info@homerent.agency
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    HEROS PLUS d.o.o.
                  </h3>
                  <p className="text-gray-600 mb-1">ID: HR-AB-21-060339532</p>
                  <p className="text-gray-600 mb-1">Mike Tripala 10, Split</p>
                  <p className="text-gray-600">HR-21000 Croatia</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
