import Accordion from "../components/Accordion"; // Import Accordion component
import { faqData } from "../data/faq"; // Import FAQ data

const Faq = () => {
  return (
    <main className="p-5 mb-20 animateFadeIn">
      <h1 className="text-xl font-bold font-poppins text-start mb-8 md:text-4xl">
        FAQ
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
  );
};

export default Faq;
