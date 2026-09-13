import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa6";

import doctorFaq from "../assets/faq.jpg";

const faqs = [
  {
    question: "How do I book an appointment?",
    answer: "Choose a doctor, select a time, and confirm your visit online.",
  },
  {
    question: "Do you offer online consultations?",
    answer:
      "Yes, virtual consultations are available for selected departments.",
  },
  {
    question: "What should I bring to my visit?",
    answer:
      "Please bring your ID, medical records, prescriptions, test results, and insurance details if available.",
  },
  {
    question: "Can I reschedule my appointment?",
    answer:
      "Yes. You can contact our medical center to reschedule your appointment. We recommend notifying us as early as possible.",
  },
  {
    question: "Do you accept insurance?",
    answer:
      "We accept selected insurance providers. Please contact us before your visit to confirm your coverage.",
  },
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFAQ = index => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="relative overflow-hidden bg-gray-100 px-5 py-20 lg:px-8 lg:py-24">
      <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[0.9fr_1.3fr] lg:gap-16">
        {/* LEFT SIDE */}
        <div className="relative">
          {/* HEADER */}
          <div className="relative z-10">
            <span className="text-sm font-semibold uppercase tracking-[0.3em] text-[#2086b5]">
              FAQ
            </span>

            <h2 className="mt-5 max-w-lg text-4xl font-bold leading-[1.05] text-[#102A43] sm:text-5xl lg:text-[58px]">
              Frequently Asked
              <span className="block text-[#1389ad]">Questions</span>
            </h2>

            <p className="mt-5 max-w-md text-lg leading-6 text-slate-500">
              Quick answers about appointments, doctors, and patient care.
            </p>
          </div>

          {/* DOCTOR IMAGE */}
          <div className="relative flex min-h-110 items-end justify-center lg:mt-0 lg:min-h-85">
            <img
              src={doctorFaq}
              alt="Doctor"
              className="relative z-10 max-h-125 w-auto object-contain rounded-md"
            />
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="space-y-4">
          {faqs.map((item, index) => {
            const isOpen = activeIndex === index;

            return (
              <div
                key={index}
                className={`overflow-hidden rounded-[26px] border bg-white transition-all duration-300
                ${isOpen ? "border-[#dceff7] shadow-[0_16px_50px_rgba(31,113,153,0.09)]" : "border-[#e8f1f5] shadow-[0_8px_30px_rgba(31,113,153,0.05)]"}`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex w-full cursor-pointer items-start gap-5 p-5 text-left sm:p-6"
                >
                  {/* NUMBER */}
                  <div
                    className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-full text-xl font-bold transition
                    ${index % 2 === 0 ? "bg-[#d9f5f0] text-[#087d91]" : "bg-[#dff1ff] text-[#1478b6]"}`}
                  >
                    {index + 1}
                  </div>

                  {/* TEXT */}
                  <div className="min-w-0 flex-1 pt-1">
                    <h3 className="pr-2 text-lg font-bold text-[#102A43] sm:text-xl">
                      {item.question}
                    </h3>

                    <div
                      className={`grid transition-all duration-300 ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                    >
                      <div className="overflow-hidden">
                        <p className="mt-4 max-w-xl text-sm leading-6 text-slate-500 sm:text-base">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* PLUS / MINUS */}
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#edf7fd] text-[#1878aa] transition duration-300">
                    {isOpen ? (
                      <FaMinus className="text-lg" />
                    ) : (
                      <FaPlus className="text-lg" />
                    )}
                  </div>
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
