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
      .catch((err) => {
        console.error("API Error:", err);
        setTestimonials(defaultTestimonials);
      });
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

  // Card width and gap (in rem)
  const cardWidth = 25; // 25rem for desktop
  const cardGap = 1.5625; // 1.5625rem (25px)
  const totalWidth = `calc(2 * ${displayTestimonials.length / 2} * ${
    cardWidth + cardGap
  }rem)`;

  return (
    <>
      <div className="py-12 px-[8%] text-center bg-[#f8f1eb]">
        <h2 className="text-5xl font-bold text-gray-800 mb-8 md:text-4xl">
          What Our Participants Say
        </h2>
        <div className="overflow-hidden">
          <motion.div
            ref={carouselRef}
            className="flex flex-nowrap gap-[1.5625rem]"
            animate={controls}
            style={{ width: totalWidth }}
          >
            {displayTestimonials.map((t, index) => (
              <div
                key={index}
                className="flex-none w-[25rem] min-h-[12.5rem] bg-white p-4 rounded-lg shadow-md text-gray-600 text-sm leading-relaxed flex items-center justify-center text-center relative before:content-[''] before:absolute before:top-2 before:left-2 before:w-12 before:h-12 before:bg-[url('https://img.icons8.com/ios-filled/100/F0F0F0/quote-left.png')] before:bg-no-repeat before:bg-contain before:opacity-70 before:z-0 after:content-[''] after:absolute after:bottom-2 after:right-2 after:w-12 after:h-12 after:bg-[url('https://img.icons8.com/ios-filled/100/F0F0F0/quote-right.png')] after:bg-no-repeat after:bg-contain after:opacity-70 after:z-0 hover:-translate-y-1 transition-transform md:w-[20rem] md:gap-[1rem]"
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
      <style>
        {`
          /* Ensure box-sizing for consistent sizing */
          .flex-none {
            box-sizing: border-box;
          }

          /* Fallback margin-right for debugging */
          .flex-none {
            margin-right: 1.5625rem;
          }

          /* Remove margin-right for last card in each set */
          .flex-none:last-child,
          .flex-none:nth-child(${displayTestimonials.length / 2}) {
            margin-right: 0;
          }

          /* Responsive gap adjustment */
          @media (max-width: 640px) {
            .gap-\\[1\\.5625rem\\] {
              gap: 1rem;
            }
            .flex-none {
              margin-right: 1rem;
            }
            .flex-none:last-child,
            .flex-none:nth-child(${displayTestimonials.length / 2}) {
              margin-right: 0;
            }
          }
        `}
      </style>
    </>
  );
};

export default TestimonialCarousel;
