import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Compos from "./pages/Compos";
import Tips from "./pages/Tips";
import PisslowMeter from "./pages/PisslowMeter";
import Clips from "./pages/Clips";

function App() {
  return (
    <Router basename={"/B-Bou"}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tips" element={<Tips />} />
        <Route path="/compos" element={<Compos />} />
        <Route path="/clips" element={<Clips />} />
        <Route path="/pisslow-meter" element={<PisslowMeter />} />
      </Routes>
    </Router>
  );
}

export default App;
