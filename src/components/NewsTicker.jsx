import { useState, useEffect } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { newsItems } from "../data/news";
import { useNavigate } from "react-router-dom";

const NewsTicker = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [currentNewsIndex, setCurrentNewsIndex] = useState(0);
  const navigate = useNavigate();

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

  // Intercept anchor clicks in news text and use React Router navigation
  const handleNewsClick = (e) => {
    if (e.target.tagName === "A") {
      e.preventDefault();
      const href = e.target.getAttribute("href");
      if (href) navigate(href);
    }
  };

  if (!isVisible) return null;

  return (
    <div
      className="relative bg-beige p-3 sm:p-4 shadow-md border-b border-gray-300 text-center overflow-hidden m-0 z-40"
      role="region"
      aria-label="News updates"
    >
      {/* Close Button */}
      <button
        onClick={closeNews}
        className="absolute top-1/2 right-3 -translate-y-1/2 bg-teal-600 text-teal-50 font-bold rounded-full transition-all p-1 duration-300 hover:bg-[#006f7f] hover:text-white hover:scale-110 focus:ring-2 focus:ring-[#00a181] focus:outline-none cursor-pointer max-[1200px]:top-auto max-[1200px]:bottom-2 max-[1200px]:right-2 max-[1200px]:-translate-y-0 max-[1200px]:p-0.5"
        aria-label="Close news ticker"
      >
        <XMarkIcon className="w-5 h-5 max-[1200px]:w-4 max-[1200px]:h-4" />
      </button>

      {/* News Text */}
      <p
        key={newsItems[currentNewsIndex].id}
        className="text-base sm:text-lg text-[#004651] font-inter transition-opacity duration-500 max-sm:text-sm"
        dangerouslySetInnerHTML={{ __html: newsItems[currentNewsIndex].text }}
        onClick={handleNewsClick}
        style={{ cursor: "pointer" }}
      />

      {/* Progress Dots */}
      <div className="flex justify-center mt-2 space-x-1.5">
        {newsItems.map((_, index) => (
          <button
            key={index}
            className={`w-4 h-4 p-2 rounded-full transition-all duration-300 hover:scale-125 focus:ring-2 focus:ring-[#00a181] focus:outline-none cursor-pointer ${
              index === currentNewsIndex ? "bg-[#00a181]" : "bg-gray-500"
            }`}
            onClick={() => goToNewsItem(index)}
            aria-label={`Go to news item ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default NewsTicker;
