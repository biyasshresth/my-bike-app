import Mtbs4Model2 from "../assets/Mtbs4Model2.png";
import V2model from "../assets/V2model.png";
import UCmodel from "../assets/UCmodel.png";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const models = [
  {
    title: "2020 Mt-15 Bs4 Model",
    tagline: "NEVER STOP",
    img: Mtbs4Model2,
    link: "/bs4-model",
  },
  {
    title: "2024 Mt-15 Version 2",
    tagline: "TRACK ATTACK",
    img: V2model,
    link: "/v2-model",
  },
  {
    title: "Upcomming Model",
    tagline: "RACE-BRED PERFORMANCE",
    img: UCmodel,
    link: "/upcom-model",
  },
];

const Models = () => {
  return (
    <>
      <div className="bg-gradient-to-b from-gray-900 via-black to-gray-800 text-white min-h-screen ">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold text-blue-200 tracking-tight mb-4">
            MT-15 Models in Nepal
          </h1>
          <p className="text-lg text-gray-300 mb-12">
            <strong>
              {" "}
              Explore our range of MT-15 motorcycles with cutting-edge design
              and performance.
            </strong>
          </p>

          {/* Model Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {models.map((model, index) => (
              <div
                key={index}
                className="relative group bg-gray-800 rounded-3xl overflow-hidden shadow-2xl transform transition duration-500 hover:scale-105"
              >
                {/* Image */}
                <div className="w-full h-72 md:h-80 overflow-hidden">
                  <img
                    src={model.img}
                    alt={model.title}
                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                {/* Text overlay */}
                <div className="p-6 bg-gradient-to-t from-gray-900 via-transparent to-transparent">
                  <h2 className="text-xl md:text-2xl font-bold mb-2">
                    {model.title}
                  </h2>
                  <p className="text-blue-400 uppercase font-semibold tracking-wider mb-4">
                    {model.tagline}
                  </p>
                  <Link
                    to={model.link}
                    className="inline-block bg-blue-600 hover:bg-orange-700 text-white font-bold py-2 px-5 rounded-lg transition"
                  >
                    Visit Model Page
                  </Link>
                </div>

                {/* Decorative border on hover */}
                <div className="absolute inset-0 border-2 border-transparent rounded-3xl group-hover:border-orange-500 transition-all pointer-events-none" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Models;
