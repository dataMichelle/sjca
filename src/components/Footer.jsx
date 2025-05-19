import React from "react";
import { Link } from "react-router-dom";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#006F7F] py-10 text-teal-50">
      <div className="container mx-auto px-20">
        {/* Footer with Quick Links/Copyright (left) and Contact Us (right) */}
        <div className="flex flex-col md:flex-row md:justify-between gap-8">
          {/* Quick Links and Copyright (left column) */}
          <div className="md:w-1/3">
            {/* Quick Links (on one line with | separator) */}
            <h3 className="text-lg font-semibold mb-3 text-teal-100 uppercase tracking-wide">
              Quick Links
            </h3>
            <div className="flex gap-3 text-teal-50 mb-4">
              <Link
                to="/about"
                className="hover:text-emerald-100 transition-colors duration-200"
              >
                About Us
              </Link>
              <span>|</span>
              <Link
                to="/testimonials"
                className="hover:text-emerald-100 transition-colors duration-200"
              >
                Testimonials
              </Link>
              <span>|</span>
              <Link
                to="/contact"
                className="hover:text-emerald-100 transition-colors duration-200"
              >
                Contact
              </Link>
              <span>|</span>
              <Link
                to="/faq"
                className="hover:text-emerald-100 transition-colors duration-200"
              >
                FAQ
              </Link>
            </div>
            {/* Copyright */}
            <div className="text-sm text-teal-100">
              <p>
                © {new Date().getFullYear()} St. Jude Career Alliance Ministry.
                All rights reserved.
              </p>
            </div>
          </div>

          {/* Contact Us (left-aligned, far right) */}
          <div className="md:w-1/3">
            <h3 className="text-lg font-semibold mb-4 text-teal-100 uppercase tracking-wide">
              Contact Us
            </h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 hover:text-emerald-100 transition-colors duration-200">
                <FaEnvelope />
                <a href="mailto:info@stjudecareeralliance.org">
                  info@stjudecareeralliance.org
                </a>
              </li>
              <li className="flex items-center gap-2 hover:text-emerald-100 transition-colors duration-200">
                <FaPhoneAlt />
                <a href="tel:+19727271401">972-727-1401</a>
              </li>
              <li>1515 N. Greenville Ave., Allen, TX 75002</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
