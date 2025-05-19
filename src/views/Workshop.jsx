import { upcomingWorkshops } from "../data/workshops";
import CtaButton from "../components/CtaButton";

const Workshop = () => {
  // Get the next upcoming workshop based on the current date
  const today = new Date();
  const upcoming = upcomingWorkshops.filter((workshop) => {
    const workshopDate = new Date(workshop.date);
    return workshopDate >= today;
  })[0]; // Only the first upcoming workshop

  return (
    <main className=" py-12 px-4 sm:px-6 lg:px-8 animateFadeIn relative">
      {/* Subtle hexagon background */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0L0 15v30l30 15 30-15V15L30 0z' fill='%23a4e473' fill-opacity='0.4'/%3E%3C/svg%3E")`,
          backgroundSize: "60px 60px",
        }}
      ></div>
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Title */}
        <h1 className="text-4xl font-bold text-darkBlue font-sans text-center mb-12 md:text-5xl">
          Foundations Quarterly Workshop
        </h1>

        {/* Main Content Layout */}
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Section (Workshop Details) */}
          <div className="lg:w-2/3">
            <div className="bg-white rounded-lg shadow-sm p-8">
              <p className="text-lg text-primary leading-7 mb-6">
                Join us for an empowering workshop that focuses on building
                confidence, networking, and honing your career advancement
                skills. Our workshop offers a four-step approach to help you
                navigate your career journey with guidance from leading experts.
              </p>
              <ul className="text-base text-primary leading-7 space-y-3">
                <li>
                  <span className="text-secondary font-bold">➤</span> Presented
                  by leading experts in leadership and career advancement
                </li>
                <li>
                  <span className="text-secondary font-bold">➤</span> Focused on
                  building confidence, networking, and interviewing skills
                </li>
                <li>
                  <span className="text-secondary font-bold">➤</span> Includes
                  guidance on LinkedIn, role-playing, networking scenarios, and
                  resume reviews
                </li>
              </ul>
            </div>

            {/* What to Expect */}
            <div className="bg-white rounded-lg shadow-sm p-8 mt-8">
              <h2 className="text-2xl font-semibold text-darkBlue text-center mb-6">
                What to Expect
              </h2>
              <ul className="grid gap-4 sm:grid-cols-2">
                {[
                  "Career Assessment",
                  "Resume and Interview Tips",
                  "Networking Strategies",
                  "Spiritual Guidance for Career Success",
                ].map((item, index) => (
                  <li
                    key={index}
                    className="text-lg text-primary flex items-center"
                  >
                    <span className="text-secondary mr-2">•</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Section (Upcoming Workshop Card + Image) */}
          <div className="lg:w-1/3 flex flex-col gap-8">
            {/* Upcoming Workshop Card */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-semibold text-darkBlue mb-4">
                Upcoming Workshop
              </h3>
              {upcoming ? (
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="text-lg font-semibold text-darkBlue">
                      {upcoming.date}
                    </h4>
                    <span className="text-sm font-semibold text-darkBlue">
                      {upcoming.fee.split(" ")[0]}
                    </span>
                  </div>
                  <p className="text-sm text-primary mb-2">{upcoming.time}</p>
                  <p className="text-sm text-primary mb-2">
                    {upcoming.description}
                  </p>
                  <p className="text-sm text-primary">
                    <span className="font-bold">*</span>{" "}
                    {upcoming.fee.split(" ").slice(1).join(" ")}
                  </p>
                  <a
                    href={upcoming.registrationLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4 px-6 py-2 bg-secondary text-white rounded-full font-medium hover:bg-deepTeal transition"
                  >
                    Register Now
                  </a>
                </div>
              ) : (
                <p className="text-primary">No upcoming workshops scheduled.</p>
              )}
            </div>

            {/* Image */}
            <div className="relative w-full h-64 rounded-lg overflow-hidden shadow-sm">
              <img
                src="/assets/workshop/2017_Workshop.jpg"
                alt="Workshop"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Workshop;
