import React from "react";
import { Link } from "react-router-dom"; // For React Router links
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa"; // React Icons for contact

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto px-6 md:px-12">
        {/* Footer with 2 sections: Quick Links + Resources on the left and Contact Us on the right */}
        <div className="flex flex-col md:flex-row justify-between mb-6">
          {/* Quick Links and Resources */}
          <div className="flex flex-col md:flex-row gap-12 md:w-2/3 mb-6 md:mb-0">
            <div>
              <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
              <ul>
                <li>
                  <Link to="/" className="text-white hover:text-gray-400">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-white hover:text-gray-400">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/testimonials"
                    className="text-white hover:text-gray-400"
                  >
                    Testimonials
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="text-white hover:text-gray-400"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Resources</h3>
              <ul>
                <li>
                  <Link
                    to="/workshops"
                    className="text-white hover:text-gray-400"
                  >
                    Workshops
                  </Link>
                </li>
                <li>
                  <Link to="/blog" className="text-white hover:text-gray-400">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link to="/faq" className="text-white hover:text-gray-400">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link
                    to="/privacy-policy"
                    className="text-white hover:text-gray-400"
                  >
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Us (on the right side) */}
          <div className="flex flex-col md:w-1/3">
            <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
            <ul>
              <li className="flex items-center gap-2 text-white hover:text-gray-400">
                <FaEnvelope />
                <a
                  href="mailto:info@stjudecareeralliance.org"
                  className="hover:text-gray-400"
                >
                  info@stjudecareeralliance.org
                </a>
              </li>
              <li className="flex items-center gap-2 text-white hover:text-gray-400">
                <FaPhoneAlt />
                <a href="tel:+1234567890" className="hover:text-gray-400">
                  (123) 456-7890
                </a>
              </li>
              <li className="text-white hover:text-gray-400">
                1515 N. Greenville Ave., Allen, TX 75002
              </li>
            </ul>
          </div>
        </div>

        {/* Footer bottom with copyright */}
        <div className="text-center text-sm text-gray-400 mt-6">
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
