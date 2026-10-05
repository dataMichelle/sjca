import React, { useState } from "react";
import { featuredUpcomingWorkshop, upcomingWorkshops } from "../data/workshops";
import CtaButton from "../components/CtaButton";
import workshopTopics from "../data/workshopTopics";
import HexagonGrid from "../components/HexagonGrid";
import SEO from "../components/SEO";
import OptimizedImage from "../components/OptimizedImage";
import { FaArrowRight } from "react-icons/fa";

const Workshop = () => {
  const [openTopic, setOpenTopic] = useState(null);

  const upcoming = featuredUpcomingWorkshop;

  return (
    <>
      <SEO
        title="Career Workshop - St. Jude Career Alliance"
        description="Join our quarterly workshop to enhance your career skills with expert guidance on confidence building, networking, and interview preparation."
        image="https://stjudecareeralliance.com/assets/og-image.png"
        url="https://stjudecareeralliance.com/workshop"
      />
      <HexagonGrid />
      <main
        className="py-12 px-4 sm:px-6 lg:px-8 animateFadeIn relative"
        role="main"
        aria-labelledby="workshop-heading"
      >
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0L0 15v30l30 15 30-15V15L30 0z' fill='%23faf7f5' fill-opacity='0.4'/%3E%3C/svg%3E")`,
            backgroundSize: "60px 60px",
          }}
        ></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <h1
            id="workshop-heading"
            className="text-4xl font-bold text-darkBlue font-sans text-center mb-12 md:text-5xl sm:text-3xl"
          >
            Quarterly Workshop
          </h1>

          <div className="mb-12 mx-auto">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {workshopTopics.map((topic, index) => (
                <button
                  key={index}
                  className="w-full text-md text-gray-900 text-center p-4 border border-[#e8d8d0] rounded-lg font-semibold focus:outline-none focus:ring-2 focus:ring-secondary shadow-md bg-gradient-to-b from-white to-[#f3edea] hover:from-[#f3edea] hover:to-white active:translate-y-0.5 active:shadow-sm transition"
                  onClick={() => setOpenTopic(index)}
                  type="button"
                  aria-expanded={openTopic === index}
                  aria-controls={`topic-${index}`}
                >
                  {topic.title}
                </button>
              ))}
            </div>

            {openTopic !== null && (
              <div
                className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
                role="dialog"
                aria-modal="true"
              >
                <div
                  className="bg-white rounded-lg shadow-lg max-w-md w-full p-8 relative animate-fadeIn"
                  id={`topic-${openTopic}`}
                >
                  <button
                    className="absolute top-3 right-3 text-2xl text-secondary hover:text-deepTeal focus:outline-none"
                    onClick={() => setOpenTopic(null)}
                    aria-label="Close topic details"
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

          <div className="mb-12 mx-auto pb-12 flex flex-col md:flex-row justify-between max-w-5xl">
            <div className="w-full md:max-w-[31.25rem]">
              <div className="bg-[#006F7F] rounded-lg shadow-md p-6 text-teal-50 w-full">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between mb-4">
                  <h3 className="text-xl font-semibold text-teal-100">
                    Upcoming Workshop
                  </h3>
                  <div className="flex flex-col items-center sm:items-end gap-2">
                    <CtaButton
                      to={upcoming?.registrationLink || "#"}
                      variant="primary"
                      textColor="text-teal-950"
                      className="px-6 py-2 w-full sm:w-auto"
                    >
                      Register Now
                    </CtaButton>
                  </div>
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

            <fieldset className="w-full md:max-w-sm border-2 border-[#00a181] rounded-lg py-4 px-4 flex flex-col items-center">
                <legend className="px-2 text-[#00a181] font-semibold text-base">
                  Workshop Flyer
                </legend>
                <p className="mt-0 mb-4 text-sm text-gray-700 text-center leading-relaxed">
                  Click on the flyer to view the full-size version.
                </p>
                <a
                  href="/assets/workshop/images/horizontal-flyer-oct26.png"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center group"
                >
                  <img
                    src="/assets/workshop/images/horizontal-flyer-oct26.png"
                    alt="Horizontal Workshop Flyer"
                    className="w-40 h-28 object-cover rounded shadow group-hover:scale-105 transition"
                  />
                </a>

              {upcoming?.registrationLink && (
                <div className="mt-4 w-full border-t border-[#d8e7e3] pt-3 text-center">
                  <a
                    href={upcoming.registrationLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mx-auto flex w-fit rounded-md bg-white p-1 shadow-sm ring-1 ring-[#d8e7e3] hover:ring-[#00a181] transition"
                    aria-label="Scan QR code to register for the workshop"
                  >
                    <img
                      src="/assets/workshop/images/qr-oct26.png"
                      alt="QR code for workshop registration"
                      className="h-24 w-24 object-contain"
                    />
                  </a>
                  <p className="mt-2 text-xs text-gray-700">
                    Scan to register or{" "}
                    <a
                      href="/assets/workshop/qr-oct26.png"
                      download="sjca-workshop-registration-qr.png"
                      className="font-semibold text-[#006F7F] underline underline-offset-2 hover:text-[#004f5a]"
                    >
                      download the QR code
                    </a>
                  </p>
                </div>
              )}
            </fieldset>
          </div>

          <div className="mb-12 max-w-7xl mx-auto">
            <h3 className="text-2xl font-semibold text-darkBlue text-center mb-8">
              2027 Workshop Schedule
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {upcomingWorkshops.map((workshop, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 text-center"
                >
                  <p className="text-teal-600 font-semibold text-lg">
                    {workshop.date}
                  </p>
                </div>
              ))}
            </div>
            <div className="text-center mt-6">
              <p className="text-gray-600 text-sm">
                Registration links will be available closer to each workshop
                date
              </p>
            </div>
          </div>

          <div className="mb-12 max-w-5xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="lg:w-1/2">
                <p className="text-lg text-gray-900 leading-7 mb-6">
                  Join us for an empowering workshop that focuses on building
                  confidence, networking, and honing your career advancement
                  skills.
                </p>
                <ul className="text-base text-gray-900 leading-7 space-y-2">
                  <li className="flex items-center">
                    <FaArrowRight className="text-[#047857] mr-3 flex-shrink-0" />
                    Presented by leading experts in leadership and career
                    advancement
                  </li>
                  <li className="flex items-center">
                    <FaArrowRight className="text-[#047857] mr-3 flex-shrink-0" />
                    Focused on building confidence, networking, and interviewing
                    skills
                  </li>
                  <li className="flex items-center">
                    <FaArrowRight className="text-[#047857] mr-3 flex-shrink-0" />
                    Includes guidance on LinkedIn, role-playing, networking
                    scenarios, and resume reviews
                  </li>
                </ul>
              </div>
              <div className="lg:w-1/2">
                <div className="max-w-md mx-auto">
                  <div className="relative w-full h-64 rounded-lg overflow-hidden shadow-sm">
                    <OptimizedImage
                      src="/assets/workshop/2017_Workshop.jpg"
                      alt="Workshop participants learning career development skills"
                      className="w-full h-full object-cover"
                      width={400}
                      height={256}
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-5xl mx-auto mt-8 mb-12">
            <h3 className="text-xl font-semibold text-darkBlue text-center">
              We offer workshop participants a weekly mentoring meeting to
              support continued momentum and results beyond the workshop.
            </h3>
          </div>
        </div>
      </main>
    </>
  );
};

export default Workshop;
