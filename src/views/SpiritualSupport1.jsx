import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa"; // Icons for accordion toggle
import { prayers } from "../data/prayers"; // Importing prayers data

const SpiritualSupport = () => {
  const [openPrayer, setOpenPrayer] = useState(null); // To track which prayer is open

  const togglePrayer = (index) => {
    setOpenPrayer(openPrayer === index ? null : index); // Toggle the open prayer
  };

  return (
    <main className="p-5 bg-gray-50 animateFadeIn">
      <h1 className="text-xl font-bold font-poppins text-start mb-8 md:text-4xl">
        Spiritual Support for Job Seekers
      </h1>

      {/* Prayers Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4 md:text-2xl">
          Uplifting Prayers
        </h2>
        <p className="text-lg text-gray-600 mb-4 md:text-base">
          Find prayers for strength, guidance, and perseverance in your career
          journey.
        </p>

        {/* Accordion for Prayers */}
        <div className="space-y-4">
          {prayers.map((prayer, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md">
              <button
                className="w-full text-left p-5 text-lg font-semibold text-gray-800 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all flex justify-between items-center"
                onClick={() => togglePrayer(index)}
              >
                <span>{prayer.title}</span>
                <span className="text-xl">
                  {openPrayer === index ? (
                    <FaChevronUp className="text-gray-600" />
                  ) : (
                    <FaChevronDown className="text-gray-600" />
                  )}
                </span>
              </button>

              {/* Show content if prayer is open */}
              {openPrayer === index && (
                <div className="p-4 text-lg text-gray-600 bg-gray-50 rounded-b-lg shadow-md">
                  <p>{prayer.content}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Patron Saints Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4 md:text-2xl">
          Catholic Patron Saints for Job Seekers
        </h2>
        <p className="text-lg text-gray-600 mb-4 md:text-base">
          Here are some Catholic patron saints known for supporting job seekers
          and those in need.
        </p>
        <div className="space-y-8">
          {/* St. Cajetan */}
          <div className="flex space-x-6 items-center">
            <img
              src="https://tse4.mm.bing.net/th?id=OIP.pX4zJheeiqnMmGgNuy_pNAHaJL&pid=Api"
              alt="St. Cajetan"
              className="w-24 h-24 object-cover rounded-full shadow-md"
            />
            <div>
              <h3 className="text-xl font-semibold text-gray-800">
                St. Cajetan
              </h3>
              <p className="text-lg text-gray-600 mt-2">
                St. Cajetan is the patron saint of job seekers and the
                unemployed. He founded the Theatine order and worked to provide
                resources for the poor.
              </p>
              <a
                href="https://en.wikipedia.org/wiki/Saint_Cajetan"
                className="text-blue-600 hover:text-blue-400 mt-2 inline-block"
                target="_blank"
                rel="noopener noreferrer"
              >
                Read more
              </a>
            </div>
          </div>
          {/* St. Joseph the Worker */}
          <div className="flex space-x-6 items-center">
            <img
              src="https://tse3.mm.bing.net/th?id=OIP.GQEoVAJTXOFyvebY86rKAgHaHa&r=0&pid=Api"
              alt="St. Joseph"
              className="w-24 h-24 object-cover rounded-full shadow-md"
            />
            <div>
              <h3 className="text-xl font-semibold text-gray-800">
                St. Joseph the Worker
              </h3>
              <p className="text-lg text-gray-600 mt-2">
                St. Joseph is the patron saint of workers. He is the perfect
                example of work, dedication, and faithfulness to God.
              </p>
              <a
                href="https://www.catholic.org/saints/saint.php?saint_id=410"
                className="text-blue-600 hover:text-blue-400 mt-2 inline-block"
                target="_blank"
                rel="noopener noreferrer"
              >
                Read more
              </a>
            </div>
          </div>
          {/* St. Homobonus */}
          <div className="flex space-x-6 items-center">
            <img
              src="https://tse4.mm.bing.net/th?id=OIP.wOIwLIzGL7RG-i5qxuWSqwHaKT&pid=Api"
              alt="St. Homobonus"
              className="w-24 h-24 object-cover rounded-full shadow-md"
            />
            <div>
              <h3 className="text-xl font-semibold text-gray-800">
                St. Homobonus
              </h3>
              <p className="text-lg text-gray-600 mt-2">
                St. Homobonus is the patron saint of businessmen and women. He
                is known for his integrity and honesty in business.
              </p>
              <a
                href="https://www.catholicnewsagency.com/saint/st-homobonus"
                className="text-blue-600 hover:text-blue-400 mt-2 inline-block"
                target="_blank"
                rel="noopener noreferrer"
              >
                Read more
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default SpiritualSupport;
