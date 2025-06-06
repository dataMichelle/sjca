import PropTypes from "prop-types";
import CopyEmailButton from "./CopyEmailButton";

function EmailToast({ show, onClose, email }) {
  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center">
      <div className="bg-[#FFF9C4] border border-yellow-400 shadow-xl rounded-lg px-6 py-5 max-w-md w-full text-center animate-fade-in relative">
        <p className="text-gray-800 text-sm mb-1 font-semibold">
          If you do not have an email application set up,
        </p>
        <p className="text-gray-800 text-sm mb-3">please copy this email:</p>
        <p className="font-medium text-gray-900 mb-3">{email}</p>
        <CopyEmailButton email={email} />
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-400 hover:text-gray-700 text-4xl px-2"
          aria-label="Close"
          style={{ lineHeight: 1, width: "2.5rem", height: "2.5rem" }}
        >
          ×
        </button>
      </div>
    </div>
  );
}

EmailToast.propTypes = {
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
};

export default EmailToast;
