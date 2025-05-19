import { upcomingWorkshops } from "../data/workshops";
import CtaButton from "../components/CtaButton";

const Workshop = () => {
  // Get the first upcoming workshop
  const today = new Date();
  const workshop = upcomingWorkshops.find((w) => new Date(w.date) >= today);

  return (
    <main className="p-5 bg-gray-50 animateFadeIn">
      {/* Title */}
      <div className="text-center mb-8">
        <h1 className="text-xl font-bold font-poppins text-start mb-8 md:text-4xl">
          Foundations Quarterly Workshop
        </h1>
      </div>
      {/* Main Content Layout */}
      <div className="flex flex-col lg:flex-row justify-between gap-8">
        {/* Left Section (Workshop Details) */}
        <div className="lg:basis-2/3 w-full">
          <div className="text-center max-w-3xl mx-auto">
            <p className="mt-4 text-lg text-gray-600 leading-7 sm:text-base">
              Join us for an empowering workshop that focuses on building
              confidence, networking, and honing your career advancement skills.
              Our workshop offers a four-step approach to help you navigate your
              career journey with guidance from leading experts.
            </p>
          </div>
          {/* What to Expect */}
          <div className="mt-12 max-w-3xl mx-auto">
            <h1 className="text-2xl font-semibold text-gray-900 text-center">
              What to Expect
            </h1>
            <ul className="mt-6 space-y-4">
              <li className="text-lg text-gray-600 leading-6 sm:text-base">
                Career Assessment
              </li>
              <li className="text-lg text-gray-600 leading-6 sm:text-base">
                Resume and Interview Tips
              </li>
              <li className="text-lg text-gray-600 leading-6 sm:text-base">
                Networking Strategies
              </li>
              <li className="text-lg text-gray-600 leading-6 sm:text-base">
                Spiritual Guidance for Career Success
              </li>
            </ul>
          </div>
        </div>

        {/* Right Section (Upcoming Workshop Hexagon Card) */}
        <div className="lg:basis-1/2 w-full flex justify-center items-start">
          {workshop && (
            <div
              className="relative clipHexagonWorkshop bgLime50080
                shadow-md hover:shadow-lg transition-shadow duration-300
                w-96 h-96 flex items-center justify-center overflow-hidden"
            >
              {/* Hexagon image */}
              <img
                src="/assets/workshop/2017_Workshop.jpg"
                alt="Workshop"
                className="absolute inset-0 w-full h-full object-cover z-0"
              />
              {/* Inner hexagon overlay for color effect */}
              <div className="absolute inset-4 clipHexagonWorkshop bgTeal50080 z-10 pointer-events-none" />
              <div className="flex flex-col items-center justify-center text-center h-full z-20 relative">
                <h4 className="text-base font-semibold text-gray-900 drop-shadow">
                  {workshop.date}
                </h4>
                <span className="text-sm font-semibold text-gray-900 mt-1 drop-shadow">
                  {workshop.fee.split("")[0]}
                </span>
                <p className="text-sm text-gray-600 mt-1 drop-shadow">
                  {workshop.time}
                </p>
                <p className="text-sm text-gray-600 mt-1 line-clamp-1 drop-shadow">
                  {workshop.description[0]}
                </p>
                <p className="mt-1 text-sm text-gray-600 drop-shadow">
                  <span className="font-bold">*</span>{" "}
                  {workshop.fee.split(" ").slice(1).join(" ")}
                </p>
                <div className="mt-2">
                  <a
                    href={workshop.registrationLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-gradient-to-r from-blue-600 to-blue-400
                      text-white px-4 py-1 rounded-lg font-medium text-sm
                      hover:bg-blue-700 transition-all"
                  >
                    Register Now
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default Workshop;
