import { useState, useEffect } from "react";
import { newsItems } from "../data/news";

const News = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [currentNewsIndex, setCurrentNewsIndex] = useState(0);

  // Function to handle the close action
  const closeNews = () => {
    setIsVisible(false);
  };

  // Cycle through news items every 5 seconds
  useEffect(() => {
    if (newsItems.length > 1) {
      const interval = setInterval(() => {
        setCurrentNewsIndex((prevIndex) => (prevIndex + 1) % newsItems.length);
      }, 6000);
      return () => clearInterval(interval);
    }
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className="relative bg-blue-100 p-2 shadow-md text-center overflow-hidden m-0"
      role="region"
      aria-label="News updates"
    >
      {/* Close Button */}
      <button
        onClick={closeNews}
        className="absolute top-2 right-2 text-xl text-gray-600 hover:text-gray-800 z-10"
        aria-label="Close news ticker"
      >
        ✕
      </button>

      {/* Static Display with Alternating News */}
      <p
        key={newsItems[currentNewsIndex].id}
        className="text-lg text-gray-600 max-sm:text-base transition-opacity duration-500"
      >
        {newsItems[currentNewsIndex].text}
      </p>
    </div>
  );
};

export default News;
