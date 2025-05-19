import { useState } from "react";
import { motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { testimonials as defaultTestimonials } from "../data/testimonials";

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const displayTestimonials = defaultTestimonials;
  const totalCards = displayTestimonials.length;

  // Navigate to next/previous card with wrap-around
  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalCards);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + totalCards) % totalCards);
  };

  // Current testimonial
  const currentTestimonial = displayTestimonials[currentIndex];

  return (
    <div className="py-12 px-[8%] text-center max-sm:py-8 max-sm:px-4 bg-[#faf7f5]">
      <h2 className="text-4xl font-bold text-[#23446d] mb-6 sm:text-3xl">
        What Our Participants Say
      </h2>
      <div className="relative max-w-5xl mx-auto overflow-visible">
        {/* Testimonial Card */}
        <motion.div
          key={currentIndex}
          className="w-[40rem] min-h-[16rem] bg-white p-4 border-y-3 border-y-[#a4e473] rounded-lg shadow-md text-teal-800 text-base leading-relaxed flex items-center justify-center text-center relative before:content-[''] before:absolute before:top-2 before:left-2 before:w-12 before:h-12 before:bg-[url('https://img.icons8.com/ios-filled/100/F0F0F0/quote-left.png')] before:bg-no-repeat before:bg-contain before:opacity-70 before:z-0 after:content-[''] after:absolute after:bottom-2 after:right-2 after:w-12 after:h-12 after:bg-[url('https://img.icons8.com/ios-filled/100/F0F0F0/quote-right.png')] after:bg-no-repeat after:bg-contain after:opacity-70 after:z-0 hover:-translate-y-1 transition-transform md:w-[32rem] max-sm:w-[90%] max-sm:min-h-[12rem] max-sm:p-3 mx-auto max-sm:before:w-8 max-sm:before:h-8 max-sm:before:top-1 max-sm:before:left-1 max-sm:after:w-8 max-sm:after:h-8 max-sm:after:bottom-1 max-sm:after:right-1"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: currentIndex === 0 ? 0.5 : 0.3 }}
          style={{ animation: "prefers-reduced-motion: no-preference" }}
        >
          <div className="relative z-10 mb-8">
            <p>
              {currentTestimonial.content ||
                currentTestimonial.excerpt?.rendered}
            </p>
            <p className="mt-2 font-semibold text-teal-900">
              {currentTestimonial.name || currentTestimonial.title?.rendered}
            </p>
            <p className="text-sm text-teal-800">
              {currentTestimonial.role ||
                currentTestimonial.acf?.role ||
                "Participant"}
            </p>
          </div>
        </motion.div>

        {/* Navigation Arrows */}
        <button
          onClick={handlePrev}
          className="absolute left-[-0.15rem] top-1/2 -translate-y-1/2 text-2xl text-gray-600 hover:text-gray-800 p-2 transition-colors max-sm:left-1 max-sm:top-[calc(100%+0.5rem)] max-sm:translate-y-0 max-sm:text-xl max-sm:bg-white/80 max-sm:rounded-full max-sm:p-1.5"
          aria-label="Previous testimonial"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              handlePrev();
            }
          }}
        >
          <FaChevronLeft />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-[-0.15rem] top-1/2 -translate-y-1/2 text-2xl text-gray-600 hover:text-gray-800 p-2 transition-colors max-sm:right-1 max-sm:top-[calc(100%+0.5rem)] max-sm:translate-y-0 max-sm:text-xl max-sm:bg-white/80 max-sm:rounded-full max-sm:p-1.5"
          aria-label="Next testimonial"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              handleNext();
            }
          }}
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
