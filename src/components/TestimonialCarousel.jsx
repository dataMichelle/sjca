import { useState, useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { testimonials as defaultTestimonials } from "../data/testimonials";

const TestimonialCarousel = () => {
  const [testimonials, setTestimonials] = useState([]);
  const controls = useAnimation();
  const carouselRef = useRef(null);

  useEffect(() => {
    fetch("https://your-wordpress-site.com/wp-json/wp/v2/testimonials")
      .then((res) => res.json())
      .then((data) => setTestimonials(data))
      .catch((err) => console.error("API Error:", err));
  }, []);

  useEffect(() => {
    const scroll = async () => {
      await controls.start({
        x: "-50%",
        transition: { duration: 40, ease: "linear", repeat: Infinity },
      });
      controls.set({ x: 0 });
      controls.start({
        x: "-50%",
        transition: { duration: 40, ease: "linear", repeat: Infinity },
      });
    };
    scroll();
  }, [controls]);

  const displayTestimonials = [
    ...(testimonials.length > 0 ? testimonials : defaultTestimonials),
    ...(testimonials.length > 0 ? testimonials : defaultTestimonials),
  ];

  return (
    <div className="py-12 px-[8%] text-center bg-[#f8f1eb] animateFadeIn">
      <h2 className="text-5xl font-bold text-gray-800 mb-8 md:text-4xl">
        What Our Participants Say
      </h2>
      <div className="overflow-hidden">
        <motion.div
          ref={carouselRef}
          className="flex flex-nowrap"
          animate={controls}
          style={{
            width: `calc(2 * ${
              displayTestimonials.length / 2
            } * (25rem + 1.5625rem))`,
          }}
        >
          {displayTestimonials.map((t, index) => (
            <div
              key={index}
              className="flex-none w-[25rem] min-h-[12.5rem] bg-white p-4 rounded-lg shadow-md mr-[1.5625rem] text-gray-600 text-sm leading-relaxed flex items-center justify-center text-center relative before:content-[''] before:absolute before:top-2 before:left-2 before:w-12 before:h-12 before:bg-[url('https://img.icons8.com/ios-filled/100/F0F0F0/quote-left.png')] before:bg-no-repeat before:bg-contain before:opacity-70 before:z-0 after:content-[''] after:absolute after:bottom-2 after:right-2 after:w-12 after:h-12 after:bg-[url('https://img.icons8.com/ios-filled/100/F0F0F0/quote-right.png')] after:bg-no-repeat after:bg-contain after:opacity-70 after:z-0 hover:-translate-y-1 transition-transform md:w-[20rem]"
            >
              <div className="relative z-10">
                <p>{t.content || t.excerpt?.rendered}</p>
                <p className="mt-2 font-semibold text-gray-800">
                  {t.name || t.title?.rendered}
                </p>
                <p className="text-gray-600">
                  {t.role || t.acf?.role || "Participant"}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
