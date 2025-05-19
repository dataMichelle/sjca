import CtaButton from "./CtaButton";
import { FaCalendarPlus } from "react-icons/fa";

// Static workshop data (replace with actual data or import from a file)
const staticWorkshop = {
  id: 1,
  excerpt:
    "Join us for our upcoming quarterly workshop and take the first step towards a fulfilling career.",
};

const HeroMobile = () => {
  return (
    <section className="bg-gradient-to-br from-[#d6a335]/80 via-[#006f7f]/80 to-[#00a181]/80 text-gray-900 py-12 px-4 text-center">
      <div className="max-w-3xl mx-auto flex flex-col items-center gap-8">
        {/* Welcome Blurb */}
        <div>
          <h1 className="text-3xl font-bold text-white mb-4 sm:text-2xl">
            Welcome to St. Jude Career Alliance
          </h1>
          <p className="text-base text-gray-200 mb-6 sm:text-sm">
            The St. Jude Career Alliance Ministry provides a Christian
            faith-based program to empower people who seek employment and the
            ability to thrive in their careers.
          </p>
        </div>

        {/* Workshop Info Div */}
        <div className="w-full bg-beige p-6 rounded-lg shadow-md border-t-4 border-b-4 border-[#a4e473] sm:p-4">
          <FaCalendarPlus className="w-8 h-8 text-teal-700 mx-auto mb-3 animate-pulse" />
          <h4 className="text-lg font-semibold uppercase text-teal-900 mb-3 sm:text-base">
            Upcoming Workshop
          </h4>
          <p className="text-base text-teal-800 mb-4 sm:text-sm">
            {staticWorkshop.excerpt}
          </p>
          <CtaButton
            to={`/workshop`}
            variant="secondary"
            textColor="text-beige"
            className="bg-gray-200 px-6 py-2 rounded-full font-medium hover:bg-gray-300 hover:scale-105 transition-all duration-300"
          >
            Register Now
          </CtaButton>
        </div>
      </div>
    </section>
  );
};

export default HeroMobile;
