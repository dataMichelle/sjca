import { useState } from "react";
import { FaCheck, FaRegCopy } from "react-icons/fa";
import PropTypes from "prop-types";

function CopyEmailButton({ email, className = "" }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (err) {
      console.error("Copy failed:", err);
    }
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      className={`ml-2 text-sm underline transition inline-flex items-center ${
        copied ? "text-green-700" : "text-blue-700 hover:text-blue-900"
      } ${className}`}
      aria-label="Copy email address to clipboard"
    >
      {copied ? (
        <>
          <FaCheck className="mr-1" />
          Copied!
        </>
      ) : (
        <>
          <FaRegCopy className="mr-1" />
          Copy
        </>
      )}
    </button>
  );
}

CopyEmailButton.propTypes = {
  email: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default CopyEmailButton;
