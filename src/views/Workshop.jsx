import React from "react";
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
    <main className="py-12 px-4 sm:px-6 lg:px-8 animateFadeIn relative">
      {/* Subtle hexagon background */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0L0 15v30l30 15 30-15V15L30 0z' fill='%23faf7f5' fill-opacity='0.4'/%3E%3C/svg%3E")`,
          backgroundSize: "60px 60px",
        }}
      ></div>
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Title */}
        <h1 className="text-4xl font-bold text-darkBlue font-sans text-center mb-12 md:text-5xl sm:text-3xl">
          Foundations Quarterly Workshop
        </h1>

        {/* What to Expect Section */}
        <div className="mb-12 mx-auto">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              "Career Assessment",
              "Resume and Interview Tips",
              "Networking Strategies",
              "Spiritual Guidance",
            ].map((item, index) => (
              <div
                key={index}
                className="text-md text-gray-900 text-center p-4 border border-[#e8d8d0] rounded-lg hover:bg-[#faf7f5] transition"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Workshop Section */}
        <div className="mb-12 max-w-[31.25rem] mx-auto pb-12">
          <div className="bg-[#006F7F] rounded-lg shadow-md p-6 text-teal-50 w-full">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold text-teal-100">
                Upcoming Workshop
              </h3>
              <CtaButton
                to={upcoming?.registrationLink || "#"}
                variant="primary"
                textColor="text-teal-950"
                className="px-6 py-2"
              >
                Register Now
              </CtaButton>
            </div>
            {upcoming ? (
              <div>
                <h4 className="text-lg font-semibold text-teal-100 mb-2">
                  {upcoming.date}
                </h4>
                <p className="text-sm text-teal-50 mb-2">{upcoming.time}</p>
                <p className="text-sm text-teal-50 mb-2">
                  {upcoming.description}
                </p>
                <p className="text-sm text-teal-50">
                  <span className="font-bold">Fee:</span> {upcoming.fee}
                </p>
              </div>
            ) : (
              <p className="text-teal-50">No upcoming workshops scheduled.</p>
            )}
          </div>
        </div>

        {/* Join Us Section */}
        <div className="mb-12 max-w-5xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Join Us Text */}
            <div className="lg:w-1/2">
              <p className="text-lg text-gray-900 leading-7 mb-6">
                Join us for an empowering workshop that focuses on building
                confidence, networking, and honing your career advancement
                skills.
              </p>
              <ul className="text-base text-gray-900 leading-7 space-y-2">
                <li>
                  <span className="text-[#047857] font-bold">➤</span> Presented
                  by leading experts in leadership and career advancement
                </li>
                <li>
                  <span className="text-[#047857] font-bold">➤</span> Focused on
                  building confidence, networking, and interviewing skills
                </li>
                <li>
                  <span className="text-[#047857] font-bold">➤</span> Includes
                  guidance on LinkedIn, role-playing, networking scenarios, and
                  resume reviews
                </li>
              </ul>
            </div>
            {/* Image */}
            <div className="lg:w-1/2">
              <div className="max-w-md mx-auto">
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
        </div>

        {/* Ongoing Support Section */}
        <div className="max-w-5xl mx-auto mt-8 mb-12">
          <h3 className="text-xl font-semibold text-darkBlue text-center">
            A mentoring group is available for ongoing job search support after
            completion of the workshop.
          </h3>
        </div>
      </div>
    </main>
  );
};

export default Workshop;
