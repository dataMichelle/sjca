import { Routes, Route } from "react-router-dom";
import { useEffect, lazy, Suspense } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import NewsTicker from "./components/NewsTicker";
import Footer from "./components/Footer";
import GoogleAnalytics from "./components/GoogleAnalytics";
import { siteConfig } from "./config/siteConfig";

// Keep critical/popular pages as regular imports for faster initial load
import Home from "./views/Home";
import About from "./views/About";
import Workshop from "./views/Workshop";
import Contact from "./views/Contact";
import NotFound from "./views/NotFound";

// Only lazy load less frequently visited pages
const SpiritualSupport = lazy(() => import("./views/SpiritualSupport"));
const Testimonials = lazy(() => import("./views/Testimonials"));
const Faq = lazy(() => import("./views/Faq"));
const Blog = lazy(() => import("./views/Blog"));
const Privacy = lazy(() => import("./views/Privacy"));
const Volunteer = lazy(() => import("./views/Volunteer"));
const News = lazy(() => import("./views/News"));

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
      {/* Google Analytics */}
      <GoogleAnalytics trackingId={siteConfig.googleAnalyticsId} />
      
      <Navbar />

      <NewsTicker key={newsTickerKey} />

      <Routes>
        {/* Critical routes without Suspense for fastest loading */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/workshop" element={<Workshop />} />
        <Route path="/contact" element={<Contact />} />
        
        {/* Less critical routes with lazy loading */}
        <Route path="/spiritual-support" element={
          <Suspense fallback={<div className="flex justify-center items-center min-h-screen">Loading...</div>}>
            <SpiritualSupport />
          </Suspense>
        } />
        <Route path="/testimonials" element={
          <Suspense fallback={<div className="flex justify-center items-center min-h-screen">Loading...</div>}>
            <Testimonials />
          </Suspense>
        } />
        <Route path="/news" element={
          <Suspense fallback={<div className="flex justify-center items-center min-h-screen">Loading...</div>}>
            <News />
          </Suspense>
        } />
        <Route path="/faq" element={
          <Suspense fallback={<div className="flex justify-center items-center min-h-screen">Loading...</div>}>
            <Faq />
          </Suspense>
        } />
        <Route path="/blog" element={
          <Suspense fallback={<div className="flex justify-center items-center min-h-screen">Loading...</div>}>
            <Blog />
          </Suspense>
        } />
        <Route path="/privacy-policy" element={
          <Suspense fallback={<div className="flex justify-center items-center min-h-screen">Loading...</div>}>
            <Privacy />
          </Suspense>
        } />
        <Route path="/volunteer" element={
          <Suspense fallback={<div className="flex justify-center items-center min-h-screen">Loading...</div>}>
            <Volunteer />
          </Suspense>
        } />
        
        {/* 404 catch-all route - must be last */}
        <Route path="*" element={<NotFound />} />
        {/* Add more routes as needed */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
