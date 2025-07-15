import { Routes, Route } from "react-router-dom";
import LayoutPage from "./layout/LayoutPage";
import HomePage from "./pages/home/HomePage";
import VillasPage from "./pages/villas/VillasPage";
import NotFoundPage from "./components/NotFoundPage";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LayoutPage />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/villas" element={<VillasPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
