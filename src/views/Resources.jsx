import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Resources = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace("#", ""));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [hash]);

  return (
    <main className="py-12 px-4 sm:px-6 lg:px-8 animateFadeIn relative">
      {/* Subtle hexagon background */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0L0 15v30l30 15 30-15V15L30 0z' fill='%23a4e473' fill-opacity='0.4'/%3E%3C/svg%3E")`,
          backgroundSize: "60px 60px",
        }}
      ></div>
      <div className="max-w-5xl mx-auto relative z-10">
        <h1 className="text-4xl font-bold text-darkBlue font-sans mb-10 md:text-5xl sm:text-3xl">
          Resources for Your Career Journey
        </h1>

        {/* Job Search Tips */}
        <section className="mb-12 bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-2xl font-semibold text-darkBlue mb-4 md:text-3xl">
            Job Search Tips
          </h2>
          <p className="text-lg text-primary mb-4">
            Find our expert tips for an effective job search.
          </p>
          <a
            href="#"
            className="inline-block bg-secondary text-white px-4 py-2 rounded-full font-medium hover:bg-deepTeal transition-all"
          >
            Download
          </a>
        </section>

        {/* Networking Events */}
        <section
          id="networking-events"
          className="mb-12 bg-white rounded-lg shadow-sm p-6"
        >
          <h2 className="text-2xl font-semibold text-darkBlue mb-4 md:text-3xl">
            Networking Events
          </h2>
          <ul className="list-none pl-0">
            <li className="text-lg text-primary mb-2 flex items-center">
              <span className="text-secondary mr-2">•</span> Local Networking
              Event 1
            </li>
            <li className="text-lg text-primary flex items-center">
              <span className="text-secondary mr-2">•</span> Local Networking
              Event 2
            </li>
          </ul>
        </section>

        {/* Using AI in Job Search */}
        <section className="mb-12 bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-2xl font-semibold text-darkBlue mb-4 md:text-3xl">
            Using AI in Job Search
          </h2>
          <p className="text-lg text-primary mb-4">
            Learn how to use AI tools to enhance your resume and job search.
          </p>
          <a
            href="#"
            className="inline-block bg-secondary text-white px-4 py-2 rounded-full font-medium hover:bg-deepTeal transition-all"
          >
            Download
          </a>
        </section>
      </div>
    </main>
  );
};

export default Resources;
