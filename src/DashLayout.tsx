import { Outlet } from "react-router-dom";
import SideBar from "./Pages/SideBar";
import { useState } from "react";
import { FaBars } from "react-icons/fa";

const DashLayout: React.FC = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [openSidebar, setOpenSidebar] = useState(false);

  return (
    <div className="flex bg-gray-900 min-h-screen text-white">
      {/* Desktop / tablet: panel sidebar (visible on md and up) */}
      <div className="hidden md:block w-72">
        <SideBar
          mode="panel"
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          // panel is always "open" visually, so we don't need open/onClose
        />
      </div>

      {/* Mobile overlay sidebar instance (rendered but controlled by openSidebar) */}
      <SideBar
        mode="overlay"
        open={openSidebar}
        onClose={() => setOpenSidebar(false)}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      {/* Mobile-only toggle button */}
      <button
        aria-label="Open sidebar"
        onClick={() => setOpenSidebar(true)}
        className="md:hidden fixed top-4 left-4 z-50 p-2 rounded-md bg-gray-800/80 hover:bg-gray-700 text-white shadow"
      >
        <FaBars />
      </button>

      {/* Main content area */}
      <div className="flex-grow p-4 md:p-6">
        {/* Add left margin on md+ so content doesn't sit under the panel sidebar */}
        <div className="md:ml-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashLayout;
