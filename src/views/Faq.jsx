import Accordion from "../components/Accordion"; // Import Accordion component
import { faqData } from "../data/faq"; // Import FAQ data
import HexagonGrid from "../components/HexagonGrid"; // Importing HexagonGrid component

const Faq = () => {
  return (
    <>
      <HexagonGrid />
      <main className={`py-12 px-4 sm:px-8 lg:px-12 `}>
        <h1
          className="text-4xl md:text-5xl font-bold font-poppins mb-12 text-center sm:text-3xl"
          style={{ color: "#23446d" }} // --color-darkBlue
        >
          Frequently Asked Questions
        </h1>
        <ul className="space-y-2">
          {/* Use <ul> to wrap the FAQ list */}
          {faqData.map((item) => (
            <li key={item.id}>
              {/* Ensure each item has a unique key */}
              <Accordion item={item} /> {/* Passing each item to Accordion */}
            </li>
          ))}
        </ul>
      </main>
    </>
  );
};

export default Faq;
