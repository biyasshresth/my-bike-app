import { Outlet, useLocation } from "react-router-dom";
import SideBar from "./Pages/SideBar";
import { useState } from "react";

const DashLayout: React.FC = () => {
  const location = useLocation();
  const [darkMode, setDarkMode] = useState(true);
    const [openSidebar, setOpenSidebar] = useState(false);
  return (
    <div className="flex bg-gray-900 min-h-screen">
      <div className="w-72">
        {" "}
        <SideBar mode="panel" darkMode={darkMode} setDarkMode={setDarkMode} />
      </div>
      <div className="flex-grow p-4 md:p-6">
        <div className="ml-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashLayout;
