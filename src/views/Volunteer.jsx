import { useState } from "react";
import { FaCheck, FaHandsHelping, FaMicrophone } from "react-icons/fa";
import HexagonGrid from "../components/HexagonGrid";
import SEO from "../components/SEO";
import EmailToast from "../components/EmailToast";

const EMAIL = "careeralliance@stjudeparish.com";

const GetInvolved = () => {
  const [showToast, setShowToast] = useState(false);

  const handleMailClick = (mailto) => {
    const now = Date.now();
    window.location.href = mailto;
    setTimeout(() => {
      const stillHere = Date.now() - now > 1000;
      if (stillHere) setShowToast(true);
    }, 1500);
  };

  return (
    <>
      <SEO
        title="Get Involved - St. Jude Career Alliance"
        description="Join St. Jude Career Alliance in our mission to uplift careers through volunteering, sharing your gifts, and giving generously. Learn how you can make a difference."
        image="https://stjudecareeralliance.com/assets/og-image.png"
        url="https://stjudecareeralliance.com/get-involved"
      />
      <HexagonGrid />

      <main className="py-12 px-4 sm:px-6 lg:px-8 animateFadeIn relative">
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
              <FaHandsHelping className="text-secondary" aria-hidden="true" />{" "}
              Volunteer Your Time
            </h2>
            <p className="text-lg text-primary mb-6">
              As a church ministry, we rely on the kindness of volunteers to
              support job seekers and professionals in our community.
            </p>
            <ul className="space-y-4 mb-6">
              <li className="flex items-start gap-2 text-lg text-primary">
                <FaCheck className="text-secondary mt-1" aria-hidden="true" />
                <div>
                  <strong>Event Support:</strong> Help set up, greet attendees,
                  or manage logistics.
                </div>
              </li>
              <li className="flex items-start gap-2 text-lg text-primary">
                <FaCheck className="text-secondary mt-1" aria-hidden="true" />
                <div>
                  <strong>Workshop Assistance:</strong> Support sessions on
                  resume building, networking, or job search skills.
                </div>
              </li>
              <li className="flex items-start gap-2 text-lg text-primary">
                <FaCheck className="text-secondary mt-1" aria-hidden="true" />
                <div>
                  <strong>Community Outreach:</strong> Spread the word about our
                  ministry’s programs.
                </div>
              </li>
            </ul>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-start gap-2 mt-4">
              <a
                href={`mailto:${EMAIL}?subject=SJCA%20-%20Volunteer%20My%20Time&body=I%20am%20interested%20in%20volunteering%20my%20time%20with%20SJCA.`}
                onClick={(e) => {
                  e.preventDefault();
                  handleMailClick(
                    `mailto:${EMAIL}?subject=SJCA%20-%20Volunteer%20My%20Time&body=I%20am%20interested%20in%20volunteering%20my%20time%20with%20SJCA.`
                  );
                }}
                className="inline-block bg-secondary text-white px-6 py-2 rounded-full font-medium hover:bg-deepTeal transition-all"
                aria-label="Email us to volunteer your time"
              >
                Join as a Volunteer
              </a>
            </div>
          </section>

          {/* Share Your Gifts */}
          <section className="mb-16 bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-semibold text-darkBlue mb-4 flex items-center gap-2">
              <FaMicrophone className="text-secondary" aria-hidden="true" />{" "}
              Share Your Gifts
            </h2>
            <p className="text-lg text-primary mb-6">
              Share your knowledge and experiences with our community as a
              speaker or mentor.
            </p>
            <ul className="space-y-4 mb-6">
              <li className="flex items-start gap-2 text-lg text-primary">
                <FaCheck className="text-secondary mt-1" aria-hidden="true" />
                <div>
                  <strong>Workshop Presenter:</strong> Lead a session on job
                  search strategies.
                </div>
              </li>
              <li className="flex items-start gap-2 text-lg text-primary">
                <FaCheck className="text-secondary mt-1" aria-hidden="true" />
                <div>
                  <strong>Mentor:</strong> Provide one-on-one support.
                </div>
              </li>
            </ul>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-start gap-2 mt-4">
              <a
                href={`mailto:${EMAIL}?subject=SJCA%20-%20Volunteer%20as%20a%20Speaker&body=I%20am%20interested%20in%20volunteering%20as%20a%20speaker.`}
                onClick={(e) => {
                  e.preventDefault();
                  handleMailClick(
                    `mailto:${EMAIL}?subject=SJCA%20-%20Volunteer%20as%20a%20Speaker&body=I%20am%20interested%20in%20volunteering%20as%20a%20speaker.`
                  );
                }}
                className="inline-block bg-secondary text-white px-6 py-2 rounded-full font-medium hover:bg-deepTeal transition-all"
                aria-label="Email us to volunteer as a speaker"
              >
                Share Your Gifts
              </a>
            </div>
          </section>

          {/* Contact Us */}
          <section id="contact-form" className="mb-16 text-center">
            <h2 className="text-2xl font-semibold text-darkBlue mb-4">
              Still considering how to help?
            </h2>
            <a
              href={`mailto:${EMAIL}?subject=Volunteering%20with%20SJCA&body=I%20am%20considering%20volunteering%20but%20would%20like%20more%20information.`}
              onClick={(e) => {
                e.preventDefault();
                handleMailClick(
                  `mailto:${EMAIL}?subject=Volunteering%20with%20SJCA&body=I%20am%20considering%20volunteering%20but%20would%20like%20more%20information.`
                );
              }}
              className="inline-block bg-secondary text-white px-6 py-2 rounded-full font-medium hover:bg-deepTeal transition-all"
              aria-label="Email us for more information"
            >
              Contact Us
            </a>
          </section>
        </div>
      </main>
      <EmailToast
        show={showToast}
        onClose={() => setShowToast(false)}
        email={EMAIL}
        role="alertdialog"
      />
    </>
  );
};

export default GetInvolved;
