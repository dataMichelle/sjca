import { motion } from "framer-motion";
import HexagonGrid from "../components/HexagonGrid";
import SEO from "../components/SEO";

const Contact = () => {
  return (
    <>
      <SEO
        title="Contact Us - St. Jude Career Alliance"
        description="Get in touch with St. Jude Career Alliance for support, resources, and community events. We're here to help you in your job search or career change."
        url="https://stjudecareeralliance.com/contact"
      />
      <HexagonGrid />
      <main className="py-12 px-4 sm:px-8 lg:px-12 animate-fade">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold font-poppins text-[#23446d] mb-12 text-center sm:text-3xl">
            Contact Us
          </h1>
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 mb-12">
            {/* Contact Information */}
            <motion.section
              className="flex-1 min-w-[300px]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              aria-labelledby="contact-info-heading"
            >
              <h2 id="contact-info-heading" className="sr-only">
                Contact Information
              </h2>
              <p className="text-lg font-medium text-[#004651] mb-6">
                We’re here to support you! Reach out with any questions or to
                learn more about our ministry.
              </p>
              <h3 className="text-2xl font-semibold text-[#23446d] mb-4">
                St. Jude Catholic Church
              </h3>
              <p className="text-lg text-[#004651] mb-2">
                1515 N. Greenville Ave., Allen, TX 75002
              </p>
              <p className="text-lg my-6">
                <span className="text-[#004651]">Email: </span>
                <a
                  href="mailto:careeralliance@stjudeparish.com"
                  className="text-[#00a181] hover:text-[#006f7f] hover:underline focus:ring-2 focus:ring-[#00a181] focus:outline-none cursor-pointer"
                  aria-label="Email St. Jude Career Alliance"
                >
                  careeralliance@stjudeparish.com
                </a>
              </p>
              <p className="text-lg">
                <span className="text-[#004651]">Phone: </span>
                <a
                  href="tel:+19727271401"
                  className="text-[#00a181] hover:text-[#006f7f] hover:underline focus:ring-2 focus:ring-[#00a181] focus:outline-none cursor-pointer"
                  aria-label="Call St. Jude Career Alliance"
                >
                  972-727-1177
                </a>
              </p>
              <p className="text-lg">
                <span className="text-[#004651]">Website: </span>
                <a
                  href="https://stjudecareeralliance.com"
                  className="text-[#00a181] hover:text-[#006f7f] hover:underline focus:ring-2 focus:ring-[#00a181] focus:outline-none cursor-pointer"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit St. Jude Career Alliance website"
                >
                  stjudecareeralliance.com
                </a>
              </p>
              <h3 className="text-xl font-semibold text-[#23446d] mt-8 mb-4">
                Directions
              </h3>
              <p className="text-lg text-[#004651] mb-4">
                <strong>From north of Allen:</strong> Take U.S. 75/Central
                Expressway South, exit Stacy Rd. Go left on Stacy, continue east
                for approximately 1 mile. Take a right on Greenville Ave. Drive
                about ½ mile. St. Jude will be on the right.
              </p>
              <p className="text-lg text-[#004651] mb-4">
                <strong>From south of Allen:</strong> Take U.S. 75/Central
                Expressway North, exit Exchange Pkwy. Go right on Exchange and
                continue east for approximately 1 mile. Take a left on
                Greenville Ave. Drive about ½ mile. St. Jude will be on the
                left.
              </p>
              <p className="text-lg text-[#004651] mb-4">
                Park in the northeast lot and enter through the large glass area
                between the Church and Parish Offices. Look for directions to
                the <strong>Lecture Hall</strong>.
              </p>
            </motion.section>

            {/* Google Map Embed */}
            <motion.section
              className="flex-1 min-w-[300px]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              aria-labelledby="map-heading"
            >
              <h2
                id="map-heading"
                className="text-2xl font-semibold text-[#23446d] mb-4"
              >
                Find Us
              </h2>
              <div className="w-full h-[350px] sm:h-[400px] mb-4 rounded-xl border-2 border-[#a4e473] overflow-hidden shadow-md">
                <iframe
                  title="St. Jude Catholic Church Location on Google Maps"
                  src="https://maps.google.com/maps?q=St.%20Jude%20Catholic%20Church%20Allen%20TX&z=15&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="text-center">
                <a
                  href="https://www.google.com/maps/place/St.+Jude+Catholic+Church/@33.1209847,-96.6519226,17z/data=!4m15!1m8!3m7!1s0x864c10d9f4f1b973:0x8050803b61b7e4d7!2s1515+N+Greenville+Ave,+Allen,+TX+75002!3b1!8m2!3d33.1209847!4d-96.6519226!16s%2Fg%2F11c1jg_pr_!3m5!1s0x864c10dbd0d38e0b:0xd33ab74d7cd8004e!8m2!3d33.1219876!4d-96.6507083!16s%2Fm%2F04jggdm?entry=ttu&g_ep=EgoyMDI1MDYwMy4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View larger map of St. Jude Catholic Church"
                >
                  View Larger Map
                </a>
              </div>
            </motion.section>
          </div>
        </div>
      </main>
    </>
  );
};

export default Contact;
