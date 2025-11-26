import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Models from "./Pages/Models";
import Bs4Model from "./Pages/Bs4Model";
import V2Model from "./Pages/V2Model";
import UpcomModel from "./Pages/UpcomModel";
import RacingPage from "./Pages/RacingPage";
import ServiceBooking from "./Pages/ServiceBooking";
import ExploreMore from "./Pages/ExploreMore";
import PowerWear from "./Pages/PowerWear";
import Faq from "./Pages/Faq";
import MtWorld from "./Pages/MtWorld";
import Maintainance from "./Pages/Maintainance";
import MainLayout from "./MainLayout";
import YamahaNewsPage from "./Pages/YamahaNewsPage";
import TermsPolicy from "./Pages/TermsPolicy";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import LegalNoticesYamaha from "./Pages/LegalNoticesYamaha";
import MtRent from "./Pages/MtRent";
import ArticlePage from "./Pages/ArticlePage";
import YamahaRace from "./Pages/YamahaRace";
import YamahaRiders from "./Pages/YamahaRiders";
import YamahaAdvanture from "./Pages/YamahaAdvanture";
import SpareParts from "./Pages/SpareParts";
import PageNotFound from "./Pages/PageNotFound";
const Dashboard = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            {/* <Route path="Header" element={<Header />} /> */}
            <Route path="models" element={<Models />} />
             <Route path="*" element={<PageNotFound />} />
            <Route path="bs4-model" element={<Bs4Model />} />
            <Route path="v2-model" element={<V2Model />} />
            <Route path="upcom-model" element={<UpcomModel />} />
            <Route path="service-booking" element={<ServiceBooking />} />
            <Route path="racing-page" element={<RacingPage />} />
            <Route path="explore-more" element={<ExploreMore />} />
            <Route path="faq" element={<Faq />} />
            <Route path="mt-world" element={<MtWorld />} />
            <Route path="maintainance" element={<Maintainance />} />
            <Route path="power-wear" element={<PowerWear />} />
            <Route path="yamaha-news-page" element={<YamahaNewsPage />} />
            <Route path="terms-policy" element={<TermsPolicy />} />
            <Route path="privacy-policy" element={<PrivacyPolicy />} />
            <Route path="mt-rent" element={<MtRent />} />
            <Route path="yamaha-race" element={<YamahaRace />} />
            <Route path="article-page" element={<ArticlePage />} />
            <Route path="yamaha-riders" element={<YamahaRiders />} />
            <Route path="spare-parts" element={<SpareParts />} />
            <Route path="yamaha-advanture" element={<YamahaAdvanture />} />
            <Route
              path="legal-notices-yamaha"
              element={<LegalNoticesYamaha />}
            />
            {/* <Route path="Footer" element={<Footer />} /> */}
          </Route>
        </Routes>
      </Router>
    </>
  );
};

export default Dashboard;
