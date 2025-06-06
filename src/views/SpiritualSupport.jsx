import { useState, useRef, useEffect } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { prayers } from "../data/prayers";
import HexagonGrid from "../components/HexagonGrid";
import SEO from "../components/SEO";

const SpiritualSupport = () => {
  const [openPrayer, setOpenPrayer] = useState(null);
  const buttonRefs = useRef([]);

  const togglePrayer = (index) => {
    setOpenPrayer(openPrayer === index ? null : index);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      const focusable = buttonRefs.current.filter(Boolean);
      const currentIndex = focusable.indexOf(document.activeElement);

      if (e.key === "ArrowDown") {
        e.preventDefault();
        const next = (currentIndex + 1) % focusable.length;
        focusable[next].focus();
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        const prev = (currentIndex - 1 + focusable.length) % focusable.length;
        focusable[prev].focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      <SEO
        title="Spiritual Support - St. Jude Career Alliance"
        description="Explore spiritual support through prayers and patron saints for job seekers. Find strength, guidance, and community in your career journey."
        image="https://stjudecareeralliance.com/assets/og-image.png"
        url="https://stjudecareeralliance.com/spiritual-support"
      />
      <HexagonGrid />

      <main
        className="py-12 px-4 sm:px-6 lg:px-8 animateFadeIn relative overflow-visible pb-32"
        role="main"
        aria-labelledby="spiritual-heading"
      >
        <div className="max-w-5xl mx-auto relative z-10">
          <h1
            id="spiritual-heading"
            className="text-4xl font-bold text-center text-darkBlue font-sans mb-10 md:text-5xl sm:text-3xl"
          >
            Spiritual Support
          </h1>

          <section className="mb-16" aria-labelledby="prayers-heading">
            <h2
              id="prayers-heading"
              className="text-3xl font-semibold text-darkBlue mb-6 md:text-2xl"
            >
              Uplifting Prayers
            </h2>
            <p className="text-lg text-primary mb-8">
              Find prayers for strength, guidance, and perseverance in your
              career journey.
            </p>

            <div className="space-y-4">
              {prayers.map((prayer, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-sm overflow-hidden"
                >
                  <button
                    ref={(el) => (buttonRefs.current[index] = el)}
                    className={`w-full text-left px-6 py-5 text-lg font-semibold text-darkBlue ${
                      openPrayer === index ? "bg-secondary/10" : "bg-white"
                    } hover:bg-secondary/10 focus:outline-none focus:ring-2 focus:ring-secondary transition-all flex justify-between items-center`}
                    onClick={() => togglePrayer(index)}
                    aria-expanded={openPrayer === index}
                    aria-controls={`prayer-content-${index}`}
                    id={`prayer-button-${index}`}
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

                  <div
                    id={`prayer-content-${index}`}
                    role="region"
                    aria-labelledby={`prayer-button-${index}`}
                    hidden={openPrayer !== index}
                    className="px-6 py-4 text-lg text-primary bg-white"
                  >
                    <p>{prayer.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

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
                  src="./assets/saints/cajetan.png"
                  alt="St. Cajetan"
                  className="w-24 h-24 object-cover rounded-full mb-4"
                />
                <h3 className="text-xl font-semibold text-darkBlue">
                  St. Cajetan
                </h3>
                <p className="text-primary mt-2 mb-4">
                  Patron saint of job seekers and the unemployed, known for
                  aiding the poor.
                </p>
                <a
                  href="https://www.catholicculture.org/culture/liturgicalyear/prayers/view.cfm?id=1318"
                  className="text-secondary underline hover:text-darkBlue mb-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Novena
                </a>
                <a
                  href="https://catholicnovenaapp.com/novenas/st-cajetan-novena/"
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
                  src="./assets/saints/joseph.png"
                  alt="St. Joseph the Worker"
                  className="w-24 h-24 object-cover rounded-full mb-4"
                />
                <h3 className="text-xl font-semibold text-darkBlue">
                  St. Joseph the Worker
                </h3>
                <p className="text-primary mt-2 mb-4">
                  Patron saint of workers, exemplifying dedication and faith.
                </p>
                <a
                  href="https://hozana.org/en/prayer/novena/st-joseph/employment?utm_source=chatgpt.com"
                  className="text-secondary underline ml-2 hover:text-darkBlue mb-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Novena
                </a>
                <a
                  href="https://www.carmelitefriars.org/novena-to-st-joseph-the-worker"
                  className="inline-block px-4 py-2 bg-secondary text-white rounded-full hover:bg-deepTeal transition"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read More
                </a>
              </div>

              {/* St. Jude Thaddeus */}
              <div className="bg-white rounded-lg shadow-sm p-6 flex flex-col items-center text-center">
                <img
                  src="./assets/saints/jude.png"
                  alt="St. Jude Thaddeus"
                  className="w-24 h-24 object-cover rounded-full mb-4"
                />
                <h3 className="text-xl font-semibold text-darkBlue">
                  St. Jude Thaddeus
                </h3>
                <p className="text-primary mt-2 mb-4">
                  Patron saint of desperate situations and hopeless cases,
                  invoked for urgent needs.
                </p>
                <a
                  href="https://www.ewtn.com/catholicism/devotions/novena-to-st-jude--desperate-situations-and-hopeless-cases-305"
                  className="text-secondary underline hover:text-darkBlue mb-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Novena
                </a>
                <a
                  href="https://shrineofstjude.org/the-shrine/st-jude/"
                  className="inline-block px-4 py-2 bg-secondary text-white rounded-full hover:bg-deepTeal transition"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read More
                </a>
              </div>

              {/* St. Anthony of Padua */}
              <div className="bg-white rounded-lg shadow-sm p-6 flex flex-col items-center text-center">
                <img
                  src="./assets/saints/anthony.png"
                  alt="St. Anthony of Padua"
                  className="w-24 h-24 object-cover rounded-full mb-4"
                />
                <h3 className="text-xl font-semibold text-darkBlue">
                  St. Anthony of Padua
                </h3>
                <p className="text-primary mt-2 mb-4">
                  Patron saint of lost items and causes, known for answering
                  prayers for help in finding jobs and opportunities.
                </p>
                <a
                  href="https://hallow.com/blog/saint-anthony-novena/"
                  className="text-secondary underline hover:text-darkBlue mb-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Novena
                </a>
                <a
                  href="https://www.stanthony.org/who-st-anthony/"
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
    </>
  );
};

export default SpiritualSupport;
