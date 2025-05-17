import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-gradient-to-br from-[#1a3557] to-[#2e5a8c] text-white py-7 shadow-md sticky top-0 z-50">
      <div className="w-[85%] mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-semibold">St. Jude Career Alliance</h1>
        <button
          className="max-[1350px]:block hidden text-2xl text-white focus:outline-none"
          onClick={toggleMenu}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
        <nav className="max-[1350px]:hidden block">
          <ul className="flex space-x-2">
            {[
              { to: "/", label: "Home" },
              { to: "/about", label: "About Us" },
              { to: "/workshop", label: "Workshop" },
              { to: "/resources", label: "Resources" },
              { to: "/spiritual-support", label: "Spiritual Support" },
              // { to: "/testimonials", label: "Testimonials" },
              { to: "/contact", label: "Contact" },
            ].map(({ to, label }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  className={({ isActive }) =>
                    `px-4 py-2 rounded-lg text-base transition-all ${
                      isActive
                        ? "bg-white/15 text-white"
                        : "text-white hover:bg-white/15 hover:-translate-y-[2px]"
                    }`
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <nav className="max-[1350px]:block hidden bg-gradient-to-br from-[#1a3557] to-[#2e5a8c] w-full absolute top-full left-0 z-40">
          <ul className="flex flex-col items-center space-y-2 py-4">
            {[
              { to: "/", label: "Home" },
              { to: "/about", label: "About Us" },
              { to: "/workshop", label: "Workshop" },
              { to: "/resources", label: "Resources" },
              { to: "/spiritual-support", label: "Spiritual Support" },
              { to: "/testimonials", label: "Testimonials" },
              { to: "/contact", label: "Contact" },
            ].map(({ to, label }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  className={({ isActive }) =>
                    `block px-4 py-2 rounded-lg text-base transition-all ${
                      isActive
                        ? "bg-white/15 text-white"
                        : "text-white hover:bg-white/15"
                    }`
                  }
                  onClick={() => setIsOpen(false)}
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
