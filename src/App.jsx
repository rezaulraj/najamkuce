import { Routes, Route } from "react-router-dom";
import LayoutPage from "./layout/LayoutPage";
import HomePage from "./pages/home/HomePage";
import VillasPage from "./pages/villas/VillasPage";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LayoutPage />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/villas" element={<VillasPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
