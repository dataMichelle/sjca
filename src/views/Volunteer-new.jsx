import { useState } from "react";
import {
  FaCheck,
  FaHandsHelping,
  FaMicrophone,
  FaRegCopy,
} from "react-icons/fa";
import HexagonGrid from "../components/HexagonGrid"; // Importing HexagonGrid component

// --- Toast Component ---
function Toast({ show, onClose, email }) {
  return (
    show && (
      <div className="fixed bottom-6 left-1/2 z-[9999] -translate-x-1/2 bg-white border border-gray-300 shadow-lg rounded-lg px-4 py-3 flex items-center gap-2 animate-fade-in">
        <span className="text-gray-800 text-sm">
          If you do not have an email application set up, please copy this
          email:
        </span>
        <span className="font-medium text-gray-900">{email}</span>
        <CopyEmailButton email={email} />
        <button
          onClick={onClose}
          className="ml-2 text-gray-400 hover:text-gray-700 text-lg px-1"
          aria-label="Close"
        >
          ×
        </button>
      </div>
    )
  );
}

const EMAIL = "careeralliance@stjudeparish.com";

function CopyEmailButton({ email }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="ml-2 text-sm text-blue-700 underline hover:text-blue-900 transition inline-flex items-center"
      aria-label="Copy email address"
    >
      {copied ? (
        <>
          <FaCheck className="text-green-600 mr-1" />
          Copied!
        </>
      ) : (
        <>
          <FaRegCopy className="mr-1" />
          Copy
        </>
      )}
    </button>
  );
}

const GetInvolved = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    involvement: "",
    message: "",
  });
  const [showToast, setShowToast] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., API call)
    console.log("Form submitted:", formData);
  };

  const handleVolunteerClick = (e) => {
    e.preventDefault();
    const mailto = `mailto:${EMAIL}?subject=SJCA%20-%20Volunteer%20My%20Time&body=I%20am%20interested%20in%20volunteering%20my%20time%20with%20SJCA.%0A%0APlease%20let%20me%20know%20how%20I%20can%20help.%0A%0ASincerely,`;
    const now = Date.now();
    window.location.href = mailto;
    setTimeout(() => {
      const stillHere = Date.now() - now > 1000;
      if (stillHere) setShowToast(true);
    }, 1500);
  };

  const handleSpeakerClick = (e) => {
    e.preventDefault();
    const mailto = `mailto:${EMAIL}?subject=SJCA%20-%20Volunteer%20as%20a%20Speaker&body=I%20am%20interested%20in%20volunteering%20as%20a%20speaker%20or%20mentor%20with%20SJCA.%0A%0APlease%20let%20me%20know%20how%20I%20can%20share%20my%20gifts.%0A%0ASincerely,`;
    const now = Date.now();
    window.location.href = mailto;
    setTimeout(() => {
      const stillHere = Date.now() - now > 1000;
      if (stillHere) setShowToast(true);
    }, 1500);
  };

  const handleMailClick = (e) => {
    e.preventDefault();
    const mailto = `mailto:${EMAIL}?subject=Volunteering%20with%20St.%20Jude%20Career%20Alliance&body=I%20am%20considering%20volunteering%20but%20would%20like%20more%20information%20first.%0A%0ASincerely,`;
    const now = Date.now();
    window.location.href = mailto;
    setTimeout(() => {
      const stillHere = Date.now() - now > 1000;
      if (stillHere) setShowToast(true);
    }, 1500);
  };

  function Toast({ show, onClose, email }) {
    return (
      show && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center">
          <div className="bg-[#FFF9C4] border border-yellow-400 shadow-xl rounded-lg px-6 py-5 max-w-md w-full text-center animate-fade-in relative">
            <p className="text-gray-800 text-sm mb-1 font-semibold">
              If you do not have an email application set up,
            </p>
            <p className="text-gray-800 text-sm mb-3">
              please copy this email:
            </p>
            <p className="font-medium text-gray-900 mb-3">{email}</p>
            <CopyEmailButton email={email} />
            <button
              onClick={onClose}
              className="absolute top-2 right-2 text-gray-400 hover:text-gray-700 text-4xl px-2"
              aria-label="Close"
              style={{ lineHeight: 1, width: "2.5rem", height: "2.5rem" }}
            >
              ×
            </button>
          </div>
        </div>
      )
    );
  }

  return (
    <>
      <HexagonGrid />
      <main className="py-12 px-4 sm:px-6 lg:px-8 animateFadeIn relative">
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
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-start gap-2 mt-4">
              <a
                href={`mailto:${EMAIL}?subject=SJCA%20-%20Volunteer%20My%20Time&body=I%20am%20interested%20in%20volunteering%20my%20time%20with%20SJCA.%20Please%20let%20me%20know%20how%20I%20can%20help.`}
                onClick={handleVolunteerClick}
                className="inline-block bg-secondary text-white px-6 py-2 rounded-full font-medium hover:bg-deepTeal transition-all"
                aria-label="Apply to volunteer"
              >
                Join as a Volunteer
              </a>
              <span className="inline-flex items-center ml-0 sm:ml-4 select-all text-gray-700">
                <span className="no-underline">{EMAIL}</span>
                <CopyEmailButton />
              </span>
            </div>
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
            </ul>
            <p className="text-lg text-primary mb-4">
              <strong>Why Share?</strong> Bless others with your knowledge,
              deepen your faith through service, and connect with our supportive
              community.
            </p>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-start gap-2 mt-4">
              <a
                href={`mailto:${EMAIL}?subject=SJCA%20-%20Volunteer%20as%20a%20Speaker&body=I%20am%20interested%20in%20volunteering%20as%20a%20speaker%20or%20mentor%20with%20SJCA.%20Please%20let%20me%20know%20how%20I%20can%20share%20my%20gifts.`}
                onClick={handleSpeakerClick}
                className="inline-block bg-secondary text-white px-6 py-2 rounded-full font-medium hover:bg-deepTeal transition-all"
                aria-label="Volunteer as a speaker"
              >
                Share Your Gifts
              </a>
              <span className="inline-flex items-center ml-0 sm:ml-4 select-all text-gray-700">
                <span className="no-underline">{EMAIL}</span>
                <CopyEmailButton />
              </span>
            </div>
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
          <section id="contact-form" className="mb-16 text-center">
            <h2 className="text-2xl font-semibold text-darkBlue mb-4">
              Still considering how to help?
            </h2>
            <a
              href={`mailto:${EMAIL}?subject=Volunteering%20with%20St.%20Jude%20Career%20Alliance&body=I%20am%20considering%20volunteering%20but%20would%20like%20more%20information%20first.`}
              onClick={handleMailClick}
              className="inline-block bg-secondary text-white px-6 py-2 rounded-full font-medium hover:bg-deepTeal transition-all"
              aria-label="Apply to volunteer"
            >
              Contact Us
            </a>

            {/* <p className="text-lg text-primary mb-6">
              Email us at{" "}
              <span className="underline text-blue-600">{EMAIL}</span>
              <CopyEmailButton /> for more information about our ministry, or if
              you have questions.
            </p> */}
            {/* <p>
              <a
                href="mailto:careeralliance@stjudeparish.com?subject=Get%20Involved%20with%20SJCA"
                className="text-blue-600 underline"
              >
                Email us to find out more.
              </a>
            </p> */}
          </section>
        </div>
      </main>
      <Toast
        show={showToast}
        onClose={() => setShowToast(false)}
        email={EMAIL}
      />
    </>
  );
};

export default GetInvolved;
