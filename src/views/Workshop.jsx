import React, { useState } from "react";
import { upcomingWorkshops } from "../data/workshops";
import CtaButton from "../components/CtaButton";
import workshopTopics from "../data/workshopTopics";
import HexagonGrid from "../components/HexagonGrid";

const Workshop = () => {
  const [openTopic, setOpenTopic] = useState(null);

  // Get the next upcoming workshop based on the current date
  const today = new Date();
  const upcoming = upcomingWorkshops.filter((workshop) => {
    const workshopDate = new Date(workshop.date);
    return workshopDate >= today;
  })[0]; // Only the first upcoming workshop

  return (
    <>
      <HexagonGrid />
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
            Quarterly Workshop
          </h1>

          {/* What to Expect Section with Popup Buttons */}
          <div className="mb-12 mx-auto">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {workshopTopics.map((topic, index) => (
                <button
                  key={index}
                  className="w-full text-md text-gray-900 text-center p-4 border border-[#e8d8d0] rounded-lg font-semibold focus:outline-none focus:ring-2 focus:ring-secondary
                    shadow-md bg-gradient-to-b from-white to-[#f3edea] hover:from-[#f3edea] hover:to-white
                    active:translate-y-0.5 active:shadow-sm transition
                  "
                  onClick={() => setOpenTopic(index)}
                  type="button"
                  style={{
                    boxShadow:
                      "0 2px 6px 0 rgba(0,0,0,0.07), 0 1.5px 0 0 #e8d8d0",
                  }}
                >
                  {topic.title}
                </button>
              ))}
            </div>
            {/* Modal Popup */}
            {openTopic !== null && (
              <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
                <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-8 relative animate-fadeIn">
                  <button
                    className="absolute top-3 right-3 text-2xl text-secondary hover:text-deepTeal focus:outline-none"
                    onClick={() => setOpenTopic(null)}
                    aria-label="Close"
                  >
                    &times;
                  </button>
                  <h3 className="text-xl font-bold text-darkBlue mb-4">
                    {workshopTopics[openTopic].title}
                  </h3>
                  <p className="text-primary text-lg">
                    {workshopTopics[openTopic].content}
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Upcoming Workshop Section */}
          {/* ...existing code for upcoming workshop and rest of the page... */}
          <div className="mb-12 mx-auto pb-12 flex flex-col md:flex-row justify-between max-w-5xl">
            {/* Upcoming Workshop Card */}
            <div className="w-full md:max-w-[31.25rem]">
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
                  <p className="text-teal-50">
                    No upcoming workshops scheduled.
                  </p>
                )}
              </div>
            </div>
            {/* Workshop Flyers Fieldset */}
            <fieldset className="w-full md:max-w-sm border-2 border-[#00a181] rounded-lg py-4 px-4 flex flex-col items-center">
              <legend className="px-2 text-[#00a181] font-semibold text-base">
                Workshop Flyers
              </legend>
              <div className="flex flex-col md:flex-row gap-4 w-full items-center justify-center px-2">
                <a
                  href="./assets/workshop/vertical-flyer.png"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center group"
                >
                  <img
                    src="./assets/workshop/vertical-flyer.png"
                    alt="Vertical Workshop Flyer"
                    className="w-28 h-40 object-cover rounded shadow group-hover:scale-105 transition"
                  />
                </a>
                <a
                  href="./assets/workshop/horizontal-flyer.png"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center group"
                >
                  <img
                    src="./assets/workshop/horizontal-flyer.png"
                    alt="Horizontal Workshop Flyer"
                    className="w-40 h-28 object-cover rounded shadow group-hover:scale-105 transition"
                  />
                </a>
              </div>
              <p className="mt-3 text-sm text-gray-700 text-center">
                Click on a flyer to view the full-size version.
              </p>
            </fieldset>
          </div>

          {/* ...rest of your component remains unchanged... */}
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
                    <span className="text-[#047857] font-bold">➤</span>{" "}
                    Presented by leading experts in leadership and career
                    advancement
                  </li>
                  <li>
                    <span className="text-[#047857] font-bold">➤</span> Focused
                    on building confidence, networking, and interviewing skills
                  </li>
                  <li>
                    <span className="text-[#047857] font-bold">➤</span> Includes
                    guidance on LinkedIn, role-playing, networking scenarios,
                    and resume reviews
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
              A free mentoring group is available for ongoing job search support
              after completion of the workshop.
            </h3>
          </div>
        </div>
      </main>
    </>
  );
};

export default Workshop;
