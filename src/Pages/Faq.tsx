import React, { useMemo, useState, useEffect, forwardRef } from "react";
import { FiSearch } from "react-icons/fi";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import Footer from "./Footer";
import Header from "./Header";

const faqs: FAQ[] = [
  {
    id: 1,
    q: "What are your business hours?",
    a: "We’re open Sunday–Friday, 10:00 AM – 5:00 PM. Site visits can be scheduled between 10:00 AM – 5:00 PM. For weekend launches or handovers, we announce extended hours in advance.",
    tags: ["Site Visits", "Sales Desk", "Handover"],
  },
  {
    id: 2,
    q: "Can I track my order?",
    a: "Yes. If you booked a plot/unit, use your booking ID to track milestones like document verification, payment schedule, and handover readiness from your dashboard.",
    tags: ["Booking", "Payment Plan", "Milestones"],
  },
  {
    id: 3,
    q: "How do I reset my password?",
    a: "Click “Forgot Password” on the login page, enter your registered email/phone, and follow the link/OTP we send. For account security, the link expires in 15 minutes.",
    tags: ["Account", "Security", "Support"],
  },
  {
    id: 4,
    q: "Do you offer international shipping?",
    a: "Not applicable for properties—however, we support international buyers with remote booking, KYC, and video site tours. All documents are shared digitally and couriered on request.",
    tags: ["NRI/International", "KYC", "Remote Tour"],
  },
  {
    id: 5,
    q: "What documents are required to buy land?",
    a: "Typically: Title Deed, Parcel Map, Tax Clearance, Seller’s ID, and a No-Encumbrance Certificate. Local requirements may add revenue records and a verified sale agreement.",
    tags: ["Title Deed", "Tax Clearance", "NEC"],
  },
  {
    id: 6,
    q: "Are utilities and road access available?",
    a: "Yes on our serviced plots: graded road access, marked plot boundaries, drainage, and utility points as per the project brochure. Verify availability phase-wise in your dashboard.",
    tags: ["Road Access", "Utilities", "Serviced Plots"],
  },
];

interface FAQ {
  id: number;
  q: string;
  a: string;
  tags: string[];
}

const Faq = forwardRef<HTMLDivElement>((props, ref) => {
  const [query, setQuery] = useState<string>("");
  const [openId, setOpenId] = useState<number | null>(null);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredFaqs = useMemo(() => {
    const ql = query.trim().toLowerCase();
    if (!ql) return faqs;
    return faqs.filter(
      (f) =>
        f.q.toLowerCase().includes(ql) ||
        f.a.toLowerCase().includes(ql) ||
        f.tags.some((t) => t.toLowerCase().includes(ql))
    );
  }, [query]);

  return (
    <>
      <section
        ref={ref}
        className="relative min-h-screen overflow-hidden bg-gray-900"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none  absolute inset-x-4 top-4 mx-auto h-[1280px] max-w-6xl rounded-3xl border border-gray-500 bg-gradient-to-b from-gray-700 to-gray-800"
        />
        <div
          aria-hidden="false"
          className="pointer-events-none absolute inset-x-0 bottom-0 h-16 rounded-t-[3rem] bg-gray-700"
        />

        {/* Content wrapper */}
        <div className="relative z-10 mx-auto max-w-4xl px-4 pb-24 pt-16 sm:px-6 md:pt-20">
          {/* Title + Logo */}
          <div className="mb-4 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <img
              src="YamahaLogo1.png"
              alt="Yamaha Logo"
              className="w-12 h-12 sm:w-16 sm:h-16 object-contain"
            />

            <h1 className="text-center text-3xl font-semibold text-gray-200 sm:text-4xl">
              Frequently Asked Questions
            </h1>
          </div>

          {/* Subtitle */}
          <p className="mb-6 text-center text-sm text-gray-200">
            Have Question? We are here to help
          </p>

          {/* Search bar */}
          <div className="w-full mx-auto mb-8 max-w-xl flex items-center rounded-full border border-blue-200 bg-gray-800 px-2 sm:px-3  py-2 shadow-lg">
            <input
              type="text"
              placeholder="Enter keyword"
              value={query}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setQuery(e.target.value)
              }
              className="w-full bg-transparent px-1 text-sm text-gray-700 placeholder-gray-400 outline-none"
              aria-label="Search FAQs"
            />
            <FiSearch
              className="h-5 w-5 text-gray-400 shrink-0"
              aria-hidden="true"
            />
          </div>

          {/* FAQ List */}
          <div className="space-y-3">
            {filteredFaqs.map((item) => {
              const isOpen = openId === item.id;
              const contentId = `faq-content-${item.id}`;
              return (
                <div
                  key={item.id}
                  className={`group overflow-hidden rounded-xl border border-blue-100 shadow-sm transition-all duration-300
    ${
      isOpen
        ? "bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white"
        : "bg-gray-300 text-gray-800"
    }
    hover:bg-gradient-to-r hover:from-gray-700 hover:via-gray-700 hover:to-gray-500 hover:text-white
  `}
                >
                  <button
                    type="button"
                    aria-controls={`faq-content-${item.id}`}
                    onClick={() => setOpenId(isOpen ? null : item.id)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition"
                  >
                    <div className="min-w-0">
                      <p
                        className={`truncate text-[15px] font-medium transition-colors duration-300
          ${isOpen ? "text-white" : "text-gray-800"}
          group-hover:text-white
        `}
                      >
                        {item.q}
                      </p>

                      <div className="mt-2 flex flex-wrap gap-2">
                        {item.tags.map((t) => (
                          <span
                            key={t}
                            className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium transition
              ${
                isOpen
                  ? "border-gray-300 text-gray-300"
                  : "border-gray-700 text-gray-700"
              }
              group-hover:text-gray-300 group-hover:border-gray-300
            `}
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    <IoIosArrowDropdownCircle
                      size={28}
                      className={`ml-4 flex-none transform transition-transform duration-300
        ${isOpen ? "rotate-180 text-white" : "rotate-0 text-gray-900"}
        group-hover:text-white hover:scale-125
      `}
                      aria-hidden="true"
                    />
                  </button>

                  {isOpen && (
                    <div
                      id={`faq-content-${item.id}`}
                      className="px-5 pb-5 pt-0 text-sm leading-6 text-gray-300"
                    >
                      <p>{item.a}</p>

                      <div className="mt-3 grid grid-cols-1 gap-2 text-xs sm:grid-cols-3">
                        <div className="rounded-lg bg-gray-800 px-3 py-2 ring-1 ring-inset ring-gray-700">
                          <span className="font-medium text-white">
                            Category:
                          </span>{" "}
                          {item.tags[0] || "General"}
                        </div>
                        <div className="rounded-lg bg-gray-800 px-3 py-2 ring-1 ring-inset ring-gray-700">
                          <span className="font-medium text-white">
                            Updated:
                          </span>{" "}
                          This month
                        </div>
                        <div className="rounded-lg bg-gray-800 px-3 py-2 ring-1 ring-inset ring-gray-700">
                          <span className="font-medium text-white">
                            Contact:
                          </span>{" "}
                          contact@YamahaNepal.com.np
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}

            {filteredFaqs.length === 0 && (
              <div className="rounded-xl border border-blue-100 bg-white p-6 text-center text-sm text-gray-500">
                No results for “{query}”.
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
});

export default Faq;
