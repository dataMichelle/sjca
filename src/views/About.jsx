import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { team } from "../data/team";
import { FaPray, FaUsers, FaSeedling, FaLightbulb } from "react-icons/fa";

const About = () => {
  const [currentMember, setCurrentMember] = useState(0);

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

  const nextMember = () => {
    setCurrentMember((prev) => (prev + 1) % team.length);
  };

  const prevMember = () => {
    setCurrentMember((prev) => (prev - 1 + team.length) % team.length);
  };

  return (
    <section className="py-20 px-[4%] bg-[#f8f1eb] animateFadeIn">
      <h2 className="text-5xl font-bold text-gray-800 mb-8 text-center md:text-4xl">
        About Us
      </h2>
      <div className="flex md:flex-row flex-col gap-12 mx-auto mb-12 max-w-screen-xl">
        {/* Core Values Section */}
        <div className="basis-1/2 md:max-w-[50%] w-full">
          <h3 className="text-3xl font-semibold text-gray-800 mb-6 md:text-2xl">
            Our Core Values & Spiritual Foundation
          </h3>
          <div className="flex flex-col gap-6">
            {coreValues.map((value, index) => (
              <div key={index} className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <value.icon className="text-teal-500 w-6 h-6 md:w-5 md:h-5" />
                  <h4 className="text-xl font-semibold text-gray-800">
                    {value.title}
                  </h4>
                </div>
                <p className="text-base text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Meet Our Team Section */}
        <div className="basis-1/2 md:max-w-[50%] w-full flex justify-center">
          <div className="relative w-full max-w-[35rem]">
            <h3 className="text-3xl font-semibold text-center text-gray-800 mb-6 md:text-2xl">
              Meet Our Team
            </h3>

            {/* Flex container for the arrows and content */}
            <div className="flex justify-between items-center gap-16 w-full">
              {/* Left Arrow */}
              <button
                onClick={prevMember}
                className="w-16 h-16 bg-teal-500/80 rounded-full flex items-center justify-center text-white text-3xl hover:bg-teal-500 transition-colors"
              >
                ←
              </button>

              {/* Team Card (content) */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentMember}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white rounded-lg shadow-md p-6 text-left w-full"
                >
                  <div className="flex items-center gap-5 mb-4">
                    <img
                      src={team[currentMember].image}
                      alt={team[currentMember].name}
                      className="w-24 h-24 object-contain"
                    />
                    <div>
                      <h4 className="text-2xl font-semibold text-gray-800">
                        {team[currentMember].name}
                      </h4>
                      <p className="text-lg font-medium text-gray-600">
                        {team[currentMember].role}
                      </p>
                    </div>
                  </div>
                  <p className="text-base text-gray-600 mb-4">
                    {team[currentMember].content}
                  </p>
                  {team[currentMember].education && (
                    <p className="text-base text-gray-600 mb-2">
                      <strong>Education:</strong>{" "}
                      {team[currentMember].education}
                    </p>
                  )}
                  {team[currentMember].certifications && (
                    <p className="text-base text-gray-600 mb-2">
                      <strong>Certifications:</strong>{" "}
                      {team[currentMember].certifications}
                    </p>
                  )}
                  {team[currentMember].passions && (
                    <p className="text-base text-gray-600">
                      <strong>Passions:</strong> {team[currentMember].passions}
                    </p>
                  )}
                </motion.div>
              </AnimatePresence>

              {/* Right Arrow */}
              <button
                onClick={nextMember}
                className="w-16 h-16 bg-teal-500/80 rounded-full flex items-center justify-center text-white text-3xl hover:bg-teal-500 transition-colors"
              >
                →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
