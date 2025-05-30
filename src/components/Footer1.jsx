import React from "react";
import { Link } from "react-router-dom"; // For React Router links
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa"; // React Icons for contact

const Footer = () => {
  return (
    <footer className="bg-[#006F7F] py-10 text-teal-50">
      <div className="container mx-auto px-6 md:px-12 ">
        {/* Footer with 2 sections: Quick Links + Resources on the left and Contact Us on the right */}
        <div className="flex flex-col md:flex-row justify-between mb-6 ">
          {/* Quick Links and Resources (stay on the same line) */}
          <div className="flex gap-12 md:w-2/3 mb-6 md:mb-0">
            <div>
              <h3 className="text-lg font-semibold mb-3 text-teal-200">
                Quick Links
              </h3>
              <ul>
                <li>
                  <Link to="/" className=" ">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className=" ">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/testimonials" className=" ">
                    Testimonials
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className=" ">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3 text-teal-300">
                Resources
              </h3>
              <ul>
                <li>
                  <Link to="/workshop" className=" ">
                    Workshop
                  </Link>
                </li>
                <li>
                  <Link to="/blog" className=" ">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link to="/faq" className=" ">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link to="/privacy-policy" className=" ">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Us (on the right side, moves below on mobile) */}
          <div className="md:w-1/3 ">
            <h3 className="text-lg font-semibold mb-3 text-teal-300">
              Contact Us
            </h3>
            <ul>
              <li className="flex items-center gap-2  hover:text-emerald-100 ">
                <FaEnvelope />
                <a href="mailto:careeralliance@stjudeparish.com">
                  careeralliance@stjudeparish.com
                </a>
              </li>
              <li className="flex items-center gap-2 ">
                <FaPhoneAlt />
                <a href="tel:+1234567890"> 972-727-1401</a>
              </li>
              <li>1515 N. Greenville Ave., Allen, TX 75002</li>
            </ul>
          </div>
        </div>
        {/* Footer bottom with copyright */}
        <div className="text-center text-sm text-teal-100 mt-6">
          <p>
            &copy; {new Date().getFullYear()} St. Jude Career Alliance Ministry.
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
