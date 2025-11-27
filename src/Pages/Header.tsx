import React, { useState, useEffect } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";

const Header: React.FC = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [serviceDropdownOpen, setServiceDropdownOpen] = useState(false);

  // Close service dropdown
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest("#service-dropdown")) {
        setServiceDropdownOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <nav className="relative z-50 max-w-full px-6 py-4 flex items-center justify-between transition-colors duration-500 bg-gray-900 shadow-2xl">
      <div className="flex items-center justify-between gap-4 space-x-2 cursor-pointer">
        {/* Mobile Menu Button */}
        <button
          type="button"
          className="text-white text-3xl md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>

        {/* Logo */}
        <img
          src="YamahaLogo.svg"
          alt="Yamaha Logo"
          className="w-10 md:w-16 h-10 md:h-16 object-contain"
          onClick={() => navigate("/")}
        />

        {/* Navigation Links */}
        <ul
          className={`flex-col md:flex-row gap-6 md:gap-8 text-white uppercase tracking-wide text-sm md:flex w-full md:w-auto mt-4 md:mt-0 bg-black md:bg-transparent transition-all duration-300 ${
            menuOpen
              ? "absolute top-0 left-16 p-6 flex py-6 rounded-lg"
              : "hidden md:flex"
          }`}
        >
          <li>
            <Link
              to="/models"
              className="hover:text-blue-400 transition-colors"
            >
              Models
            </Link>
          </li>

          <li>
            <a
              href="/spare-parts"
              className="hover:text-blue-400 transition-colors"
              rel="noopener noreferrer"
            >
              Powerparts
            </a>
          </li>

          <li>
            <Link
              to="/racing-page"
              className="hover:text-blue-400 transition-colors"
            >
              Racing
            </Link>
          </li>

          <li>
            <Link
              to="/mt-world"
              className="hover:text-blue-400 transition-colors"
            >
              Mt-15 World
            </Link>
          </li>

          {/* SERVICE DROPDOWN */}
          <li className="relative" id="service-dropdown">
            <button
              type="button"
              onClick={() => setServiceDropdownOpen(!serviceDropdownOpen)}
              className="hover:text-blue-400 transition-colors"
            >
              SERVICE
            </button>

            {serviceDropdownOpen && (
              <div className="absolute md:absolute left-0 top-full mt-2 bg-black rounded shadow-lg flex flex-col md:flex-row space-y-2 md:space-x-2 md:space-y-0 px-2 py-2 z-20">
                <Link
                  to="/service-booking"
                  className="px-4 py-2 hover:bg-blue-500 hover:text-black rounded transition-colors"
                  onClick={() => {
                    setServiceDropdownOpen(false);
                    setMenuOpen(false);
                  }}
                >
                  Bike Service
                </Link>

                <a
                  href="https://www.instagram.com/mt15ridersnepal_official/?hl=en"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="px-4 py-2 hover:bg-blue-500 hover:text-black rounded transition-colors"
                  onClick={() => {
                    setServiceDropdownOpen(false);
                    setMenuOpen(false);
                  }}
                >
                  Ride Service
                </a>
              </div>
            )}
          </li>

          <li>
            <a
              href="/power-wear"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors"
            >
              Powerwears
            </a>
          </li>
        </ul>
      </div>

      {/* Right Buttons */}
      <div className="flex items-center gap-4">
        <button
          type="button"
          aria-label="Open Yamaha showrooms in Kathmandu"
          className="text-blue-400"
          onClick={() =>
            window.open(
              "https://www.google.com/maps/search/Yamaha+Showroom+in+Kathmandu/",
              "_blank"
            )
          }
        >
          <FaMapMarkerAlt />
        </button>

        <button
          type="button"
          onClick={() => {
            navigate("/map");
          }}
          className="text-blue-400"
        >
          🌐
        </button>

        <div className="w-14 h-12 bg-blue-600 flex items-center justify-center rounded-sm shadow-md">
          <span className="font-bold text-black">MT-15</span>
        </div>
      </div>
    </nav>
  );
};

export default Header;
