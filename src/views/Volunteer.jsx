import { useState } from "react";
import {
  FaHandsHelping,
  FaMicrophone,
  FaDonate,
  FaCheck,
} from "react-icons/fa";

const GetInvolved = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    involvement: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., API call)
    console.log("Form submitted:", formData);
  };

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

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-darkBlue font-sans mb-4">
            Serve with Us to Uplift Careers
          </h1>
          <p className="text-lg text-primary max-w-3xl mx-auto mb-8">
            At St. Jude Career Alliance, our church ministry is devoted to
            guiding people toward meaningful careers through faith, support, and
            community. Join us in this mission of hope and service by
            volunteering, sharing your gifts, or giving generously.
          </p>
        </section>

        {/* Volunteer Opportunities */}
        <section className="mb-16 rounded-lg shadow-sm p-8">
          <h2 className="text-2xl font-semibold text-darkBlue mb-4 flex items-center gap-2">
            <FaHandsHelping className="text-secondary" /> Volunteer Your Time
          </h2>
          <p className="text-lg text-primary mb-6">
            As a church ministry, we rely on the kindness of volunteers to
            support job seekers and professionals in our community. Your time
            and talents can make a lasting impact, helping others find hope and
            opportunity.
          </p>
          <ul className="space-y-4 mb-6">
            <li className="flex items-start gap-2 text-lg text-primary">
              <FaCheck className="text-secondary mt-1" />
              <div>
                <strong>Event Support:</strong> Help set up, greet attendees, or
                manage logistics at our career workshops, bringing warmth to
                every event.
              </div>
            </li>
            <li className="flex items-start gap-2 text-lg text-primary">
              <FaCheck className="text-secondary mt-1" />
              <div>
                <strong>Workshop Assistance:</strong> Support sessions on resume
                building, networking, or job search skills, sharing
                encouragement with participants.
              </div>
            </li>
            <li className="flex items-start gap-2 text-lg text-primary">
              <FaCheck className="text-secondary mt-1" />
              <div>
                <strong>Community Outreach:</strong> Spread the word about our
                ministry’s programs at local churches, schools, or job fairs.
              </div>
            </li>
          </ul>
          <p className="text-lg text-primary mb-4">
            <strong>Why Volunteer?</strong> Serve others in faith, build
            meaningful connections, and grow in your own journey of giving.
          </p>
          <a
            href="#volunteer-form"
            className="inline-block bg-secondary text-white px-6 py-2 rounded-full font-medium hover:bg-deepTeal transition-all"
            aria-label="Apply to volunteer"
          >
            Join as a Volunteer
          </a>
        </section>

        {/* Become a Speaker or Mentor */}
        <section className="mb-16 bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-2xl font-semibold text-darkBlue mb-4 flex items-center gap-2">
            <FaMicrophone className="text-secondary" /> Share Your Gifts
          </h2>
          <p className="text-lg text-primary mb-6">
            God has blessed you with unique skills and experiences—share them
            with our community! As a speaker or mentor, you can inspire and
            guide job seekers and professionals in their career paths.
          </p>
          <ul className="space-y-4 mb-6">
            <li className="flex items-start gap-2 text-lg text-primary">
              <FaCheck className="text-secondary mt-1" />
              <div>
                <strong>Workshop Speaker:</strong> Lead a session on job search
                strategies, leadership, or career growth, offering wisdom and
                encouragement.
              </div>
            </li>
            <li className="flex items-start gap-2 text-lg text-primary">
              <FaCheck className="text-secondary mt-1" />
              <div>
                <strong>Mentor:</strong> Walk alongside someone, providing
                one-on-one support to help them navigate their career with
                confidence.
              </div>
            </li>
            <li className="flex items-start gap-2 text-lg text-primary">
              <FaCheck className="text-secondary mt-1" />
              <div>
                <strong>Panelist:</strong> Share your story of faith and career
                success at our events, uplifting others with your journey.
              </div>
            </li>
          </ul>
          <p className="text-lg text-primary mb-4">
            <strong>Why Share?</strong> Bless others with your knowledge, deepen
            your faith through service, and connect with our supportive
            community.
          </p>
          <a
            href="#speaker-mentor-form"
            className="inline-block bg-secondary text-white px-6 py-2 rounded-full font-medium hover:bg-deepTeal transition-all"
            aria-label="Submit speaker or mentor proposal"
          >
            Offer Your Gifts
          </a>
        </section>

        {/* Donate */}
        <section className="mb-16 bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-2xl font-semibold text-darkBlue mb-4 flex items-center gap-2">
            <FaDonate className="text-secondary" /> Give Generously
          </h2>
          <p className="text-lg text-primary mb-6">
            Your financial support helps us offer workshops, resources, and hope
            to those seeking better careers. Every gift, big or small,
            strengthens our ministry’s outreach.
          </p>
          <ul className="space-y-4 mb-6">
            <li className="flex items-start gap-2 text-lg text-primary">
              <FaCheck className="text-secondary mt-1" />
              <div>
                <strong>Program Support:</strong> Fund workshops, materials, and
                guest speakers to provide meaningful learning experiences.
              </div>
            </li>
            <li className="flex items-start gap-2 text-lg text-primary">
              <FaCheck className="text-secondary mt-1" />
              <div>
                <strong>Scholarships:</strong> Help job seekers attend our
                programs at no cost, opening doors to new opportunities.
              </div>
            </li>
            <li className="flex items-start gap-2 text-lg text-primary">
              <FaCheck className="text-secondary mt-1" />
              <div>
                <strong>Resource Creation:</strong> Support the development of
                guides, videos, and tools for career growth.
              </div>
            </li>
          </ul>
          <p className="text-lg text-primary mb-4">
            <strong>Why Give?</strong> Reflect God’s generosity, empower lives,
            and be part of our ministry’s mission.
          </p>
          <a
            href="#donation-form"
            className="inline-block bg-secondary text-white px-6 py-2 rounded-full font-medium hover:bg-deepTeal transition-all"
            aria-label="Donate now"
          >
            Make a Gift
          </a>
        </section>

        {/* Contact Form */}
        <section id="contact-form" className="mb-16">
          <h2 className="text-2xl font-semibold text-darkBlue mb-4">
            Ready to Join Our Ministry?
          </h2>
          <p className="text-lg text-primary mb-6">
            We’re excited to welcome you to St. Jude Career Alliance! Fill out
            the form below to volunteer, share your skills, give, or learn more.
            Our team will reach out to guide you in taking the next step.
          </p>
          <form
            onSubmit={handleSubmit}
            className="bg-white p-8 rounded-lg shadow-sm max-w-2xl mx-auto"
          >
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-primary font-medium mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full rounded-md border border-gray-300 focus:ring-secondary focus:border-secondary transition-all"
                required
                aria-required="true"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-primary font-medium mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full rounded-md border border-gray-300 focus:ring-secondary focus:border-secondary transition-all"
                required
                aria-required="true"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="involvement"
                className="block text-primary font-medium mb-2"
              >
                How Would You Like to Help?
              </label>
              <select
                id="involvement"
                name="involvement"
                value={formData.involvement}
                onChange={handleChange}
                className="w-full rounded-md border border-gray-300 focus:ring-secondary focus:border-secondary transition-all"
                required
                aria-required="true"
              >
                <option value="">Select an option</option>
                <option value="volunteer">Volunteer</option>
                <option value="speaker">Speaker</option>
                <option value="mentor">Mentor</option>
                <option value="donate">Donate</option>
              </select>
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-primary font-medium mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full rounded-md border border-gray-300 focus:ring-secondary focus:border-secondary transition-all"
                rows="4"
                aria-describedby="message-help"
              ></textarea>
              <p id="message-help" className="text-sm text-primary mt-1">
                Share your thoughts or questions about joining our ministry.
              </p>
            </div>
            <button
              type="submit"
              className="bg-secondary text-white px-6 py-2 rounded-full font-medium hover:bg-deepTeal transition-all"
              aria-label="Submit involvement form"
            >
              Send Your Interest
            </button>
          </form>
        </section>
      </div>
    </main>
  );
};

export default GetInvolved;
