import React from "react";
import ExpServiceLogo from "../assets/ExpService.png";

const ServiceBooking = () => {
  return (
    <>
      <div className="bg-gray-900 min-h-screen p-8">
        {/* Header Section */}
        <div className="flex flex-col items-center mb-8">
          <img
            src={ExpServiceLogo}
            alt="Yamaha Express Service"
            className="w-auto h-40 mb-4"
          />
          <h1 className="lg:text-2xl sm:text-xl text-blue-300 font-bold">
            BOOK YOUR SERVICE ONLINE
          </h1>
          <p className="text-sm italic text-gray-200 mt-5">
            "We Value Your Time"
          </p>
        </div>

        {/* Description */}
        <div className="min-w-4xl sm:max-w-xl md:px-56 sm:px-2 text-center text-gray-200 mb-10 sm:mb-2">
          <p>
            <strong>Yamaha Express Service (YES)</strong> is a program offered
            by Yamaha Nepal that provides convenient maintenance and repair
            services for Yamaha motorcycles and scooters. The program is
            designed to help Yamaha owners to book service online as per their
            convenient time slot. It will reduce the waiting period at service
            center and will save the time of customers to attend their
            motorcycle and scooter during booked time slot. Customers can visit
            Yamaha Nepal website to book their service at nearest service
            center. The Yamaha Express Service program is available at selected
            Yamaha dealerships across Nepal and the vision is to provide this
            service all over Nepal very soon.
          </p>
          <br />
          <div className=" text-center  text-gray-200 mb-10">
            {" "}
            <p>
              Customers can visit the Yamaha Nepal website to book their service
              at the nearest authorized service center. The Yamaha Express
              Service program is available at selected Yamaha dealerships across
              Nepal, and the vision is to expand this service nationwide soon.
            </p>
          </div>
        </div>

        <h1 className="text-2xl px-20 text-blue-300 font-bold">
          FILL FORM TO BOOK
        </h1>

        {/* Form and Time Slots */}
        <div className="flex flex-col lg:flex-row gap-10 max-w-6xl mx-auto">
          {/* Form */}
          <div className="bg-gray-900 border-[0.5px] p-6 rounded-xl shadow-md flex-1">
            <h2 className="font-bold text-white flex justify-center text-lg mb-6">
              YAMAHA EXPRESS SERVICE REQUEST
            </h2>

            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Full Name */}
              <div className="flex flex-col">
                <input
                  type="text"
                  placeholder="Full Name *"
                  className="border rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Mobile Number */}
              <div className="flex flex-col">
                <input
                  type="text"
                  placeholder="Mobile Number *"
                  className="border rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Email */}
              <div className="flex flex-col overflow-hidden">
                <input
                  type="email"
                  placeholder="Email Address *"
                  className="border rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Profession */}
              <div className="flex flex-col overflow-hidden">
                <select
                  aria-label="Select Profession"
                  id="profession"
                  name="profession"
                  className="border rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select Profession</option>
                  <option value="student">Student</option>
                  <option value="engineer">Engineer</option>
                  <option value="business">Business</option>
                </select>
              </div>

              {/* Model */}
              <div className="flex flex-col">
                <select
                  aria-label="Select Profession"
                  className="border rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select Model</option>
                  <option value="modelA">Mt-15 Bs4</option>
                  <option value="modelB">Mt-15 Bs6</option>
                </select>
              </div>

              {/* Preferred Date */}
              <div className="flex flex-col">
                <input
                  aria-label="Select date"
                  id="customerDate"
                  type="date"
                  className="border rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Service Location */}
              <div className="flex flex-col">
                <select
                  aria-label="Select Location"
                  id="Location"
                  name="Location"
                  className="border rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select Location</option>
                  <option value="Tripureshwor">Tripureshwor</option>
                  <option value="Kantipath">Kantipath</option>
                  <option value="Thapathali">Thapathali</option>
                </select>
              </div>

              {/* Time Slot */}
              <div className="flex flex-col">
                <select
                  aria-label="Select Time"
                  id="timeSlot"
                  className="border rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select Time Slot</option>
                  <option value="1_30_4_00">1:30 PM - 4:00 PM</option>
                  <option value="4_00_4_30">4:00 PM - 4:30 PM</option>
                </select>
              </div>
            </form>
          </div>

          {/* Available Time Slots */}
          <div className="bg-gray-900 border-[0.5px] p-6 rounded-xl shadow-md w-full lg:w-1/3">
            <h2 className="font-bold text-white text-lg mb-4">
              Aavailable time slot in all service centers
            </h2>
            <input
              type="date"
              defaultValue="2025-11-13"
              aria-label="Select Date"
              className="border border-gray-100 rounded px-3 py-2 mb-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="overflow-y-auto max-h-64">
              <table className="w-full border border-gray-900 text-left">
                <thead className="bg-gray-400">
                  <tr>
                    <th className="px-3 py-2 border">Service Center</th>
                    <th className="px-3 py-2 border">Time Slots</th>
                    <th className="px-3 py-2 border">No of Days</th>
                  </tr>
                </thead>
                <tbody className="bg-gray-200">
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
    </>
  );
};

export default ServiceBooking;
