import { Routes, Route } from "react-router-dom";
import LayoutPage from "./layout/LayoutPage";
import HomePage from "./pages/home/HomePage";
import VillasPage from "./pages/villas/VillasPage";
import NotFoundPage from "./components/NotFoundPage";
import VillasDetails from "./pages/villas/VillasDetails";
import DetailsLayout from "./layout/DetailsLayout";
import ScrollToTop from "./components/ScrollToTop";
function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<LayoutPage />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/villas" element={<VillasPage />} />
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
