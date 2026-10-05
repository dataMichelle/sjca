import React, { useState, useEffect } from 'react';

const images = [
  '/assets/workshop/images/IMG_1254.JPG',
  '/assets/workshop/images/IMG_1311.JPG',
  '/assets/workshop/images/IMG_1338.JPG',
  '/assets/workshop/images/IMG_1335.JPG',
  '/assets/workshop/images/IMG_1408.JPG',
];

const ImageCarousel = ({ interval = 4000 }) => {
  const [current, setCurrent] = useState(0);
  const total = images.length;

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % total);
    }, interval);
    return () => clearTimeout(timer);
  }, [current, interval, total]);

  const goTo = (idx) => setCurrent(idx);
  const prev = () => setCurrent((current - 1 + total) % total);
  const next = () => setCurrent((current + 1) % total);

  return (
    <div className="relative w-full h-64 rounded-lg overflow-hidden shadow-sm bg-white flex items-center justify-center">
      <img
        src={images[current]}
        alt={`Workshop image ${current + 1}`}
        className="w-full h-full object-cover transition-opacity duration-500"
        loading="lazy"
      />
      {/* Dots */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, idx) => (
          <button
            key={idx}
            className={`w-3 h-3 rounded-full ${
              idx === current ? 'bg-teal-600' : 'bg-gray-300'
            }`}
            onClick={() => goTo(idx)}
            aria-label={`Go to image ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
