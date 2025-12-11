import { Outlet, useLocation } from "react-router-dom";
import Header from "./Pages/Header";
import Footer from "./Pages/Footer";
import { useState, useEffect } from "react";

const MainLayout: React.FC = () => {
  const location = useLocation();

  
  const hideLayout = ["/dash-board"].includes(location.pathname);

  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(() => {
    return localStorage.getItem("isLoggedIn") === "true";
  });

  useEffect(() => {
    if (isLoggedIn) localStorage.setItem("isLoggedIn", "true");
    else localStorage.removeItem("isLoggedIn");
  }, [isLoggedIn]);

  return (
    <div className="flex flex-col bg-gray-900 min-h-screen">
      {!hideLayout && <Header />}
      
      <Outlet />
      
      {!hideLayout && <Footer />}
    </div>
  );
};

export default MainLayout;
