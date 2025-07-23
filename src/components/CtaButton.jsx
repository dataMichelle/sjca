import { Link } from "react-router-dom";

const CtaButton = ({
  to,
  children,
  variant = "primary",
  className = "",
  textColor, // Remove default - will be set based on variant
}) => {
  const baseStyles =
    "inline-block px-6 py-3 text-base font-semibold rounded-full shadow-md transition-all";
  
  const variants = {
    primary: {
      styles: "bg-accent hover:from-teal-600 hover:to-lime-500 hover:-translate-y-[0.125rem] hover:shadow-lg",
      textColor: "text-gray-900", // Dark text on yellow background for better contrast
    },
    secondary: {
      styles: "bg-teal-600 hover:bg-teal-700 hover:scale-105 hover:shadow-lg mb-5",
      textColor: "text-white", // White text on dark background - good contrast
    },
  };

  // Use provided textColor or variant default
  const finalTextColor = textColor || variants[variant].textColor;

  return (
    <Link
      to={to}
      className={`${baseStyles} ${variants[variant].styles} ${finalTextColor} ${className}`}
    >
      {children}
    </Link>
  );
};

export default CtaButton;
