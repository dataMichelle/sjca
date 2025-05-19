import { motion } from "framer-motion";

const Contact = () => {
  return (
    <main className=" py-12 px-4 sm:px-8 lg:px-12 animate-fade">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold font-poppins text-[#23446d] mb-12 text-center sm:text-3xl">
          Contact Us
        </h1>
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 mb-12">
          {/* Contact Information */}
          <motion.div
            className="flex-1 min-w-[300px]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <p className="text-lg font-medium text-[#004651] mb-6">
              We’re here to support you! Reach out with any questions or to
              learn more about our ministry.
            </p>
            <h2 className="text-2xl font-semibold text-[#23446d] mb-4">
              St. Jude Catholic Church
            </h2>
            <p className="text-lg text-[#004651] mb-2">
              1515 N. Greenville Ave., Allen, TX 75002
            </p>
            <p className="text-lg">
              <span className="text-[#004651]">Email: </span>
              <a
                href="mailto:info@stjudecareeralliance.org"
                className="text-[#00a181] hover:text-[#006f7f] hover:underline focus:ring-2 focus:ring-[#00a181] focus:outline-none cursor-pointer"
                aria-label="Email St. Jude Career Alliance"
              >
                info@stjudecareeralliance.org
              </a>
            </p>
            <p className="text-lg">
              <span className="text-[#004651]">Phone: </span>
              <a
                href="tel:+1234567890"
                className="text-[#00a181] hover:text-[#006f7f] hover:underline focus:ring-2 focus:ring-[#00a181] focus:outline-none cursor-pointer"
                aria-label="Call St. Jude Career Alliance"
              >
                972-727-1401
              </a>
            </p>

            {/* Directions */}
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
              continue east for approximately 1 mile. Take a left on Greenville
              Ave. Drive about ½ mile. St. Jude will be on the left.
            </p>
            <p className="text-lg text-[#004651] mb-4">
              Park in the northeast lot and enter through the large glass area
              between the Church and Parish Offices. Look for directions to the{" "}
              <strong>Lecture Hall</strong>.
            </p>
          </motion.div>

          {/* Google Map Embed */}
          <motion.div
            className="flex-1 min-w-[300px]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-2xl font-semibold text-[#23446d] mb-4">
              Find Us
            </h2>
            <div className="w-full h-[350px] sm:h-[400px] mb-4 rounded-xl border-2 border-[#a4e473]">
              <iframe
                src="https://maps.google.com/maps?f=q&source=s_q&hl=en&q=1515+North+Greenville+Avenue,+Allen,+TX+75002&t=m&z=14&output=embed"
                width="100%"
                height="100%"
                frameBorder="0"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="St. Jude Catholic Church Location"
              ></iframe>
            </div>
            <div className="text-center">
              <a
                href="https://maps.google.com/maps?f=q&source=embed&hl=en&q=1515+North+Greenville+Avenue,+Allen,+TX+75002"
                className="text-[#00a181] hover:text-[#006f7f] hover:underline focus:ring-2 focus:ring-[#00a181] focus:outline-none cursor-pointer font-semibold"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View larger map of St. Jude Catholic Church"
              >
                View Larger Map
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
