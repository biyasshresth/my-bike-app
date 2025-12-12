import React, { useEffect } from "react";
import {
  FaHome,
  FaUser,
  FaBell,
  FaPhone,
  FaFlag,
  FaMoon,
  FaSun,
  FaSignOutAlt,
} from "react-icons/fa";
import { HiX } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

interface SideBarProps {
  open?: boolean;
  onClose?: () => void;
  darkMode?: boolean;
  setDarkMode?: React.Dispatch<React.SetStateAction<boolean>>;
  logout?: () => void;
  mode?: "overlay" | "panel";
}

const SideBar: React.FC<SideBarProps> = ({
  open = true,
  onClose = () => {},
  darkMode = true,
  setDarkMode = () => {},
  logout = () => {},
  mode = "overlay",
}) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    logout(); // call AuthContext logout
    navigate("/login"); // redirect to login page
    onClose(); // close the sidebar (if overlay)
  };

  useEffect(() => {
    // close overlay sidebar when user scrolls (only relevant for overlay mode)
    const handleScroll = () => {
      if (open && mode === "overlay") onClose();
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [open, onClose, mode]);

  // Overlay mode: fixed + backdrop + slide-in
  // Panel mode: relative/static (expect parent to size it, e.g. w-72)
  if (mode === "panel") {
    // panel (desktop) — not fixed so it doesn't overlay content
    return (
      <aside
        className={`h-full fixed  w-72 transition-colors duration-200 ${
          darkMode ? "bg-gray-900 text-white" : "bg-white text-black"
        }`}
        aria-hidden="false"
      >
        <div className="flex flex-col justify-between h-full p-6 border-r border-white/10">
          <div>
            <div
              className="flex items-center gap-2 p-2 rounded-md hover:bg-white/10 cursor-pointer mb-6"
              onClick={() => {
                navigate("/dash-board");
              }}
            >
              <FaHome className="text-xl" />
              <h2 className="text-xl font-bold">Dashboard</h2>
            </div>

            <ul className="flex flex-col gap-6">
              <li
                onClick={() => navigate("/")}
                className="flex items-center gap-3 hover:bg-white hover:text-black p-2 rounded-md cursor-pointer"
              >
                <FaHome /> Home
              </li>
              <li
                onClick={() => navigate("/personal-information")}
                className="flex items-center gap-3 hover:bg-white hover:text-black p-2 rounded-md cursor-pointer"
              >
                <FaUser /> Personal Information
              </li>
              <li
                onClick={() => navigate("/notifications")}
                className="flex items-center gap-3 hover:bg-white hover:text-black p-2 rounded-md cursor-pointer"
              >
                <FaBell /> Notifications
              </li>
              <li
                onClick={() => navigate("/contact-us")}
                className="flex items-center gap-3 hover:bg-white hover:text-black p-2 rounded-md cursor-pointer"
              >
                <FaPhone className="rotate-90" /> Contact Us
              </li>
              <li
                onClick={() => navigate("/report")}
                className="flex items-center gap-3 hover:bg-white hover:text-black p-2 rounded-md cursor-pointer"
              >
                <FaFlag /> Report
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-6">
            <button
              type="button"
              className="flex items-center gap-3 p-2 hover:bg-white hover:text-black rounded-md"
              onClick={() => setDarkMode(!darkMode)}
            >
              {darkMode ? <FaSun /> : <FaMoon />}
              {darkMode ? "Light Mode" : "Dark Mode"}
            </button>

            <button
              type="button"
              className="flex items-center gap-3 p-2 hover:bg-white hover:text-black rounded-md"
              onClick={handleLogout}
            >
              <FaSignOutAlt className="-rotate-180" /> Sign Out
            </button>
          </div>
        </div>
      </aside>
    );
  }

  // overlay mode (mobile): fixed, backdrop, slide-in from left
  return (
    <>
      {/* backdrop */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={onClose}
          aria-hidden
        />
      )}

      <aside
        className={`fixed top-0 left-0 h-full w-72 z-50 transform transition-transform duration-300
          ${open ? "translate-x-0" : "-translate-x-full"}
          ${darkMode ? "bg-gray-900 text-white" : "bg-white text-black"}
        `}
        role="dialog"
        aria-modal="true"
      >
        <div className="flex flex-col justify-between h-full p-6 border-r border-white/10">
          <div>
            <div className="flex items-center justify-between mb-8">
              <div
                className="flex items-center gap-2 p-2 rounded-md hover:bg-white hover:text-black cursor-pointer"
                onClick={() => {
                  navigate("/dash-board");
                  onClose();
                }}
              >
                <FaHome className="text-xl" />
                <h2 className="text-xl font-bold">Dashboard</h2>
              </div>

              <button
                type="button"
                aria-label="Close Sidebar"
                className="p-2 rounded-md hover:bg-white/10"
                onClick={onClose}
              >
                <HiX className="text-2xl" />
              </button>
            </div>

            <ul className="flex flex-col gap-6">
              <li
                onClick={() => {
                  navigate("/");
                  onClose();
                }}
                className="flex items-center gap-3 hover:bg-white hover:text-black p-2 rounded-md cursor-pointer"
              >
                <FaHome /> Home
              </li>
              <li
                onClick={() => {
                  navigate("/personal-information");
                  onClose();
                }}
                className="flex items-center gap-3 hover:bg-white hover:text-black p-2 rounded-md cursor-pointer"
              >
                <FaUser /> Personal Information
              </li>
              <li
                onClick={() => {
                  navigate("/notifications");
                  onClose();
                }}
                className="flex items-center gap-3 hover:bg-white hover:text-black p-2 rounded-md cursor-pointer"
              >
                <FaBell /> Notifications
              </li>
              <li
                onClick={() => {
                  navigate("/contact-us");
                  onClose();
                }}
                className="flex items-center gap-3 hover:bg-white hover:text-black p-2 rounded-md cursor-pointer"
              >
                <FaPhone className="rotate-90" /> Contact Us
              </li>
              <li
                onClick={() => {
                  navigate("/report");
                  onClose();
                }}
                className="flex items-center gap-3 hover:bg-white hover:text-black p-2 rounded-md cursor-pointer"
              >
                <FaFlag /> Report
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-6">
            <button
              type="button"
              className="flex items-center gap-3 p-2 hover:bg-white hover:text-black rounded-md"
              onClick={() => setDarkMode(!darkMode)}
            >
              {darkMode ? <FaSun /> : <FaMoon />}
              {darkMode ? "Light Mode" : "Dark Mode"}
            </button>

            <button
              type="button"
              className="flex items-center gap-3 p-2 hover:bg-white hover:text-black rounded-md"
              onClick={handleLogout}
            >
              <FaSignOutAlt className="-rotate-180" /> Sign Out
            </button>
          </div>
        </div>
      </aside>
    </>
  );
};

export default SideBar;
