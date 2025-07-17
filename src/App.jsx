import { Routes, Route } from "react-router-dom";
import LayoutPage from "./layout/LayoutPage";
import HomePage from "./pages/home/HomePage";
import VillasPage from "./pages/villas/VillasPage";
import NotFoundPage from "./components/NotFoundPage";
import VillasDetails from "./pages/villas/VillasDetails";
import DetailsLayout from "./layout/DetailsLayout";
import ScrollToTop from "./components/ScrollToTop";
import PlaceInCoretia from "./pages/country/PlaceInCoretia";
import ContactPage from "./pages/contact/ContactPage";
import TownPage from "./pages/country/towns/TownPage";
import TownsDetails from "./pages/country/towns/TownsDetails";
import BeatchPage from "./pages/country/beatch/BeatchPage";
import BeatchDetails from "./pages/country/beatch/BeatchDetails";
import NationalPark from "./pages/country/nationalpark/NationalPark";
import NationalParkDetails from "./pages/country/nationalpark/NationalParkDetails";
import SportsDetails from "./pages/country/details/SportsDetails";
function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<LayoutPage />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/villas" element={<VillasPage />} />
          <Route path="/place-in-croatia-blogs" element={<PlaceInCoretia />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/croatia/historic-towns" element={<TownPage />} />
          <Route path="/croatia/beaches" element={<BeatchPage />} />
          <Route path="/croatia/national-parks" element={<NationalPark />} />
          <Route path="/croatia/beaches/:slug" element={<BeatchDetails />} />
          <Route path="/croatia/events/:slug" element={<SportsDetails />} />
          <Route
            path="/croatia/national-parks/:slug"
            element={<NationalParkDetails />}
          />
          <Route
            path="/croatia/historic-towns/:slug"
            element={<TownsDetails />}
          />
          {/* <Route path="/villas/:slug" element={<VillasDetails />} /> */}
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/" element={<DetailsLayout />}>
            <Route path="/villas/:slug" element={<VillasDetails />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
