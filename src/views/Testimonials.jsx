import { useState, useEffect } from "react";
import { testimonials } from "../data/testimonials"; // Importing the testimonials data

const Testimonials = () => {
  const [fetchedTestimonials, setFetchedTestimonials] = useState([]);

  useEffect(() => {
    // Optionally, fetch data from an external API, if needed
    // Commented out since you are using static testimonials from a file
    // fetch("https://your-wordpress-site.com/wp-json/wp/v2/testimonials")
    //   .then((res) => res.json())
    //   .then((data) => setFetchedTestimonials(data))
    //   .catch((err) => console.error("API Error:", err));
    // If you want to use fetched data, you can fallback to the `testimonials` array
    // setFetchedTestimonials(fetchedData || testimonials);
  }, []);

  // Use `fetchedTestimonials` if any data is fetched, otherwise use the static `testimonials`
  const displayTestimonials =
    fetchedTestimonials.length > 0 ? fetchedTestimonials : testimonials;

  return (
    <div className="py-20 px-[8%] text-center bg-[#f8f1eb] animateFadeIn">
      <h2 className="text-5xl font-bold text-gray-800 mb-8 md:text-4xl">
        What Our Community Says
      </h2>
      <div className="flex flex-wrap justify-center gap-8">
        {displayTestimonials.map((t, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md p-6 max-w-[350px] w-full"
          >
            <p className="text-lg font-light text-gray-600 leading-relaxed mb-4">
              {t.content}
            </p>
            <div className="flex justify-center items-center gap-4">
              <div>
                <p className="text-xl font-semibold text-gray-800">{t.name}</p>
                <p className="text-base text-gray-600">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
