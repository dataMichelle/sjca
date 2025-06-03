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
import HexagonGrid from "../components/HexagonGrid";

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
    <>
      <HexagonGrid />
      <main className={`py-12 px-4 sm:px-8 lg:px-12 ${styles.animateFadeIn}`}>
        <div className="max-w-7xl mx-auto">
          <h1
            className="text-4xl md:text-5xl font-bold font-poppins mb-12 text-center"
            style={{ color: "#23446d" }}
          >
            About St. Jude Career Alliance
          </h1>
          <div className="flex flex-col gap-16 lg:flex-row lg:gap-12">
            {/* Core Values Section */}
            <div className="lg:w-1/2">
              <h2
                className="text-2xl font-semibold mb-8"
                style={{ color: "#23446d" }}
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
                      />
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
                style={{ color: "#23446d" }}
              >
                Meet Our Team
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {team.map((member, index) => (
                  <motion.button
                    key={index}
                    onClick={() => openModal(index)}
                    className={`relative aspect-[3/5] rounded-xl shadow-sm hover:shadow-md transition-all duration-300 bg-white overflow-hidden ${styles.animateGlow} min-w-[8rem] min-h-[19rem]`}
                    aria-label={`View details for ${member.name}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2, duration: 0.5 }}
                    style={{
                      animationDelay: `${index * 0.2}s`,
                      animationDuration: `${3 + (index % 2) * 0.5}s`,
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
                    <div className="absolute bottom-0 left-0 right-0 flex flex-col items-start bg-black/50 px-3 py-2">
                      <p className="text-white text-sm font-medium">
                        {member.name}
                      </p>
                      <p className="text-xs text-[#a4e473] font-semibold">
                        {member.title}
                      </p>
                      <div
                        className="bg-[--color-secondary]/70 rounded-full p-1.5"
                        style={{ "--color-secondary": "#00a181" }}
                      ></div>
                    </div>
                  </motion.button>
                ))}
              </div>
              {/* St. Jude Staff Support Section as a card/fieldset */}
              <fieldset className="mt-12 border-2 border-[#a4e473] rounded-xl p-6 bg-[#faf7f5] shadow-sm">
                <legend className="px-3 text-lg font-semibold text-[#23446d]">
                  St. Jude Support Staff
                </legend>
                <ul className="space-y-4 text-center mt-2">
                  <li>
                    <span className="font-bold text-darkBlue">
                      Deacon Ken Steponaitis
                    </span>
                    <span className="block text-primary text-sm">
                      Staff Liaison
                    </span>
                  </li>
                  <li>
                    <span className="font-bold text-darkBlue">
                      Brandon Powell
                    </span>
                    <span className="block text-primary text-sm">
                      Multimedia Coordinator
                    </span>
                  </li>
                </ul>
              </fieldset>
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
                style={{ border: "1px solid #a4e473" }}
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
    </>
  );
};

export default About;
