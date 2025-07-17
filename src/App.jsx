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
import SportsPage from "./pages/country/details/SportsPage";
import MusicConsert from "./pages/country/MusicConsert";
import CultureDetails from "./pages/country/CultureDetails";
import FoodDetails from "./pages/country/FoodDetails";
import WineDetails from "./pages/country/WineDetails";
import RestaurantDetails from "./pages/country/RestaurantDetails";
import WaterDetails from "./pages/country/WaterDetails";
import CyclingDetails from "./pages/country/CycalingDetails";
import HikingDetails from "./pages/country/HikingDetails";
import ExtremSportDetails from "./pages/country/ExtremSportDetails";
import AdrenalineDetails from "./pages/country/AdrenalineDetails";
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
          <Route path="/croatia/music" element={<MusicConsert />} />
          <Route path="/gastronomy/wine-tasting" element={<WineDetails />} />
          <Route
            path="/gastronomy/fine-dining"
            element={<RestaurantDetails />}
          />
          <Route
            path="/gastronomy/traditional-food"
            element={<FoodDetails />}
          />
          <Route
            path="/croatia/cultural-festivals"
            element={<CultureDetails />}
          />
          <Route path="/croatia/sports" element={<SportsPage />} />
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
          <Route path="/adventures/water-sports" element={<WaterDetails />} />
          <Route path="/adventures/cycling" element={<CyclingDetails />} />
          <Route path="/adventures/hiking" element={<HikingDetails />} />
          <Route
            path="/adventures/extreme-sports"
            element={<ExtremSportDetails />}
          />
          <Route
            path="/adventures/adrenaline"
            element={<AdrenalineDetails />}
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
