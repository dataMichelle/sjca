import React from "react";
import HexagonGrid from "../components/HexagonGrid"; // Importing HexagonGrid component
const News = () => {
  return (
    <>
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
                <h4 className="text-lg text-secondary mb-2">
                  Programs empower job seekers with hope, guidance
                </h4>
                <p className="text-lg text-primary mb-4">
                  Looking for a new job can be difficult and confusing, not to
                  mention demoralizing; but the helpful guidance of informed
                  mentors can make all the difference in the process, St. Jude
                  parishioner Richard Panko said.
                </p>

                <p className="text-sm text-gray-600 m-2">
                  Published May 30, 2025
                </p>
                <a
                  href="assets/news/news_TX_Catholic_250531.pdf"
                  className="inline-flex items-center px-4 py-2 bg-secondary text-white rounded-full font-semibold hover:bg-deepTeal transition my-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read Full Article
                  <span className="ml-2">&#8594;</span>
                </a>
              </div>
              {/* More news items can be added here */}
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default News;
