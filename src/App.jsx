import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import NewsTicker from "./components/NewsTicker";
import Home from "./views/Home";
import About from "./views/About";
import Workshop from "./views/Workshop";
import Resources from "./views/Resources";
import SpiritualSupport from "./views/SpiritualSupport";
import Testimonials from "./views/Testimonials";
import Contact from "./views/Contact";

function App() {
  // Unique key to force NewsTicker remount on refresh
  const newsTickerKey = Date.now();
  const location = useLocation();

  // Scroll to top on page load/refresh and route change
  useEffect(() => {
    window.scrollTo(0, 0);
    // Fallback for delayed DOM render
    const timer = setTimeout(() => window.scrollTo(0, 0), 0);
    // Disable browser scroll restoration
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    return () => clearTimeout(timer);
  }, [location]);

  return (
    <div>
      <Navbar />
      <NewsTicker key={newsTickerKey} />
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
