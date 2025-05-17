import { upcomingWorkshops } from "../data/workshops"; // Importing the upcoming workshops data
import CtaButton from "../components/CtaButton"; // Assuming you have this component

const Workshop = () => {
  // Get the next 2 workshops based on the current date
  const today = new Date();
  const upcoming = upcomingWorkshops
    .filter((workshop) => {
      const workshopDate = new Date(workshop.date);
      return workshopDate >= today;
    })
    .slice(0, 2); // Show only the next 2 workshops

  return (
    <section className="py-16 px-6 sm:px-8 lg:px-16 bg-[#f8f1eb] mx-auto my-8 rounded-xl shadow-sm">
      {/* Title */}
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-gray-900 sm:text-3xl">
          Foundations Quarterly Workshop
        </h2>
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
            <h3 className="text-2xl font-semibold text-gray-900 text-center">
              What to Expect
            </h3>
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

        {/* Right Section (Upcoming Workshops Card) */}
        <div className="lg:basis-1/3 w-full">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800">
              Upcoming Workshops
            </h3>
            <div className="mt-4 space-y-4">
              {upcoming.map((workshop, index) => (
                <div key={index} className="border-b border-gray-200 pb-4">
                  <div className="flex justify-between items-center">
                    <h4 className="text-lg font-semibold text-gray-900">
                      {workshop.date}
                    </h4>
                    <span className="text-sm font-semibold text-gray-900">
                      {workshop.fee.split(" ")[0]}
                    </span>{" "}
                    {/* Bold the fee */}
                  </div>
                  <p className="text-sm text-gray-600 mt-2">{workshop.time}</p>
                  <p className="text-sm text-gray-600 mt-2">
                    {workshop.description}
                  </p>
                  <p className="mt-2 text-sm text-gray-600">
                    <span className="font-bold">*</span>{" "}
                    {workshop.fee.split(" ").slice(1).join(" ")}
                  </p>{" "}
                  {/* Split and display the rest of the fee description */}
                  <div className="mt-4">
                    <a
                      href={workshop.registrationLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-gradient-to-r from-blue-600 to-blue-400 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-all"
                    >
                      Register Now
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Workshop;
