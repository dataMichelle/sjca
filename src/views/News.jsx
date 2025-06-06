import React from "react";
import HexagonGrid from "../components/HexagonGrid"; // Importing HexagonGrid component
import SEO from "../components/SEO"; // Importing SEO component

const News = () => {
  return (
    <>
      <SEO
        title="News and Updates - St. Jude Career Alliance"
        description="Stay updated with the latest news, events, and success stories from St. Jude Career Alliance. Empowering job seekers with hope, guidance, and practical tools."
        image="https://stjudecareeralliance.com/assets/og-image.png"
        url="https://stjudecareeralliance.com/news"
      />
      <HexagonGrid />
      <main className="py-12 px-4 sm:px-6 lg:px-8 animateFadeIn relative">
        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-darkBlue font-sans mb-4 sm:text-3xl">
              News and Updates
            </h1>
            <p className="text-lg text-primary max-w-3xl mx-auto mb-8">
              From workshops and guest speakers to success stories and community
              events, we are dedicated to empowering job seekers with hope,
              guidance, and practical tools.
            </p>
          </section>
          {/* News Section */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold text-darkBlue mb-4">
              Latest News
            </h2>

            <div className="space-y-8">
              {/* Featured Article */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-xl font-semibold text-darkBlue mb-2">
                  Texas Catholic Features St. Jude Career Alliance
                </h3>
                <h4 className="text-lg italic text-primary mb-4">
                  Programs empower job seekers with hope, guidance
                </h4>
                <p className="text-lg text-primary mb-4">
                  Looking for a new job can be difficult and confusing, not to
                  mention demoralizing; but the helpful guidance of informed
                  mentors can make all the difference in the process, St. Jude
                  parishioner Richard Panko said.
                </p>

                <p className="text-sm text-gray-600 m-2">
                  Published in the Texas Catholic • May 30, 2025
                </p>
                <a
                  href="/news_TX_Catholic_250531.pdf"
                  className="inline-flex items-center px-4 py-2 bg-secondary text-white rounded-full font-semibold hover:bg-deepTeal transition my-2"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Read the full article titled Texas Catholic Features St. Jude Career Alliance (PDF)"
                >
                  Read Full Article
                  <span className="ml-2" aria-hidden="true">
                    &#8594;
                  </span>
                </a>
              </div>
              {/* More news items can be added here */}
              {/* New LinkedIn Workshop Post */}
              {/* <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-xl font-semibold text-darkBlue mb-2">
                  2025 Career Alliance Workshop Announced!
                </h3>
                <h4 className="text-lg italic text-primary mb-4">
                  Unlock proven strategies, AI tools, and networking to land
                  your dream job
                </h4>
                <p className="text-lg text-primary mb-4">
                  Are you ready to take the next step in your career journey?
                  The 2025 Career Alliance Workshop is your ultimate guide to
                  job search success!
                  <br />
                </p>
                <p className="text-sm text-gray-600 m-2">
                  Published on LinkedIn • April 2025
                </p>
                <a
                  href="https://www.linkedin.com/feed/update/urn:li:activity:7309336808511717377/?rcm=ACoAAABvxHsBqARTAjhiBq1hy2fm1MnPyVyO3cc"
                  className="inline-flex items-center px-4 py-2 bg-secondary text-white rounded-full font-semibold hover:bg-deepTeal transition my-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View LinkedIn Post
                  <span className="ml-2">&#8594;</span>
                </a>
              </div> */}
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default News;
