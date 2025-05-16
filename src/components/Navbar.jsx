import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="bg-gradient-to-br from-[#1a3557] to-[#2e5a8c] text-white py-4 shadow-md">
      <div className="w-[85%] mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-semibold">St. Jude Career Alliance</h1>
        <nav>
          <ul className="flex space-x-2">
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
    </header>
  );
};

export default Navbar;
