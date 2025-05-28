import { useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/20/solid";

export default function Accordion({ item }) {
  const [openId, setOpenId] = useState(null);

  const toggle = () => {
    setOpenId(openId === item.id ? null : item.id);
  };

  const isOpen = openId === item.id;

  return (
    <div className="border-t first:border-t-0 border-[#244670] max-w-2xl mx-auto ">
      <button
        onClick={toggle}
        className={`w-full  flex justify-between items-center px-5 py-4 text-left transition-colors duration-300 ${
          isOpen ? "bg-[#244670] text-white" : "bg-gray-200 text-gray-800"
        }`}
        aria-expanded={isOpen}
      >
        <span className="text-sm font-semibold">{item.title}</span>
        {isOpen ? (
          <ChevronUpIcon className="w-5 h-5 text-white" />
        ) : (
          <ChevronDownIcon className="w-5 h-5 text-[#244670]" />
        )}
      </button>

      <div
        className={`overflow-hidden px-5 text-sm text-gray-700 transition-all duration-300 ${
          isOpen ? "max-h-96 py-3 bg-[#f1f5f9]" : "max-h-0 py-0"
        }`}
        style={{ transitionProperty: "max-height, padding" }}
        dangerouslySetInnerHTML={{ __html: item.content }}
      />
    </div>
  );
}
