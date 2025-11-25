import { Link } from "react-router-dom";
import TourMt from "../assets/TourMt.png";
import NewModel from "../assets/NewModel.png";
import MtRace from "../assets/MtRace.png";
import RentalMt from "../assets/RentalMt.png";
import MtOfficialVedio from "../assets/MtOfficialVedio.mp4";

const MtWorld: React.FC = () => {
  return (
    <>
      <div className="bg-gray-900 text-white mx-auto px-4 sm:px-6 lg:px-12 py-8">
        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="flex flex-col items-center gap-2">
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold">
              RIDE MT-15, YOUR GATEWAY TO THE
            </h1>
            <h1 className="text-xl sm:text-2xl md:text-4xl text-blue-200 font-bold">
              WORLD OF BLUE
            </h1>
          </div>

          {/* Intro Paragraph */}
          <p className="mt-4 text-gray-200 max-w-3xl mx-auto px-2 sm:px-6">
            Welcome to MT-15, where passion meets the road and adventure knows
            no limits. Whether you ride for thrill or pure excitement, our
            experiences are made to make every ride unforgettable.
          </p>

          <h2 className="text-xl sm:text-2xl font-bold mt-6">
            CHOOSE YOUR EXPERIENCE
          </h2>

          <p className="mt-3 text-gray-200 max-w-2xl mx-auto px-2 sm:px-6">
            Choose from tours, race tracks, rentals, and new models tailored for
            riders.
          </p>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10 sm:mb-12">
          {/* Card 1 */}
          <Link
            to="https://www.instagram.com/mt15ridersnepal_official/?hl=en"
            className="relative group block"
          >
            <img
              src={TourMt}
              alt="TOURS"
              className="w-full h-64 sm:h-80 object-cover rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center rounded-lg transition-transform group-hover:scale-105">
              <button className="bg-blue-600 text-white font-semibold px-6 py-3 rounded">
                TOURS
              </button>
            </div>
          </Link>

          {/* Card 2 */}
          <Link to="/new-models" className="relative group block">
            <img
              src={NewModel}
              alt="NEW MODELS"
              className="w-full h-64 sm:h-80 object-cover rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center rounded-lg transition-transform group-hover:scale-105">
              <button className="bg-blue-600 text-white font-semibold px-6 py-3 rounded">
                NEW MODELS
              </button>
            </div>
          </Link>

          {/* Card 3 */}
          <Link to="/yamaha-race" className="relative group block">
            <img
              src={MtRace}
              alt="RACE TRACK"
              className="w-full h-64 sm:h-80 object-cover rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center rounded-lg transition-transform group-hover:scale-105">
              <button className="bg-blue-600 text-white font-semibold px-6 py-3 rounded">
                RACE TRACK
              </button>
            </div>
          </Link>

          {/* Card 4 */}
          <Link to="/mt-rent" className="relative group block">
            <img
              src={RentalMt}
              alt="RENTALS"
              className="w-full h-64 sm:h-80 object-cover rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center rounded-lg transition-transform group-hover:scale-105">
              <button className="bg-blue-600 text-white font-semibold px-6 py-3 rounded">
                RENTALS
              </button>
            </div>
          </Link>
        </div>

        {/* Responsive Video Section */}
        <div className="flex justify-center mb-12 px-2 sm:px-4">
          <video
            src={MtOfficialVedio}
            controls
            className="
              w-full 
              max-w-[900px]
              h-auto
              rounded-lg
              shadow-2xl
              object-cover
              transition-transform
              duration-300
              hover:scale-105
            "
          />
        </div>
      </div>

      {/* Footer Note Section */}
      <hr className="border-t border-white/40" />

      <div className="max-w-4xl mx-auto py-10 sm:py-16 px-6 sm:px-12 lg:px-20 text-center text-sm bg-gray-900 text-white/70 space-y-6 leading-relaxed">
        <h2 className="text-2xl">Note</h2>
        <p>
          The stated discount is exclusively available at participating,
          authorized Mt-15 dealers. All information is non-binding. Printing,
          layout, and typographical errors as well as other mistakes are
          reserved. Information may be changed at any time without prior notice.
        </p>
        <p>
          The illustrated vehicles may vary in selected details from the
          production models and some illustrations feature optional equipment
          available at additional cost. All information concerning the scope of
          supply, appearance, services, dimensions and weights is non-binding
          and specified with the proviso that errors, for instance in printing,
          setting and/or typing, may occur; such information is subject to
          change without notice. Please note that model specifications may vary
          from country to country.
        </p>
      </div>
    </>
  );
};

export default MtWorld;
