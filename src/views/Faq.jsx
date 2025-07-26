import Accordion from "../components/Accordion"; // Import Accordion component
import { faqData } from "../data/faq"; // Import FAQ data
import HexagonGrid from "../components/HexagonGrid"; // Importing HexagonGrid component
import SEO from "../components/SEO";
import { useRef, useEffect } from "react";

const Faq = () => {
  const buttonRefs = useRef([]);

    // Generate FAQ Schema from existing data
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map(item => ({
      "@type": "Question",
      "name": item.title,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.content.replace(/<[^>]*>/g, '') // Strip HTML for schema
      }
    }))
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
        title="FAQ - St. Jude Career Alliance"
        description="Find answers to common questions about St. Jude Career Alliance, our programs, and how we can support you in your job search or career change."
        image="https://stjudecareeralliance.com/assets/og-image.png"
        url="https://stjudecareeralliance.com/faq"
        keywords="FAQ, questions, career coaching, job search, St. Jude Career Alliance, employment assistance"
        schema={faqSchema}
      />
      <HexagonGrid />
      <main
        className="py-12 px-4 sm:px-8 lg:px-12"
        role="main"
        aria-labelledby="faq-heading"
      >
        <h1
          id="faq-heading"
          className="text-4xl md:text-5xl font-bold font-poppins mb-12 text-center sm:text-3xl"
          style={{ color: "#23446d" }}
        >
          Frequently Asked Questions
        </h1>
        <ul className="space-y-2" role="list">
          {faqData.map((item, index) => (
            <li key={item.id} role="listitem">
              <Accordion
                item={item}
                buttonRef={(el) => (buttonRefs.current[index] = el)}
                index={index}
              />
            </li>
          ))}
        </ul>
      </main>
    </>
  );
};

export default Faq;
