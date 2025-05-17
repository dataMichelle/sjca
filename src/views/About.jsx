import { useState, useEffect } from "react";
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

const About = () => {
  const [selectedMember, setSelectedMember] = useState(null);
  const [showInfo, setShowInfo] = useState(false); // Controls icon visibility
  const [pulseStart, setPulseStart] = useState(false); // Controls pulse animation

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

  // Effect to control icon visibility and pulse animation
  useEffect(() => {
    // Show the icon after 3 seconds
    const showIconTimer = setTimeout(() => {
      setShowInfo(true);
      setPulseStart(true); // Start pulsing
    }, 3000);

    // Stop pulsing after 8 seconds (3s delay + 5s pulse)
    const stopPulseTimer = setTimeout(() => {
      setPulseStart(false);
    }, 8000);

    // Hide the icon after 10 seconds (3s delay + 5s pulse + 2s fade)
    const hideIconTimer = setTimeout(() => {
      setShowInfo(false);
    }, 10000);

    return () => {
      clearTimeout(showIconTimer);
      clearTimeout(stopPulseTimer);
      clearTimeout(hideIconTimer);
    };
  }, []);

  return (
    <section className="py-20 px-[4%] bg-[#f8f1eb] animateFadeIn">
      <h2 className="text-5xl font-bold text-gray-800 mb-8 text-center md:text-4xl sm:text-3xl">
        About Us
      </h2>
      <div className="flex flex-col gap-12 mx-auto max-w-screen-xl lg:flex-row lg:gap-8">
        {/* Core Values Section */}
        <div className="lg:basis-1/2 w-full">
          <h3 className="text-3xl font-semibold text-gray-800 mb-6 md:text-2xl sm:text-xl">
            Our Core Values & Spiritual Foundation
          </h3>
          <div className="flex flex-col gap-6">
            {coreValues.map((value, index) => (
              <div key={index} className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <value.icon className="text-teal-500 w-6 h-6 md:w-5 md:h-5" />
                  <h4 className="text-xl font-semibold text-gray-800 md:text-lg">
                    {value.title}
                  </h4>
                </div>
                <p className="text-base text-gray-600 md:text-sm">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Meet Our Team Section */}
        <div className="lg:basis-1/2 w-full">
          <h3 className="text-3xl font-semibold text-center text-gray-800 mb-6 md:text-2xl sm:text-xl">
            Meet Our Team
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[35rem] mx-auto sm:max-w-[90%]">
            {team.map((member, index) => (
              <button
                key={index}
                onClick={() => openModal(index)}
                className="relative aspect-square rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer"
                aria-label={`View details for ${member.name}`}
              >
                {/* Image Container */}
                <div className="relative w-full h-full">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="object-cover w-full h-full rounded-lg"
                    style={{ objectPosition: "50% 10%" }}
                  />
                  {/* Information Icon in White Corner */}
                  <div
                    className={`absolute top-1.5 right-1.5 z-10 info-icon-container ${
                      showInfo ? "visible" : ""
                    } ${pulseStart ? "pulse-icon" : ""}`}
                    aria-hidden="true"
                  >
                    <FaInfoCircle className="text-white w-5 h-5" />
                  </div>
                </div>
              </button>
            ))}
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
              className="bg-white rounded-lg shadow-md p-6 max-w-[35rem] w-full max-h-[90vh] overflow-auto sm:p-4 relative"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-2xl text-gray-600 hover:text-gray-800"
                aria-label="Close modal"
              >
                <FaTimes />
              </button>
              <div className="flex items-center gap-5 mb-4 sm:gap-3">
                <img
                  src={team[selectedMember].image}
                  alt={team[selectedMember].name}
                  className="w-24 h-24 object-contain sm:w-20 sm:h-20"
                />
                <div>
                  <h4 className="text-2xl font-semibold text-gray-800 md:text-xl sm:text-lg">
                    {team[selectedMember].name}
                  </h4>
                  <p className="text-lg font-medium text-gray-600 md:text-base sm:text-sm">
                    {team[selectedMember].role}
                  </p>
                </div>
              </div>
              <p className="text-base text-gray-600 mb-4 md:text-sm sm:text-sm">
                {team[selectedMember].content}
              </p>
              {team[selectedMember].education && (
                <p className="text-base text-gray-600 mb-2 md:text-sm sm:text-sm">
                  <strong>Education:</strong> {team[selectedMember].education}
                </p>
              )}
              {team[selectedMember].certifications && (
                <p className="text-base text-gray-600 mb-2 md:text-sm sm:text-sm">
                  <strong>Certifications:</strong>{" "}
                  {team[selectedMember].certifications}
                </p>
              )}
              {team[selectedMember].passions && (
                <p className="text-base text-gray-600 md:text-sm sm:text-sm">
                  <strong>Passions:</strong> {team[selectedMember].passions}
                </p>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default About;
