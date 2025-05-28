import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { team } from "../data/team";
import {
  FaPray,
  FaUsers,
  FaSeedling,
  FaLightbulb,
  FaTimes,
  FaInfoCircle,
} from "react-icons/fa";
import styles from "../styles/about.module.css";

const About = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  const coreValues = [
    {
      title: "Faith",
      description:
        "Rooted in our belief, we guide careers with spiritual purpose.",
      icon: FaPray,
    },
    {
      title: "Community",
      description: "Fostering connections that uplift and support one another.",
      icon: FaUsers,
    },
    {
      title: "Growth",
      description: "Encouraging personal and professional development.",
      icon: FaSeedling,
    },
    {
      title: "Empowerment",
      description: "Equipping individuals to find meaningful work.",
      icon: FaLightbulb,
    },
  ];

  const openModal = (index) => {
    setSelectedMember(index);
  };

  const closeModal = () => {
    setSelectedMember(null);
  };

  // Helper function to determine object-position class
  const getObjectPosition = (imageAlign) => {
    if (imageAlign === "top") return "object-top";
    if (imageAlign === "center") return "object-center";
    if (imageAlign && imageAlign.endsWith("%"))
      return `object-[50%_${imageAlign}]`;
    return "object-center"; // Fallback
  };

  return (
    <main className={`py-12 px-4 sm:px-8 lg:px-12 ${styles.animateFadeIn}`}>
      <div className="max-w-7xl mx-auto">
        <h1
          className="text-4xl md:text-5xl font-bold font-poppins mb-12 text-center"
          style={{ color: "#23446d" }} // --color-darkBlue
        >
          About St. Jude Career Alliance
        </h1>
        <div className="flex flex-col gap-16 lg:flex-row lg:gap-12">
          {/* Core Values Section */}
          <div className="lg:w-1/2">
            <h2
              className="text-2xl font-semibold mb-8"
              style={{ color: "#23446d" }} // --color-darkBlue
            >
              Our Core Values & Spiritual Foundation
            </h2>
            <div className="space-y-6">
              {coreValues.map((value, index) => (
                <motion.div
                  key={index}
                  className={`pb-6 ${
                    index < coreValues.length - 1
                      ? "border-b border-gray-300"
                      : ""
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <value.icon
                      className="w-6 h-6"
                      style={{ color: "#00a181" }}
                    />{" "}
                    {/* --color-secondary */}
                    <h3
                      className="text-xl font-semibold"
                      style={{ color: "#23446d" }}
                    >
                      {value.title}
                    </h3>
                  </div>
                  <p className="text-lg" style={{ color: "#004651" }}>
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Meet Our Team Section */}
          <div className="lg:w-1/2">
            <h2
              className="text-2xl font-semibold mb-8 text-center"
              style={{ color: "#23446d" }} // --color-darkBlue
            >
              Meet Our Team
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {team.map((member, index) => (
                <motion.button
                  key={index}
                  onClick={() => openModal(index)}
                  className={`relative aspect-square rounded-xl shadow-sm hover:shadow-md transition-all duration-300 bg-white overflow-hidden ${styles.animateGlow} min-w-[13rem] `}
                  aria-label={`View details for ${member.name}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.5 }}
                  style={{
                    animationDelay: `${index * 0.2}s`, // Stagger glow
                    animationDuration: `${3 + (index % 2) * 0.5}s`, // Randomize glow duration (3s or 3.5s)
                  }}
                >
                  <img
                    src={member.image}
                    alt={`${member.name}, ${member.role}`}
                    className={`object-cover w-full h-full rounded-xl ${getObjectPosition(
                      member.imageAlign
                    )}`}
                    loading="lazy"
                  />
                  <div className="absolute bottom-0 left-0 right-0 h-8 flex justify-between items-center bg-black/50 px-3 py-2">
                    <p className="text-white text-sm font-medium">
                      {member.name}
                    </p>
                    <div
                      className="bg-[--color-secondary]/70 rounded-full p-1.5"
                      style={{ "--color-secondary": "#00a181" }}
                    >
                      <FaInfoCircle className="text-white w-5 h-5" />
                    </div>
                  </div>
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedMember !== null && (
          <motion.div
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-[100] p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="bg-white rounded-xl shadow-lg p-8 max-w-lg w-full max-h-[90vh] overflow-auto relative"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              style={{ border: "1px solid #a4e473" }} // --color-tertiary
            >
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-2xl text-[--color-primary] hover:text-[--color-deepTeal] focus:ring-2 focus:ring-[--color-secondary] rounded-full p-1"
                aria-label="Close team member details"
                style={{
                  "--color-primary": "#004651",
                  "--color-deepTeal": "#006f7f",
                  "--color-secondary": "#00a181",
                }}
              >
                <FaTimes />
              </button>
              <div className="flex flex-col items-start gap-4 mb-6">
                <img
                  src={team[selectedMember].image}
                  alt={`${team[selectedMember].name}, ${team[selectedMember].role}`}
                  className={`w-24 h-24 object-cover rounded-full ${getObjectPosition(
                    team[selectedMember].imageAlign
                  )}`}
                  loading="lazy"
                />
                <div>
                  <h3
                    className="text-2xl font-semibold"
                    style={{ color: "#23446d" }}
                  >
                    {team[selectedMember].name}
                  </h3>
                  <p
                    className="text-lg font-medium"
                    style={{ color: "#00a181" }}
                  >
                    {team[selectedMember].role}
                  </p>
                </div>
              </div>
              <p className="text-lg" style={{ color: "#004651" }}>
                {team[selectedMember].content}
              </p>
              {team[selectedMember].education && (
                <p className="text-base mt-4" style={{ color: "#004651" }}>
                  <strong>Education:</strong> {team[selectedMember].education}
                </p>
              )}
              {team[selectedMember].certifications && (
                <p className="text-base mt-2" style={{ color: "#004651" }}>
                  <strong>Certifications:</strong>{" "}
                  {team[selectedMember].certifications}
                </p>
              )}
              {team[selectedMember].passions && (
                <p className="text-base mt-2" style={{ color: "#004651" }}>
                  <strong>Passions:</strong> {team[selectedMember].passions}
                </p>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
};

export default About;
