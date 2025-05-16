import CtaButton from "../components/CtaButton";

// Static data for the workshop (could be moved to a data file)
const workshopDetails = {
  title: "Foundations Quarterly Workshop",
  description:
    "Join us for an empowering workshop that focuses on building confidence, networking, and honing your career advancement skills. Our workshop offers a four-step approach to help you navigate your career journey with guidance from leading experts.",
  expectations: [
    "Career Assessment",
    "Resume and Interview Tips",
    "Networking Strategies",
    "Spiritual Guidance for Career Success",
  ],
  eventDetails: {
    date: "Saturday, April 5, 2025",
    time: "8:45 AM – 3:00 PM",
    location:
      "St. Jude Career Alliance – Exact location details to be provided upon registration.",
  },
  fee: "$25 fee includes lunch and a program book. Space is limited, so register now to secure your spot!",
  presenters: [
    "Devina Valent - HR Director",
    "Greg Mechler - President, The Human Advantage",
  ],
  registrationText:
    "Don't miss out on this opportunity to gain valuable insights and skills. Register today for our next quarterly workshop! Spaces are limited.",
};

const Workshop = () => {
  return (
    <section className="py-16 px-6 sm:px-8 lg:px-16 bg-[#f8f1eb] max-w-7xl mx-auto my-8 rounded-xl shadow-sm">
      {/* Title and Description */}
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 sm:text-3xl">
          {workshopDetails.title}
        </h2>
        <p className="mt-4 text-lg text-gray-600 leading-7 sm:text-base">
          {workshopDetails.description}
        </p>
      </div>

      {/* What to Expect */}
      <div className="mt-12 max-w-3xl mx-auto">
        <h3 className="text-2xl font-semibold text-gray-900 text-center">
          What to Expect
        </h3>
        <ul className="mt-6 space-y-4">
          {workshopDetails.expectations.map((item, index) => (
            <li
              key={index}
              className="text-lg text-gray-600 leading-6 sm:text-base"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Event Details */}
      <div className="mt-12 max-w-3xl mx-auto">
        <h3 className="text-2xl font-semibold text-gray-900 text-center">
          Event Details
        </h3>
        <div className="mt-6 space-y-3 text-lg text-gray-600 sm:text-base">
          <p>Date: {workshopDetails.eventDetails.date}</p>
          <p>Time: {workshopDetails.eventDetails.time}</p>
          <p>Location: {workshopDetails.eventDetails.location}</p>
        </div>
      </div>

      {/* Workshop Fee */}
      <div className="mt-12 max-w-3xl mx-auto">
        <h3 className="text-2xl font-semibold text-gray-900 text-center">
          Workshop Fee
        </h3>
        <p className="mt-4 text-lg text-gray-600 leading-7 sm:text-base">
          {workshopDetails.fee}
        </p>
      </div>

      {/* Presented By */}
      <div className="mt-12 max-w-3xl mx-auto">
        <h3 className="text-2xl font-semibold text-gray-900 text-center">
          Presented by
        </h3>
        <ul className="mt-6 space-y-4">
          {workshopDetails.presenters.map((presenter, index) => (
            <li
              key={index}
              className="text-lg text-gray-600 leading-6 sm:text-base"
            >
              {presenter}
            </li>
          ))}
        </ul>
      </div>

      {/* Registration */}
      <div className="mt-12 max-w-3xl mx-auto text-center">
        <h3 className="text-2xl font-semibold text-gray-900">Registration</h3>
        <p className="mt-4 text-lg text-gray-600 leading-7 sm:text-base">
          {workshopDetails.registrationText}
        </p>
        <div className="mt-6">
          <CtaButton
            to="/register"
            className="inline-block bg-gradient-to-r from-blue-600 to-blue-400 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 hover:-translate-y-0.5 transition-all shadow-sm"
          >
            Register Now
          </CtaButton>
        </div>
      </div>

      {/* Past Workshop Highlights */}
      <div className="mt-16 max-w-5xl mx-auto">
        <h3 className="text-2xl font-semibold text-gray-900 text-center">
          Past Workshop Highlights
        </h3>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <img
            src="/assets/workshop/2017_Scottie_Caudle_Workshop.jpg"
            alt="Workshop Highlight 1"
            className="w-full h-64 object-cover rounded-lg shadow-sm hover:scale-105 transition-transform duration-300"
          />
          <img
            src="/assets/workshop/2017_Workshop.jpg"
            alt="Workshop Highlight 2"
            className="w-full h-64 object-cover rounded-lg shadow-sm hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </section>
  );
};

export default Workshop;
