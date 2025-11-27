import React from "react";

// Importing all images from assets folder
import SpareParts1 from "../assets/SpareParts1.png";
import SpareParts2 from "../assets/SpareParts2.png";
import SpareParts3 from "../assets/Spareparts3.png";
import SpareParts4 from "../assets/SpareParts4.png";
import SpareParts5 from "../assets/SpareParts5.png";
import SpareParts6 from "../assets/SpareParts6.png";
import SpareParts7 from "../assets/SpareParts7.png";
import SpareParts8 from "../assets/SpareParts8.png";
import SpareParts9 from "../assets/SpareParts9.png";
import SpareParts10 from "../assets/SpareParts10.png";
import SpareParts11 from "../assets/SpareParts11.png";
import SpareParts12 from "../assets/SpareParts12.png";
import SpareParts13 from "../assets/SpareParts13.png";
import SpareParts14 from "../assets/SpareParts14.png";
import SpareParts15 from "../assets/SpareParts15.png";
import SpareParts16 from "../assets/SpareParts16.png";
import DarazLogo from "../assets/DarazLogo.png";

const spareParts = [
  {
    id: 1,
    img: SpareParts1,
    title:
      "Yamalube Sporty Premium 10W-40 SL/MA 4 Stroke Fully Synthetic Engine Oil (90793ADA800) For FZ-25",
  },
  {
    id: 2,
    img: SpareParts2,
    title:
      "Yamalube Sporty Premium 10W-40 – 4 Stroke Fully Synthetic Engine Oil 1L (90793ADA1700) For R15 and MT15",
  },
  {
    id: 3,
    img: SpareParts3,
    title:
      "Yamalube Optimum Performance Scooter Gear Oil, 100 ML (90793ABA0400) For Ray, Ray Z, Alpha & Fascino",
  },
  {
    id: 4,
    img: SpareParts4,
    title:
      "Yamalube On Road Chain Lube 120ML (90793D8Z200) For FZ, Fazer, R15, MT15",
  },
  {
    id: 5,
    img: SpareParts5,
    title:
      "Yamalube Front Fork Oil- 10W 175 ML (90793AD8200) All types of Motorcycles and Scooters",
  },
  {
    id: 6,
    img: SpareParts6,
    title:
      "Yamalube – Telescopic Front Fork Oil – 500 ML (90793AD80300) For All Motocycles & Scooters",
  },
  { id: 7, img: SpareParts7, title: "  Yamalube – 4 Stroke Motor Oil" },
  {
    id: 8,
    img: SpareParts8,
    title: "Yamalube On Road Chain Lube 120ML (90793D8Z200) For FZ, Fazer, R15",
  },
  { id: 9, img: SpareParts9, title: "Rear View Mirror Assy" },
  { id: 10, img: SpareParts10, title: "Yamaha - Race Kit Bearing" },
  { id: 11, img: SpareParts11, title: "Yamaha - Oil Seal" },
  { id: 12, img: SpareParts12, title: "Yamaha - CYL Piston Kit" },
  { id: 13, img: SpareParts13, title: "Yamaha - Chain Sprocket Kit" },
  { id: 14, img: SpareParts14, title: "Yamaha -  Brake Shoe" },
  {
    id: 15,
    img: SpareParts15,
    title:
      "Yamaha -Yamalube Optima – 10W-40 – SL/MA 900 ml (90793AD41500) For Saluto",
  },
  {
    id: 16,
    img: SpareParts16,
    title: "Yamalube Optima – 10W-40 SL/MB 900ML (90793AD41900) For Aerox",
  },
];

export default function SpareParts() {
  return (
    <div className="w-full bg-gray-900 py-10 px-4">
      {/* Page Title */}
      <div className="max-w-6xl mx-auto text-center mb-10">
        <h1 className="text-3xl text-gray-200 font-bold">
          Yamaha Genuine Spare Parts
        </h1>
        <p className="text-gray-200 mt-3">
          Yamaha Genuine Spare Parts are designed, manufactured and tested
          according to Yamaha's high standards for maximum performance and
          durability.
        </p>
      </div>

      {/* Spare Parts Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {spareParts.map((item) => (
          <div
            key={item.id}
            className="bg-gray-200 shadow-md rounded-md p-3 flex flex-col items-center"
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-48 object-contain"
            />
            <p className="text-sm text-center mt-3">{item.title}</p>
          </div>
        ))}
      </div>

      {/* Daraz Section */}
      <div className="max-w-6xl mx-auto text-center mt-16">
        <h2 className="text-xl text-gray-200 font-semibold mb-4">
          We are now available in:
        </h2>
        <div className="flex justify-center">
          <img src={DarazLogo} alt="Daraz Logo" className="w-40" />
        </div>
      </div>
    </div>
  );
}
