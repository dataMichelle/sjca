import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaTimes } from "react-icons/fa";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { newsItems } from "../data/news";

const NewsTicker = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [currentNewsIndex, setCurrentNewsIndex] = useState(0);

  // Reset isVisible on mount to ensure remount on refresh
  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Function to handle the close action
  const closeNews = () => {
    setIsVisible(false);
  };

  // Cycle through news items every 5 seconds
  useEffect(() => {
    if (newsItems.length > 1 && isVisible) {
      const interval = setInterval(() => {
        setCurrentNewsIndex((prevIndex) => (prevIndex + 1) % newsItems.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isVisible]);

  // Handle dot click to jump to specific news item
  const goToNewsItem = (index) => {
    setCurrentNewsIndex(index);
  };

  if (!isVisible) return null;

  return (
    <motion.div
      className="relative bg-blue-300 p-2 shadow-lg text-center overflow-hidden m-0 z-40"
      role="region"
      aria-label="News updates"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      style={{ animation: "prefers-reduced-motion: no-preference" }}
    >
      {/* Close Button with React Icon */}
      <button
        onClick={closeNews}
        className="absolute top-1/2 right-2 -translate-y-1/2 text-2xl text-gray-800 hover:text-black bg-blue-100 hover:bg-gray-300 rounded-full p-1 z-10 transition-transform hover:scale-110"
        aria-label="Close news ticker"
      >
        <XMarkIcon className="w-5 h-5 text-gray-600" />
      </button>

      {/* Static Display with Alternating News */}
      <p
        key={newsItems[currentNewsIndex].id}
        className=" text-teal-950 max-sm:text-base transition-opacity duration-500 font-inter font-semibold"
      >
        {newsItems[currentNewsIndex].text}
      </p>
      {/* Progress Dots */}
      <div className="flex justify-center mt-2 space-x-2">
        {newsItems.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full ${
              index === currentNewsIndex ? "bg-gray-800" : "bg-gray-400"
            }`}
            onClick={() => goToNewsItem(index)}
            aria-label={`Go to news item ${index + 1}`}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default NewsTicker;
