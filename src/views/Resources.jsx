import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Resources = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace("#", ""));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [hash]);

  return (
    <main className="p-5 bg-gray-50 animateFadeIn">
      <h1 className="text-xl font-bold font-poppins text-start mb-8 md:text-4xl">
        Resources for Your Career Journey
      </h1>
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4 md:text-2xl">
          Resume Templates
        </h2>
        <p className="text-lg text-gray-600 mb-4 md:text-base">
          Download our professional resume templates to get started on your
          career path.
        </p>
        <a href="#" className="text-blue-600 hover:underline">
          Download
        </a>
      </section>
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4 md:text-2xl">
          Job Search Tips
        </h2>
        <p className="text-lg text-gray-600 mb-4 md:text-base">
          Find our expert tips for an effective job search.
        </p>
        <a href="#" className="text-blue-600 hover:underline">
          Download
        </a>
      </section>
      <section id="networking-events" className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4 md:text-2xl">
          Networking Events
        </h2>
        <ul className="list-disc pl-6">
          <li className="text-lg text-gray-600 mb-2 md:text-base">
            Local Networking Event 1
          </li>
          <li className="text-lg text-gray-600 md:text-base">
            Local Networking Event 2
          </li>
        </ul>
      </section>
      <section>
        <h2 className="text-3xl font-semibold text-gray-800 mb-4 md:text-2xl">
          Using AI in Job Search
        </h2>
        <p className="text-lg text-gray-600 mb-4 md:text-base">
          Learn how to use AI tools to enhance your resume and job search.
        </p>
        <a href="#" className="text-blue-600 hover:underline">
          Download
        </a>
      </section>
    </main>
  );
};

export default Resources;
