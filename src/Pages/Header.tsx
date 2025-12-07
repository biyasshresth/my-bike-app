import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";
import {
  FaMapMarkerAlt,
  FaHome,
  FaUser,
  FaBell,
  FaPhone,
  FaFlag,
  FaMoon,
  FaSun,
  FaSignOutAlt,
} from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";
import { RiLoginBoxFill } from "react-icons/ri";

interface HeaderProps {
  isLoggedIn: boolean;
  setIsLoggedIn: (loggedIn: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ isLoggedIn, setIsLoggedIn }) => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [serviceDropdownOpen, setServiceDropdownOpen] = useState(false);
  const location = useLocation();
  const [mtSidebarOpen, setMtSidebarOpen] = useState(false);

  const [darkMode, setDarkMode] = useState<boolean>(
    () =>
      typeof window !== "undefined" &&
      document.documentElement.classList.contains("dark")
  );

  useEffect(() => {
    setServiceDropdownOpen(false);
  }, [location.pathname]);
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

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  // Close mt sidebar
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMtSidebarOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <nav className="relative z-50 max-w-full px-6 py-4 flex items-center justify-between transition-colors duration-500 bg-gray-900 shadow-2xl">
        <div className="flex items-center justify-between gap-4 space-x-2 cursor-pointer">
          {/* Mobile Menu Button */}
          <button
            type="button"
            className="text-white text-3xl md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <HiX /> : <HiMenu />}
          </button>

          {/* Logo */}
          <img
            src="YamahaLogo.svg"
            alt="Yamaha Logo"
            className="w-6 md:w-14 h-6 md:h-16 object-contain cursor-pointer"
            onClick={() => navigate("/")}
          />

          {/* Navigation Links */}
          <ul
            className={`flex-col md:flex-row gap-6 md:gap-8 text-white uppercase tracking-wide text-xs md:flex w-full md:w-auto mt-4 md:mt-0 bg-black md:bg-transparent transition-all duration-300 ${
              menuOpen
                ? "absolute top-0 left-16 p-6 flex py-6 rounded-lg"
                : "hidden md:flex"
            }`}
          >
            <li>
              <a
                href="/models"
                className="hover:text-purple-700 transition-colors text-xs"
              >
                Models
              </a>
            </li>

            <li>
              <a
                href="/spare-parts"
                className="hover:text-purple-700 transition-colors"
                rel="noopener noreferrer"
              >
                Powerparts
              </a>
            </li>

            <li>
              <a
                href="/racing-page"
                className="hover:text-purple-700 transition-colors"
              >
                Racing
              </a>
            </li>

            <li>
              <a
                href="/mt-world"
                className="hover:text-purple-700 transition-colors"
              >
                Mt-15 World
              </a>
            </li>

            {/* SERVICE DROPDOWN */}
            <li className="relative" id="service-dropdown">
              <button
                type="button"
                onClick={() => setServiceDropdownOpen(!serviceDropdownOpen)}
                className="hover:text-purple-700 transition-colors"
              >
                SERVICE
              </button>

              {serviceDropdownOpen && (
                <div className="absolute md:absolute left-0 top-full mt-2 bg-black rounded shadow-lg flex flex-col md:flex-row space-y-2 md:space-x-2 md:space-y-0 px-2 py-2 z-20">
                  <a
                    href="/service-booking"
                    className="px-4 py-2 hover:hover:text-purple-700   rounded transition-colors"
                    onClick={() => {
                      setServiceDropdownOpen(false);
                      setMenuOpen(false);
                    }}
                  >
                    Bike Service
                  </a>

                  <a
                    href="https://www.instagram.com/mt15ridersnepal_official/?hl=en"
                    rel="noopener noreferrer"
                    target="_blank"
                    className="px-4 py-2 hover:text-purple-700 rounded transition-colors"
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
                href="/powerwear"
                rel="noopener noreferrer"
                className="hover:text-purple-700 transition-colors"
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
            className="text-blue-100 text-xl hover:scale-125 transition-all duration-300"
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
              navigate("/notifications");
            }}
            className="text-blue-100 text-xl hover:scale-125 transition-all duration-300"
            aria-label="Notifications"
          >
            <FaBell />
          </button>

          <button
            type="button"
            onClick={() => {
              setIsLoggedIn(true);
              navigate("/login");
            }}
            className="w-12 h-12 bg-blue-100 flex flex-col items-center justify-center rounded-sm shadow-md cursor-pointer gap-1 hover:scale-110 transition-all duration-300"
          >
            <span className="font-bold text-black text-[10px] leading-none hover:scale-125 ">
              LogIn
            </span>
            <RiLoginBoxFill className="text-black text-lg" />
          </button>

          {/* MT-15 button */}
          {isLoggedIn && (
            <div>
              <button
                type="button"
                onClick={() => setMtSidebarOpen((s) => !s)}
                className="w-12 h-12 bg-blue-100 hover:scale-110 flex !flex-col !items-center !justify-center rounded-sm shadow-md cursor-pointer gap-1"
              >
                <span className="font-bold text-black text-[10px] leading-none">
                  MT-15
                </span>
                <FaChevronDown className="text-black text-lg animate-bounce" />
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Right-side sliding sidebar */}
      {mtSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-10"
          onClick={() => setMtSidebarOpen(false)}
          aria-hidden="true"
        />
      )}

      <aside
        id="mt-sidebar"
        className={`fixed top-0 right-0 h-full w-72 max-w-full z-30 bg-gray-900 text-gray-300 transform transition-transform duration-300 ${
          mtSidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
      >
        <div
          className={`flex h-full flex-col justify-between p-6 bg-gray-900 text-white shadow-2xl`}
        >
          <div>
            {/* Header row: Dashboard + close */}

            {/* Menu items with gap-10 */}
            <div className="py-6">
              <div className="flex items-center justify-between mb-8">
                <div
                  className="flex items-center gap-2 p-2  rounded-md hover:bg-white hover:text-black transition-colors duration-200 cursor-pointer mt-16"
                  onClick={() => {
                    navigate("/");
                    setMtSidebarOpen(false);
                  }}
                  role="button"
                  aria-label="Go to dashboard"
                >
                  <div className="p-2 rounded-md bg-white/20">
                    <FaHome className="text-xl" />
                  </div>
                  <h2 className="text-xl font-bold">Dashboard</h2>
                </div>

                <button
                  type="button"
                  onClick={() => setMtSidebarOpen(false)}
                  className="p-2 rounded-md hover:bg-white/10 mt-16"
                  aria-label="Close sidebar"
                >
                  <HiX className="text-2xl" />
                </button>
              </div>
              <nav>
                <ul className="flex flex-col gap-6 text-base font-medium ">
                  <li
                    className="flex items-center gap-3 rounded-md hover:bg-white hover:text-black transition-colors duration-200 cursor-pointer px-2"
                    onClick={() => {
                      navigate("/personal-information");
                      setMtSidebarOpen(false);
                    }}
                  >
                    <FaUser /> <span>Personal Information</span>
                  </li>

                  <li
                    className="flex items-center gap-3 rounded-md hover:bg-white hover:text-black transition-colors duration-200 cursor-pointer px-2"
                    onClick={() => {
                      navigate("/notifications");
                      setMtSidebarOpen(false);
                    }}
                  >
                    <FaBell /> <span>Notification</span>
                  </li>

                  <li
                    className="flex items-center gap-3 rounded-md hover:bg-white hover:text-black transition-colors duration-200 cursor-pointer px-2"
                    onClick={() => {
                      navigate("/contact-us");
                      setMtSidebarOpen(false);
                    }}
                  >
                    <FaPhone /> <span>Contact us</span>
                  </li>

                  <li
                    className="flex items-center gap-3 rounded-md hover:bg-white hover:text-black transition-colors duration-200 cursor-pointer px-2"
                    onClick={() => {
                      navigate("/report");
                      setMtSidebarOpen(false);
                    }}
                  >
                    <FaFlag /> <span>Report</span>
                  </li>
                </ul>
              </nav>
            </div>
          </div>

          {/* Bottom area: logout */}
          <div className="flex flex-col gap-6">
            <button
              type="button"
              onClick={() => setDarkMode((s) => !s)}
              className="flex items-center gap-3 p-2 rounded-md hover:bg-white hover:text-black  transition-colors"
            >
              {darkMode ? <FaSun /> : <FaMoon />}{" "}
              <span>{darkMode ? "Light Mode" : "Dark Mode"}</span>
            </button>

            <button
              type="button"
              onClick={() => {
                setIsLoggedIn(false);
                navigate("/");
                setMtSidebarOpen(false);
              }}
              className="flex items-center gap-3 p-2 rounded-md hover:bg-white hover:text-black  transition-colors"
            >
              <FaSignOutAlt /> <span>Logout</span>
            </button>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Header;
