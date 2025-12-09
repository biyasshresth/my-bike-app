import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaChevronDown, FaMapMarkerAlt, FaBell } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";
import { RiLoginBoxFill } from "react-icons/ri";
import SideBar from "./SideBar";
import { useAuth } from "../Context/AuthContext";

const Header: React.FC = () => {
  const { isLoggedIn, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const [menuOpen, setMenuOpen] = useState(false);
  const [serviceDropdownOpen, setServiceDropdownOpen] = useState(false);
  const [mtSidebarOpen, setMtSidebarOpen] = useState(false);
  const [darkMode, setDarkMode] = useState<boolean>(
    () =>
      typeof window !== "undefined" &&
      document.documentElement.classList.contains("dark")
  );

  // Close service dropdown when route changes
  useEffect(() => setServiceDropdownOpen(false), [location.pathname]);

  // Click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest("#service-dropdown")) setServiceDropdownOpen(false);
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  // Dark mode effect
  useEffect(() => {
    if (darkMode) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [darkMode]);

  // Escape key closes sidebar
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMtSidebarOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      {/* Navbar */}
      <nav className="relative z-50 max-w-full px-6 py-4 flex items-center justify-between bg-gray-900 shadow-2xl">
        {/* Left Menu */}
        <div className="flex items-center gap-4">
          <button
            type="button"
            className="text-white text-3xl md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <HiX /> : <HiMenu />}
          </button>

          <img
            src="YamahaLogo1.png"
            alt="Yamaha Logo"
            className="w-6 md:w-14 h-5 md:h-16 px-1 object-contain cursor-pointer"
            onClick={() => navigate("/")}
          />

          {/* Main Menu */}
          <ul
            className={`flex-col md:flex-row gap-6 md:gap-8 text-white uppercase tracking-wide text-xs md:flex w-full md:w-auto mt-4 md:mt-0 bg-black md:bg-transparent transition-all duration-300 ${
              menuOpen
                ? "absolute top-0 left-16 p-6 flex py-6 rounded-lg"
                : "hidden md:flex"
            }`}
          >
            <li>
              <a href="/models" className="inline-block hover:scale-110 hover:text-[#fad9a1] transition duration-300 ease-in-out">
                Models
              </a>
            </li>
            <li>
              <a href="/spare-parts" className="inline-block hover:scale-110 hover:text-[#fad9a1] transition duration-300 ease-in-out">
                Powerparts
              </a>
            </li>
            <li>
              <a href="/racing-page" className="inline-block hover:scale-110 hover:text-[#fad9a1] transition duration-300 ease-in-out">
                Racing
              </a>
            </li>
            <li>
              <a href="/mt-world" className="inline-block hover:scale-110 hover:text-[#fad9a1] transition duration-300 ease-in-out">
                Mt-15 World
              </a>
            </li>

            <li className="relative" id="service-dropdown">
              <button
                type="button"
                onClick={() => setServiceDropdownOpen(!serviceDropdownOpen)}
                className="inline-block hover:scale-110 hover:text-[#fad9a1] transition duration-300 ease-in-out"
              >
                SERVICE
              </button>
              {serviceDropdownOpen && (
                <div className="absolute left-0 top-full mt-2 bg-black rounded shadow-lg flex flex-col md:flex-row px-2 py-2">
                  <a
                    href="/service-booking"
                    className="px-4 py-2 hover:text-purple-700inline-block hover:scale-110 hover:text-[#fad9a1] transition duration-300 ease-in-out"
                  >
                    Bike Service
                  </a>
                  <a
                    href="https://www.instagram.com/mt15ridersnepal_official/?hl=en"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 inline-block hover:scale-110 hover:text-[#fad9a1] transition duration-300 ease-in-out"
                  >
                    Ride Service
                  </a>
                </div>
              )}
            </li>

            <li>
              <a href="/powerwear" className="inline-block hover:scale-110 hover:text-[#fad9a1] transition duration-300 ease-in-out">
                Powerwears
              </a>
            </li>
          </ul>
        </div>

        {/* Right Menu */}
        <div className="flex items-center gap-4">
          <button
            type="button"
            aria-label="Map Button"
            className="text-blue-100 text-xl hover:scale-125"
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
            aria-label="Notification Button"
            className="text-blue-100 text-xl hover:scale-125"
            onClick={() => navigate("/notifications")}
          >
            <FaBell />
          </button>

          {!isLoggedIn && (
            <button
              type="button"
              aria-label="Go to login page"
              onClick={() => navigate("/login")}
              className="w-12 h-12 bg-blue-100 flex flex-col items-center justify-center rounded-sm shadow-md cursor-pointer gap-1 hover:scale-110 transition-all duration-300"
            >
              <span className="font-bold text-black text-[10px] leading-none">
                LogIn
              </span>
              <RiLoginBoxFill className="text-black text-lg" />
            </button>
          )}

          {isLoggedIn && (
            <button
              type="button"
              aria-label="MT-15 Button"
              onClick={() => setMtSidebarOpen((s) => !s)}
              className="w-12 h-12 bg-blue-100 flex flex-col items-center justify-center rounded-sm shadow-md hover:scale-110"
            >
              <span className="font-bold text-black text-[10px] leading-none">
                MT-15
              </span>
              <FaChevronDown className="text-black text-lg animate-bounce" />
            </button>
          )}
        </div>
      </nav>

      {/* Sidebar */}
      {isLoggedIn && (
        <SideBar
          open={mtSidebarOpen}
          onClose={() => setMtSidebarOpen(false)}
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          logout={logout}
        />
      )}
    </>
  );
};

export default Header;
