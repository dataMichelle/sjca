import { Link } from "react-router-dom";

const CtaButton = ({ to, children, variant = "primary", className = "" }) => {
  const baseStyles =
    "inline-block px-6 py-3 text-base font-semibold text-white rounded-full shadow-md transition-all";
  const variants = {
    primary:
      "bg-gradient-to-br from-teal-500 to-lime-500 hover:from-teal-600 hover:to-lime-500 hover:-translate-y-[0.125rem] hover:shadow-lg",
    secondary:
      "bg-lime-500 hover:bg-teal-600 hover:scale-105 hover:shadow-lg mb-5",
  };

  return (
    <Link to={to} className={`${baseStyles} ${variants[variant]} ${className}`}>
      {children}
    </Link>
  );
};

export default CtaButton;
