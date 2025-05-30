import React from "react";
import { Link } from "react-router-dom";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-[#00a181] to-[#a4e473] py-10 text-gray-200">
      <div className="container mx-auto px-6 md:px-12">
        {/* Footer with 2 sections: Quick Links + Resources on the left and Contact Us on the right */}
        <div className="flex flex-col md:flex md:flex-row md:items-start md:justify-between md:gap-12 mb-6">
          {/* Quick Links and Resources (left content) */}
          <div className="flex gap-12 mb-6 md:mb-0 ml-0">
            <div>
              <h3 className="text-lg font-semibold font-poppins text-white mb-3">
                Quick Links
              </h3>
              <ul className="text-base font-inter">
                <li>
                  <Link
                    to="/"
                    className="hover:text-[#a4e473] hover:underline transition-all duration-300 focus:ring-2 focus:ring-[#00a181] focus:underline focus:outline-none"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="hover:text-[#a4e473] hover:underline transition-all duration-300 focus:ring-2 focus:ring-[#00a181] focus:underline focus:outline-none"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/testimonials"
                    className="hover:text-[#a4e473] hover:underline transition-all duration-300 focus:ring-2 focus:ring-[#00a181] focus:underline focus:outline-none"
                  >
                    Testimonials
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="hover:text-[#a4e473] hover:underline transition-all duration-300 focus:ring-2 focus:ring-[#00a181] focus:underline focus:outline-none"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold font-poppins text-white mb-3">
                Resources
              </h3>
              <ul className="text-base font-inter">
                <li>
                  <Link
                    to="/workshop"
                    className="hover:text-[#a4e473] hover:underline transition-all duration-300 focus:ring-2 focus:ring-[#00a181] focus:underline focus:outline-none"
                  >
                    Workshop
                  </Link>
                </li>
                <li>
                  <Link
                    to="/blog"
                    className="hover:text-[#a4e473] hover:underline transition-all duration-300 focus:ring-2 focus:ring-[#00a181] focus:underline focus:outline-none"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    to="/faq"
                    className="hover:text-[#a4e473] hover:underline transition-all duration-300 focus:ring-2 focus:ring-[#00a181] focus:underline focus:outline-none"
                  >
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link
                    to="/privacy-policy"
                    className="hover:text-[#a4e473] hover:underline transition-all duration-300 focus:ring-2 focus:ring-[#00a181] focus:underline focus:outline-none"
                  >
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Us (right content, aligned close to the right) */}
          <div className="mr-0">
            <h3 className="text-lg font-semibold font-poppins text-white mb-3">
              Contact Us
            </h3>
            <ul className="text-base font-inter">
              <li className="flex items-center gap-2 hover:text-[#a4e473] transition-all duration-300">
                <FaEnvelope />
                <a
                  href="mailto:careeralliance@stjudeparish.com"
                  className="hover:underline focus:ring-2 focus:ring-[#00a181] focus:underline focus:outline-none"
                  aria-label="Email St. Jude Career Alliance"
                >
                  careeralliance@stjudeparish.com
                </a>
              </li>
              <li className="flex items-center gap-2 hover:text-[#a4e473] transition-all duration-300">
                <FaPhoneAlt />
                <a
                  href="tel:+19727271401"
                  className="hover:underline focus:ring-2 focus:ring-[#00a181] focus:underline focus:outline-none"
                  aria-label="Call St. Jude Career Alliance"
                >
                  (972) 727-1401
                </a>
              </li>
              <li>1515 N. Greenville Ave., Allen, TX 75002</li>
            </ul>
          </div>
        </div>
        {/* Footer bottom with copyright */}
        <div className="text-center text-sm text-gray-300 mt-6 font-inter">
          <p>
            © {new Date().getFullYear()} St. Jude Career Alliance Ministry. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
