import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa"; // Icons for accordion toggle
import { prayers } from "../data/prayers"; // Importing prayers data

const SpiritualSupport = () => {
  const [openPrayer, setOpenPrayer] = useState(null); // To track which prayer is open

  const togglePrayer = (index) => {
    setOpenPrayer(openPrayer === index ? null : index); // Toggle the open prayer
  };

  return (
    <main className="py-12 px-4 sm:px-6 lg:px-8 animateFadeIn relative">
      {/* Subtle hexagon background */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0L0 15v30l30 15 30-15V15L30 0z' fill='%23a4e473' fill-opacity='0.4'/%3E%3C/svg%3E")`,
          backgroundSize: "60px 60px",
        }}
      ></div>
      <div className="max-w-5xl mx-auto relative z-10">
        <h1 className="text-4xl font-bold text-center text-darkBlue font-sans mb-10 md:text-5xl sm:text-3xl">
          Spiritual Support
        </h1>

        {/* Prayers Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-darkBlue mb-6 md:text-2xl">
            Uplifting Prayers
          </h2>
          <p className="text-lg text-primary mb-8">
            Find prayers for strength, guidance, and perseverance in your career
            journey.
          </p>

          {/* Accordion for Prayers */}
          <div className="space-y-4">
            {prayers.map((prayer, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-sm overflow-hidden"
              >
                <button
                  className={`w-full text-left px-6 py-5 text-lg font-semibold text-darkBlue ${
                    openPrayer === index ? "bg-secondary/10" : "bg-white"
                  } hover:bg-secondary/10 focus:outline-none focus:ring-2 focus:ring-secondary transition-all flex justify-between items-center`}
                  onClick={() => togglePrayer(index)}
                >
                  <span>{prayer.title}</span>
                  <span className="text-xl">
                    {openPrayer === index ? (
                      <FaChevronUp className="text-secondary" />
                    ) : (
                      <FaChevronDown className="text-secondary" />
                    )}
                  </span>
                </button>

                {openPrayer === index && (
                  <div className="px-6 py-4 text-lg text-primary bg-white">
                    <p>{prayer.content}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Patron Saints Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-darkBlue mb-6 md:text-2xl">
            Catholic Patron Saints for Job Seekers
          </h2>
          <p className="text-lg text-primary mb-8">
            Discover patron saints who support job seekers and those in need.
          </p>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* St. Cajetan */}
            <div className="bg-white rounded-lg shadow-sm p-6 flex flex-col items-center text-center">
              <img
                src="https://tse4.mm.bing.net/th?id=OIP.pX4zJheeiqnMmGgNuy_pNAHaJL&pid=Api"
                alt="St. Cajetan"
                className="w-24 h-24 object-cover rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold text-darkBlue">
                St. Cajetan
              </h3>
              <p className="text-primary mt-2 mb-4">
                Patron saint of job seekers and the unemployed, known for aiding
                the poor.
              </p>
              <a
                href="https://en.wikipedia.org/wiki/Saint_Cajetan"
                className="inline-block px-4 py-2 bg-secondary text-white rounded-full hover:bg-deepTeal transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                Read More
              </a>
            </div>
            {/* St. Joseph the Worker */}
            <div className="bg-white rounded-lg shadow-sm p-6 flex flex-col items-center text-center">
              <img
                src="https://tse3.mm.bing.net/th?id=OIP.GQEoVAJTXOFyvebY86rKAgHaHa&r=0&pid=Api"
                alt="St. Joseph"
                className="w-24 h-24 object-cover rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold text-darkBlue">
                St. Joseph the Worker
              </h3>
              <p className="text-primary mt-2 mb-4">
                Patron saint of workers, exemplifying dedication and faith.
              </p>
              <a
                href="https://www.catholic.org/saints/saint.php?saint_id=410"
                className="inline-block px-4 py-2 bg-secondary text-white rounded-full hover:bg-deepTeal transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                Read More
              </a>
            </div>
            {/* St. Homobonus */}
            <div className="bg-white rounded-lg shadow-sm p-6 flex flex-col items-center text-center">
              <img
                src="https://tse4.mm.bing.net/th?id=OIP.wOIwLIzGL7RG-i5qxuWSqwHaKT&pid=Api"
                alt="St. Homobonus"
                className="w-24 h-24 object-cover rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold text-darkBlue">
                St. Homobonus
              </h3>
              <p className="text-primary mt-2 mb-4">
                Patron saint of businesspeople, known for integrity and honesty.
              </p>
              <a
                href="https://www.catholicnewsagency.com/saint/st-homobonus"
                className="inline-block px-4 py-2 bg-secondary text-white rounded-full hover:bg-deepTeal transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                Read More
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default SpiritualSupport;
