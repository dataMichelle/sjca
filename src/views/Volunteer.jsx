import { useState } from "react";
import {
  FaHandsHelping,
  FaMicrophone,
  FaDonate,
  FaCheck,
} from "react-icons/fa";
import HexagonGrid from "../components/HexagonGrid"; // Importing HexagonGrid component
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
    <>
      <HexagonGrid />
      <main className=" py-12 px-4 sm:px-6 lg:px-8 animateFadeIn relative">
        {/* Subtle hexagon background */}

        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-darkBlue font-sans mb-4 sm:text-3xl">
              Serve with Us to Uplift Careers
            </h1>
            <p className="text-lg text-primary max-w-3xl mx-auto mb-8">
              At St. Jude Career Alliance, our church ministry is devoted to
              guiding people toward meaningful careers through faith, support,
              and community. Join us in this mission of hope and service by
              volunteering, sharing your gifts, or giving generously.
            </p>
          </section>

          {/* Volunteer Opportunities */}
          <section className="mb-16 rounded-lg shadow-sm p-8 bg-white">
            <h2 className="text-2xl font-semibold text-darkBlue mb-4 flex items-center gap-2">
              <FaHandsHelping className="text-secondary" /> Volunteer Your Time
            </h2>
            <p className="text-lg text-primary mb-6">
              As a church ministry, we rely on the kindness of volunteers to
              support job seekers and professionals in our community. Your time
              and talents can make a lasting impact, helping others find hope
              and opportunity.
            </p>
            <ul className="space-y-4 mb-6">
              <li className="flex items-start gap-2 text-lg text-primary">
                <FaCheck className="text-secondary mt-1" />
                <div>
                  <strong>Event Support:</strong> Help set up, greet attendees,
                  or manage logistics at our career workshops, bringing warmth
                  to every event.
                </div>
              </li>
              <li className="flex items-start gap-2 text-lg text-primary">
                <FaCheck className="text-secondary mt-1" />
                <div>
                  <strong>Workshop Assistance:</strong> Support sessions on
                  resume building, networking, or job search skills, sharing
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
              href="mailto:careeralliance@stjudeparish.com?subject=Volunteer%20with%20SJCA&body=I%20am%20interested%20in%20volunteering%20with%20SJCA.%20Please%20let%20me%20know%20how%20I%20can%20help."
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
                  <strong>Workshop Presenter:</strong> Lead a session on job
                  search strategies, offering wisdom and encouragement.
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
              {/* <li className="flex items-start gap-2 text-lg text-primary">
                <FaCheck className="text-secondary mt-1" />
                <div>
                  <strong>Workshop Presenter:</strong> Share your story of faith
                  and career success at our events, uplifting others with your
                  journey.
                </div>
              </li> */}
            </ul>
            <p className="text-lg text-primary mb-4">
              <strong>Why Share?</strong> Bless others with your knowledge,
              deepen your faith through service, and connect with our supportive
              community.
            </p>
            <a
              href="mailto:careeralliance@stjudeparish.com?subject=Volunteer%20with%20SJCA%20as%20a%20Presenter&body=I%20would%20like%20to%20offer%20my%20gifts%20as%20a%20speaker%20or%20mentor.%20Please%20contact%20me%20with%20more%20information."
              className="inline-block bg-secondary text-white px-6 py-2 rounded-full font-medium hover:bg-deepTeal transition-all"
              aria-label="Submit speaker or mentor proposal"
            >
              Offer Your Gifts
            </a>
          </section>

          {/* Donate */}
          {/* <section className="mb-16 bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-semibold text-darkBlue mb-4 flex items-center gap-2">
              <FaDonate className="text-secondary" /> Give Generously
            </h2>
            <p className="text-lg text-primary mb-6">
              Your financial support helps us offer workshops, resources, and
              hope to those seeking better careers. Every gift, big or small,
              strengthens our ministry’s outreach.
            </p>
            <ul className="space-y-4 mb-6">
              <li className="flex items-start gap-2 text-lg text-primary">
                <FaCheck className="text-secondary mt-1" />
                <div>
                  <strong>Program Support:</strong> Fund workshops, materials,
                  and guest speakers to provide meaningful learning experiences.
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
                  guides, videos, and tools.
                </div>
              </li>
            </ul>
            <p className="text-lg text-primary mb-4">
              <strong>Why Give?</strong> Reflect God’s generosity, empower
              lives, and be part of our ministry’s mission.
            </p>

            <a
              href="mailto:careeralliance@stjudeparish.com?subject=Donation%20for%20SJCA&body=I%20would%20like%20to%20make%20a%20donation%20to%20support%20SJCA.%20Please%20let%20me%20know%20how%20to%20proceed."
              className="inline-block bg-secondary text-white px-6 py-2 rounded-full font-medium hover:bg-deepTeal transition-all"
              aria-label="Donate now"
            >
              Make a Gift
            </a>
          </section> */}

          {/* Contact Form */}
          <section id="contact-form" className="mb-16">
            <h2 className="text-2xl font-semibold text-darkBlue mb-4">
              Ready to Join Our Ministry?
            </h2>
            <p>
              <a
                href="mailto:careeralliance@stjudeparish.com?subject=Get%20Involved%20with%20SJCA"
                className="text-blue-600 underline"
              >
                Email us to find out more.
              </a>
            </p>
          </section>
        </div>
      </main>
    </>
  );
};

export default GetInvolved;
