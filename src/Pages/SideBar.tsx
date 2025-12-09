import React from "react";
import { FaHome, FaUser, FaBell, FaPhone, FaFlag, FaMoon, FaSun, FaSignOutAlt } from "react-icons/fa";
import { HiX } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

interface SideBarProps {
  open: boolean;
  onClose: () => void;
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
  logout: () => void; 
}

const SideBar: React.FC<SideBarProps> = ({ open, onClose, darkMode, setDarkMode, logout }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();       // call AuthContext logout
    navigate("/login"); // redirect to login page
    onClose();      // close the sidebar
  };

  return (
    <>
      {open && <div className="fixed inset-0 bg-black/40 z-10" onClick={onClose} />}

      <aside
        className={`fixed top-0 right-0 h-full w-72 z-30 bg-gray-900 text-white transition-transform duration-300
          ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex flex-col justify-between h-full p-6">

          {/* Top Section */}
          <div className="py-6">
            <div className="flex items-center justify-between mb-8">
              <div
                className="flex items-center gap-2 p-2 rounded-md hover:bg-white hover:text-black cursor-pointer mt-16"
                onClick={() => {
                  navigate("/");
                  onClose();
                }}
              >
                <FaHome className="text-xl" />
                <h2 className="text-xl font-bold">Dashboard</h2>
              </div>

              <button
                type="button"
                aria-label="Close Sidebar"
                className="p-2 rounded-md hover:bg-white/10 mt-16"
                onClick={onClose}
              >
                <HiX className="text-2xl" />
              </button>
            </div>

            {/* Menu Items */}
            <ul className="flex flex-col gap-6">
              <li onClick={() => { navigate("/personal-information"); onClose(); }} className="flex items-center gap-3 hover:bg-white hover:text-black p-2 rounded-md cursor-pointer">
                <FaUser /> Personal Information
              </li>
              <li onClick={() => { navigate("/notifications"); onClose(); }} className="flex items-center gap-3 hover:bg-white hover:text-black p-2 rounded-md cursor-pointer">
                <FaBell /> Notifications
              </li>
              <li onClick={() => { navigate("/contact-us"); onClose(); }} className="flex items-center gap-3 hover:bg-white hover:text-black p-2 rounded-md cursor-pointer">
                <FaPhone /> Contact Us
              </li>
              <li onClick={() => { navigate("/report"); onClose(); }} className="flex items-center gap-3 hover:bg-white hover:text-black p-2 rounded-md cursor-pointer">
                <FaFlag /> Report
              </li>
            </ul>
          </div>

          {/* Bottom Section */}
          <div className="flex flex-col gap-6">
            <button type="button" className="flex items-center gap-3 p-2 hover:bg-white hover:text-black rounded-md" onClick={() => setDarkMode(s => !s)}>
              {darkMode ? <FaSun /> : <FaMoon />}
              {darkMode ? "Light Mode" : "Dark Mode"}
            </button>

            <button type="button" className="flex items-center gap-3 p-2 hover:bg-white hover:text-black rounded-md" onClick={handleLogout}>
              <FaSignOutAlt /> Sign Out
            </button>
          </div>

        </div>
      </aside>
    </>
  );
};

export default SideBar;
