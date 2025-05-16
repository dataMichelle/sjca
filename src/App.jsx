import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./views/Home";
import About from "./views/About";
import Workshop from "./views/Workshop";
import Resources from "./views/Resources";
import SpiritualSupport from "./views/SpiritualSupport";
import Testimonials from "./views/Testimonials";
import Contact from "./views/Contact";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/workshop" element={<Workshop />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/spiritual-support" element={<SpiritualSupport />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
