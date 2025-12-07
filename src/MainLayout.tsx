import { Outlet } from "react-router-dom";
import Header from "./Pages/Header";
import Footer from "./Pages/Footer";

interface MainLayoutProps {
  isLoggedIn: boolean;
  setIsLoggedIn: (loggedIn: boolean) => void;
}

const MainLayout: React.FC<MainLayoutProps> = ({ isLoggedIn, setIsLoggedIn }) => {
  return (
    <div className="flex flex-col bg-gray-900 min-h-screen">
      <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
