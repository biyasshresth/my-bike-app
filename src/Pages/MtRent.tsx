 import RentalMt1 from "../assets/RentalMt1.png";
import LogoYamaha from "../assets/LogoYamaha.png";
import React, { useEffect, useState } from "react";
export default function YamahaMT15Rental() {
   useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  return (
    <div className="w-full min-h-screen bg-gray-900 flex justify-center py-10 px-4">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10">
        {/* LEFT IMAGE SECTION */}
        <div className="relative w-full">
          <img
            src={RentalMt1}
            alt="Yamaha MT-15 Rental"
            className="w-full rounded-lg shadow-md object-cover"
          />

          {/* Overlay Text (Bottom Left) */}
          <div className="absolute bottom-10 left-6 bg-gray-900 text-white px-4 py-2 rounded-md text-center">
            <p className="text-sm">RIDE OFF FROM</p>
            <p className="text-2xl font-bold">$21.6/DAY</p>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <h1 className="text-3xl font-bold text-white">Yamaha MT15</h1>
            <img
              src={LogoYamaha}
              alt="Yamaha Logo"
              className="w-20 h-20 object-contain"
            />
          </div>

          <p className="text-orange-500 text-2xl font-semibold">$35.00</p>
          <p className="font-semibold text-gray-200">YAMAHA MT 155</p>
          <p className="font-semibold text-gray-200">
            ***RIDING TO MALAYSIA IS NOW APPROVED***
          </p>

          <div className="flex flex-col gap-2 mt-2 text-gray-200">
            <p>🔥 Rent With Us Now!</p>
            <p>🏁 Competitive Pricing Across Our Fleet!</p>
            <p>📅 2021/2022 Registered Bikes!</p>
            <p>🛡️ Commercial Insurance Covered*</p>
            <p>🅿️ P-Plate Riders Welcome</p>
            <p>🔧 Maintenance / Servicing Covered*</p>
          </div>

          <p className="text-gray-200 mt-4 font-semibold">
            Check Our Profile for Pricing Details!
          </p>

          <p className="text-gray-200 leading-relaxed mt-2">
            Our motorcycles and motor scooters are undoubtedly one of the newest
            in Singapore’s rental scene. Not only do we maintain the bikes
            regularly, but we also ensure that our bikes are squeaky clean
            before every hand-over. With hundreds of customers who are more than
            satisfied with our bikes and service, we will ensure that you will
            experience the same too! Our latest directive has allowed our bikes
            to be used commercially, as well as ridden across the Causeway /
            Second Link to Johor!
          </p>
        </div>
      </div>
    </div>
  );
}
