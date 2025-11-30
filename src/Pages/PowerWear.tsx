import YamahaStyle from "../assets/YamahaStyle.png";
import React, { useEffect, useState } from "react";
export default function PowerWear() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="w-full min-h-screen bg-gray-900 text-white flex justify-center py-4 px-4">
      <div className="max-w-4xl w-full">
        {/* IMAGE SECTION */}
        <div className="w-full flex justify-center mb-8">
          <img
            src={YamahaStyle}
            alt="Yamaha MT-15 Riding Jacket Offer"
            className="w-full max-w-4xl rounded-lg shadow-lg"
          />
        </div>

        {/* BUTTON */}
        <div className="flex justify-start mb-6">
          <a
            href="https://yamaha-motor.com/shop/gear?srsltid=AfmBOopbBNmrK32gtbhqbq-TXDxkZtZfLwRSfWHypZhRoqsdyEPr8ag2"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-5 rounded-lg transition"
          >
            Buy Now
          </a>
        </div>

        {/* HEADING 1 */}
        <h2 className="text-xl sm:text-2xl font-bold mb-4">
          Yamaha Nepal Launches Exclusive Riding Jacket Offer for MT-15 Version
          2 Buyers Nationwide
        </h2>

        {/* FEATURES LIST */}
        <ul className="list-disc list-inside text-gray-300 mb-6 leading-7">
          <li>
            High-quality Premium Riding Jacket developed in collaboration with
            Kivor.
          </li>
          <li>Available for MT-15 V2 buyers via cash or financing.</li>
          <li>Premium finishing, durability, and safety.</li>
          <li>Exclusive for Grey and Blue variants.</li>
          <li>Enhances the rider experience on and off the road.</li>
          <li>Value-added benefit emphasized by the CEO of MAW Rides.</li>
        </ul>

        {/* HEADING 2 */}
        <h2 className="text-xl sm:text-2xl font-bold mb-4">
          Gear Up in Style: Exclusive Premium Riding Jacket Offer for MT-15
          Version 2 Buyers
        </h2>

        <ul className="list-disc list-inside text-gray-300 mb-6 leading-7">
          <li>
            <strong>Eligibility:</strong> Only for MT-15 V2 Grey & Blue buyers.
          </li>
          <li>Helps manage inventory and highlight popular colors.</li>
          <li>Supports Yamaha Nepal’s focus on customer satisfaction.</li>
          <li>Reinforces Yamaha’s commitment to value-added ownership.</li>
        </ul>
      </div>
    </div>
  );
}
