import { Link } from "react-router-dom";

const CtaButton = ({
  to,
  children,
  variant = "primary",
  className = "",
  textColor = "text-white", // Default to text-white
}) => {
  const baseStyles =
    "inline-block px-6 py-3 text-base font-semibold rounded-full shadow-md transition-all";
  const variants = {
    primary:
      "bg-accent hover:from-teal-600 hover:to-lime-500 hover:-translate-y-[0.125rem] hover:shadow-lg",
    secondary:
      "bg-teal-600 hover:bg-teal-700 hover:scale-105 hover:shadow-lg mb-5",
  };

  return (
    <Link
      to={to}
      className={`${baseStyles} ${variants[variant]} ${textColor} ${className}`}
    >
      {children}
    </Link>
  );
};

export default CtaButton;
