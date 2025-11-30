import ExpServiceLogo from "../assets/ExpService.png";
import YamahaBg from "../assets/YamahaBg.png";
 import React, { useEffect, useState } from "react";
const ServiceBooking = () => {
  useEffect(() => {
          window.scrollTo(0, 0);
        }, []);
  return (
    <div className="bg-gray-900 min-h-screen px-4 py-2">
      {/* Header with background image */}
      <div className="relative w-full h-64 sm:h-80 md:h-96 flex items-center justify-center text-center overflow-hidden rounded-xl">
        <img
          src={YamahaBg}
          alt="Yamaha Background"
          className="absolute inset-0 w-full h-full object-cover blur-md"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        <div className="relative z-10 flex flex-col items-center">
          <img
            src={ExpServiceLogo}
            alt="Yamaha Express Service"
            className="h-24 sm:h-32 md:h-40 w-auto mb-4"
          />
          <h1 className="text-xl sm:text-2xl md:text-3xl text-black font-bold">
            BOOK YOUR SERVICE ONLINE
          </h1>
          <p className="text-sm sm:text-base italic text-gray-200 mt-2">
            "We Value Your Time"
          </p>
        </div>
      </div>

      {/* Description */}
      <div className="max-w-3xl mx-auto text-gray-200 text-center mb-10 px-2 py-7">
        <p>
          Yamaha Express Service (YES) is a program offered by Yamaha Nepal that
          provides convenient maintenance and repair services for Yamaha
          motorcycles and scooters. The program is designed to help Yamaha
          owners book service online as per their convenient time slot. It will
          reduce the waiting period at service center and will save the time of
          customers to attend their motorcycle and scooter during booked time
          slot.
        </p>
        <p className="mt-4">
          Customers can visit the Yamaha Nepal website to book their service at
          the nearest authorized service center. The Yamaha Express Service
          program is available at selected Yamaha dealerships across Nepal, and
          the vision is to expand this service nationwide soon.
        </p>
      </div>

      <h1 className="text-xl sm:text-2xl text-center text-blue-300 font-bold mb-6">
        FILL FORM TO BOOK
      </h1>

      {/* Form + Table Wrapper */}
      <div className="flex flex-col lg:flex-row gap-10 max-w-6xl mx-auto">
        {/* Form Section */}
        <div className="bg-gray-800 border border-gray-700 p-6 rounded-xl shadow-md flex-1">
          <h2 className="font-bold text-white text-center text-lg mb-6">
            YAMAHA EXPRESS SERVICE REQUEST
          </h2>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <label className="flex flex-col text-white">
              Full Name *
              <input
                type="text"
                placeholder="Full Name text-white"
                className="border rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 mt-1 text-black"
              />
            </label>

            <label className="flex flex-col text-white">
              Mobile Number *
              <input
                type="text"
                className="border rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 mt-1 text-black"
              />
            </label>

            <label className="flex flex-col text-white">
              Email Address *
              <input
                type="email"
                className="border rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 mt-1 text-black"
              />
            </label>

            <label className="flex flex-col text-white">
              Profession
              <select className="border rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 mt-1 text-black">
                <option value="">Select Profession</option>
                <option value="student">Student</option>
                <option value="engineer">Engineer</option>
                <option value="business">Business</option>
              </select>
            </label>

            <label className="flex flex-col text-white">
              Model
              <select className="border rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 mt-1 text-black">
                <option value="">Select Model</option>
                <option value="modelA">Mt-15 Bs4</option>
                <option value="modelB">Mt-15 Bs6</option>
              </select>
            </label>

            <label className="flex flex-col text-white">
              Preferred Date
              <input
                type="date"
                className="border rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 mt-1 text-black"
              />
            </label>

            <label className="flex flex-col text-white">
              Location
              <select className="border rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 mt-1 text-black">
                <option value="">Select Location</option>
                <option value="Tripureshwor">Tripureshwor</option>
                <option value="Kantipath">Kantipath</option>
                <option value="Thapathali">Thapathali</option>
              </select>
            </label>

            <label className="flex flex-col text-white">
              Time Slot
              <select className="border rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 mt-1 text-black">
                <option value="">Select Time Slot</option>
                <option value="1_30_4_00">1:30 PM - 4:00 PM</option>
                <option value="4_00_4_30">4:00 PM - 4:30 PM</option>
              </select>
            </label>
          </form>
        </div>

        {/* Time Slot Table */}
        <div className="bg-gray-800 border border-gray-700 p-6 rounded-xl shadow-md w-full lg:w-1/3">
          <h2 className="font-bold text-white text-lg mb-4 ">
            Available time slot in all service centers
          </h2>

          <label className="flex flex-col mb-4 text-white">
            Date
            <input
              type="date"
              defaultValue="2025-11-13"
              className="border rounded px-3 py-2 w-full focus:ring-2 focus:ring-blue-500 mt-1 text-black"
            />
          </label>

          <div className="overflow-y-auto max-h-64">
            <table className="w-full border border-gray-700 text-left text-sm">
              <thead className="bg-gray-600 text-white">
                <tr>
                  <th className="px-3 py-2 border">Service Center</th>
                  <th className="px-3 py-2 border">Time Slots</th>
                  <th className="px-3 py-2 border">No of Days</th>
                </tr>
              </thead>
              <tbody className="bg-gray-200 text-black">
                <tr>
                  <td className="px-3 py-2 border">Kantipath</td>
                  <td className="px-3 py-2 border">1:30PM-4:00PM</td>
                  <td className="px-3 py-2 border">1</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 border">Kantipath</td>
                  <td className="px-3 py-2 border">4:00PM-4:30PM</td>
                  <td className="px-3 py-2 border">1</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceBooking;
