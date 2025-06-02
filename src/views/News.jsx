import React from "react";
import CornerHexagons from "../components/CornerHexagons";

const News = () => {
  return (
    <>
      <CornerHexagons />
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
                  St. Jude Career Alliance empowers job seekers with hope,
                  guidance
                </h3>
                <p className="text-lg text-primary mb-4">
                  St. Jude Career Alliance continues to empower job seekers with
                  faith-based support, practical tools, and a new curriculum
                  focused on strengths, networking, and interviewing. Read more
                  about our mission and impact in this recent article from{" "}
                  <span className="italic">The Texas Catholic</span>.
                </p>
                <a
                  href="/news/news_TX_Catholic_250531.pdf"
                  className="text-secondary underline hover:text-darkBlue"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  More
                </a>
                <p className="text-sm text-gray-600 mt-2">
                  Published May 30, 2025
                </p>
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
