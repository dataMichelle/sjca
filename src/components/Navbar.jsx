import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-[#204370] glass-effect py-7 shadow-md sticky top-0 z-50">
      <div className="w-[85%] mx-auto flex justify-between items-center">
        {/* Combined Logo (Image + Title) */}
        <div className="flex items-center gap-2">
          <img
            src="/logo-path.png"
            alt="St. Jude Career Alliance Logo"
            className="w-30 h-auto
            "
          />
          {/* <h1 className="text-xl font-bold font-poiret text-emerald-50 tracking-wide">
            St. Jude Career Alliance
          </h1> */}
        </div>
        {/* Navigation Links with Spacing */}
        <div className="flex items-center gap-8">
          <button
            className="max-[1350px]:block hidden text-2xl text-white hover:text-[#8ac9d3] focus:ring-2 focus:ring-[#00a181] focus:outline-none"
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
                // { to: "/resources", label: "Resources" },
                { to: "/spiritual-support", label: "Spiritual Support" },
                { to: "/volunteer", label: "Get Involved" },
                { to: "/news", label: "News" },
                { to: "/contact", label: "Contact" },
              ].map(({ to, label }) => (
                <li key={to}>
                  <NavLink
                    to={to}
                    className={({ isActive }) =>
                      `px-4 py-2 rounded-lg text-base font-inter transition-all ${
                        isActive
                          ? "bg-[#006f7f] text-white"
                          : "text-white hover:bg-[#006f7f] hover:text-white focus:ring-2 focus:ring-[#00a181] focus:outline-none hover:-translate-y-[2px]"
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
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <nav className="max-[1350px]:block hidden bg-beige glass-effect w-full absolute top-full left-0 z-40">
          <ul className="flex flex-col items-center space-y-2 py-4">
            {[
              { to: "/", label: "Home" },
              { to: "/about", label: "About Us" },
              { to: "/workshop", label: "Workshop" },
              // { to: "/resources", label: "Resources" },
              { to: "/spiritual-support", label: "Spiritual Support" },
              { to: "/volunteer", label: "Get Involved" },
              { to: "/news", label: "News" },
              { to: "/contact", label: "Contact" },
            ].map(({ to, label }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  className={({ isActive }) =>
                    `block px-4 py-2 rounded-lg text-base font-inter transition-all ${
                      isActive
                        ? "bg-[#006f7f] text-white"
                        : "text-[#004651] hover:bg-[#006f7f] hover:text-white focus:ring-2 focus:ring-[#00a181] focus:outline-none"
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
