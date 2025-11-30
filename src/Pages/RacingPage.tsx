 import React, { useEffect, useState } from "react";
import Racing1 from "../assets/Racing1.png";
import Racing2 from "../assets/Racing2.png";
import Racing3 from "../assets/Racing3.png";
import Racing4 from "../assets/Racing4.png";

const RacingPage = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [currentImage, setCurrentImage] = useState<string | null>(null);

  const images = [Racing1, Racing2, Racing3, Racing4];

  const openModal = (img: string) => {
    setCurrentImage(img);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setCurrentImage(null);
  };
   useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  return (
    <div className="w-full max-w-screen-xl mx-auto px-4 bg-gray-900">
      <h1 className="text-2xl md:text-5xl flex justify-center font-extrabold text-blue-200 uppercase drop-shadow-lg underline">
        Racing Feild
      </h1>
      {/* Section 1 */}
      <div className="flex flex-col md:flex-row items-center gap-8 py-10 border-b-[0.5px] border-gray-700">
        <img
          src={Racing1}
          alt="Yamaha MT-15 motorcycle front angle view"
          className="w-full md:w-1/2 rounded"
        />
        <div className="md:w-1/2 text-white/70 text-sm leading-relaxed">
          <p>
            <strong>
              The MT-15 is an open-air wonder built for thrill-seekers
            </strong>
            , combining sleek design with high performance for an unforgettable
            ride.
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Lightweight yet sturdy frame for unmatched agility</li>
            <li>High-performance engine for smooth acceleration and speed</li>
            <li>Responsive suspension system absorbs bumps effortlessly</li>
            <li>Ergonomic seating ensures comfort on long rides</li>
            <li>Advanced braking system provides safety at high speeds</li>
          </ul>
        </div>
      </div>

      {/* Section 2 */}
      <div className="flex flex-col md:flex-row-reverse items-center gap-8 py-16 border-b-[0.5px] border-gray-700">
        <img
          src={Racing2}
          alt="Yamaha MT-15 motorcycle front angle view"
          className="w-full md:w-1/2 rounded"
        />
        <div className="md:w-1/2 text-white/70 text-sm leading-relaxed">
          <p>
            <strong>
              The MT-15’s 1200cc engine delivers thrilling power and precision
            </strong>
            , designed to provide both speed and control for riders.
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Accelerates 0-60 mph in just 3.5 seconds</li>
            <li>Aerodynamic frame ensures stability at high speeds</li>
            <li>Advanced cooling system maintains engine performance</li>
            <li>State-of-the-art braking system for superior control</li>
            <li>Rider-focused ergonomics with real-time digital feedback</li>
          </ul>
        </div>
      </div>

      {/* Section 3 */}
      <div className="flex flex-col md:flex-row items-center gap-8 py-16 border-b-[0.5px] border-gray-700">
        <img
          src={Racing3}
          alt="Yamaha MT-15 motorcycle front angle view"
          className="w-full md:w-1/2 rounded"
        />
        <div className="md:w-1/2 text-white/70 text-sm leading-relaxed">
          <p>
            <strong>
              The MT-15 rides smoothly on urban streets and racetracks
            </strong>
            , offering the perfect mix of power, control, and comfort.
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Tires engineered for maximum grip in all conditions</li>
            <li>Precision-tuned suspension for smooth, controlled rides</li>
            <li>Ergonomic seating reduces rider fatigue</li>
            <li>Lightweight frame enhances agility and quick maneuvers</li>
            <li>Integrated digital instrumentation provides real-time data</li>
          </ul>
        </div>
      </div>

      {/* Section 4 */}
      <div className="flex flex-col md:flex-row-reverse items-center gap-8 py-16 border-b-[0.5px] border-gray-700">
        <img
          src={Racing4}
          alt="Yamaha MT-15 motorcycle front angle view"
          className="w-full md:w-1/2 rounded"
        />
        <div className="md:w-1/2 text-white/70 text-sm leading-relaxed">
          <p>
            <strong>Riding the MT-15 is like commanding the wind</strong>, with
            every turn, acceleration, and maneuver responding seamlessly to your
            input.
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Lightweight frame and agile handling for precision</li>
            <li>Smooth, consistent power across the entire rev range</li>
            <li>Enhanced traction and dynamic stability systems</li>
            <li>Responsive suspension absorbs road imperfections</li>
            <li>Bold styling and intuitive digital feedback</li>
          </ul>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="py-16">
        <h2 className="text-2xl text-gray-300 text-center font-semibold mb-6">
          Gallery
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`Racing${i + 1}`}
              className="w-full h-48 object-cover rounded cursor-pointer 
                 hover:opacity-80 hover:rotate-3 transition-transform duration-300"
              onClick={() => openModal(img)}
            />
          ))}
        </div>
      </div>

      {/* Modal */}
      {isOpen && currentImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div className="relative max-w-5xl w-full p-4">
            <img
              src={currentImage}
              alt="Yamaha MT-15 motorcycle front angle view"
              className="w-full rounded"
            />
            <button
              type="button"
              className="absolute top-0 right-5 text-red-500 text-5xl font-bold"
              onClick={closeModal}
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default RacingPage;
