import CtaButton from "../components/CtaButton";

const Workshop = () => {
  return (
    <div className="py-16 px-[8%] bg-[#f8f1eb] rounded-lg shadow-md mt-8 text-center">
      <h2 className="text-4xl font-semibold text-[#1a3557] mb-6 md:text-3xl">
        Foundations Quarterly Workshop
      </h2>
      <p className="text-lg leading-relaxed text-gray-600 mb-8 md:text-base">
        Join us for an empowering workshop that focuses on building confidence,
        networking, and honing your career advancement skills. Our workshop
        offers a four-step approach to help you navigate your career journey
        with guidance from leading experts.
      </p>
      <h3 className="text-2xl font-semibold text-gray-800 mb-4">
        What to Expect
      </h3>
      <ul className="list-none mb-8">
        {[
          "Career Assessment",
          "Resume and Interview Tips",
          "Networking Strategies",
          "Spiritual Guidance for Career Success",
        ].map((item, index) => (
          <li
            key={index}
            className="text-lg font-medium text-gray-600 mb-4 md:text-base"
          >
            {item}
          </li>
        ))}
      </ul>
      <h3 className="text-2xl font-semibold text-gray-800 mb-4">
        Event Details
      </h3>
      <p className="text-lg text-gray-600 mb-4">
        Date: Saturday, April 5, 2025
      </p>
      <p className="text-lg text-gray-600 mb-4">Time: 8:45 AM – 3:00 PM</p>
      <p className="text-lg text-gray-600 mb-8">
        Location: St. Jude Career Alliance – Exact location details to be
        provided upon registration.
      </p>
      <h3 className="text-2xl font-semibold text-gray-800 mb-4">
        Workshop Fee
      </h3>
      <p className="text-lg text-gray-600 mb-8">
        $25 fee includes lunch and a program book. Space is limited, so register
        now to secure your spot!
      </p>
      <h3 className="text-2xl font-semibold text-gray-800 mb-4">
        Presented by
      </h3>
      <ul className="list-none mb-8">
        {[
          "Devina Valent - HR Director",
          "Greg Mechler - President, The Human Advantage",
        ].map((presenter, index) => (
          <li key={index} className="text-lg font-medium text-gray-600 mb-4">
            {presenter}
          </li>
        ))}
      </ul>
      <h3 className="text-2xl font-semibold text-gray-800 mb-4">
        Registration
      </h3>
      <p className="text-lg text-gray-600 mb-8">
        Don't miss out on this opportunity to gain valuable insights and skills.
        Register today for our next quarterly workshop! Spaces are limited.
      </p>
      <CtaButton
        to="/register"
        className="bg-gradient-to-br from-[#0073e6] to-[#00a3e0] hover:-translate-y-1 hover:shadow-lg"
      >
        Register Now
      </CtaButton>
      <h3 className="text-2xl font-semibold text-gray-800 mt-12 mb-4">
        Past Workshop Highlights
      </h3>
      <div className="flex justify-center gap-5 md:flex-col">
        <img
          src="https://via.placeholder.com/400"
          alt="Workshop Highlight 1"
          className="w-[45%] rounded-lg shadow-md hover:scale-105 transition-transform md:w-[80%]"
        />
        <img
          src="https://via.placeholder.com/400"
          alt="Workshop Highlight 2"
          className="w-[45%] rounded-lg shadow-md hover:scale-105 transition-transform md:w-[80%]"
        />
      </div>
    </div>
  );
};

export default Workshop;
