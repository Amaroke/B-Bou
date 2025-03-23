import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Compos from "./pages/Compos";
import Presentation from "./pages/Presentation";
import JoinUs from "./pages/JoinUs";
import Tips from "./pages/Tips";
import PisslowMeter from "./pages/PisslowMeter";

function App() {
  return (
    <Router basename="/B-Bou">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/presentation" element={<Presentation />} />
        <Route path="/join-us" element={<JoinUs />} />
        <Route path="/tips" element={<Tips />} />
        <Route path="/compos" element={<Compos />} />
        <Route path="/pisslow-meter" element={<PisslowMeter />} />
      </Routes>
    </Router>
  );
}

export default App;
