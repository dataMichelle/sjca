const Contact = () => {
  return (
    <div className="py-12 px-[8%] bg-[#f8f1eb]">
      {" "}
      {/* Reduced top padding (py-12) */}
      <h1 className="text-5xl font-bold text-gray-800 mb-4 text-center md:text-4xl">
        {" "}
        {/* Reduced bottom margin (mb-4) */}
        Contact Us
      </h1>
      <div className="flex flex-wrap gap-8 mb-12">
        <div className="flex-1 min-w-[300px]">
          <p className="text-lg text-gray-600 mb-4 md:text-base">
            We'd love to hear from you! Please reach out to us via the contact
            information below.
          </p>
          <h2 className="text-3xl font-semibold text-gray-800 mb-4 md:text-2xl">
            St. Jude Catholic Church
          </h2>
          {/* <p className="text-lg text-gray-600 mb-2 md:text-base">
            St. Jude Career Alliance
          </p> */}
          <p className="text-lg text-gray-600 mb-2 md:text-base">
            1515 N. Greenville Ave., Allen, TX 75002
          </p>
          <p className="text-lg text-gray-600 mb-2 md:text-base">
            Email:{" "}
            <a
              href="mailto:info@stjudecareeralliance.org"
              className="text-blue-600 hover:underline"
            >
              info@stjudecareeralliance.org
            </a>
          </p>
          <p className="text-lg text-gray-600 md:text-base">
            Phone:{" "}
            <a href="tel:+1234567890" className="text-blue-600 hover:underline">
              (123) 456-7890
            </a>
          </p>

          {/* Directions */}
          <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-2">
            Directions:
          </h3>
          <p className="text-lg text-gray-600 mb-4">
            <strong>From north of Allen:</strong> Take U.S. 75/Central
            Expressway South, exit Stacy Rd. Go left on Stacy, continue east for
            approximately 1 mile. Take a right on Greenville Ave. Drive about ½
            mile. St. Jude will be on the right.
          </p>
          <p className="text-lg text-gray-600 mb-4">
            <strong>From south of Allen:</strong> Take U.S. 75/Central
            Expressway North, exit Exchange Pkwy. Go right on Exchange and
            continue east for approximately 1 mile. Take a left on Greenville
            Ave. Drive about ½ mile. St. Jude will be on the left.
          </p>
          <p className="text-lg text-gray-600 mb-4">
            Park in the northeast lot and enter through the large glass area
            between the Church and Parish Offices. Look for directions to the
            **Lecture Hall**.
          </p>
        </div>

        {/* Google Map Embed (right side of the content) */}
        <div className="flex-1 min-w-[300px]">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4 md:text-2xl">
            Find Us
          </h2>

          {/* Google Map iFrame */}
          <div className="w-full h-[350px] mb-4">
            <iframe
              src="https://maps.google.com/maps?f=q&source=s_q&hl=en&q=1515+North+Greenville+Avenue,+Allen,+TX+75002&t=m&z=14&output=embed"
              width="100%"
              height="100%"
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>

          {/* View Larger Map Link */}
          <div align="center">
            <a
              href="https://maps.google.com/maps?f=q&source=embed&hl=en&q=1515+North+Greenville+Avenue,+Allen,+TX+75002"
              className="text-blue-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              <b>View Larger Map</b>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
