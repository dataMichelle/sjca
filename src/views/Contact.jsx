const Contact = () => {
  return (
    <div className="py-20 px-[8%] bg-[#f8f1eb]">
      <h1 className="text-5xl font-bold text-gray-800 mb-8 md:text-4xl">
        Contact Us
      </h1>
      <div className="flex flex-wrap gap-8 mb-12">
        <div className="flex-1 min-w-[300px]">
          <p className="text-lg text-gray-600 mb-4 md:text-base">
            We'd love to hear from you! Please reach out to us via the form or
            use the contact information below.
          </p>
          <h2 className="text-3xl font-semibold text-gray-800 mb-4 md:text-2xl">
            Our Office
          </h2>
          <p className="text-lg text-gray-600 mb-2 md:text-base">
            St. Jude Career Alliance
          </p>
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
        </div>

        {/* Google Map Embed */}
        <div className="flex-1 min-w-[300px]">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4 md:text-2xl">
            Find Us
          </h2>
          <div className="w-full h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed/v1/place?q=1515 N. Greenville Ave.,+Allen,+TX+75013"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
