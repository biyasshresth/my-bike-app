import React, { useState, useEffect } from "react";
import Img1 from "../assets/MtvtwoModel.png";
import Img2 from "../assets/MtvtwoModel1.png";
import Img3 from "../assets/MtvtwoModel2.png";
import Img4 from "../assets/MtvtwoModel4.png";
import Yamahav2 from "../assets/YamahaV2.mp4";
const V2Model = () => {
  const images = [Img1, Img2, Img3, Img4];
  const [current, setCurrent] = useState(0);

  const nextImage = () => setCurrent((prev) => (prev + 1) % images.length);
  const prevImage = () =>
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [images.length]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center px-4 py-10 font-sans">
      {/* Image Carousel */}
      <div className="relative w-full flex justify-center max-w-4xl h-80 sm:h-96 bg-black rounded-2xl overflow-hidden shadow-lg">
        <img
          src={images[current]}
          alt="Yamaha Mt 15"
          className="w-auto h-auto object-contain flex shrink-0 transition-all duration-700 ease-in-out"
        />
        <button
          type="button"
          onClick={prevImage}
          className="absolute left-3 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-40 hover:bg-opacity-70 text-white px-3 py-2 rounded-full"
        >
          ❮
        </button>
        <button
          type="button"
          onClick={nextImage}
          className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-40 hover:bg-opacity-70 text-white px-3 py-2 rounded-full"
        >
          ❯
        </button>
      </div>

      {/* Main Content */}
      <div className=" w-full max-w-4xl mt-10 space-y-10">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b pb-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">
              Yamaha Mt 15 BS4
            </h1>
            <p className="text-lg text-gray-600 mt-1">
              2024 Last Model • 1st Owner
            </p>
          </div>
          <div className="text-right mt-4 sm:mt-0">
            <p className="text-2xl font-semibold text-orange-600">
              ₹ Rs 5,57,900
            </p>
          </div>
        </div>
        {/* Description + General Info  */}
        <section className="w-full max-w-4xl mt-8 grid sm:grid-cols-2 gap-6">
          {/* Description */}
          <div>
            <h2 className="text-xl font-semibold text-gray-100 mb-3">
              📝 Description
            </h2>
            <div className="bg-black text-white rounded-xl p-5 leading-relaxed shadow-sm">
              <ul className="space-y-1 list-disc list-inside">
                <li>MT 15 (Like new)</li>
                <li>Very fresh condition</li>
                <li>No any problem</li>
                <li>New tyres recently installed</li>
                <li>2021 last model</li>
                <li>1st hand bike</li>
              </ul>
            </div>
          </div>

          {/* General Information */}
          <div>
            <h2 className="text-xl font-semibold mb-3">
              📍 General Information
            </h2>
            <div className="bg-black text-white rounded-xl p-5 grid gap-y-2 shadow-sm">
              <p>
                <span className="font-semibold">AD ID:</span> HB-C17DA4
              </p>
              <p>
                <span className="font-semibold">Location:</span> Imadol -
                Tikathali, Mahalaxmi-03, Lalitpur
              </p>
              <p>
                <span className="font-semibold">Delivery:</span> Not Available
              </p>
              <p>
                <span className="font-semibold">Negotiable:</span> Yes
              </p>
              <p>
                <span className="font-semibold">Ads Posted:</span> 1 year ago
              </p>
              <p>
                <span className="font-semibold">Ads Expiry:</span> 2024-11-07
              </p>
            </div>
          </div>
        </section>
        {/* VIDEO SECTION */}
        <div className="w-full max-w-5xl mt-16 mb-20 mx-auto flex flex-col md:flex-row gap-8">
          {/* Video */}
          <div className="flex-1 rounded-2xl overflow-hidden shadow-lg border border-gray-700 h-10 md:h-80">
            <video
              src={Yamahav2}
              autoPlay
              loop
              muted
              className="w-full h-full object-cover"
            />
          </div>

          {/* Video Description */}
          <div className="flex-1 flex flex-col justify-start space-y-4 px-2">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-orange-500">
              MT-15 BS4 Highlights
            </h2>
            <p className="text-gray-300 leading-relaxed">
              This modified MT-15 BS4 offers enhanced visuals and performance,
              delivering a bold and aggressive streetfighter stance. Crafted for
              riders who prefer unique styling and premium road presence.
            </p>
            <ul className="text-gray-200 list-disc list-inside space-y-1">
              <li>Streetfighter Custom Bodywork</li>
              <li>Upgraded LED Headlight & Indicators</li>
              <li>Sharper Exhaust Tone</li>
              <li>Premium Graphics & Detailing</li>
              <li>Sporty Riding Posture</li>
            </ul>
          </div>
        </div>
        {/* NOTE SECTION */}
        <section className="max-w-screen  border-gray-200 mx-auto lg:py-10 px-4 sm:px-16 lg:px-12 text-center text-sm bg-gray-900 text-white/70 space-y-6 leading-relaxed mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold">Note</h2>
          <p>
            The stated discount is exclusively available at participating,
            authorized Mt-15 dealers. All information is non-binding. Printing,
            layout, and typographical errors as well as other mistakes are
            reserved. Information may be changed at any time without prior
            notice.
          </p>
          <p>
            The illustrated vehicles may vary in selected details from the
            production models and some illustrations feature optional equipment
            available at additional cost. All information concerning the scope
            of supply, appearance, services, dimensions and weights is
            non-binding and specified with the proviso that errors may occur;
            such information is subject to change without notice. Model
            specifications may vary by country. Consumption values refer to the
            roadworthy series condition at factory delivery.
          </p>
        </section>
      </div>
    </div>
  );
};

export default V2Model;
