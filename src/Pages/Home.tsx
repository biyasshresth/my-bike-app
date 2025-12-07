import { Link } from "react-router-dom";
import React, { useEffect, useState, useMemo } from "react";

import Banner1 from "../assets/Banner1.png";
import Banner2 from "../assets/Banner2.png";
import Banner3 from "../assets/Banner3.png";
import Banner4 from "../assets/Banner4.png";
import Banner5 from "../assets/Banner5.png";
import Banner6 from "../assets/Banner6.png";
import MtRacing from "../assets/MtRacing.png";
import MtEnduro from "../assets/MtEnduro.png";
import MtModified from "../assets/MtModified.png";
import MtAdventure from "../assets/YamahaAdv.png";
import MtCafeRacer from "../assets/MtCafeRacer.png";

import { FaFacebook, FaYoutube, FaInstagram } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { IoIosArrowDropdownCircle } from "react-icons/io";

// FAQ DATA
interface FAQ {
  id: number;
  q: string;
  a: string;
  tags: string[];
}

const faqs: FAQ[] = [
  {
    id: 1,
    q: "What are your business hours?",
    a: "We're open Sunday-Friday, 10:00 AM - 5:00 PM.",
    tags: ["Site Visits", "Sales Desk", "Handover"],
  },
  {
    id: 2,
    q: "Can I track my order?",
    a: "Yes. Use your booking ID to track progress from your dashboard.",
    tags: ["Booking", "Payment Plan", "Milestones"],
  },
  {
    id: 3,
    q: "How do I reset my password?",
    a: "Click “Forgot Password” and follow the instructions.",
    tags: ["Account", "Security", "Support"],
  },
  {
    id: 4,
    q: "Do you offer international shipping?",
    a: "We support international buyers with remote booking and KYC.",
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
  {
    id: 7,
    q: "Can I schedule a private site visit?",
    a: "Yes, private site visits can be scheduled in advance via our booking system. Please allow at least 48 hours notice to confirm your appointment.",
    tags: ["Site Visit", "Appointment", "Private Tour"],
  },
];

const cardsData = [
  { name: "MtRacing", img: MtRacing, link: "/mt-racing" },
  { name: "MtEnduro", img: MtEnduro, link: "/mt-enduro" },
  { name: "MtModified", img: MtModified, link: "/mt-modified" },
  { name: "MtAdventure", img: MtAdventure, link: "/mt-adventure" },
  { name: "MtCafeRacer", img: MtCafeRacer, link: "/mt-cafe-racer" },
];

const banners = [
  { src: Banner1, alt: "Banner1" },
  { src: Banner2, alt: "Banner2" },
  { src: Banner3, alt: "Banner3" },
  { src: Banner4, alt: "Banner4" },
  { src: Banner5, alt: "Banner5" },
  { src: Banner6, alt: "Banner6" },
];

const Home: React.FC = () => {
  const [bannerIndex, setBannerIndex] = useState(0);
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const [query, setQuery] = useState("");
  const [openId, setOpenId] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Banner rotation
  useEffect(() => {
    const interval = setInterval(
      () => setBannerIndex((prev) => (prev + 1) % banners.length),
      3000
    );
    return () => clearInterval(interval);
  }, []);

  // Cards rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCardIndex((prev) => (prev + 1) % cardsData.length);
    }, 1500);

    return () => clearInterval(interval);
  }, []);
  const visibleCards = [
    cardsData[activeCardIndex],
    cardsData[(activeCardIndex + 1) % cardsData.length],
    cardsData[(activeCardIndex + 2) % cardsData.length],
  ];

  const filteredFaqs = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return faqs;
    return faqs.filter(
      (f) =>
        f.q.toLowerCase().includes(q) ||
        f.a.toLowerCase().includes(q) ||
        f.tags.some((t) => t.toLowerCase().includes(q))
    );
  }, [query]);

  return (
    <div className="relative w-full bg-gray-900 text-white overflow-x-hidden">
      {/* BANNERS */}
      <div className="relative flex justify-start w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[600px]">
        {" "}
        {banners.map((b, i) => (
          <img
            key={b.alt}
            src={b.src}
            alt={b.alt}
            className={`absolute inset-0 w-full h-full blur-sm  object-cover transition-opacity duration-700 ease-in-out ${
              i === bannerIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-black/40" />
        {/* HERO CONTENT OVERLAY */}
        <div className="absolute inset-0 flex flex-col gap-4  items-start mt-24 px-4 sm:px-6 lg:px-16 text-left">
          <p className="text-xs sm:text-sm text-white/80 uppercase mb-2">
            Built to beat the best
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold uppercase drop-shadow-lg text-white">
            2026 MT-15 300 XC-W HARDENDURO
          </h1>
          <Link
            to="/explore-more"
            className="mt-4 sm:mt-6 bg-gray-900  hover:bg-[#C4CBCA] hover:text-gray-900 hover:scale-105 hover:shadow-2xl text-white uppercase font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded shadow-lg"
          >
            Explore more
          </Link>
        </div>
      </div>

      {/* BANNER DOTS */}
      <div className="relative z-10 mt-4 sm:mt-6 flex justify-center gap-2 sm:gap-3">
        {banners.map((_, i) => (
          <button
            type="button"
            key={i}
            aria-label={`Show banner ${i + 1}`}
            onClick={() => setBannerIndex(i)}
            className={`h-1 sm:w-6 sm:h-2 rounded-full transition-all duration-300 ${
              i === bannerIndex ? "bg-blue-300 w-6 sm:w-6" : "bg-white/60"
            }`}
          />
        ))}
      </div>

      {/* FEATURED MOTORCYCLES */}
      <section className="mt-6 lg:mt-20 px-2 sm:px-6 lg:px-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6">
          Featured Motorcycles
        </h2>

        {/* DESKTOP: show 3 rotating cards */}
        <div className="hidden sm:flex lg:justify-center gap-4 lg:gap-8">
          {[
            cardsData[activeCardIndex],
            cardsData[(activeCardIndex + 1) % cardsData.length],
            cardsData[(activeCardIndex + 2) % cardsData.length],
          ].map((card, index) => {
            const isActive = index === 1;  
            return (
              <div
                key={card.name}
                className={`flex flex-col items-center transition-all duration-700 ${
                  isActive
                    ? "scale-105 lg:scale-110 z-10"
                    : "scale-95 opacity-70"
                } w-[28%]`}
              >
                <Link to={card.link}>
                  <div className="bg-white rounded-2xl overflow-hidden w-full h-80 shadow-lg">
                    <img
                      src={card.img}
                      alt={card.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </Link>
                <p
                  className={`mt-3 text-xl font-semibold transition-all duration-700 ${
                    isActive ? "text-purple-700 drop-shadow-xl" : "text-white/70"
                  }`}
                >
                  {card.name}
                </p>
              </div>
            );
          })}
        </div>

        {/* MOBILE: show 1 rotating card */}
        <div className="flex sm:hidden justify-center">
          <div className="flex flex-col items-center w-80">
            <Link to={cardsData[activeCardIndex].link}>
              <div className="bg-gray-300 rounded-2xl overflow-hidden w-full h-64 shadow-lg">
                <img
                  src={cardsData[activeCardIndex].img}
                  alt={cardsData[activeCardIndex].name}
                  className="w-full h-full object-cover"
                />
              </div>
            </Link>
            <p className="mt-3 text-lg font-semibold text-white/70">
              {cardsData[activeCardIndex].name}
            </p>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="relative bg-gray-900 mt-20 lg:mt-28 px-2 sm:px-6 lg:px-16 pb-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-6">
            <img
              src="YamahaLogo.svg"
              alt="Yamaha Logo"
              className="w-12 sm:w-16 mx-auto mb-2"
            />
            <h2 className="text-2xl sm:text-3xl font-semibold mb-1">
              Frequently Asked Questions
            </h2>
            <p className="text-sm text-gray-300">
              Have Question? We are here to help
            </p>
          </div>

          {/* Search bar */}
          <div className="mx-auto mb-8 max-w-xl flex items-center rounded-full border border-blue-200 bg-gray-800 px-4 py-2 shadow-lg">
            <input
              type="text"
              placeholder="Enter keyword"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full bg-transparent px-1 text-sm text-gray-200 placeholder-gray-400 outline-none"
            />
            <FiSearch className="h-5 w-5 text-gray-400" />
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
                      ${
                        isOpen
                          ? "rotate-180 text-white"
                          : "rotate-0 text-gray-900"
                      }
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
          </div>
        </div>
      </section>

      {/* NOTE SECTION */}
      <section className="mx-auto mb-12 border-t border-gray-200 bg-gray-900 px-4 sm:px-16 lg:px-72 py-10 text-white/80">
        <div className="mx-auto max-w-3xl space-y-6">
          <h2 className="text-center text-2xl sm:text-3xl font-bold text-white">
            Note
          </h2>

          <p className="text-center leading-relaxed">
            The stated discount is exclusively available at participating,
            authorized Mt-15 dealers. All information is non-binding. Printing,
            layout, and typographical errors as well as other mistakes are
            reserved. Information may be changed at any time without prior
            notice.
          </p>

          <p className="text-center leading-relaxed">
            The illustrated vehicles may vary in selected details from the
            production models and some illustrations feature optional equipment
            available at additional cost. All information concerning the scope
            of supply, appearance, services, dimensions and weights is
            non-binding and specified with the proviso that errors may occur;
            such information is subject to change without notice. Model
            specifications may vary by country. Consumption values refer to the
            roadworthy series condition at factory delivery.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
